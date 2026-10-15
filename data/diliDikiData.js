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
      "question": "Tn. H (46 th, BB 68 kg) dirawat di bangsal penyakit dalam dengan keluhan urin berwarna seperti teh pekat, sklera dan kulit menguning tajam, serta gatal tak tertahankan (pruritus intens) sejak 4 hari lalu. Pasien baru saja menyelesaikan terapi Amoksisilin-Klavulanat 625 mg 3x sehari selama 10 hari untuk sinusitis maksilaris akut. Hasil laboratorium fungsi hati: ALT 110 U/L (ULN: 40 U/L), AST 95 U/L (ULN: 35 U/L), ALP 420 U/L (ULN: 115 U/L), GGT 310 U/L (ULN: 50 U/L), Bilirubin Total 4.8 mg/dL (Direk: 3.9 mg/dL). Berdasarkan kriteria konsensus ACG/EASL DILI, berapakah nilai Rasio R (R-value) pasien dan bagaimana klasifikasi pola cedera hepar serta mekanisme patologinya?",
      "options": [
        {
          "label": "A",
          "text": "R = 3.65 (Pola Campuran, 2 < R < 5); nekrosis hepatoseluler sentrilobular akibat akumulasi metabolit reaktif amoksisilin di sitosol",
          "correct": false
        },
        {
          "label": "B",
          "text": "R = 0.75 (Pola Kolestatik murni, R <= 2); diakibatkan reaksi imun-alergi terhadap komponen klavulanat yang memicu cedera kolangiosit duktus biliaris dan gangguan transporter empedu",
          "correct": true
        },
        {
          "label": "C",
          "text": "R = 0.26 (Pola Kolestatik murni); akibat inhibisi langsung enzim CYP2C19 oleh amoksisilin tanpa keterlibatan klavulanat",
          "correct": false
        },
        {
          "label": "D",
          "text": "R = 2.75 (Pola Hepatoseluler, R >= 5); akibat deplesi glutation hepatosit oleh asam klavulanat",
          "correct": false
        }
      ],
      "explanation": "Formula R = (ALT / ULN_ALT) / (ALP / ULN_ALP) = (110 / 40) / (420 / 115) = 2.75 / 3.65 = 0.753. Nilai R <= 2 mengonfirmasi Pola Kolestatik (Cholestatic DILI). Amoksisilin-klavulanat adalah penyebab paling lazim dari DILI kolestatik idiosinkratik, biasanya bermanifestasi setelah terapi selesai, di mana komponen klavulanat memicu reaksi imunologik terhadap epitel kanalikuli/duktus biliaris."
    },
    {
      "id": "dq2",
      "category": "DILI - Kalkulasi & Hy's Law",
      "question": "Ny. S (34 th, BB 48 kg) menjalani pengobatan TB paru fase intensif minggu ke-4 dengan paduan FDC 4KDT (Rifampisin, Isoniazid, Pirazinamid, Etambutol). Pasien datang ke IGD dengan mual hebat, muntah 4x/hari, nafsu makan hilang, lemas ekstrem, dan sklera ikterik bilateral. Hasil lab serial: ALT 360 U/L (ULN: 35 U/L), AST 410 U/L (ULN: 35 U/L), Bilirubin Total 5.4 mg/dL (ULN: 1.0 mg/dL), ALP 145 U/L (ULN: 120 U/L), Albumin 3.4 g/dL, INR 1.35. Bagaimana evaluasi kriteria Hy's Law (Hukum Hy) pada Ny. S dan implikasi klinis terhadap risiko keselamatan pasien?",
      "options": [
        {
          "label": "A",
          "text": "Tidak memenuhi Hy's Law karena ALP pasien meningkat melampaui batas normal (145 U/L), sehingga diklasifikasikan sebagai kolestasis infeksius biasa yang cukup diobservasi tanpa menyetop OAT",
          "correct": false
        },
        {
          "label": "B",
          "text": "Terpenuhi kriteria Hy's Law, namun karena INR pasien masih < 1.5, terapi OAT tetap dilanjutkan dengan dosis separuh sambil memberikan hepatoprotektor kurkumin",
          "correct": false
        },
        {
          "label": "C",
          "text": "Terpenuhi kriteria Hy's Law (ALT/AST >= 3x ULN, Total Bilirubin >= 2x ULN, tanpa kolestasis awal ALP < 2x ULN); menandakan kerusakan hepatoseluler parah dengan risiko mortalitas gagal hati akut (Acute Liver Failure) 10-50%, sehingga seluruh OAT harus segera distop",
          "correct": true
        },
        {
          "label": "D",
          "text": "Tidak memenuhi Hy's Law karena kriteria mensyaratkan ALT harus meningkat minimal 15x ULN dan bilirubin total minimal 10 mg/dL sebelum dipertimbangkan penghentian terapi",
          "correct": false
        }
      ],
      "explanation": "Trias Hy's Law: (1) ALT atau AST >= 3x ULN (pasien ALT 10.3x ULN), (2) Total Bilirubin >= 2x ULN (pasien 5.4x ULN), (3) Tidak ada kenaikan awal ALP >= 2x ULN (ALP pasien 145/120 = 1.2x ULN). Terpenuhinya Hy's Law adalah indikator prognostik cedera hepatoseluler kritis dengan angka mortalitas mencapai 10-50% akibat acute liver failure jika obat pemicu tidak dihentikan sesegera mungkin."
    },
    {
      "id": "dq3",
      "category": "DILI - Kalkulasi & Pola",
      "question": "Tn. F (52 th, BB 75 kg) dengan riwayat dislipidemia dan sindrom koroner kronis rutin mengonsumsi Atorvastatin 40 mg dan Asetosal 80 mg malam hari. Dua minggu lalu ia mendapat resep Azitromisin 500 mg/hari selama 5 hari untuk bronkitis akut. Saat kontrol rutin, pasien mengeluh mialgia ringan dan rasa begah di perut kanan atas. Data laboratorium: ALT 210 U/L (ULN: 40 U/L), AST 180 U/L (ULN: 35 U/L), ALP 195 U/L (ULN: 110 U/L), Bilirubin Total 1.6 mg/dL (ULN: 1.0 mg/dL), CK normal. Hitunglah nilai rasio R (R-ratio) Tn. F dan tentukan pola DILI yang dialami pasien serta interpretasi keterlibatan obatnya!",
      "options": [
        {
          "label": "A",
          "text": "R = 2.96 (Pola Campuran / Mixed, 2 < R < 5); mencerminkan kombinasi cedera nekrosis hepatoseluler dan kolestasis kanalikular, yang lazim dipicu oleh interaksi farmakokinetik atau toksisitas makrolida bersama statin",
          "correct": true
        },
        {
          "label": "B",
          "text": "R = 5.25 (Pola Hepatoseluler murni, R >= 5); kerusakan membran hepatosit eksklusif oleh asetosal",
          "correct": false
        },
        {
          "label": "C",
          "text": "R = 1.08 (Pola Kolestatik murni, R <= 2); stasis empedu selektif oleh metabolit hidrofilik atorvastatin",
          "correct": false
        },
        {
          "label": "D",
          "text": "R = 0.34 (Pola Iskemik Akut); diakibatkan penurunan perfusi hepar sesaat akibat hipoksemia bronkitis",
          "correct": false
        }
      ],
      "explanation": "R = (ALT / ULN_ALT) / (ALP / ULN_ALP) = (210 / 40) / (195 / 110) = 5.25 / 1.77 = 2.96. Pola Mixed (Campuran) berada pada rentang 2 < R < 5. Azitromisin dan makrolida lain dapat memicu DILI kolestatik/campuran dan berinteraksi menghambat transporter efluks empedu hepatobilier."
    },
    {
      "id": "dq4",
      "category": "DILI - Kalkulasi & Nomogram",
      "question": "Seorang wanita muda (21 th, BB 50 kg) dibawa ke IGD oleh keluarganya 6 jam setelah meminum 32 tablet Parasetamol 500 mg (total 16 gram) dalam upaya melukai diri (intoksikasi akut). Pasien mengeluh mual, muntah 2 kali, dan nyeri epigastrium ringan. Hasil pemeriksaan fisik: kesadaran kompos mentis, TD 115/75 mmHg, HR 88x/menit. Hasil lab jam ke-6 pascapaparan: Parasetamol serum 185 mcg/mL, ALT 38 U/L, AST 32 U/L, Bilirubin 0.8 mg/dL, Kreatinin 0.7 mg/dL. Berdasarkan evaluasi Rumack-Matthew Nomogram dan mekanisme toksikodinamik Parasetamol, keputusan klinis apa yang paling tepat diambil apoteker dan tim medis?",
      "options": [
        {
          "label": "A",
          "text": "Tunda pemberian NAC dan observasi selama 24 jam karena enzim ALT dan AST pasien masih dalam batas normal (38 dan 32 U/L), menandakan hepatosit belum mengalami kerusakan",
          "correct": false
        },
        {
          "label": "B",
          "text": "Berikan karbon aktif (activated charcoal) oral saja karena sudah lewat 4 jam sehingga NAC tidak lagi memiliki efektivitas terapeutik dalam menetralisir metabolit NAPQI",
          "correct": false
        },
        {
          "label": "C",
          "text": "Lakukan hemodialisis darurat untuk mengeliminasi parasetamol karena dosis 16 gram bersifat letal absolut yang tidak dapat diatasi oleh terapi antidotum farmakologis",
          "correct": false
        },
        {
          "label": "D",
          "text": "Segera inisiasi protokol N-Asetilsistein (NAC) intravena lengkap tanpa menunggu kenaikan ALT/AST, karena kadar serum 185 mcg/mL pada jam ke-6 melampaui garis penanganan Rumack-Matthew (garis 150 mcg/mL pada jam ke-4 atau ~100 mcg/mL pada jam ke-6) menandakan deplesi glutation masif yang akan memicu nekrosis sentrilobular fatal jika tertunda",
          "correct": true
        }
      ],
      "explanation": "Pada Rumack-Matthew Nomogram, garis terapi dimulai pada 150 mcg/mL pada jam ke-4 dan meluruh dengan t1/2 ~4 jam (pada jam ke-6 batas bahaya sekitar 106 mcg/mL). Kadar 185 mcg/mL pada jam ke-6 jelas berada di atas garis toksisitas tinggi (probable hepatic toxicity line). Pada tahap awal (0-24 jam), ALT/AST memang sering masih normal sementara GSH sedang terkuras habis. NAC harus diberikan secepat mungkin (idealnya < 8 jam) untuk menyediakan sistein dan gugus sulfhidril (-SH) guna menyintesis ulang glutation dan mengikat langsung NAPQI sebelum terjadi ikatan kovalen permanen dengan makromolekul hepatosit."
    },
    {
      "id": "dq5",
      "category": "DILI - Kalkulasi & RUCAM",
      "question": "Tn. D (58 th) dirawat dengan kecurigaan DILI setelah 3 minggu memulai terapi Karbamazepin 200 mg 2x/hari untuk neuralgia trigeminal. Tim farmasi klinis melakukan penelusuran kausalitas menggunakan Skala RUCAM (Roussel Uclaf Causality Assessment Method). Didapatkan: Time to onset 22 hari (+2), perbaikan ALT > 50% dalam 8 hari pasca-stop obat (+3), faktor risiko usia > 55 tahun (+1), penggunaan obat hepatotoksik lain disingkirkan (+2), etiologi non-obat (Hepatitis A/B/C/E, CMV, EBV, autoimun, USG empedu normal) terbukti negatif sempurna (+2), dan informasi produk mencantumkan hepatotoksisitas (+2). Total skor RUCAM = +12. Bagaimana interpretasi kategori probabilitas kausalitas berdasarkan skor RUCAM tersebut dan rekomendasi farmasis?",
      "options": [
        {
          "label": "A",
          "text": "Kategori 'Definite' (Pasti); mensyaratkan skor minimal +15 dan wajib dilakukan rechallenge ulang dengan dosis subklinis untuk konfirmasi hukum pembuktian",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kategori 'Highly Probable' (Sangat Mungkin, skor >= 9); Karbamazepin ditetapkan sebagai agen kausatif definitif, harus dihentikan permanen, dimasukkan dalam daftar alergi rekam medis, dan dilarang keras melakukan rechallenge",
          "correct": true
        },
        {
          "label": "C",
          "text": "Kategori 'Probable' (Mungkin, skor 6-8); karbamazepin dapat dilanjutkan dengan penurunan dosis 50% disertai pemantauan LFT mingguan",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kategori 'Possible' (Bisa jadi, skor 3-5); membutuhkan biopsi hati sebelum obat dapat dihentikan secara resmi",
          "correct": false
        }
      ],
      "explanation": "Interpretasi Skor RUCAM: >= 9 = Highly Probable, 6-8 = Probable, 3-5 = Possible, 1-2 = Unlikely, <= 0 = Excluded. Skor +12 masuk dalam kategori Highly Probable (Sangat Mungkin/Hampir Pasti). Pada DILI imunogenik/idiosinkratik berat oleh antikonvulsan aromatik (Karbamazepin, Fenitoin), obat harus dihentikan permanen dan dilarang keras melakukan rechallenge karena risiko nekrosis masif atau sindrom DRESS berulang yang fatal."
    },
    {
      "id": "dq6",
      "category": "DILI - Mekanisme & Toksisitas",
      "question": "An. B (7 th, BB 22 kg) dengan riwayat epilepsi umum refrakter diobati dengan Asam Valproat sirup 250 mg 3x/hari. Setelah 8 minggu terapi, anak tampak letargi progresif, muntah berulang, dan mengalami disorientasi tanpa tanda fokal neurologis baru. Hasil lab: ALT 165 U/L (ULN: 40 U/L), AST 140 U/L, Bilirubin Total 1.2 mg/dL, Amonia plasma melonjak tinggi 182 mcmol/L (Normal: 15-45 mcmol/L), Glukosa darah 58 mg/dL, Asidosis laktat ringan. USG abdomen menunjukkan hepatomegali dengan infiltrasi lemak difus (mikrovesikular steatosis). Apa mekanisme molekuler di balik toksisitas organ pada An. B dan intervensi antidotum spesifik lini pertama yang harus segera direkomendasikan?",
      "options": [
        {
          "label": "A",
          "text": "Valproat menginduksi CYP2E1 menghasilkan metabolit elektrofilik yang merusak duktus biliaris; tatalaksana spesifiknya adalah N-Asetilsistein (NAC) dosis tinggi oral",
          "correct": false
        },
        {
          "label": "B",
          "text": "Valproat memicu hemolisis intravaskular masif yang membebani hepar; tatalaksana spesifiknya adalah transfusi washed red cells dan kelasi besi deferoksamin",
          "correct": false
        },
        {
          "label": "C",
          "text": "Valproat membentuk metabolit 4-pentenoic acid dan valproyl-CoA yang menghambat enzim beta-oksidasi asam lemak di mitokondria serta menguras cadangan L-Karnitin bebas intraseluler, menghambat siklus urea; tatalaksana spesifiknya adalah infus L-Karnitin intravena (L-Carnitine loading 100 mg/kgBB)",
          "correct": true
        },
        {
          "label": "D",
          "text": "Terjadi reaksi hapten autoimun mediated oleh kompleks HLA-B*1502; tatalaksana spesifiknya adalah deksametason pulse dose 20 mg IV tanpa perlu menghentikan valproat",
          "correct": false
        }
      ],
      "explanation": "Asam Valproat menyebabkan toksisitas mitokondrial (mitochondrial DILI). Metabolitnya valproil-CoA mengikat karnitin bebas dan menghambat carnitine palmitoyltransferase 1 (CPT-1) serta enzim beta-oksidasi, sehingga asam lemak bebas tidak dapat masuk ke matriks mitokondria untuk siklus Krebs (memicu mikrovesikular steatosis & deplesi ATP). Penurunan asetil-CoA menurunkan sintesis N-asetilglutamat (kofaktor esensial carbamoyl phosphate synthetase I dalam siklus urea), memicu hiperamonemia sekunder dan ensefalopati hepatik. Terapi spesifik lini pertama adalah suplementasi L-Karnitin (L-Carnitine) IV untuk memulihkan kapasitas transport asam lemak mitokondria dan klirens amonia."
    },
    {
      "id": "dq7",
      "category": "DILI - Mekanisme & DRESS",
      "question": "Tn. G (49 th) dengan riwayat gout artritis kronis dan nefropati asam urat memulai terapi Alopurinol 300 mg 1x/hari 3 minggu yang lalu. Pasien dilarikan ke IGD dengan demam tinggi (39.2 °C), ruam eritematosa makulopapular konfluen yang meluas ke 60% permukaan tubuh, edema wajah periorbital berat, dan limfadenopati servikal bilateral. Hasil lab: Leukositosis 16.500/mcL dengan Eosinofilia absolut 2.100/mcL (13%), ALT 480 U/L (ULN: 40 U/L), AST 390 U/L, SCr meningkat dari 1.1 ke 2.4 mg/dL. Pasien diketahui beretnis Han/Asia Timur dan belum pernah tes farmakogenomik HLA. Apa diagnosis sindrom toksisitas multiorgan yang dialami Tn. G, varian alel genetik yang paling kuat berkorelasi, dan tatalaksana farmakologis utamanya?",
      "options": [
        {
          "label": "A",
          "text": "Sindrom DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms) terkait alel risiko HLA-B*5801; penanganan utama adalah penghentian segera Alopurinol dan pemberian Kortikosteroid sistemik (Metilprednisolon IV 1-2 mg/kg/hari) dengan tapering bertahap",
          "correct": true
        },
        {
          "label": "B",
          "text": "Sindrom Reye akibat metabolit asam urat; terkait mutasi CYP2C9; penanganan utama adalah pemberian infus glukosa 10% dan manitol untuk dekompresi intrakranial",
          "correct": false
        },
        {
          "label": "C",
          "text": "Intrinsic Hepatotoxicity murni akibat akumulasi Oksipurinol dosis tinggi; tidak berhubungan dengan varian HLA; penanganan cukup dengan hidrasi salin tanpa kortikosteroid",
          "correct": false
        },
        {
          "label": "D",
          "text": "Nekrolisis Epidermal Toksik (TEN) terisolasi; terkait varian HLA-B*1502; terapi utama adalah antibiotik profilaksis spektrum luas dan melanjutkan alopurinol dengan dosis rendah 50 mg",
          "correct": false
        }
      ],
      "explanation": "Kasus ini adalah gambaran klasik DRESS Syndrome (Drug Reaction with Eosinophilia and Systemic Symptoms) yang diinduksi Alopurinol (Allopurinol Hypersensitivity Syndrome / AHS). Onset 2-8 minggu, trias demam, ruam difus, eosinofilia (> 10%), dan kerusakan organ internal ganda (DILI berat dan nefritis interstitial akut). Alopurinol memiliki korelasi farmakogenomik yang sangat kuat dengan alel HLA-B*5801 (terutama populasi Asia). Tatalaksana pilar: STOP alopurinol segera dan berikan kortikosteroid sistemik (Metilprednisolon/Prednison) untuk menekan respons imun hiperaktif sel T sitotoksik."
    },
    {
      "id": "dq8",
      "category": "DILI - Mekanisme & Alkohol",
      "question": "Tn. M (42 th, riwayat konsumsi alkohol kronis 40 gram/hari selama 10 tahun) mengalami demam dan nyeri gigi berat. Pasien meminum Parasetamol 1000 mg tiap 6 jam selama 3 hari berturut-turut (total 4 gram/hari, masih dalam batas dosis harian maksimum leaflet). Di hari ke-4, pasien mengeluh nyeri kuadran kanan atas hebat, mual, dan muntah. Hasil lab menunjukkan lonjakan spektakuler: ALT 4.800 U/L (ULN: 40 U/L), AST 6.200 U/L, Bilirubin Total 3.2 mg/dL, INR 2.1. Mengapa dosis terapeutik lazim Parasetamol (4 gram/hari) dapat memicu cedera hepatoseluler fulminan masif pada pasien peminum alkohol kronis?",
      "options": [
        {
          "label": "A",
          "text": "Alkohol berkompetisi secara langsung pada transporter sekresi empedu kanalikular (MDR3) sehingga asam empedu berbalik membakar membran hepatosit",
          "correct": false
        },
        {
          "label": "B",
          "text": "Alkohol menginaktivasi enzim glukuronil transferase (UGT) secara permanen melalui fosforilasi reseptor nukleus PPAR-alfa",
          "correct": false
        },
        {
          "label": "C",
          "text": "Parasetamol bereaksi langsung dengan molekul etanol di sirkulasi darah portal membentuk senyawa karsinogenik etil-asetaminofen yang menghancurkan mikrotubulus sel Kupffer",
          "correct": false
        },
        {
          "label": "D",
          "text": "Alkohol kronis menginduksi enzim CYP2E1 secara berlebih sekaligus menguras cadangan Glutation (GSH) hepar dan memicu malnutrisi, sehingga proporsi parasetamol yang dialihkan menjadi metabolit reaktif NAPQI melonjak drastis melebihi ambang batas kapasitas detoksifikasi endogen",
          "correct": true
        }
      ],
      "explanation": "Pada alkoholisme kronis, etanol bertindak sebagai inducer kuat isoenzim sitokrom P450 CYP2E1. Pada saat yang sama, konsumsi alkohol jangka panjang dan defisiensi nutrisi menyebabkan deplesi cadangan glutation (GSH) intraseluler hepar hingga < 30% dari normal. Akibatnya, pada dosis terapeutik 4 g/hari (bahkan kadang 2-3 g/hari), pembentukan NAPQI jauh lebih banyak dan cepat menghabiskan sisa GSH, memicu nekrosis hepatosit sentrilobular akut masif dengan ALT/AST khas > 3.000 - 5.000 U/L."
    },
    {
      "id": "dq9",
      "category": "DILI - Mekanisme & Kolestatik",
      "question": "Pasien wanita (55 th) pascatransplantasi ginjal menerima terapi imunosupresi Siklosporin dan mikofenolat mofetil. Untuk infeksi mikoplasma atipikal, dokter menambahkan Klaritromisin 500 mg 2x/hari. Satu minggu kemudian, pasien mengalami ikterus klinis dengan sklera kuning mencolok dan gatal hebat di telapak tangan/kaki. Hasil lab: ALT 68 U/L (ULN: 40 U/L), AST 55 U/L (ULN: 35 U/L), ALP 510 U/L (ULN: 120 U/L), GGT 440 U/L (ULN: 45 U/L), Bilirubin Total 6.8 mg/dL (Bilirubin Direk 5.5 mg/dL). USG saluran empedu tidak menemukan batu maupun dilatasi duktus koledokus. Apa mekanisme molekuler DILI kolestatik yang dialami pasien terkait interaksi kedua obat tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Klaritromisin merusak membran endotel sinusoid hepar menyebabkan sinusoidal obstruction syndrome (SOS) dan peluruhan sel endotel",
          "correct": false
        },
        {
          "label": "B",
          "text": "Siklosporin mengendap di lumen duktus sistikus membentuk pseudolitiasis kristalina yang menyumbat aliran empedu mekanik",
          "correct": false
        },
        {
          "label": "C",
          "text": "Siklosporin dan metabolit makrolida secara langsung menghambat Bile Salt Export Pump (BSEP / ABCB11) di membran kanalikular hepatosit, diperparah oleh inhibisi metabolisme CYP3A4 oleh klaritromisin yang melipatgandakan kadar siklosporin, menyebabkan akumulasi asam empedu hidrofobik sitotoksik intraseluler",
          "correct": true
        },
        {
          "label": "D",
          "text": "Terjadi destruksi autoimun selektif terhadap sel-sel asinar pankreas yang memicu defisiensi lipase dan refluks bilier retrograde",
          "correct": false
        }
      ],
      "explanation": "Bile Salt Export Pump (BSEP, dikode oleh gen ABCB11) adalah transporter aktif ATP-dependent utama untuk mengekspresikan asam empedu dari hepatosit ke kanalikuli biliaris. Siklosporin adalah inhibitor poten BSEP. Klaritromisin adalah inhibitor kuat CYP3A4 dan P-gp, yang meningkatkan konsentrasi plasma dan jaringan Siklosporin. Penumpukan asam empedu hidrofobik (chenodeoxycholic acid, deoxycholic acid) di dalam sitosol hepatosit bersifat deterjen sitotoksik dan memicu apoptosis sel serta kolestasis intrahepatik berat dengan kenaikan tajam ALP/GGT/Bilirubin direk."
    },
    {
      "id": "dq10",
      "category": "DILI - Mekanisme & Toksikologi",
      "question": "Dalam audit farmakovigilans rumah sakit, apoteker membandingkan dua kasus DILI: Kasus 1 adalah seorang pria yang terpapar karbon tetraklorida (CCl4) di bengkel industri dengan nekrosis hepar yang terjadi 24 jam kemudian secara seragam; Kasus 2 adalah seorang wanita muda yang mengalami hepatitis akut 6 minggu setelah mengonsumsi Isoniazid profilaksis pada dosis lazim 300 mg/hari. Manakah pernyataan komparatif yang PALING TEPAT mengenai prinsip toksikologi Intrinsic DILI (Kasus 1) versus Idiosyncratic DILI (Kasus 2)?",
      "options": [
        {
          "label": "A",
          "text": "Intrinsic DILI hanya dipicu oleh obat herbal/suplemen tanpa metabolit reaktif, sedangkan Idiosyncratic DILI hanya terjadi pada pasien lanjut usia dengan defisiensi albumin",
          "correct": false
        },
        {
          "label": "B",
          "text": "Intrinsic DILI bersifat dose-dependent, memiliki onset cepat yang dapat diprediksi pada model hewan, dan insidensi tinggi jika ambang dosis terlampaui; sedangkan Idiosyncratic DILI bersifat dose-independent pada rentang terapeutik, tidak dapat diprediksi pada uji praklinis hewan, memiliki masa laten bervariasi, dan sangat dipengaruhi oleh kerentanan imunogenetik penjamu",
          "correct": true
        },
        {
          "label": "C",
          "text": "Intrinsic DILI selalu disertai manifestasi immuno-alergik seperti ruam dan eosinofilia, sedangkan Idiosyncratic DILI murni merupakan toksisitas fisikokimia langsung pada mitokondria",
          "correct": false
        },
        {
          "label": "D",
          "text": "Intrinsic DILI dapat dicegah dengan tes skrining alel HLA, sedangkan Idiosyncratic DILI dapat sepenuhnya dihindari hanya dengan menurunkan dosis menjadi sepertiga",
          "correct": false
        }
      ],
      "explanation": "Karakteristik esensial: Intrinsic DILI (direct hepatotoxins, cth: parasetamol overdosis, CCl4) terjadi pada siapa saja jika dosis ambang terlampaui, dose-dependent, onset jam-hari, dapat direproduksi pada hewan coba. Idiosyncratic DILI (cth: Isoniazid, Amoksisilin-klavulanat) terjadi pada minoritas kecil individu yang rentan (1:1000 hingga 1:100.000), tidak bergantung langsung pada dosis lazim, onset 1 minggu hingga berbulan-bulan, tidak dapat direproduksi pada hewan standar, dan dimediasi oleh faktor imunogenik (HLA) atau polimorfisme metabolik."
    },
    {
      "id": "dq11",
      "category": "DILI - OAT & Urutan Toksisitas",
      "question": "Tn. K (38 th, TB paru BTA positif) baru saja dirawat karena DILI hepatoseluler berat (ALT 420 U/L, Bilirubin 3.8 mg/dL) pada minggu ke-3 fase intensif OAT lini pertama (RHZE). Sesuai panduan ATS/IDSA/WHO, seluruh OAT segera dihentikan. Dokter spesialis paru berdiskusi dengan apoteker bangsal mengenai urutan tingkat hepatotoksisitas intrinsik dari ketiga obat hepatotoksik dalam paduan tersebut untuk menyusun strategi reintroduksi di kemudian hari. Manakah urutan tingkat potensi hepatotoksisitas intrinsik dari yang PALING TINGGI ke yang PALING RENDAH di antara ketiga OAT lini pertama tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Pirazinamid (Z) > Isoniazid (H) > Rifampisin (R)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Rifampisin (R) > Isoniazid (H) > Pirazinamid (Z)",
          "correct": false
        },
        {
          "label": "C",
          "text": "Isoniazid (H) > Pirazinamid (Z) > Rifampisin (R)",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pirazinamid (Z) > Rifampisin (R) > Isoniazid (H)",
          "correct": false
        }
      ],
      "explanation": "Berdasarkan bukti klinis dan pedoman tatalaksana DILI TB internasional (ATS/CDC/IDSA/WHO): Pirazinamid (Z) adalah obat yang paling hepatotoksik di antara OAT lini pertama, sering memicu nekrosis berkepanjangan dan sulit diprediksi. Isoniazid (H) menempati urutan kedua (memicu hepatotoksisitas via metabolit asetilhidrazin atau hidrazin). Rifampisin (R) memiliki potensi hepatotoksisitas intrinsik paling rendah (walaupun dapat memicu hiperbilirubinemia transien akibat kompetisi transporter empedu OATP1B1 dan induksi enzim)."
    },
    {
      "id": "dq12",
      "category": "DILI - OAT & Aturan Penghentian",
      "question": "Apoteker melakukan pemantauan mingguan pada 4 orang pasien rawat jalan TB paru yang sedang menerima terapi 4KDT (FDC). Data klinis dan lab minggu ke-4 adalah sebagai berikut:\n• Pasien 1: Tanpa keluhan (asimtomatik), ALT 160 U/L (ULN: 40 U/L), Bilirubin Total 0.9 mg/dL.\n• Pasien 2: Mengeluh mual ringan pasca minum obat, ALT 110 U/L (ULN: 40 U/L), Bilirubin Total 1.1 mg/dL.\n• Pasien 3: Asimtomatik, ALT 240 U/L (ULN: 40 U/L), Bilirubin Total 1.2 mg/dL.\n• Pasien 4: Mual dan anoreksia berat, sklera ikterik, ALT 130 U/L (ULN: 40 U/L), Bilirubin Total 2.6 mg/dL.\nBerdasarkan kriteria baku penghentian OAT (Rule of Discontinuation ATS/WHO/Kemenkes), pasien manakah yang WAJIB SEGERA DIHENTIKAN paduan OAT-nya?",
      "options": [
        {
          "label": "A",
          "text": "Hanya Pasien 4 saja, karena Pasien 3 tidak menunjukkan keluhan subjektif apa pun",
          "correct": false
        },
        {
          "label": "B",
          "text": "Pasien 1 dan Pasien 2, karena kenaikan enzim apa pun di atas 2x ULN wajib langsung disetop",
          "correct": false
        },
        {
          "label": "C",
          "text": "Seluruh pasien (Pasien 1, 2, 3, dan 4) harus langsung distop OAT-nya tanpa kecuali",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pasien 3 (ALT >= 5x ULN meskipun asimtomatik) dan Pasien 4 (Bilirubin Total > 2 mg/dL dengan keluhan ikterus dan mual klinis)",
          "correct": true
        }
      ],
      "explanation": "Aturan Baku Penghentian OAT (Stop Rule): OAT harus dihentikan jika: (1) Enzim transaminase (ALT/AST) >= 5x ULN (meskipun pasien asimtomatik tanpa keluhan - memenuhi kriteria Pasien 3: ALT 240/40 = 6x ULN); ATAU (2) ALT/AST >= 3x ULN DISERTAI gejala klinis hepatotoksisitas (mual, muntah, anoreksia, ikterus); ATAU (3) Bilirubin Total >= 2.0 mg/dL (memenuhi kriteria Pasien 4: Bilirubin 2.6 mg/dL + ikterus). Pasien 1 (ALT 4x ULN asimtomatik) dan Pasien 2 (ALT < 3x ULN) masih dapat dipantau ketat secara berkala tanpa penghentian instan."
    },
    {
      "id": "dq13",
      "category": "DILI - OAT & Rechallenge",
      "question": "Tn. R (45 th) mengalami DILI saat fase intensif TB paru sehingga seluruh OAT distop. Setelah 2 minggu pemantauan, gejala klinis resolusi sempurna dan hasil evaluasi LFT menunjukkan: ALT 32 U/L (ULN: 40 U/L), AST 28 U/L, Bilirubin Total 0.8 mg/dL (fungsi hati kembali normal sempurna). Dokter spesialis paru meminta apoteker memimpin protokol reintroduksi obat secara bertahap (Rechallenge Protocol). Bagaimana urutan reintroduksi OAT lini pertama yang paling aman dan evidence-based menurut konsensus internasional?",
      "options": [
        {
          "label": "A",
          "text": "Mulai dengan Pirazinamid (Z) dosis penuh terlebih dahulu karena Z memiliki daya bakterisidal intraseluler terkuat untuk mensterilkan lesi kaseosa",
          "correct": false
        },
        {
          "label": "B",
          "text": "Mulai dengan Rifampisin (R) dosis penuh -> evaluasi LFT setelah 3-7 hari; jika aman, tambahkan Isoniazid (H) dosis penuh -> evaluasi LFT setelah 3-7 hari; jangan reintroduksi Pirazinamid (Z) jika episode DILI awal berat, atau tambahkan Z paling akhir hanya jika sangat esensial",
          "correct": true
        },
        {
          "label": "C",
          "text": "Berikan kembali seluruh obat (RHZE) sekaligus dalam dosis 1/4, lalu naikkan bertahap tiap 2 hari secara serentak",
          "correct": false
        },
        {
          "label": "D",
          "text": "Mulai dengan Isoniazid (H) selama 14 hari, kemudian langsung tambahkan Pirazinamid (Z) tanpa memerlukan Rifampisin",
          "correct": false
        }
      ],
      "explanation": "Prinsip Rechallenge OAT: Obat dengan risiko hepatotoksisitas terendah namun efikasi sterilisasi tinggi diberikan pertama kali. Langkah 1: Berikan Rifampisin (R) (hepatotoksisitas terendah). Pantau klinis dan LFT 3-7 hari. Langkah 2: Bila LFT stabil, tambahkan Isoniazid (H). Pantau LFT 3-7 hari. Langkah 3: Pirazinamid (Z) adalah penyebab DILI paling sering dan paling toksik; bila DILI awal berat atau memenuhi Hy's Law, Pirazinamid TIDAK BOLEH direintroduksi lagi dan dieliminasi permanen dari rejimen!"
    },
    {
      "id": "dq14",
      "category": "DILI - OAT & Paduan Modifikasi",
      "question": "Pada kasus Tn. R di atas, setelah reintroduksi bertahap, Rifampisin dan Isoniazid dapat ditoleransi dengan sangat baik (LFT stabil normal). Namun, karena riwayat DILI awalnya disertai ikterus berat dan ALT > 10x ULN, tim klinis memutuskan untuk TIDAK memberikan kembali Pirazinamid (Z dihentikan permanen). Pasien adalah kasus TB paru sensitif obat (TB SO) kasus baru. Bagaimana modifikasi durasi dan paduan terapi TB yang tepat setelah Pirazinamid dieliminasi permanen dari rejimen fase intensif?",
      "options": [
        {
          "label": "A",
          "text": "Durasi terapi tetap 6 bulan standar (2 RH-E / 4 RH) tanpa perlu penambahan waktu karena Etambutol mampu menggantikan efek sterilisasi Pirazinamid secara penuh",
          "correct": false
        },
        {
          "label": "B",
          "text": "Paduan diganti menjadi Levofloksasin dan Amikasin injeksi selama 18 bulan seperti protokol TB Resisten Obat (TB-MDR)",
          "correct": false
        },
        {
          "label": "C",
          "text": "Rejimen diubah menjadi paduan 2 RH-E (fase intensif dengan Rifampisin, Isoniazid, Etambutol selama 2 bulan) dilanjutkan 7 RH (fase lanjutan Rifampisin dan Isoniazid selama 7 bulan), sehingga total durasi terapi diperpanjang menjadi 9 bulan",
          "correct": true
        },
        {
          "label": "D",
          "text": "Pasien dinyatakan sembuh setelah menyelesaikan 2 bulan RH-E karena bakterisidal Rifampisin sudah cukup membersihkan kuman di sputum",
          "correct": false
        }
      ],
      "explanation": "Peran utama Pirazinamid (Z) adalah sterilisasi bakteri TB semi-dormant yang berada di lingkungan asam intraseluler makrofag pada 2 bulan pertama, yang memungkinkan pemendekan terapi TB dari 9 bulan menjadi 6 bulan. Jika Z tidak dapat digunakan atau dihentikan akibat hepatotoksisitas, durasi pengobatan TB sensitif obat HARUS diperpanjang menjadi total 9 bulan (2 bulan fase intensif Rifampisin + Isoniazid + Etambutol, diikuti 7 bulan fase lanjutan Rifampisin + Isoniazid: 2RH-E / 7RH) untuk mencegah kekambuhan (relaps)."
    },
    {
      "id": "dq15",
      "category": "DILI - OAT & Terapi Kolestatik",
      "question": "Ny. V (56 th) mengalami DILI tipe kolestatik pasca terapi antibiotik dengan keluhan pruritus intrikabel (gatal hebat yang mengganggu tidur) dan peningkatan ALP 4.5x ULN serta Bilirubin Total 4.0 mg/dL. Apoteker merekomendasikan penambahan terapi Asam Ursodeoksikolat (UDCA) 15 mg/kgBB/hari dan Kolestiramin sachet oral. Apa rasionalitas farmakoterapi kombinasi kedua agen tersebut dan bagaimana instruksi waktu konsumsi yang krusial diedukasikan kepada pasien?",
      "options": [
        {
          "label": "A",
          "text": "UDCA bekerja menggantikan asam empedu endogen hidrofobik yang toksik dengan asam empedu hidrofilik non-toksik serta merangsang sekresi kanalikular; sedangkan Kolestiramin adalah resin pengikat asam empedu di usus untuk membuangnya via feses; Kolestiramin HARUS diminum dengan jeda minimal 2-4 jam sebelum atau sesudah UDCA agar tidak mengikat dan menginaktivasi UDCA",
          "correct": true
        },
        {
          "label": "B",
          "text": "UDCA memblokade sintesis kolesterol di mitokondria sedangkan Kolestiramin meningkatkan absorbsi empedu; keduanya harus diminum bersamaan pada saat makan suap pertama",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kolestiramin adalah antihistamin sedatif untuk meredakan gatal sedangkan UDCA adalah kortikosteroid lokal pelindung usus; tidak ada interaksi di antara keduanya",
          "correct": false
        },
        {
          "label": "D",
          "text": "UDCA dan Kolestiramin bekerja membentuk khelat permanen di dalam darah untuk menarik bilirubin keluar melalui filtrasi glomerulus ginjal",
          "correct": false
        }
      ],
      "explanation": "UDCA (Ursodeoxycholic acid) adalah asam empedu hidrofilik alami yang memiliki efek sitoprotektif, imunomodulator, dan koleretis (merangsang ekskresi empedu kanalikular via aktivasi transporter BSEP dan MRP2), menurunkan toksisitas retensi asam empedu hidrofobik. Kolestiramin adalah resin penukar anionik yang mengikat asam empedu di lumen usus halus, memutus sirkulasi enterohepatik, dan meningkatkan eliminasi asam empedu via feses sehingga meredakan pruritus kolestatik. Namun, karena kolestiramin mengikat senyawa asam non-spesifik, ia dapat mengikat UDCA jika diminum bersamaan! Pasien harus diedukasi untuk memberi jeda minum obat minimal 2-4 jam."
    },
    {
      "id": "dq16",
      "category": "DIKI - Hemodinamik & Triple Whammy",
      "question": "Tn. T (70 th, riwayat hipertensi dan gagal jantung NYHA II) rutin mengonsumsi Kaptopril 25 mg 3x/hari dan Furosemid 40 mg 1x/hari. Karena nyeri sendi lutut akut (osteoartritis), pasien membeli sendiri Ketorolak tablet 10 mg dan meminumnya 3x sehari selama 5 hari berturut-turut. Pasien datang ke IGD dengan kondisi lemas, pusing melayang saat berdiri, volume urin sangat sedikit (< 300 mL dalam 24 jam). TD 95/60 mmHg, HR 98x/menit. Hasil lab: SCr melonjak drastis dari baseline 0.9 mg/dL menjadi 3.2 mg/dL, BUN 68 mg/dL, Kalium serum 5.8 mEq/L. Fenomena hemodinamik nefrologi apa yang terjadi pada Tn. T (The Triple Whammy) dan bagaimana mekanisme presipitasinya?",
      "options": [
        {
          "label": "A",
          "text": "NSAID dan Diuretik bereaksi membentuk presipitat kristal intratubular yang menyumbat duktus kolektivus ginjal secara mekanis",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kaptopril meningkatkan klirens furosemid di tubulus proksimal sehingga terjadi retensi air masif di parenkim ginjal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Ketorolak merangsang pelepasan aldosteron adrenal secara masif yang menyebabkan nekrosis korteks renalis bilateral",
          "correct": false
        },
        {
          "label": "D",
          "text": "Deplesi volume intravaskular oleh Diuretik memicu vasokonstriksi kompensatorik -> NSAID menghambat prostaglandin renal sehingga menghilangkan vasodilatasi protektif arteriol aferen -> ACE-Inhibitor menghambat Angiotensin II sehingga menghilangkan vasokonstriksi arteriol eferen -> tekanan filtrasi intraglomerular kolaps total memicu AKI hemodinamik akut",
          "correct": true
        }
      ],
      "explanation": "Fenomena 'Triple Whammy' adalah kombinasi mematikan antara Diuretik + ACEI/ARB + NSAID: 1. Diuretik menurunkan volume cairan ekstraseluler dan aliran darah ginjal. 2. Ginjal berkompensasi memproduksi Prostaglandin (PGE2/PGI2) untuk vasodilatasi arteriol aferen agar darah tetap masuk ke glomerulus. NSAID memblokade COX, memicu vasokonstriksi berat arteriol aferen (pintu masuk tertutup!). 3. Ginjal juga mengaktifkan Angiotensin II untuk vasokonstriksi arteriol eferen guna mempertahankan tekanan hidrostatik kapiler glomerulus. ACEI memblokade Angiotensin II, memicu dilatasi arteriol eferen (pintu keluar bocor lebar!). Akibatnya: Tekanan filtrasi kapiler intraglomerular anjlok drastis ke titik nol, menyebabkan gagal ginjal akut (AKI) prerenal fungsional berat disertai hiperkalemia."
    },
    {
      "id": "dq17",
      "category": "DIKI - Hemodinamik & SGLT2i",
      "question": "Ny. E (58 th, DM Tipe 2 dan Hipertensi) memulai terapi tambahan SGLT2 Inhibitor Dapagliflozin 10 mg 1x/hari di samping Metformin dan Kandesartan. Saat evaluasi laboratorium pada minggu ke-2, dokter menemukan eGFR pasien turun dari 75 mL/menit/1.73m² (baseline) menjadi 64 mL/menit/1.73m² (penurunan ~14%), dan Serum Kreatinin naik dari 0.9 mg/dL menjadi 1.05 mg/dL. Pasien tidak memiliki keluhan, TD 125/78 mmHg, dan tidak ada proteinuria baru. Dokter berencana menghentikan Dapagliflozin karena khawatir obat merusak ginjal. Bagaimana penjelasan farmakoterapi klinis apoteker terkait fenomena 'eGFR Dip' tersebut dan rekomendasi yang paling tepat?",
      "options": [
        {
          "label": "A",
          "text": "Penurunan eGFR menandakan nekrosis tubulus akut toksik stadium 1; Dapagliflozin harus segera dihentikan permanen dan diganti Glimepirid",
          "correct": false
        },
        {
          "label": "B",
          "text": "Fenomena 'eGFR dip' (penurunan eGFR 10-30% pada 2-4 minggu awal) adalah efek hemodinamik fisiologis reversibel akibat pengaktifan Tubuloglomerular Feedback (TGF) yang merestorasi vasokonstriksi arteriol aferen dan menurunkan hiperfiltrasi intraglomerular; terapi HARUS TETAP DILANJUTKAN karena terbukti nefroprotektif jangka panjang",
          "correct": true
        },
        {
          "label": "C",
          "text": "Fenomena ini disebabkan oleh glukosuria yang memicu nefritis interstisial akut; dosis Dapagliflozin harus dinaikkan menjadi 20 mg untuk memulihkan fungsi filtrasi",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pasien mengalami dehidrasi osmotik masif intraseluler; kandesartan harus dinaikkan dosisnya 2 kali lipat untuk mendilatasi arteriol eferen lebih lanjut",
          "correct": false
        }
      ],
      "explanation": "Mekanisme Tubuloglomerular Feedback (TGF) oleh SGLT2 Inhibitor: Pada diabetes, reabsorpsi glukosa dan natrium di tubulus proksimal meningkat via SGLT2, sehingga pengiriman Na+ ke macula densa berkurang. Macula densa menangkap sinyal keliru seolah-olah perfusi ginjal rendah, memicu vasodilatasi arteriol aferen patologis (hiperfiltrasi intraglomerular diabetik yang merusak nefron). SGLT2i menghambat reabsorpsi Na+ di proksimal -> Na+ yang sampai ke macula densa meningkat -> Adenosin dilepaskan -> vasokonstriksi arteriol aferen dinormalkan kembali -> tekanan intraglomerular turun -> GFR turun sesaat 10-30% ('initial dip'). Berbagai uji klinis besar (DAPA-CKD, EMPA-KIDNEY) membuktikan eGFR dip ini reversibel dan justru memperlambat laju penurunan fungsi ginjal jangka panjang secara dramatis. Penghentian hanya dipertimbangkan bila penurunan eGFR > 30% atau ada deplesi volume berat."
    },
    {
      "id": "dq18",
      "category": "DIKI - Hemodinamik & CNI",
      "question": "Tn. P (62 th) pascatransplantasi ginjal alogenik 2 bulan lalu menerima terapi imunosupresi Takrolimus oral (target trough level 8-10 ng/mL). Saat kontrol, kadar palung Takrolimus darah terukur 15.2 ng/mL (supraterapeutik). Pasien mengeluh sakit kepala dan TD meningkat menjadi 155/95 mmHg. Serum Kreatinin naik dari baseline 1.2 mg/dL menjadi 1.9 mg/dL tanpa proteinuria maupun demam. Biopsi tidak menunjukkan tanda rejeksi akut seluler. Apa mekanisme hemodinamik nefrotoksisitas akut Calcineurin Inhibitor (CNI) pada Tn. P dan strategi farmakologis apa yang terbukti efektif memulihkannya?",
      "options": [
        {
          "label": "A",
          "text": "Takrolimus mengkristal di tubulus distal membentuk batu silikat; tatalaksananya adalah hidrasi salin masif dan asetazolamid",
          "correct": false
        },
        {
          "label": "B",
          "text": "Takrolimus memblokade reseptor aldosteron di tubulus distal memicu pembuangan natrium berlebih; tatalaksananya adalah fludrokortison oral",
          "correct": false
        },
        {
          "label": "C",
          "text": "Takrolimus memicu vasokonstriksi poten pada arteriol aferen renalis melalui stimulasi pelepasan Endotelin-1, Tromboksan A2, dan penurunan sintesis Nitric Oxide (NO); tatalaksananya adalah menurunkan dosis Takrolimus dan menambahkan CCB golongan Dihidropiridin (Amlodipin/Nifedipin) yang mendilatasi arteriol aferen secara selektif",
          "correct": true
        },
        {
          "label": "D",
          "text": "Terjadi nefropati osmotik akibat eksipien kapsul takrolimus; tatalaksananya adalah penggantian ke Siklosporin dosis tinggi",
          "correct": false
        }
      ],
      "explanation": "Nefrotoksisitas akut Calcineurin Inhibitor (Takrolimus dan Siklosporin) bersifat hemodinamik fungsional: CNI meningkatkan tonus simpatis renal, merangsang pelepasan vasokonstriktor poten Endotelin-1 dan Tromboksan, serta menghambat vasodilator prostasiklin dan NO, menghasilkan spasme/vasokonstriksi tajam pada arteriol aferen glomerulus. Hal ini menurunkan aliran darah ginjal (RBF) dan laju filtrasi glomerulus (GFR) serta memicu hipertensi sistemik. Antagonis kalsium (CCB) golongan Dihidropiridin (cth: Amlodipin) bekerja memblokade influks Ca2+ pada kanal tipe L di otot polos arteriol aferen, membalikkan vasokonstriksi CNI, meningkatkan perfusi renal, sekaligus mengatasi hipertensi."
    },
    {
      "id": "dq19",
      "category": "DIKI - Hemodinamik & Fraksi Ekskresi",
      "question": "Tn. J (65 th, BB 60 kg) dirawat di bangsal penyakit dalam dengan oliguria (urin 350 mL/24 jam) pasca diare akut 3 hari dan konsumsi Natrium Diklofenak 50 mg 3x/hari. Lab: SCr 2.8 mg/dL (baseline 0.9 mg/dL), BUN 64 mg/dL (rasio BUN/SCr = 22.8), Natrium urin terukur 12 mEq/L, Osmolalitas urin 580 mOsm/kg. Apoteker menghitung Fractional Excretion of Sodium (FE_Na) dan mendapatkan nilai 0.6%. Bagaimana interpretasi nilai FE_Na dan rasio BUN/SCr pada Tn. J dalam membedakan etiologi AKI Prerenal Azotemia fungsional versus Acute Tubular Necrosis (ATN) intrinsik?",
      "options": [
        {
          "label": "A",
          "text": "FE_Na < 1% dan rasio BUN/SCr > 20 menandakan AKI Prerenal Azotemia fungsional dengan tubulus ginjal yang masih intak dan berfungsi baik mereabsorpsi natrium dan air secara maksimal sebagai kompensasi hipoperfusi; kondisi ini reversibel dengan hidrasi cairan isotonik dan penghentian NSAID",
          "correct": true
        },
        {
          "label": "B",
          "text": "FE_Na < 1% mengonfirmasi terjadinya Acute Tubular Necrosis (ATN) nekrotik dengan destruksi epitel tubulus proksimal yang membutuhkan dialisis segera",
          "correct": false
        },
        {
          "label": "C",
          "text": "Rasio BUN/SCr > 20 mengindikasikan adanya perdarahan saluran cerna bawah masif tanpa korelasi dengan fungsi perfusi ginjal",
          "correct": false
        },
        {
          "label": "D",
          "text": "Nilai FE_Na < 1% menunjukkan nefropati obstruktif post-renal akibat hipertrofi prostat jinak",
          "correct": false
        }
      ],
      "explanation": "Parameter diferensiasi AKI Prerenal vs ATN Intrinsik: Pada AKI Prerenal (Azotemia Fungsional / Hipoperfusi): Arsitektur tubulus masih utuh dan merespons stimulus aldosteron/RAAS untuk menahan Na+ dan air sekuat tenaga -> Natrium urin rendah (< 20 mEq/L), FE_Na < 1% (bahkan < 0.5%), Osmolalitas urin pekat (> 500 mOsm/kg), dan reabsorpsi urea di tubulus proksimal meningkat tajam sehingga rasio BUN/SCr > 20:1. Pada ATN Intrinsik: Sel epitel tubulus telah nekrosis dan kehilangan kemampuan reabsorpsi (tubular paralysis) -> Na+ bocor ke urin (Na urin > 40 mEq/L), FE_Na > 2%, Osmolalitas urin encer (< 350 mOsm/kg, isostenurik), dan rasio BUN/SCr < 15:1."
    },
    {
      "id": "dq20",
      "category": "DIKI - Hemodinamik & Toleransi ACEI",
      "question": "Ny. A (66 th, riwayat DM Tipe 2 dan albuminuria) baru saja memulai terapi Ramipril 5 mg 1x/hari. Pada kontrol hari ke-10, hasil pemeriksaan lab menunjukkan Serum Kreatinin meningkat dari 1.3 mg/dL (baseline) menjadi 1.6 mg/dL (kenaikan ~23%), Kalium serum 4.7 mEq/L (baseline 4.4 mEq/L), TD 130/80 mmHg, dan pasien merasa bugar tanpa keluhan. Berdasarkan konsensus KDIGO dan pedoman farmakoterapi ginjal, apakah tindakan yang paling tepat terkait penggunaan Ramipril pada Ny. A?",
      "options": [
        {
          "label": "A",
          "text": "Segera hentikan Ramipril karena setiap kenaikan Serum Kreatinin pasca-ACEI menandakan alergi nefritis interstisial akut yang mengancam jiwa",
          "correct": false
        },
        {
          "label": "B",
          "text": "Turunkan dosis Ramipril menjadi 1.25 mg dan berikan suplementasi kalium klorida oral untuk menstabilkan membran sel ginjal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Ganti Ramipril dengan NSAID dosis rendah untuk memicu vasokonstriksi arteriol aferen penyeimbang",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pertahankan terapi Ramipril dan teruskan pemantauan berkala, karena kenaikan Serum Kreatinin hingga 30% dari baseline dalam 2 minggu pertama masih dalam batas toleransi hemodinamik yang diharapkan dan terbukti nefroprotektif jangka panjang selama kalium serum stabil (< 5.5 mEq/L)",
          "correct": true
        }
      ],
      "explanation": "Konsensus KDIGO menetapkan aturan praktis penting: Inisiasi ACE-Inhibitor atau ARB secara fisiologis meredakan tekanan intraglomerular via vasodilatasi arteriol eferen, yang menyebabkan sedikit penurunan GFR. Kenaikan Serum Kreatinin hingga 30% di atas nilai baseline (pada pasien ini: 1.3 -> 1.69 mg/dL adalah batas 30%) dapat diterima dan ditoleransi (permissive hypercreatininemia), asalkan kadar Kalium serum tidak melebihi 5.5 mEq/L dan tidak ada tanda stenosis arteri renalis bilateral. Menghentikan ACEI secara prematur pada kondisi ini akan menghilangkan proteksi kardiorenal jangka panjang pasien."
    },
    {
      "id": "dq21",
      "category": "DIKI - Aminoglikosida & Struktur",
      "question": "Tn. W (54 th) dirawat di ICU dengan bakteremia Pseudomonas aeruginosa dan mendapat terapi kombinasi Gentamisin IV 5 mg/kgBB sekali sehari bersama Meropenem. Apoteker klinis menjelaskan kepada dokter muda mengenai dasar fisiologis mengapa Gentamisin terakumulasi secara masif dan selektif di sel epitel tubulus proksimal ginjal. Bagaimana hubungan struktur kimia, muatan molekul, dan mekanisme transport intraseluler aminoglikosida yang mendasari nefrotoksisitas tubulernya?",
      "options": [
        {
          "label": "A",
          "text": "Gentamisin adalah senyawa nonpolar sangat lipofil yang berdifusi pasif menembus membran glomerulus dan mengkristal di ruang Bowman",
          "correct": false
        },
        {
          "label": "B",
          "text": "Gentamisin adalah polikation bermuatan positif pada pH fisiologis yang berikatan elektrostatik kuat dengan fosfolipid membran anionik bermuatan negatif di brush-border tubulus proksimal, kemudian diinternalisasi via endositosis termediasi reseptor Megalin-Kubilin dan berakumulasi di lisosom hingga memicu ruptur dan apoptosis sel",
          "correct": true
        },
        {
          "label": "C",
          "text": "Gentamisin bermuatan negatif kuat sehingga menolak albumin plasma dan langsung difiltrasi aktif oleh pompa P-glikoprotein ke dalam mitokondria sel duktus pengumpul",
          "correct": false
        },
        {
          "label": "D",
          "text": "Gentamisin mengikat reseptor eritropoietin di sel interstisial hepar memicu deplesi oksigen di medula ginjal",
          "correct": false
        }
      ],
      "explanation": "Struktur Aminoglikosida kaya gugus amino (-NH2) yang terprotonasi menjadi kation bermuatan positif (+). Membran mikrovili sel epitel tubulus proksimal (brush border) kaya akan fosfolipid asam (fosfatidilinositol) yang bermuatan negatif (-). Interaksi elektrostatik ini mengikat aminoglikosida ke reseptor endositik Megalin dan Kubilin. Setelah diendositosis ke dalam vesikel, aminoglikosida ditransfer ke lisosom, menghambat fosfolipase (memicu phospholipidosis lisosomal). Ketika kapasitas lisosom jenuh, membran lisosom ruptur melepaskan enzim hidrolitik dan aminoglikosida konsentrasi tinggi ke sitosol, memicu disfungsi mitokondria, pembentukan ROS, dan nekrosis tubulus akut (ATN)."
    },
    {
      "id": "dq22",
      "category": "DIKI - Aminoglikosida & Dosis Sekali Sehari",
      "question": "Ny. C (48 th, BB 60 kg, CrCl 75 mL/menit) membutuhkan terapi Amikasin untuk pielonefritis komplikasi. Tim klinis mempertimbangkan dua rejimen: Rejimen Konvensional (Dosis terbagi: 5 mg/kg tiap 8 jam) vs Rejimen Extended-Interval Dosing (Dosis tinggi sekali sehari: 15 mg/kg tiap 24 jam). Berdasarkan konsep Farmakokinetik/Farmakodinamik (PK/PD) dan toksikologi saturasi renal, mengapa strategi Extended-Interval Dosing (sekali sehari) terbukti LEBIH SUPERIOR dalam efikasi bakterisidal sekaligus LEBIH RENDAH risiko nefrotoksisitasnya?",
      "options": [
        {
          "label": "A",
          "text": "Aminoglikosida bersifat concentration-dependent killing (target Cmax/MIC > 8-10) dengan Post-Antibiotic Effect (PAE) panjang; uptake aminoglikosida ke sel tubulus ginjal via reseptor megalin bersifat saturable (dapat jenuh), sehingga dosis tunggal tinggi membatasi ambilan tubular dan menyediakan periode konsentrasi lembah (trough < 1 mcg/mL) yang panjang bagi sel tubulus untuk membersihkan akumulasi obat",
          "correct": true
        },
        {
          "label": "B",
          "text": "Pemberian sekali sehari menurunkan klirens ginjal sehingga obat menetap di pembuluh darah perifer tanpa pernah mencapai sel-sel ginjal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Aminoglikosida bersifat time-dependent killing (T > MIC), dan dosis sekali sehari menurunkan ikatan protein plasma sehingga obat lebih cepat diekskresi via empedu",
          "correct": false
        },
        {
          "label": "D",
          "text": "Dosis sekali sehari mengubah struktur kimia amikasin menjadi metabolit asam yang tidak dapat dikenali oleh bakteri gram negatif",
          "correct": false
        }
      ],
      "explanation": "Dua prinsip ilmiah utama: 1. Efikasi Bakterisidal: Aminoglikosida membunuh bakteri secara konsentrasi-dependen. Rasio Cmax/MIC puncak optimal adalah 8-10x untuk mencegah resistensi adaptif dan memaksimalkan Post-Antibiotic Effect (PAE). Dosis tinggi sekali sehari menghasilkan Cmax yang sangat tinggi. 2. Toksikologi Ginjal: Ambilan aminoglikosida ke dalam sel tubulus ginjal melalui endositosis Megalin/Kubilin bersifat saturable (memiliki kapasitas batas kejenuhan ambilan). Begitu transporter jenuh, sisa obat dalam urin diekskresi tanpa diserap. Sebaliknya, pemberian dosis terbagi sering (tiap 8 jam) menjaga kadar plasma konstan di atas ambang saturasi sepanjang hari sehingga terjadi akumulasi kumulatif maksimal di lisosom tubulus. Selain itu, regimen sekali sehari menyisakan jeda waktu (trough concentration drop < 1-2 mcg/mL) di mana sel epitel tubulus dapat mengeliminasi obat via eksositosis sebelum dosis berikutnya masuk."
    },
    {
      "id": "dq23",
      "category": "DIKI - Aminoglikosida & Sisplatin",
      "question": "Tn. S (50 th, BB 65 kg) penderita karsinoma nasofaring dijadwalkan menjalani siklus kemoterapi dengan Sisplatin dosis tinggi (75 mg/m² IV). Pasien memiliki SCr baseline 0.9 mg/dL. Dokter onkologi meminta protokol nefroproteksi standar farmasi untuk mencegah Acute Tubular Necrosis (ATN) akibat Sisplatin. Apa mekanisme utama masuknya Sisplatin ke sel tubulus ginjal dan protokol hidrasi nefroproteksi evidence-based yang wajib dijalankan?",
      "options": [
        {
          "label": "A",
          "text": "Sisplatin mengkristal di papila renalis; pencegahan baku adalah restriksi cairan ketat dan asidifikasi urin dengan amonium klorida",
          "correct": false
        },
        {
          "label": "B",
          "text": "Sisplatin mengikat reseptor beta-2 adrenergik di glomerulus; pencegahan baku adalah pemberian Propranolol dosis tinggi intravena",
          "correct": false
        },
        {
          "label": "C",
          "text": "Sisplatin diambil secara aktif ke dalam sel tubulus proksimal via Organic Cation Transporter 2 (OCT2) dan memicu stres oksidatif DNA mitokondria; pencegahan baku adalah hidrasi agresif Normal Saline 0.9% (1-2 Liter sebelum dan sesudah infus) disertai suplementasi Magnesium dan target diuresis > 100 mL/jam",
          "correct": true
        },
        {
          "label": "D",
          "text": "Sisplatin merusak podosit glomerulus secara autoimun; pencegahan baku adalah plasmaferesis profilaksis 2 jam sebelum kemoterapi",
          "correct": false
        }
      ],
      "explanation": "Sisplatin diekskresi terutama via filtrasi glomerulus dan sekresi tubulus aktif. Transporter kation organik basolateral OCT2 (Organic Cation Transporter 2) bertanggung jawab atas akumulasi masif Sisplatin di sel epitel tubulus proksimal renal. Di dalam sel, sisplatin menghasilkan ikatan silang DNA (cross-linking), disfungsi mitokondria, dan ledakan Reactive Oxygen Species (ROS). Protokol baku pencegahan nefrotoksisitas sisplatin: Hidrasi kristaloid salin isotonik masif (misal NaCl 0.9% 1000 mL sebelum kemoterapi dan 1000 mL setelahnya) untuk mempercepat transit obat dan menurunkan konsentrasi intraluminal tubulus, disertai suplementasi Magnesium (karena sisplatin memicu renal magnesium wasting hebat via kerusakan tubulus distal)."
    },
    {
      "id": "dq24",
      "category": "DIKI - Aminoglikosida & Amfoterisin B",
      "question": "Tn. H (43 th, pasien leukemia limfoblastik akut dengan neutropenia febril) mengalami infeksi jamur invasif Aspergillosis paru. Pasien diresepkan Amfoterisin B Deoksikolat IV. Dua hari pasca terapi, pasien mengeluh kelemahan otot ekstremitas dan kram hebat. Lab: SCr meningkat dari 0.8 menjadi 1.7 mg/dL, Kalium serum anjlok ke 2.6 mEq/L (hipokalemia berat), dan Magnesium serum 1.1 mg/dL (hipomagnesemia berat). Mengapa formulasi Amfoterisin B Deoksikolat memicu nefrotoksisitas tubuler ganda dan wasting elektrolit tersebut, serta apa alternatif formulasi yang jauh lebih aman?",
      "options": [
        {
          "label": "A",
          "text": "Amfoterisin B memicu nefrokalsinosis akut akibat deposisi kalsium oksalat di medula; alternatifnya adalah Amfoterisin inhalasi",
          "correct": false
        },
        {
          "label": "B",
          "text": "Amfoterisin B mengikat transporter glukosa SGLT2 memicu ketoasidosis euglikemik renal; alternatifnya adalah flukonazol oral dosis tunggal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Terjadi nefritis autoimun membranosa sekunder akibat lisis sel jamur masif; alternatifnya adalah nistatin suspensi oral",
          "correct": false
        },
        {
          "label": "D",
          "text": "Amfoterisin B berikatan dengan kolesterol membran sel mamalia di tubulus distal membentuk pori permeabilitas yang membocorkan ion K+ dan Mg2+ ke urin serta memicu vasokonstriksi arteriol aferen renalis berat; alternatif formulasi yang jauh lebih nefroprotektif adalah Liposomal Amphotericin B (L-AmB)",
          "correct": true
        }
      ],
      "explanation": "Amfoterisin B Deoksikolat memiliki afinitas utama pada ergosterol jamur, tetapi juga berikatan silang dengan kolesterol membran sel tubulus ginjal manusia. Pengikatan ini membentuk pori-pori transmembran yang meningkatkan permeabilitas membran tubulus distal, menyebabkan kebocoran masif kalium dan magnesium ke dalam urin (wasting electrolytes: hipokalemia dan hipomagnesemia refrakter). Selain itu, amfoterisin B memicu degranulasi sel makula densa dan vasokonstriksi tajam arteriol aferen. Liposomal Amphotericin B (L-AmB, cth: Ambisome) membungkus molekul obat dalam vesikel liposom lapis ganda lipid, mendistribusikan obat secara terarah ke jaringan retikuloendotelial dan situs infeksi jamur dengan penetrasi minimal ke sel epitel tubulus ginjal, menurunkan nefrotoksisitas secara dramatis (> 50-70%)."
    },
    {
      "id": "dq25",
      "category": "DIKI - Aminoglikosida & Vankomisin",
      "question": "Pasien sepsis berat di ICU menerima terapi empiris Vankomisin IV dan Piperasilin-Tazobaktam (Pip-Tazo). Pada hari ke-4 terapi, SCr pasien melonjak tajam dari 0.8 mg/dL menjadi 2.4 mg/dL (naik 3x lipat / AKI Stage 2). TDM Vankomisin menunjukkan AUC24/MIC terhitung 750 mcg*h/mL (target aman: 400-600) dengan kadar trough 22 mcg/mL. Mengapa kombinasi Vankomisin + Piperasilin-Tazobaktam dikenal memiliki sinergisme nefrotoksisitas tinggi dan tindakan stewardship apa yang direkomendasikan apoteker?",
      "options": [
        {
          "label": "A",
          "text": "Piperasilin mengkatalisis hidrolisis cincin glikopeptida vankomisin menjadi metabolit karsinogenik; tindakan: hentikan vankomisin permanen dan ganti dengan Gentamisin dosis tinggi",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kombinasi Vankomisin dan Piperasilin-Tazobaktam memiliki risiko sinergisme nefrotoksisitas hingga 3-4 kali lipat lebih tinggi dibanding Vankomisin + Sefepim/Meropenem; tindakan segera: de-eskalasi atau ganti Pip-Tazo ke Sefepim/Meropenem dan lakukan penyesuaian dosis Vankomisin berbasis Bayesian target AUC24/MIC 400-600",
          "correct": true
        },
        {
          "label": "C",
          "text": "Tazobaktam memblokade filtrasi glomerulus vankomisin di kapsula Bowman; tindakan: lakukan hemodialisis cito untuk membuang piperasilin",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kedua antibiotik tersebut membentuk garam tak larut di tubulus distal; tindakan: alkalisasi urin dengan natrium bikarbonat hingga pH > 8.5",
          "correct": false
        }
      ],
      "explanation": "Banyak studi klinis multisenter dan pedoman IDSA/ASHP 2020 mengonfirmasi bahwa kombinasi Vankomisin + Piperasilin-Tazobaktam (V + PT) secara konsisten melipatgandakan insidensi AKI (hingga 15-30% dibanding 5-10% pada kombinasi Vankomisin + Sefepim atau Vankomisin + Meropenem). Selain itu, kadar supraterapeutik Vankomisin (AUC > 650 atau trough > 20 mcg/mL) memicu stres oksidatif dan apoptosis sel tubulus proksimal. Rekomendasi Stewardship: (1) Sesuaikan dosis Vankomisin untuk mencapai target target AUC24/MIC 400-600 mcg*h/mL, dan (2) Ganti Piperasilin-Tazobaktam dengan agen antipseudomonas alternatif non-sinergis nefrotoksik seperti Sefepim atau Meropenem."
    },
    {
      "id": "dq26",
      "category": "DIKI - Stewardship & Asiklovir",
      "question": "Ny. R (62 th) dengan herpes zoster oftalmikus menerima terapi Asiklovir intravena dosis 10 mg/kgBB tiap 8 jam. Karena perawat terburu-buru, infus Asiklovir diberikan melalui bolus tetesan cepat selama 20 menit tanpa hidrasi cairan penyerta. Tiga jam kemudian, pasien mengeluh nyeri pinggang bilateral hebat (flank pain), mual, dan hematuria mikroskopik. Urinalisis menunjukkan kristal berbentuk jarum birefringen runcing (needle-shaped crystals) di dalam sedimen urin dan SCr melonjak dari 0.8 ke 2.1 mg/dL. Apa mekanisme patogenesis DIKI yang dialami Ny. R dan protokol pencegahan serta penanganan yang paling krusial?",
      "options": [
        {
          "label": "A",
          "text": "Kristaluria obstruktif intratubular (Obstructive Crystal Nephropathy) akibat kelarutan Asiklovir yang sangat rendah dalam urin pekat asam; dicegah dengan memberikan infus lambat minimal 1-2 jam dan hidrasi kristaloid intravena adekuat (Normal Saline) sebelum dan selama terapi untuk memelihara laju aliran urin tinggi",
          "correct": true
        },
        {
          "label": "B",
          "text": "Nefritis interstisial akut alergik akibat hipersensitivitas tipe 1; dicegah dengan pemberian difenhidramin injeksi sebelum bolus asiklovir",
          "correct": false
        },
        {
          "label": "C",
          "text": "Nekrosis kortikal difus akibat vasokonstriksi arteriol eferen permanen; dicegah dengan pemberian ACE-inhibitor sebelum infus",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sindrom lisis tumor spontan dengan kristalisasi kalsium fosfat; dicegah dengan pemberian kalsium glukonat infus kontinyu",
          "correct": false
        }
      ],
      "explanation": "Asiklovir memiliki kelarutan yang sangat rendah di dalam urin (hanya ~1.2-2.5 mg/mL pada pH 7.0 dan suhu 37 °C). Setelah filtrasi glomerulus, konsentrasi obat di tubulus distal dan duktus kolektivus meningkat pesat akibat reabsorpsi air. Pemberian bolus cepat (< 1 jam) menghasilkan lonjakan konsentrasi urin yang melampaui titik saturasi kelarutan, memicu presipitasi cepat kristal asiklovir berbentuk jarum di lumen tubulus ginjal, menyumbat aliran urin dan menyebabkan reaksi inflamasi interstisial serta nyeri pinggang akut. Protokol Baku: (1) Infus asiklovir HARUS diberikan perlahan minimal selama 1-2 jam, dan (2) Pasien WAJIB mendapatkan hidrasi cairan intravena yang adekuat (pre-hidrasi NaCl 0.9%) untuk menjamin output urin minimal 75-100 mL/jam."
    },
    {
      "id": "dq27",
      "category": "DIKI - Stewardship & HD-MTX",
      "question": "An. N (14 th, osteosarkoma) dijadwalkan menerima protokol kemoterapi Metotreksat Dosis Tinggi (HD-MTX 8 g/m² IV infus 4 jam). Apoteker onkologi memverifikasi protokol pre-medikasi dan monitoring yang mencakup hidrasi intravena, Natrium Bikarbonat, dan pemantauan pH urin setiap 4 jam. Mengapa alkalisasi urin dengan Natrium Bikarbonat menjadi pilar mutlak dalam protokol kemoterapi HD-MTX dan berapa target pH urin yang harus dicapai sebelum kemoterapi boleh dimulai?",
      "options": [
        {
          "label": "A",
          "text": "Bikarbonat menginaktivasi enzim dihidrofolat reduktase di sel kanker; target pH urin adalah < 5.5 (asam kuat)",
          "correct": false
        },
        {
          "label": "B",
          "text": "Bikarbonat diperlukan untuk mencegah absorbsi metotreksat ke sirkulasi enterotubular; target pH urin adalah 6.0 - 6.5",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kelarutan Metotreksat dan metabolit utamanya 7-OH-Metotreksat meningkat 5-8 kali lipat pada suasana basa; target pH urin adalah >= 7.0 (ideal 7.5 - 8.0) untuk mencegah presipitasi kristal intratubular yang dapat memicu gagal ginjal anurik akut",
          "correct": true
        },
        {
          "label": "D",
          "text": "Bikarbonat mengikat kalsium bebas agar tidak membentuk batu kalsium oksalat; target pH urin adalah 6.5 - 6.8",
          "correct": false
        }
      ],
      "explanation": "Metotreksat dan metabolit sitotoksiknya 7-hidroksimetotreksat (7-OH-MTX) bersifat asam lemah dengan pKa ~4.8 dan 5.5. Pada urin yang asam (pH 5.0 - 6.0), molekul berada dalam bentuk non-terionkan yang kelarutannya sangat buruk di air, sehingga mudah sekali mengkristal di tubulus renalis dan memicu obstruktif nefropati akut. Peningkatan pH urin menjadi >= 7.0 (ideal 7.5-8.0) melalui infus Natrium Bikarbonat mengubah molekul MTX menjadi bentuk terionkan yang memiliki kelarutan 5 hingga 8 kali lipat lebih tinggi. Kemoterapi HD-MTX TIDAK BOLEH dimulai sampai pH urin terbukti >= 7.0! Selain itu, ketersediaan Leucovorin rescue dan agen Glucarpidase (enzim pemecah MTX) disiapkan bila terjadi intoksikasi akibat klirens ginjal terganggu."
    },
    {
      "id": "dq28",
      "category": "DIKI - Stewardship & Kotrimoksazol",
      "question": "Tn. L (36 th, pasien HIV dengan Pneumocystis jirovecii pneumonia / PCP) menerima terapi Kotrimoksazol (Trimetoprim-Sulfametoksazol) IV dosis tinggi (Trimetoprim 15-20 mg/kgBB/hari terbagi tiap 6 jam). Pada hari ke-3, data lab menunjukkan Serum Kreatinin naik dari baseline 0.8 mg/dL menjadi 1.4 mg/dL. Namun, pemeriksaan Serum Cystatin-C pasien tetap normal sempurna (0.75 mg/L), tidak ada oliguria (urin 2.200 mL/24 jam), dan Kalium serum terukur 5.4 mEq/L. Bagaimana apoteker menganalisis fenomena peningkatan Serum Kreatinin pada Tn. L (Pseudo-AKI vs True DIKI) dan mekanisme farmakologis Trimetoprim yang mendasarinya?",
      "options": [
        {
          "label": "A",
          "text": "Merupakan True AKI nekrotik akibat komponen Sulfametoksazol yang menghancurkan membran glomerulus; terapi harus segera dihentikan dan diganti Amfoterisin B",
          "correct": false
        },
        {
          "label": "B",
          "text": "Merupakan Pseudo-AKI akibat interferensi kolorimetri analitis reaksi Jaffe di laboratorium oleh metabolit cincin pirimidin",
          "correct": false
        },
        {
          "label": "C",
          "text": "Merupakan True AKI akibat glomerulonefritis membranoproliferatif HIV; terapi kotrimoksazol harus dinaikkan dosisnya 2 kali lipat",
          "correct": false
        },
        {
          "label": "D",
          "text": "Merupakan fenomena Pseudo-AKI; Trimetoprim secara kompetitif menghambat transporter kation organik basolateral OCT2 / MATE1 di sel tubulus proksimal ginjal sehingga menurunkan sekresi tubular kreatinin tanpa menurunkan GFR sebenarnya (dikonfirmasi oleh Cystatin-C normal); Trimetoprim juga memblokade kanal natrium ENaC di tubulus distal memicu hiperkalemia",
          "correct": true
        }
      ],
      "explanation": "Sekitar 10-15% kreatinin serum dieliminasi via sekresi aktif tubulus proksimal melalui transporter kation organik OCT2 (Organic Cation Transporter 2) dan MATE1 (Multidrug and Toxin Extrusion 1). Trimetoprim adalah inhibitor kompetitif poten dari transporter OCT2/MATE1. Hambatan sekresi tubuler ini menyebabkan retensi kreatinin dalam plasma sehingga SCr naik 0.3 - 0.6 mg/dL tanpa adanya penurunan Laju Filtrasi Glomerulus (True GFR tetap normal, terbukti dari kadar Cystatin C yang tidak terpengaruh sekresi tubuler). Selain itu, struktur trimetoprim mirip dengan diuretik Amilorid, sehingga memblokade kanal epitel natrium (ENaC) di duktus koligens, menurunkan ekskresi kalium dan memicu hiperkalemia ringan-sedang. Pemahaman ini mencegah penghentian antibiotik penyelamat jiwa (kotrimoksazol pada PCP) secara keliru."
    },
    {
      "id": "dq29",
      "category": "DIKI - Stewardship & Manitol",
      "question": "Pasien cedera kepala berat dengan edema serebral di ICU menerima infus Manitol 20% secara berkala. Selama 3 hari, pasien telah menerima total kumulatif 350 gram Manitol. Pada hari ke-4, perawat melaporkan volume urin turun drastis (oliguria < 20 mL/jam) dan Serum Kreatinin melonjak dari 0.7 menjadi 2.8 mg/dL. Osmolalitas serum terukur 325 mOsm/kg dengan Osmolar Gap melonjak menjadi 28 mOsm/kg (> 10 mOsm/kg). Apa tipe cedera ginjal spesifik yang dialami pasien (Osmotic Nephropathy) dan batas ambang akumulasi Manitol yang memicunya?",
      "options": [
        {
          "label": "A",
          "text": "Kristaluria obstruktif mekanik; akibat pembentukan kristal manitol di pelvis renalis pada suhu tubuh normal",
          "correct": false
        },
        {
          "label": "B",
          "text": "Osmotic Nephropathy (Nefropati Osmotik); diakibatkan akumulasi zat terlarut hiperosmoler eksogen yang diendositosis ke sel epitel tubulus proksimal memicu vakuolisasi sitoplasma masif, pembengkakan seluler, dan oklusi lumen tubulus; risiko melonjak tajam bila dosis kumulatif Manitol > 200-300 gram atau Osmolar Gap > 10-15 mOsm/kg",
          "correct": true
        },
        {
          "label": "C",
          "text": "Nefritis interstisial autoimun akut; diakibatkan stimulasi kompleks imun antibodi anti-manitol terhadap membran basalis glomerulus",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sindrom deplesi volume prerenal murni; yang dapat diatasi cukup dengan menambah kecepatan infus manitol 20%",
          "correct": false
        }
      ],
      "explanation": "Nefropati Osmotik (Osmotic Nephropathy) terjadi saat konsentrasi zat hiperonkotik/hiperosmoler eksogen (seperti Manitol, dekstran, sukrosa dalam IVIG, atau zat kontras radiologi) mencapai kadar toksik dalam lumen tubulus. Sel-sel epitel tubulus proksimal menginternalisasi zat tersebut via pinositosis/endositosis. Akumulasi molekul osmotik di dalam lisosom dan vakuola sitoplasma menarik air secara masif, memicu pembengkakan seluler hebat (vacuolar swelling), nekrosis epitel, kolaps intraluminal, dan gagal ginjal anurik. Faktor risiko sentinel: Dosis kumulatif manitol > 200-300 gram dalam 24-48 jam atau Osmolar Gap serum > 10-15 mOsm/kg. Penanganan: Hentikan manitol segera; dialisis efektif mengeliminasi manitol dari sirkulasi."
    },
    {
      "id": "dq30",
      "category": "DIKI - Stewardship & KDIGO Sepsis",
      "question": "Tn. B (68 th, BB 70 kg) dirawat di ICU dengan syok sepsis akibat pneumonia nosokomial. Pasien telah menerima resusitasi cairan kristaloid 30 mL/kgBB dan mendapat vasopresor Norepinefrin untuk mempertahankan perfusi organ. Tim ICU menargetkan parameter hemodinamik dan mengawasi biomarker ginjal berdasarkan pedoman KDIGO AKI Bundles. Berapakah target Mean Arterial Pressure (MAP) hemodinamik ginjal yang harus dipertahankan pada syok sepsis dan kriteria KDIGO Stage 2 AKI yang harus diwaspadai?",
      "options": [
        {
          "label": "A",
          "text": "Target MAP minimal 65-70 mmHg untuk menjamin tekanan perfusi autoregulasi kapiler intraglomerular; Kriteria KDIGO Stage 2 terpenuhi bila terjadi kenaikan Serum Kreatinin 2.0 - 2.9 kali baseline ATAU produksi urin < 0.5 mL/kgBB/jam selama >= 12 jam",
          "correct": true
        },
        {
          "label": "B",
          "text": "Target MAP minimal 95-100 mmHg; Kriteria KDIGO Stage 2 adalah kenaikan SCr 1.2 kali baseline atau oliguria selama 2 jam",
          "correct": false
        },
        {
          "label": "C",
          "text": "Target MAP 45-50 mmHg untuk mencegah ruptur kapiler glomerulus; Kriteria KDIGO Stage 2 mensyaratkan inisiasi dialisis hemofiltrasi segera",
          "correct": false
        },
        {
          "label": "D",
          "text": "Target MAP tidak memiliki korelasi dengan perfusi ginjal; Kriteria KDIGO Stage 2 hanya dinilai berdasarkan sedimen proteinuria dipstick",
          "correct": false
        }
      ],
      "explanation": "Berdasarkan konsensus Surviving Sepsis Campaign dan KDIGO AKI Guidelines: 1. Target Hemodinamik: Autoregulasi aliran darah ginjal (Renal Blood Flow / RBF) dan tekanan kapiler intraglomerular sangat bergantung pada Mean Arterial Pressure (MAP). Pada kondisi syok sepsis, target MAP minimal adalah >= 65 mmHg (pada pasien geriatri dengan riwayat hipertensi kronis sering kali 65-70 mmHg) dengan agen vasopresor pilihan utama Norepinefrin. 2. Kriteria KDIGO AKI Stage 2: Kriteria SCr: Kenaikan SCr 2.0 s/d 2.9 kali dari nilai baseline; Kriteria Urin: Volume urin < 0.5 mL/kg/jam yang berlangsung selama minimal 12 jam berturut-turut. Penerapan KDIGO Care Bundle (optimasi volume & perfusi, stop seluruh nefrotoksin non-esensial, TDM antibiotik) terbukti menurunkan progresi AKI ke tahap gagal ginjal stadium 3 yang membutuhkan dialisis."
    }
  ],
  "quizQuestions": [
    {
      "id": "dq1",
      "category": "DILI - Kalkulasi & Pola",
      "question": "Tn. H (46 th, BB 68 kg) dirawat di bangsal penyakit dalam dengan keluhan urin berwarna seperti teh pekat, sklera dan kulit menguning tajam, serta gatal tak tertahankan (pruritus intens) sejak 4 hari lalu. Pasien baru saja menyelesaikan terapi Amoksisilin-Klavulanat 625 mg 3x sehari selama 10 hari untuk sinusitis maksilaris akut. Hasil laboratorium fungsi hati: ALT 110 U/L (ULN: 40 U/L), AST 95 U/L (ULN: 35 U/L), ALP 420 U/L (ULN: 115 U/L), GGT 310 U/L (ULN: 50 U/L), Bilirubin Total 4.8 mg/dL (Direk: 3.9 mg/dL). Berdasarkan kriteria konsensus ACG/EASL DILI, berapakah nilai Rasio R (R-value) pasien dan bagaimana klasifikasi pola cedera hepar serta mekanisme patologinya?",
      "options": [
        {
          "label": "A",
          "text": "R = 3.65 (Pola Campuran, 2 < R < 5); nekrosis hepatoseluler sentrilobular akibat akumulasi metabolit reaktif amoksisilin di sitosol",
          "correct": false
        },
        {
          "label": "B",
          "text": "R = 0.75 (Pola Kolestatik murni, R <= 2); diakibatkan reaksi imun-alergi terhadap komponen klavulanat yang memicu cedera kolangiosit duktus biliaris dan gangguan transporter empedu",
          "correct": true
        },
        {
          "label": "C",
          "text": "R = 0.26 (Pola Kolestatik murni); akibat inhibisi langsung enzim CYP2C19 oleh amoksisilin tanpa keterlibatan klavulanat",
          "correct": false
        },
        {
          "label": "D",
          "text": "R = 2.75 (Pola Hepatoseluler, R >= 5); akibat deplesi glutation hepatosit oleh asam klavulanat",
          "correct": false
        }
      ],
      "explanation": "Formula R = (ALT / ULN_ALT) / (ALP / ULN_ALP) = (110 / 40) / (420 / 115) = 2.75 / 3.65 = 0.753. Nilai R <= 2 mengonfirmasi Pola Kolestatik (Cholestatic DILI). Amoksisilin-klavulanat adalah penyebab paling lazim dari DILI kolestatik idiosinkratik, biasanya bermanifestasi setelah terapi selesai, di mana komponen klavulanat memicu reaksi imunologik terhadap epitel kanalikuli/duktus biliaris."
    },
    {
      "id": "dq2",
      "category": "DILI - Kalkulasi & Hy's Law",
      "question": "Ny. S (34 th, BB 48 kg) menjalani pengobatan TB paru fase intensif minggu ke-4 dengan paduan FDC 4KDT (Rifampisin, Isoniazid, Pirazinamid, Etambutol). Pasien datang ke IGD dengan mual hebat, muntah 4x/hari, nafsu makan hilang, lemas ekstrem, dan sklera ikterik bilateral. Hasil lab serial: ALT 360 U/L (ULN: 35 U/L), AST 410 U/L (ULN: 35 U/L), Bilirubin Total 5.4 mg/dL (ULN: 1.0 mg/dL), ALP 145 U/L (ULN: 120 U/L), Albumin 3.4 g/dL, INR 1.35. Bagaimana evaluasi kriteria Hy's Law (Hukum Hy) pada Ny. S dan implikasi klinis terhadap risiko keselamatan pasien?",
      "options": [
        {
          "label": "A",
          "text": "Tidak memenuhi Hy's Law karena ALP pasien meningkat melampaui batas normal (145 U/L), sehingga diklasifikasikan sebagai kolestasis infeksius biasa yang cukup diobservasi tanpa menyetop OAT",
          "correct": false
        },
        {
          "label": "B",
          "text": "Terpenuhi kriteria Hy's Law, namun karena INR pasien masih < 1.5, terapi OAT tetap dilanjutkan dengan dosis separuh sambil memberikan hepatoprotektor kurkumin",
          "correct": false
        },
        {
          "label": "C",
          "text": "Terpenuhi kriteria Hy's Law (ALT/AST >= 3x ULN, Total Bilirubin >= 2x ULN, tanpa kolestasis awal ALP < 2x ULN); menandakan kerusakan hepatoseluler parah dengan risiko mortalitas gagal hati akut (Acute Liver Failure) 10-50%, sehingga seluruh OAT harus segera distop",
          "correct": true
        },
        {
          "label": "D",
          "text": "Tidak memenuhi Hy's Law karena kriteria mensyaratkan ALT harus meningkat minimal 15x ULN dan bilirubin total minimal 10 mg/dL sebelum dipertimbangkan penghentian terapi",
          "correct": false
        }
      ],
      "explanation": "Trias Hy's Law: (1) ALT atau AST >= 3x ULN (pasien ALT 10.3x ULN), (2) Total Bilirubin >= 2x ULN (pasien 5.4x ULN), (3) Tidak ada kenaikan awal ALP >= 2x ULN (ALP pasien 145/120 = 1.2x ULN). Terpenuhinya Hy's Law adalah indikator prognostik cedera hepatoseluler kritis dengan angka mortalitas mencapai 10-50% akibat acute liver failure jika obat pemicu tidak dihentikan sesegera mungkin."
    },
    {
      "id": "dq3",
      "category": "DILI - Kalkulasi & Pola",
      "question": "Tn. F (52 th, BB 75 kg) dengan riwayat dislipidemia dan sindrom koroner kronis rutin mengonsumsi Atorvastatin 40 mg dan Asetosal 80 mg malam hari. Dua minggu lalu ia mendapat resep Azitromisin 500 mg/hari selama 5 hari untuk bronkitis akut. Saat kontrol rutin, pasien mengeluh mialgia ringan dan rasa begah di perut kanan atas. Data laboratorium: ALT 210 U/L (ULN: 40 U/L), AST 180 U/L (ULN: 35 U/L), ALP 195 U/L (ULN: 110 U/L), Bilirubin Total 1.6 mg/dL (ULN: 1.0 mg/dL), CK normal. Hitunglah nilai rasio R (R-ratio) Tn. F dan tentukan pola DILI yang dialami pasien serta interpretasi keterlibatan obatnya!",
      "options": [
        {
          "label": "A",
          "text": "R = 2.96 (Pola Campuran / Mixed, 2 < R < 5); mencerminkan kombinasi cedera nekrosis hepatoseluler dan kolestasis kanalikular, yang lazim dipicu oleh interaksi farmakokinetik atau toksisitas makrolida bersama statin",
          "correct": true
        },
        {
          "label": "B",
          "text": "R = 5.25 (Pola Hepatoseluler murni, R >= 5); kerusakan membran hepatosit eksklusif oleh asetosal",
          "correct": false
        },
        {
          "label": "C",
          "text": "R = 1.08 (Pola Kolestatik murni, R <= 2); stasis empedu selektif oleh metabolit hidrofilik atorvastatin",
          "correct": false
        },
        {
          "label": "D",
          "text": "R = 0.34 (Pola Iskemik Akut); diakibatkan penurunan perfusi hepar sesaat akibat hipoksemia bronkitis",
          "correct": false
        }
      ],
      "explanation": "R = (ALT / ULN_ALT) / (ALP / ULN_ALP) = (210 / 40) / (195 / 110) = 5.25 / 1.77 = 2.96. Pola Mixed (Campuran) berada pada rentang 2 < R < 5. Azitromisin dan makrolida lain dapat memicu DILI kolestatik/campuran dan berinteraksi menghambat transporter efluks empedu hepatobilier."
    },
    {
      "id": "dq4",
      "category": "DILI - Kalkulasi & Nomogram",
      "question": "Seorang wanita muda (21 th, BB 50 kg) dibawa ke IGD oleh keluarganya 6 jam setelah meminum 32 tablet Parasetamol 500 mg (total 16 gram) dalam upaya melukai diri (intoksikasi akut). Pasien mengeluh mual, muntah 2 kali, dan nyeri epigastrium ringan. Hasil pemeriksaan fisik: kesadaran kompos mentis, TD 115/75 mmHg, HR 88x/menit. Hasil lab jam ke-6 pascapaparan: Parasetamol serum 185 mcg/mL, ALT 38 U/L, AST 32 U/L, Bilirubin 0.8 mg/dL, Kreatinin 0.7 mg/dL. Berdasarkan evaluasi Rumack-Matthew Nomogram dan mekanisme toksikodinamik Parasetamol, keputusan klinis apa yang paling tepat diambil apoteker dan tim medis?",
      "options": [
        {
          "label": "A",
          "text": "Tunda pemberian NAC dan observasi selama 24 jam karena enzim ALT dan AST pasien masih dalam batas normal (38 dan 32 U/L), menandakan hepatosit belum mengalami kerusakan",
          "correct": false
        },
        {
          "label": "B",
          "text": "Berikan karbon aktif (activated charcoal) oral saja karena sudah lewat 4 jam sehingga NAC tidak lagi memiliki efektivitas terapeutik dalam menetralisir metabolit NAPQI",
          "correct": false
        },
        {
          "label": "C",
          "text": "Lakukan hemodialisis darurat untuk mengeliminasi parasetamol karena dosis 16 gram bersifat letal absolut yang tidak dapat diatasi oleh terapi antidotum farmakologis",
          "correct": false
        },
        {
          "label": "D",
          "text": "Segera inisiasi protokol N-Asetilsistein (NAC) intravena lengkap tanpa menunggu kenaikan ALT/AST, karena kadar serum 185 mcg/mL pada jam ke-6 melampaui garis penanganan Rumack-Matthew (garis 150 mcg/mL pada jam ke-4 atau ~100 mcg/mL pada jam ke-6) menandakan deplesi glutation masif yang akan memicu nekrosis sentrilobular fatal jika tertunda",
          "correct": true
        }
      ],
      "explanation": "Pada Rumack-Matthew Nomogram, garis terapi dimulai pada 150 mcg/mL pada jam ke-4 dan meluruh dengan t1/2 ~4 jam (pada jam ke-6 batas bahaya sekitar 106 mcg/mL). Kadar 185 mcg/mL pada jam ke-6 jelas berada di atas garis toksisitas tinggi (probable hepatic toxicity line). Pada tahap awal (0-24 jam), ALT/AST memang sering masih normal sementara GSH sedang terkuras habis. NAC harus diberikan secepat mungkin (idealnya < 8 jam) untuk menyediakan sistein dan gugus sulfhidril (-SH) guna menyintesis ulang glutation dan mengikat langsung NAPQI sebelum terjadi ikatan kovalen permanen dengan makromolekul hepatosit."
    },
    {
      "id": "dq5",
      "category": "DILI - Kalkulasi & RUCAM",
      "question": "Tn. D (58 th) dirawat dengan kecurigaan DILI setelah 3 minggu memulai terapi Karbamazepin 200 mg 2x/hari untuk neuralgia trigeminal. Tim farmasi klinis melakukan penelusuran kausalitas menggunakan Skala RUCAM (Roussel Uclaf Causality Assessment Method). Didapatkan: Time to onset 22 hari (+2), perbaikan ALT > 50% dalam 8 hari pasca-stop obat (+3), faktor risiko usia > 55 tahun (+1), penggunaan obat hepatotoksik lain disingkirkan (+2), etiologi non-obat (Hepatitis A/B/C/E, CMV, EBV, autoimun, USG empedu normal) terbukti negatif sempurna (+2), dan informasi produk mencantumkan hepatotoksisitas (+2). Total skor RUCAM = +12. Bagaimana interpretasi kategori probabilitas kausalitas berdasarkan skor RUCAM tersebut dan rekomendasi farmasis?",
      "options": [
        {
          "label": "A",
          "text": "Kategori 'Definite' (Pasti); mensyaratkan skor minimal +15 dan wajib dilakukan rechallenge ulang dengan dosis subklinis untuk konfirmasi hukum pembuktian",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kategori 'Highly Probable' (Sangat Mungkin, skor >= 9); Karbamazepin ditetapkan sebagai agen kausatif definitif, harus dihentikan permanen, dimasukkan dalam daftar alergi rekam medis, dan dilarang keras melakukan rechallenge",
          "correct": true
        },
        {
          "label": "C",
          "text": "Kategori 'Probable' (Mungkin, skor 6-8); karbamazepin dapat dilanjutkan dengan penurunan dosis 50% disertai pemantauan LFT mingguan",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kategori 'Possible' (Bisa jadi, skor 3-5); membutuhkan biopsi hati sebelum obat dapat dihentikan secara resmi",
          "correct": false
        }
      ],
      "explanation": "Interpretasi Skor RUCAM: >= 9 = Highly Probable, 6-8 = Probable, 3-5 = Possible, 1-2 = Unlikely, <= 0 = Excluded. Skor +12 masuk dalam kategori Highly Probable (Sangat Mungkin/Hampir Pasti). Pada DILI imunogenik/idiosinkratik berat oleh antikonvulsan aromatik (Karbamazepin, Fenitoin), obat harus dihentikan permanen dan dilarang keras melakukan rechallenge karena risiko nekrosis masif atau sindrom DRESS berulang yang fatal."
    },
    {
      "id": "dq6",
      "category": "DILI - Mekanisme & Toksisitas",
      "question": "An. B (7 th, BB 22 kg) dengan riwayat epilepsi umum refrakter diobati dengan Asam Valproat sirup 250 mg 3x/hari. Setelah 8 minggu terapi, anak tampak letargi progresif, muntah berulang, dan mengalami disorientasi tanpa tanda fokal neurologis baru. Hasil lab: ALT 165 U/L (ULN: 40 U/L), AST 140 U/L, Bilirubin Total 1.2 mg/dL, Amonia plasma melonjak tinggi 182 mcmol/L (Normal: 15-45 mcmol/L), Glukosa darah 58 mg/dL, Asidosis laktat ringan. USG abdomen menunjukkan hepatomegali dengan infiltrasi lemak difus (mikrovesikular steatosis). Apa mekanisme molekuler di balik toksisitas organ pada An. B dan intervensi antidotum spesifik lini pertama yang harus segera direkomendasikan?",
      "options": [
        {
          "label": "A",
          "text": "Valproat menginduksi CYP2E1 menghasilkan metabolit elektrofilik yang merusak duktus biliaris; tatalaksana spesifiknya adalah N-Asetilsistein (NAC) dosis tinggi oral",
          "correct": false
        },
        {
          "label": "B",
          "text": "Valproat memicu hemolisis intravaskular masif yang membebani hepar; tatalaksana spesifiknya adalah transfusi washed red cells dan kelasi besi deferoksamin",
          "correct": false
        },
        {
          "label": "C",
          "text": "Valproat membentuk metabolit 4-pentenoic acid dan valproyl-CoA yang menghambat enzim beta-oksidasi asam lemak di mitokondria serta menguras cadangan L-Karnitin bebas intraseluler, menghambat siklus urea; tatalaksana spesifiknya adalah infus L-Karnitin intravena (L-Carnitine loading 100 mg/kgBB)",
          "correct": true
        },
        {
          "label": "D",
          "text": "Terjadi reaksi hapten autoimun mediated oleh kompleks HLA-B*1502; tatalaksana spesifiknya adalah deksametason pulse dose 20 mg IV tanpa perlu menghentikan valproat",
          "correct": false
        }
      ],
      "explanation": "Asam Valproat menyebabkan toksisitas mitokondrial (mitochondrial DILI). Metabolitnya valproil-CoA mengikat karnitin bebas dan menghambat carnitine palmitoyltransferase 1 (CPT-1) serta enzim beta-oksidasi, sehingga asam lemak bebas tidak dapat masuk ke matriks mitokondria untuk siklus Krebs (memicu mikrovesikular steatosis & deplesi ATP). Penurunan asetil-CoA menurunkan sintesis N-asetilglutamat (kofaktor esensial carbamoyl phosphate synthetase I dalam siklus urea), memicu hiperamonemia sekunder dan ensefalopati hepatik. Terapi spesifik lini pertama adalah suplementasi L-Karnitin (L-Carnitine) IV untuk memulihkan kapasitas transport asam lemak mitokondria dan klirens amonia."
    },
    {
      "id": "dq7",
      "category": "DILI - Mekanisme & DRESS",
      "question": "Tn. G (49 th) dengan riwayat gout artritis kronis dan nefropati asam urat memulai terapi Alopurinol 300 mg 1x/hari 3 minggu yang lalu. Pasien dilarikan ke IGD dengan demam tinggi (39.2 °C), ruam eritematosa makulopapular konfluen yang meluas ke 60% permukaan tubuh, edema wajah periorbital berat, dan limfadenopati servikal bilateral. Hasil lab: Leukositosis 16.500/mcL dengan Eosinofilia absolut 2.100/mcL (13%), ALT 480 U/L (ULN: 40 U/L), AST 390 U/L, SCr meningkat dari 1.1 ke 2.4 mg/dL. Pasien diketahui beretnis Han/Asia Timur dan belum pernah tes farmakogenomik HLA. Apa diagnosis sindrom toksisitas multiorgan yang dialami Tn. G, varian alel genetik yang paling kuat berkorelasi, dan tatalaksana farmakologis utamanya?",
      "options": [
        {
          "label": "A",
          "text": "Sindrom DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms) terkait alel risiko HLA-B*5801; penanganan utama adalah penghentian segera Alopurinol dan pemberian Kortikosteroid sistemik (Metilprednisolon IV 1-2 mg/kg/hari) dengan tapering bertahap",
          "correct": true
        },
        {
          "label": "B",
          "text": "Sindrom Reye akibat metabolit asam urat; terkait mutasi CYP2C9; penanganan utama adalah pemberian infus glukosa 10% dan manitol untuk dekompresi intrakranial",
          "correct": false
        },
        {
          "label": "C",
          "text": "Intrinsic Hepatotoxicity murni akibat akumulasi Oksipurinol dosis tinggi; tidak berhubungan dengan varian HLA; penanganan cukup dengan hidrasi salin tanpa kortikosteroid",
          "correct": false
        },
        {
          "label": "D",
          "text": "Nekrolisis Epidermal Toksik (TEN) terisolasi; terkait varian HLA-B*1502; terapi utama adalah antibiotik profilaksis spektrum luas dan melanjutkan alopurinol dengan dosis rendah 50 mg",
          "correct": false
        }
      ],
      "explanation": "Kasus ini adalah gambaran klasik DRESS Syndrome (Drug Reaction with Eosinophilia and Systemic Symptoms) yang diinduksi Alopurinol (Allopurinol Hypersensitivity Syndrome / AHS). Onset 2-8 minggu, trias demam, ruam difus, eosinofilia (> 10%), dan kerusakan organ internal ganda (DILI berat dan nefritis interstitial akut). Alopurinol memiliki korelasi farmakogenomik yang sangat kuat dengan alel HLA-B*5801 (terutama populasi Asia). Tatalaksana pilar: STOP alopurinol segera dan berikan kortikosteroid sistemik (Metilprednisolon/Prednison) untuk menekan respons imun hiperaktif sel T sitotoksik."
    },
    {
      "id": "dq8",
      "category": "DILI - Mekanisme & Alkohol",
      "question": "Tn. M (42 th, riwayat konsumsi alkohol kronis 40 gram/hari selama 10 tahun) mengalami demam dan nyeri gigi berat. Pasien meminum Parasetamol 1000 mg tiap 6 jam selama 3 hari berturut-turut (total 4 gram/hari, masih dalam batas dosis harian maksimum leaflet). Di hari ke-4, pasien mengeluh nyeri kuadran kanan atas hebat, mual, dan muntah. Hasil lab menunjukkan lonjakan spektakuler: ALT 4.800 U/L (ULN: 40 U/L), AST 6.200 U/L, Bilirubin Total 3.2 mg/dL, INR 2.1. Mengapa dosis terapeutik lazim Parasetamol (4 gram/hari) dapat memicu cedera hepatoseluler fulminan masif pada pasien peminum alkohol kronis?",
      "options": [
        {
          "label": "A",
          "text": "Alkohol berkompetisi secara langsung pada transporter sekresi empedu kanalikular (MDR3) sehingga asam empedu berbalik membakar membran hepatosit",
          "correct": false
        },
        {
          "label": "B",
          "text": "Alkohol menginaktivasi enzim glukuronil transferase (UGT) secara permanen melalui fosforilasi reseptor nukleus PPAR-alfa",
          "correct": false
        },
        {
          "label": "C",
          "text": "Parasetamol bereaksi langsung dengan molekul etanol di sirkulasi darah portal membentuk senyawa karsinogenik etil-asetaminofen yang menghancurkan mikrotubulus sel Kupffer",
          "correct": false
        },
        {
          "label": "D",
          "text": "Alkohol kronis menginduksi enzim CYP2E1 secara berlebih sekaligus menguras cadangan Glutation (GSH) hepar dan memicu malnutrisi, sehingga proporsi parasetamol yang dialihkan menjadi metabolit reaktif NAPQI melonjak drastis melebihi ambang batas kapasitas detoksifikasi endogen",
          "correct": true
        }
      ],
      "explanation": "Pada alkoholisme kronis, etanol bertindak sebagai inducer kuat isoenzim sitokrom P450 CYP2E1. Pada saat yang sama, konsumsi alkohol jangka panjang dan defisiensi nutrisi menyebabkan deplesi cadangan glutation (GSH) intraseluler hepar hingga < 30% dari normal. Akibatnya, pada dosis terapeutik 4 g/hari (bahkan kadang 2-3 g/hari), pembentukan NAPQI jauh lebih banyak dan cepat menghabiskan sisa GSH, memicu nekrosis hepatosit sentrilobular akut masif dengan ALT/AST khas > 3.000 - 5.000 U/L."
    },
    {
      "id": "dq9",
      "category": "DILI - Mekanisme & Kolestatik",
      "question": "Pasien wanita (55 th) pascatransplantasi ginjal menerima terapi imunosupresi Siklosporin dan mikofenolat mofetil. Untuk infeksi mikoplasma atipikal, dokter menambahkan Klaritromisin 500 mg 2x/hari. Satu minggu kemudian, pasien mengalami ikterus klinis dengan sklera kuning mencolok dan gatal hebat di telapak tangan/kaki. Hasil lab: ALT 68 U/L (ULN: 40 U/L), AST 55 U/L (ULN: 35 U/L), ALP 510 U/L (ULN: 120 U/L), GGT 440 U/L (ULN: 45 U/L), Bilirubin Total 6.8 mg/dL (Bilirubin Direk 5.5 mg/dL). USG saluran empedu tidak menemukan batu maupun dilatasi duktus koledokus. Apa mekanisme molekuler DILI kolestatik yang dialami pasien terkait interaksi kedua obat tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Klaritromisin merusak membran endotel sinusoid hepar menyebabkan sinusoidal obstruction syndrome (SOS) dan peluruhan sel endotel",
          "correct": false
        },
        {
          "label": "B",
          "text": "Siklosporin mengendap di lumen duktus sistikus membentuk pseudolitiasis kristalina yang menyumbat aliran empedu mekanik",
          "correct": false
        },
        {
          "label": "C",
          "text": "Siklosporin dan metabolit makrolida secara langsung menghambat Bile Salt Export Pump (BSEP / ABCB11) di membran kanalikular hepatosit, diperparah oleh inhibisi metabolisme CYP3A4 oleh klaritromisin yang melipatgandakan kadar siklosporin, menyebabkan akumulasi asam empedu hidrofobik sitotoksik intraseluler",
          "correct": true
        },
        {
          "label": "D",
          "text": "Terjadi destruksi autoimun selektif terhadap sel-sel asinar pankreas yang memicu defisiensi lipase dan refluks bilier retrograde",
          "correct": false
        }
      ],
      "explanation": "Bile Salt Export Pump (BSEP, dikode oleh gen ABCB11) adalah transporter aktif ATP-dependent utama untuk mengekspresikan asam empedu dari hepatosit ke kanalikuli biliaris. Siklosporin adalah inhibitor poten BSEP. Klaritromisin adalah inhibitor kuat CYP3A4 dan P-gp, yang meningkatkan konsentrasi plasma dan jaringan Siklosporin. Penumpukan asam empedu hidrofobik (chenodeoxycholic acid, deoxycholic acid) di dalam sitosol hepatosit bersifat deterjen sitotoksik dan memicu apoptosis sel serta kolestasis intrahepatik berat dengan kenaikan tajam ALP/GGT/Bilirubin direk."
    },
    {
      "id": "dq10",
      "category": "DILI - Mekanisme & Toksikologi",
      "question": "Dalam audit farmakovigilans rumah sakit, apoteker membandingkan dua kasus DILI: Kasus 1 adalah seorang pria yang terpapar karbon tetraklorida (CCl4) di bengkel industri dengan nekrosis hepar yang terjadi 24 jam kemudian secara seragam; Kasus 2 adalah seorang wanita muda yang mengalami hepatitis akut 6 minggu setelah mengonsumsi Isoniazid profilaksis pada dosis lazim 300 mg/hari. Manakah pernyataan komparatif yang PALING TEPAT mengenai prinsip toksikologi Intrinsic DILI (Kasus 1) versus Idiosyncratic DILI (Kasus 2)?",
      "options": [
        {
          "label": "A",
          "text": "Intrinsic DILI hanya dipicu oleh obat herbal/suplemen tanpa metabolit reaktif, sedangkan Idiosyncratic DILI hanya terjadi pada pasien lanjut usia dengan defisiensi albumin",
          "correct": false
        },
        {
          "label": "B",
          "text": "Intrinsic DILI bersifat dose-dependent, memiliki onset cepat yang dapat diprediksi pada model hewan, dan insidensi tinggi jika ambang dosis terlampaui; sedangkan Idiosyncratic DILI bersifat dose-independent pada rentang terapeutik, tidak dapat diprediksi pada uji praklinis hewan, memiliki masa laten bervariasi, dan sangat dipengaruhi oleh kerentanan imunogenetik penjamu",
          "correct": true
        },
        {
          "label": "C",
          "text": "Intrinsic DILI selalu disertai manifestasi immuno-alergik seperti ruam dan eosinofilia, sedangkan Idiosyncratic DILI murni merupakan toksisitas fisikokimia langsung pada mitokondria",
          "correct": false
        },
        {
          "label": "D",
          "text": "Intrinsic DILI dapat dicegah dengan tes skrining alel HLA, sedangkan Idiosyncratic DILI dapat sepenuhnya dihindari hanya dengan menurunkan dosis menjadi sepertiga",
          "correct": false
        }
      ],
      "explanation": "Karakteristik esensial: Intrinsic DILI (direct hepatotoxins, cth: parasetamol overdosis, CCl4) terjadi pada siapa saja jika dosis ambang terlampaui, dose-dependent, onset jam-hari, dapat direproduksi pada hewan coba. Idiosyncratic DILI (cth: Isoniazid, Amoksisilin-klavulanat) terjadi pada minoritas kecil individu yang rentan (1:1000 hingga 1:100.000), tidak bergantung langsung pada dosis lazim, onset 1 minggu hingga berbulan-bulan, tidak dapat direproduksi pada hewan standar, dan dimediasi oleh faktor imunogenik (HLA) atau polimorfisme metabolik."
    },
    {
      "id": "dq11",
      "category": "DILI - OAT & Urutan Toksisitas",
      "question": "Tn. K (38 th, TB paru BTA positif) baru saja dirawat karena DILI hepatoseluler berat (ALT 420 U/L, Bilirubin 3.8 mg/dL) pada minggu ke-3 fase intensif OAT lini pertama (RHZE). Sesuai panduan ATS/IDSA/WHO, seluruh OAT segera dihentikan. Dokter spesialis paru berdiskusi dengan apoteker bangsal mengenai urutan tingkat hepatotoksisitas intrinsik dari ketiga obat hepatotoksik dalam paduan tersebut untuk menyusun strategi reintroduksi di kemudian hari. Manakah urutan tingkat potensi hepatotoksisitas intrinsik dari yang PALING TINGGI ke yang PALING RENDAH di antara ketiga OAT lini pertama tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Pirazinamid (Z) > Isoniazid (H) > Rifampisin (R)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Rifampisin (R) > Isoniazid (H) > Pirazinamid (Z)",
          "correct": false
        },
        {
          "label": "C",
          "text": "Isoniazid (H) > Pirazinamid (Z) > Rifampisin (R)",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pirazinamid (Z) > Rifampisin (R) > Isoniazid (H)",
          "correct": false
        }
      ],
      "explanation": "Berdasarkan bukti klinis dan pedoman tatalaksana DILI TB internasional (ATS/CDC/IDSA/WHO): Pirazinamid (Z) adalah obat yang paling hepatotoksik di antara OAT lini pertama, sering memicu nekrosis berkepanjangan dan sulit diprediksi. Isoniazid (H) menempati urutan kedua (memicu hepatotoksisitas via metabolit asetilhidrazin atau hidrazin). Rifampisin (R) memiliki potensi hepatotoksisitas intrinsik paling rendah (walaupun dapat memicu hiperbilirubinemia transien akibat kompetisi transporter empedu OATP1B1 dan induksi enzim)."
    },
    {
      "id": "dq12",
      "category": "DILI - OAT & Aturan Penghentian",
      "question": "Apoteker melakukan pemantauan mingguan pada 4 orang pasien rawat jalan TB paru yang sedang menerima terapi 4KDT (FDC). Data klinis dan lab minggu ke-4 adalah sebagai berikut:\n• Pasien 1: Tanpa keluhan (asimtomatik), ALT 160 U/L (ULN: 40 U/L), Bilirubin Total 0.9 mg/dL.\n• Pasien 2: Mengeluh mual ringan pasca minum obat, ALT 110 U/L (ULN: 40 U/L), Bilirubin Total 1.1 mg/dL.\n• Pasien 3: Asimtomatik, ALT 240 U/L (ULN: 40 U/L), Bilirubin Total 1.2 mg/dL.\n• Pasien 4: Mual dan anoreksia berat, sklera ikterik, ALT 130 U/L (ULN: 40 U/L), Bilirubin Total 2.6 mg/dL.\nBerdasarkan kriteria baku penghentian OAT (Rule of Discontinuation ATS/WHO/Kemenkes), pasien manakah yang WAJIB SEGERA DIHENTIKAN paduan OAT-nya?",
      "options": [
        {
          "label": "A",
          "text": "Hanya Pasien 4 saja, karena Pasien 3 tidak menunjukkan keluhan subjektif apa pun",
          "correct": false
        },
        {
          "label": "B",
          "text": "Pasien 1 dan Pasien 2, karena kenaikan enzim apa pun di atas 2x ULN wajib langsung disetop",
          "correct": false
        },
        {
          "label": "C",
          "text": "Seluruh pasien (Pasien 1, 2, 3, dan 4) harus langsung distop OAT-nya tanpa kecuali",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pasien 3 (ALT >= 5x ULN meskipun asimtomatik) dan Pasien 4 (Bilirubin Total > 2 mg/dL dengan keluhan ikterus dan mual klinis)",
          "correct": true
        }
      ],
      "explanation": "Aturan Baku Penghentian OAT (Stop Rule): OAT harus dihentikan jika: (1) Enzim transaminase (ALT/AST) >= 5x ULN (meskipun pasien asimtomatik tanpa keluhan - memenuhi kriteria Pasien 3: ALT 240/40 = 6x ULN); ATAU (2) ALT/AST >= 3x ULN DISERTAI gejala klinis hepatotoksisitas (mual, muntah, anoreksia, ikterus); ATAU (3) Bilirubin Total >= 2.0 mg/dL (memenuhi kriteria Pasien 4: Bilirubin 2.6 mg/dL + ikterus). Pasien 1 (ALT 4x ULN asimtomatik) dan Pasien 2 (ALT < 3x ULN) masih dapat dipantau ketat secara berkala tanpa penghentian instan."
    },
    {
      "id": "dq13",
      "category": "DILI - OAT & Rechallenge",
      "question": "Tn. R (45 th) mengalami DILI saat fase intensif TB paru sehingga seluruh OAT distop. Setelah 2 minggu pemantauan, gejala klinis resolusi sempurna dan hasil evaluasi LFT menunjukkan: ALT 32 U/L (ULN: 40 U/L), AST 28 U/L, Bilirubin Total 0.8 mg/dL (fungsi hati kembali normal sempurna). Dokter spesialis paru meminta apoteker memimpin protokol reintroduksi obat secara bertahap (Rechallenge Protocol). Bagaimana urutan reintroduksi OAT lini pertama yang paling aman dan evidence-based menurut konsensus internasional?",
      "options": [
        {
          "label": "A",
          "text": "Mulai dengan Pirazinamid (Z) dosis penuh terlebih dahulu karena Z memiliki daya bakterisidal intraseluler terkuat untuk mensterilkan lesi kaseosa",
          "correct": false
        },
        {
          "label": "B",
          "text": "Mulai dengan Rifampisin (R) dosis penuh -> evaluasi LFT setelah 3-7 hari; jika aman, tambahkan Isoniazid (H) dosis penuh -> evaluasi LFT setelah 3-7 hari; jangan reintroduksi Pirazinamid (Z) jika episode DILI awal berat, atau tambahkan Z paling akhir hanya jika sangat esensial",
          "correct": true
        },
        {
          "label": "C",
          "text": "Berikan kembali seluruh obat (RHZE) sekaligus dalam dosis 1/4, lalu naikkan bertahap tiap 2 hari secara serentak",
          "correct": false
        },
        {
          "label": "D",
          "text": "Mulai dengan Isoniazid (H) selama 14 hari, kemudian langsung tambahkan Pirazinamid (Z) tanpa memerlukan Rifampisin",
          "correct": false
        }
      ],
      "explanation": "Prinsip Rechallenge OAT: Obat dengan risiko hepatotoksisitas terendah namun efikasi sterilisasi tinggi diberikan pertama kali. Langkah 1: Berikan Rifampisin (R) (hepatotoksisitas terendah). Pantau klinis dan LFT 3-7 hari. Langkah 2: Bila LFT stabil, tambahkan Isoniazid (H). Pantau LFT 3-7 hari. Langkah 3: Pirazinamid (Z) adalah penyebab DILI paling sering dan paling toksik; bila DILI awal berat atau memenuhi Hy's Law, Pirazinamid TIDAK BOLEH direintroduksi lagi dan dieliminasi permanen dari rejimen!"
    },
    {
      "id": "dq14",
      "category": "DILI - OAT & Paduan Modifikasi",
      "question": "Pada kasus Tn. R di atas, setelah reintroduksi bertahap, Rifampisin dan Isoniazid dapat ditoleransi dengan sangat baik (LFT stabil normal). Namun, karena riwayat DILI awalnya disertai ikterus berat dan ALT > 10x ULN, tim klinis memutuskan untuk TIDAK memberikan kembali Pirazinamid (Z dihentikan permanen). Pasien adalah kasus TB paru sensitif obat (TB SO) kasus baru. Bagaimana modifikasi durasi dan paduan terapi TB yang tepat setelah Pirazinamid dieliminasi permanen dari rejimen fase intensif?",
      "options": [
        {
          "label": "A",
          "text": "Durasi terapi tetap 6 bulan standar (2 RH-E / 4 RH) tanpa perlu penambahan waktu karena Etambutol mampu menggantikan efek sterilisasi Pirazinamid secara penuh",
          "correct": false
        },
        {
          "label": "B",
          "text": "Paduan diganti menjadi Levofloksasin dan Amikasin injeksi selama 18 bulan seperti protokol TB Resisten Obat (TB-MDR)",
          "correct": false
        },
        {
          "label": "C",
          "text": "Rejimen diubah menjadi paduan 2 RH-E (fase intensif dengan Rifampisin, Isoniazid, Etambutol selama 2 bulan) dilanjutkan 7 RH (fase lanjutan Rifampisin dan Isoniazid selama 7 bulan), sehingga total durasi terapi diperpanjang menjadi 9 bulan",
          "correct": true
        },
        {
          "label": "D",
          "text": "Pasien dinyatakan sembuh setelah menyelesaikan 2 bulan RH-E karena bakterisidal Rifampisin sudah cukup membersihkan kuman di sputum",
          "correct": false
        }
      ],
      "explanation": "Peran utama Pirazinamid (Z) adalah sterilisasi bakteri TB semi-dormant yang berada di lingkungan asam intraseluler makrofag pada 2 bulan pertama, yang memungkinkan pemendekan terapi TB dari 9 bulan menjadi 6 bulan. Jika Z tidak dapat digunakan atau dihentikan akibat hepatotoksisitas, durasi pengobatan TB sensitif obat HARUS diperpanjang menjadi total 9 bulan (2 bulan fase intensif Rifampisin + Isoniazid + Etambutol, diikuti 7 bulan fase lanjutan Rifampisin + Isoniazid: 2RH-E / 7RH) untuk mencegah kekambuhan (relaps)."
    },
    {
      "id": "dq15",
      "category": "DILI - OAT & Terapi Kolestatik",
      "question": "Ny. V (56 th) mengalami DILI tipe kolestatik pasca terapi antibiotik dengan keluhan pruritus intrikabel (gatal hebat yang mengganggu tidur) dan peningkatan ALP 4.5x ULN serta Bilirubin Total 4.0 mg/dL. Apoteker merekomendasikan penambahan terapi Asam Ursodeoksikolat (UDCA) 15 mg/kgBB/hari dan Kolestiramin sachet oral. Apa rasionalitas farmakoterapi kombinasi kedua agen tersebut dan bagaimana instruksi waktu konsumsi yang krusial diedukasikan kepada pasien?",
      "options": [
        {
          "label": "A",
          "text": "UDCA bekerja menggantikan asam empedu endogen hidrofobik yang toksik dengan asam empedu hidrofilik non-toksik serta merangsang sekresi kanalikular; sedangkan Kolestiramin adalah resin pengikat asam empedu di usus untuk membuangnya via feses; Kolestiramin HARUS diminum dengan jeda minimal 2-4 jam sebelum atau sesudah UDCA agar tidak mengikat dan menginaktivasi UDCA",
          "correct": true
        },
        {
          "label": "B",
          "text": "UDCA memblokade sintesis kolesterol di mitokondria sedangkan Kolestiramin meningkatkan absorbsi empedu; keduanya harus diminum bersamaan pada saat makan suap pertama",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kolestiramin adalah antihistamin sedatif untuk meredakan gatal sedangkan UDCA adalah kortikosteroid lokal pelindung usus; tidak ada interaksi di antara keduanya",
          "correct": false
        },
        {
          "label": "D",
          "text": "UDCA dan Kolestiramin bekerja membentuk khelat permanen di dalam darah untuk menarik bilirubin keluar melalui filtrasi glomerulus ginjal",
          "correct": false
        }
      ],
      "explanation": "UDCA (Ursodeoxycholic acid) adalah asam empedu hidrofilik alami yang memiliki efek sitoprotektif, imunomodulator, dan koleretis (merangsang ekskresi empedu kanalikular via aktivasi transporter BSEP dan MRP2), menurunkan toksisitas retensi asam empedu hidrofobik. Kolestiramin adalah resin penukar anionik yang mengikat asam empedu di lumen usus halus, memutus sirkulasi enterohepatik, dan meningkatkan eliminasi asam empedu via feses sehingga meredakan pruritus kolestatik. Namun, karena kolestiramin mengikat senyawa asam non-spesifik, ia dapat mengikat UDCA jika diminum bersamaan! Pasien harus diedukasi untuk memberi jeda minum obat minimal 2-4 jam."
    },
    {
      "id": "dq16",
      "category": "DIKI - Hemodinamik & Triple Whammy",
      "question": "Tn. T (70 th, riwayat hipertensi dan gagal jantung NYHA II) rutin mengonsumsi Kaptopril 25 mg 3x/hari dan Furosemid 40 mg 1x/hari. Karena nyeri sendi lutut akut (osteoartritis), pasien membeli sendiri Ketorolak tablet 10 mg dan meminumnya 3x sehari selama 5 hari berturut-turut. Pasien datang ke IGD dengan kondisi lemas, pusing melayang saat berdiri, volume urin sangat sedikit (< 300 mL dalam 24 jam). TD 95/60 mmHg, HR 98x/menit. Hasil lab: SCr melonjak drastis dari baseline 0.9 mg/dL menjadi 3.2 mg/dL, BUN 68 mg/dL, Kalium serum 5.8 mEq/L. Fenomena hemodinamik nefrologi apa yang terjadi pada Tn. T (The Triple Whammy) dan bagaimana mekanisme presipitasinya?",
      "options": [
        {
          "label": "A",
          "text": "NSAID dan Diuretik bereaksi membentuk presipitat kristal intratubular yang menyumbat duktus kolektivus ginjal secara mekanis",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kaptopril meningkatkan klirens furosemid di tubulus proksimal sehingga terjadi retensi air masif di parenkim ginjal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Ketorolak merangsang pelepasan aldosteron adrenal secara masif yang menyebabkan nekrosis korteks renalis bilateral",
          "correct": false
        },
        {
          "label": "D",
          "text": "Deplesi volume intravaskular oleh Diuretik memicu vasokonstriksi kompensatorik -> NSAID menghambat prostaglandin renal sehingga menghilangkan vasodilatasi protektif arteriol aferen -> ACE-Inhibitor menghambat Angiotensin II sehingga menghilangkan vasokonstriksi arteriol eferen -> tekanan filtrasi intraglomerular kolaps total memicu AKI hemodinamik akut",
          "correct": true
        }
      ],
      "explanation": "Fenomena 'Triple Whammy' adalah kombinasi mematikan antara Diuretik + ACEI/ARB + NSAID: 1. Diuretik menurunkan volume cairan ekstraseluler dan aliran darah ginjal. 2. Ginjal berkompensasi memproduksi Prostaglandin (PGE2/PGI2) untuk vasodilatasi arteriol aferen agar darah tetap masuk ke glomerulus. NSAID memblokade COX, memicu vasokonstriksi berat arteriol aferen (pintu masuk tertutup!). 3. Ginjal juga mengaktifkan Angiotensin II untuk vasokonstriksi arteriol eferen guna mempertahankan tekanan hidrostatik kapiler glomerulus. ACEI memblokade Angiotensin II, memicu dilatasi arteriol eferen (pintu keluar bocor lebar!). Akibatnya: Tekanan filtrasi kapiler intraglomerular anjlok drastis ke titik nol, menyebabkan gagal ginjal akut (AKI) prerenal fungsional berat disertai hiperkalemia."
    },
    {
      "id": "dq17",
      "category": "DIKI - Hemodinamik & SGLT2i",
      "question": "Ny. E (58 th, DM Tipe 2 dan Hipertensi) memulai terapi tambahan SGLT2 Inhibitor Dapagliflozin 10 mg 1x/hari di samping Metformin dan Kandesartan. Saat evaluasi laboratorium pada minggu ke-2, dokter menemukan eGFR pasien turun dari 75 mL/menit/1.73m² (baseline) menjadi 64 mL/menit/1.73m² (penurunan ~14%), dan Serum Kreatinin naik dari 0.9 mg/dL menjadi 1.05 mg/dL. Pasien tidak memiliki keluhan, TD 125/78 mmHg, dan tidak ada proteinuria baru. Dokter berencana menghentikan Dapagliflozin karena khawatir obat merusak ginjal. Bagaimana penjelasan farmakoterapi klinis apoteker terkait fenomena 'eGFR Dip' tersebut dan rekomendasi yang paling tepat?",
      "options": [
        {
          "label": "A",
          "text": "Penurunan eGFR menandakan nekrosis tubulus akut toksik stadium 1; Dapagliflozin harus segera dihentikan permanen dan diganti Glimepirid",
          "correct": false
        },
        {
          "label": "B",
          "text": "Fenomena 'eGFR dip' (penurunan eGFR 10-30% pada 2-4 minggu awal) adalah efek hemodinamik fisiologis reversibel akibat pengaktifan Tubuloglomerular Feedback (TGF) yang merestorasi vasokonstriksi arteriol aferen dan menurunkan hiperfiltrasi intraglomerular; terapi HARUS TETAP DILANJUTKAN karena terbukti nefroprotektif jangka panjang",
          "correct": true
        },
        {
          "label": "C",
          "text": "Fenomena ini disebabkan oleh glukosuria yang memicu nefritis interstisial akut; dosis Dapagliflozin harus dinaikkan menjadi 20 mg untuk memulihkan fungsi filtrasi",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pasien mengalami dehidrasi osmotik masif intraseluler; kandesartan harus dinaikkan dosisnya 2 kali lipat untuk mendilatasi arteriol eferen lebih lanjut",
          "correct": false
        }
      ],
      "explanation": "Mekanisme Tubuloglomerular Feedback (TGF) oleh SGLT2 Inhibitor: Pada diabetes, reabsorpsi glukosa dan natrium di tubulus proksimal meningkat via SGLT2, sehingga pengiriman Na+ ke macula densa berkurang. Macula densa menangkap sinyal keliru seolah-olah perfusi ginjal rendah, memicu vasodilatasi arteriol aferen patologis (hiperfiltrasi intraglomerular diabetik yang merusak nefron). SGLT2i menghambat reabsorpsi Na+ di proksimal -> Na+ yang sampai ke macula densa meningkat -> Adenosin dilepaskan -> vasokonstriksi arteriol aferen dinormalkan kembali -> tekanan intraglomerular turun -> GFR turun sesaat 10-30% ('initial dip'). Berbagai uji klinis besar (DAPA-CKD, EMPA-KIDNEY) membuktikan eGFR dip ini reversibel dan justru memperlambat laju penurunan fungsi ginjal jangka panjang secara dramatis. Penghentian hanya dipertimbangkan bila penurunan eGFR > 30% atau ada deplesi volume berat."
    },
    {
      "id": "dq18",
      "category": "DIKI - Hemodinamik & CNI",
      "question": "Tn. P (62 th) pascatransplantasi ginjal alogenik 2 bulan lalu menerima terapi imunosupresi Takrolimus oral (target trough level 8-10 ng/mL). Saat kontrol, kadar palung Takrolimus darah terukur 15.2 ng/mL (supraterapeutik). Pasien mengeluh sakit kepala dan TD meningkat menjadi 155/95 mmHg. Serum Kreatinin naik dari baseline 1.2 mg/dL menjadi 1.9 mg/dL tanpa proteinuria maupun demam. Biopsi tidak menunjukkan tanda rejeksi akut seluler. Apa mekanisme hemodinamik nefrotoksisitas akut Calcineurin Inhibitor (CNI) pada Tn. P dan strategi farmakologis apa yang terbukti efektif memulihkannya?",
      "options": [
        {
          "label": "A",
          "text": "Takrolimus mengkristal di tubulus distal membentuk batu silikat; tatalaksananya adalah hidrasi salin masif dan asetazolamid",
          "correct": false
        },
        {
          "label": "B",
          "text": "Takrolimus memblokade reseptor aldosteron di tubulus distal memicu pembuangan natrium berlebih; tatalaksananya adalah fludrokortison oral",
          "correct": false
        },
        {
          "label": "C",
          "text": "Takrolimus memicu vasokonstriksi poten pada arteriol aferen renalis melalui stimulasi pelepasan Endotelin-1, Tromboksan A2, dan penurunan sintesis Nitric Oxide (NO); tatalaksananya adalah menurunkan dosis Takrolimus dan menambahkan CCB golongan Dihidropiridin (Amlodipin/Nifedipin) yang mendilatasi arteriol aferen secara selektif",
          "correct": true
        },
        {
          "label": "D",
          "text": "Terjadi nefropati osmotik akibat eksipien kapsul takrolimus; tatalaksananya adalah penggantian ke Siklosporin dosis tinggi",
          "correct": false
        }
      ],
      "explanation": "Nefrotoksisitas akut Calcineurin Inhibitor (Takrolimus dan Siklosporin) bersifat hemodinamik fungsional: CNI meningkatkan tonus simpatis renal, merangsang pelepasan vasokonstriktor poten Endotelin-1 dan Tromboksan, serta menghambat vasodilator prostasiklin dan NO, menghasilkan spasme/vasokonstriksi tajam pada arteriol aferen glomerulus. Hal ini menurunkan aliran darah ginjal (RBF) dan laju filtrasi glomerulus (GFR) serta memicu hipertensi sistemik. Antagonis kalsium (CCB) golongan Dihidropiridin (cth: Amlodipin) bekerja memblokade influks Ca2+ pada kanal tipe L di otot polos arteriol aferen, membalikkan vasokonstriksi CNI, meningkatkan perfusi renal, sekaligus mengatasi hipertensi."
    },
    {
      "id": "dq19",
      "category": "DIKI - Hemodinamik & Fraksi Ekskresi",
      "question": "Tn. J (65 th, BB 60 kg) dirawat di bangsal penyakit dalam dengan oliguria (urin 350 mL/24 jam) pasca diare akut 3 hari dan konsumsi Natrium Diklofenak 50 mg 3x/hari. Lab: SCr 2.8 mg/dL (baseline 0.9 mg/dL), BUN 64 mg/dL (rasio BUN/SCr = 22.8), Natrium urin terukur 12 mEq/L, Osmolalitas urin 580 mOsm/kg. Apoteker menghitung Fractional Excretion of Sodium (FE_Na) dan mendapatkan nilai 0.6%. Bagaimana interpretasi nilai FE_Na dan rasio BUN/SCr pada Tn. J dalam membedakan etiologi AKI Prerenal Azotemia fungsional versus Acute Tubular Necrosis (ATN) intrinsik?",
      "options": [
        {
          "label": "A",
          "text": "FE_Na < 1% dan rasio BUN/SCr > 20 menandakan AKI Prerenal Azotemia fungsional dengan tubulus ginjal yang masih intak dan berfungsi baik mereabsorpsi natrium dan air secara maksimal sebagai kompensasi hipoperfusi; kondisi ini reversibel dengan hidrasi cairan isotonik dan penghentian NSAID",
          "correct": true
        },
        {
          "label": "B",
          "text": "FE_Na < 1% mengonfirmasi terjadinya Acute Tubular Necrosis (ATN) nekrotik dengan destruksi epitel tubulus proksimal yang membutuhkan dialisis segera",
          "correct": false
        },
        {
          "label": "C",
          "text": "Rasio BUN/SCr > 20 mengindikasikan adanya perdarahan saluran cerna bawah masif tanpa korelasi dengan fungsi perfusi ginjal",
          "correct": false
        },
        {
          "label": "D",
          "text": "Nilai FE_Na < 1% menunjukkan nefropati obstruktif post-renal akibat hipertrofi prostat jinak",
          "correct": false
        }
      ],
      "explanation": "Parameter diferensiasi AKI Prerenal vs ATN Intrinsik: Pada AKI Prerenal (Azotemia Fungsional / Hipoperfusi): Arsitektur tubulus masih utuh dan merespons stimulus aldosteron/RAAS untuk menahan Na+ dan air sekuat tenaga -> Natrium urin rendah (< 20 mEq/L), FE_Na < 1% (bahkan < 0.5%), Osmolalitas urin pekat (> 500 mOsm/kg), dan reabsorpsi urea di tubulus proksimal meningkat tajam sehingga rasio BUN/SCr > 20:1. Pada ATN Intrinsik: Sel epitel tubulus telah nekrosis dan kehilangan kemampuan reabsorpsi (tubular paralysis) -> Na+ bocor ke urin (Na urin > 40 mEq/L), FE_Na > 2%, Osmolalitas urin encer (< 350 mOsm/kg, isostenurik), dan rasio BUN/SCr < 15:1."
    },
    {
      "id": "dq20",
      "category": "DIKI - Hemodinamik & Toleransi ACEI",
      "question": "Ny. A (66 th, riwayat DM Tipe 2 dan albuminuria) baru saja memulai terapi Ramipril 5 mg 1x/hari. Pada kontrol hari ke-10, hasil pemeriksaan lab menunjukkan Serum Kreatinin meningkat dari 1.3 mg/dL (baseline) menjadi 1.6 mg/dL (kenaikan ~23%), Kalium serum 4.7 mEq/L (baseline 4.4 mEq/L), TD 130/80 mmHg, dan pasien merasa bugar tanpa keluhan. Berdasarkan konsensus KDIGO dan pedoman farmakoterapi ginjal, apakah tindakan yang paling tepat terkait penggunaan Ramipril pada Ny. A?",
      "options": [
        {
          "label": "A",
          "text": "Segera hentikan Ramipril karena setiap kenaikan Serum Kreatinin pasca-ACEI menandakan alergi nefritis interstisial akut yang mengancam jiwa",
          "correct": false
        },
        {
          "label": "B",
          "text": "Turunkan dosis Ramipril menjadi 1.25 mg dan berikan suplementasi kalium klorida oral untuk menstabilkan membran sel ginjal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Ganti Ramipril dengan NSAID dosis rendah untuk memicu vasokonstriksi arteriol aferen penyeimbang",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pertahankan terapi Ramipril dan teruskan pemantauan berkala, karena kenaikan Serum Kreatinin hingga 30% dari baseline dalam 2 minggu pertama masih dalam batas toleransi hemodinamik yang diharapkan dan terbukti nefroprotektif jangka panjang selama kalium serum stabil (< 5.5 mEq/L)",
          "correct": true
        }
      ],
      "explanation": "Konsensus KDIGO menetapkan aturan praktis penting: Inisiasi ACE-Inhibitor atau ARB secara fisiologis meredakan tekanan intraglomerular via vasodilatasi arteriol eferen, yang menyebabkan sedikit penurunan GFR. Kenaikan Serum Kreatinin hingga 30% di atas nilai baseline (pada pasien ini: 1.3 -> 1.69 mg/dL adalah batas 30%) dapat diterima dan ditoleransi (permissive hypercreatininemia), asalkan kadar Kalium serum tidak melebihi 5.5 mEq/L dan tidak ada tanda stenosis arteri renalis bilateral. Menghentikan ACEI secara prematur pada kondisi ini akan menghilangkan proteksi kardiorenal jangka panjang pasien."
    },
    {
      "id": "dq21",
      "category": "DIKI - Aminoglikosida & Struktur",
      "question": "Tn. W (54 th) dirawat di ICU dengan bakteremia Pseudomonas aeruginosa dan mendapat terapi kombinasi Gentamisin IV 5 mg/kgBB sekali sehari bersama Meropenem. Apoteker klinis menjelaskan kepada dokter muda mengenai dasar fisiologis mengapa Gentamisin terakumulasi secara masif dan selektif di sel epitel tubulus proksimal ginjal. Bagaimana hubungan struktur kimia, muatan molekul, dan mekanisme transport intraseluler aminoglikosida yang mendasari nefrotoksisitas tubulernya?",
      "options": [
        {
          "label": "A",
          "text": "Gentamisin adalah senyawa nonpolar sangat lipofil yang berdifusi pasif menembus membran glomerulus dan mengkristal di ruang Bowman",
          "correct": false
        },
        {
          "label": "B",
          "text": "Gentamisin adalah polikation bermuatan positif pada pH fisiologis yang berikatan elektrostatik kuat dengan fosfolipid membran anionik bermuatan negatif di brush-border tubulus proksimal, kemudian diinternalisasi via endositosis termediasi reseptor Megalin-Kubilin dan berakumulasi di lisosom hingga memicu ruptur dan apoptosis sel",
          "correct": true
        },
        {
          "label": "C",
          "text": "Gentamisin bermuatan negatif kuat sehingga menolak albumin plasma dan langsung difiltrasi aktif oleh pompa P-glikoprotein ke dalam mitokondria sel duktus pengumpul",
          "correct": false
        },
        {
          "label": "D",
          "text": "Gentamisin mengikat reseptor eritropoietin di sel interstisial hepar memicu deplesi oksigen di medula ginjal",
          "correct": false
        }
      ],
      "explanation": "Struktur Aminoglikosida kaya gugus amino (-NH2) yang terprotonasi menjadi kation bermuatan positif (+). Membran mikrovili sel epitel tubulus proksimal (brush border) kaya akan fosfolipid asam (fosfatidilinositol) yang bermuatan negatif (-). Interaksi elektrostatik ini mengikat aminoglikosida ke reseptor endositik Megalin dan Kubilin. Setelah diendositosis ke dalam vesikel, aminoglikosida ditransfer ke lisosom, menghambat fosfolipase (memicu phospholipidosis lisosomal). Ketika kapasitas lisosom jenuh, membran lisosom ruptur melepaskan enzim hidrolitik dan aminoglikosida konsentrasi tinggi ke sitosol, memicu disfungsi mitokondria, pembentukan ROS, dan nekrosis tubulus akut (ATN)."
    },
    {
      "id": "dq22",
      "category": "DIKI - Aminoglikosida & Dosis Sekali Sehari",
      "question": "Ny. C (48 th, BB 60 kg, CrCl 75 mL/menit) membutuhkan terapi Amikasin untuk pielonefritis komplikasi. Tim klinis mempertimbangkan dua rejimen: Rejimen Konvensional (Dosis terbagi: 5 mg/kg tiap 8 jam) vs Rejimen Extended-Interval Dosing (Dosis tinggi sekali sehari: 15 mg/kg tiap 24 jam). Berdasarkan konsep Farmakokinetik/Farmakodinamik (PK/PD) dan toksikologi saturasi renal, mengapa strategi Extended-Interval Dosing (sekali sehari) terbukti LEBIH SUPERIOR dalam efikasi bakterisidal sekaligus LEBIH RENDAH risiko nefrotoksisitasnya?",
      "options": [
        {
          "label": "A",
          "text": "Aminoglikosida bersifat concentration-dependent killing (target Cmax/MIC > 8-10) dengan Post-Antibiotic Effect (PAE) panjang; uptake aminoglikosida ke sel tubulus ginjal via reseptor megalin bersifat saturable (dapat jenuh), sehingga dosis tunggal tinggi membatasi ambilan tubular dan menyediakan periode konsentrasi lembah (trough < 1 mcg/mL) yang panjang bagi sel tubulus untuk membersihkan akumulasi obat",
          "correct": true
        },
        {
          "label": "B",
          "text": "Pemberian sekali sehari menurunkan klirens ginjal sehingga obat menetap di pembuluh darah perifer tanpa pernah mencapai sel-sel ginjal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Aminoglikosida bersifat time-dependent killing (T > MIC), dan dosis sekali sehari menurunkan ikatan protein plasma sehingga obat lebih cepat diekskresi via empedu",
          "correct": false
        },
        {
          "label": "D",
          "text": "Dosis sekali sehari mengubah struktur kimia amikasin menjadi metabolit asam yang tidak dapat dikenali oleh bakteri gram negatif",
          "correct": false
        }
      ],
      "explanation": "Dua prinsip ilmiah utama: 1. Efikasi Bakterisidal: Aminoglikosida membunuh bakteri secara konsentrasi-dependen. Rasio Cmax/MIC puncak optimal adalah 8-10x untuk mencegah resistensi adaptif dan memaksimalkan Post-Antibiotic Effect (PAE). Dosis tinggi sekali sehari menghasilkan Cmax yang sangat tinggi. 2. Toksikologi Ginjal: Ambilan aminoglikosida ke dalam sel tubulus ginjal melalui endositosis Megalin/Kubilin bersifat saturable (memiliki kapasitas batas kejenuhan ambilan). Begitu transporter jenuh, sisa obat dalam urin diekskresi tanpa diserap. Sebaliknya, pemberian dosis terbagi sering (tiap 8 jam) menjaga kadar plasma konstan di atas ambang saturasi sepanjang hari sehingga terjadi akumulasi kumulatif maksimal di lisosom tubulus. Selain itu, regimen sekali sehari menyisakan jeda waktu (trough concentration drop < 1-2 mcg/mL) di mana sel epitel tubulus dapat mengeliminasi obat via eksositosis sebelum dosis berikutnya masuk."
    },
    {
      "id": "dq23",
      "category": "DIKI - Aminoglikosida & Sisplatin",
      "question": "Tn. S (50 th, BB 65 kg) penderita karsinoma nasofaring dijadwalkan menjalani siklus kemoterapi dengan Sisplatin dosis tinggi (75 mg/m² IV). Pasien memiliki SCr baseline 0.9 mg/dL. Dokter onkologi meminta protokol nefroproteksi standar farmasi untuk mencegah Acute Tubular Necrosis (ATN) akibat Sisplatin. Apa mekanisme utama masuknya Sisplatin ke sel tubulus ginjal dan protokol hidrasi nefroproteksi evidence-based yang wajib dijalankan?",
      "options": [
        {
          "label": "A",
          "text": "Sisplatin mengkristal di papila renalis; pencegahan baku adalah restriksi cairan ketat dan asidifikasi urin dengan amonium klorida",
          "correct": false
        },
        {
          "label": "B",
          "text": "Sisplatin mengikat reseptor beta-2 adrenergik di glomerulus; pencegahan baku adalah pemberian Propranolol dosis tinggi intravena",
          "correct": false
        },
        {
          "label": "C",
          "text": "Sisplatin diambil secara aktif ke dalam sel tubulus proksimal via Organic Cation Transporter 2 (OCT2) dan memicu stres oksidatif DNA mitokondria; pencegahan baku adalah hidrasi agresif Normal Saline 0.9% (1-2 Liter sebelum dan sesudah infus) disertai suplementasi Magnesium dan target diuresis > 100 mL/jam",
          "correct": true
        },
        {
          "label": "D",
          "text": "Sisplatin merusak podosit glomerulus secara autoimun; pencegahan baku adalah plasmaferesis profilaksis 2 jam sebelum kemoterapi",
          "correct": false
        }
      ],
      "explanation": "Sisplatin diekskresi terutama via filtrasi glomerulus dan sekresi tubulus aktif. Transporter kation organik basolateral OCT2 (Organic Cation Transporter 2) bertanggung jawab atas akumulasi masif Sisplatin di sel epitel tubulus proksimal renal. Di dalam sel, sisplatin menghasilkan ikatan silang DNA (cross-linking), disfungsi mitokondria, dan ledakan Reactive Oxygen Species (ROS). Protokol baku pencegahan nefrotoksisitas sisplatin: Hidrasi kristaloid salin isotonik masif (misal NaCl 0.9% 1000 mL sebelum kemoterapi dan 1000 mL setelahnya) untuk mempercepat transit obat dan menurunkan konsentrasi intraluminal tubulus, disertai suplementasi Magnesium (karena sisplatin memicu renal magnesium wasting hebat via kerusakan tubulus distal)."
    },
    {
      "id": "dq24",
      "category": "DIKI - Aminoglikosida & Amfoterisin B",
      "question": "Tn. H (43 th, pasien leukemia limfoblastik akut dengan neutropenia febril) mengalami infeksi jamur invasif Aspergillosis paru. Pasien diresepkan Amfoterisin B Deoksikolat IV. Dua hari pasca terapi, pasien mengeluh kelemahan otot ekstremitas dan kram hebat. Lab: SCr meningkat dari 0.8 menjadi 1.7 mg/dL, Kalium serum anjlok ke 2.6 mEq/L (hipokalemia berat), dan Magnesium serum 1.1 mg/dL (hipomagnesemia berat). Mengapa formulasi Amfoterisin B Deoksikolat memicu nefrotoksisitas tubuler ganda dan wasting elektrolit tersebut, serta apa alternatif formulasi yang jauh lebih aman?",
      "options": [
        {
          "label": "A",
          "text": "Amfoterisin B memicu nefrokalsinosis akut akibat deposisi kalsium oksalat di medula; alternatifnya adalah Amfoterisin inhalasi",
          "correct": false
        },
        {
          "label": "B",
          "text": "Amfoterisin B mengikat transporter glukosa SGLT2 memicu ketoasidosis euglikemik renal; alternatifnya adalah flukonazol oral dosis tunggal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Terjadi nefritis autoimun membranosa sekunder akibat lisis sel jamur masif; alternatifnya adalah nistatin suspensi oral",
          "correct": false
        },
        {
          "label": "D",
          "text": "Amfoterisin B berikatan dengan kolesterol membran sel mamalia di tubulus distal membentuk pori permeabilitas yang membocorkan ion K+ dan Mg2+ ke urin serta memicu vasokonstriksi arteriol aferen renalis berat; alternatif formulasi yang jauh lebih nefroprotektif adalah Liposomal Amphotericin B (L-AmB)",
          "correct": true
        }
      ],
      "explanation": "Amfoterisin B Deoksikolat memiliki afinitas utama pada ergosterol jamur, tetapi juga berikatan silang dengan kolesterol membran sel tubulus ginjal manusia. Pengikatan ini membentuk pori-pori transmembran yang meningkatkan permeabilitas membran tubulus distal, menyebabkan kebocoran masif kalium dan magnesium ke dalam urin (wasting electrolytes: hipokalemia dan hipomagnesemia refrakter). Selain itu, amfoterisin B memicu degranulasi sel makula densa dan vasokonstriksi tajam arteriol aferen. Liposomal Amphotericin B (L-AmB, cth: Ambisome) membungkus molekul obat dalam vesikel liposom lapis ganda lipid, mendistribusikan obat secara terarah ke jaringan retikuloendotelial dan situs infeksi jamur dengan penetrasi minimal ke sel epitel tubulus ginjal, menurunkan nefrotoksisitas secara dramatis (> 50-70%)."
    },
    {
      "id": "dq25",
      "category": "DIKI - Aminoglikosida & Vankomisin",
      "question": "Pasien sepsis berat di ICU menerima terapi empiris Vankomisin IV dan Piperasilin-Tazobaktam (Pip-Tazo). Pada hari ke-4 terapi, SCr pasien melonjak tajam dari 0.8 mg/dL menjadi 2.4 mg/dL (naik 3x lipat / AKI Stage 2). TDM Vankomisin menunjukkan AUC24/MIC terhitung 750 mcg*h/mL (target aman: 400-600) dengan kadar trough 22 mcg/mL. Mengapa kombinasi Vankomisin + Piperasilin-Tazobaktam dikenal memiliki sinergisme nefrotoksisitas tinggi dan tindakan stewardship apa yang direkomendasikan apoteker?",
      "options": [
        {
          "label": "A",
          "text": "Piperasilin mengkatalisis hidrolisis cincin glikopeptida vankomisin menjadi metabolit karsinogenik; tindakan: hentikan vankomisin permanen dan ganti dengan Gentamisin dosis tinggi",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kombinasi Vankomisin dan Piperasilin-Tazobaktam memiliki risiko sinergisme nefrotoksisitas hingga 3-4 kali lipat lebih tinggi dibanding Vankomisin + Sefepim/Meropenem; tindakan segera: de-eskalasi atau ganti Pip-Tazo ke Sefepim/Meropenem dan lakukan penyesuaian dosis Vankomisin berbasis Bayesian target AUC24/MIC 400-600",
          "correct": true
        },
        {
          "label": "C",
          "text": "Tazobaktam memblokade filtrasi glomerulus vankomisin di kapsula Bowman; tindakan: lakukan hemodialisis cito untuk membuang piperasilin",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kedua antibiotik tersebut membentuk garam tak larut di tubulus distal; tindakan: alkalisasi urin dengan natrium bikarbonat hingga pH > 8.5",
          "correct": false
        }
      ],
      "explanation": "Banyak studi klinis multisenter dan pedoman IDSA/ASHP 2020 mengonfirmasi bahwa kombinasi Vankomisin + Piperasilin-Tazobaktam (V + PT) secara konsisten melipatgandakan insidensi AKI (hingga 15-30% dibanding 5-10% pada kombinasi Vankomisin + Sefepim atau Vankomisin + Meropenem). Selain itu, kadar supraterapeutik Vankomisin (AUC > 650 atau trough > 20 mcg/mL) memicu stres oksidatif dan apoptosis sel tubulus proksimal. Rekomendasi Stewardship: (1) Sesuaikan dosis Vankomisin untuk mencapai target target AUC24/MIC 400-600 mcg*h/mL, dan (2) Ganti Piperasilin-Tazobaktam dengan agen antipseudomonas alternatif non-sinergis nefrotoksik seperti Sefepim atau Meropenem."
    },
    {
      "id": "dq26",
      "category": "DIKI - Stewardship & Asiklovir",
      "question": "Ny. R (62 th) dengan herpes zoster oftalmikus menerima terapi Asiklovir intravena dosis 10 mg/kgBB tiap 8 jam. Karena perawat terburu-buru, infus Asiklovir diberikan melalui bolus tetesan cepat selama 20 menit tanpa hidrasi cairan penyerta. Tiga jam kemudian, pasien mengeluh nyeri pinggang bilateral hebat (flank pain), mual, dan hematuria mikroskopik. Urinalisis menunjukkan kristal berbentuk jarum birefringen runcing (needle-shaped crystals) di dalam sedimen urin dan SCr melonjak dari 0.8 ke 2.1 mg/dL. Apa mekanisme patogenesis DIKI yang dialami Ny. R dan protokol pencegahan serta penanganan yang paling krusial?",
      "options": [
        {
          "label": "A",
          "text": "Kristaluria obstruktif intratubular (Obstructive Crystal Nephropathy) akibat kelarutan Asiklovir yang sangat rendah dalam urin pekat asam; dicegah dengan memberikan infus lambat minimal 1-2 jam dan hidrasi kristaloid intravena adekuat (Normal Saline) sebelum dan selama terapi untuk memelihara laju aliran urin tinggi",
          "correct": true
        },
        {
          "label": "B",
          "text": "Nefritis interstisial akut alergik akibat hipersensitivitas tipe 1; dicegah dengan pemberian difenhidramin injeksi sebelum bolus asiklovir",
          "correct": false
        },
        {
          "label": "C",
          "text": "Nekrosis kortikal difus akibat vasokonstriksi arteriol eferen permanen; dicegah dengan pemberian ACE-inhibitor sebelum infus",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sindrom lisis tumor spontan dengan kristalisasi kalsium fosfat; dicegah dengan pemberian kalsium glukonat infus kontinyu",
          "correct": false
        }
      ],
      "explanation": "Asiklovir memiliki kelarutan yang sangat rendah di dalam urin (hanya ~1.2-2.5 mg/mL pada pH 7.0 dan suhu 37 °C). Setelah filtrasi glomerulus, konsentrasi obat di tubulus distal dan duktus kolektivus meningkat pesat akibat reabsorpsi air. Pemberian bolus cepat (< 1 jam) menghasilkan lonjakan konsentrasi urin yang melampaui titik saturasi kelarutan, memicu presipitasi cepat kristal asiklovir berbentuk jarum di lumen tubulus ginjal, menyumbat aliran urin dan menyebabkan reaksi inflamasi interstisial serta nyeri pinggang akut. Protokol Baku: (1) Infus asiklovir HARUS diberikan perlahan minimal selama 1-2 jam, dan (2) Pasien WAJIB mendapatkan hidrasi cairan intravena yang adekuat (pre-hidrasi NaCl 0.9%) untuk menjamin output urin minimal 75-100 mL/jam."
    },
    {
      "id": "dq27",
      "category": "DIKI - Stewardship & HD-MTX",
      "question": "An. N (14 th, osteosarkoma) dijadwalkan menerima protokol kemoterapi Metotreksat Dosis Tinggi (HD-MTX 8 g/m² IV infus 4 jam). Apoteker onkologi memverifikasi protokol pre-medikasi dan monitoring yang mencakup hidrasi intravena, Natrium Bikarbonat, dan pemantauan pH urin setiap 4 jam. Mengapa alkalisasi urin dengan Natrium Bikarbonat menjadi pilar mutlak dalam protokol kemoterapi HD-MTX dan berapa target pH urin yang harus dicapai sebelum kemoterapi boleh dimulai?",
      "options": [
        {
          "label": "A",
          "text": "Bikarbonat menginaktivasi enzim dihidrofolat reduktase di sel kanker; target pH urin adalah < 5.5 (asam kuat)",
          "correct": false
        },
        {
          "label": "B",
          "text": "Bikarbonat diperlukan untuk mencegah absorbsi metotreksat ke sirkulasi enterotubular; target pH urin adalah 6.0 - 6.5",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kelarutan Metotreksat dan metabolit utamanya 7-OH-Metotreksat meningkat 5-8 kali lipat pada suasana basa; target pH urin adalah >= 7.0 (ideal 7.5 - 8.0) untuk mencegah presipitasi kristal intratubular yang dapat memicu gagal ginjal anurik akut",
          "correct": true
        },
        {
          "label": "D",
          "text": "Bikarbonat mengikat kalsium bebas agar tidak membentuk batu kalsium oksalat; target pH urin adalah 6.5 - 6.8",
          "correct": false
        }
      ],
      "explanation": "Metotreksat dan metabolit sitotoksiknya 7-hidroksimetotreksat (7-OH-MTX) bersifat asam lemah dengan pKa ~4.8 dan 5.5. Pada urin yang asam (pH 5.0 - 6.0), molekul berada dalam bentuk non-terionkan yang kelarutannya sangat buruk di air, sehingga mudah sekali mengkristal di tubulus renalis dan memicu obstruktif nefropati akut. Peningkatan pH urin menjadi >= 7.0 (ideal 7.5-8.0) melalui infus Natrium Bikarbonat mengubah molekul MTX menjadi bentuk terionkan yang memiliki kelarutan 5 hingga 8 kali lipat lebih tinggi. Kemoterapi HD-MTX TIDAK BOLEH dimulai sampai pH urin terbukti >= 7.0! Selain itu, ketersediaan Leucovorin rescue dan agen Glucarpidase (enzim pemecah MTX) disiapkan bila terjadi intoksikasi akibat klirens ginjal terganggu."
    },
    {
      "id": "dq28",
      "category": "DIKI - Stewardship & Kotrimoksazol",
      "question": "Tn. L (36 th, pasien HIV dengan Pneumocystis jirovecii pneumonia / PCP) menerima terapi Kotrimoksazol (Trimetoprim-Sulfametoksazol) IV dosis tinggi (Trimetoprim 15-20 mg/kgBB/hari terbagi tiap 6 jam). Pada hari ke-3, data lab menunjukkan Serum Kreatinin naik dari baseline 0.8 mg/dL menjadi 1.4 mg/dL. Namun, pemeriksaan Serum Cystatin-C pasien tetap normal sempurna (0.75 mg/L), tidak ada oliguria (urin 2.200 mL/24 jam), dan Kalium serum terukur 5.4 mEq/L. Bagaimana apoteker menganalisis fenomena peningkatan Serum Kreatinin pada Tn. L (Pseudo-AKI vs True DIKI) dan mekanisme farmakologis Trimetoprim yang mendasarinya?",
      "options": [
        {
          "label": "A",
          "text": "Merupakan True AKI nekrotik akibat komponen Sulfametoksazol yang menghancurkan membran glomerulus; terapi harus segera dihentikan dan diganti Amfoterisin B",
          "correct": false
        },
        {
          "label": "B",
          "text": "Merupakan Pseudo-AKI akibat interferensi kolorimetri analitis reaksi Jaffe di laboratorium oleh metabolit cincin pirimidin",
          "correct": false
        },
        {
          "label": "C",
          "text": "Merupakan True AKI akibat glomerulonefritis membranoproliferatif HIV; terapi kotrimoksazol harus dinaikkan dosisnya 2 kali lipat",
          "correct": false
        },
        {
          "label": "D",
          "text": "Merupakan fenomena Pseudo-AKI; Trimetoprim secara kompetitif menghambat transporter kation organik basolateral OCT2 / MATE1 di sel tubulus proksimal ginjal sehingga menurunkan sekresi tubular kreatinin tanpa menurunkan GFR sebenarnya (dikonfirmasi oleh Cystatin-C normal); Trimetoprim juga memblokade kanal natrium ENaC di tubulus distal memicu hiperkalemia",
          "correct": true
        }
      ],
      "explanation": "Sekitar 10-15% kreatinin serum dieliminasi via sekresi aktif tubulus proksimal melalui transporter kation organik OCT2 (Organic Cation Transporter 2) dan MATE1 (Multidrug and Toxin Extrusion 1). Trimetoprim adalah inhibitor kompetitif poten dari transporter OCT2/MATE1. Hambatan sekresi tubuler ini menyebabkan retensi kreatinin dalam plasma sehingga SCr naik 0.3 - 0.6 mg/dL tanpa adanya penurunan Laju Filtrasi Glomerulus (True GFR tetap normal, terbukti dari kadar Cystatin C yang tidak terpengaruh sekresi tubuler). Selain itu, struktur trimetoprim mirip dengan diuretik Amilorid, sehingga memblokade kanal epitel natrium (ENaC) di duktus koligens, menurunkan ekskresi kalium dan memicu hiperkalemia ringan-sedang. Pemahaman ini mencegah penghentian antibiotik penyelamat jiwa (kotrimoksazol pada PCP) secara keliru."
    },
    {
      "id": "dq29",
      "category": "DIKI - Stewardship & Manitol",
      "question": "Pasien cedera kepala berat dengan edema serebral di ICU menerima infus Manitol 20% secara berkala. Selama 3 hari, pasien telah menerima total kumulatif 350 gram Manitol. Pada hari ke-4, perawat melaporkan volume urin turun drastis (oliguria < 20 mL/jam) dan Serum Kreatinin melonjak dari 0.7 menjadi 2.8 mg/dL. Osmolalitas serum terukur 325 mOsm/kg dengan Osmolar Gap melonjak menjadi 28 mOsm/kg (> 10 mOsm/kg). Apa tipe cedera ginjal spesifik yang dialami pasien (Osmotic Nephropathy) dan batas ambang akumulasi Manitol yang memicunya?",
      "options": [
        {
          "label": "A",
          "text": "Kristaluria obstruktif mekanik; akibat pembentukan kristal manitol di pelvis renalis pada suhu tubuh normal",
          "correct": false
        },
        {
          "label": "B",
          "text": "Osmotic Nephropathy (Nefropati Osmotik); diakibatkan akumulasi zat terlarut hiperosmoler eksogen yang diendositosis ke sel epitel tubulus proksimal memicu vakuolisasi sitoplasma masif, pembengkakan seluler, dan oklusi lumen tubulus; risiko melonjak tajam bila dosis kumulatif Manitol > 200-300 gram atau Osmolar Gap > 10-15 mOsm/kg",
          "correct": true
        },
        {
          "label": "C",
          "text": "Nefritis interstisial autoimun akut; diakibatkan stimulasi kompleks imun antibodi anti-manitol terhadap membran basalis glomerulus",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sindrom deplesi volume prerenal murni; yang dapat diatasi cukup dengan menambah kecepatan infus manitol 20%",
          "correct": false
        }
      ],
      "explanation": "Nefropati Osmotik (Osmotic Nephropathy) terjadi saat konsentrasi zat hiperonkotik/hiperosmoler eksogen (seperti Manitol, dekstran, sukrosa dalam IVIG, atau zat kontras radiologi) mencapai kadar toksik dalam lumen tubulus. Sel-sel epitel tubulus proksimal menginternalisasi zat tersebut via pinositosis/endositosis. Akumulasi molekul osmotik di dalam lisosom dan vakuola sitoplasma menarik air secara masif, memicu pembengkakan seluler hebat (vacuolar swelling), nekrosis epitel, kolaps intraluminal, dan gagal ginjal anurik. Faktor risiko sentinel: Dosis kumulatif manitol > 200-300 gram dalam 24-48 jam atau Osmolar Gap serum > 10-15 mOsm/kg. Penanganan: Hentikan manitol segera; dialisis efektif mengeliminasi manitol dari sirkulasi."
    },
    {
      "id": "dq30",
      "category": "DIKI - Stewardship & KDIGO Sepsis",
      "question": "Tn. B (68 th, BB 70 kg) dirawat di ICU dengan syok sepsis akibat pneumonia nosokomial. Pasien telah menerima resusitasi cairan kristaloid 30 mL/kgBB dan mendapat vasopresor Norepinefrin untuk mempertahankan perfusi organ. Tim ICU menargetkan parameter hemodinamik dan mengawasi biomarker ginjal berdasarkan pedoman KDIGO AKI Bundles. Berapakah target Mean Arterial Pressure (MAP) hemodinamik ginjal yang harus dipertahankan pada syok sepsis dan kriteria KDIGO Stage 2 AKI yang harus diwaspadai?",
      "options": [
        {
          "label": "A",
          "text": "Target MAP minimal 65-70 mmHg untuk menjamin tekanan perfusi autoregulasi kapiler intraglomerular; Kriteria KDIGO Stage 2 terpenuhi bila terjadi kenaikan Serum Kreatinin 2.0 - 2.9 kali baseline ATAU produksi urin < 0.5 mL/kgBB/jam selama >= 12 jam",
          "correct": true
        },
        {
          "label": "B",
          "text": "Target MAP minimal 95-100 mmHg; Kriteria KDIGO Stage 2 adalah kenaikan SCr 1.2 kali baseline atau oliguria selama 2 jam",
          "correct": false
        },
        {
          "label": "C",
          "text": "Target MAP 45-50 mmHg untuk mencegah ruptur kapiler glomerulus; Kriteria KDIGO Stage 2 mensyaratkan inisiasi dialisis hemofiltrasi segera",
          "correct": false
        },
        {
          "label": "D",
          "text": "Target MAP tidak memiliki korelasi dengan perfusi ginjal; Kriteria KDIGO Stage 2 hanya dinilai berdasarkan sedimen proteinuria dipstick",
          "correct": false
        }
      ],
      "explanation": "Berdasarkan konsensus Surviving Sepsis Campaign dan KDIGO AKI Guidelines: 1. Target Hemodinamik: Autoregulasi aliran darah ginjal (Renal Blood Flow / RBF) dan tekanan kapiler intraglomerular sangat bergantung pada Mean Arterial Pressure (MAP). Pada kondisi syok sepsis, target MAP minimal adalah >= 65 mmHg (pada pasien geriatri dengan riwayat hipertensi kronis sering kali 65-70 mmHg) dengan agen vasopresor pilihan utama Norepinefrin. 2. Kriteria KDIGO AKI Stage 2: Kriteria SCr: Kenaikan SCr 2.0 s/d 2.9 kali dari nilai baseline; Kriteria Urin: Volume urin < 0.5 mL/kg/jam yang berlangsung selama minimal 12 jam berturut-turut. Penerapan KDIGO Care Bundle (optimasi volume & perfusi, stop seluruh nefrotoksin non-esensial, TDM antibiotik) terbukti menurunkan progresi AKI ke tahap gagal ginjal stadium 3 yang membutuhkan dialisis."
    }
  ]
};
