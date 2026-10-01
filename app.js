// Application Logic for Farklin Masterclass Web App
// Featuring Interactive Calculators, Dynamic PK Simulations, and Clinical Case Solvers

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Initialize KaTeX formulas if autoRender is available
  renderMathInDocument();

  // Initialize PK Chart Simulation
  initPkSimulator();

  // Initialize Interactive Calculators
  initCockcroftGaultCalc();
  initChildPughCalc();
  initRidCalc();
  initDettliCalc();

  // Initialize Quiz Engine
  initQuizEngine();

  // Initialize Tab Navigation
  initTabNavigation();

  // Initialize Case Pemantik comparison cards
  initPemantikCards();

  // Initialize Grand Round accordion
  initGrandRoundAccordion();
});

// Helper for rendering Math formulas via KaTeX (Render Exactly Once)
function renderMathInDocument() {
  document.querySelectorAll('.math-formula').forEach(el => {
    if (el.dataset.rendered === "true") return;

    let raw = el.getAttribute('data-formula');
    if (!raw) {
      raw = el.innerText.trim();
      el.setAttribute('data-formula', raw);
    }

    try {
      if (window.katex) {
        katex.render(raw, el, {
          throwOnError: false,
          displayMode: el.classList.contains('math-display')
        });
        el.dataset.rendered = "true";
      }
    } catch (e) {
      console.warn('KaTeX render error:', e);
    }
  });
}

// 1. Tab Navigation System
function initTabNavigation() {
  const tabButtons = document.querySelectorAll('.nav-tab');
  const contentSections = document.querySelectorAll('.content-section');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      contentSections.forEach(section => {
        if (section.id === targetId) {
          section.classList.remove('hidden');
          section.classList.add('animate-fade-in');
        } else {
          section.classList.add('hidden');
          section.classList.remove('animate-fade-in');
        }
      });

      // If PK simulator is in view, resize chart
      if (targetId === 'tab-simulator' && window.pkChartInstance) {
        window.pkChartInstance.resize();
        updatePkSimulation();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// 2. PK Chart Simulator (Chart.js Engine)
let pkChart = null;
function initPkSimulator() {
  const ctx = document.getElementById('pkChartCanvas');
  if (!ctx) return;

  const labels = [];
  for (let t = 0; t <= 48; t += 0.5) {
    labels.push(`${t}h`);
  }

  pkChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Fungsi Ginjal Normal (Dosis Standar 500mg q12h)',
          data: [],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.08)',
          borderWidth: 2.5,
          tension: 0.3,
          fill: true
        },
        {
          label: 'Ginjal Rusak Tanpa Penyesuaian Dosis (OVERDOSE/TOKSIK ⚠️)',
          data: [],
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.08)',
          borderWidth: 2.5,
          borderDash: [5, 5],
          tension: 0.3,
          fill: true
        },
        {
          label: 'Ginjal Rusak Dosis Disesuaikan (Regimen Aman)',
          data: [],
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139, 92, 246, 0.12)',
          borderWidth: 3,
          tension: 0.3,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#e2e8f0',
            font: { family: 'sans-serif', size: 12 }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          titleColor: '#f8fafc',
          bodyColor: '#cbd5e1',
          borderColor: '#475569',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8' },
          title: { display: true, text: 'Waktu (Jam)', color: '#94a3b8' }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8' },
          title: { display: true, text: 'Konsentrasi Plasma Cp (mg/L)', color: '#94a3b8' },
          beginAtZero: true
        }
      }
    }
  });

  window.pkChartInstance = pkChart;

  // Listeners for simulation sliders
  const sliders = ['simDose', 'simCrCl', 'simFe', 'simStrategy'];
  sliders.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updatePkSimulation);
    }
  });

  updatePkSimulation();
}

