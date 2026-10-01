/**
 * DILI & DIKI Interactive Script Engine
 * Modul 02: Monitoring Keamanan Terapi: DILI & DIKI
 * Dosen: Apt. Vania Denise Djunaidy, S.Farm., M.Farm.Klin.
 * Fakultas Farmasi UKWMS
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initRRatioCalculator();
  initOatStepper();
  initHemodynamicSimulator();
  initKdigoStager();
  initDiliDikiQuiz();
  renderContentCards();
});

// 1. Navigation & Scrollspy
function initNavbar() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.content-section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// 2. Render Lore & Content Cards from Dataset
function renderContentCards() {
  const data = window.DILI_DIKI_DATA;
  if (!data) return;

  // Render Mechanisms DILI
  const dMechanismsContainer = document.getElementById('dili-mechanisms-container');
  if (dMechanismsContainer && data.dili && data.dili.mechanisms) {
    dMechanismsContainer.innerHTML = data.dili.mechanisms.map(m => `
      <div class="mech-card">
        <div class="mech-badge">${m.number}</div>
        <div class="mech-content">
          <h4>${m.title}</h4>
          <p class="mech-desc">${m.desc}</p>
          <div class="mech-key-drug">
            <span class="badge-pill bg-danger-light"><i class="fa-solid fa-capsules me-1"></i> Key Drug: ${m.keyDrug}</span>
          </div>
          <div class="mech-flow-box mt-2">
            <small class="text-muted d-block fw-semibold mb-1"><i class="fa-solid fa-route me-1"></i> Clinical Mechanism & Action:</small>
            <div class="flow-text">${m.detailFlow ? m.detailFlow.replace(/\\n/g, '<br>') : ''}</div>
          </div>
          ${m.otherDrugs ? `<div class="mt-2"><small class="text-muted"><strong>Contoh Lain:</strong> ${m.otherDrugs}</small></div>` : ''}
        </div>
      </div>
    `).join('');
  }

  // Render Stewardship Pillars
  const stewContainer = document.getElementById('stewardship-pillars-container');
  if (stewContainer && data.diki && data.diki.stewardship && data.diki.stewardship.pillars) {
    stewContainer.innerHTML = data.diki.stewardship.pillars.map((p, idx) => `
      <div class="col-md-6 mb-3">
        <div class="stew-card h-100 p-3 rounded-3 shadow-sm border">
          <h5 class="stew-title fw-bold text-primary mb-3">
            <i class="fa-solid fa-shield-halved me-2 text-warning"></i>${p.title}
          </h5>
          <ul class="stew-list ps-3 mb-0">
            ${p.points.map(pt => `<li class="mb-2 text-secondary">${pt}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }
}

// 3. R-Ratio & Hy's Law Interactive Calculator
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

  // Auto calculate on enter/change
  [altInput, ulnAltInput, alpInput, ulnAlpInput, tbilInput, ulnTbilInput].forEach(inp => {
    if (inp) inp.addEventListener('input', calculateRRatio);
  });

  function calculateRRatio() {
    const alt = parseFloat(altInput.value);
    const ulnAlt = parseFloat(ulnAltInput.value) || 40;
    const alp = parseFloat(alpInput.value);
    const ulnAlp = parseFloat(ulnAlpInput.value) || 120;
    const tbil = parseFloat(tbilInput.value) || 0.8;
    const ulnTbil = parseFloat(ulnTbilInput.value) || 1.0;

    if (!alt || !alp || alt <= 0 || alp <= 0) {
      if (resultBox) resultBox.innerHTML = `<div class="alert alert-info mb-0"><i class="fa-solid fa-calculator me-2"></i>Masukkan nilai ALT & ALP untuk menghitung R-Ratio!</div>`;
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
      badgeClass = 'bg-danger';
      patternDesc = 'Kerusakan dan nekrosis sel hepatosit dominan. Sering disebabkan oleh Parasetamol, Isoniazid, Pirazinamid, Statin.';
      clinicalRec = 'Waspada peningkatan bilirubin progresif. Evaluasi Hy\'s Law dan pantau INR/PT serta tanda ensefalopati hepatik.';
    } else if (rRatio <= 2.0) {
      pattern = 'Kolestatik (Cholestatic)';
      badgeClass = 'bg-warning text-dark';
      patternDesc = 'Gangguan ekskresi empedu / kerusakan epitel duktus biliaris dominan. Sering disebabkan oleh Amoksisilin-Klavulanat, Steroid Anabolik, Eritromisin, Klorpromazin.';
      clinicalRec = 'Pertimbangkan terapi suportif Asam Ursodeoksikolat (UDCA) dan Kolestiramin bila pasien mengalami pruritus berat. Resolusi klinis cenderung lebih lambat.';
    } else {
      pattern = 'Campuran (Mixed)';
      badgeClass = 'bg-primary';
      patternDesc = 'Pola cedera kombinasi antara kerusakan hepatosit dan stasis empedu biliaris. Sering pada paparan Fenitoin, Sulfonamida, Ko-amoksiklav fase lanjut.';
      clinicalRec = 'Evaluasi kemungkinan pajanan polifarmasi. Pantau kedua panel enzim serial tiap 48-72 jam.';
    }

    // Hy's Law Check
    // Hy's Law Criteria: ALT >= 3x ULN, Total Bilirubin >= 2x ULN, ALP < 2x ULN
    const isHysLaw = (altRatio >= 3.0) && (tbilRatio >= 2.0) && (alpRatio < 2.0);

    let hysLawAlert = '';
    if (isHysLaw) {
      hysLawAlert = `
        <div class="hys-law-box alert alert-danger border-danger mt-3 animate__animated animate__pulse">
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-triangle-exclamation fa-2x me-3 text-danger"></i>
            <div>
              <h5 class="fw-bold text-danger mb-1"><i class="fa-solid fa-skull-crossbones me-1"></i> ALERT: HY'S LAW POSITIF! (RED FLAG)</h5>
              <p class="mb-1"><strong>Kriteria Terpenuhi:</strong> ALT ≥ 3x ULN (${altRatio.toFixed(1)}x), Bilirubin Total ≥ 2x ULN (${tbilRatio.toFixed(1)}x), tanpa kolestasis awal (ALP < 2x ULN: ${alpRatio.toFixed(1)}x).</p>
              <p class="mb-0 text-dark fw-bold">⚠️ Pasien memiliki risiko MORTALITAS 10% - 50% akibat Gagal Hati Akut (Acute Liver Failure)! HENTIKAN SEGERA OBAT PENYEBAB & RAWAT INTENSIF!</p>
            </div>
          </div>
        </div>
      `;
    } else if (altRatio >= 3.0 && tbilRatio >= 2.0 && alpRatio >= 2.0) {
      hysLawAlert = `
        <div class="alert alert-warning mt-3">
          <i class="fa-solid fa-circle-exclamation me-2"></i><strong>Catatan Kolestasis:</strong> ALT dan Bilirubin meningkat tinggi, namun disertai kenaikan ALP tinggi (ALP ≥ 2x ULN: ${alpRatio.toFixed(1)}x). Menunjukkan komponen kolestatik/obstruktif signifikan (Bukan Pure Hy's Law).
        </div>
      `;
    }

    if (resultBox) {
      resultBox.innerHTML = `
        <div class="p-3 bg-light rounded-3 border">
          <div class="d-flex justify-content-between align-items-center flex-wrap mb-2">
            <div>
              <span class="text-muted">R-Value:</span>
              <h2 class="fw-bold text-dark mb-0">${rRatio.toFixed(2)}</h2>
            </div>
            <div>
              <span class="badge ${badgeClass} fs-6 px-3 py-2 rounded-pill">${pattern}</span>
            </div>
          </div>

          <div class="row g-2 text-center my-2">
            <div class="col-4">
              <div class="p-2 bg-white rounded border">
                <small class="text-muted d-block">ALT / ULN</small>
                <strong>${altRatio.toFixed(2)}x</strong>
              </div>
            </div>
            <div class="col-4">
              <div class="p-2 bg-white rounded border">
                <small class="text-muted d-block">ALP / ULN</small>
                <strong>${alpRatio.toFixed(2)}x</strong>
              </div>
            </div>
            <div class="col-4">
              <div class="p-2 bg-white rounded border">
                <small class="text-muted d-block">TBil / ULN</small>
                <strong>${tbilRatio.toFixed(2)}x</strong>
              </div>
            </div>
          </div>

          <div class="mt-3">
            <p class="mb-1 text-secondary"><strong>Patofisiologi:</strong> ${patternDesc}</p>
            <p class="mb-0 text-primary"><strong>Rekomendasi Farmasi:</strong> ${clinicalRec}</p>
          </div>

          ${hysLawAlert}
        </div>
      `;
    }
  }

  // Initial calculation
  calculateRRatio();
}

// 4. OAT Reintroduction Interactive Stepper
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
      <div class="card border-primary-light shadow-sm">
        <div class="card-header bg-gradient-primary text-white d-flex justify-content-between align-items-center">
          <span class="fw-bold"><i class="fa-solid fa-vial-circle-check me-2"></i>${s.badge}: ${s.title}</span>
          <span class="badge bg-light text-primary">Step ${idx + 1} of ${steps.length}</span>
        </div>
        <div class="card-body">
          <div class="alert alert-info py-2 mb-3">
            <strong><i class="fa-solid fa-hand-point-right me-2"></i>Instruksi Klinis:</strong> ${s.action}
          </div>
          ${s.criteria ? `<p class="text-danger mb-2"><strong><i class="fa-solid fa-circle-exclamation me-1"></i>Kriteria Stop:</strong> ${s.criteria}</p>` : ''}
          ${s.why ? `<p class="text-success mb-2"><strong><i class="fa-solid fa-lightbulb me-1"></i>Rasional Farmakologi:</strong> ${s.why}</p>` : ''}
          ${s.warning ? `<p class="text-danger fw-bold mb-2"><strong><i class="fa-solid fa-triangle-exclamation me-1"></i>Peringatan Toksisitas:</strong> ${s.warning}</p>` : ''}
          ${s.regimenRule ? `<div class="p-2 bg-warning-light rounded border border-warning text-dark fw-semibold mb-2"><i class="fa-solid fa-calendar-days me-1"></i><strong>Golden Rule Rejimen:</strong> ${s.regimenRule}</div>` : ''}
          <div class="text-muted mt-3 pt-2 border-top">
            <small><i class="fa-solid fa-clock-rotate-left me-1"></i><strong>Monitoring:</strong> ${s.status || 'Evaluasi berkala setiap perubahan dosis.'}</small>
          </div>
        </div>
      </div>
    `;

    if (btnPrev) btnPrev.disabled = (idx === 0);
    if (btnNext) btnNext.disabled = (idx === steps.length - 1);

    stepIndicators.forEach((ind, i) => {
      if (i === idx) {
        ind.classList.add('active', 'btn-primary');
        ind.classList.remove('btn-outline-primary');
      } else if (i < idx) {
        ind.classList.remove('active', 'btn-primary');
        ind.classList.add('btn-success');
      } else {
        ind.classList.remove('active', 'btn-primary', 'btn-success');
        ind.classList.add('btn-outline-primary');
      }
    });
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

// 5. Glomerular Hemodynamic Autoregulation Visualizer (DIKI)
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
      gfrClass: "bg-success",
      gfrLabel: "Normal GFR (~100%)",
      explanation: "Kondisi fisiologis normal: Prostaglandin menjaga arteriol aferen terbuka lebar, sementara Angiotensin II menjaga tonus arteriol eferen sehingga tekanan hidrostatik kapiler glomerulus optimal untuk filtrasi."
    },
    nsaid: {
      afferent: "VASOKONSTRIKSI (Inhibisi PGE2/PGI2)",
      efferent: "Normal (Dimediasi AT-II)",
      gfrValue: 45,
      gfrClass: "bg-warning text-dark",
      gfrLabel: "GFR Drop (~45%)",
      explanation: "NSAID menghambat COX-1/2 -> sintesis prostaglandin renal anjlok -> arteriol aferen menyempit hebat -> aliran darah masuk ke glomerulus tercekik -> GFR anjlok!"
    },
    acei: {
      afferent: "Normal (Dimediasi PGE2)",
      efferent: "VASODILATASI (Inhibisi Angiotensin II)",
      gfrValue: 55,
      gfrClass: "bg-warning text-dark",
      gfrLabel: "GFR Drop (~55%)",
      explanation: "ACE-Inhibitor / ARB memblokade AT-II -> arteriol eferen membuka lebar -> tekanan hidrostatik kapiler intraglomerular lolos bocor keluar -> laju filtrasi turun (SCr naik hingga 30% masih wajar)."
    },
    triple_whammy: {
      afferent: "SEMPIT TOTAL (Deplesi Volume + NSAID)",
      efferent: "BOCOR LEBAR (ACEI/ARB)",
      gfrValue: 15,
      gfrClass: "bg-danger",
      gfrLabel: "Severe Pre-Renal AKI (~15%)",
      explanation: "TRIPLE WHAMMY (Diuretik + NSAID + ACEI/ARB): Diuretik bikin hipovolemia, NSAID mencekik pintu masuk aferen, ACEI membuka pintu keluar eferen -> Tekanan kapiler glomerulus kolaps total -> Gagal Ginjal Akut mendadak!"
    },
    sglt2i: {
      afferent: "Vasokonstriksi Fisiologis via TGF",
      efferent: "Normal",
      gfrValue: 75,
      gfrClass: "bg-info text-dark",
      gfrLabel: "Initial 'eGFR Dip' (~75-80%)",
      explanation: "SGLT2 Inhibitor meningkatkan hantaran Na+ ke Macula Densa -> mengaktifkan Tubuloglomerular Feedback (TGF) -> vasokonstriksi aferen fisiologis -> menurunkan hiperfiltrasi podosit (nefroprotektif jangka panjang!)."
    },
    cni: {
      afferent: "Spasme Berat (Endotelin & NO Block)",
      efferent: "Normal",
      gfrValue: 35,
      gfrClass: "bg-danger",
      gfrLabel: "CNI Nephrotoxicity (~35%)",
      explanation: "Siklosporin / Takrolimus memicu pelepasan endotelin dan vasokonstriksi aferen poten. Terapi rescue: Penyesuaian TDM & pemberian CCB Dihidropiridin (Amlodipin) untuk membuka kembali arteriol aferen."
    }
  };

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => b.classList.remove('active', 'btn-primary'));
      scenarioBtns.forEach(b => b.classList.add('btn-outline-primary'));
      btn.classList.remove('btn-outline-primary');
      btn.classList.add('active', 'btn-primary');

      const mode = btn.dataset.scenario;
      const sc = scenarios[mode] || scenarios.normal;

      if (afferentStatus) afferentStatus.innerHTML = `<strong>Arteriol Aferen:</strong> ${sc.afferent}`;
      if (efferentStatus) efferentStatus.innerHTML = `<strong>Arteriol Eferen:</strong> ${sc.efferent}`;
      if (gfrGauge) {
        gfrGauge.style.width = `${sc.gfrValue}%`;
        gfrGauge.className = `progress-bar ${sc.gfrClass}`;
      }
      if (gfrText) gfrText.innerText = sc.gfrLabel;
      if (hemoExplanation) hemoExplanation.innerHTML = `<i class="fa-solid fa-circle-info text-primary me-2"></i>${sc.explanation}`;
    });
  });
}

// 6. KDIGO AKI Stager & Stewardship Tool
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
    const baseScr = parseFloat(baseScrInput.value);
    const currScr = parseFloat(currScrInput.value);
    const uo = parseFloat(urineOutputInput.value) || 1.0;
    const uoHrs = parseFloat(urineHoursInput.value) || 0;

    if (!baseScr || !currScr || baseScr <= 0 || currScr <= 0) {
      if (resultBox) resultBox.innerHTML = `<div class="alert alert-secondary mb-0"><i class="fa-solid fa-calculator me-2"></i>Masukkan SCr Baseline dan SCr Saat Ini untuk staging KDIGO!</div>`;
      return;
    }

    const scrDiff = currScr - baseScr;
    const scrRatio = currScr / baseScr;

    let stage = 0;
    let stageTitle = "Tidak Memenuhi Kriteria AKI";
    let stageClass = "bg-success text-white";
    let plan = [];

    // KDIGO Criteria
    // Stage 3: SCr >= 3.0x baseline OR SCr >= 4.0 mg/dL OR UO < 0.3 mL/kg/h for >= 24h OR Anuria >= 12h
    if (scrRatio >= 3.0 || currScr >= 4.0 || (uo < 0.3 && uoHrs >= 24) || (uo === 0 && uoHrs >= 12)) {
      stage = 3;
      stageTitle = "KDIGO Stage 3 (Severe AKI)";
      stageClass = "bg-danger text-white";
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
      stageClass = "bg-warning text-dark";
      plan = [
        "Hentikan obat pemicu utama (NSAID, Aminoglikosida, dll).",
        "Optimalkan status volume cairan dengan hidrasi kristaloid isotonik.",
        "Pantau ketat biomarker kreatinin, elektrolit, dan balance cairan tiap 12-24 jam.",
        "Lakukan TDM Vankomisin / Aminoglikosida bila masih harus dilanjutkan."
      ];
    } else if (scrDiff >= 0.3 || scrRatio >= 1.5 || (uo < 0.5 && uoHrs >= 6)) {
      stage = 1;
      stageTitle = "KDIGO Stage 1 (Mild AKI)";
      stageClass = "bg-info text-dark";
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
        <div class="p-3 bg-light rounded-3 border">
          <div class="d-flex justify-content-between align-items-center flex-wrap mb-2">
            <div>
              <span class="text-muted">Kenaikan Rasio SCr:</span>
              <h3 class="fw-bold text-dark mb-0">${scrRatio.toFixed(2)}x (${scrDiff >= 0 ? '+' : ''}${scrDiff.toFixed(2)} mg/dL)</h3>
            </div>
            <div>
              <span class="badge ${stageClass} fs-6 px-3 py-2 rounded-pill">${stageTitle}</span>
            </div>
          </div>
          <div class="mt-3">
            <h6 class="fw-bold text-primary mb-2"><i class="fa-solid fa-list-check me-2"></i>Rencana Asuhan Farmasi & Stewardship:</h6>
            <ul class="ps-3 mb-0">
              ${plan.map(p => `<li class="mb-1 text-secondary">${p}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    }
  }

  stageKdigo();
}

// 7. 30 HOTS Quiz Engine
function initDiliDikiQuiz() {
  const data = window.DILI_DIKI_DATA;
  if (!data || !data.quizQuestions) return;

  const questions = data.quizQuestions;
  let currentIdx = 0;
  let selectedCategory = 'all';
  let userAnswers = {}; // { qId: selectedOptionIndex }

  const questionCard = document.getElementById('quiz-question-card');
  const gridContainer = document.getElementById('quiz-grid-container');
  const categoryFilters = document.querySelectorAll('.quiz-cat-filter');
  const scoreBadge = document.getElementById('quiz-score-badge');
  const progressText = document.getElementById('quiz-progress-text');
  const btnPrev = document.getElementById('btn-quiz-prev');
  const btnNext = document.getElementById('btn-quiz-next');
  const btnReset = document.getElementById('btn-quiz-reset');

  // Filter Categories
  categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilters.forEach(b => b.classList.remove('active', 'btn-primary'));
      categoryFilters.forEach(b => b.classList.add('btn-outline-primary'));
      btn.classList.remove('btn-outline-primary');
      btn.classList.add('active', 'btn-primary');

      selectedCategory = btn.dataset.category;
      // find first question matching category
      const firstMatchIdx = questions.findIndex(q => selectedCategory === 'all' || q.category.toLowerCase().includes(selectedCategory.toLowerCase()));
      currentIdx = firstMatchIdx !== -1 ? firstMatchIdx : 0;
      renderQuiz();
    });
  });

  function getFilteredQuestions() {
    if (selectedCategory === 'all') return questions;
    return questions.filter(q => q.category.toLowerCase().includes(selectedCategory.toLowerCase()));
  }

  function renderQuizGrid() {
    if (!gridContainer) return;
    gridContainer.innerHTML = questions.map((q, idx) => {
      const isAnswered = userAnswers[q.id] !== undefined;
      const isCurrent = idx === currentIdx;
      let btnClass = 'btn-outline-secondary';

      if (isAnswered) {
        const isCorrect = q.options[userAnswers[q.id]]?.correct;
        btnClass = isCorrect ? 'btn-success text-white' : 'btn-danger text-white';
      }

      if (isCurrent) {
        btnClass += ' border-3 border-dark fw-bold shadow-sm';
      }

      return `
        <button class="btn btn-sm ${btnClass} quiz-matrix-cell m-1" style="width: 40px; height: 40px;" data-idx="${idx}">
          ${idx + 1}
        </button>
      `;
    }).join('');

    gridContainer.querySelectorAll('.quiz-matrix-cell').forEach(btn => {
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
      scoreBadge.innerHTML = `<i class="fa-solid fa-trophy text-warning me-1"></i>Skor: <strong>${correctCount * 10}</strong> (${correctCount}/${questions.length} Benar)`;
    }
    if (progressText) {
      progressText.innerText = `Terjawab ${answeredCount} dari ${questions.length} Soal`;
    }
  }

  function renderQuiz() {
    if (!questionCard) return;
    const q = questions[currentIdx];
    if (!q) return;

    const answeredIdx = userAnswers[q.id];
    const isAnswered = answeredIdx !== undefined;

    questionCard.innerHTML = `
      <div class="card border-0 shadow-sm rounded-4">
        <div class="card-header bg-white border-0 pt-4 px-4 d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <span class="badge bg-primary-light text-primary fw-bold px-3 py-2 rounded-pill me-2">
              <i class="fa-solid fa-tag me-1"></i>${q.category}
            </span>
            <span class="badge bg-secondary-light text-secondary fw-semibold px-3 py-2 rounded-pill">
              Soal ${currentIdx + 1} / ${questions.length}
            </span>
          </div>
          <span class="text-muted small"><i class="fa-solid fa-brain me-1"></i>HOTS Clinical Vignette</span>
        </div>
        <div class="card-body p-4">
          <h5 class="card-title fw-bold text-dark lh-base mb-4">${q.question}</h5>
          
          <div class="quiz-options-list">
            ${q.options.map((opt, optIdx) => {
              let optClass = 'btn-outline-light border text-dark';
              let optIcon = `<span class="badge bg-light text-dark me-2">${opt.label}</span>`;

              if (isAnswered) {
                if (opt.correct) {
                  optClass = 'btn-success text-white shadow-sm';
                  optIcon = `<i class="fa-solid fa-circle-check me-2"></i>`;
                } else if (optIdx === answeredIdx) {
                  optClass = 'btn-danger text-white shadow-sm';
                  optIcon = `<i class="fa-solid fa-circle-xmark me-2"></i>`;
                } else {
                  optClass = 'btn-outline-secondary opacity-50';
                }
              }

              return `
                <button class="btn ${optClass} w-100 text-start p-3 mb-2 rounded-3 quiz-option-btn d-flex align-items-start" 
                  data-opt-idx="${optIdx}" ${isAnswered ? 'disabled' : ''}>
                  <div class="mt-1">${optIcon}</div>
                  <div class="flex-grow-1">${opt.text}</div>
                </button>
              `;
            }).join('')}
          </div>

          ${isAnswered ? `
            <div class="quiz-explanation-box alert ${q.options[answeredIdx]?.correct ? 'alert-success border-success' : 'alert-danger border-danger'} mt-4 rounded-3 animate__animated animate__fadeIn">
              <h6 class="fw-bold mb-2">
                <i class="fa-solid ${q.options[answeredIdx]?.correct ? 'fa-circle-check text-success' : 'fa-triangle-exclamation text-danger'} me-2"></i>
                ${q.options[answeredIdx]?.correct ? 'Jawaban Benar!' : 'Jawaban Kurang Tepat!'}
              </h6>
              <p class="mb-0 text-dark small lh-base"><strong>Pembahasan Klinis:</strong> ${q.explanation}</p>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    // Attach click handlers to option buttons
    if (!isAnswered) {
      questionCard.querySelectorAll('.quiz-option-btn').forEach(btn => {
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
      if (confirm('Apakah kamu yakin ingin mengulang seluruh kuis DILI & DIKI?')) {
        userAnswers = {};
        currentIdx = 0;
        renderQuiz();
      }
    });
  }

  // Initial render
  renderQuiz();
}
