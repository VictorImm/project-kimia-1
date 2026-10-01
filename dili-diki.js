/**
 * DILI & DIKI Masterclass Engine
 * Modul 02: Monitoring Keamanan Terapi: DILI & DIKI
 * Dosen Pengampu: Apt. Vania Denise Djunaidy, S.Farm., M.Farm.Klin.
 * Fakultas Farmasi UKWMS
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Initialize KaTeX formulas
  renderMathInDocument();

  initDiliTabs();
  initRRatioCalculator();
  initOatStepper();
  initHemodynamicSimulator();
  initKdigoStager();
  initDiliDikiQuiz();
  renderContentCards();
});

// Helper for rendering Math formulas via KaTeX
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

// 1. Tab Navigation System (Identical to Farklin Masterclass)
function initDiliTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('.content-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update sections visibility
      sections.forEach(sec => {
        if (sec.id === targetId) {
          sec.classList.remove('hidden');
          sec.classList.add('animate-fade-in');
        } else {
          sec.classList.add('hidden');
          sec.classList.remove('animate-fade-in');
        }
      });

      // Re-initialize icons & math for newly shown section
      if (window.lucide) {
        window.lucide.createIcons();
      }
      renderMathInDocument();
    });
  });
}

// 2. Render Lore & Mechanisms from Dataset
function renderContentCards() {
  const data = window.DILI_DIKI_DATA;
  if (!data) return;

  // Render 5 DILI Mechanisms
  const dMechanismsContainer = document.getElementById('dili-mechanisms-container');
  if (dMechanismsContainer && data.dili && data.dili.mechanisms) {
    dMechanismsContainer.innerHTML = data.dili.mechanisms.map(m => `
      <div class="glass-panel-interactive rounded-3xl p-6 sm:p-7 border border-slate-800 space-y-4">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center justify-center font-bold text-sm">
              ${m.number}
            </div>
            <div>
              <h4 class="text-lg sm:text-xl font-bold text-white">${m.title}</h4>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-500/20 text-rose-300 mt-1">
                Key Drug: ${m.keyDrug}
              </span>
            </div>
          </div>
        </div>

        <p class="text-slate-300 text-sm leading-relaxed">${m.desc}</p>

        <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-xs text-slate-300 space-y-2">
          <div class="font-bold text-rose-300 flex items-center gap-1.5">
            <i data-lucide="route" class="w-4 h-4"></i> Alur Patofisiologi & Penatalaksanaan:
          </div>
          <div class="leading-relaxed text-slate-300">${m.detailFlow ? m.detailFlow.replace(/\\n/g, '<br>') : ''}</div>
          ${m.otherDrugs ? `<div class="pt-1 text-slate-400"><strong>Contoh Lain:</strong> ${m.otherDrugs}</div>` : ''}
        </div>
      </div>
    `).join('');
  }

  // Render Stewardship Pillars
  const stewContainer = document.getElementById('stewardship-pillars-container');
  if (stewContainer && data.diki && data.diki.stewardship && data.diki.stewardship.pillars) {
    stewContainer.innerHTML = data.diki.stewardship.pillars.map((p, idx) => `
      <div class="glass-panel rounded-3xl p-6 border border-slate-800 space-y-3">
        <h5 class="text-base font-bold text-cyan-300 flex items-center gap-2">
          <i data-lucide="shield-check" class="w-5 h-5 text-cyan-400"></i> ${p.title}
        </h5>
        <ul class="space-y-2 text-xs text-slate-300 ps-4 list-disc">
          ${p.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 3. R-Ratio & Hy's Law Calculator
function initRRatioCalculator() {
  const altInput = document.getElementById('calc-alt');
  const ulnAltInput = document.getElementById('calc-uln-alt');
  const alpInput = document.getElementById('calc-alp');
  const ulnAlpInput = document.getElementById('calc-uln-alp');
  const tbilInput = document.getElementById('calc-tbil');
  const ulnTbilInput = document.getElementById('calc-uln-tbil');

  const btnCalc = document.getElementById('btn-calc-r-ratio');
  const resultBox = document.getElementById('r-ratio-result-box');
  const presets = document.querySelectorAll('.preset-btn-dili');

  presets.forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.dataset.preset;
      if (preset === 'paracetamol') {
        altInput.value = 1600; ulnAltInput.value = 40;
        alpInput.value = 130; ulnAlpInput.value = 120;
        tbilInput.value = 1.2; ulnTbilInput.value = 1.0;
      } else if (preset === 'amoxclav') {
        altInput.value = 120; ulnAltInput.value = 40;
        alpInput.value = 380; ulnAlpInput.value = 120;
        tbilInput.value = 3.5; ulnTbilInput.value = 1.0;
      } else if (preset === 'hyslaw') {
        altInput.value = 320; ulnAltInput.value = 40;
        alpInput.value = 140; ulnAlpInput.value = 120;
        tbilInput.value = 4.8; ulnTbilInput.value = 1.0;
      } else if (preset === 'mixed') {
        altInput.value = 240; ulnAltInput.value = 40;
        alpInput.value = 280; ulnAlpInput.value = 120;
        tbilInput.value = 1.8; ulnTbilInput.value = 1.0;
      }
      calculateRRatio();
    });
  });

  if (btnCalc) {
    btnCalc.addEventListener('click', calculateRRatio);
  }

  [altInput, ulnAltInput, alpInput, ulnAlpInput, tbilInput, ulnTbilInput].forEach(inp => {
    if (inp) inp.addEventListener('input', calculateRRatio);
  });

  function calculateRRatio() {
    const alt = parseFloat(altInput?.value || 0);
    const ulnAlt = parseFloat(ulnAltInput?.value || 40);
    const alp = parseFloat(alpInput?.value || 0);
    const ulnAlp = parseFloat(ulnAlpInput?.value || 120);
    const tbil = parseFloat(tbilInput?.value || 0.8);
    const ulnTbil = parseFloat(ulnTbilInput?.value || 1.0);

    if (!alt || !alp || alt <= 0 || alp <= 0) {
      if (resultBox) {
        resultBox.innerHTML = `
          <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-400">
            Masukkan nilai ALT dan ALP untuk kalkulasi Rasio R.
          </div>
        `;
      }
      return;
    }

    const altRatio = alt / ulnAlt;
    const alpRatio = alp / ulnAlp;
    const rRatio = altRatio / alpRatio;
    const tbilRatio = tbil / ulnTbil;

    let pattern = '';
    let badgeClass = '';
    let patternDesc = '';
    let clinicalRec = '';

    if (rRatio >= 5.0) {
      pattern = 'Hepatoseluler (Hepatocellular)';
      badgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      patternDesc = 'Nekrosis sel hepatosit dominan. Sering disebabkan oleh Parasetamol, Isoniazid, Pirazinamid, Statin.';
      clinicalRec = 'Waspada peningkatan bilirubin progresif. Evaluasi Hy\'s Law dan pantau INR/PT serta tanda ensefalopati hepatik.';
    } else if (rRatio <= 2.0) {
      pattern = 'Kolestatik (Cholestatic)';
      badgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      patternDesc = 'Gangguan ekskresi empedu / kerusakan duktus biliaris dominan. Sering oleh Amoksisilin-Klavulanat, Steroid Anabolik, Eritromisin.';
      clinicalRec = 'Pertimbangkan terapi suportif Asam Ursodeoksikolat (UDCA) dan Kolestiramin bila pasien mengalami pruritus berat.';
    } else {
      pattern = 'Campuran (Mixed)';
      badgeClass = 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      patternDesc = 'Kombinasi kerusakan hepatosit dan stasis empedu. Sering pada paparan Fenitoin, Sulfonamida, Ko-amoksiklav fase lanjut.';
      clinicalRec = 'Evaluasi polifarmasi dan pantau kedua panel enzim serial tiap 48-72 jam hingga fase resolusi.';
    }

    // Hy's Law Criteria: ALT >= 3x ULN, Total Bilirubin >= 2x ULN, ALP < 2x ULN
    const isHysLaw = (altRatio >= 3.0) && (tbilRatio >= 2.0) && (alpRatio < 2.0);

    let hysLawAlert = '';
    if (isHysLaw) {
      hysLawAlert = `
        <div class="hys-law-box p-4 rounded-2xl bg-rose-950/80 border border-rose-500/60 text-rose-200 space-y-2 mt-4">
          <div class="flex items-center gap-2 text-rose-400 font-bold text-sm">
            <i data-lucide="triangle-alert" class="w-5 h-5 text-rose-400"></i>
            <span>ALERT: HY'S LAW POSITIF! (RED FLAG HEPATOTOKSISITAS)</span>
          </div>
          <p class="text-xs leading-relaxed">
            <strong>Kriteria Terpenuhi:</strong> ALT ≥ 3x ULN (${altRatio.toFixed(1)}x), Bilirubin Total ≥ 2x ULN (${tbilRatio.toFixed(1)}x), tanpa kolestasis awal (ALP < 2x ULN: ${alpRatio.toFixed(1)}x).
          </p>
          <div class="text-xs font-bold text-rose-300 bg-rose-900/50 p-2.5 rounded-xl border border-rose-500/40">
            ⚠️ Risiko MORTALITAS 10% - 50% akibat Gagal Hati Akut! Hentikan segera obat penyebab & rawat intensif!
          </div>
        </div>
      `;
    }

    if (resultBox) {
      resultBox.innerHTML = `
        <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span class="text-xs text-slate-400">Nilai Rasio R (R-Value):</span>
              <div class="text-3xl font-extrabold text-white">${rRatio.toFixed(2)}</div>
            </div>
            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold border ${badgeClass}">
              ${pattern}
            </span>
          </div>

          <div class="grid grid-cols-3 gap-2 text-center text-xs">
            <div class="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-slate-400 block text-[11px]">ALT / ULN</span>
              <strong class="text-rose-400 text-sm">${altRatio.toFixed(1)}x</strong>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-slate-400 block text-[11px]">ALP / ULN</span>
              <strong class="text-amber-400 text-sm">${alpRatio.toFixed(1)}x</strong>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-slate-400 block text-[11px]">TBil / ULN</span>
              <strong class="text-cyan-400 text-sm">${tbilRatio.toFixed(1)}x</strong>
            </div>
          </div>

          <div class="space-y-1.5 text-xs">
            <p class="text-slate-300"><strong class="text-slate-200">Patofisiologi:</strong> ${patternDesc}</p>
            <p class="text-cyan-300"><strong class="text-cyan-200">Rekomendasi Farmasi:</strong> ${clinicalRec}</p>
          </div>

          ${hysLawAlert}
        </div>
      `;
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  calculateRRatio();
}

// 4. OAT Reintroduction Stepper
function initOatStepper() {
  const steps = [
    {
      step: 1,
      badge: "Langkah 1",
      title: "Hentikan Semua OAT & Stabilisasi",
      action: "Stop Rifampisin, Isoniazid, Pirazinamid, dan Etambutol.",
      criteria: "Hentikan bila: ALT/AST ≥ 3x ULN + gejala mual/ikterus, ATAU ALT/AST ≥ 5x ULN asimtomatik, ATAU Bilirubin ≥ 2 mg/dL.",
      status: "Tunggu hingga enzim hepar dan gejala klinis kembali NORMAL (ALT < 2x ULN, ikterus hilang)."
    },
    {
      step: 2,
      badge: "Langkah 2",
      title: "Uji Coba Rifampisin (R)",
      action: "Mulai Rifampisin (R) dosis penuh (10 mg/kgBB, misal 450-600 mg).",
      why: "Mengapa R pertama? Karena Rifampisin adalah agen bakterisidal paling penting dengan potensi hepatotoksisitas intrinsik PALING RENDAH di antara OAT lini pertama!",
      status: "Pantau LFT setelah 3 - 7 hari. Bila ALT normal -> Lanjut Langkah 3!"
    },
    {
      step: 3,
      badge: "Langkah 3",
      title: "Tambahkan Isoniazid (H)",
      action: "Tambahkan Isoniazid (H) dosis penuh (5 mg/kgBB, misal 300 mg) bersama Rifampisin.",
      why: "Isoniazid memiliki hepatotoksisitas sedang (metabolit asetilhidrazin).",
      status: "Pantau LFT setelah 3 - 7 hari. Bila ALT tetap aman -> Masuk ke keputusan Pirazinamid!"
    },
    {
      step: 4,
      badge: "Langkah 4",
      title: "Keputusan Pirazinamid (Z) & Modifikasi Rejimen",
      action: "Uji Pirazinamid (Z) HANYA bila DILI awal tergolong ringan dan pasien membutuhkan paduan standar.",
      warning: "Pirazinamid adalah OAT PALING HEPATOTOKSIK. Bila DILI awal parah, Pirazinamid TIDAK DIREINTRODUKSI.",
      regimenRule: "Bila Pirazinamid dihentikan permanen pada fase intensif: Paduan Rifampisin + Isoniazid (RH) DIPERPANJANG durasi totalnya menjadi 9 BULAN (2RH-E / 7RH)!"
    }
  ];

  let currentStepIdx = 0;
  const stepperContainer = document.getElementById('oat-stepper-display');
  const btnPrev = document.getElementById('btn-oat-prev');
  const btnNext = document.getElementById('btn-oat-next');
  const stepIndicators = document.querySelectorAll('.oat-step-item');

  function renderOatStep(idx) {
    if (!stepperContainer) return;
    const s = steps[idx];
    stepperContainer.innerHTML = `
      <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-700 space-y-4">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
            ${s.badge}: ${s.title}
          </span>
          <span class="text-xs text-slate-400">Step ${idx + 1} of ${steps.length}</span>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-200">
          <strong class="text-indigo-300">Instruksi Klinis:</strong> ${s.action}
        </div>

        ${s.criteria ? `<p class="text-xs text-rose-300"><strong>Kriteria Stop:</strong> ${s.criteria}</p>` : ''}
        ${s.why ? `<p class="text-xs text-emerald-300"><strong>Rasional Farmakologi:</strong> ${s.why}</p>` : ''}
        ${s.warning ? `<p class="text-xs text-amber-300"><strong>Peringatan Toksisitas:</strong> ${s.warning}</p>` : ''}
        ${s.regimenRule ? `
          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-semibold">
            🌟 Golden Rule Rejimen: ${s.regimenRule}
          </div>
        ` : ''}

        <div class="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
          <strong>Monitoring:</strong> ${s.status || 'Evaluasi berkala serial LFT.'}
        </div>
      </div>
    `;

    if (btnPrev) btnPrev.disabled = (idx === 0);
    if (btnNext) btnNext.disabled = (idx === steps.length - 1);

    stepIndicators.forEach((ind, i) => {
      if (i === idx) {
        ind.className = "oat-step-item w-8 h-8 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-lg shadow-indigo-600/30";
      } else if (i < idx) {
        ind.className = "oat-step-item w-8 h-8 rounded-lg text-xs font-bold bg-emerald-600 text-white";
      } else {
        ind.className = "oat-step-item w-8 h-8 rounded-lg text-xs font-bold bg-slate-800 text-slate-400 border border-slate-700";
      }
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentStepIdx > 0) {
        currentStepIdx--;
        renderOatStep(currentStepIdx);
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (currentStepIdx < steps.length - 1) {
        currentStepIdx++;
        renderOatStep(currentStepIdx);
      }
    });
  }

  stepIndicators.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      currentStepIdx = i;
      renderOatStep(currentStepIdx);
    });
  });

  renderOatStep(0);
}

// 5. Glomerular Hemodynamic Visualizer
function initHemodynamicSimulator() {
  const scenarioBtns = document.querySelectorAll('.hemo-btn');
  const afferentStatus = document.getElementById('hemo-afferent-status');
  const efferentStatus = document.getElementById('hemo-efferent-status');
  const gfrGauge = document.getElementById('hemo-gfr-gauge');
  const gfrText = document.getElementById('hemo-gfr-text');
  const hemoExplanation = document.getElementById('hemo-explanation');

  const scenarios = {
    normal: {
      afferent: "Normal (Dilatasi Seimbang via PGE2/PGI2)",
      efferent: "Normal (Tonus Seimbang via AT-II)",
      gfrValue: 100,
      gfrColor: "from-emerald-500 to-teal-400",
      gfrLabel: "Normal GFR (~100%)",
      explanation: "Kondisi fisiologis normal: Prostaglandin menjaga arteriol aferen terbuka lebar, sementara Angiotensin II menjaga tonus arteriol eferen sehingga tekanan hidrostatik kapiler glomerulus optimal untuk filtrasi."
    },
    nsaid: {
      afferent: "VASOKONSTRIKSI (Inhibisi PGE2/PGI2)",
      efferent: "Normal (Dimediasi AT-II)",
      gfrValue: 45,
      gfrColor: "from-amber-500 to-orange-500",
      gfrLabel: "GFR Drop (~45%)",
      explanation: "NSAID menghambat COX-1/2 -> sintesis prostaglandin renal anjlok -> arteriol aferen menyempit hebat -> aliran darah masuk ke glomerulus tercekik -> GFR anjlok!"
    },
    acei: {
      afferent: "Normal (Dimediasi PGE2)",
      efferent: "VASODILATASI (Inhibisi Angiotensin II)",
      gfrValue: 55,
      gfrColor: "from-indigo-500 to-blue-500",
      gfrLabel: "GFR Drop (~55%)",
      explanation: "ACE-Inhibitor / ARB memblokade AT-II -> arteriol eferen membuka lebar -> tekanan hidrostatik kapiler intraglomerular lolos bocor keluar -> laju filtrasi turun (SCr naik hingga 30% masih wajar)."
    },
    triple_whammy: {
      afferent: "SEMPIT TOTAL (Deplesi Volume + NSAID)",
      efferent: "BOCOR LEBAR (ACEI/ARB)",
      gfrValue: 15,
      gfrColor: "from-rose-600 to-pink-600",
      gfrLabel: "Severe Pre-Renal AKI (~15%)",
      explanation: "TRIPLE WHAMMY (Diuretik + NSAID + ACEI/ARB): Diuretik bikin hipovolemia, NSAID mencekik pintu masuk aferen, ACEI membuka pintu keluar eferen -> Tekanan kapiler glomerulus kolaps total -> Gagal Ginjal Akut mendadak!"
    },
    sglt2i: {
      afferent: "Vasokonstriksi Fisiologis via TGF",
      efferent: "Normal",
      gfrValue: 75,
      gfrColor: "from-cyan-500 to-blue-500",
      gfrLabel: "Initial 'eGFR Dip' (~75-80%)",
      explanation: "SGLT2 Inhibitor meningkatkan hantaran Na+ ke Macula Densa -> mengaktifkan Tubuloglomerular Feedback (TGF) -> vasokonstriksi aferen fisiologis -> menurunkan hiperfiltrasi podosit (nefroprotektif jangka panjang!)."
    },
    cni: {
      afferent: "Spasme Berat (Endotelin & NO Block)",
      efferent: "Normal",
      gfrValue: 35,
      gfrColor: "from-purple-600 to-rose-600",
      gfrLabel: "CNI Nephrotoxicity (~35%)",
      explanation: "Siklosporin / Takrolimus memicu pelepasan endotelin dan vasokonstriksi aferen poten. Terapi rescue: Penyesuaian TDM & pemberian CCB Dihidropiridin (Amlodipin) untuk membuka kembali arteriol aferen."
    }
  };

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => {
        b.className = "hemo-btn w-full text-left p-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition";
      });
      btn.className = "hemo-btn w-full text-left p-3 rounded-2xl bg-indigo-600 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition flex items-center justify-between";

      const mode = btn.dataset.scenario;
      const sc = scenarios[mode] || scenarios.normal;

      if (afferentStatus) afferentStatus.innerText = sc.afferent;
      if (efferentStatus) efferentStatus.innerText = sc.efferent;
      if (gfrGauge) {
        gfrGauge.style.width = `${sc.gfrValue}%`;
        gfrGauge.className = `h-full rounded-full bg-gradient-to-r ${sc.gfrColor} transition-all duration-500`;
      }
      if (gfrText) gfrText.innerText = sc.gfrLabel;
      if (hemoExplanation) hemoExplanation.innerText = sc.explanation;
    });
  });
}

// 6. KDIGO AKI Stager
function initKdigoStager() {
  const baseScrInput = document.getElementById('kdigo-base-scr');
  const currScrInput = document.getElementById('kdigo-curr-scr');
  const urineOutputInput = document.getElementById('kdigo-urine-output');
  const urineHoursInput = document.getElementById('kdigo-urine-hours');
  const btnStage = document.getElementById('btn-calc-kdigo');
  const resultBox = document.getElementById('kdigo-result-box');

  if (btnStage) {
    btnStage.addEventListener('click', stageKdigo);
  }

  [baseScrInput, currScrInput, urineOutputInput, urineHoursInput].forEach(inp => {
    if (inp) inp.addEventListener('input', stageKdigo);
  });

  function stageKdigo() {
    const baseScr = parseFloat(baseScrInput?.value || 0.9);
    const currScr = parseFloat(currScrInput?.value || 2.8);
    const uo = parseFloat(urineOutputInput?.value || 0.4);
    const uoHrs = parseFloat(urineHoursInput?.value || 14);

    const scrDiff = currScr - baseScr;
    const scrRatio = currScr / baseScr;

    let stage = 0;
    let stageTitle = "Tidak Memenuhi Kriteria AKI";
    let badgeClass = "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
    let plan = [];

    if (scrRatio >= 3.0 || currScr >= 4.0 || (uo < 0.3 && uoHrs >= 24) || (uo === 0 && uoHrs >= 12)) {
      stage = 3;
      stageTitle = "KDIGO Stage 3 (Severe AKI)";
      badgeClass = "bg-rose-500/20 text-rose-300 border-rose-500/40";
      plan = [
        "Hentikan SEMUA nefrotoksin non-esensial.",
        "Konsultasi Nefrologi cito untuk evaluasi Terapi Pengganti Ginjal (Dialisis / CRRT).",
        "Pertahankan MAP > 65-70 mmHg (Norepinefrin bila perlu).",
        "Koreksi ketat asidosis (NaBic jika pH < 7.20 & HCO3 < 15) & hiperkalemia (Kalsium Glukonat + D50/Insulin).",
        "Sesuaikan dosis seluruh obat eliminasi renal berbasis CrCl/GFR terkini."
      ];
    } else if (scrRatio >= 2.0 || (uo < 0.5 && uoHrs >= 12)) {
      stage = 2;
      stageTitle = "KDIGO Stage 2 (Moderate AKI)";
      badgeClass = "bg-amber-500/20 text-amber-300 border-amber-500/40";
      plan = [
        "Hentikan obat pemicu utama (NSAID, Aminoglikosida, dll).",
        "Optimalkan status volume cairan dengan hidrasi kristaloid isotonik.",
        "Pantau ketat biomarker kreatinin, elektrolit, dan balance cairan tiap 12-24 jam.",
        "Lakukan TDM Vankomisin / Aminoglikosida bila masih harus dilanjutkan."
      ];
    } else if (scrDiff >= 0.3 || scrRatio >= 1.5 || (uo < 0.5 && uoHrs >= 6)) {
      stage = 1;
      stageTitle = "KDIGO Stage 1 (Mild AKI)";
      badgeClass = "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
      plan = [
        "Evaluasi riwayat obat nefrotoksik 7 hari terakhir (Triple Whammy, antibiotik).",
        "Pastikan hidrasi adekuat dan hindari agen kontras radiologi.",
        "Monitor SCr ulang dalam 24-48 jam.",
        "Pertimbangkan cek Cystatin C untuk menyingkirkan Pseudo-AKI bila pasien mengonsumsi Kotrimoksazol."
      ];
    } else {
      plan = [
        "Fungsi ginjal dalam batas aman relatif terhadap baseline.",
        "Tetap lakukan monitoring rutin bila pasien menerima obat dengan indeks terapi sempit."
      ];
    }

    if (resultBox) {
      resultBox.innerHTML = `
        <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span class="text-xs text-slate-400">Rasio Kenaikan SCr:</span>
              <div class="text-2xl font-extrabold text-white">${scrRatio.toFixed(2)}x (${scrDiff >= 0 ? '+' : ''}${scrDiff.toFixed(2)} mg/dL)</div>
            </div>
            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold border ${badgeClass}">
              ${stageTitle}
            </span>
          </div>

          <div class="space-y-2 text-xs">
            <div class="font-bold text-cyan-300">Rencana Asuhan Farmasi & Stewardship:</div>
            <ul class="space-y-1.5 text-slate-300 ps-4 list-disc">
              ${plan.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    }
  }

  stageKdigo();
}

// 7. 30 HOTS Quiz Engine (With Category Filters, Matrix Grid & Confetti)
function initDiliDikiQuiz() {
  const data = window.DILI_DIKI_DATA;
  if (!data || !data.quizQuestions) return;

  const questions = data.quizQuestions;
  let currentIdx = 0;
  let selectedCategory = 'all';
  let userAnswers = {};

  const questionCard = document.getElementById('quiz-question-card');
  const gridContainer = document.getElementById('quiz-grid-container');
  const categoryFilters = document.querySelectorAll('.quiz-cat-filter');
  const scoreBadge = document.getElementById('quiz-score-badge');
  const progressText = document.getElementById('quiz-progress-text');
  const btnPrev = document.getElementById('btn-quiz-prev');
  const btnNext = document.getElementById('btn-quiz-next');
  const btnReset = document.getElementById('btn-quiz-reset');

  categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilters.forEach(b => {
        b.className = "quiz-cat-filter px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition";
      });
      btn.className = "quiz-cat-filter px-3.5 py-1.5 rounded-xl text-xs font-bold bg-rose-600 text-white border border-rose-500 shadow-lg shadow-rose-600/30 transition";

      selectedCategory = btn.dataset.category;
      const firstMatch = questions.findIndex(q => selectedCategory === 'all' || q.category.toLowerCase().includes(selectedCategory.toLowerCase()));
      currentIdx = firstMatch !== -1 ? firstMatch : 0;
      renderQuiz();
    });
  });

  function renderQuizGrid() {
    if (!gridContainer) return;
    gridContainer.innerHTML = questions.map((q, idx) => {
      const isAnswered = userAnswers[q.id] !== undefined;
      const isCurrent = idx === currentIdx;
      let btnStyle = 'bg-slate-800 text-slate-400 border border-slate-700';

      if (isAnswered) {
        const isCorrect = q.options[userAnswers[q.id]]?.correct;
        btnStyle = isCorrect ? 'bg-emerald-600 text-white border-emerald-500 font-bold' : 'bg-rose-600 text-white border-rose-500 font-bold';
      }

      if (isCurrent) {
        btnStyle += ' ring-2 ring-purple-400 scale-105';
      }

      return `
        <button class="w-9 h-9 rounded-xl text-xs font-semibold flex items-center justify-center transition quiz-grid-btn ${btnStyle}" data-idx="${idx}">
          ${idx + 1}
        </button>
      `;
    }).join('');

    gridContainer.querySelectorAll('.quiz-grid-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentIdx = parseInt(btn.dataset.idx);
        renderQuiz();
      });
    });
  }

  function updateScore() {
    let correctCount = 0;
    let answeredCount = 0;

    questions.forEach(q => {
      if (userAnswers[q.id] !== undefined) {
        answeredCount++;
        if (q.options[userAnswers[q.id]]?.correct) {
          correctCount++;
        }
      }
    });

    if (scoreBadge) {
      scoreBadge.innerText = `Skor: ${correctCount * 10} (${correctCount}/${questions.length} Benar)`;
    }
    if (progressText) {
      progressText.innerText = `Terjawab ${answeredCount} dari ${questions.length} Soal`;
    }

    if (answeredCount === questions.length && window.confetti) {
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
    }
  }

  function renderQuiz() {
    if (!questionCard) return;
    const q = questions[currentIdx];
    if (!q) return;

    const answeredIdx = userAnswers[q.id];
    const isAnswered = answeredIdx !== undefined;

    questionCard.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
            ${q.category}
          </span>
          <span class="text-xs text-slate-400 font-mono">Soal ${currentIdx + 1} / ${questions.length}</span>
        </div>

        <h4 class="text-lg sm:text-xl font-bold text-white leading-relaxed">
          ${q.question}
        </h4>

        <div class="space-y-3">
          ${q.options.map((opt, optIdx) => {
            let optStyle = "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-slate-600";
            let iconMarkup = `<span class="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 flex items-center justify-center font-bold text-xs flex-shrink-0">${opt.label}</span>`;

            if (isAnswered) {
              if (opt.correct) {
                optStyle = "bg-emerald-500/20 border-emerald-500/60 text-emerald-200";
                iconMarkup = `<span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">&check;</span>`;
              } else if (optIdx === answeredIdx) {
                optStyle = "bg-rose-500/20 border-rose-500/60 text-rose-200";
                iconMarkup = `<span class="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">&times;</span>`;
              } else {
                optStyle = "bg-slate-900/40 border-slate-800 text-slate-500 opacity-50";
              }
            }

            return `
              <button class="w-full text-left p-4 rounded-2xl border text-sm transition flex items-start gap-3 quiz-opt-btn ${optStyle}" data-opt-idx="${optIdx}" ${isAnswered ? 'disabled' : ''}>
                ${iconMarkup}
                <span class="leading-relaxed flex-grow">${opt.text}</span>
              </button>
            `;
          }).join('')}
        </div>

        ${isAnswered ? `
          <div class="p-4 rounded-2xl ${q.options[answeredIdx]?.correct ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-200' : 'bg-rose-500/10 border border-rose-500/30 text-rose-200'} text-xs space-y-1.5 animate-fade-in">
            <div class="font-bold flex items-center gap-1.5 text-sm">
              ${q.options[answeredIdx]?.correct ? '🎉 Jawaban Benar!' : '⚠️ Jawaban Kurang Tepat!'}
            </div>
            <p class="leading-relaxed text-slate-300"><strong>Pembahasan Klinis:</strong> ${q.explanation}</p>
          </div>
        ` : ''}
      </div>
    `;

    if (!isAnswered) {
      questionCard.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const optIdx = parseInt(btn.dataset.optIdx);
          userAnswers[q.id] = optIdx;
          updateScore();
          renderQuiz();
          renderQuizGrid();
        });
      });
    }

    if (btnPrev) btnPrev.disabled = (currentIdx === 0);
    if (btnNext) btnNext.disabled = (currentIdx === questions.length - 1);

    renderQuizGrid();
    updateScore();
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentIdx > 0) {
        currentIdx--;
        renderQuiz();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (currentIdx < questions.length - 1) {
        currentIdx++;
        renderQuiz();
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm('Apakah kamu ingin mengulang seluruh kuis DILI & DIKI?')) {
        userAnswers = {};
        currentIdx = 0;
        renderQuiz();
      }
    });
  }

  renderQuiz();
}
