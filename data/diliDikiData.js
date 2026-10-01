/**
 * Dataset Modul 02: Monitoring Keamanan Terapi: DILI & DIKI
 * Dosen Pengampu: Apt. Vania Denise Djunaidy, S.Farm., M.Farm.Klin.
 * Farmasi Klinik Terintegrasi, Fakultas Farmasi UKWMS
 */

window.DILI_DIKI_DATA = {
  "meta": {
    "title": "Monitoring Keamanan Terapi: DILI & DIKI",
    "subtitle": "Drug-Induced Liver Injury & Drug-Induced Kidney Injury",
    "lecturer": "Apt. Vania Denise Djunaidy, S.Farm., M.Farm.Klin.",
    "institution": "Fakultas Farmasi, Universitas Katolik Widya Mandala Surabaya",
    "curriculumYear": "Tahun Ajaran 2026/2027",
    "vibe": "Evidence-Based, Case-Driven, Interactive Clinical Safety & Pharmacovigilance!"
  },
  "overview": {
    "heroTitle": "Drug-Induced Liver & Kidney Injury",
    "tagline": "Ketika Obat yang Menyembuhkan Berbalik Menjadi Toksik: Kenali, Cegah, dan Tangani!",
    "lecturerQuote": "Hai calon apoteker keren! Hepar dan ginjal adalah dua organ pelindung utama tubuh kita. Hepar adalah pusat komando biotransformasi, sedangkan ginjal adalah benteng filtrasi ekskresi. Justru karena beban kerja yang sangat tinggi dan paparan metabolit pekat, kedua organ ini paling sering terkena dampak toksisitas obat (DILI & DIKI). Yuk kuasai mekanisme, kalkulasi R-Ratio, kriteria Hy's Law, dan stewardship nefroproteksi!",
    "whyVulnerable": [
      {
        "organ": "Liver (Hepar)",
        "icon": "fa-heart-pulse",
        "reason": "Organ utama biotransformasi (Fase I FMO/CYP450 & Fase II Glukuronidasi/Sulfasi/Glutation). Pembentukan metabolit reaktif elektrofilik, radikal bebas (ROS), dan adduct protein dapat langsung merusak mitokondria atau memicu reaksi imun."
      },
      {
        "organ": "Kidney (Ginjal)",
        "icon": "fa-filter",
        "reason": "Menerima 20-25% curah jantung (Cardiac Output), memekatkan urin di tubulus melalui reabsorpsi air, dan mengekskresi obat aktif melalui sekresi tubulus aktif sehingga sel epitel tubulus terpapar konsentrasi obat yang luar biasa pekat."
      }
    ]
  },
  "dili": {
    "title": "Part 1: Drug-Induced Liver Injury (DILI)",
    "definition": "Gangguan struktur dan/atau fungsi hepar akibat paparan obat, produk herbal, atau suplemen non-infeksius. Merupakan salah satu penyebab utama gagal hati akut (Acute Liver Failure) dan penarikan obat dari pasar farmasi global.",
    "mechanisms": [
      {
        "id": "stress-oksidatif",
        "number": "01",
        "title": "Induksi Stres Oksidatif & Deplesi Glutation (GSH)",
        "desc": "Metabolit reaktif elektrofilik merusak mitokondria dan memicu badai Reactive Oxygen Species (ROS). Glutation (GSH) yang bertugas menetralisir ROS terkuras habis -> nekrosis hepatosit sentrilobular masif.",
        "keyDrug": "Parasetamol (Asetaminofen)",
        "detailFlow": "Dosis Lazim: 60% Glukuronidasi + 35% Sulfasi (Aman). Hanya 5-10% diubah CYP2E1 jadi NAPQI yang langsung dinetralisir cadangan GSH.\nOverdosis: Jalur glukuronidasi & sulfasi jenuh -> NAPQI melonjak drastis -> GSH intraseluler ludes -> NAPQI berikatan kovalen dengan residu sistein protein hepatosit -> Nekrosis hepar akut!\nAntidotum Spesifik: N-Asetilsistein (NAC) sebagai donor gugus sulfhidril (-SH) & prekursor L-sistein untuk regenerasi glutation.",
        "otherDrugs": "Pirazinamid, Isoniazid, Siklofosfamid."
      },
      {
        "id": "cholestatic",
        "number": "02",
        "title": "Cholestatic DILI (Gangguan Transporter Empedu)",
        "desc": "Hambatan pada transporter efflux asam empedu (BSEP / Bile Salt Export Pump) atau kerusakan epitel duktus biliaris menyebabkan stasis dan penumpukan asam empedu hidrofobik sitotoksik di hepatosit.",
        "keyDrug": "Amoksisilin-Klavulanat & Siklosporin",
        "detailFlow": "Siklosporin menghambat transporter BSEP secara langsung. Amoksisilin-Klavulanat memicu respons imun yang merusak kolangiosit duktus biliaris -> ikterus klinis, pruritus hebat, dan kenaikan tajam Alkaline Phosphatase (ALP) & GGT.\nTerapi Suportif: Asam Ursodeoksikolat (UDCA) untuk mengganti asam empedu toksik & Kolestiramin untuk meredakan pruritus.",
        "otherDrugs": "Steroid Anabolik, Klorpromazin, Eritromisin estolat."
      },
      {
        "id": "immune-mediated",
        "number": "03",
        "title": "Aktivasi Sistem Imun (Immuno-Allergic / Hapten)",
        "desc": "Obat atau metabolit reaktif bertindak sebagai Hapten, berikatan kovalen dengan protein seluler membentuk neoantigen yang dikenali sistem imun adaptive -> aktivasi sel T sitotoksik.",
        "keyDrug": "Halotan, Fenitoin, Karbamazepin, Sulfonamida",
        "detailFlow": "Sering disertai trias alergi sistemik: demam tinggi, ruam morbiliform/makulopapular difus, eosinofilia (>5-10%), limfadenopati (DRESS syndrome). Onset biasanya 1-8 minggu pascapaparan.\nTerapi: Penghentian segera obat pemicu + Kortikosteroid sistemik bila ada keterlibatan organ berat.",
        "otherDrugs": "Alopurinol, Nevirapin, Minosiklin."
      },
      {
        "id": "mitochondrial",
        "number": "04",
        "title": "Kerusakan Mitokondria & Hambatan Beta-Oksidasi",
        "desc": "Gangguan rantai transport elektron (ETC) dan penghambatan beta-oksidasi asam lemak menyebabkan akumulasi trigliserida mikrovesikular (Microvesicular Steatosis), deplesi ATP, dan asidosis laktat.",
        "keyDrug": "Asam Valproat",
        "detailFlow": "Valproat membentuk valproil-CoA yang menguras cadangan karnitin intraseluler dan menghambat enzim mitokondria -> steatosis mikrovesikular dan hiperamonemia ensefalopati.\nTerapi Spesifik: Suplementasi L-Karnitin (L-Carnitine) intravena atau oral.",
        "otherDrugs": "Amiodaron, Tetrasiklin IV dosis tinggi, Aspirin (Reye's Syndrome pada anak)."
      },
      {
        "id": "intrinsic-vs-idiosyncratic",
        "number": "05",
        "title": "Intrinsic (Direct) vs Idiosyncratic DILI",
        "desc": "Klasifikasi fundamental berdasarkan prediktabilitas dan mekanisme terjadinya cedera hepatosit:",
        "comparison": [
          {
            "type": "Direct / Intrinsic DILI",
            "traits": "Dose-dependent (tergantung dosis), Predictable (dapat diprediksi pada model hewan/manusia), Onset cepat (beberapa jam hingga beberapa hari), Insidensi tinggi bila dosis toksik terlampaui.",
            "example": "Parasetamol overdosis (> 10-15 gram), Karbon Tetraklorida (CCl4)."
          },
          {
            "type": "Idiosyncratic DILI",
            "traits": "Dose-independent (terjadi pada dosis terapeutik lazim), Unpredictable (sulit diprediksi), Onset bervariasi (1 minggu hingga beberapa bulan), Tergantung kerentanan imunogenetik pejamu (HLA polymorphism).",
            "example": "Isoniazid, Amoksisilin-Klavulanat, Flukonazol, Troglitazon."
          }
        ]
      }
    ],
    "diagnosticCriteria": {
      "title": "Kriteria Diagnosis DILI & Pola Kerusakan Liver (R-Ratio Formula)",
      "thresholds": [
        "ALT >= 5x ULN (Upper Limit of Normal)",
        "ALP >= 2x ULN (terutama bila disertai kenaikan GGT untuk konfirmasi bilier)",
        "ALT >= 3x ULN disertai Total Bilirubin >= 2x ULN"
      ],
      "rRatioFormula": "R = (ALT / ULN_ALT) / (ALP / ULN_ALP)",
      "patterns": [
        {
          "pattern": "Hepatoseluler (Hepatocellular)",
          "rValue": "R >= 5",
          "features": "ALT meningkat dominan (>= 3-5x ULN), nekrosis hepatosit dominan.",
          "examples": "Parasetamol, Isoniazid, Pirazinamid, Statin.",
          "prognosis": "Waspada Hy's Law bila Bilirubin total ikut melonjak! Risiko mortalitas gagal hati akut."
        },
        {
          "pattern": "Kolestatik (Cholestatic)",
          "rValue": "R <= 2",
          "features": "ALP meningkat dominan (>= 2x ULN), stasis empedu, pruritus (gatal hebat), ikterus.",
          "examples": "Amoksisilin-Klavulanat, Steroid Anabolik, Klorpromazin, Eritromisin.",
          "prognosis": "Penyembuhan lebih lambat (minggu-bulan) namun risiko mortalitas gagal hati akut lebih rendah dibanding hepatoseluler."
        },
        {
          "pattern": "Campuran (Mixed)",
          "rValue": "2 < R < 5",
          "features": "ALT dan ALP sama-sama meningkat signifikan secara bersamaan.",
          "examples": "Fenitoin, Ko-amoksiklav (pada fase lanjut), Sulfonamida, Azatioprin.",
          "prognosis": "Evaluasi kausalitas ganda dan pantau kedua enzim secara berkala hingga resolusi."
        }
      ]
    },
    "hysLaw": {
      "title": "Hy's Law (Hukum Hy) - The Sentinel Red Flag of Fatal DILI",
      "definition": "Ditemukan oleh pakar hepatologi Dr. Hyman Zimmerman: Trias cedera hepatoseluler parah tanpa kolestasis awal yang memicu disfungsi ekskresi bilirubin klinis.",
      "criteria": [
        "1. ALT atau AST >= 3x ULN (menandakan cedera hepatosit substansial)",
        "2. Total Bilirubin >= 2x ULN (menandakan kegagalan klirens bilirubin hepar / ikterus)",
        "3. Tanpa kenaikan awal ALP yang signifikan (< 2x ULN, menyingkirkan obstruksi bilier murni)"
      ],
      "mortalityRisk": "Mortalitas mencapai 10% s/d 50% akibat Gagal Hati Akut (Acute Liver Failure) jika obat penyebab tidak segera dihentikan!"
    },
    "management": {
      "general": [
        "Segera HENTIKAN (discontinue) seluruh obat dan suplemen yang dicurigai sebagai pemicu!",
        "Berikan terapi suportif (hidrasi cairan adekuat, koreksi hipoglikemia, nutrisi tinggi kalori).",
        "Pantau ketat biomarker hati (ALT, AST, ALP, Total Bilirubin, INR/PT) tiap 48-72 jam hingga fase perbaikan.",
        "Rawat inap intensif bila ada tanda Severe DILI (INR > 1.5, Ensefalopati Hepatik, Ikterus progresif)."
      ],
      "specificAntidotes": [
        {
          "drug": "N-Asetilsistein (NAC)",
          "indication": "DILI akibat Parasetamol (donor gugus sulfhidril memulihkan glutation). Terbukti bermanfaat juga pada non-paracetamol acute liver failure."
        },
        {
          "drug": "Ursodeoxycholic Acid (UDCA)",
          "indication": "DILI Kolestatik (asam empedu hidrofilik yang melindungi membran hepatosit & merangsang sekresi empedu apical)."
        },
        {
          "drug": "Kolestiramin (Cholestyramine)",
          "indication": "DILI Kolestatik dengan pruritus berat (resin penukar ion mengikat asam empedu di saluran cerna)."
        },
        {
          "drug": "L-Karnitin (L-Carnitine)",
          "indication": "DILI akibat Asam Valproat (memulihkan kapasitas beta-oksidasi asam lemak di mitokondria)."
        },
        {
          "drug": "Kortikosteroid (Prednison/Metilprednisolon)",
          "indication": "DILI tipe Immuno-allergic / DRESS syndrome dengan manifestasi hipersensitivitas sistemik."
        }
      ],
      "oatReintroduction": {
        "title": "Algoritma Penanganan & Reintroduksi OAT (Tuberkulosis)",
        "toxicityOrder": "Tingkat Hepatotoksisitas Intrinsik: Pirazinamid (Z) > Isoniazid (H) > Rifampisin (R)",
        "stopRule": "HENTIKAN SEMUA OAT bila:\n1. Pasien bergejala klinis (ikterus, mual, muntah, lemas) + ALT/AST >= 3x ULN, ATAU\n2. Tanpa gejala klinis (asimtomatik), tetapi ALT/AST >= 5x ULN, ATAU\n3. Total Bilirubin >= 2 mg/dL.",
        "rechallengeLadder": "Setelah enzim hati dan gejala klinis kembali NORMAL, reintroduksi obat satu per satu secara berurutan dengan jeda 3-7 hari:\n• Langkah 1: Mulai Rifampisin (R) dosis penuh -> pantau LFT 3-7 hari.\n• Langkah 2: Tambahkan Isoniazid (H) dosis penuh -> pantau LFT 3-7 hari.\n• Langkah 3: Tambahkan Pirazinamid (Z) HANYA bila DILI awal tidak parah dan paduan standar sangat dibutuhkan.\n\nAlternatif Rejimen Khusus:\n• Jika R tidak dapat ditoleransi: Gunakan paduan 2HES / 10HE.\n• Jika H tidak dapat ditoleransi: Gunakan paduan 6-9 RZE.\n• Jika Z dihentikan permanen pada fase intensif: Perpanjang paduan RH pada fase lanjutan hingga total 9 bulan (2RH-E / 7RH)!"
      }
    }
  },
  "diki": {
    "title": "Part 2: Drug-Induced Kidney Injury (DIKI)",
    "definition": "Cedera ginjal akut atau kronis akibat paparan obat atau metabolitnya, yang menyebabkan penurunan Laju Filtrasi Glomerulus (GFR) dan/atau kerusakan struktural tubulointerstisial ginjal.",
    "categories": [
      {
        "id": "dysfunction-without-damage",
        "title": "1. Dysfunction Without Damage (Hemodynamically Mediated AKI)",
        "desc": "Gangguan fungsi filtrasi glomerulus akibat penurunan tekanan hidrostatik kapiler intraglomerular TANPA kerusakan struktural permanen pada sel epitel tubulus (bersifat reversibel bila pemicu dihentikan).",
        "mechanisms": [
          {
            "drugGroup": "NSAID (Non-Steroidal Anti-inflammatory Drugs)",
            "action": "Menghambat enzim siklooksigenase (COX-1 & COX-2) -> Menurunkan sintesis Prostaglandin PGE2 & PGI2 -> Menghilangkan vasodilatasi fisiologis arteriol AFEREN -> Arteriol aferen vasokonstriksi tajam -> Aliran darah glomerulus drop -> GFR anjlok drastis!"
          },
          {
            "drugGroup": "ACE-Inhibitor & ARB",
            "action": "Menghambat pembentukan / aksi Angiotensin II -> Menghilangkan vasokonstriksi fisiologis arteriol EFEREN -> Arteriol eferen berdilatasi -> Tekanan hidrostatik kapiler intraglomerular bocor keluar -> GFR turun (kenaikan SCr hingga 30% dari baseline masih dapat ditoleransi)."
          },
          {
            "drugGroup": "SGLT2 Inhibitor (Empagliflozin, Dapagliflozin)",
            "action": "Menghambat reabsorpsi Na+ di tubulus proksimal -> Pengiriman Na+ ke Macula Densa meningkat -> Mengaktifkan Tubuloglomerular Feedback (TGF) -> Vasokonstriksi arteriol aferen fisiologis (terjadi 'eGFR dip' sementara 10-30% yang terbukti nefroprotektif jangka panjang)."
          },
          {
            "drugGroup": "Calcineurin Inhibitors (Siklosporin, Takrolimus)",
            "action": "Memicu vasokonstriksi arteriol aferen renal yang poten melalui pelepasan endotelin-1 dan inhibisi sintesis Nitric Oxide (NO)."
          }
        ]
      },
      {
        "id": "damage-without-dysfunction",
        "title": "2. Damage Without Dysfunction / With Delayed Dysfunction",
        "desc": "Kerusakan struktural sel epitel tubulus atau presipitasi intratubular yang awalnya mungkin belum menaikkan SCr namun secara progresif merusak integritas nefron.",
        "types": [
          {
            "name": "A. Obstructive Nephropathy (Crystal Nephropathy)",
            "mechanism": "Presipitasi dan pengendapan kristal obat di lumen tubulus ginjal akibat kelarutan rendah dalam urin yang asam/pekat -> obstruksi aliran urin intratubular & reaksi inflamasi interstitial.",
            "culpritDrugs": "Asiklovir IV (terutama bolus cepat < 1 jam), Metotreksat dosis tinggi, Sulfametoksazol/Sulfonamida, Siprofloksasin.",
            "prevention": "Hidrasi cairan kristaloid masif sebelum & sesudah infus, laju infus lambat (> 1-2 jam), serta ALKALINISASI URIN dengan Natrium Bikarbonat (target pH urin >= 7.0 untuk metotreksat dan sulfonamida)."
          },
          {
            "name": "B. Acute Tubular Necrosis (ATN) - Toksisitas Epitel Tubulus Langsung",
            "mechanism": "Nekrosis langsung pada sel epitel tubulus proksimal/distal akibat stres oksidatif, akumulasi lisosomal, dan gangguan transport membran.",
            "culpritDrugs": "Aminoglikosida (Gentamisin, Amikasin, Tobramisin), Sisplatin, Amfoterisin B Deoksikolat.",
            "aminoglycosideLore": "Hubungan Struktur-Toksisitas Aminoglikosida: Molekul aminoglikosida kaya gugus amino yang bermuatan POSITIF (kationik) pada pH fisiologis. Membran sel epitel tubulus proksimal kaya fosfolipid bermuatan NEGATIF (anionik). Tarikan elektrostatik kuat memicu endositosis masif via reseptor megalin/kubilin -> akumulasi di lisosom -> ruptur lisosom & pelepasan enzim hidrolitik -> nekrosis tubular akut!"
          },
          {
            "name": "C. Osmotic Nephropathy",
            "mechanism": "Vakuolisasi dan pembengkakan sel epitel tubulus proksimal akibat akumulasi zat terlarut hiperosmoler eksogen.",
            "culpritDrugs": "Manitol dosis tinggi kumulatif (>300g), Imunoglobulin Intravena (IVIG yang mengandung sukrosa sebagai stabilizer)."
          }
        ]
      }
    ],
    "kdigoCriteria": {
      "title": "Kriteria Diagnostik KDIGO untuk Acute Kidney Injury (DIKI)",
      "stages": [
        {
          "stage": "Stage 1",
          "scrCriteria": "Kenaikan SCr >= 0.3 mg/dL dalam 48 jam ATAU kenaikan 1.5 - 1.9x baseline dalam 7 hari",
          "urineCriteria": "Urin < 0.5 mL/kg/jam selama 6 - 12 jam"
        },
        {
          "stage": "Stage 2",
          "scrCriteria": "Kenaikan SCr 2.0 - 2.9x nilai baseline",
          "urineCriteria": "Urin < 0.5 mL/kg/jam selama >= 12 jam"
        },
        {
          "stage": "Stage 3",
          "scrCriteria": "Kenaikan SCr >= 3.0x baseline ATAU SCr >= 4.0 mg/dL ATAU inisiasi Terapi Pengganti Ginjal (Dialisis)",
          "urineCriteria": "Urin < 0.3 mL/kg/jam selama >= 24 jam ATAU Anuria >= 12 jam"
        }
      ],
      "biomarkerInsight": "Cystatin C Serum: Tidak dipengaruhi oleh massa otot, usia ekstrim, atau diet protein; meningkat 24-48 jam lebih awal dibanding Serum Kreatinin. Sangat berguna untuk membedakan Pseudo-AKI (misal inhibisi kompetitif sekresi tubulus oleh Trimetoprim/Simetidin) vs True DIKI!"
    },
    "stewardship": {
      "title": "Multimodal Nephrotoxin Stewardship Framework",
      "pillars": [
        {
          "title": "1. Manajemen Terapi & Eliminasi Pemicu",
          "points": [
            "Hentikan atau turunkan dosis obat nefrotoksik terduga segera setelah tanda awal terdeteksi.",
            "Ganti dengan alternatif antibiotik / analgesik non-nefrotoksik jika memungkinkan.",
            "Hindari kombinasi TRIPLE WHAMMY (ACEI/ARB + Diuretik + NSAID).",
            "Lakukan Therapeutic Drug Monitoring (TDM) rutin pada Vankomisin (target AUC24/MIC 400-600) dan Aminoglikosida."
          ]
        },
        {
          "title": "2. Terapi Cairan & Optimalisasi Hemodinamik",
          "points": [
            "Target Tekanan Darah Arteri Rata-rata (MAP) pada AKI adalah > 65 - 70 mmHg.",
            "Resusitasi cairan kristaloid isotonik (Normal Saline 0.9% atau Ringer Laktat) untuk memastikan perfusi kapiler glomerulus adekuat.",
            "Bila MAP < 65 mmHg pasca hidrasi: Berikan Vasopresor Norepinefrin. Tambahkan Dobutamin bila terjadi penurunan Cardiac Output."
          ]
        },
        {
          "title": "3. Manajemen Gangguan Asam-Basa & Elektrolit",
          "points": [
            "Asidosis Metabolik Berat: Bila pH arteri < 7.20 dan HCO3 < 15 mEq/L -> Berikan Natrium Bikarbonat (NaBic) IV.",
            "Hiperkalemia Ringan (K 5.0 - 5.5 mEq/L): Restriksi kalium diet, stop spironolakton & ACEI/ARB.",
            "Hiperkalemia Sedang-Berat (K >= 5.5 - 6.5 mEq/L): Kalsium Glukonat 10% IV (stabilisasi membran miokard), Insulin 10 IU + Dextrose 50% IV (shift kalium intraseluler), dan Resin Penukar Ion (Calcium Polystyrene Sulfonate)."
          ]
        },
        {
          "title": "4. Kausalitas & Pelaporan MESO (Pharmacovigilance)",
          "points": [
            "Gunakan Algoritma Naranjo untuk menilai probabilitas Adverse Drug Reaction (Skor >= 9 Definite, 5-8 Probable, 1-4 Possible, <= 0 Doubtful).",
            "Laporkan seluruh dugaan kasus DIKI dan DILI ke Pusat Farmakovigilans Nasional BPOM melalui formulir Kuning MESO!"
          ]
        }
      ]
    }
  },
  "quiz": [
    {
      "id": "dq1",
      "category": "DILI - Kalkulasi & Pola",
      "question": "Pasien pria 45 tahun yang sedang menjalani terapi antibiotik Amoksisilin-Klavulanat untuk sinusitis mengalami ikterus dan pruritus hebat. Hasil laboratorium: ALT 120 U/L (ULN 40 U/L) dan ALP 360 U/L (ULN 120 U/L). Berapakah nilai Rasio R (R-value) dan bagaimana klasifikasi pola cedera livernya?",
      "options": [
        {
          "label": "A",
          "text": "R = 1.0 (Pola Kolestatik, R <= 2)",
          "correct": true
        },
        {
          "label": "B",
          "text": "R = 3.0 (Pola Campuran, 2 < R < 5)",
          "correct": false
        },
        {
          "label": "C",
          "text": "R = 6.0 (Pola Hepatoseluler, R >= 5)",
          "correct": false
        },
        {
          "label": "D",
          "text": "R = 0.33 (Pola Iskemik)",
          "correct": false
        }
      ],
      "explanation": "R = (ALT / ULN_ALT) / (ALP / ULN_ALP) = (120 / 40) / (360 / 120) = 3.0 / 3.0 = 1.0. Karena R <= 2, cedera terklasifikasi sebagai DILI tipe KOLESTATIK. Amoksisilin-klavulanat adalah penyebab klasik kolestatik DILI melalui kerusakan epitel duktus biliaris."
    },
    {
      "id": "dq2",
      "category": "DILI - Hy's Law",
      "question": "Seorang wanita 32 tahun mengeluh mual, lemas, dan sklera ikterik setelah 4 minggu mengonsumsi obat anti-TBC. Hasil lab: ALT 240 U/L (ULN 40 U/L), Bilirubin Total 4.2 mg/dL (ULN 1.0 mg/dL), dan ALP 130 U/L (ULN 120 U/L). Apakah kondisi ini memenuhi Kriteria Hy's Law (Hukum Hy) dan apa maknanya?",
      "options": [
        {
          "label": "A",
          "text": "Ya, memenuhi Hy's Law (ALT >= 3x ULN, Bilirubin >= 2x ULN, tanpa kolestasis awal ALP); menandakan risiko mortalitas gagal hati akut 10-50%",
          "correct": true
        },
        {
          "label": "B",
          "text": "Tidak, karena ALP harus meningkat minimal 10 kali lipat",
          "correct": false
        },
        {
          "label": "C",
          "text": "Tidak, karena Bilirubin harus di atas 15 mg/dL",
          "correct": false
        },
        {
          "label": "D",
          "text": "Ya, tetapi hanya menandakan hepatitis infeksius biasa",
          "correct": false
        }
      ],
      "explanation": "Kriteria Hy's Law terpenuhi: ALT = 6x ULN (>=3x), Total Bilirubin = 4.2x ULN (>=2x), dan ALP normal/minimal (<2x). Hy's Law adalah indikator prognostik cedera hepatoseluler parah dengan mortalitas 10-50% jika obat tidak segera disetop!"
    },
    {
      "id": "dq3",
      "category": "DILI - Mekanisme & Toksisitas",
      "question": "Pada kasus keracunan akut Parasetamol dosis toksik (> 10-15 gram), mengapa metabolit elektrofilik NAPQI menumpuk secara masif di hepatosit?",
      "options": [
        {
          "label": "A",
          "text": "Kapasitas jalur metabolisme nontoksik utama (Glukuronidasi ~60% dan Sulfasi ~35%) mengalami kejenuhan (saturasi), sehingga sisa obat dialihkan secara masif ke enzim CYP2E1 menghasilkan NAPQI yang menghabiskan seluruh cadangan Glutation (GSH)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Parasetamol langsung memblokade sekresi empedu di duktus sistikus",
          "correct": false
        },
        {
          "label": "C",
          "text": "Glukuronidasi berubah fungsi memproduksi asam amino toksik",
          "correct": false
        },
        {
          "label": "D",
          "text": "Parasetamol membunuh seluruh bakteri flora normal usus",
          "correct": false
        }
      ],
      "explanation": "Pada dosis supraterapeutik, enzim sulfotransferase dan UDP-glukuronosiltransferase mengalami kejenuhan. Proporsi metabolisme bergeser ke CYP2E1 menghasilkan NAPQI dalam jumlah melebihi kapasitas cadangan GSH hepatosit."
    },
    {
      "id": "dq4",
      "category": "DILI - Terapi Spesifik",
      "question": "Bagaimana mekanisme farmakologi N-Asetilsistein (NAC) bekerja menyelamatkan pasien dari nekrosis hepar akibat overdosis parasetamol?",
      "options": [
        {
          "label": "A",
          "text": "NAC menyediakan gugus sulfhidril esensial untuk mengembalikan sintesis Glutation (GSH) intraseluler dan dapat berikatan langsung menetralkan NAPQI menjadi konjugat merkapturat nontoksik",
          "correct": true
        },
        {
          "label": "B",
          "text": "NAC menginduksi muntah instan untuk mengeluarkan obat dari darah",
          "correct": false
        },
        {
          "label": "C",
          "text": "NAC mengikat reseptor opioid di sistem saraf pusat",
          "correct": false
        },
        {
          "label": "D",
          "text": "NAC memblokade filtrasi glomerulus ginjal",
          "correct": false
        }
      ],
      "explanation": "NAC bertindak sebagai prekursor L-sistein yang menyuplai sintesis de novo glutation hepar serta mendonorkan gugus sulfhidril bebas (-SH) untuk mengkonjugasi NAPQI secara langsung menjadi metabolit sistein/merkapturat yang larut air."
    },
    {
      "id": "dq5",
      "category": "DILI - OAT Algoritma",
      "question": "Dari ketiga obat antituberkulosis lini pertama berikut, urutkanlah dari yang memiliki potensi hepatotoksisitas PALING TINGGI hingga paling rendah menurut kepustakaan klinis:",
      "options": [
        {
          "label": "A",
          "text": "Pirazinamid (Z) > Isoniazid (H) > Rifampisin (R)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Rifampisin (R) > Pirazinamid (Z) > Isoniazid (H)",
          "correct": false
        },
        {
          "label": "C",
          "text": "Etambutol (E) > Streptomisin (S) > Rifampisin (R)",
          "correct": false
        },
        {
          "label": "D",
          "text": "Isoniazid (H) > Rifampisin (R) > Etambutol (E)",
          "correct": false
        }
      ],
      "explanation": "Tingkat hepatotoksisitas intrinsik OAT: Pirazinamid (Z, paling hepatotoksik & onset sering lambat) > Isoniazid (H, metabolit asetilhidrazin) > Rifampisin (R, lebih sering memicu kolestasis transien / induksi enzim)."
    },
    {
      "id": "dq6",
      "category": "DILI - OAT Algoritma",
      "question": "Pasien TB paru mengalami DILI dengan ALT 280 U/L saat fase intensif. Setelah seluruh OAT distop dan enzim hati kembali normal, dokter memulai reintroduksi bertahap. Jika Pirazinamid (Z) diputuskan untuk DIHENTIKAN PERMANEN, bagaimana penyesuaian paduan rejimen TB selanjutnya?",
      "options": [
        {
          "label": "A",
          "text": "Paduan Rifampisin dan Isoniazid (RH) pada fase lanjutan diperpanjang durasinya hingga total 9 bulan (2RH-E / 7RH)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Terapi TB dihentikan total karena pasien dianggap sudah sembuh",
          "correct": false
        },
        {
          "label": "C",
          "text": "Diberikan monoterapi Etambutol selama 2 tahun",
          "correct": false
        },
        {
          "label": "D",
          "text": "Dosis Isoniazid digandakan 5 kali lipat",
          "correct": false
        }
      ],
      "explanation": "Sesuai pedoman WHO dan Kemenkes RI: Jika Pirazinamid (Z) tidak dapat diberikan pada fase intensif akibat hepatotoksisitas berat, paduan bakterisidal RH harus diperpanjang durasi totalnya menjadi 9 bulan untuk mencegah kekambuhan."
    },
    {
      "id": "dq7",
      "category": "DILI - Terapi Spesifik",
      "question": "Seorang anak 8 tahun dengan epilepsi refrakter yang mengonsumsi Asam Valproat dosis tinggi mengalami letargi berat, hiperamonemia, dan steatosis mikrovesikular hepar akibat disfungsi beta-oksidasi mitokondria. Terapi spesifik lini pertama apakah yang harus segera diberikan?",
      "options": [
        {
          "label": "A",
          "text": "L-Karnitin (L-Carnitine) intravena / oral",
          "correct": true
        },
        {
          "label": "B",
          "text": "Nalokson intravena",
          "correct": false
        },
        {
          "label": "C",
          "text": "Atropin sulfat",
          "correct": false
        },
        {
          "label": "D",
          "text": "Furosemid dosis tinggi",
          "correct": false
        }
      ],
      "explanation": "Asam valproat membentuk metabolit valproil-CoA yang menguras cadangan karnitin intraseluler dan menghambat transfer asam lemak ke mitokondria. Suplementasi L-Karnitin terbukti secara klinis memperbaiki beta-oksidasi dan menurunkan kadar amonia darah."
    },
    {
      "id": "dq8",
      "category": "DILI - Kolestatik & Pruritus",
      "question": "Pasien wanita 50 tahun mengalami DILI tipe kolestatik pasca terapi Eritromisin estolat dengan keluhan gatal (pruritus) parah yang tidak membaik dengan antihistamin. Agen pengikat asam empedu di lumen usus manakah yang direkomendasikan untuk mengatasi pruritus tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Kolestiramin (Cholestyramine) resin 4 gram oral sebelum makan",
          "correct": true
        },
        {
          "label": "B",
          "text": "Omeprazol 40 mg IV",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kloramfenikol tetes telinga",
          "correct": false
        },
        {
          "label": "D",
          "text": "Parasetamol infus 1 gram",
          "correct": false
        }
      ],
      "explanation": "Kolestiramin adalah resin penukar ion non-absorbable yang mengikat asam empedu di saluran cerna dan memfasilitasi ekskresi feses, menurunkan kadar asam empedu serum yang memicu iritasi nosiseptor kutaneus penyebab pruritus kolestatik."
    },
    {
      "id": "dq9",
      "category": "DILI - Immuno-Allergic & DRESS",
      "question": "Seorang pasien yang mengonsumsi Fenitoin selama 3 minggu mengalami demam tinggi (39°C), ruam kulit makulopapular difus, limfadenopati generalisata, eosinofilia darah 15%, dan ALT 450 U/L. Sindrom toksisitas imun apakah yang paling tepat mendeskripsikan kondisi ini?",
      "options": [
        {
          "label": "A",
          "text": "DRESS Syndrome (Drug Reaction with Eosinophilia and Systemic Symptoms) / Immuno-allergic DILI",
          "correct": true
        },
        {
          "label": "B",
          "text": "Direct Intrinsic Acetaminophen Toxicity",
          "correct": false
        },
        {
          "label": "C",
          "text": "Fatty Liver Disease non-alkoholik murni",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sindrom Cushing iatrogenik",
          "correct": false
        }
      ],
      "explanation": "Kombinasi ruam kulit, demam, limfadenopati, eosinofilia tinggi, dan keterlibatan organ dalam (hepatitis) setelah 2-8 minggu paparan antikonvulsan aromatik (Fenitoin/Karbamazepin) adalah ciri klasik DRESS syndrome yang dimediasi respon hipersensitivitas sel T."
    },
    {
      "id": "dq10",
      "category": "DILI - Threshold Penghentian",
      "question": "Menurut konsensus DILI internasional dan pedoman klinis, pada kondisi manakah obat terduga hepatotoksik HARUS SEGERA DIHENTIKAN meskipun pasien BELUM MENUNJUKKAN GEJALA (asimtomatik)?",
      "options": [
        {
          "label": "A",
          "text": "Kenaikan ALT atau AST >= 5x batas atas nilai normal (ULN)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Kenaikan ALT atau AST 1.5x ULN",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kadar Albumin serum 3.8 g/dL (normal)",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kadar bilirubin total 0.8 mg/dL",
          "correct": false
        }
      ],
      "explanation": "Ambang batas baku penghentian obat pada DILI asimtomatik adalah ALT/AST >= 5x ULN. Bila terdapat gejala klinis (mual, muntah, lemas, ikterus, nyeri perut kanan atas), batas penghentian lebih ketat yaitu ALT/AST >= 3x ULN atau Total Bilirubin >= 2 mg/dL."
    },
    {
      "id": "dq11",
      "category": "DILI - OAT Rechallenge",
      "question": "Dalam protokol reintroduksi OAT lini pertama setelah episode DILI membaik, mengapa Rifampisin (R) dipilih sebagai obat PERTAMA yang direintroduksi dan bukan Pirazinamid (Z)?",
      "options": [
        {
          "label": "A",
          "text": "Rifampisin memiliki potensi hepatotoksisitas intrinsik paling rendah di antara OAT lini pertama dan merupakan komponen bakterisidal terpenting yang harus dipastikan tolerabilitasnya terlebih dahulu",
          "correct": true
        },
        {
          "label": "B",
          "text": "Rifampisin adalah antidotum untuk kerusakan hepar",
          "correct": false
        },
        {
          "label": "C",
          "text": "Karena Rifampisin tidak dimetabolisme di hati",
          "correct": false
        },
        {
          "label": "D",
          "text": "Karena Pirazinamid tidak lagi diproduksi",
          "correct": false
        }
      ],
      "explanation": "Urutan reintroduksi OAT (R -> H -> Z) didasarkan pada potensi hepatotoksisitas dan nilai esensial obat. R adalah obat paling poten dengan hepatotoksisitas terendah, sedangkan Z adalah yang paling hepatotoksik sehingga diuji paling akhir atau dieliminasi jika perlu."
    },
    {
      "id": "dq12",
      "category": "DILI - Asam Ursodeoksikolat",
      "question": "Apa rasionalitas farmakoterapi pemberian Asam Ursodeoksikolat (UDCA) pada kasus DILI dengan pola kolestatik kronis atau stasis empedu berkepanjangan?",
      "options": [
        {
          "label": "A",
          "text": "UDCA adalah asam empedu hidrofilik non-toksik yang menggantikan asam empedu hidrofobik endogen yang sitotoksik, menstimulasi sekresi empedu membran apikal, dan memiliki efek anti-apoptosis pada kolangiosit",
          "correct": true
        },
        {
          "label": "B",
          "text": "UDCA menghambat sintesis hemoglobin di sumsum tulang",
          "correct": false
        },
        {
          "label": "C",
          "text": "UDCA membunuh bakteri Mycobacterium tuberculosis",
          "correct": false
        },
        {
          "label": "D",
          "text": "UDCA menghentikan sekresi insulin pankreas",
          "correct": false
        }
      ],
      "explanation": "UDCA memodulasi kolam asam empedu (bile acid pool) dengan menggusur asam empedu toksik hidrofobik, menstimulasi transporter ekskresi empedu (BSEP & MRP2), dan melindungi membran mitokondria hepatosit dari apoptosis."
    },
    {
      "id": "dq13",
      "category": "DILI - Intrinsic vs Idiosyncratic",
      "question": "Manakah pernyataan yang PALING BENAR membedakan Intrinsic DILI dengan Idiosyncratic DILI?",
      "options": [
        {
          "label": "A",
          "text": "Intrinsic DILI bersifat dose-dependent dan terprediksi pada semua individu (contoh: Parasetamol overdosis), sedangkan Idiosyncratic DILI bersifat dose-independent, tak terprediksi, dan bergantung pada susceptibilitas genetik/imun pejamu",
          "correct": true
        },
        {
          "label": "B",
          "text": "Intrinsic DILI tidak berbahaya, sedangkan Idiosyncratic DILI selalu fatal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Intrinsic DILI hanya terjadi pada ginjal, bukan hepar",
          "correct": false
        },
        {
          "label": "D",
          "text": "Idiosyncratic DILI selalu memiliki onset dalam 1 jam pasca konsumsi obat",
          "correct": false
        }
      ],
      "explanation": "Intrinsic (Direct) DILI memiliki kurva dosis-respons yang jelas, insidensi tinggi pada dosis toksik, dan onset cepat. Idiosyncratic DILI tidak berkorelasi linier dengan dosis lazim, insidensi rendah (1:1.000-1:100.000), onset lambat/bervariasi, dan dimediasi faktor imunogenetik."
    },
    {
      "id": "dq14",
      "category": "DILI - Laboratorium Penunjang",
      "question": "Seorang apoteker bangsal mengamati pasien dengan ALT 250 U/L dan ALP 180 U/L. Pemeriksaan enzim penunjang apakah yang paling spesifik untuk memastikan bahwa kenaikan ALP memang berasal dari traktus biliaris/hepar dan BUKAN berasal dari jaringan tulang?",
      "options": [
        {
          "label": "A",
          "text": "Gamma-Glutamyl Transferase (GGT) atau 5'-Nukleotidase",
          "correct": true
        },
        {
          "label": "B",
          "text": "Kreatinin Kinase (CK-MB)",
          "correct": false
        },
        {
          "label": "C",
          "text": "Amilase dan Lipase serum",
          "correct": false
        },
        {
          "label": "D",
          "text": "Laktat Dehidrogenase (LDH)",
          "correct": false
        }
      ],
      "explanation": "ALP dapat diproduksi oleh hepar/duktus biliaris, tulang, plasenta, dan usus. GGT dan 5'-Nukleotidase meningkat paralel dengan ALP hanya bila sumber patologi berasal dari hepatobilier, sehingga krusial untuk konfirmasi DILI kolestatik."
    },
    {
      "id": "dq15",
      "category": "DILI - Kausalitas RUCAM",
      "question": "Dalam penegakan kausalitas DILI, metode Roussel Uclaf Causality Assessment Method (RUCAM) memberikan bobot penilaian tinggi pada:",
      "options": [
        {
          "label": "A",
          "text": "Selang waktu pemaparan obat hingga onset gejala (Time to onset), kecepatan pemulihan enzim pasca penghentian obat (Dechallenge), dan hasil rechallenge yang terdokumentasi",
          "correct": true
        },
        {
          "label": "B",
          "text": "Harga obat dan negara produsen obat",
          "correct": false
        },
        {
          "label": "C",
          "text": "Warna urine pasien saat pagi hari",
          "correct": false
        },
        {
          "label": "D",
          "text": "Tekanan darah sistolik dan diastolik",
          "correct": false
        }
      ],
      "explanation": "RUCAM adalah instrumen terstandar khusus hepatotoksisitas yang mengevaluasi: time to onset, perjalanan klinis pasca dechallenge, faktor risiko pejamu (usia/alkohol), obat konkuren, penyingkiran penyebab non-obat (hepatitis virus A/B/C/E, autoimun, iskemia), dan riwayat rechallenge."
    },
    {
      "id": "dq16",
      "category": "DIKI - Hemodinamik",
      "question": "Mengapa kombinasi NSAID (misal Ketorolak/Ibuprofen) dengan ACE-Inhibitor (misal Kaptopril/Ramipril) pada pasien hipovolemik sangat berbahaya bagi fungsi filtrasi ginjal?",
      "options": [
        {
          "label": "A",
          "text": "NSAID memicu vasokonstriksi arteriol aferen (hambat PGE2/PGI2), sedangkan ACE-Inhibitor memicu vasodilatasi arteriol eferen (hambat Angiotensin II), sehingga tekanan kapiler glomerulus kolaps total dan GFR anjlok drastis (Hemodynamically Mediated AKI)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Kedua obat membentuk kristal yang menyumbat uretra",
          "correct": false
        },
        {
          "label": "C",
          "text": "ACE-Inhibitor menghancurkan ikatan protein NSAID di lambung",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kombinasi tersebut memicu pertumbuhan kista ginjal bawaan",
          "correct": false
        }
      ],
      "explanation": "Autoregulasi glomerulus menjaga GFR dengan aferen terbuka (dimediasi Prostaglandin) dan eferen tertahan (dimediasi AT-II). NSAID menutup pintu masuk (aferen konstriksi) dan ACEI membuka pintu keluar (eferen dilatasi) -> tekanan intraglomerular lenyap -> AKI mendadak!"
    },
    {
      "id": "dq17",
      "category": "DIKI - SGLT2i",
      "question": "Pada inisiasi obat antidiabetes SGLT2 Inhibitor (Dapagliflozin / Empagliflozin), sering terlihat penurunan awal eGFR sebesar 10-30% ('eGFR Dip') dalam 2-4 minggu pertama. Bagaimana mekanisme fisiologis fenomena ini?",
      "options": [
        {
          "label": "A",
          "text": "Hambatan reabsorpsi Na+ di tubulus proksimal meningkatkan pengiriman Na+ ke Macula Densa, yang mengaktifkan Tubuloglomerular Feedback (TGF) untuk memvasokonstriksi arteriol aferen sehingga menurunkan hiperfiltrasi intraglomerular (efek nefroprotektif jangka panjang)",
          "correct": true
        },
        {
          "label": "B",
          "text": "SGLT2i menyebabkan nekrosis epitel glomerulus secara permanen",
          "correct": false
        },
        {
          "label": "C",
          "text": "SGLT2i merangsang pembentukan batu ginjal kalsium oksalat",
          "correct": false
        },
        {
          "label": "D",
          "text": "SGLT2i merusak sintesis eritropoietin di korteks renal",
          "correct": false
        }
      ],
      "explanation": "Peningkatan kadar natrium di macula densa memicu pelepasan adenosin lokal yang mengonstriksi arteriol aferen (Tubuloglomerular Feedback). Penurunan hiperfiltrasi intraglomerular ini mengurangi stres mekanik podosit dan terbukti nefroprotektif jangka panjang."
    },
    {
      "id": "dq18",
      "category": "DIKI - Obstruktif Kristaluri",
      "question": "Seorang pasien herpes zoster menerima infus Asiklovir intravena dosis tinggi (10 mg/kgBB) yang diberikan secara bolus cepat 15 menit tanpa hidrasi yang cukup. Enam jam kemudian pasien mengeluh nyeri pinggang dan anuria dengan kristal jarum di sedimen urin. Bagaimana tindakan pencegahan yang seharusnya dilakukan?",
      "options": [
        {
          "label": "A",
          "text": "Berikan hidrasi cairan kristaloid sebelum dan sesudah infus, serta berikan infus Asiklovir secara lambat minimal selama 1 hingga 2 jam untuk mencegah presipitasi kristal di lumen tubulus",
          "correct": true
        },
        {
          "label": "B",
          "text": "Asiklovir harus dicampur dengan jus jeruk asam",
          "correct": false
        },
        {
          "label": "C",
          "text": "Pasien harus dipuasakan dari minum air selama 24 jam",
          "correct": false
        },
        {
          "label": "D",
          "text": "Dosis asiklovir digandakan menjadi 30 mg/kg",
          "correct": false
        }
      ],
      "explanation": "Asiklovir memiliki kelarutan yang relatif rendah dalam urin. Pemberian bolus cepat atau kondisi dehidrasi memicu supersaturasi dan kristalisasi asiklovir di tubulus distalis dan collecting duct. Hidrasi masif dan infus lambat (1-2 jam) adalah standar pencegahan baku!"
    },
    {
      "id": "dq19",
      "category": "DIKI - Aminoglikosida",
      "question": "Mengapa antibiotik Aminoglikosida (seperti Gentamisin dan Amikasin) memiliki afinitas tinggi untuk terakumulasi secara selektif di sel epitel tubulus proksimal ginjal?",
      "options": [
        {
          "label": "A",
          "text": "Karena molekul aminoglikosida kaya gugus amino kationik (bermuatan positif) yang berikatan kuat secara elektrostatik dengan fosfolipid anionik (bermuatan negatif) dan reseptor megalin pada brush border tubulus proksimal",
          "correct": true
        },
        {
          "label": "B",
          "text": "Karena aminoglikosida sangat larut lemak dan menembus membran tanpa reseptor",
          "correct": false
        },
        {
          "label": "C",
          "text": "Karena aminoglikosida diubah menjadi glukosa oleh sel tubulus",
          "correct": false
        },
        {
          "label": "D",
          "text": "Karena aminoglikosida hanya diekskresikan lewat keringat",
          "correct": false
        }
      ],
      "explanation": "Sifat polikationik aminoglikosida memfasilitasi ikatannya dengan fosfolipid membran anionik (seperti phosphatidylinositol) dan kompleks megalin/kubilin di tubulus proksimal, memicu endositosis, akumulasi lisosomal, dan pelepasan enzim hidrolitik yang memicu nekrosis tubular akut."
    },
    {
      "id": "dq20",
      "category": "DIKI - Stewardship",
      "question": "Target hemodinamik utama (Mean Arterial Pressure / MAP) yang harus dipertahankan pada pasien yang mengalami Acute Kidney Injury (DIKI) untuk memastikan perfusi kapiler ginjal adekuat adalah:",
      "options": [
        {
          "label": "A",
          "text": "MAP > 65 - 70 mmHg (dengan resusitasi kristaloid dan vasopresor norepinefrin bila perlu)",
          "correct": true
        },
        {
          "label": "B",
          "text": "MAP < 40 mmHg untuk mengistirahatkan ginjal",
          "correct": false
        },
        {
          "label": "C",
          "text": "MAP > 150 mmHg agar glomerulus bekerja maksimal",
          "correct": false
        },
        {
          "label": "D",
          "text": "MAP tidak memiliki korelasi dengan fungsi ginjal",
          "correct": false
        }
      ],
      "explanation": "Sesuai konsensus KDIGO dan Surviving Sepsis Campaign: Tekanan perfusi autoregulasi ginjal membutuhkan MAP minimal > 65-70 mmHg. Di bawah ambang batas ini, tekanan hidrostatik kapiler glomerulus tidak mencukupi untuk filtrasi urin."
    },
    {
      "id": "dq21",
      "category": "DIKI - Elektrolit & Asidosis",
      "question": "Kapan pemberian terapi Natrium Bikarbonat (NaBic) intravena diindikasikan pada pasien dengan DIKI dan Asidosis Metabolik menurut pedoman klinis?",
      "options": [
        {
          "label": "A",
          "text": "Ketika pH darah arteri < 7.20 dan konsentrasi Bikarbonat serum (HCO3-) < 15 mEq/L",
          "correct": true
        },
        {
          "label": "B",
          "text": "Pada semua pasien tanpa memandang nilai pH darah",
          "correct": false
        },
        {
          "label": "C",
          "text": "Hanya bila pH darah > 7.55 (Alkalosis)",
          "correct": false
        },
        {
          "label": "D",
          "text": "Hanya bila kadar kalium darah di bawah 2.0 mEq/L",
          "correct": false
        }
      ],
      "explanation": "Pemberian NaBic pada asidosis metabolik berat (pH < 7.20, HCO3 < 15 mEq/L) bertujuan mencegah instabilitas hemodinamik, disritmia ventrikel, dan refrakteritas vasopresor akibat asidemia berat."
    },
    {
      "id": "dq22",
      "category": "DIKI - Hiperkalemia",
      "question": "Pasien gagal ginjal akibat nefrotoksisitas obat mengalami hiperkalemia berat (K = 6.8 mEq/L) dengan gambaran EKG 'Tall Peaked T Waves' dan pemanjangan interval PR. Obat manakah yang harus diberikan PERTAMA KALI secara intravena cepat?",
      "options": [
        {
          "label": "A",
          "text": "Kalsium Glukonat 10% IV (untuk stabilisasi membran miokard mencegah fibrilasi ventrikel fatal)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Resin penukar ion oral",
          "correct": false
        },
        {
          "label": "C",
          "text": "Furosemid tablet",
          "correct": false
        },
        {
          "label": "D",
          "text": "Spironolakton oral",
          "correct": false
        }
      ],
      "explanation": "Kalsium glukonat IV tidak menurunkan kadar kalium darah, namun bekerja cepat (1-3 menit) menstabilkan potensial ambang membran miosit jantung untuk mencegah aritmia fatal / henti jantung. Setelah itu baru diberikan Insulin + Dextrose untuk memindahkan kalium ke intraseluler."
    },
    {
      "id": "dq23",
      "category": "Farmakovigilans & Naranjo",
      "question": "Dalam penilaian kausalitas Adverse Drug Reaction (ADR) untuk menduga kejadian DILI atau DIKI, instrumen baku apa yang paling universal digunakan di fasilitas pelayanan kefarmasian?",
      "options": [
        {
          "label": "A",
          "text": "Skala Probabilitas ADR Naranjo (Naranjo Causality Algorithm)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Skala Glasgow Coma Scale",
          "correct": false
        },
        {
          "label": "C",
          "text": "Skor APGAR",
          "correct": false
        },
        {
          "label": "D",
          "text": "Skala Visual Analog Scale (VAS)",
          "correct": false
        }
      ],
      "explanation": "Algoritma Kausalitas Naranjo terdiri dari 10 pertanyaan terstruktur (seperti riwayat dechallenge, rechallenge, konfirmasi lab, dosis toksik, alternatif penyebab) untuk menetapkan derajat keterkaitan obat dengan efek samping (Definite, Probable, Possible, Doubtful)."
    },
    {
      "id": "dq24",
      "category": "DIKI - KDIGO Staging",
      "question": "Seorang pasien pasca kemoterapi Sisplatin memiliki Serum Kreatinin baseline 0.9 mg/dL. Pada hari ke-5, SCr melonjak menjadi 2.8 mg/dL dengan produksi urin 0.4 mL/kg/jam selama 14 jam. Berdasarkan kriteria KDIGO, pasien tersebut masuk dalam stadium AKI:",
      "options": [
        {
          "label": "A",
          "text": "Stage 3 (karena SCr naik > 3.0x baseline: 2.8 / 0.9 = 3.11x)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Stage 1",
          "correct": false
        },
        {
          "label": "C",
          "text": "Stage 2",
          "correct": false
        },
        {
          "label": "D",
          "text": "Belum memenuhi kriteria AKI",
          "correct": false
        }
      ],
      "explanation": "Rasio SCr = 2.8 / 0.9 = 3.11x baseline. Menurut KDIGO, kenaikan SCr >= 3.0x baseline atau SCr >= 4.0 mg/dL atau inisiasi RRT mengklasifikasikan AKI ke dalam STAGE 3."
    },
    {
      "id": "dq25",
      "category": "DIKI - Triple Whammy",
      "question": "Pasien geriatri 72 tahun dengan hipertensi dan gagal jantung rutin mengonsumsi Lisinopril dan Furosemid. Pasien kemudian membeli sendiri Ibuprofen 400 mg 3x sehari untuk nyeri sendi lutut. Kombinasi ini dikenal sebagai 'Triple Whammy'. Mengapa kombinasi ketiga obat ini sangat nefrotoksik?",
      "options": [
        {
          "label": "A",
          "text": "Furosemid menginduksi deplesi volume intravaskular (hipovolemia), NSAID memicu vasokonstriksi arteriol aferen, dan Lisinopril mencegah vasokonstriksi arteriol eferen kompensatorik sehingga laju filtrasi glomerulus ambruk total",
          "correct": true
        },
        {
          "label": "B",
          "text": "Ketiga obat menggumpal di lambung membentuk massa padat",
          "correct": false
        },
        {
          "label": "C",
          "text": "Lisinopril dan NSAID saling menginaktivasi di sirkulasi darah",
          "correct": false
        },
        {
          "label": "D",
          "text": "Furosemid mengubah molekul ibuprofen menjadi racun sianida",
          "correct": false
        }
      ],
      "explanation": "Kombinasi Diuretik (hipovolemia) + NSAID (aferen konstriksi) + ACEI/ARB (eferen dilatasi) melumpuhkan mekanisme pertahanan hemodinamik ginjal secara simultan, meningkatkan risiko AKI hingga lebih dari 300%!"
    },
    {
      "id": "dq26",
      "category": "DIKI - Obstruktif Metotreksat",
      "question": "Pada protokol kemoterapi Metotreksat dosis tinggi (HD-MTX >= 500 mg/m²), upaya farmakoterapi standar apakah yang wajib dilakukan untuk mencegah nefropati kristal?",
      "options": [
        {
          "label": "A",
          "text": "Hidrasi cairan agresif + Alkalinisasi urin dengan Natrium Bikarbonat hingga target pH urin >= 7.0 + Leucovorin rescue",
          "correct": true
        },
        {
          "label": "B",
          "text": "Asidifikasi urin dengan Asam Askorbat hingga pH < 5.0",
          "correct": false
        },
        {
          "label": "C",
          "text": "Restriksi total asupan cairan selama 48 jam",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pemberian antibiotik kloramfenikol profilaksis",
          "correct": false
        }
      ],
      "explanation": "Kelarutan Metotreksat dan metabolitnya (7-OH-MTX) meningkat secara dramatis (5-8 kali lipat) pada pH urin >= 7.0. Tanpa alkalinisasi urin dan hidrasi adekuat, MTX akan mengalami presipitasi kristal di lumen tubulus ginjal memicu gagal ginjal akut obstruktif."
    },
    {
      "id": "dq27",
      "category": "DIKI - Biomarker & Pseudo-AKI",
      "question": "Seorang pasien HIV yang mengonsumsi Kotrimoksazol (Trimetoprim-Sulfametoksazol) dosis tinggi mengalami kenaikan SCr dari 1.0 mg/dL menjadi 1.4 mg/dL tanpa penurunan produksi urin dan kadar Cystatin C serum tetap normal. Fenomena apakah yang mendasari kondisi ini?",
      "options": [
        {
          "label": "A",
          "text": "Pseudo-AKI akibat inhibisi kompetitif sekresi kreatinin di tubulus proksimal oleh Trimetoprim melalui transporter kation organik (OCT2), TANPA penurunan GFR sejati",
          "correct": true
        },
        {
          "label": "B",
          "text": "Nekrosis tubular akut berat stadium akhir",
          "correct": false
        },
        {
          "label": "C",
          "text": "Gagal ginjal kronis stadium 5",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sindrom lisis tumor masif",
          "correct": false
        }
      ],
      "explanation": "Trimetoprim (dan Simetidin) menghambat sekresi kreatinin aktif di tubulus proksimal melalui transporter OCT2. Akibatnya SCr serum naik secara artifisial 15-35%, namun laju filtrasi glomerulus sejati (diukur via Cystatin C atau inulin clearance) tidak berubah."
    },
    {
      "id": "dq28",
      "category": "DIKI - Osmotic Nephropathy",
      "question": "Seorang pasien dengan edema serebral menerima infus Manitol 20% dosis tinggi berulang hingga dosis kumulatif > 300 gram dalam 48 jam. Terjadi oliguria dan pembengkakan sel epitel tubulus akibat vakuolisasi sitoplasma. Kondisi ini diklasifikasikan sebagai:",
      "options": [
        {
          "label": "A",
          "text": "Osmotic Nephropathy (Nefropati Osmotik)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Glomerulonefritis autoimun",
          "correct": false
        },
        {
          "label": "C",
          "text": "Pielonefritis bakterial akut",
          "correct": false
        },
        {
          "label": "D",
          "text": "Trombosis vena renalis",
          "correct": false
        }
      ],
      "explanation": "Nefropati osmotik terjadi akibat akumulasi zat terlarut hiperosmoler eksogen (seperti manitol atau sukrosa dalam sediaan IVIG) di sel tubulus proksimal melalui pinositosis, memicu pembengkakan lisosom dan oklusi lumen tubulus."
    },
    {
      "id": "dq29",
      "category": "DIKI - TDM Vankomisin",
      "question": "Untuk meminimalkan risiko DIKI pada pasien sepsis yang menerima infus Vankomisin intravena, pedoman konsensus klinis merekomendasikan monitoring target farmakokinetik-farmakodinamik (PK/PD):",
      "options": [
        {
          "label": "A",
          "text": "Area Under the Curve to MIC (AUC24/MIC) target 400 - 600 mg.h/L (dengan MIC <= 1 mg/L)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Kadar puncak serum (Cmax) > 100 mcg/mL",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kadar palung (Cmin) < 2 mcg/mL",
          "correct": false
        },
        {
          "label": "D",
          "text": "Waktu paruh (t1/2) tepat 1 jam",
          "correct": false
        }
      ],
      "explanation": "Target AUC24/MIC 400-600 mg.h/L memaksimalkan efikasi bakterisidal sekaligus meminimalkan risiko nefrotoksisitas vankomisin (yang meningkat tajam bila AUC > 600-650 mg.h/L atau trough > 15-20 mcg/mL terus menerus)."
    },
    {
      "id": "dq30",
      "category": "DIKI - Calcineurin Inhibitors",
      "question": "Pasien pasca transplantasi ginjal yang menerima Siklosporin mengeluh hipertensi baru dan kenaikan Serum Kreatinin. Biopsi awal menunjukkan vasokonstriksi arteriol aferen tanpa jejak penolakan graft. Intervensi farmakologis apa yang dapat membantu membalikkan vasokonstriksi aferen tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Calcium Channel Blocker dihidropiridin (misal Amlodipin/Nifedipin) yang mendilatasi arteriol aferen renal + penyesuaian dosis Siklosporin berbasis TDM",
          "correct": true
        },
        {
          "label": "B",
          "text": "Pemberian asam mefenamat dosis maksimal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Penghentian seluruh cairan infus",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pemberian kalium klorida intravena",
          "correct": false
        }
      ],
      "explanation": "Siklosporin memicu vasokonstriksi arteriol aferen via influks Ca2+ intraseluler dan pelepasan endotelin. CCB golongan DHP (Amlodipin/Nifedipin) bekerja memblokade kanal kalsium tipe-L di arteriol aferen sehingga memulihkan aliran darah renal dan meredakan nefrotoksisitas hemodinamik CNI."
    }
  ],
  "quizQuestions": [
    {
      "id": "dq1",
      "category": "DILI - Kalkulasi & Pola",
      "question": "Pasien pria 45 tahun yang sedang menjalani terapi antibiotik Amoksisilin-Klavulanat untuk sinusitis mengalami ikterus dan pruritus hebat. Hasil laboratorium: ALT 120 U/L (ULN 40 U/L) dan ALP 360 U/L (ULN 120 U/L). Berapakah nilai Rasio R (R-value) dan bagaimana klasifikasi pola cedera livernya?",
      "options": [
        {
          "label": "A",
          "text": "R = 1.0 (Pola Kolestatik, R <= 2)",
          "correct": true
        },
        {
          "label": "B",
          "text": "R = 3.0 (Pola Campuran, 2 < R < 5)",
          "correct": false
        },
        {
          "label": "C",
          "text": "R = 6.0 (Pola Hepatoseluler, R >= 5)",
          "correct": false
        },
        {
          "label": "D",
          "text": "R = 0.33 (Pola Iskemik)",
          "correct": false
        }
      ],
      "explanation": "R = (ALT / ULN_ALT) / (ALP / ULN_ALP) = (120 / 40) / (360 / 120) = 3.0 / 3.0 = 1.0. Karena R <= 2, cedera terklasifikasi sebagai DILI tipe KOLESTATIK. Amoksisilin-klavulanat adalah penyebab klasik kolestatik DILI melalui kerusakan epitel duktus biliaris."
    },
    {
      "id": "dq2",
      "category": "DILI - Hy's Law",
      "question": "Seorang wanita 32 tahun mengeluh mual, lemas, dan sklera ikterik setelah 4 minggu mengonsumsi obat anti-TBC. Hasil lab: ALT 240 U/L (ULN 40 U/L), Bilirubin Total 4.2 mg/dL (ULN 1.0 mg/dL), dan ALP 130 U/L (ULN 120 U/L). Apakah kondisi ini memenuhi Kriteria Hy's Law (Hukum Hy) dan apa maknanya?",
      "options": [
        {
          "label": "A",
          "text": "Ya, memenuhi Hy's Law (ALT >= 3x ULN, Bilirubin >= 2x ULN, tanpa kolestasis awal ALP); menandakan risiko mortalitas gagal hati akut 10-50%",
          "correct": true
        },
        {
          "label": "B",
          "text": "Tidak, karena ALP harus meningkat minimal 10 kali lipat",
          "correct": false
        },
        {
          "label": "C",
          "text": "Tidak, karena Bilirubin harus di atas 15 mg/dL",
          "correct": false
        },
        {
          "label": "D",
          "text": "Ya, tetapi hanya menandakan hepatitis infeksius biasa",
          "correct": false
        }
      ],
      "explanation": "Kriteria Hy's Law terpenuhi: ALT = 6x ULN (>=3x), Total Bilirubin = 4.2x ULN (>=2x), dan ALP normal/minimal (<2x). Hy's Law adalah indikator prognostik cedera hepatoseluler parah dengan mortalitas 10-50% jika obat tidak segera disetop!"
    },
    {
      "id": "dq3",
      "category": "DILI - Mekanisme & Toksisitas",
      "question": "Pada kasus keracunan akut Parasetamol dosis toksik (> 10-15 gram), mengapa metabolit elektrofilik NAPQI menumpuk secara masif di hepatosit?",
      "options": [
        {
          "label": "A",
          "text": "Kapasitas jalur metabolisme nontoksik utama (Glukuronidasi ~60% dan Sulfasi ~35%) mengalami kejenuhan (saturasi), sehingga sisa obat dialihkan secara masif ke enzim CYP2E1 menghasilkan NAPQI yang menghabiskan seluruh cadangan Glutation (GSH)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Parasetamol langsung memblokade sekresi empedu di duktus sistikus",
          "correct": false
        },
        {
          "label": "C",
          "text": "Glukuronidasi berubah fungsi memproduksi asam amino toksik",
          "correct": false
        },
        {
          "label": "D",
          "text": "Parasetamol membunuh seluruh bakteri flora normal usus",
          "correct": false
        }
      ],
      "explanation": "Pada dosis supraterapeutik, enzim sulfotransferase dan UDP-glukuronosiltransferase mengalami kejenuhan. Proporsi metabolisme bergeser ke CYP2E1 menghasilkan NAPQI dalam jumlah melebihi kapasitas cadangan GSH hepatosit."
    },
    {
      "id": "dq4",
      "category": "DILI - Terapi Spesifik",
      "question": "Bagaimana mekanisme farmakologi N-Asetilsistein (NAC) bekerja menyelamatkan pasien dari nekrosis hepar akibat overdosis parasetamol?",
      "options": [
        {
          "label": "A",
          "text": "NAC menyediakan gugus sulfhidril esensial untuk mengembalikan sintesis Glutation (GSH) intraseluler dan dapat berikatan langsung menetralkan NAPQI menjadi konjugat merkapturat nontoksik",
          "correct": true
        },
        {
          "label": "B",
          "text": "NAC menginduksi muntah instan untuk mengeluarkan obat dari darah",
          "correct": false
        },
        {
          "label": "C",
          "text": "NAC mengikat reseptor opioid di sistem saraf pusat",
          "correct": false
        },
        {
          "label": "D",
          "text": "NAC memblokade filtrasi glomerulus ginjal",
          "correct": false
        }
      ],
      "explanation": "NAC bertindak sebagai prekursor L-sistein yang menyuplai sintesis de novo glutation hepar serta mendonorkan gugus sulfhidril bebas (-SH) untuk mengkonjugasi NAPQI secara langsung menjadi metabolit sistein/merkapturat yang larut air."
    },
    {
      "id": "dq5",
      "category": "DILI - OAT Algoritma",
      "question": "Dari ketiga obat antituberkulosis lini pertama berikut, urutkanlah dari yang memiliki potensi hepatotoksisitas PALING TINGGI hingga paling rendah menurut kepustakaan klinis:",
      "options": [
        {
          "label": "A",
          "text": "Pirazinamid (Z) > Isoniazid (H) > Rifampisin (R)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Rifampisin (R) > Pirazinamid (Z) > Isoniazid (H)",
          "correct": false
        },
        {
          "label": "C",
          "text": "Etambutol (E) > Streptomisin (S) > Rifampisin (R)",
          "correct": false
        },
        {
          "label": "D",
          "text": "Isoniazid (H) > Rifampisin (R) > Etambutol (E)",
          "correct": false
        }
      ],
      "explanation": "Tingkat hepatotoksisitas intrinsik OAT: Pirazinamid (Z, paling hepatotoksik & onset sering lambat) > Isoniazid (H, metabolit asetilhidrazin) > Rifampisin (R, lebih sering memicu kolestasis transien / induksi enzim)."
    },
    {
      "id": "dq6",
      "category": "DILI - OAT Algoritma",
      "question": "Pasien TB paru mengalami DILI dengan ALT 280 U/L saat fase intensif. Setelah seluruh OAT distop dan enzim hati kembali normal, dokter memulai reintroduksi bertahap. Jika Pirazinamid (Z) diputuskan untuk DIHENTIKAN PERMANEN, bagaimana penyesuaian paduan rejimen TB selanjutnya?",
      "options": [
        {
          "label": "A",
          "text": "Paduan Rifampisin dan Isoniazid (RH) pada fase lanjutan diperpanjang durasinya hingga total 9 bulan (2RH-E / 7RH)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Terapi TB dihentikan total karena pasien dianggap sudah sembuh",
          "correct": false
        },
        {
          "label": "C",
          "text": "Diberikan monoterapi Etambutol selama 2 tahun",
          "correct": false
        },
        {
          "label": "D",
          "text": "Dosis Isoniazid digandakan 5 kali lipat",
          "correct": false
        }
      ],
      "explanation": "Sesuai pedoman WHO dan Kemenkes RI: Jika Pirazinamid (Z) tidak dapat diberikan pada fase intensif akibat hepatotoksisitas berat, paduan bakterisidal RH harus diperpanjang durasi totalnya menjadi 9 bulan untuk mencegah kekambuhan."
    },
    {
      "id": "dq7",
      "category": "DILI - Terapi Spesifik",
      "question": "Seorang anak 8 tahun dengan epilepsi refrakter yang mengonsumsi Asam Valproat dosis tinggi mengalami letargi berat, hiperamonemia, dan steatosis mikrovesikular hepar akibat disfungsi beta-oksidasi mitokondria. Terapi spesifik lini pertama apakah yang harus segera diberikan?",
      "options": [
        {
          "label": "A",
          "text": "L-Karnitin (L-Carnitine) intravena / oral",
          "correct": true
        },
        {
          "label": "B",
          "text": "Nalokson intravena",
          "correct": false
        },
        {
          "label": "C",
          "text": "Atropin sulfat",
          "correct": false
        },
        {
          "label": "D",
          "text": "Furosemid dosis tinggi",
          "correct": false
        }
      ],
      "explanation": "Asam valproat membentuk metabolit valproil-CoA yang menguras cadangan karnitin intraseluler dan menghambat transfer asam lemak ke mitokondria. Suplementasi L-Karnitin terbukti secara klinis memperbaiki beta-oksidasi dan menurunkan kadar amonia darah."
    },
    {
      "id": "dq8",
      "category": "DILI - Kolestatik & Pruritus",
      "question": "Pasien wanita 50 tahun mengalami DILI tipe kolestatik pasca terapi Eritromisin estolat dengan keluhan gatal (pruritus) parah yang tidak membaik dengan antihistamin. Agen pengikat asam empedu di lumen usus manakah yang direkomendasikan untuk mengatasi pruritus tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Kolestiramin (Cholestyramine) resin 4 gram oral sebelum makan",
          "correct": true
        },
        {
          "label": "B",
          "text": "Omeprazol 40 mg IV",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kloramfenikol tetes telinga",
          "correct": false
        },
        {
          "label": "D",
          "text": "Parasetamol infus 1 gram",
          "correct": false
        }
      ],
      "explanation": "Kolestiramin adalah resin penukar ion non-absorbable yang mengikat asam empedu di saluran cerna dan memfasilitasi ekskresi feses, menurunkan kadar asam empedu serum yang memicu iritasi nosiseptor kutaneus penyebab pruritus kolestatik."
    },
    {
      "id": "dq9",
      "category": "DILI - Immuno-Allergic & DRESS",
      "question": "Seorang pasien yang mengonsumsi Fenitoin selama 3 minggu mengalami demam tinggi (39°C), ruam kulit makulopapular difus, limfadenopati generalisata, eosinofilia darah 15%, dan ALT 450 U/L. Sindrom toksisitas imun apakah yang paling tepat mendeskripsikan kondisi ini?",
      "options": [
        {
          "label": "A",
          "text": "DRESS Syndrome (Drug Reaction with Eosinophilia and Systemic Symptoms) / Immuno-allergic DILI",
          "correct": true
        },
        {
          "label": "B",
          "text": "Direct Intrinsic Acetaminophen Toxicity",
          "correct": false
        },
        {
          "label": "C",
          "text": "Fatty Liver Disease non-alkoholik murni",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sindrom Cushing iatrogenik",
          "correct": false
        }
      ],
      "explanation": "Kombinasi ruam kulit, demam, limfadenopati, eosinofilia tinggi, dan keterlibatan organ dalam (hepatitis) setelah 2-8 minggu paparan antikonvulsan aromatik (Fenitoin/Karbamazepin) adalah ciri klasik DRESS syndrome yang dimediasi respon hipersensitivitas sel T."
    },
    {
      "id": "dq10",
      "category": "DILI - Threshold Penghentian",
      "question": "Menurut konsensus DILI internasional dan pedoman klinis, pada kondisi manakah obat terduga hepatotoksik HARUS SEGERA DIHENTIKAN meskipun pasien BELUM MENUNJUKKAN GEJALA (asimtomatik)?",
      "options": [
        {
          "label": "A",
          "text": "Kenaikan ALT atau AST >= 5x batas atas nilai normal (ULN)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Kenaikan ALT atau AST 1.5x ULN",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kadar Albumin serum 3.8 g/dL (normal)",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kadar bilirubin total 0.8 mg/dL",
          "correct": false
        }
      ],
      "explanation": "Ambang batas baku penghentian obat pada DILI asimtomatik adalah ALT/AST >= 5x ULN. Bila terdapat gejala klinis (mual, muntah, lemas, ikterus, nyeri perut kanan atas), batas penghentian lebih ketat yaitu ALT/AST >= 3x ULN atau Total Bilirubin >= 2 mg/dL."
    },
    {
      "id": "dq11",
      "category": "DILI - OAT Rechallenge",
      "question": "Dalam protokol reintroduksi OAT lini pertama setelah episode DILI membaik, mengapa Rifampisin (R) dipilih sebagai obat PERTAMA yang direintroduksi dan bukan Pirazinamid (Z)?",
      "options": [
        {
          "label": "A",
          "text": "Rifampisin memiliki potensi hepatotoksisitas intrinsik paling rendah di antara OAT lini pertama dan merupakan komponen bakterisidal terpenting yang harus dipastikan tolerabilitasnya terlebih dahulu",
          "correct": true
        },
        {
          "label": "B",
          "text": "Rifampisin adalah antidotum untuk kerusakan hepar",
          "correct": false
        },
        {
          "label": "C",
          "text": "Karena Rifampisin tidak dimetabolisme di hati",
          "correct": false
        },
        {
          "label": "D",
          "text": "Karena Pirazinamid tidak lagi diproduksi",
          "correct": false
        }
      ],
      "explanation": "Urutan reintroduksi OAT (R -> H -> Z) didasarkan pada potensi hepatotoksisitas dan nilai esensial obat. R adalah obat paling poten dengan hepatotoksisitas terendah, sedangkan Z adalah yang paling hepatotoksik sehingga diuji paling akhir atau dieliminasi jika perlu."
    },
    {
      "id": "dq12",
      "category": "DILI - Asam Ursodeoksikolat",
      "question": "Apa rasionalitas farmakoterapi pemberian Asam Ursodeoksikolat (UDCA) pada kasus DILI dengan pola kolestatik kronis atau stasis empedu berkepanjangan?",
      "options": [
        {
          "label": "A",
          "text": "UDCA adalah asam empedu hidrofilik non-toksik yang menggantikan asam empedu hidrofobik endogen yang sitotoksik, menstimulasi sekresi empedu membran apikal, dan memiliki efek anti-apoptosis pada kolangiosit",
          "correct": true
        },
        {
          "label": "B",
          "text": "UDCA menghambat sintesis hemoglobin di sumsum tulang",
          "correct": false
        },
        {
          "label": "C",
          "text": "UDCA membunuh bakteri Mycobacterium tuberculosis",
          "correct": false
        },
        {
          "label": "D",
          "text": "UDCA menghentikan sekresi insulin pankreas",
          "correct": false
        }
      ],
      "explanation": "UDCA memodulasi kolam asam empedu (bile acid pool) dengan menggusur asam empedu toksik hidrofobik, menstimulasi transporter ekskresi empedu (BSEP & MRP2), dan melindungi membran mitokondria hepatosit dari apoptosis."
    },
    {
      "id": "dq13",
      "category": "DILI - Intrinsic vs Idiosyncratic",
      "question": "Manakah pernyataan yang PALING BENAR membedakan Intrinsic DILI dengan Idiosyncratic DILI?",
      "options": [
        {
          "label": "A",
          "text": "Intrinsic DILI bersifat dose-dependent dan terprediksi pada semua individu (contoh: Parasetamol overdosis), sedangkan Idiosyncratic DILI bersifat dose-independent, tak terprediksi, dan bergantung pada susceptibilitas genetik/imun pejamu",
          "correct": true
        },
        {
          "label": "B",
          "text": "Intrinsic DILI tidak berbahaya, sedangkan Idiosyncratic DILI selalu fatal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Intrinsic DILI hanya terjadi pada ginjal, bukan hepar",
          "correct": false
        },
        {
          "label": "D",
          "text": "Idiosyncratic DILI selalu memiliki onset dalam 1 jam pasca konsumsi obat",
          "correct": false
        }
      ],
      "explanation": "Intrinsic (Direct) DILI memiliki kurva dosis-respons yang jelas, insidensi tinggi pada dosis toksik, dan onset cepat. Idiosyncratic DILI tidak berkorelasi linier dengan dosis lazim, insidensi rendah (1:1.000-1:100.000), onset lambat/bervariasi, dan dimediasi faktor imunogenetik."
    },
    {
      "id": "dq14",
      "category": "DILI - Laboratorium Penunjang",
      "question": "Seorang apoteker bangsal mengamati pasien dengan ALT 250 U/L dan ALP 180 U/L. Pemeriksaan enzim penunjang apakah yang paling spesifik untuk memastikan bahwa kenaikan ALP memang berasal dari traktus biliaris/hepar dan BUKAN berasal dari jaringan tulang?",
      "options": [
        {
          "label": "A",
          "text": "Gamma-Glutamyl Transferase (GGT) atau 5'-Nukleotidase",
          "correct": true
        },
        {
          "label": "B",
          "text": "Kreatinin Kinase (CK-MB)",
          "correct": false
        },
        {
          "label": "C",
          "text": "Amilase dan Lipase serum",
          "correct": false
        },
        {
          "label": "D",
          "text": "Laktat Dehidrogenase (LDH)",
          "correct": false
        }
      ],
      "explanation": "ALP dapat diproduksi oleh hepar/duktus biliaris, tulang, plasenta, dan usus. GGT dan 5'-Nukleotidase meningkat paralel dengan ALP hanya bila sumber patologi berasal dari hepatobilier, sehingga krusial untuk konfirmasi DILI kolestatik."
    },
    {
      "id": "dq15",
      "category": "DILI - Kausalitas RUCAM",
      "question": "Dalam penegakan kausalitas DILI, metode Roussel Uclaf Causality Assessment Method (RUCAM) memberikan bobot penilaian tinggi pada:",
      "options": [
        {
          "label": "A",
          "text": "Selang waktu pemaparan obat hingga onset gejala (Time to onset), kecepatan pemulihan enzim pasca penghentian obat (Dechallenge), dan hasil rechallenge yang terdokumentasi",
          "correct": true
        },
        {
          "label": "B",
          "text": "Harga obat dan negara produsen obat",
          "correct": false
        },
        {
          "label": "C",
          "text": "Warna urine pasien saat pagi hari",
          "correct": false
        },
        {
          "label": "D",
          "text": "Tekanan darah sistolik dan diastolik",
          "correct": false
        }
      ],
      "explanation": "RUCAM adalah instrumen terstandar khusus hepatotoksisitas yang mengevaluasi: time to onset, perjalanan klinis pasca dechallenge, faktor risiko pejamu (usia/alkohol), obat konkuren, penyingkiran penyebab non-obat (hepatitis virus A/B/C/E, autoimun, iskemia), dan riwayat rechallenge."
    },
    {
      "id": "dq16",
      "category": "DIKI - Hemodinamik",
      "question": "Mengapa kombinasi NSAID (misal Ketorolak/Ibuprofen) dengan ACE-Inhibitor (misal Kaptopril/Ramipril) pada pasien hipovolemik sangat berbahaya bagi fungsi filtrasi ginjal?",
      "options": [
        {
          "label": "A",
          "text": "NSAID memicu vasokonstriksi arteriol aferen (hambat PGE2/PGI2), sedangkan ACE-Inhibitor memicu vasodilatasi arteriol eferen (hambat Angiotensin II), sehingga tekanan kapiler glomerulus kolaps total dan GFR anjlok drastis (Hemodynamically Mediated AKI)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Kedua obat membentuk kristal yang menyumbat uretra",
          "correct": false
        },
        {
          "label": "C",
          "text": "ACE-Inhibitor menghancurkan ikatan protein NSAID di lambung",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kombinasi tersebut memicu pertumbuhan kista ginjal bawaan",
          "correct": false
        }
      ],
      "explanation": "Autoregulasi glomerulus menjaga GFR dengan aferen terbuka (dimediasi Prostaglandin) dan eferen tertahan (dimediasi AT-II). NSAID menutup pintu masuk (aferen konstriksi) dan ACEI membuka pintu keluar (eferen dilatasi) -> tekanan intraglomerular lenyap -> AKI mendadak!"
    },
    {
      "id": "dq17",
      "category": "DIKI - SGLT2i",
      "question": "Pada inisiasi obat antidiabetes SGLT2 Inhibitor (Dapagliflozin / Empagliflozin), sering terlihat penurunan awal eGFR sebesar 10-30% ('eGFR Dip') dalam 2-4 minggu pertama. Bagaimana mekanisme fisiologis fenomena ini?",
      "options": [
        {
          "label": "A",
          "text": "Hambatan reabsorpsi Na+ di tubulus proksimal meningkatkan pengiriman Na+ ke Macula Densa, yang mengaktifkan Tubuloglomerular Feedback (TGF) untuk memvasokonstriksi arteriol aferen sehingga menurunkan hiperfiltrasi intraglomerular (efek nefroprotektif jangka panjang)",
          "correct": true
        },
        {
          "label": "B",
          "text": "SGLT2i menyebabkan nekrosis epitel glomerulus secara permanen",
          "correct": false
        },
        {
          "label": "C",
          "text": "SGLT2i merangsang pembentukan batu ginjal kalsium oksalat",
          "correct": false
        },
        {
          "label": "D",
          "text": "SGLT2i merusak sintesis eritropoietin di korteks renal",
          "correct": false
        }
      ],
      "explanation": "Peningkatan kadar natrium di macula densa memicu pelepasan adenosin lokal yang mengonstriksi arteriol aferen (Tubuloglomerular Feedback). Penurunan hiperfiltrasi intraglomerular ini mengurangi stres mekanik podosit dan terbukti nefroprotektif jangka panjang."
    },
    {
      "id": "dq18",
      "category": "DIKI - Obstruktif Kristaluri",
      "question": "Seorang pasien herpes zoster menerima infus Asiklovir intravena dosis tinggi (10 mg/kgBB) yang diberikan secara bolus cepat 15 menit tanpa hidrasi yang cukup. Enam jam kemudian pasien mengeluh nyeri pinggang dan anuria dengan kristal jarum di sedimen urin. Bagaimana tindakan pencegahan yang seharusnya dilakukan?",
      "options": [
        {
          "label": "A",
          "text": "Berikan hidrasi cairan kristaloid sebelum dan sesudah infus, serta berikan infus Asiklovir secara lambat minimal selama 1 hingga 2 jam untuk mencegah presipitasi kristal di lumen tubulus",
          "correct": true
        },
        {
          "label": "B",
          "text": "Asiklovir harus dicampur dengan jus jeruk asam",
          "correct": false
        },
        {
          "label": "C",
          "text": "Pasien harus dipuasakan dari minum air selama 24 jam",
          "correct": false
        },
        {
          "label": "D",
          "text": "Dosis asiklovir digandakan menjadi 30 mg/kg",
          "correct": false
        }
      ],
      "explanation": "Asiklovir memiliki kelarutan yang relatif rendah dalam urin. Pemberian bolus cepat atau kondisi dehidrasi memicu supersaturasi dan kristalisasi asiklovir di tubulus distalis dan collecting duct. Hidrasi masif dan infus lambat (1-2 jam) adalah standar pencegahan baku!"
    },
    {
      "id": "dq19",
      "category": "DIKI - Aminoglikosida",
      "question": "Mengapa antibiotik Aminoglikosida (seperti Gentamisin dan Amikasin) memiliki afinitas tinggi untuk terakumulasi secara selektif di sel epitel tubulus proksimal ginjal?",
      "options": [
        {
          "label": "A",
          "text": "Karena molekul aminoglikosida kaya gugus amino kationik (bermuatan positif) yang berikatan kuat secara elektrostatik dengan fosfolipid anionik (bermuatan negatif) dan reseptor megalin pada brush border tubulus proksimal",
          "correct": true
        },
        {
          "label": "B",
          "text": "Karena aminoglikosida sangat larut lemak dan menembus membran tanpa reseptor",
          "correct": false
        },
        {
          "label": "C",
          "text": "Karena aminoglikosida diubah menjadi glukosa oleh sel tubulus",
          "correct": false
        },
        {
          "label": "D",
          "text": "Karena aminoglikosida hanya diekskresikan lewat keringat",
          "correct": false
        }
      ],
      "explanation": "Sifat polikationik aminoglikosida memfasilitasi ikatannya dengan fosfolipid membran anionik (seperti phosphatidylinositol) dan kompleks megalin/kubilin di tubulus proksimal, memicu endositosis, akumulasi lisosomal, dan pelepasan enzim hidrolitik yang memicu nekrosis tubular akut."
    },
    {
      "id": "dq20",
      "category": "DIKI - Stewardship",
      "question": "Target hemodinamik utama (Mean Arterial Pressure / MAP) yang harus dipertahankan pada pasien yang mengalami Acute Kidney Injury (DIKI) untuk memastikan perfusi kapiler ginjal adekuat adalah:",
      "options": [
        {
          "label": "A",
          "text": "MAP > 65 - 70 mmHg (dengan resusitasi kristaloid dan vasopresor norepinefrin bila perlu)",
          "correct": true
        },
        {
          "label": "B",
          "text": "MAP < 40 mmHg untuk mengistirahatkan ginjal",
          "correct": false
        },
        {
          "label": "C",
          "text": "MAP > 150 mmHg agar glomerulus bekerja maksimal",
          "correct": false
        },
        {
          "label": "D",
          "text": "MAP tidak memiliki korelasi dengan fungsi ginjal",
          "correct": false
        }
      ],
      "explanation": "Sesuai konsensus KDIGO dan Surviving Sepsis Campaign: Tekanan perfusi autoregulasi ginjal membutuhkan MAP minimal > 65-70 mmHg. Di bawah ambang batas ini, tekanan hidrostatik kapiler glomerulus tidak mencukupi untuk filtrasi urin."
    },
    {
      "id": "dq21",
      "category": "DIKI - Elektrolit & Asidosis",
      "question": "Kapan pemberian terapi Natrium Bikarbonat (NaBic) intravena diindikasikan pada pasien dengan DIKI dan Asidosis Metabolik menurut pedoman klinis?",
      "options": [
        {
          "label": "A",
          "text": "Ketika pH darah arteri < 7.20 dan konsentrasi Bikarbonat serum (HCO3-) < 15 mEq/L",
          "correct": true
        },
        {
          "label": "B",
          "text": "Pada semua pasien tanpa memandang nilai pH darah",
          "correct": false
        },
        {
          "label": "C",
          "text": "Hanya bila pH darah > 7.55 (Alkalosis)",
          "correct": false
        },
        {
          "label": "D",
          "text": "Hanya bila kadar kalium darah di bawah 2.0 mEq/L",
          "correct": false
        }
      ],
      "explanation": "Pemberian NaBic pada asidosis metabolik berat (pH < 7.20, HCO3 < 15 mEq/L) bertujuan mencegah instabilitas hemodinamik, disritmia ventrikel, dan refrakteritas vasopresor akibat asidemia berat."
    },
    {
      "id": "dq22",
      "category": "DIKI - Hiperkalemia",
      "question": "Pasien gagal ginjal akibat nefrotoksisitas obat mengalami hiperkalemia berat (K = 6.8 mEq/L) dengan gambaran EKG 'Tall Peaked T Waves' dan pemanjangan interval PR. Obat manakah yang harus diberikan PERTAMA KALI secara intravena cepat?",
      "options": [
        {
          "label": "A",
          "text": "Kalsium Glukonat 10% IV (untuk stabilisasi membran miokard mencegah fibrilasi ventrikel fatal)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Resin penukar ion oral",
          "correct": false
        },
        {
          "label": "C",
          "text": "Furosemid tablet",
          "correct": false
        },
        {
          "label": "D",
          "text": "Spironolakton oral",
          "correct": false
        }
      ],
      "explanation": "Kalsium glukonat IV tidak menurunkan kadar kalium darah, namun bekerja cepat (1-3 menit) menstabilkan potensial ambang membran miosit jantung untuk mencegah aritmia fatal / henti jantung. Setelah itu baru diberikan Insulin + Dextrose untuk memindahkan kalium ke intraseluler."
    },
    {
      "id": "dq23",
      "category": "Farmakovigilans & Naranjo",
      "question": "Dalam penilaian kausalitas Adverse Drug Reaction (ADR) untuk menduga kejadian DILI atau DIKI, instrumen baku apa yang paling universal digunakan di fasilitas pelayanan kefarmasian?",
      "options": [
        {
          "label": "A",
          "text": "Skala Probabilitas ADR Naranjo (Naranjo Causality Algorithm)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Skala Glasgow Coma Scale",
          "correct": false
        },
        {
          "label": "C",
          "text": "Skor APGAR",
          "correct": false
        },
        {
          "label": "D",
          "text": "Skala Visual Analog Scale (VAS)",
          "correct": false
        }
      ],
      "explanation": "Algoritma Kausalitas Naranjo terdiri dari 10 pertanyaan terstruktur (seperti riwayat dechallenge, rechallenge, konfirmasi lab, dosis toksik, alternatif penyebab) untuk menetapkan derajat keterkaitan obat dengan efek samping (Definite, Probable, Possible, Doubtful)."
    },
    {
      "id": "dq24",
      "category": "DIKI - KDIGO Staging",
      "question": "Seorang pasien pasca kemoterapi Sisplatin memiliki Serum Kreatinin baseline 0.9 mg/dL. Pada hari ke-5, SCr melonjak menjadi 2.8 mg/dL dengan produksi urin 0.4 mL/kg/jam selama 14 jam. Berdasarkan kriteria KDIGO, pasien tersebut masuk dalam stadium AKI:",
      "options": [
        {
          "label": "A",
          "text": "Stage 3 (karena SCr naik > 3.0x baseline: 2.8 / 0.9 = 3.11x)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Stage 1",
          "correct": false
        },
        {
          "label": "C",
          "text": "Stage 2",
          "correct": false
        },
        {
          "label": "D",
          "text": "Belum memenuhi kriteria AKI",
          "correct": false
        }
      ],
      "explanation": "Rasio SCr = 2.8 / 0.9 = 3.11x baseline. Menurut KDIGO, kenaikan SCr >= 3.0x baseline atau SCr >= 4.0 mg/dL atau inisiasi RRT mengklasifikasikan AKI ke dalam STAGE 3."
    },
    {
      "id": "dq25",
      "category": "DIKI - Triple Whammy",
      "question": "Pasien geriatri 72 tahun dengan hipertensi dan gagal jantung rutin mengonsumsi Lisinopril dan Furosemid. Pasien kemudian membeli sendiri Ibuprofen 400 mg 3x sehari untuk nyeri sendi lutut. Kombinasi ini dikenal sebagai 'Triple Whammy'. Mengapa kombinasi ketiga obat ini sangat nefrotoksik?",
      "options": [
        {
          "label": "A",
          "text": "Furosemid menginduksi deplesi volume intravaskular (hipovolemia), NSAID memicu vasokonstriksi arteriol aferen, dan Lisinopril mencegah vasokonstriksi arteriol eferen kompensatorik sehingga laju filtrasi glomerulus ambruk total",
          "correct": true
        },
        {
          "label": "B",
          "text": "Ketiga obat menggumpal di lambung membentuk massa padat",
          "correct": false
        },
        {
          "label": "C",
          "text": "Lisinopril dan NSAID saling menginaktivasi di sirkulasi darah",
          "correct": false
        },
        {
          "label": "D",
          "text": "Furosemid mengubah molekul ibuprofen menjadi racun sianida",
          "correct": false
        }
      ],
      "explanation": "Kombinasi Diuretik (hipovolemia) + NSAID (aferen konstriksi) + ACEI/ARB (eferen dilatasi) melumpuhkan mekanisme pertahanan hemodinamik ginjal secara simultan, meningkatkan risiko AKI hingga lebih dari 300%!"
    },
    {
      "id": "dq26",
      "category": "DIKI - Obstruktif Metotreksat",
      "question": "Pada protokol kemoterapi Metotreksat dosis tinggi (HD-MTX >= 500 mg/m²), upaya farmakoterapi standar apakah yang wajib dilakukan untuk mencegah nefropati kristal?",
      "options": [
        {
          "label": "A",
          "text": "Hidrasi cairan agresif + Alkalinisasi urin dengan Natrium Bikarbonat hingga target pH urin >= 7.0 + Leucovorin rescue",
          "correct": true
        },
        {
          "label": "B",
          "text": "Asidifikasi urin dengan Asam Askorbat hingga pH < 5.0",
          "correct": false
        },
        {
          "label": "C",
          "text": "Restriksi total asupan cairan selama 48 jam",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pemberian antibiotik kloramfenikol profilaksis",
          "correct": false
        }
      ],
      "explanation": "Kelarutan Metotreksat dan metabolitnya (7-OH-MTX) meningkat secara dramatis (5-8 kali lipat) pada pH urin >= 7.0. Tanpa alkalinisasi urin dan hidrasi adekuat, MTX akan mengalami presipitasi kristal di lumen tubulus ginjal memicu gagal ginjal akut obstruktif."
    },
    {
      "id": "dq27",
      "category": "DIKI - Biomarker & Pseudo-AKI",
      "question": "Seorang pasien HIV yang mengonsumsi Kotrimoksazol (Trimetoprim-Sulfametoksazol) dosis tinggi mengalami kenaikan SCr dari 1.0 mg/dL menjadi 1.4 mg/dL tanpa penurunan produksi urin dan kadar Cystatin C serum tetap normal. Fenomena apakah yang mendasari kondisi ini?",
      "options": [
        {
          "label": "A",
          "text": "Pseudo-AKI akibat inhibisi kompetitif sekresi kreatinin di tubulus proksimal oleh Trimetoprim melalui transporter kation organik (OCT2), TANPA penurunan GFR sejati",
          "correct": true
        },
        {
          "label": "B",
          "text": "Nekrosis tubular akut berat stadium akhir",
          "correct": false
        },
        {
          "label": "C",
          "text": "Gagal ginjal kronis stadium 5",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sindrom lisis tumor masif",
          "correct": false
        }
      ],
      "explanation": "Trimetoprim (dan Simetidin) menghambat sekresi kreatinin aktif di tubulus proksimal melalui transporter OCT2. Akibatnya SCr serum naik secara artifisial 15-35%, namun laju filtrasi glomerulus sejati (diukur via Cystatin C atau inulin clearance) tidak berubah."
    },
    {
      "id": "dq28",
      "category": "DIKI - Osmotic Nephropathy",
      "question": "Seorang pasien dengan edema serebral menerima infus Manitol 20% dosis tinggi berulang hingga dosis kumulatif > 300 gram dalam 48 jam. Terjadi oliguria dan pembengkakan sel epitel tubulus akibat vakuolisasi sitoplasma. Kondisi ini diklasifikasikan sebagai:",
      "options": [
        {
          "label": "A",
          "text": "Osmotic Nephropathy (Nefropati Osmotik)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Glomerulonefritis autoimun",
          "correct": false
        },
        {
          "label": "C",
          "text": "Pielonefritis bakterial akut",
          "correct": false
        },
        {
          "label": "D",
          "text": "Trombosis vena renalis",
          "correct": false
        }
      ],
      "explanation": "Nefropati osmotik terjadi akibat akumulasi zat terlarut hiperosmoler eksogen (seperti manitol atau sukrosa dalam sediaan IVIG) di sel tubulus proksimal melalui pinositosis, memicu pembengkakan lisosom dan oklusi lumen tubulus."
    },
    {
      "id": "dq29",
      "category": "DIKI - TDM Vankomisin",
      "question": "Untuk meminimalkan risiko DIKI pada pasien sepsis yang menerima infus Vankomisin intravena, pedoman konsensus klinis merekomendasikan monitoring target farmakokinetik-farmakodinamik (PK/PD):",
      "options": [
        {
          "label": "A",
          "text": "Area Under the Curve to MIC (AUC24/MIC) target 400 - 600 mg.h/L (dengan MIC <= 1 mg/L)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Kadar puncak serum (Cmax) > 100 mcg/mL",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kadar palung (Cmin) < 2 mcg/mL",
          "correct": false
        },
        {
          "label": "D",
          "text": "Waktu paruh (t1/2) tepat 1 jam",
          "correct": false
        }
      ],
      "explanation": "Target AUC24/MIC 400-600 mg.h/L memaksimalkan efikasi bakterisidal sekaligus meminimalkan risiko nefrotoksisitas vankomisin (yang meningkat tajam bila AUC > 600-650 mg.h/L atau trough > 15-20 mcg/mL terus menerus)."
    },
    {
      "id": "dq30",
      "category": "DIKI - Calcineurin Inhibitors",
      "question": "Pasien pasca transplantasi ginjal yang menerima Siklosporin mengeluh hipertensi baru dan kenaikan Serum Kreatinin. Biopsi awal menunjukkan vasokonstriksi arteriol aferen tanpa jejak penolakan graft. Intervensi farmakologis apa yang dapat membantu membalikkan vasokonstriksi aferen tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Calcium Channel Blocker dihidropiridin (misal Amlodipin/Nifedipin) yang mendilatasi arteriol aferen renal + penyesuaian dosis Siklosporin berbasis TDM",
          "correct": true
        },
        {
          "label": "B",
          "text": "Pemberian asam mefenamat dosis maksimal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Penghentian seluruh cairan infus",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pemberian kalium klorida intravena",
          "correct": false
        }
      ],
      "explanation": "Siklosporin memicu vasokonstriksi arteriol aferen via influks Ca2+ intraseluler dan pelepasan endotelin. CCB golongan DHP (Amlodipin/Nifedipin) bekerja memblokade kanal kalsium tipe-L di arteriol aferen sehingga memulihkan aliran darah renal dan meredakan nefrotoksisitas hemodinamik CNI."
    }
  ]
};