function updatePkSimulation() {
  if (!pkChart) return;

  const dose = parseFloat(document.getElementById('simDose')?.value || 500);
  const crcl = parseFloat(document.getElementById('simCrCl')?.value || 25);
  const fe = parseFloat(document.getElementById('simFe')?.value || 0.7);
  const strategy = document.getElementById('simStrategy')?.value || 'dose_reduction';

  // Update slider display labels
  const doseVal = document.getElementById('simDoseVal');
  if (doseVal) doseVal.innerText = `${dose} mg`;
  const crclVal = document.getElementById('simCrClVal');
  if (crclVal) crclVal.innerText = `${crcl} mL/min`;
  const feVal = document.getElementById('simFeVal');
  if (feVal) feVal.innerText = `${(fe * 100).toFixed(0)}%`;

  // Normal PK parameters
  const Vd = 35; // L
  const CL_normal = 8.0; // L/h
  const k_normal = CL_normal / Vd; // ~0.228 /h, t1/2 ~ 3h
  const tau_normal = 12; // hours

  // Impaired kidney calculation (Dettli Formula)
  const KF = Math.min(1.0, Math.max(0.05, crcl / 100));
  const Q = Math.max(0.1, 1 - fe * (1 - KF));
  const CL_impaired = CL_normal * Q;
  const k_impaired = CL_impaired / Vd;

  // Simulation time steps
  const normalCurve = [];
  const unadjustedCurve = [];
  const adjustedCurve = [];

  // Determine adjusted regimen
  let adjDose = dose;
  let adjTau = tau_normal;
  if (strategy === 'dose_reduction') {
    adjDose = Math.round(dose * Q);
    adjTau = tau_normal;
  } else if (strategy === 'interval_extension') {
    adjDose = dose;
    adjTau = Math.round(tau_normal / Q);
  } else {
    // Combination
    adjDose = Math.round(dose * Math.sqrt(Q));
    adjTau = Math.round(tau_normal / Math.sqrt(Q));
  }

  // Generate concentration multi-dose superposition
  for (let t = 0; t <= 48; t += 0.5) {
    // Normal renal
    let cpNormal = 0;
    for (let doseTime = 0; doseTime <= t; doseTime += tau_normal) {
      const dt = t - doseTime;
      cpNormal += (dose / Vd) * Math.exp(-k_normal * dt);
    }
    normalCurve.push(parseFloat(cpNormal.toFixed(2)));

    // Impaired unadjusted
    let cpUnadj = 0;
    for (let doseTime = 0; doseTime <= t; doseTime += tau_normal) {
      const dt = t - doseTime;
      cpUnadj += (dose / Vd) * Math.exp(-k_impaired * dt);
    }
    unadjustedCurve.push(parseFloat(cpUnadj.toFixed(2)));

    // Impaired adjusted
    let cpAdj = 0;
    for (let doseTime = 0; doseTime <= t; doseTime += adjTau) {
      const dt = t - doseTime;
      cpAdj += (adjDose / Vd) * Math.exp(-k_impaired * dt);
    }
    adjustedCurve.push(parseFloat(cpAdj.toFixed(2)));
  }

  pkChart.data.datasets[0].data = normalCurve;
  pkChart.data.datasets[1].data = unadjustedCurve;
  pkChart.data.datasets[2].data = adjustedCurve;
  pkChart.update();

  // Update simulator summary cards
  const qFactorDisplay = document.getElementById('simQFactor');
  if (qFactorDisplay) qFactorDisplay.innerText = Q.toFixed(2);

  const tHalfNormal = document.getElementById('simTHalfNormal');
  if (tHalfNormal) tHalfNormal.innerText = `${(0.693 / k_normal).toFixed(1)} jam`;

  const tHalfImpaired = document.getElementById('simTHalfImpaired');
  if (tHalfImpaired) tHalfImpaired.innerText = `${(0.693 / k_impaired).toFixed(1)} jam`;

  const regimenRecommend = document.getElementById('simRegimenRecommend');
  if (regimenRecommend) {
    regimenRecommend.innerHTML = `<strong>Rekomendasi Regimen:</strong> ${adjDose} mg tiap ${adjTau} jam (Dosis awal normal ${dose} mg q12h disesuaikan).`;
  }
}

// 3. Calculator 1: Cockcroft-Gault Creatinine Clearance
function initCockcroftGaultCalc() {
  const form = document.getElementById('calc-crcl-form');
  if (!form) return;

  const calculate = () => {
    const age = parseFloat(document.getElementById('cg-age')?.value || 70);
    const weight = parseFloat(document.getElementById('cg-weight')?.value || 50);
    const scr = parseFloat(document.getElementById('cg-scr')?.value || 1.2);
    const gender = document.querySelector('input[name="cg-gender"]:checked')?.value || 'female';

    if (age <= 0 || weight <= 0 || scr <= 0) return;

    let crcl = ((140 - age) * weight) / (72 * scr);
    if (gender === 'female') {
      crcl *= 0.85;
    }

    const resultEl = document.getElementById('cg-result-val');
    const stageBadge = document.getElementById('cg-stage-badge');
    const adviceEl = document.getElementById('cg-advice');

    if (resultEl) resultEl.innerText = `${crcl.toFixed(1)} mL/min`;

    let stageText = '';
    let badgeClass = '';
    let adviceText = '';

    if (crcl >= 90) {
      stageText = 'Tahap 1: Fungsi Ginjal Normal / Minimal Terganggu';
      badgeClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      adviceText = 'Dosis obat standar. Tetap pantau hidrasi dan hindari polifarmasi nefrotoksik tanpa indikasi.';
    } else if (crcl >= 60) {
      stageText = 'Tahap 2: Penurunan Fungsi Ginjal Ringan';
      badgeClass = 'bg-teal-500/20 text-teal-300 border-teal-500/40';
      adviceText = 'Sebagian besar obat aman pada dosis standar. Waspada pada obat dengan indeks terapi sempit (TDM) bila fe tinggi.';
    } else if (crcl >= 30) {
      stageText = 'Tahap 3: Penurunan Fungsi Ginjal Sedang';
      badgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      adviceText = 'Wajib penyesuaian dosis untuk antibiotik ginjal (Siprofloksasin, Aminoglikosida). Metformin maksimal 1000 mg/hari (jika CrCl 30-45).';
    } else if (crcl >= 15) {
      stageText = 'Tahap 4: Penurunan Fungsi Ginjal Berat';
      badgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      adviceText = 'KONTRAINDIKASI Metformin (bahaya asidosis laktat!). Dosis antibiotik disunat 50-75% atau panjangkan interval. Hindari NSAID!';
    } else {
      stageText = 'Tahap 5: Gagal Ginjal Terminal (ESRD)';
      badgeClass = 'bg-red-700/30 text-red-200 border-red-500/60 font-bold';
      adviceText = 'Pasien memerlukan terapi dialisis / transplantasi. Dosis obat disesuaikan ketat berdasarkan klirens dializer (Renal Drug Handbook).';
    }

    if (stageBadge) {
      stageBadge.className = `inline-flex items-center px-3 py-1 rounded-full text-xs border font-medium ${badgeClass}`;
      stageBadge.innerText = stageText;
    }
    if (adviceEl) {
      adviceEl.innerText = adviceText;
    }
  };

  form.addEventListener('input', calculate);
  form.addEventListener('change', calculate);
  calculate();
}

// 4. Calculator 2: Child-Pugh Hepatic Score
function initChildPughCalc() {
  const form = document.getElementById('calc-childpugh-form');
  if (!form) return;

  const calculate = () => {
    const bili = parseInt(document.getElementById('cp-bili')?.value || 1);
    const alb = parseInt(document.getElementById('cp-alb')?.value || 1);
    const inr = parseInt(document.getElementById('cp-inr')?.value || 1);
    const asc = parseInt(document.getElementById('cp-ascites')?.value || 1);
    const enceph = parseInt(document.getElementById('cp-enceph')?.value || 1);

    const totalScore = bili + alb + inr + asc + enceph;

    const scoreEl = document.getElementById('cp-score-val');
    const classEl = document.getElementById('cp-class-val');
    const guidanceEl = document.getElementById('cp-guidance');

    if (scoreEl) scoreEl.innerText = `${totalScore} Poin`;

    let grade = '';
    let badgeColor = '';
    let guidance = '';

    if (totalScore <= 6) {
      grade = 'Kelas A (Kompensasi Baik)';
      badgeColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      guidance = 'Penurunan metabolisme minimal. Dosis obat hepar dapat diberikan 80-100% dari dosis normal, lakukan pemantauan berkala.';
    } else if (totalScore <= 9) {
      grade = 'Kelas B (Gangguan Fungsional Sedang)';
      badgeColor = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      guidance = 'Penurunan metabolisme signifikan. Turunkan dosis awal sebesar 25-50% untuk obat dengan metabolisme hepar tinggi (High Extraction). Hindari sedatif kuat & NSAID.';
    } else {
      grade = 'Kelas C (Dekompensasi Berat)';
      badgeColor = 'bg-rose-500/30 text-rose-200 border-rose-500/60 font-bold';
      guidance = 'Fungsi hati sangat terganggu. Hindari obat yang dieliminasi lewat hati atau turunkan dosis >50%. KONTRAINDIKASI Diazepam/Opioid tanpa TDM ketat (risiko koma hepatikum).';
    }

    if (classEl) {
      classEl.className = `inline-flex items-center px-3 py-1 rounded-full text-xs border font-medium ${badgeColor}`;
      classEl.innerText = grade;
    }
    if (guidanceEl) {
      guidanceEl.innerText = guidance;
    }
  };

  form.addEventListener('change', calculate);
  calculate();
}

// 5. Calculator 3: Relative Infant Dose (RID)
function initRidCalc() {
  const form = document.getElementById('calc-rid-form');
  if (!form) return;

  const calculate = () => {
    const infantConc = parseFloat(document.getElementById('rid-infant-conc')?.value || 0.9); // mg/L
    const milkVolume = parseFloat(document.getElementById('rid-milk-vol')?.value || 0.15); // L/kg/day (standar 150 mL/kg/hari)
    const matDoseTotal = parseFloat(document.getElementById('rid-mat-dose')?.value || 1000); // mg/day
    const matWeight = parseFloat(document.getElementById('rid-mat-weight')?.value || 70); // kg

    if (matDoseTotal <= 0 || matWeight <= 0) return;

    const infantDoseKg = infantConc * milkVolume; // mg/kg/day
    const matDoseKg = matDoseTotal / matWeight; // mg/kg/day
    const rid = (infantDoseKg / matDoseKg) * 100;

    const resultEl = document.getElementById('rid-result-val');
    const badgeEl = document.getElementById('rid-badge');
    const detailEl = document.getElementById('rid-details');

    if (resultEl) resultEl.innerText = `${rid.toFixed(2)}%`;

    let status = '';
    let badgeClass = '';
    let advice = '';

    if (rid < 10) {
      status = 'RID < 10%: RELATIF AMAN (Compatible)';
      badgeClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      advice = `Dosis yang diterima bayi (${infantDoseKg.toFixed(4)} mg/kg/hari) sangat rendah dibandingkan dosis ibu (${matDoseKg.toFixed(2)} mg/kg/hari). Ibu aman melanjutkan pemberian ASI!`;
    } else {
      status = 'RID ≥ 10%: PERLU PERHATIAN KHUSUS & EVALUASI';
      badgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      advice = `Nilai RID melebihi batas ambang 10%. Pertimbangkan obat alternatif yang memiliki protein binding lebih tinggi atau waktu paruh lebih pendek (lihat referensi Hale's Medications & Mothers' Milk).`;
    }

    if (badgeEl) {
      badgeEl.className = `inline-flex items-center px-3 py-1 rounded-full text-xs border font-medium ${badgeClass}`;
      badgeEl.innerText = status;
    }
    if (detailEl) {
      detailEl.innerText = advice;
    }
  };

  form.addEventListener('input', calculate);
  calculate();
}

// 6. Calculator 4: Dettli Formula Q Factor
function initDettliCalc() {
  const form = document.getElementById('calc-dettli-form');
  if (!form) return;

  const calculate = () => {
    const normalCrCl = parseFloat(document.getElementById('det-crcl-norm')?.value || 100);
    const patientCrCl = parseFloat(document.getElementById('det-crcl-pat')?.value || 30);
    const fe = parseFloat(document.getElementById('det-fe')?.value || 0.9);
    const normalDose = parseFloat(document.getElementById('det-norm-dose')?.value || 500);
    const normalTau = parseFloat(document.getElementById('det-norm-tau')?.value || 12);

    const KF = Math.min(1.0, Math.max(0.01, patientCrCl / normalCrCl));
    const Q = Math.max(0.05, 1 - fe * (1 - KF));

    const qResult = document.getElementById('det-q-val');
    const newDoseVal = document.getElementById('det-new-dose');
    const newTauVal = document.getElementById('det-new-tau');

    if (qResult) qResult.innerText = `Q = ${Q.toFixed(2)}`;
    if (newDoseVal) newDoseVal.innerText = `${Math.round(normalDose * Q)} mg tiap ${normalTau} jam`;
    if (newTauVal) newTauVal.innerText = `${normalDose} mg tiap ${Math.round(normalTau / Q)} jam`;
  };

  form.addEventListener('input', calculate);
  calculate();
}

// 7. Interactive Case Pemantik Cards
function initPemantikCards() {
  const cards = document.querySelectorAll('.pemantik-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const details = card.querySelector('.pemantik-details');
      if (details) {
        details.classList.toggle('hidden');
      }
    });
  });
}

// 8. Grand Round Accordion
function initGrandRoundAccordion() {
  const triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach(trig => {
    trig.addEventListener('click', () => {
      const content = trig.nextElementSibling;
      if (content) {
        content.classList.toggle('hidden');
        const icon = trig.querySelector('.accordion-icon');
        if (icon) {
          icon.classList.toggle('rotate-180');
        }
      }
    });
  });
}

// 9. Gamified Pop Quiz Engine (60 HOTS Questions Support)
let currentQuizIndex = 0;
let userQuizScore = 0;
let selectedCategory = 'all';
const userAnswers = {}; // Map: qId -> { selectedIndex, isCorrect }

function initQuizEngine() {
  renderCategoryFilters();
  renderQuestionGrid();
  renderQuizQuestion();

  const nextBtn = document.getElementById('quiz-next-btn');
  const prevBtn = document.getElementById('quiz-prev-btn');
  const resetBtn = document.getElementById('quiz-reset-btn');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const filtered = getFilteredQuestions();
      if (currentQuizIndex < filtered.length - 1) {
        currentQuizIndex++;
        renderQuizQuestion();
        renderQuestionGrid();
      } else if (Object.keys(userAnswers).length === window.LECTURE_DATA.quiz.length) {
        if (window.confetti) {
          confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
        }
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentQuizIndex > 0) {
        currentQuizIndex--;
        renderQuizQuestion();
        renderQuestionGrid();
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Apakah kamu yakin ingin mereset seluruh progres kuis 60 soal ini?')) {
        for (const key in userAnswers) delete userAnswers[key];
        userQuizScore = 0;
        currentQuizIndex = 0;
        renderQuestionGrid();
        renderQuizQuestion();
      }
    });
  }
}

function getFilteredQuestions() {
  const all = window.LECTURE_DATA.quiz;
  if (selectedCategory === 'all') return all;
  return all.filter(q => q.category === selectedCategory || (selectedCategory === 'PK' && (q.category === 'Kalkulasi PK' || q.category === 'Fundamental PK')));
}

function renderCategoryFilters() {
  const container = document.getElementById('quiz-category-filters');
  if (!container) return;

  const categories = [
    { id: 'all', label: '🔥 Semua (60 Soal)' },
    { id: 'PK', label: '📐 PK & Hitungan (10)' },
    { id: 'Gangguan Ginjal', label: '🫘 Ginjal & Dialisis (12)' },
    { id: 'Gangguan Hati', label: '🫀 Hati & Sirosis (12)' },
    { id: 'Geriatri', label: '👵 Geriatri & Beers (10)' },
    { id: 'Ibu Hamil', label: '🤰 Bumil & Teratogen (9)' },
    { id: 'Ibu Menyusui', label: '🍼 Busui & RID (7)' }
  ];

  container.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    const isActive = selectedCategory === cat.id;
    btn.className = `px-3 py-1.5 rounded-xl text-xs font-semibold transition whitespace-nowrap border ${
      isActive 
        ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-500/30' 
        : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-purple-400'
    }`;
    btn.innerText = cat.label;
    btn.addEventListener('click', () => {
      selectedCategory = cat.id;
      currentQuizIndex = 0;
      renderCategoryFilters();
      renderQuestionGrid();
      renderQuizQuestion();
    });
    container.appendChild(btn);
  });
}

function renderQuestionGrid() {
  const gridContainer = document.getElementById('quiz-question-grid');
  if (!gridContainer) return;

  const filtered = getFilteredQuestions();
  gridContainer.innerHTML = '';

  filtered.forEach((q, idx) => {
    const btn = document.createElement('button');
    const ans = userAnswers[q.id];
    const isCurrent = idx === currentQuizIndex;

    let bgClass = 'bg-slate-800 text-slate-300 border-slate-700';
    if (ans) {
      if (ans.isCorrect) {
        bgClass = 'bg-emerald-600/30 text-emerald-300 border-emerald-500/50 font-bold';
      } else {
        bgClass = 'bg-rose-600/30 text-rose-300 border-rose-500/50 font-bold';
      }
    }

    if (isCurrent) {
      bgClass += ' ring-2 ring-purple-400 scale-105 shadow-md shadow-purple-500/30';
    }

    btn.className = `w-8 h-8 rounded-lg text-xs font-semibold border flex items-center justify-center transition-all ${bgClass}`;
    btn.innerText = (idx + 1).toString();
    btn.title = `Soal ${idx + 1} (${q.category})`;

    btn.addEventListener('click', () => {
      currentQuizIndex = idx;
      renderQuizQuestion();
      renderQuestionGrid();
    });

    gridContainer.appendChild(btn);
  });
}

function renderQuizQuestion() {
  const filtered = getFilteredQuestions();
  const q = filtered[currentQuizIndex];
  if (!q) return;

  const numEl = document.getElementById('quiz-question-number');
  const catBadge = document.getElementById('quiz-question-category');
  const textEl = document.getElementById('quiz-question-text');
  const optionsContainer = document.getElementById('quiz-options-container');
  const explanationEl = document.getElementById('quiz-explanation');
  const nextBtn = document.getElementById('quiz-next-btn');
  const prevBtn = document.getElementById('quiz-prev-btn');
  const scoreCounter = document.getElementById('quiz-score-counter');
  const answeredCountEl = document.getElementById('quiz-answered-count');

  if (numEl) numEl.innerText = `Soal ${currentQuizIndex + 1} dari ${filtered.length}`;
  if (catBadge) {
    catBadge.innerText = q.category;
    catBadge.className = 'inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40';
  }
  if (textEl) textEl.innerText = q.question;

  const answeredTotal = Object.keys(userAnswers).length;
  const correctTotal = Object.values(userAnswers).filter(a => a.isCorrect).length;
  if (scoreCounter) scoreCounter.innerText = `Skor: ${correctTotal * 20} (Benar: ${correctTotal}/${answeredTotal})`;
  if (answeredCountEl) answeredCountEl.innerText = `${answeredTotal} dari ${window.LECTURE_DATA.quiz.length} Terjawab`;

  if (prevBtn) prevBtn.disabled = currentQuizIndex === 0;
  if (nextBtn) {
    if (currentQuizIndex === filtered.length - 1) {
      nextBtn.innerText = 'Selesai Kategori Ini 🎓';
    } else {
      nextBtn.innerText = 'Soal Berikutnya ➡️';
    }
  }

  const prevAnswer = userAnswers[q.id];

  if (!optionsContainer) return;
  optionsContainer.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    let optionClass = 'quiz-option w-full text-left p-4 rounded-xl border border-slate-700 bg-slate-800/80 text-slate-200 hover:border-purple-400 flex items-start space-x-3 transition';

    if (prevAnswer) {
      if (opt.correct) {
        optionClass += ' correct-answer';
      } else if (prevAnswer.selectedIndex === idx) {
        optionClass += ' wrong-answer';
      }
    }

    btn.className = optionClass;
    btn.innerHTML = `
      <span class="w-7 h-7 rounded-full bg-purple-900/50 border border-purple-500/40 text-purple-300 font-bold flex items-center justify-center flex-shrink-0 text-sm">
        ${opt.label}
      </span>
      <span class="text-sm md:text-base leading-relaxed">${opt.text}</span>
    `;

    if (prevAnswer) {
      btn.disabled = true;
    } else {
      btn.addEventListener('click', () => {
        userAnswers[q.id] = {
          selectedIndex: idx,
          isCorrect: opt.correct
        };

        if (opt.correct) {
          userQuizScore += 20;
          if (window.confetti) {
            confetti({ particleCount: 60, spread: 50, origin: { y: 0.7 } });
          }
        }

        renderQuestionGrid();
        renderQuizQuestion();
      });
    }

    optionsContainer.appendChild(btn);
  });

  if (explanationEl) {
    if (prevAnswer) {
      explanationEl.classList.remove('hidden');
      explanationEl.innerHTML = `
        <div class="p-4 rounded-xl ${prevAnswer.isCorrect ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-200' : 'bg-rose-950/40 border border-rose-500/40 text-rose-200'}">
          <div class="font-bold mb-1 flex items-center gap-2">
            <span>${prevAnswer.isCorrect ? '✨ Jawaban Tepat Banget!' : '💡 Pembahasan Dosen:'}</span>
          </div>
          <p class="text-sm leading-relaxed">${q.explanation}</p>
        </div>
      `;
    } else {
      explanationEl.classList.add('hidden');
      explanationEl.innerHTML = '';
    }
  }
}

