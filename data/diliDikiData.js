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
          "text": "R = 3.65 (Pola Campuran, 2 < R < 5); nekrosis fokal hepatoseluler sentrilobular akibat metabolit reaktif amoksisilin disertai obstruksi kanalikular transien pada parenkim hati",
          "correct": false
        },
        {
          "label": "B",
          "text": "R = 0.75 (Pola Kolestatik murni, R <= 2); cedera imun-alergi pada epitel kolangiosit duktus biliaris yang diinduksi komponen klavulanat memicu kegagalan transporter asam empedu",
          "correct": true
        },
        {
          "label": "C",
          "text": "R = 1.33 (Pola Kolestatik murni, R <= 2); disfungsi selektif transporter basolateral NTCP akibat metabolit amoksisilin yang menghambat ambilan asam empedu tanpa melibatkan klavulanat",
          "correct": false
        },
        {
          "label": "D",
          "text": "R = 2.75 (Pola Campuran, 2 < R < 5); akumulasi asam klavulanat yang menginduksi stres oksidatif mitokondria hepatosit disertai penurunan sekresi kanalikular fosfolipid bilier MDR3",
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
          "text": "Tidak memenuhi Hy's Law karena ALP pasien meningkat melampaui batas normal (145 U/L), sehingga diklasifikasikan sebagai kolestasis biasa yang cukup diobservasi tanpa penghentian OAT",
          "correct": false
        },
        {
          "label": "B",
          "text": "Terpenuhi kriteria Hy's Law, namun karena INR pasien masih di bawah 1.50, OAT cukup diturunkan dosisnya separuh sambil memberikan suplementasi antioksidan kurkumin dan asam ursodeoksikolat",
          "correct": false
        },
        {
          "label": "C",
          "text": "Terpenuhi Hy's Law (ALT >= 3x ULN, Bilirubin >= 2x ULN, tanpa kolestasis awal ALP < 2x ULN); menandakan cedera hepatoseluler kritis berisiko mortalitas gagal hati akut 10-50%, wajib stop seluruh OAT",
          "correct": true
        },
        {
          "label": "D",
          "text": "Tidak memenuhi Hy's Law karena konsensus mensyaratkan transaminase harus di atas 15x ULN dan bilirubin total di atas 10 mg/dL sebelum pasien dikategorikan berisiko gagal hati akut fulminan",
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
          "text": "R = 2.96 (Pola Campuran, 2 < R < 5); mencerminkan kombinasi cedera nekrosis hepatosit dan kolestasis kanalikular akibat interaksi farmakokinetik makrolida yang menghambat klirens statin",
          "correct": true
        },
        {
          "label": "B",
          "text": "R = 5.25 (Pola Hepatoseluler, R >= 5); kerusakan membran hepatosit selektif oleh metabolit reaktif atorvastatin akibat kejenuhan metabolisme oksidatif CYP3A4 oleh azitromisin",
          "correct": false
        },
        {
          "label": "C",
          "text": "R = 1.08 (Pola Kolestatik, R <= 2); hambatan kompetitif transporter efluks BSEP oleh azitromisin yang memicu retensi garam empedu tanpa disertai kerusakan hepatoseluler bermakna",
          "correct": false
        },
        {
          "label": "D",
          "text": "R = 4.12 (Pola Campuran, 2 < R < 5); nekrosis iskemik akut hepatosit zona 3 akibat penurunan perfusi sinusoid sekunder terhadap hipoksemia bronkitis dan toksisitas mitokondrial",
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
          "text": "Tunda pemberian NAC dan observasi 24 jam karena enzim ALT/AST masih normal (38 dan 32 U/L), menandakan belum terjadi nekrosis membran hepatosit sehingga risiko toksisitas belum terbukti",
          "correct": false
        },
        {
          "label": "B",
          "text": "Berikan karbon aktif oral tunggal 50 gram dan kuras lambung karena sudah melewati jendela 4 jam di mana efektivitas NAC intravena telah menurun drastis dalam mencegah nekrosis sentrilobular",
          "correct": false
        },
        {
          "label": "C",
          "text": "Lakukan hemodialisis darurat untuk membuang parasetamol bebas karena dosis 16 gram bersifat letal absolut yang melampaui kapasitas netralisasi antidotum farmakologis N-asetilsistein sistemik",
          "correct": false
        },
        {
          "label": "D",
          "text": "Segera inisiasi protokol NAC intravena lengkap karena kadar 185 mcg/mL pada jam ke-6 melampaui garis terapi Rumack-Matthew, menandakan deplesi glutation kritis yang memicu nekrosis jika tertunda",
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
          "text": "Kategori 'Definite' (Pasti); memerlukan skor minimal +14 serta wajib dilakukan uji provokasi rechallenge dengan dosis subklinis untuk memenuhi syarat pembuktian kausalitas farmakovigilans",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kategori 'Highly Probable' (Sangat Mungkin, skor >= 9); Karbamazepin ditetapkan sebagai pemicu definitif, harus dihentikan permanen, dicatat pada data alergi, dan dilarang keras rechallenge",
          "correct": true
        },
        {
          "label": "C",
          "text": "Kategori 'Probable' (Mungkin, skor 6-8); karbamazepin masih dapat dilanjutkan dengan penurunan dosis 50% disertai pemantauan enzim transaminase serial tiap 3 hari hingga resolusi klinis",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kategori 'Possible' (Bisa jadi, skor 3-5); membutuhkan konfirmasi biopsi hati perkutan sebelum karbamazepin dapat diputuskan untuk dihentikan secara resmi oleh komite farmasi dan terapi",
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
          "text": "Valproat menginduksi CYP2E1 menghasilkan radikal bebas elektrofilik yang merusak epitel duktus biliaris; tatalaksana lini pertama adalah pemberian N-Asetilsistein (NAC) dosis tinggi intravena",
          "correct": false
        },
        {
          "label": "B",
          "text": "Valproat memicu hemolisis intravaskular masif yang menyebabkan beban besi berlebih di hepar; tatalaksana lini pertama adalah transfusi washed red cells disertai terapi kelasi deferoksamin subkutan",
          "correct": false
        },
        {
          "label": "C",
          "text": "Metabolit valproil-CoA menghambat beta-oksidasi asam lemak mitokondria dan menguras cadangan L-karnitin bebas menghambat siklus urea; tatalaksana lini pertama adalah infus L-Karnitin intravena",
          "correct": true
        },
        {
          "label": "D",
          "text": "Terjadi reaksi hipersensitivitas termediasi kompleks HLA-B*1502 yang memicu vaskulitis hepar; tatalaksana lini pertama adalah metilprednisolon pulse dose 20 mg/kg tanpa perlu menghentikan valproat",
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
          "text": "Sindrom DRESS terkait alel HLA-B*5801; tatalaksana utama adalah penghentian segera Alopurinol dan pemberian Kortikosteroid sistemik (Metilprednisolon IV 1-2 mg/kg/hari) dengan tapering bertahap",
          "correct": true
        },
        {
          "label": "B",
          "text": "Sindrom Stevens-Johnson terkait mutasi CYP2C9; tatalaksana utama adalah hidrasi cairan masif, antibiotik profilaksis spektrum luas, dan melanjutkan alopurinol dosis rendah 50 mg/hari",
          "correct": false
        },
        {
          "label": "C",
          "text": "Hepatotoksisitas intrinsik akibat akumulasi metabolit oksipurinol; tatalaksana utama adalah hemodialisis darurat untuk membersihkan kristal asam urat tanpa memerlukan kortikosteroid",
          "correct": false
        },
        {
          "label": "D",
          "text": "Hepatitis autoimun tipe 2 akibat induksi komplemen hepatosit; tatalaksana utama adalah plasmaferesis terapeutik 3 siklus berturut-turut dikombinasikan dengan Azatioprin oral dosis penuh",
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
          "text": "Alkohol berkompetisi pada transporter kanalikular BSEP sehingga asam empedu menumpuk di sitosol dan memicu nekrosis deterjenik hepatosit pada dosis parasetamol yang relatif rendah",
          "correct": false
        },
        {
          "label": "B",
          "text": "Alkohol menginaktivasi enzim glukuronil transferase (UGT) secara ireversibel via fosforilasi reseptor nukleus sehingga jalur eliminasi non-toksik parasetamol tertutup sepenuhnya",
          "correct": false
        },
        {
          "label": "C",
          "text": "Parasetamol bereaksi dengan asetaldehida membentuk metabolit karsinogenik baru yang secara langsung merusak membran retikulum endoplasma dan mikrotubulus hepatosit sentrilobular",
          "correct": false
        },
        {
          "label": "D",
          "text": "Alkohol menginduksi CYP2E1 sekaligus menguras cadangan Glutation (GSH) hepar, sehingga fraksi parasetamol yang diubah menjadi metabolit reaktif NAPQI melonjak melampaui kapasitas detoksifikasi",
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
          "text": "Klaritromisin menginduksi vaskulitis nekrotikan pada cabang arteri hepatika yang menurunkan perfusi sinusoid dan memicu peluruhan epitel duktus koledokus tanpa gangguan transporter aktif",
          "correct": false
        },
        {
          "label": "B",
          "text": "Siklosporin mengkristal di lumen duktus biliaris intrahepatik akibat presipitasi garam kalsium netral yang menyumbat aliran empedu mekanik menyerupai koledokolitiasis ekstrahepatik",
          "correct": false
        },
        {
          "label": "C",
          "text": "Siklosporin menghambat transporter BSEP kanalikular, diperparah inhibisi CYP3A4 oleh klaritromisin yang melipatgandakan kadar siklosporin, memicu akumulasi asam empedu hidrofobik sitotoksik",
          "correct": true
        },
        {
          "label": "D",
          "text": "Terjadi destruksi autoimun selektif terhadap membran sel asinar pankreas yang memicu refluks enzim tripsin retrograde ke dalam traktus biliaris dan menyebabkan kolangitis kimiawi akut",
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
          "text": "Intrinsic DILI hanya dipicu oleh bahan anorganik non-farmasi tanpa pembentukan metabolit reaktif, sedangkan Idiosyncratic DILI hanya terjadi pada pasien lanjut usia dengan defisiensi albumin berat",
          "correct": false
        },
        {
          "label": "B",
          "text": "Intrinsic DILI bersifat dose-dependent, onset cepat, dan dapat diprediksi pada hewan; sedangkan Idiosyncratic DILI bersifat dose-independent, onset laten bervariasi, dan dimediasi imunogenetik pejamu",
          "correct": true
        },
        {
          "label": "C",
          "text": "Intrinsic DILI selalu disertai trias alergi ruam dan eosinofilia sistemik, sedangkan Idiosyncratic DILI murni merupakan toksisitas biokimia langsung pada membran fosfolipid mitokondria hepatosit",
          "correct": false
        },
        {
          "label": "D",
          "text": "Intrinsic DILI dapat dicegah dengan penapisan polimorfisme HLA, sedangkan Idiosyncratic DILI dapat sepenuhnya dihindari di klinik hanya dengan membatasi dosis obat di bawah 50 miligram per hari",
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
          "text": "Pirazinamid (Z) > Isoniazid (H) > Rifampisin (R); Pirazinamid paling toksik nekrotik, Isoniazid toksik via hidrazin, Rifampisin paling rendah toksisitas intrinsiknya",
          "correct": true
        },
        {
          "label": "B",
          "text": "Rifampisin (R) > Isoniazid (H) > Pirazinamid (Z); Rifampisin paling toksik karena induksi CYP, diikuti Isoniazid, sedangkan Pirazinamid paling aman bagi jaringan hepar",
          "correct": false
        },
        {
          "label": "C",
          "text": "Isoniazid (H) > Pirazinamid (Z) > Rifampisin (R); Isoniazid paling toksik karena metabolit asetilhidrazin, sedangkan Pirazinamid berada di tingkat hepatotoksisitas sedang",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pirazinamid (Z) > Rifampisin (R) > Isoniazid (H); Pirazinamid paling toksik nekrotik, diikuti Rifampisin kolestatik, sedangkan Isoniazid paling jarang memicu nekrosis",
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
          "text": "Hanya Pasien 4 saja, karena ikterus klinis merupakan indikator tunggal penghentian terapi OAT sedangkan kenaikan enzim transaminase tanpa gejala subjektif tidak memiliki makna patologis",
          "correct": false
        },
        {
          "label": "B",
          "text": "Pasien 1 dan Pasien 2, karena prinsip keselamatan terapi menetapkan setiap kenaikan transaminase di atas dua kali batas atas normal harus segera dihentikan untuk mencegah hepatitis fulminan",
          "correct": false
        },
        {
          "label": "C",
          "text": "Seluruh pasien (Pasien 1, 2, 3, dan 4) wajib langsung dihentikan paduan OAT-nya secara serentak karena semua menunjukkan peningkatan enzim hepar di atas rentang normal laboratorium rujukan",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pasien 3 (ALT >= 5x ULN meskipun asimtomatik) dan Pasien 4 (Bilirubin Total > 2 mg/dL dengan keluhan klinis); keduanya memenuhi kriteria baku penghentian OAT konsensus internasional ATS/WHO",
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
          "text": "Mulai dengan Pirazinamid (Z) dosis penuh terlebih dahulu karena memiliki daya bakterisidal lesi kaseosa terkuat, lalu bertahap tambahkan Isoniazid dan Rifampisin tiap interval 3 hari",
          "correct": false
        },
        {
          "label": "B",
          "text": "Mulai dengan Rifampisin (R) dosis penuh; jika LFT stabil setelah 3-7 hari, tambahkan Isoniazid (H); hindari reintroduksi Pirazinamid (Z) bila episode DILI awal berat atau letakkan paling akhir",
          "correct": true
        },
        {
          "label": "C",
          "text": "Berikan kembali seluruh paduan (RHZE) sekaligus dalam dosis seperempat, lalu naikkan dosis seluruh obat secara serentak sebesar 25% setiap 48 jam hingga mencapai target dosis penuh",
          "correct": false
        },
        {
          "label": "D",
          "text": "Mulai dengan Isoniazid (H) selama 14 hari penuh hingga terbukti toleran, kemudian langsung reintroduksi Pirazinamid (Z) tanpa memerlukan pemberian kembali Rifampisin ke dalam rejimen",
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
          "text": "Durasi terapi tetap dipertahankan 6 bulan standar (2 RH-E / 4 RH) tanpa perlu perpanjangan waktu karena bakterisidal rifampisin dan isoniazid sudah mencukupi untuk eradikasi bakteri TB",
          "correct": false
        },
        {
          "label": "B",
          "text": "Paduan terapi diubah menjadi Levofloksasin, Bedaquiline, dan Linezolid selama 18 bulan sebagaimana protokol tatalaksana tuberkulosis resisten obat ganda (TB-MDR) kelompok risiko tinggi",
          "correct": false
        },
        {
          "label": "C",
          "text": "Paduan diubah menjadi 2 RH-E pada fase intensif (2 bulan) dilanjutkan 7 RH pada fase lanjutan (7 bulan), sehingga total durasi pengobatan diperpanjang menjadi 9 bulan untuk mencegah relaps",
          "correct": true
        },
        {
          "label": "D",
          "text": "Terapi dinyatakan tuntas setelah menyelesaikan 2 bulan RH-E fase intensif karena eliminasi pirazinamid membuktikan pasien telah memiliki imunitas seluler protektif terhadap kuman mikobakterium",
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
          "text": "UDCA menggantikan asam empedu hidrofobik toksik dengan asam empedu hidrofilik protektif; Kolestiramin mengikat empedu di usus; Kolestiramin harus diminum berjarak minimal 2-4 jam dari UDCA",
          "correct": true
        },
        {
          "label": "B",
          "text": "UDCA menghambat sintesis kolesterol hepar sedangkan Kolestiramin meningkatkan penyerapan garam empedu di ileum; keduanya harus diminum bersamaan pada suapan pertama sarapan pagi hari",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kolestiramin adalah antihistamin penenang gatal sedangkan UDCA adalah agen pelapis mukosa lambung; keduanya dapat diminum bebas bersamaan tanpa risiko interaksi farmakokinetik absorpsi",
          "correct": false
        },
        {
          "label": "D",
          "text": "UDCA dan Kolestiramin membentuk kompleks khelat di sirkulasi darah untuk menarik bilirubin keluar via filtrasi ginjal; keduanya wajib dilarutkan dalam satu gelas air yang sama secara serentak",
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
          "text": "NSAID dan Diuretik mengkristal di tubulus distal membentuk batu silikat sedangkan ACE-inhibitor menghambat aliran darah medula, memicu nekrosis papilaris obstruktif mekanik bilateral",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kaptopril meningkatkan sekresi furosemid di tubulus proksimal secara masif sehingga terjadi deplesi kalium intraseluler yang melumpuhkan kemampuan kontraksi sel otot polos arteriol ginjal",
          "correct": false
        },
        {
          "label": "C",
          "text": "Ketorolak menstimulasi pelepasan aldosteron korteks adrenal secara otonom yang memicu vasokonstriksi arteriol renalis difus dan vaskulitis nekrotikan pada mikrosirkulasi kapiler kortikal",
          "correct": false
        },
        {
          "label": "D",
          "text": "Diuretik memicu hipovolemia, NSAID menghambat prostaglandin penyearah vasodilatasi aferen (pintu masuk menyempit), ACEI mendilatasi eferen (pintu keluar bocor); tekanan filtrasi intraglomerular kolaps",
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
          "text": "Penurunan eGFR menandakan nekrosis tubulus toksik akut stadium 1; Dapagliflozin harus dihentikan permanen dan diganti Sulfonilurea untuk memulihkan fungsi filtrasi mikrosirkulasi glomerulus",
          "correct": false
        },
        {
          "label": "B",
          "text": "Fenomena 'eGFR dip' adalah penurunan fungsional reversibel akibat aktivasi Tubuloglomerular Feedback yang menormalkan arteriol aferen; terapi WAJIB DILANJUTKAN karena terbukti nefroprotektif",
          "correct": true
        },
        {
          "label": "C",
          "text": "Glukosuria memicu nefritis interstisial akut bakterial subklinis; dosis Dapagliflozin harus digandakan menjadi 20 mg/hari untuk mempercepat klirens osmotik zat toksik dari parenkim ginjal",
          "correct": false
        },
        {
          "label": "D",
          "text": "Terjadi deplesi volume cairan intravaskular berat; Kandesartan harus dinaikkan dosisnya dua kali lipat untuk mendilatasi arteriol eferen lebih lanjut guna memulihkan tekanan intraglomerular",
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
          "text": "Takrolimus mengkristal di tubulus kontortus distal membentuk presipitat amorf; tatalaksana baku adalah hidrasi natrium bikarbonat masif dan pemberian asetazolamid intravena secara berkala",
          "correct": false
        },
        {
          "label": "B",
          "text": "Takrolimus memblokade reseptor mineralokortikoid di duktus pengumpul yang memicu natriuresis berlebih; tatalaksana baku adalah suplementasi natrium klorida oral dan fludrokortison dosis rendah",
          "correct": false
        },
        {
          "label": "C",
          "text": "Takrolimus memicu vasokonstriksi poten arteriol aferen via pelepasan Endotelin-1 dan penurunan Nitric Oxide; tatalaksananya adalah penurunan dosis Takrolimus dan penambahan CCB Dihidropiridin",
          "correct": true
        },
        {
          "label": "D",
          "text": "Terjadi nefropati vakuolisasi osmotik sel tubulus akibat eksipien minyak jarak kapsul takrolimus; tatalaksana baku adalah penggantian takrolimus ke Siklosporin dosis tinggi bersamaan mikofenolat",
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
          "text": "FE_Na < 1% dan rasio BUN/SCr > 20 menandakan AKI Prerenal Azotemia fungsional dengan tubulus intak yang mereabsorpsi natrium maksimal; kondisi ini reversibel dengan hidrasi isotonik dan stop NSAID",
          "correct": true
        },
        {
          "label": "B",
          "text": "FE_Na < 1% mengonfirmasi terjadinya Acute Tubular Necrosis (ATN) nekrotik dengan paralisis epitel tubulus proksimal yang kehilangan daya reabsorpsi sehingga membutuhkan inisiasi dialisis segera",
          "correct": false
        },
        {
          "label": "C",
          "text": "Rasio BUN/SCr > 20 mengindikasikan adanya perdarahan saluran cerna masif atau katabolisme protein ekstrem tanpa korelasi langsung dengan status perfusi hemodinamik mikrosirkulasi parenkim renal",
          "correct": false
        },
        {
          "label": "D",
          "text": "Nilai FE_Na < 1% dan BUN/SCr > 20 secara patognomonik menegakkan diagnosis nefropati obstruktif post-renal mekanik yang membutuhkan tindakan dekompresi nefrostomi perkutan cito oleh urolog",
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
          "text": "Segera hentikan Ramipril karena kenaikan kreatinin serum di atas 0.2 mg/dL pasca inisiasi ACE-Inhibitor menandakan nekrosis kortikal akut iskemik bilateral yang tidak dapat dipulihkan kembali",
          "correct": false
        },
        {
          "label": "B",
          "text": "Turunkan dosis Ramipril menjadi 1.25 mg dan berikan suplementasi kalium klorida oral 600 mg tiga kali sehari untuk menstabilkan potensial membran istirahat sel-sel endotel kapiler glomerulus",
          "correct": false
        },
        {
          "label": "C",
          "text": "Ganti Ramipril dengan NSAID oral dosis rendah untuk memicu vasokonstriksi arteriol aferen penyeimbang agar rasio tekanan hidrostatik transkapiler glomerulus dapat dinormalkan seperti semula",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pertahankan terapi Ramipril dan teruskan pemantauan; kenaikan SCr hingga 30% dari baseline dalam 2 minggu awal adalah toleransi hemodinamik yang diharapkan dan terbukti protektif jangka panjang",
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
          "text": "Gentamisin adalah molekul nonpolar sangat lipofilik yang berdifusi bebas menembus membran glomerulus dan mengkristal di ruang Bowman memicu reaksi peradangan granulomatosa interstisial difus",
          "correct": false
        },
        {
          "label": "B",
          "text": "Gentamisin adalah polikation bermuatan positif yang berikatan elektrostatik dengan membran mikrovili bermuatan negatif, diendositosis via Megalin-Kubilin, lalu menumpuk di lisosom hingga ruptur",
          "correct": true
        },
        {
          "label": "C",
          "text": "Gentamisin adalah polianion bermuatan negatif kuat yang ditolak albumin plasma dan langsung difiltrasi aktif oleh pompa sekresi MRP4 ke dalam mitokondria sel epitel duktus pengumpul medularis",
          "correct": false
        },
        {
          "label": "D",
          "text": "Gentamisin mengikat reseptor eritropoietin di sel interstisial peritubular ginjal memicu deplesi oksigen lokal dan apoptosis sel endotel mikrovaskular kapiler glomerulus secara selektif",
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
          "text": "Dosis tinggi sekali sehari mencapai target Cmax/MIC > 8-10 untuk bakterisidal maksimal; ambilan tubulus via megalin bersifat jenuh (saturable) dan memberi jeda palung rendah untuk klirens lisosomal",
          "correct": true
        },
        {
          "label": "B",
          "text": "Pemberian sekali sehari menurunkan klirens ginjal secara permanen sehingga obat tertahan di sirkulasi darah perifer tanpa pernah mencapai sel-sel epitel tubulus proksimal maupun filtrat glomerulus",
          "correct": false
        },
        {
          "label": "C",
          "text": "Aminoglikosida bersifat time-dependent killing (T > MIC); dosis sekali sehari menurunkan ikatan protein plasma secara mendadak sehingga fraksi bebas tereliminasi lebih cepat melalui empedu hepar",
          "correct": false
        },
        {
          "label": "D",
          "text": "Dosis tunggal tinggi mengubah struktur molekul amikasin menjadi metabolit asam klorida pekat yang tidak mampu dikenali oleh reseptor endositik tubulus ginjal mamalia tetapi tetap membunuh bakteri",
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
          "text": "Sisplatin mengkristal di papila renalis membentuk presipitat logam berat; pencegahan baku adalah restriksi asupan cairan ketat dan asidifikasi urin dengan amonium klorida untuk melarutkan garamnya",
          "correct": false
        },
        {
          "label": "B",
          "text": "Sisplatin menstimulasi reseptor beta-2 adrenergik glomerulus memicu hiperfiltrasi maligna; pencegahan baku adalah pemberian Propranolol dosis tinggi intravena 2 jam sebelum inisiasi kemoterapi dimulai",
          "correct": false
        },
        {
          "label": "C",
          "text": "Sisplatin diambil aktif ke sel tubulus via Organic Cation Transporter 2 (OCT2) memicu stres oksidatif DNA; pencegahan baku adalah hidrasi agresif Normal Saline disertai suplementasi Magnesium rutin",
          "correct": true
        },
        {
          "label": "D",
          "text": "Sisplatin merusak podosit kapsula Bowman secara autoimun; pencegahan baku adalah plasmaferesis profilaksis 2 jam sebelum kemoterapi dikombinasikan dengan injeksi deksametason dosis imunosupresif",
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
          "text": "Amfoterisin B memicu nefrokalsinosis akut akibat deposisi kalsium oksalat di medula ginjal; formulasi alternatif yang lebih aman adalah sediaan amfoterisin aerosol inhalasi bersama diuretik hemat kalium",
          "correct": false
        },
        {
          "label": "B",
          "text": "Amfoterisin B memblokade transporter glukosa SGLT2 memicu ketoasidosis renal euglikemik berat; formulasi alternatif yang lebih aman adalah flukonazol oral dosis tunggal yang tidak memiliki afinitas tubulus",
          "correct": false
        },
        {
          "label": "C",
          "text": "Terjadi nefritis autoimun membranosa sekunder akibat lisis sel jamur yang melepaskan antigen dinding sel masif; formulasi alternatif yang lebih aman adalah suspensi nistatin oral dosis tinggi berkala",
          "correct": false
        },
        {
          "label": "D",
          "text": "Amfoterisin B berikatan dengan kolesterol tubulus distal membentuk pori permeabilitas bocor ion K+/Mg2+ dan vasokonstriksi aferen; alternatif formulasi yang jauh lebih nefroprotektif adalah Liposomal AmB",
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
          "text": "Piperasilin mengkatalisis hidrolisis cincin glikopeptida vankomisin menjadi metabolit karsinogenik; tindakan apoteker: hentikan vankomisin permanen dan ganti dengan terapi Gentamisin dosis tinggi",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kombinasi ini melipatgandakan risiko AKI hingga 3-4 kali dibanding Vankomisin + Sefepim/Meropenem; tindakan apoteker: ganti Pip-Tazo ke Sefepim/Meropenem dan titrasi Vankomisin target AUC24/MIC 400-600",
          "correct": true
        },
        {
          "label": "C",
          "text": "Tazobaktam memblokade filtrasi glomerulus vankomisin secara mekanis di celah podosit; tindakan apoteker: lakukan hemodialisis cito untuk membersihkan akumulasi piperasilin dari kompartemen intravaskular",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kedua antibiotik membentuk presipitat garam tak larut di tubulus distal; tindakan apoteker: lakukan alkalisasi urin agresif dengan infus natrium bikarbonat kontinyu hingga mencapai pH urin di atas 8.50",
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
          "text": "Kristaluria obstruktif intratubular akibat kelarutan rendah asiklovir dalam urin asam pekat; dicegah dengan infus lambat minimal 1-2 jam dan hidrasi kristaloid salin adekuat sebelum serta selama terapi",
          "correct": true
        },
        {
          "label": "B",
          "text": "Nefritis interstisial akut alergik akibat hipersensitivitas tipe 1 terhadap metabolit guanosin; dicegah dengan pemberian difenhidramin intravena dan deksametason oral sebelum bolus asiklovir dimulai",
          "correct": false
        },
        {
          "label": "C",
          "text": "Nekrosis kortikal difus akibat vasokonstriksi permanen arteriol eferen glomerulus; dicegah dengan pemberian ACE-inhibitor dosis rendah 30 menit sebelum memulai infus asiklovir konsentrasi pekat",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sindrom lisis seluler akut dengan presipitasi masif kalsium fosfat di tubulus proksimal; dicegah dengan pemberian kalsium glukonat infus kontinyu dan restriksi cairan ketat selama fase terapi aktif",
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
          "text": "Bikarbonat menginaktivasi enzim folat reduktase seluler di sumsum tulang janin; target pH urin adalah di bawah 5.5 (asam kuat) untuk mencegah absorbsi sistemik metotreksat melampaui ambang batas toksik",
          "correct": false
        },
        {
          "label": "B",
          "text": "Bikarbonat diperlukan untuk mencegah absorbsi metotreksat di sirkulasi enterotubular ileum; target pH urin adalah rentang 6.0 hingga 6.5 untuk mempertahankan stabilitas pengikatan albumin plasma",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kelarutan Metotreksat dan metabolit 7-OH-MTX meningkat 5-8 kali lipat pada suasana basa; target pH urin adalah >= 7.0 (ideal 7.5-8.0) untuk mencegah presipitasi kristal intratubular penyebab gagal ginjal",
          "correct": true
        },
        {
          "label": "D",
          "text": "Bikarbonat mengikat kalsium bebas agar tidak membentuk batu kalsium oksalat di pelvis renalis; target pH urin adalah 6.5 hingga 6.8 yang dipantau dengan kertas indikator pH setiap pergantian cairan infus",
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
          "text": "Merupakan True AKI nekrotik akibat komponen Sulfametoksazol yang menghancurkan membran glomerulus; terapi harus segera dihentikan dan diganti Amfoterisin B deoksikolat dengan hidrasi cairan isotonik",
          "correct": false
        },
        {
          "label": "B",
          "text": "Merupakan Pseudo-AKI akibat interferensi kolorimetri analitis reaksi Jaffe di laboratorium oleh metabolit cincin pirimidin yang bereaksi palsu dengan asam pikrat tanpa perubahan kadar kreatinin plasma",
          "correct": false
        },
        {
          "label": "C",
          "text": "Merupakan True AKI akibat glomerulonefritis membranoproliferatif terkait kompleks imun HIV; terapi kotrimoksazol harus dinaikkan dosisnya dua kali lipat untuk mengeradikasi kuman pneumocystis di parenkim",
          "correct": false
        },
        {
          "label": "D",
          "text": "Merupakan Pseudo-AKI; Trimetoprim menghambat transporter OCT2/MATE1 sehingga sekresi tubuler kreatinin turun tanpa mengubah GFR sejati (Cystatin C normal); Trimetoprim juga memblokade ENaC memicu hiperkalemia",
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
          "text": "Kristaluria obstruktif mekanik akibat pembentukan kristal heksahidrat manitol di lumen pelvis renalis yang terjadi saat suhu urin berada di bawah rentang fisiologis tubuh normal tanpa perubahan histologis",
          "correct": false
        },
        {
          "label": "B",
          "text": "Nefropati Osmotik akibat akumulasi zat terlarut hiperosmoler eksogen yang diendositosis ke sel epitel tubulus proksimal memicu vakuolisasi sitoplasma masif dan oklusi lumen; risiko melonjak bila manitol > 200-300g",
          "correct": true
        },
        {
          "label": "C",
          "text": "Nefritis interstisial autoimun akut diakibatkan stimulasi kompleks imun antibodi anti-manitol terhadap membran basalis tubulus yang memicu infiltrasi sel plasma eosinofil dan nekrosis korteks difus",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sindrom deplesi volume prerenal murni yang disebabkan oleh diuresis osmotik tak terkontrol yang dapat diatasi cukup dengan menambah kecepatan tetesan infus manitol 20% dan restriksi cairan kristaloid",
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
          "text": "Target MAP minimal 65-70 mmHg untuk menjamin perfusi autoregulasi kapiler glomerulus; Kriteria KDIGO Stage 2 terpenuhi bila kenaikan SCr 2.0-2.9x baseline ATAU produksi urin < 0.5 mL/kg/jam selama >= 12 jam",
          "correct": true
        },
        {
          "label": "B",
          "text": "Target MAP minimal 95-100 mmHg untuk memulihkan fungsi filtrasi endotel korteks; Kriteria KDIGO Stage 2 terpenuhi bila terjadi kenaikan SCr 1.2-1.5x baseline ATAU produksi urin < 1.0 mL/kg/jam selama 2 jam",
          "correct": false
        },
        {
          "label": "C",
          "text": "Target MAP 45-50 mmHg untuk mencegah ruptur kapiler intraglomerular yang rapuh; Kriteria KDIGO Stage 2 mensyaratkan inisiasi dialisis hemofiltrasi darurat terlepas dari nilai kreatinin dan volume urin harian",
          "correct": false
        },
        {
          "label": "D",
          "text": "Target MAP tidak berkorelasi dengan perfusi ginjal pada kondisi syok; Kriteria KDIGO Stage 2 dinilai eksklusif berdasarkan adanya sedimen silinder granular kasar pada sedimen urin mikroskopik sentrifugasi",
          "correct": false
        }
      ],
      "explanation": "Berdasarkan konsensus Surviving Sepsis Campaign dan KDIGO AKI Guidelines: 1. Target Hemodinamik: Autoregulasi aliran darah ginjal (Renal Blood Flow / RBF) dan tekanan kapiler intraglomerular sangat bergantung pada Mean Arterial Pressure (MAP). Pada kondisi syok sepsis, target MAP minimal adalah >= 65 mmHg (pada pasien geriatri dengan riwayat hipertensi kronis sering kali 65-70 mmHg) dengan agen vasopresor pilihan utama Norepinefrin. 2. Kriteria KDIGO AKI Stage 2: Kriteria SCr: Kenaikan SCr 2.0 s/d 2.9 kali dari nilai baseline; Kriteria Urin: Volume urin < 0.5 mL/kg/jam yang berlangsung selama minimal 12 jam berturut-turut. Penerapan KDIGO Care Bundle (optimasi volume & perfusi, stop seluruh nefrotoksin non-esensial, TDM antibiotik) terbukti menurunkan progresi AKI ke tahap gagal ginjal stadium 3 yang membutuhkan dialisis."
    },
    {
            "id": "dq31",
            "category": "DILI - Kalkulasi & RUCAM",
            "question": "Tn. F (55 th, melanoma metastatik) menerima imunoterapi anti-PD-1 Pembrolizumab siklus ke-3. Tiga minggu pascainfus, pasien mengeluh lemas dan mual ringan. Hasil lab: ALT 340 U/L (ULN: 40 U/L), AST 290 U/L (ULN: 35 U/L), ALP 130 U/L (ULN: 110 U/L), Bilirubin Total 1.1 mg/dL. Viral hepatitis panel (A, B, C, E) dan CMV/EBV negatif, USG abdomen normal. Apoteker mengevaluasi kausalitas DILI menggunakan metode RUCAM (Roussel Uclaf Causality Assessment Method). Berapakah nilai Rasio R pasien, kriteria interpretasi skor RUCAM yang paling mungkin diperoleh, dan tatalaksana imuno-onkologinya?",
            "options": [
                {
                    "label": "A",
                    "text": "R = 7.19 (Hepatoseluler murni); skor RUCAM 1-2 (Doubtful) karena respon imun checkpoint tidak dapat dinilai secara kausalitas; Pembrolizumab aman diteruskan tanpa intervensi kortikosteroid sistemik",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "R = 3.25 (Pola Campuran); skor RUCAM 3-5 (Possible); disarankan menaikkan dosis Pembrolizumab dua kali lipat untuk mengatasi progresi resistensi tumor hepar disertai pemberian hepatoprotektor oral herbal",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "R = 7.19 (Hepatoseluler, R >= 5); skor RUCAM >= 6 (Probable/Highly Probable); Grade 3 Immune-Mediated Hepatitis ini mewajibkan penundaan Pembrolizumab dan inisiasi Prednison/Metilprednisolon 1-2 mg/kg/hari",
                    "correct": true
                },
                {
                    "label": "D",
                    "text": "R = 0.85 (Kolestatik murni); skor RUCAM < 0 (Excluded); kondisi pasien merupakan efek sitotoksik langsung garam empedu sehingga cukup diberikan infus natrium bikarbonat 8.4% tanpa menunda kemoterapi",
                    "correct": false
                }
            ],
            "explanation": "R-ratio = (ALT/ULN) / (ALP/ULN) = (340/40) / (130/110) = 8.5 / 1.18 = 7.19 (Pola Hepatoseluler, R >= 5). Penilaian RUCAM: onset waktu kompatibel (5-90 hari, skor +2), de-eskalasi membaik (+2), faktor risiko alkohol/usia (+1), penyingkiran penyebab alternatif infeksi virus/iskemia tuntas (+2) -> Skor total 7-8 (Probable). Kriteria ASCO/NCCN: ALT > 5x ULN adalah Grade 3 Immune-Related Adverse Event (irAE). Tatalaksana baku: Hold Pembrolizumab segera dan berikan kortikosteroid sistemik (Prednison 1-2 mg/kgBB/hari) sampai enzim turun ke Grade 1, baru pertimbangkan tapering perlahan selama 4-6 minggu."
        },
        {
            "id": "dq32",
            "category": "DILI - Kalkulasi & Pola Campuran",
            "question": "Ny. M (42 th, kandidiasis esofageal pada kemoterapi kanker payudara) mengonsumsi Flukonazol oral 200 mg/hari selama 18 hari. Pasien mengeluh sklera kuning dan urin cokelat gelap. Hasil lab: ALT 160 U/L (ULN: 35 U/L), AST 140 U/L (ULN: 35 U/L), ALP 260 U/L (ULN: 105 U/L), Bilirubin Total 3.2 mg/dL. Panel serologi hepatitis negatif. Berapakah nilai kalkulasi Rasio R pasien, klasifikasi fenotipe cedera hepar yang dialami, dan bagaimana pemantauan enzim GGT membantu mengonfirmasi keterlibatan sistem bilier?",
            "options": [
                {
                    "label": "A",
                    "text": "R = 0.95 (Kolestatik murni); kenaikan GGT membuktikan kegagalan pompa ekskresi kolesterol hepatosit basolateral tanpa disertai gangguan permeabilitas kanalikuli empedu parenkim hepar intrahepatik mikroskopis",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "R = 6.42 (Hepatoseluler murni); enzim GGT tidak memiliki signifikansi klinis pada evaluasi hepatotoksisitas antijamur azol karena GGT murni disintesis eksklusif oleh jaringan osteoblas korteks tulang pipa",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "R = 4.85 (Hepatoseluler fokal); kenaikan GGT menunjukkan regenerasi sel hepar yang berlangsung cepat sehingga penghentian flukonazol tidak diperlukan asalkan dosis diturunkan separuh dari regimen awal",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "R = 1.84 (Pola Kolestatik / Campuran R < 2); kenaikan paralel ALP dan GGT mengonfirmasi asal hepatobilier (bukan tulang), menandakan cedera kanalikular duktus empedu akibat toksisitas idiosinkratik azol",
                    "correct": true
                }
            ],
            "explanation": "Formula R-ratio = (ALT/ULN) / (ALP/ULN) = (160/35) / (260/105) = 4.57 / 2.48 = 1.84. Nilai R <= 2 mengindikasikan pola kolestatik (atau batas campuran bila R mendekati 2). Pengukuran Gamma-Glutamyl Transferase (GGT) sangat krusial: ALP dapat meningkat dari sumber non-hepatik (tulang, plasenta, usus). Kenaikan paralel antara ALP dan GGT mengonfirmasi secara spesifik bahwa peningkatan ALP murni berasal dari cedera epitel traktus biliaris/kanalikuli hepar. Flukonazol dapat memicu cedera kolestatik idiosinkratik akibat disfungsi BSEP (Bile Salt Export Pump)."
        },
        {
            "id": "dq33",
            "category": "DILI - Kalkulasi & Acute Liver Failure",
            "question": "Tn. C (38 th) menjalani pengobatan onikomikosis kuku kaki dengan tablet Terbinafin 250 mg 1x/hari selama 6 minggu. Pasien datang ke IGD dengan ikterus berat, asteriksis (flapping tremor), dan disorientasi waktu (ensefalopati hepatik grade II). Lab: ALT 620 U/L (ULN: 40 U/L), AST 580 U/L (ULN: 35 U/L), Bilirubin Total 14.8 mg/dL, ALP 310 U/L (ULN: 110 U/L), Albumin 2.6 g/dL, INR melonjak menjadi 2.4 (baseline: 1.0). Mengapa kondisi Tn. C diklasifikasikan sebagai Severe DILI / Acute Liver Failure (ALF) dan parameter prognosis kritis apa yang mengarahkan rujukan segera untuk evaluasi transplantasi hepar?",
            "options": [
                {
                    "label": "A",
                    "text": "Memenuhi kriteria ALF (koagulopati INR >= 1.5 dan ensefalopati hepatik dalam < 24-26 minggu tanpa sirosis sebelumnya); skor MELD tinggi (> 25-30) mewajibkan rujukan darurat ke pusat transplantasi hepar",
                    "correct": true
                },
                {
                    "label": "B",
                    "text": "Merupakan kolestasis jinak reversibel karena Terbinafin hanya mengikat keratin kuku; kenaikan INR 2.4 murni disebabkan deplesi vitamin K enterik yang cukup dikoreksi dengan fitomenadion injeksi intramuskular",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Memenuhi kriteria hepatitis toksik ringan karena ALT masih di bawah 20x ULN; ensefalopati timbul akibat dehidrasi hipernatremik ringan yang dapat pulih sempurna dengan rehidrasi dekstrosa 5% intravena lambat",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Kondisi pasien murni disebabkan oleh reaksi hipersensitivitas tipe 1 anafilaktik terlambat; pemberian antihistamin oral dan infus albumin cukup untuk menormalkan INR tanpa perlu konsultasi ke dokter spesialis",
                    "correct": false
                }
            ],
            "explanation": "Definisi Konsensus AASLD untuk Acute Liver Failure (ALF): Adanya bukti cedera hepar akut (peningkatan transaminase & hiperbilirubinemia), koagulopati signifikan dengan INR >= 1.5, dan derajat ensefalopati hepatik apa pun pada pasien tanpa sirosis hati yang mendasari sebelumnya dengan durasi < 24-26 minggu. Terbinafin dikenal dapat memicu DILI berat (hepatitis kolestatik/nekrosis hepatoseluler fulminan hingga Vanishing Bile Duct Syndrome). INR 2.4 dan ensefalopati Grade II menandakan kolaps sintesis hepar masif dengan mortalitas tinggi (> 50-80% tanpa transplantasi). Pasien harus segera dirujuk ke Unit Perawatan Intensif Hepatologi dan dievaluasi untuk transplantasi hepar (berdasarkan King's College Criteria / skor MELD)."
        },
        {
            "id": "dq34",
            "category": "DILI - Kalkulasi & Rhabdomyolysis",
            "question": "Tn. Y (60 th, dislipidemia berat dan penyakit jantung koroner) rutin mengonsumsi Atorvastatin 40 mg malam hari. Dua minggu lalu, dokter menambahkan Gemfibrozil 600 mg 2x/hari karena trigliserida 650 mg/dL. Pasien datang kontrol dengan keluhan nyeri otot paha dan betis hebat (mialgia difus) serta urin berwarna merah kecokelatan gelap. Hasil lab darah: AST melonjak ke 480 U/L (ULN: 35 U/L), tetapi ALT hanya 55 U/L (ULN: 40 U/L, rasio AST/ALT = 8.7), Total Bilirubin 0.8 mg/dL, ALP 85 U/L. Pemeriksaan Creatine Kinase (CK) total mencapai 28.500 U/L (ULN: 190 U/L). Bagaimana apoteker menganalisis temuan laboratorium tersebut (DILI sejati vs Pseudo-DILI akibat Rhabdomyolysis) dan mekanisme interaksinya?",
            "options": [
                {
                    "label": "A",
                    "text": "Merupakan DILI hepatoseluler sejati akibat hepatotoksisitas langsung Atorvastatin; AST disintesis murni oleh membran hepatosit sentrilobular hepar sedangkan enzim CK mencerminkan peradangan parenkim hati",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Merupakan Pseudo-DILI akibat Rhabdomyolysis masif; AST berlimpah di jaringan otot rangka sehingga nekrosis miosit melepas AST dan CK ekstrem; Gemfibrozil menghambat glukuronidasi statin memicu miopati",
                    "correct": true
                },
                {
                    "label": "C",
                    "text": "Merupakan DILI kolestatik fulminan sekunder; kombinasi obat memicu presipitasi asam empedu di hepatosit periportal yang menyebabkan kebocoran enzim aminotransferase tanpa merusak struktur serat otot lurik",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Merupakan reaksi alergi sistemik tipe 4 granulomatosa; gemfibrozil bertindak sebagai hapten yang merangsang osteoblas memproduksi enzim AST non-spesifik tanpa pengaruh signifikan terhadap otot rangka tubuh",
                    "correct": false
                }
            ],
            "explanation": "Analisis Diferensial Pseudo-DILI vs DILI: ALT (Alanine Aminotransferase) sangat spesifik untuk hepatosit hepar. Sebaliknya, AST (Aspartate Aminotransferase) ditemukan dalam jumlah melimpah di hepatosit, otot rangka (skeletal muscle), miokardium, dan eritrosit. Pada rhabdomyolysis masif (nekrosis sel otot lurik), lisis miosit melepaskan sejumlah besar mioglobin, CK (> 10.000 U/L), dan AST ke dalam sirkulasi darah, menghasilkan rasio AST/ALT yang sangat timpang (AST >> ALT, rasio > 5-10:1). Kenaikan AST pada Tn. Y bukan berasal dari kerusakan hepar, melainkan penanda cedera otot berat. Mekanisme interaksi: Gemfibrozil menghambat OATP1B1 (transporter ambilan hepar) dan glukuronidasi statin via CYP2C8/UGT1A1/3, melipatgandakan AUC statin 3-6 kali lipat sehingga memicu rhabdomyolysis fatal."
        },
        {
            "id": "dq35",
            "category": "DILI - Kalkulasi & Hy's Law Trias",
            "question": "Kriteria Hy's Law (Hukum Hy Zimmerman) adalah prediktor emas terkuat dari mortalitas DILI berat. Pada pedoman FDA Guidance for Industry (Drug-Induced Liver Injury: Premarketing Clinical Evaluation), bagaimana rincian 3 komponen baku Hy's Law yang secara spesifik memprediksi risiko kematian atau kebutuhan transplantasi hepar hingga >= 10-50%?",
            "options": [
                {
                    "label": "A",
                    "text": "Peningkatan ALP >= 5x ULN, kenaikan transaminase ALT >= 2x ULN, dan trombositopenia berat < 50.000/mcL dengan adanya ascites refrakter pada pemeriksaan penunjang radiologi ultrasonografi abdomen",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Peningkatan AST/ALT rasio > 2.0, penurunan serum albumin di bawah 2.0 g/dL, dan kadar amonia darah di atas 150 mcg/dL tanpa adanya peningkatan kadar bilirubin direk maupun indirek dalam sirkulasi plasma",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Cedera hepatoseluler (ALT/AST >= 3x ULN), insufisiensi klirens bilirubin (Total Bilirubin >= 2x ULN) tanpa kolestasis awal (ALP < 2x ULN), serta ketiadaan penyebab alternatif lain seperti virus hepatitis",
                    "correct": true
                },
                {
                    "label": "D",
                    "text": "Peningkatan GGT >= 10x ULN, bilirubin total normal di bawah 1.0 mg/dL, dan pemanjangan waktu protrombin INR > 3.0 yang timbul dalam kurun waktu kurang dari 24 jam pascapemberian antibiotik intravena",
                    "correct": false
                }
            ],
            "explanation": "Komponen Klasik Trias Hy's Law (FDA Guidance 2009): 1. Kerusakan Hepatoseluler: Peningkatan ALT atau AST >= 3x ULN. 2. Kegagalan Fungsi Eliminasi/Klirens Hepar: Peningkatan Total Bilirubin (TBil) >= 2x ULN, tanpa adanya bukti sindrom Gilbert atau hemolisis. 3. Tidak Ada Kolestasis Signifikan di Awal: ALP < 2x ULN (atau R-ratio >= 5, untuk memastikan cedera bukan sekadar kolestasis obstruktif mekanik). 4. Eksklusi Penyebab Alternatif: Tidak ada infeksi virus hepatitis akut (A, B, C, E), iskemia hepar, atau penyakit bilier. Ketika kriteria Hy's Law terpenuhi pada uji klinis atau praktik, risiko kematian pasien akibat gagal hati akut mencapai 10% hingga 50% ('Hy's Law carries a grave prognosis')."
        },
        {
            "id": "dq36",
            "category": "DILI - Mekanisme & Amiodaron",
            "question": "Tn. D (68 th) dengan fibrilasi atrium kronis telah mengonsumsi Amiodaron oral 200 mg 1x/hari selama 18 bulan. Pasien mengeluh berat badan turun, anoreksia, dan perut kanan atas terasa tidak nyaman. Biopsi hepar menunjukkan gambaran fosfolipidosis lisosomal mikrovesikular dan steatohepatitis dengan Mallory-Denk bodies yang menyerupai Alcoholic Steatohepatitis (Pseudo-Alcoholic Hepatitis), padahal pasien tidak pernah meminum alkohol. Apa mekanisme fisikokimiawi dan biokimiawi Amiodaron yang mendasari akumulasi toksisitas hepar kronis tersebut?",
            "options": [
                {
                    "label": "A",
                    "text": "Amiodaron membentuk metabolit elektrofilik yang menginaktivasi enzim glukuronil transferase hepar sehingga asam glukuronat menumpuk di membran kanalikuli membentuk presipitat amorf kristal iodium",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Amiodaron menstimulasi sintesis asam empedu litogenik yang memicu perforasi mukosa vesika fellea disertai kebocoran kolesterol ester ke dalam stroma jaringan ikat longgar hepar lobus kuadratus medial",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Amiodaron memicu apoptosis sel endotel sinusoid hepar melalui induksi antibodi sitotoksik anti-kardiomiosit yang bereaksi silang terhadap antigen membran hepatosit zona 1 periportal asinus asinar hepar",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Amiodaron adalah senyawa lipofilik amfifilik kationik dengan waktu paruh sangat panjang (> 50 hari) yang menghambat fosfolipase lisosom dan beta-oksidasi asam lemak mitokondria memicu steatohepatitis kronis",
                    "correct": true
                }
            ],
            "explanation": "Amiodaron adalah molekul amfifilik kationik yang sangat lipofilik dan mengandung dua atom iodin, dengan volume distribusi masif dan waktu paruh eliminasi sangat panjang (t1/2 30-100 hari). Obat ini berpenetrasi dan terakumulasi di dalam lisosom dan mitokondria hepatosit, menghambat enzim fosfolipase lisosom (memicu Phospholipidosis dengan gambaran lamellar bodies 'inclusion bodies') serta menghambat rantai transpor elektron mitokondria dan beta-oksidasi asam lemak. Hal ini memicu akumulasi trigliserida, pembentukan radikal bebas (ROS), nekrosis hepatosit, dan fibrosis progresif dengan histopatologi identik dengan Alcoholic Hepatitis (Pseudo-Alcoholic Steatohepatitis). Sekitar 15-50% pasien amiodaron jangka panjang mengalami elevasi transaminase asimtomatik, dan sebagian kecil berkembang menjadi sirosis hepar."
        },
        {
            "id": "dq37",
            "category": "DILI - Mekanisme & Alopurinol AHS",
            "question": "Tn. M (52 th, etnis Tionghoa-Indonesia) dengan artritis gout kronis dan gangguan ginjal (CrCl 40 mL/menit) baru memulai terapi Alopurinol 300 mg/hari. Pada minggu ke-4, pasien dirawat darurat dengan demam tinggi (39 °C), ruam eksantema morbiliform difus mengelupas di badan dan wajah, limfadenopati generalisata, dan leukositosis dengan eosinofilia absolut 18% (1.800/mcL). Lab hepar: ALT 520 U/L, AST 460 U/L, Bilirubin Total 4.2 mg/dL. Pasien didiagnosis DRESS Syndrome / Allopurinol Hypersensitivity Syndrome (AHS). Faktor farmakogenomik dan farmakokinetik apa yang menjadi predisposisi utama terjadinya reaksi imunotoksik mematikan ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Alel HLA-B*58:01 memicu presentasi antigenik metabolit Oksipurinol ke sel T sitotoksik; penurunan klirens ginjal memicu akumulasi toksik Oksipurinol terutama bila dosis awal tidak dititrasi rendah",
                    "correct": true
                },
                {
                    "label": "B",
                    "text": "Alel HLA-B*15:02 berikatan langsung dengan asam urat membentuk kompleks imun vasoaktif di ruang Disse; kerusakan hepar murni disebabkan oleh pengendapan kristal monosodium urat di parenkim hepatosit",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Polimorfisme genetik enzim CYP2C9 slow metabolizer menurunkan konversi alopurinol menjadi metabolit inaktif; konsentrasi alopurinol utuh yang tinggi secara langsung melisiskan membran lipid lisosom hepar",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Defisiensi enzim Glucose-6-Phosphate Dehydrogenase (G6PD) eritrosit memicu lisis sel darah merah masif yang menyebabkan deposisi hemosiderin di mikrosirkulasi sinusoid hepar memicu nekrosis iskemik akut",
                    "correct": false
                }
            ],
            "explanation": "Allopurinol Hypersensitivity Syndrome (AHS) / DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms) memiliki mortalitas hingga 20-25%. Dua faktor penentu utama: 1. Faktor Farmakogenomik: Pembawa alel HLA-B*58:01 (sangat prevalen pada populasi Asia: Tionghoa, Korea, Thailand hingga 10-15%) memiliki risiko relatif AHS hingga ratusan kali lipat. Molekul HLA-B*58:01 secara spesifik menyajikan metabolit Oksipurinol ke reseptor sel T (TCR), memicu aktivasi imun adaptif sel T sitotoksik masif terhadap keratinosit dan hepatosit. 2. Faktor Farmakokinetik: Oksipurinol dieliminasi via ginjal. Pada gangguan fungsi ginjal, klirens oksipurinol turun drastis, memicu akumulasi supraterapeutik bila dosis awal alopurinol langsung diberikan 300 mg tanpa penyesuaian CrCl. Pedoman ACR merekomendasikan skrining HLA-B*58:01 dan memulai alopurinol dosis rendah (<= 100 mg/hari atau 50 mg pada CKD)."
        },
        {
            "id": "dq38",
            "category": "DILI - Mekanisme & Metotreksat",
            "question": "Ny. L (48 th) dengan Psoriasis Vulgaris berat telah mengonsumsi Metotreksat oral dosis mingguan (15 mg sekali seminggu) selama 4 tahun dengan total dosis kumulatif mencapai 3.200 mg (3.2 gram). Pasien tidak memiliki keluhan klinis dan tes enzim ALT/AST rutin selalu dalam batas normal atau hanya sedikit berfluktuasi (1.2x ULN). Mengapa pemantauan enzim transaminase (ALT/AST) saja TIDAK CUKUP untuk mendeteksi toksisitas hepar kronis Metotreksat, dan modalitas diagnostik non-invasif apa yang direkomendasikan pedoman dermatologi modern untuk skrining fibrosis hepar?",
            "options": [
                {
                    "label": "A",
                    "text": "Enzim transaminase tidak disintesis oleh sel hati pasien psoriasis; modalitas skrining baku adalah laparoskopi eksploratif berkala dan pemeriksaan histopatologi reseksi baji parenkim hepar tahunan",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Fibrosis dan sirosis hepar akibat metotreksat dapat berkembang secara tersembunyi tanpa lonjakan ALT/AST; modalitas modern adalah Transient Elastography (FibroScan) dan biomarker serum PIIINP rutin",
                    "correct": true
                },
                {
                    "label": "C",
                    "text": "Metotreksat menghambat pelepasan enzim ALT ke sirkulasi darah; modalitas yang direkomendasikan adalah CT-scan abdomen dengan kontras iodium dosis ganda setiap kali dosis kumulatif bertambah 500 mg",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Toksisitas hepar metotreksat hanya bermanifestasi sebagai karsinoma hepatoseluler ganas; skrining baku adalah pengukuran kadar Alfa-Fetoprotein (AFP) serum dan biopsi hepar perkutan setiap 6 bulan sekali",
                    "correct": false
                }
            ],
            "explanation": "Karakteristik Toksisitas Kronis Metotreksat (MTX Hepatotoxicity): Metotreksat memicu penumpukan poliglutamat intraseluler di sel stelata hepar (Ito cells), merangsang sintesis kolagen dan fibrosis hepar yang berjalan perlahan dan sering kali 'silent' (tanpa disertai peningkatan ALT/AST yang bermakna). Pasien dapat berkembang menjadi fibrosis tingkat lanjut atau sirosis meskipun fungsi hepar serial normal. Dosis kumulatif > 1.5 - 3.0 gram merupakan faktor risiko signifikan. Pedoman modern menggantikan biopsi hepar invasif rutin dengan modalitas non-invasif: (1) Transient Elastography (FibroScan) untuk mengukur kekakuan parenkim hepar (liver stiffness), dan (2) Biomarker serum Aminoterminal Propeptide of Type III Procollagen (PIIINP) serial."
        },
        {
            "id": "dq39",
            "category": "DILI - Mekanisme & Steroid Anabolik",
            "question": "Tn. R (27 th, binaragawan) menggunakan Steroid Anabolik Androgenik (AAS) oral turunan 17-alpha-alkilasi (Oksimetolon dan Stanozolol) dosis supraterapeutik selama 8 bulan berturut-turut untuk pembentukan massa otot ekstrem. Pasien dilarikan ke rumah sakit karena nyeri abdomen akut mendadak dan syok hemoragik (TD 70/40 mmHg, Hb anjlok ke 6.2 g/dL). CT-Scan abdomen darurat menunjukkan ruptur kista vaskular intrahepatik multipel berisi darah (Peliosis Hepatis) disertai hemoperitoneum masif. Apa korelasi struktur kimia 17-alpha-alkilasi steroid terhadap toksisitas mikrovaskular sinusoid hepar tersebut?",
            "options": [
                {
                    "label": "A",
                    "text": "Gugus 17-alpha memicu hipertrofi duktus biliaris kanalikular sehingga terjadi ruptur mekanik percabangan vena porta hepar akibat kompresi massa jaringan ikat fibrosa kolagen intrahepatik konsentris",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Gugus 17-alpha bereaksi dengan heparin endogen memicu lisis fibrinolisis lokal masif yang melarutkan dinding endotel kandung empedu sehingga darah arteri hepatika merembes masuk ke rongga peritoneum",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Substitusi 17-alpha-alkilasi mencegah metabolisme lintas pertama di hepar, memicu akumulasi toksik pada endotel sinusoid hepar yang merusak barier mikrosirkulasi hingga terbentuk kista darah Peliosis Hepatis",
                    "correct": true
                },
                {
                    "label": "D",
                    "text": "Gugus 17-alpha menstimulasi sekresi hormon gastrin berlebih yang memicu perforasi ulkus lambung perforata yang mengikis kapsula Glisson hepar lobus sinistra secara langsung dari rongga intraperitoneal",
                    "correct": false
                }
            ],
            "explanation": "Steroid anabolik androgenik (AAS) turunan 17-alpha-alkilasi (cth: Oksimetolon, Metandienon, Stanozolol) dirancang dengan gugus alkil pada posisi C-17 untuk menghambat inaktivasi metabolisme lintas pertama (first-pass hepatic metabolism) sehingga bioavailabilitas oralnya tinggi. Namun, modifikasi struktur ini memberikan beban hepatotoksisitas mikrovaskular yang sangat tinggi: obat merusak endotelium sinusoid hepar dan menghambat tonus vaskular mikrosirkulasi, menyebabkan dilatasi kistik kavitas berisi darah di parenkim hepar (Peliosis Hepatis) serta adenoma hepar. Kista peliosis berdinding rapuh dan dapat mengalami ruptur spontan memicu hemoperitoneum masif dan syok hipovolemik fatal."
        },
        {
            "id": "dq40",
            "category": "DILI - Mekanisme & Nevirapin",
            "question": "Ny. W (31 th, terdiagnosis infeksi HIV-1, CD4 baseline 380 sel/mcL) memulai terapi antiretroviral (ARV) lini pertama yang mengandung Nevirapin (NVP 200 mg 1x/hari fase lead-in). Pada hari ke-12, pasien mengalami demam tinggi, ruam makulopapular eritematosa konfluens di dada dan lengan, mual berat, dan sklera ikterik. Hasil lab: ALT 490 U/L (ULN: 35 U/L), AST 410 U/L, Bilirubin Total 3.8 mg/dL. Mengapa wanita dengan hitung sel CD4 > 250 sel/mcL memiliki risiko hepatotoksisitas hipersensitivitas Nevirapin yang paling tinggi, dan bagaimana polimorfisme CYP2B6 mempengaruhinya?",
            "options": [
                {
                    "label": "A",
                    "text": "Sel CD4 tinggi memicu pembentukan batu pigmen kalsium bilirubinat di ampula Vater; Nevirapin menghambat peristaltik sfingter Oddi sehingga terjadi refluks getah pankreas ke dalam parenkim asinus hepar",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Sel CD4 > 250 sel/mcL merangsang sekresi asam lambung berlebih yang menguraikan Nevirapin menjadi asam nitrat pekat di lumen duodenum sehingga mukosa hepar mengalami nekrosis kaustik koagulatif difus",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Nevirapin diabsorbsi secara selektif oleh limfosit CD4 membentuk kristal intraseluler yang menyumbat venula porta hepar; kondisi ini tidak berhubungan dengan aktivitas enzim sitokrom hepar maternal",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Tingkat imunitas pejamu yang kuat (CD4 > 250) memperantarai reaksi hipersensitivitas imun adaptif seluler; polimorfisme CYP2B6 Slow Metabolizer melipatgandakan kadar serum Nevirapin memperberat imunosensitisasi",
                    "correct": true
                }
            ],
            "explanation": "Hepatotoksisitas Nevirapin (NVP) terjadi melalui dua mekanisme berbeda: 1. Reaksi Imunologik / Alergi Akut (Immune-Mediated Hypersensitivity): Sangat berkaitan erat dengan kompetensi imun pejamu. Wanita dengan CD4 > 250 sel/mcL (dan pria dengan CD4 > 400 sel/mcL) memiliki risiko hepatotoksisitas fulminan dan sindrom DRESS/Stevens-Johnson hingga 12 kali lipat lebih tinggi dibanding pasien dengan CD4 rendah, karena sistem imun sel T adaptif masih sangat reaktif mengenali neoantigen hapten metabolit Nevirapin (12-hidroksi-nevirapin). 2. Farmakogenomik CYP2B6: Nevirapin dimetabolisme oleh CYP2B6. Individu pembawa alel polimorfisme CYP2B6*6 (Slow Metabolizer) memiliki klirens NVP yang rendah, memicu lonjakan konsentrasi plasma obat yang memicu sensitisasi imun masif. Pedoman WHO/Kemenkes kontraindikasi inisiasi Nevirapin pada wanita dengan CD4 > 250 sel/mcL."
        },
        {
            "id": "dq41",
            "category": "DILI - OAT & Sirosis Terkompensasi",
            "question": "Tn. K (50 th) dengan riwayat Sirosis Hati Terkompensasi (Child-Pugh Kelas A, skor 6) didiagnosis menderita TB Paru BTA positif aktif. Mengingat tiga dari empat obat lini pertama TB (Isoniazid, Rifampisin, Pirazinamid) bersifat hepatotoksik, dokter meminta rekomendasi apoteker klinis mengenai pemilihan regimen paduan OAT yang paling aman untuk meminimalkan risiko dekompensasi gagal hati.",
            "options": [
                {
                    "label": "A",
                    "text": "Hindari Pirazinamid (OAT paling hepatotoksik); gunakan regimen dengan 2 obat hepatotoksik (2 HRE / 7 HR) atau regimen 1 obat hepatotoksik bila sirosis berat (2 SHE / 10 HE) disertai pemantauan LFT ketat",
                    "correct": true
                },
                {
                    "label": "B",
                    "text": "Seluruh obat hepatotoksik harus diberikan bersamaan dengan dosis ganda (4KDT FDC 6 tablet/hari) untuk memperpendek durasi terapi TB menjadi hanya 2 bulan guna meminimalisasi durasi paparan toksisitas hepar",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Ganti seluruh paduan OAT lini pertama dengan monoterapi Pirazinamid dosis tinggi 40 mg/kgBB karena pirazinamid adalah bakterisidal tercepat yang terbukti secara klinis memiliki klirens eksklusif via ginjal",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Tunda pengobatan TB selama minimal 3 tahun hingga sirosis hati pasien sembuh total; pasien cukup diberikan multivitamin vitamin B kompleks dan asam folat untuk mencegah replikasi basil Mycobacterium TB",
                    "correct": false
                }
            ],
            "explanation": "Hierarki Hepatotoksisitas OAT: Pirazinamid (Z) >> Isoniazid (H) > Rifampisin (R). Pirazinamid adalah obat yang paling hepatotoksik dan memicu nekrosis hepatoseluler ireversibel berat yang sulit diprediksi. Pedoman ATS/CDC/IDSA dan Kemenkes RI menetapkan aturan pemilihan regimen OAT pada pasien penyakit hati kronis / sirosis: 1. Penyakit hati stabil / Child-Pugh A: Regimen 2 obat hepatotoksik tanpa Pirazinamid: 2 HRE / 7 HR (durasi total 9 bulan). 2. Penyakit hati yang lebih berat / Child-Pugh B: Regimen 1 obat hepatotoksik: 2 SHE / 10 HE (durasi total 12 bulan) atau 9 HRE. 3. Penyakit hati dekompensasi berat / Child-Pugh C: Regimen tanpa obat hepatotoksik sama sekali: Golongan Fluorokuinolon (Levofloksasin) + Etambutol + Aminoglikosida (Streptomisin) + Sikloserin selama 18-24 bulan."
        },
        {
            "id": "dq42",
            "category": "DILI - OAT & Rechallenge Protokol",
            "question": "Ny. B (45 th) mengalami Drug-Induced Liver Injury berat (ALT 550 U/L, ikterik positif, Bilirubin Total 4.5 mg/dL) pada minggu ke-3 terapi 4KDT (RHZE). Seluruh OAT segera dihentikan dokter. Dua minggu kemudian, gejala klinis teratasi sempurna, ALT turun ke 45 U/L (normal), dan Bilirubin Total 0.9 mg/dL. Dokter berencana melakukan Rechallenge (uji tantang kembali) OAT secara bertahap untuk melanjutkan pengobatan TB pasien. Berdasarkan konsensus ATS dan pedoman nasional TB, bagaimana urutan dan prinsip rechallenge OAT yang benar serta obat apa yang TIDAK BOLEH di-rechallenge bila DILI disertai ikterus klinis?",
            "options": [
                {
                    "label": "A",
                    "text": "Rechallenge dilakukan sekaligus dengan dosis penuh FDC 4KDT dalam 1 hari; bila timbul mual, berikan antiemetik ondansetron tanpa perlu memeriksa ulang enzim transaminase dan fungsi koagulasi darah hepar",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Rechallenge dilakukan bertahap satu per satu dosis titrasi: Rifampisin dahulu (paling jarang nekrosis), lalu Isoniazid; Pirazinamid TIDAK BOLEH di-rechallenge bila DILI disertai ikterus klinis (Hys Law)",
                    "correct": true
                },
                {
                    "label": "C",
                    "text": "Pirazinamid harus di-rechallenge pertama kali dengan dosis tiga kali lipat dosis lazim untuk membuktikan toleransi imun hepar; Rifampisin dan Isoniazid tidak perlu diberikan kembali dalam regimen terapi",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Rechallenge diawali dengan kombinasi Isoniazid dan Pirazinamid dosis maksimal selama 7 hari berturut-turut tanpa jeda pemantauan laboratorium; Rifampisin diganti permanen dengan antibiotik eritromisin oral",
                    "correct": false
                }
            ],
            "explanation": "Protokol Rechallenge OAT (ATS/British Thoracic Society/WHO): Rechallenge hanya boleh dimulai setelah LFT kembali normal (ALT < 2x ULN dan Bilirubin normal). Obat diperkenalkan satu per satu dengan jeda minimal 3-7 hari disertai pemeriksaan serial LFT: 1. Rifampisin diperkenalkan pertama (dosis rendah 50-150 mg -> naik ke dosis penuh 450-600 mg). Rifampisin dipilih pertama karena merupakan bakterisidal terpenting untuk mencegah resistensi, dan mekanisme toksisitasnya lebih sering hiperbilirubinemia transien non-nekrotik. 2. Isoniazid diperkenalkan kedua (50 mg -> naik ke 300 mg). 3. Pirazinamid: Jika DILI sebelumnya parah (disertai ikterus / Bilirubin > 2 mg/dL / memenuhi Hy's Law), Pirazinamid KONTRAINDIKASI MUTLAK untuk di-rechallenge (PERMANENTLY DISCONTINUED)! Rechallenge pirazinamid pasca DILI berat berisiko memicu nekrosis fulminan fatal berulang. Pasien diteruskan dengan regimen 2HR-E / 7HR (9 bulan)."
        },
        {
            "id": "dq43",
            "category": "DILI - OAT & Parasetamol Late NAC",
            "question": "Tn. A (24 th) dibawa ke IGD 28 jam setelah menelan 40 tablet Parasetamol 500 mg (total 20 gram) dalam percobaan bunuh diri. Pasien tampak ikterik, muntah darah (hematemesis), nyeri perut kuadran kanan atas hebat, dan letargis. Lab: ALT 6.800 U/L, AST 7.200 U/L, Bilirubin Total 6.5 mg/dL, INR 3.2, Asidosis Laktat (laktat 5.8 mmol/L, pH darah 7.22). Garis Rumack-Matthew nomogram sudah tidak dapat diplot karena paparan > 24 jam. Apakah N-Asetilsistein (NAC) intravena masih memiliki indikasi klinis dan efikasi terapeutik pada presentasi overdosis parasetamol fase lambat (late presentation > 24 jam) ini?",
            "options": [
                {
                    "label": "A",
                    "text": "NAC tidak lagi efektif dan mutlak dikontraindikasikan bila > 24 jam karena residu asetilsistein akan berikatan dengan asam laktat darah yang memperparah asidosis metabolik dan memicu henti jantung mendadak",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "NAC hanya efektif bila diberikan dalam 4 jam pertama; pada fase lambat > 24 jam satu-satunya terapi yang diakui secara medis adalah hemodialisis arang aktif (charcoal hemoperfusion) kontinyu 72 jam non-stop",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "NAC TETAP DIINDIKASIKAN secara mutlak; selain regenerasi glutation, NAC fase lanjut bekerja memperbaiki mikrosirkulasi hepar, menghambat badai sitokin proinflamasi, dan menurunkan mortalitas gagal hati akut",
                    "correct": true
                },
                {
                    "label": "D",
                    "text": "NAC harus diganti dengan infus albumin 20% dan vitamin C megadosis 10 gram intravena; parasetamol fase lanjut telah bermutasi menjadi polimer amorf yang resisten terhadap gugus sulfhidril donor antioksidan",
                    "correct": false
                }
            ],
            "explanation": "Indikasi NAC pada Overdosis Parasetamol Fase Lanjut (> 24 jam) / Fulminant Hepatic Failure: Meskipun efikasi pencegahan hepatotoksisitas optimal dicapai jika NAC diberikan dalam 8-10 jam pertama, uji klinis acak seminal (Keays et al., BMJ) membuktikan bahwa pemberian NAC intravena pada pasien yang datang terlambat (> 16-24 jam) dengan gagal hati akut tetap MENURUNKAN MORTALITAS secara dramatis (menurunkan kematian dari ~50% ke ~35%). Mekanisme manfaat fase lanjut (pleiotropic non-antidotal effects): NAC bertindak sebagai antioksidan non-spesifik, scavenger radikal bebas (ROS), memperbaiki perfusi mikrosirkulasi mikrovaskular hepar via modulasi Nitric Oxide, meningkatkan transpor oksigen seluler, dan menekan pelepasan sitokin pro-inflamasi sistemik. Terapi NAC infus kontinyu diteruskan sampai ALT/AST membaik dan INR turun < 2.0."
        },
        {
            "id": "dq44",
            "category": "DILI - OAT & HILI Suplemen Herbal",
            "question": "Ny. T (39 th) mengonsumsi suplemen penurun berat badan herbal konsentrasi tinggi yang mengandung ekstrak Epigallocatechin gallate (EGCG) dari Green Tea Extract dan ekstrak daun Kratom (Mitragyna speciosa) yang dibeli secara daring. Setelah 6 minggu konsumsi, pasien mengalami pruritus hebat, sklera ikterik, dan urin pekat. Lab: ALT 410 U/L, ALP 520 U/L, Bilirubin Total 5.8 mg/dL. Serologi hepatitis A/B/C/E, ANA, dan USG hepar normal. Pasien didiagnosis Herbal and Dietary Supplement-Induced Liver Injury (HILI). Karakteristik epidemiologis dan tantangan farmakovigilans apa yang paling menonjol pada kasus HILI dibanding DILI obat konvensional?",
            "options": [
                {
                    "label": "A",
                    "text": "Produk herbal selalu terdaftar resmi di BPOM dengan uji klinis fase 3 lengkap sehingga identifikasi senyawa toksik dapat dilakukan seketika melalui nomor registrasi edar kemasan primer obat tradisional",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "HILI tidak pernah menimbulkan gagal hati akut karena tanaman herbal memiliki dinding sel selulosa yang menetralisir seluruh metabolit elektrofilik sebelum diserap oleh mikrovili vili mukosa usus halus",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Seluruh kasus HILI memiliki antidotum molekuler spesifik berupa ekstrak susu kedelai yang dapat mengikat racun fitofarmaka di sirkulasi enterohepatik tanpa memerlukan penghentian konsumsi suplemen herbal",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "HILI sering memiliki komposisi polisubstansi tak terstandarisasi, risiko kontaminasi logam berat/pestisida, kurangnya uji toksikologi praklinis, serta rendahnya pelaporan pasien karena persepsi palsu herbal aman",
                    "correct": true
                }
            ],
            "explanation": "Karakteristik HILI (Herbal and Dietary Supplement-Induced Liver Injury): Insidensi HILI melonjak pesat di seluruh dunia (mencapai 15-20% dari seluruh kasus DILI). Tantangan utama farmakovigilans: (1) Persepsi masyarakat yang salah bahwa produk alami/herbal pasti 100% aman ('natural fallacy'), sehingga pasien tidak melaporkan konsumsi suplemen kepada dokter/apoteker; (2) Komposisi multisubstansi yang tidak terstandarisasi (proprietary blends) dan sering mengandung zat hepatotoksik terdokumentasi (seperti EGCG dosis tinggi > 800 mg/hari yang merusak mitokondria hepatosit, Kratom, Garcinia cambogia, Usnic acid); (3) Risiko pemalsuan obat kimia sintetis (adulteration) serta kontaminasi logam berat (arsen, timbal) dan pestisida; (4) Penegakan diagnosis eksklusi yang menuntut pelaporan formal ke Farmakovigilans BPOM (Formulir Kuning MESO)."
        },
        {
            "id": "dq45",
            "category": "DILI - OAT & Gagal Hati Akut MARS",
            "question": "Tn. V (44 th) mengalami Gagal Hati Akut (ALF) non-asetaminofen akibat reaksi idiosinkratik obat antitiroid Propiltiourasil (PTU). Pasien mengalami ensefalopati hepatik grade III, koagulopati refrakter (INR 3.5), dan oliguria. Sembari menunggu alokasi donor transplantasi hepar (bridging therapy), tim ICU mendiskusikan penggunaan sistem pendukung hepar ekstrakorporeal seperti Molecular Adsorbent Recirculating System (MARS) atau Plasma Exchange (TPE). Apa prinsip biofisika eliminasi toksin pada sistem dialisis albumin hepar MARS / Plasma Exchange dan bagaimana perannya dalam tatalaksana ALF berat?",
            "options": [
                {
                    "label": "A",
                    "text": "MARS dan TPE mengeliminasi zat toksik lipofilik yang terikat kuat pada protein plasma (bilirubin, asam empedu, sitokin) yang tidak dapat dibersihkan oleh hemodialisis biasa, stabilkan hemodinamik pre-transplan",
                    "correct": true
                },
                {
                    "label": "B",
                    "text": "MARS bekerja dengan mengkristalkan amonia darah di dalam lumen kateter hemofiltrasi sehingga amonia mengendap menjadi kristal amonium fosfat padat yang dibuang bersama feses melalui gerakan peristaltik usus",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Plasma Exchange menyuntikkan enzim CYP2E1 murni sintetik ke dalam arteri hepatika untuk mempercepat regenerasi lobulus hati sentrilobular sehingga fungsi sintesis albumin pulih seketika dalam kurun waktu 1 jam",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "MARS secara biologis menggantikan seluruh fungsi metabolisme glikogenolisis dan biosintesis faktor pembekuan hepar secara mandiri tanpa memerlukan organ hepar asli maupun tindakan transplantasi ortotopik",
                    "correct": false
                }
            ],
            "explanation": "Prinsip Molecular Adsorbent Recirculating System (MARS) dan Therapeutic Plasma Exchange (TPE): Pada gagal hati akut (ALF), toksin-toksin metabolik endogen yang memicu ensefalopati dan toksisitas multi-organ (seperti Bilirubin, asam empedu hidrofobik, metabolit triptofan/amonia, sitokin pro-inflamasi TNF-alpha/IL-6) sebagian besar terikat kuat pada albumin plasma (> 90%). Hemodialisis konvensional hanya membersihkan zat hidrofilik kecil tak terikat protein. MARS menggunakan sirkuit dialisat albumin manusia 20% yang meregenerasi albumin melalui kolom arang aktif dan resin penukar anion untuk melepaskan toksin terikat protein. Uji klinis besar membuktikan TPE (Plasmaferesis) volume tinggi menurunkan sitokin inflamasi, memperbaiki koagulopati dan hemodinamik sistemik, serta memperpanjang kesintasan bebas transplantasi (transplant-free survival) sebagai jembatan menuju transplantasi hepar (bridging to liver transplantation)."
        },
        {
            "id": "dq46",
            "category": "DIKI - Hemodinamik & Kontras Radiologi",
            "question": "Tn. S (66 th, riwayat DM tipe 2 dan CKD Stage 3a dengan eGFR 48 mL/menit/1.73m²) dijadwalkan menjalani Percutaneous Coronary Intervention (PCI) elektif dengan injeksi Kontras Media Radiologi Teriodinasi (Iodinated Radiocontrast). Apoteker klinis diminta merancang protokol pencegahan Contrast-Associated Acute Kidney Injury (CA-AKI). Berdasarkan konsensus KDIGO dan ESC, strategi pencegahan apa yang memiliki bukti ilmiah standar emas terkuat untuk meminimalkan risiko nefropati kontras pada Tn. S?",
            "options": [
                {
                    "label": "A",
                    "text": "Restriksi cairan total selama 24 jam sebelum dan sesudah prosedur kateterisasi disertai pemberian furosemid intravena bolus 80 mg tepat sebelum injeksi kontras untuk mengeringkan nefron ginjal korteks",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Pre-hidrasi intravena kristaloid isotonik (NaCl 0.9% atau NaHCO3 1.4%) 1-1.5 mL/kg/jam selama 6-12 jam sebelum dan pascaprosedur, serta meminimalkan volume kontras media berosmolaritas rendah (LOCM/IOCM)",
                    "correct": true
                },
                {
                    "label": "C",
                    "text": "Pemberian profilaksis N-Asetilsistein oral dosis tinggi 2.400 mg tanpa hidrasi cairan intravena terbukti secara klinis superior menghilangkan seluruh risiko nekrosis tubuler akibat zat kontras angiografi",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Inisiasi manitol 20% infus kontinyu dikombinasikan dengan kandesartan dosis ganda untuk mendilatasi arteriol eferen agar kontras media cepat terdorong keluar dari kapiler glomerulus ke duktus pengumpul",
                    "correct": false
                }
            ],
            "explanation": "Patofisiologi Contrast-Induced AKI (CI-AKI / CA-AKI): Melibatkan vasokonstriksi medula ginjal berkepanjangan (hipoksia medula renalis) yang dipicu oleh pelepasan endotelin dan adenosin lokal, serta sitotoksisitas langsung zat kontras hiperosmolar terhadap sel epitel tubulus proksimal. Pedoman KDIGO dan ESC menegaskan bahwa HIDRASI INTRAVENA ISOTONIK ADADEKUAT (NaCl 0.9% atau Natrium Bikarbonat isotonik) adalah satu-satunya intervensi profilaksis yang terbukti secara kuat (Level 1A). Hidrasi bekerja dengan mengekspansi volume intravaskular, menekan sistem RAAS dan vasokonstriksi medula, meningkatkan aliran urin tubuler sehingga meminimalkan durasi kontak kontras dengan epitel nefron. Strategi pendamping: meminimalkan volume kontras (rasio Volume Kontras / eGFR < 2.0-3.0) dan menggunakan sediaan Iso-Osmolar (IOCM: Iodixanol) atau Low-Osmolar Contrast Media (LOCM). Penggunaan N-Asetilsistein (NAC) oral tidak lagi direkomendasikan sebagai terapi mandiri oleh pedoman terbaru (uji klinis PRESERVE membuktikan NAC tidak superior dibanding salin)."
        },
        {
            "id": "dq47",
            "category": "DIKI - Hemodinamik & Sirosis Asites",
            "question": "Tn. E (54 th) menderita Sirosis Hati Dekompensasi dengan asites refrakter dan edema perifer masif. Dokter meresepkan kombinasi diuretik Furosemid oral 40 mg dan Spironolakton oral 100 mg 1x/hari. Karena asites belum berkurang signifikan dalam 3 hari, keluarga menaikkan dosis Furosemid secara mandiri menjadi 120 mg/hari. Pada hari ke-6, pasien datang dengan lemas ekstrem, haus hebat, TD 85/50 mmHg, nadi 106x/m, dan volume urin anjlok menjadi < 200 mL/24 jam. Lab: SCr melonjak dari baseline 0.8 mg/dL menjadi 2.6 mg/dL, rasio BUN/SCr = 26:1. Bagaimana apoteker menganalisis kondisi Tn. E dalam membedakan Diuretic-Induced Prerenal AKI versus Hepatorenal Syndrome (HRS-AKI)?",
            "options": [
                {
                    "label": "A",
                    "text": "Tn. E menderita Sindrom Hepatorenal Tipe 1 ireversibel yang mewajibkan inisiasi hemodialisis cito darurat dan pemberian infus norepinefrin dosis tinggi tanpa perlu menghentikan regimen terapi diuretik",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Kenaikan SCr pasien murni disebabkan oleh nefrotoksisitas langsung spironolakton terhadap membran podosit glomerulus yang dapat dinormalkan seketika dengan pemberian suplemen kalium klorida oral dosis tinggi",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Merupakan Diuretic-Induced Prerenal AKI akibat overdiuresis; kriteria HRS menuntut kegagalan perbaikan fungsi ginjal pasca 48 jam penghentian diuretik dan ekspansi volume plasma dengan infus Albumin 1 g/kgBB",
                    "correct": true
                },
                {
                    "label": "D",
                    "text": "Kondisi pasien adalah Acute Tubular Necrosis nekrotik toksik akibat spironolakton; tatalaksana baku adalah pemberian furosemid infus kontinyu 40 mg/jam untuk memaksa epitel tubulus proksimal berkemih kembali",
                    "correct": false
                }
            ],
            "explanation": "Kriteria Diagnostik International Club of Ascites (ICA) untuk Hepatorenal Syndrome (HRS-AKI): HRS-AKI adalah diagnosis eksklusi pada pasien sirosis dengan asites yang mengalami AKI. Kriteria wajib ICA mensyaratkan: (1) Diagnosis sirosis dengan asites; (2) Diagnosis AKI menurut kriteria KDIGO; (3) TIDAK ADA RESPON PERBAIKAN FUNGSI GINJAL (SCr tidak turun) minimal 48 jam berturut-turut setelah PENGHENTIAN SELURUH DIURETIK dan EKSPANSI VOLUME PLASMA LENGKAP dengan Infus Human Albumin 1 g/kgBB/hari (maksimal 100 g/hari); (4) Tidak ada syok septik/hipovolemik yang sedang berlangsung; (5) Tidak ada paparan nefrotoksin baru; (6) Tidak ada kelainan struktural ginjal intrakortikal (proteinuria < 500 mg/hari, hematuria mikroskopik < 50 RBC/HPF). Pada Tn. E, lonjakan dosis Furosemid memicu deplesi volume intravaskular akut (Overdiuresis Prerenal AKI). Penanganan pertama: STOP seluruh diuretik seketika dan berikan ekspansi Albumin intravena. Jika fungsi ginjal membaik, itu adalah prerenal azotemia akibat diuretik, BUKAN HRS sejati."
        },
        {
            "id": "dq48",
            "category": "DIKI - Hemodinamik & Sindrom Lisis Tumor",
            "question": "An. P (9 th, Leukemia Limfoblastik Akut / ALL dengan hiperleukositosis 150.000/mcL dan massa tumor bulky) dijadwalkan memulai kemoterapi induksi. Apoteker onkologi anak mengidentifikasi pasien memiliki risiko sangat tinggi mengalami Sindrom Lisis Tumor (Tumor Lysis Syndrome / TLS). Empat jam pascakemoterapi, asam urat serum melonjak ke 14.5 mg/dL (ULN: 6.0), Kalium 6.2 mEq/L, Fosfat 7.8 mg/dL, dan Kalsium terionisasi turun ke 3.8 mg/dL (hipokalsemia). Pasien mulai mengalami oliguria dan SCr naik 2x lipat. Apa mekanisme biofisika terjadinya DIKI pada TLS dan mengapa Rasburikase intravena menjadi pilihan superior dibanding Alopurinol oral pada kasus krisis ini?",
            "options": [
                {
                    "label": "A",
                    "text": "TLS memicu lisis trombosit masif yang menyumbat arteri renalis principalis; Rasburikase bekerja mengaktifkan plasminogen endotel untuk melarutkan trombus fibrin di kapiler glomerulus ginjal secara lokal",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Asam urat menstimulasi pembentukan batu empedu kolesterol yang menekan ureter dextra; Rasburikase bekerja mengalkalisasi cairan empedu kanalikuli hepar tanpa mempengaruhi konsentrasi asam urat sirkulasi darah",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Alopurinol menguraikan asam urat menjadi kalsium karbonat tak larut; Rasburikase bekerja sebagai diuretik osmotik murni yang mempercepat pembersihan kristal natrium fosfat dari ruang tubulus kontortus proksimal",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Kristalisasi kristal asam urat dan kalsium fosfat menyumbat lumen tubulus ginjal; Rasburikase adalah enzim urat oksidase rekombinan yang mengonversi asam urat menjadi alantoin larut air dalam beberapa menit",
                    "correct": true
                }
            ],
            "explanation": "Patofisiologi Acute Kidney Injury pada Sindrom Lisis Tumor (TLS): Lisis masif sel blast leukemia melepaskan asam nukleat intraseluler dalam jumlah raksasa yang dikatabolisme menjadi asam urat. Pada urin yang asam (pH < 5.5), asam urat mengkristal di tubulus distal dan duktus kolektivus (Uric Acid Nephropathy). Selain itu, pelepasan fosfat intraseluler masif memicu presipitasi Kalsium-Fosfat di mikrosirkulasi ginjal (Nefrokalsinosis) bila produk Ca x P > 60 mg²/dL². Keunggulan Rasburikase: Alopurinol adalah inhibitor xantin oksidase yang HANYA MENCEGAH pembentukan asam urat baru tanpa memecah asam urat yang sudah beredar (membutuhkan waktu 2-3 hari untuk menurunkan kadar asam urat). Sebaliknya, Rasburikase (rekombinan Urate Oxidase) bekerja secara enzimatik memecah molekul asam urat yang sudah terbentuk menjadi ALANTOIN (senyawa yang 5-10 kali lipat lebih larut di air dibanding asam urat) dalam hitungan menit hingga jam, secara cepat membersihkan kristal intratubular dan memulihkan fungsi ginjal."
        },
        {
            "id": "dq49",
            "category": "DIKI - Hemodinamik & Rhabdomyolysis",
            "question": "Tn. B (58 th) ditemukan tergeletak tidak sadarkan diri di lantai kamarnya selama lebih dari 14 jam pasca stroke iskemik. Di IGD, pasien sadar parsial, mengeluh nyeri otot paha bilateral yang sangat bengkak dan keras (kompartemen tegang). Kateterisasi urin menghasilkan urin berwarna cokelat gelap kemerahan seperti minuman kola (tea-colored urine). Dipstick urin menunjukkan nilai 'Darah (Blood) Positif Kuat 4+' tetapi pada sedimen mikroskopik urin sentrifugasi TIDAK DITEMUKAN eritrosit utuh (RBC 0-1/HPF). Kreatinin serum 4.2 mg/dL, Kalium 6.8 mEq/L (hiperkalemia berat), dan Creatine Kinase (CK) total melonjak ke 85.000 U/L. Mengapa hasil dipstick urin positif darah palsu pada rhabdomyolysis dan apa pilar tatalaksana nefroprotektif utamanya?",
            "options": [
                {
                    "label": "A",
                    "text": "Reagen ortotolidin dipstick bereaksi silang dengan gugus hem Mioglobin urin; pilar terapi adalah hidrasi salin agresif target urin 200-300 mL/jam dan koreksi hiperkalemia darurat untuk mencegah henti jantung",
                    "correct": true
                },
                {
                    "label": "B",
                    "text": "Dipstick mendeteksi hemoglobin bebas akibat lisis eritrosit intravaskular masif di ginjal; pilar terapi adalah restriksi cairan ketat < 500 mL/24 jam dan pemberian kalium klorida intravena untuk pacu diuresis",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Urin berwarna cokelat akibat kebocoran bilirubin direk dari kandung empedu yang pecah; pilar terapi utama adalah transfusi packed red cells darurat 4 kantong dan injeksi intramuskular vitamin K1 fitomenadion",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Kondisi ini merupakan glomerulonefritis proliferatif kresentik difus; pilar terapi utama adalah pemberian metilprednisolon pulsatif 1 gram/hari selama 5 hari disertai pembatasan ketat pemberian cairan infus salin",
                    "correct": false
                }
            ],
            "explanation": "Patofisiologi Rhabdomyolysis-Induced AKI: Kompresi otot berkepanjangan (crush / prolonged immobilization) memicu iskemia miosit, robekan sarkolema, dan influks kalsium masif yang melisiskan sel otot lurik. Pelepasan isi intraseluler ke sirkulasi darah menghasilkan Mioglobinuria masif. Fenomena Dipstick: Reagen dipstick darah mendeteksi aktivitas peroksidase dari gugus heme. Mioglobin memiliki struktur cincin heme yang identik dengan hemoglobin, sehingga menghasilkan reaksi POSITIF PALSU UNTUK DARAH ('Pseudo-Hematuria') pada dipstick, padahal mikroskopik urin tidak mengandung sel darah merah utuh (RBC 0-1/HPF). Mekanisme Cedera Ginjal: (1) Presipitasi mioglobin bersama protein Tamm-Horsfall di tubulus distal diperparah oleh urin asam pekat (obstruksi silinder mioglobin); (2) Pelepasan besi bebas yang mengkatalisis reaksi Fenton memicu radikal bebas (ROS); (3) Vasokonstriksi arteriol aferen renalis. Pilar Terapi Utama: Resusitasi cairan kristaloid isotonik agresif (NaCl 0.9%) dengan target urin output 200-300 mL/jam, koreksi darurat hiperkalemia (kalsium glukonat, insulin+dekstrosa), dan alkalisasi urin dengan Natrium Bikarbonat bila pH urin < 6.5."
        },
        {
            "id": "dq50",
            "category": "DIKI - Hemodinamik & Anti-VEGF TMA",
            "question": "Ny. Z (52 th, adenokarsinoma kolon metastatik) telah menerima terapi target antibodi monoklonal Anti-VEGF Bevacizumab intravena 5 mg/kgBB setiap 2 minggu selama 4 bulan. Pasien datang kontrol dengan keluhan sakit kepala berdenyut, pembengkakan pada kedua kelopak mata dan pergelangan kaki. Pemeriksaan klinis: TD melonjak tinggi ke 180/110 mmHg (sebelumnya normotensif), Urinalisis: Proteinuria masif 3.8 g/24 jam (rentang nefrotik). Evaluasi apusan darah tepi menunjukkan adanya fragmen eritrosit terbelah (Schistocytes 2.5%), Trombosit anjlok ke 78.000/mcL, LDH melonjak ke 850 U/L, dan SCr naik dari 0.8 ke 1.9 mg/dL. Apa sindrom mikroangiopati ginjal spesifik yang diinduksi Bevacizumab pada Ny. Z dan mekanisme biologis VEGF di glomerulus yang terganggu?",
            "options": [
                {
                    "label": "A",
                    "text": "Nefritis interstisial granulomatosa akut; Bevacizumab menstimulasi infiltrasi neutrofil di ruang peritubular korteks sehingga terjadi ruptur membran basalis tubulus yang memicu kebocoran albumin masif",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Thrombotic Microangiopathy (TMA) glomerulus; penghambatan VEGF merusak komunikasi parakrin endotel-podosit, memicu lisis fenestrasi endotel kapiler, mikrotrombus intraluminal, hipertensi, dan proteinuria",
                    "correct": true
                },
                {
                    "label": "C",
                    "text": "Nekrosis papilaris ginjal obstruktif; antibodi bevacizumab mengendap di apeks piramid medula ginjal yang menyumbat aliran duktus Bellini sehingga terjadi iskemia vaskular dan sindrom nefrotik sekunder parah",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Nefropati kristal fosfat difus; bevacizumab berikatan dengan kalsium plasma membentuk garam amorf yang mengikis endotel kapiler glomerulus memicu hipertensi krisis dan destruksi mekanik lempeng podosit nefron",
                    "correct": false
                }
            ],
            "explanation": "Thrombotic Microangiopathy (TMA) Glomerulus akibat Inhibitor Jalur VEGF (Bevacizumab, Sunitinib, Axitinib): Di dalam glomerulus, sel podosit secara konstitutif mensekresi Vascular Endothelial Growth Factor (VEGF-A) yang bekerja secara parakrin melintasi membran basalis glomerulus (GBM) untuk berikatan dengan reseptor VEGFR-2 pada sel endotel kapiler glomerulus yang berdekatan. Sinyal VEGF ini mutlak vital untuk mempertahankan integritas fenestrasi endotel kapiler glomerulus, mencegah apoptosis endotel, dan merangsang produksi vasodilator lokal (NO dan prostasiklin). Blokade sistemik VEGF oleh Bevacizumab memutuskan sinyal kelangsungan hidup endotel -> sel endotel glomerulus membengkak dan terlepas (endotheliosis), memicu agregasi trombosit lokal dan pembentukan mikrotrombus fibrin di kapiler intraglomerular (Renal TMA). Manifestasi klinis: Hipertensi berat/krisis, proteinuria masif (sering derajat nefrotik), mikroangiopati hemolitik (anemia hemolitik mikroangiopatik dengan skistosit, trombositopenia, kenaikan LDH), dan AKI. Tatalaksana: Hentikan Bevacizumab segera, kendalikan TD dengan ACEI/ARB atau CCB."
        },
        {
            "id": "dq51",
            "category": "DIKI - Aminoglikosida & Amikasin PK/PD",
            "question": "Tn. U (65 th, BB 60 kg) dirawat di bangsal bedah dengan infeksi luka operasi intraabdominal akibat kuman Gram-negatif resisten multidrug (MDR Klebsiella pneumoniae yang sensitif terhadap Amikasin). Dokter meresepkan Amikasin IV dengan target terapi berbasis parameter farmakokinetik-farmakodinamik (PK/PD). Berdasarkan prinsip nefroproteksi dan efikasi antibakteri aminoglikosida, bagaimana strategi perancangan dosis Once-Daily Dosing (Extended-Interval Dosing) Amikasin, rasio parameter PK/PD target, dan batas kadar palung (trough concentration) yang aman?",
            "options": [
                {
                    "label": "A",
                    "text": "Dosis 5 mg/kgBB tiap 8 jam; target Cmax/MIC 2-3 kali; kadar trough harus dipertahankan tinggi di atas 10 mcg/mL sepanjang 24 jam untuk menjamin saturasi transporter megalin tubulus ginjal secara kontinyu",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Dosis 25 mg/kgBB tiap 6 jam via infus kontinyu 24 jam; target rasio AUC/MIC > 800; kadar trough tidak perlu dipantau karena amikasin dimetabolisme 100% oleh enzim sitokrom P450 hepar sebelum mencapai ginjal",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Dosis 15-20 mg/kgBB sekali sehari (interval 24-48 jam); target Cmax/MIC 8-10 kali untuk efikasi bakterisidal maksimal; kadar trough harus turun ke < 2.5-5 mcg/mL sebelum dosis berikutnya untuk nefroproteksi",
                    "correct": true
                },
                {
                    "label": "D",
                    "text": "Dosis 2.5 mg/kgBB tiap 12 jam; target waktu konsentrasi di atas MIC (T > MIC) > 70%; kadar trough dipantau stabil di rentang 8-10 mcg/mL untuk mencegah fenomena resistensi adaptif bakteri di ruang interstisial",
                    "correct": false
                }
            ],
            "explanation": "Prinsip PK/PD dan Nefroproteksi Amikasin: Aminoglikosida adalah antibiotik bakterisidal yang bergantung pada konsentrasi puncak (Concentration-Dependent Killing) dengan Post-Antibiotic Effect (PAE) yang panjang. Parameter penentu efikasi adalah rasio Cmax / MIC >= 8-10 kali lipat. Pada Amikasin, dosis tunggal harian besar (Once-Daily / Extended-Interval Dosing: 15-20 mg/kgBB sekali sehari, misal 900-1.200 mg sekali sehari) menghasilkan konsentrasi puncak Cmax yang sangat tinggi (50-65 mcg/mL) untuk efikasi pembunuhan bakteri yang cepat. Sebaliknya, ambilan aminoglikosida ke dalam sel epitel tubulus proksimal via transporter megalin/kubilin bersifat SATURABLE (dapat jenuh). Dengan memberikan dosis sekali sehari, kadar plasma akan turun tajam ke konsentrasi sangat rendah selama 8-12 jam berikutnya (periode 'drug-free window'), memungkinkan sel tubulus ginjal melepaskan aminoglikosida dan memulihkan fungsi mitokondria/lisosom. Target kadar palung (trough level) Amikasin sebelum dosis berikutnya harus < 2.5-5.0 mcg/mL (pada Gentamisin < 1 mcg/mL) untuk menjamin eliminasi tubuler yang aman."
        },
        {
            "id": "dq52",
            "category": "DIKI - Aminoglikosida & Tenofovir Fanconi",
            "question": "Tn. K (44 th, pasien HIV-1 dalam terapi ARV kombinasi Tenofovir Disoproxil Fumarate / TDF 300 mg + Lamivudin 300 mg + Dolutegravir 50 mg selama 2 tahun) datang kontrol ke klinik VCT. Pasien mengeluh nyeri tulang difus di punggung dan panggul serta lemas otot yang memberat. Hasil laboratorium: Serum Kreatinin naik dari 0.8 ke 1.5 mg/dL, Fosfat serum anjlok ke 1.6 mg/dL (hipofosfatemia berat / phosphate wasting), Kalium 3.2 mEq/L, Bikarbonat serum 18 mEq/L (asidosis metabolik normal anion gap). Urinalisis menunjukkan Glukosuria masif (+3) padahal gula darah puasa pasien normal sempurna (92 mg/dL), disertai Proteinuria tubular dan Fosfaturia. Sindrom disfungsi tubulus proksimal spesifik apa yang dialami Tn. K akibat toksisitas TDF dan rekomendasi alih terapi yang paling tepat?",
            "options": [
                {
                    "label": "A",
                    "text": "Sindrom Bartter sekunder akibat gangguan reabsorpsi Na-K-2Cl di ansa Henle tebal; tatalaksana baku adalah penambahan furosemid oral dosis tinggi dan melanjutkan terapi TDF dengan suplementasi natrium klorida",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Sindrom Gitelman akibat kerusakan kanal Na-Cl di tubulus kontortus distal; tatalaksana baku adalah pemberian tiazid oral harian seumur hidup dan menaikkan dosis TDF menjadi 600 mg/hari untuk kompensasi ginjal",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Sindrom Liddle akibat mutasi genetik kanal ENaC di duktus pengumpul; tatalaksana baku adalah pemberian spironolakton dosis tinggi dan mempertahankan regimen ARV berbasis TDF tanpa perlu pemeriksaan fosfat",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Sindrom Fanconi didapat akibat deplesi DNA mitokondria tubulus proksimal oleh TDF; tatalaksana: hentikan TDF segera, substitusi ke Tenofovir Alafenamide (TAF) atau Abakavir, dan berikan suplementasi fosfat oral",
                    "correct": true
                }
            ],
            "explanation": "Patofisiologi Tenofovir Disoproxil Fumarate (TDF) Nephrotoxicity: TDF masuk ke sel epitel tubulus proksimal melalui transporter kation organik basolateral OAT1 dan OAT3, dan dikeluarkan ke lumen urin via transporter MRP4/MRP2. Akumulasi intraseluler TDF menghambat enzim DNA Polimerase-gamma mitokondria, menyebabkan deplesi DNA mitokondria (mtDNA), kerusakan rantai respirasi, dan disfungsi energi seluler difus pada brush border tubulus proksimal. Gambaran Patognomonik SINDROM FANCONI: Hilangnya seluruh kapasitas reabsorpsi tubulus proksimal, menyebabkan kebocoran zat terlarut ke urin: Glukosuria Euglikemik (gula bocor ke urin meski glukosa darah normal), Fosfaturia masif yang memicu hipofosfatemia refrakter, demineralisasi tulang, osteomalasia, dan fraktur patologis, Asidosis Tubulus Renalis Tipe 2 (Proximal RTA) akibat kebocoran bikarbonat, aminoasiduria, dan proteinuria tubuler molekul rendah (beta-2 mikroglobulin). Rekomendasi Klinis: HENTIKAN TDF segera. Ganti dengan Tenofovir Alafenamide (TAF) yang memiliki konsentrasi plasma 90% lebih rendah dibanding TDF sehingga paparan tubulus renalis minimal, atau ganti ke Abakavir (bila HLA-B*57:01 negatif). Berikan suplementasi fosfat oral dan kalsitriol."
        },
        {
            "id": "dq53",
            "category": "DIKI - Aminoglikosida & Kolistin Deterjen",
            "question": "Ny. H (50 th) dirawat di ICU dengan syok sepsis dan bakteremia akibat Acinetobacter baumannii yang Pan-Drug Resistant (PDR) dan hanya sensitif terhadap Kolistin (Polimiksin E). Dokter meresepkan Kolistimetat Natrium (CMS) IV dengan dosis muatan (loading dose) 9 juta IU dilanjutkan dosis pemeliharaan 4.5 juta IU tiap 12 jam. Pada hari ke-5 terapi, SCr pasien melonjak dari baseline 0.7 menjadi 2.1 mg/dL (naik 3x lipat / AKI Stage 2) disertai parestesia perioral dan kelemahan otot. Bagaimana mekanisme deterjen biologis Kolistin dalam merusak integritas sel epitel tubulus ginjal dan faktor risiko yang memperparah nefrotoksisitasnya?",
            "options": [
                {
                    "label": "A",
                    "text": "Gugus polipeptida kationik kolistin bekerja seperti deterjen yang melarutkan fosfolipid membran sel tubulus ginjal memicu peningkatan permeabilitas dan lisis seluler; diperparah oleh syok dan nefrotoksin lain",
                    "correct": true
                },
                {
                    "label": "B",
                    "text": "Kolistin membentuk kristal jarum heksagonal di tubulus distal yang mengikis epitel glomerulus secara mekanik; diperparah oleh deplesi kalium intraseluler dan konsumsi makanan dengan kandungan protein hewani tinggi",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Kolistin merangsang hipersekresi hormon paratiroid sentral yang memicu resorpsi kalsium tulang masif sehingga terjadi kalsifikasi nodular parenkim korteks ginjal yang tidak berhubungan dengan integritas membran sel",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Kolistin berikatan kovalen dengan hemoglobin memicu methemoglobinemia obstruktif di kapiler peritubular; kondisi ini murni diperparah oleh pemberian oksigen aliran tinggi melalui masker non-rebreathing di ICU",
                    "correct": false
                }
            ],
            "explanation": "Mekanisme Nefrotoksisitas Kolistin (Polimiksin E): Kolistin adalah antibiotik polipeptida siklik kationik bermuatan positif kuat. Mekanisme antibakterinya (dan sekaligus nefrotoksisitasnya) menyerupai deterjen biologis: gugus kationik asam alfa-alfa-diaminobutirat bermuatan positif berikatan secara elektrostatik dengan gugus fosfat bermuatan negatif dari fosfolipid membran sel endotel dan sel epitel tubulus ginjal. Pengikatan ini mengacaukan struktur lipid bilayer membran sel tubulus, meningkatkan permeabilitas membran secara drastis, menyebabkan influks air dan kalsium yang tidak terkendali, pembengkakan seluler (swelling), lisis membran, dan nekrosis tubulus akut (ATN). Insidensi AKI akibat kolistin sangat tinggi (mencapai 30-50% pada pasien kritis). Faktor risiko independen: Usia lanjut, hipoalbuminemia, sepsis, durasi terapi > 7-14 hari, dan penggunaan bersamaan nefrotoksin lain (aminoglikosida, vankomisin, NSAID, zat kontras)."
        },
        {
            "id": "dq54",
            "category": "DIKI - Aminoglikosida & Ifosfamid Mesna",
            "question": "Tn. J (32 th, sarkoma jaringan lunak) menerima siklus kemoterapi berbasis Ifosfamid intravena dosis tinggi (5 g/m²). Apoteker onkologi memastikan pemberian terapi nefroprotektif bersamaan dengan Mesna (2-merkaptoetanasulfonat) dan hidrasi cairan intravena agresif. Terlepas dari penggunaan Mesna, pasien mengalami penurunan kadar bikarbonat serum ke 15 mEq/L, glukosuria ringan, hipofosfatemia, dan poliuria. Mengapa senyawa pelindung Mesna hanya efektif mencegah Sistitis Hemoragik di kandung kemih tetapi TIDAK DAPAT mencegah Nefrotoksisitas Tubuler yang diinduksi oleh metabolit kloroasetaldehid dari Ifosfamid?",
            "options": [
                {
                    "label": "A",
                    "text": "Mesna hanya larut dalam cairan empedu kanalikuli hepar sehingga tidak dapat difiltrasi melintasi pori-pori fenestrasi kapiler glomerulus untuk mencapai kompartemen tubulus nefron maupun organ buli-buli pelvis",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Mesna menetralkan metabolit Akrolein di kandung kemih, tetapi toksisitas tubuler ginjal dipicu oleh metabolit Kloroasetaldehid intraseluler yang menguras glutation mitokondria di epitel tubulus proksimal nefron",
                    "correct": true
                },
                {
                    "label": "C",
                    "text": "Mesna secara kompetitif menghambat ambilan glukosa dan fosfat di brush border tubulus sehingga mesna sendiri yang secara langsung menjadi penyebab utama timbulnya asidosis tubulus renalis dan nefrotoksisitas",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Kloroasetaldehid mengikat molekul mesna membentuk kristal silikat tak larut yang mengendap di duktus koligens sehingga pemberian mesna dosis tinggi justru melipatgandakan keparahan nekrosis tubulus korteks",
                    "correct": false
                }
            ],
            "explanation": "Metabolisme Ifosfamid & Peran Spesifik Mesna: Ifosfamid (agen alkilasi oxazaphosphorine) mengalami biotransformasi oleh CYP3A4 hepar menghasilkan dua metabolit toksik berbeda: 1. Akrolein (Acrolein): Dilepaskan ke dalam urin dan terakumulasi di kandung kemih, di mana ia bereaksi dengan mukosa urotelium menyebabkan vaskulitis dan Sistitis Hemoragik (perdarahan buli-buli masif). MESNA (Natrium 2-merkaptoetanasulfonat) adalah donor gugus tiol bebas (-SH) yang diekskresi pekat ke urin dan secara spesifik mengikat dan menetralkan akrolein di lumen saluran kemih bawah. 2. Kloroasetaldehid (Chloroacetaldehyde / CAA): Dihasilkan dari jalur N-dealkilasi ifosfamid. Kloroasetaldehid diserap dan masuk ke dalam sel epitel tubulus proksimal ginjal, di mana ia menguras cadangan Glutation (GSH) intraseluler, menghambat respirasi mitokondria, dan memicu lisis epitel tubulus (memicu Sindrom Fanconi, Proximal RTA, dan gagal ginjal kronis). Karena CAA bekerja di intraseluler tubulus sebelum mencapai lumen urin, Mesna TIDAK EFEKTIF melindungi tubulus ginjal dari toksisitas kloroasetaldehid."
        },
        {
            "id": "dq55",
            "category": "DIKI - Aminoglikosida & Foscarnet Kelasi",
            "question": "Tn. G (41 th, pasien pascatransplantasi sel punca hematopoietik alogenik) mengalami infeksi CMV (Cytomegalovirus) refrakter gansiklovir dengan mutasi gen UL97. Tim dokter beralih ke terapi antiviral Foscarnet intravena 90 mg/kgBB tiap 12 jam. Pada hari ke-4, pasien mengeluh kram otot hebat, kesemutan di ujung jari dan bibir (parestesia), serta spasme karpopedal positif (tanda Trousseau). Lab serial: SCr melonjak dari 0.9 ke 2.4 mg/dL, Kalsium terionisasi anjlok ke 3.2 mg/dL (hipokalsemia berat), dan Magnesium serum 1.1 mg/dL. Bagaimana mekanisme bioanorganik Foscarnet dalam memicu nefrotoksisitas akut kristaluria sekaligus kelainan elektrolit refrakter yang mengancam jiwa tersebut?",
            "options": [
                {
                    "label": "A",
                    "text": "Foscarnet menghambat penyerapan kalsium di usus halus via ikatan kovalen irreversibel; kerusakan ginjal terjadi akibat deplesi volume cairan prerenal sekunder terhadap diare sekretorik yang diinduksi foscarnet",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Foscarnet menstimulasi sekresi kalsitonin tiroid yang memicu ekskresi kalium masif di duktus kolektivus ginjal sehingga terbentuk batu kalsium oksalat staghorn yang menyumbat kedua ureter secara simetris bilateral",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Foscarnet adalah analog pirofosfat struktural yang mengkelat kation kalsium dan magnesium bebas membentuk presipitat kristal yang menyumbat tubulus ginjal dan memicu hipokalsemia/hipomagnesemia refrakter fatal",
                    "correct": true
                },
                {
                    "label": "D",
                    "text": "Foscarnet menginduksi mutasi somatik reseptor kalsium membran sel ginjal memicu pelepasan enzim renin tak terkontrol yang menyebabkan nekrosis fibrinoid arteriol eferen tanpa gangguan filtrasi glomerulus sejati",
                    "correct": false
                }
            ],
            "explanation": "Patofisiologi Foscarnet (Phosphonoformic Acid): Foscarnet adalah analog pirofosfat organik yang menghambat DNA polimerase virus CMV. Secara fisikokimiawi, foscarnet memiliki muatan negatif kuat yang berikatan langsung (mengkelat / chelation) dengan ion kation divalen dalam plasma, terutama ion Kalsium (Ca2+) dan Magnesium (Mg2+). Efek Toksik Ganda: 1. Kelasi Elektrolit Akut: Pengkelatan Ca2+ bebas menyebabkan anjloknya kalsium terionisasi (hipokalsemia terionisasi akut dan hipomagnesemia) yang memicu spasme otot, tanda Chvostek/Trousseau, aritmia jantung (pemanjangan interval QTc, Torsades de Pointes), dan kejang. 2. Nefrotoksisitas Intratubular: Kompleks foscarnet-kalsium mengendap sebagai mikrokristal di lumen tubulus ginjal, memicu obstruksi intraluminal, nekrosis tubulus akut (ATN), dan interstitial nephritis. Pencegahan: Hidrasi salin intravena masif (minimal 1.000 mL NaCl 0.9% sebelum dan bersamaan dengan setiap infus foscarnet) untuk memacu diuresis dan pemantauan elektrolit serial ketat."
        },
        {
            "id": "dq56",
            "category": "DIKI - Stewardship & PPI-Induced AIN",
            "question": "Tn. B (68 th) rutin mengonsumsi Esomeprazol oral 40 mg 1x/hari selama 9 bulan untuk keluhan GERD. Pasien datang kontrol dengan keluhan lemas, anoreksia, dan berat badan turun tanpa keluhan berkemih. Tidak ada demam, tidak ada ruam kulit, dan tidak ada nyeri pinggang. Hasil lab: SCr melonjak signifikan menjadi 2.8 mg/dL (baseline 3 bulan lalu: 0.9 mg/dL). Urinalisis: Sedimen urin menunjukkan Piuria Steril (leukosit 15-20/LPB, kultur urin steril tanpa bakteri) dan Proteinuria ringan (0.4 g/24 jam). Biopsi ginjal mengonfirmasi adanya infiltrasi sel mononuklear dan eosinofil difus di parenkim interstisial dengan edema interstisial hebat tanpa lesi glomerulus (Acute Interstitial Nephritis / AIN). Karakteristik klinis khas apa yang membedakan PPI-induced AIN dibanding reaksi obat alergi klasik lainnya?",
            "options": [
                {
                    "label": "A",
                    "text": "PPI-induced AIN selalu ditandai dengan trias alergi klasik lengkap (demam tinggi, ruam kulit eksantema, dan artralgia) yang muncul dalam waktu kurang dari 24 jam pertama pascakonsumsi tablet esomeprazol awal",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "PPI-induced AIN merupakan penyakit autoimun seumur hidup yang tidak dapat dipulihkan kembali meskipun obat PPI dihentikan seketika dan pasien wajib menjalani program inisiasi terapi hemodialisis kronis rutin",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "PPI-induced AIN hanya terjadi bila esomeprazol diminum bersamaan dengan jus jeruk asam pekat yang memicu kristalisasi garam sulfat di pelvis renalis tanpa melibatkan infiltrasi sel limfosit sel T di interstisial",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "PPI-induced AIN memiliki onset sangat tersembunyi (insidious / berbulan-bulan), trias klasik alergi sering absen (< 10%), dan penanganan kunci adalah stop PPI segera + kortikosteroid bila SCr tidak membaik",
                    "correct": true
                }
            ],
            "explanation": "Karakteristik Klinis PPI-Induced Acute Interstitial Nephritis (AIN): Proton Pump Inhibitors (Omeprazol, Esomeprazol, Pantoprazol, Lansoprazol) saat ini merupakan salah satu penyebab paling sering dari AIN akibat obat di seluruh dunia. Karakteristik khas: 1. Onset Waktu Tersembunyi (Insidious Onset): Tidak seperti antibiotik yang memicu AIN dalam 1-2 minggu, PPI-induced AIN memiliki masa laten yang sangat panjang dan bervariasi (rata-rata 2 hingga 9 bulan, bahkan hingga 1 tahun pascapaparan), sehingga hubungan kausalitas obat sering kali terlewatkan oleh klinisi. 2. Trias Alergi Klasik Sering Absen: Trias klasik AIN (demam, ruam morbiliform, eosinofilia) hanya ditemukan pada < 10% kasus PPI-AIN. Pasien sering kali asimtomatik atau hanya menunjukkan gejala non-spesifik (malaise, mual, azotemia). 3. Temuan Urinalisis: Piuria steril (leukosituria tanpa infeksi bakteri) dan proteinuria tubuler derajat rendah. Penanganan: Hentikan PPI seketika. Jika SCr tidak mengalami perbaikan dalam 3-7 hari pasca penghentian obat, inisiasi terapi Kortikosteroid sistemik (Prednison 1 mg/kgBB/hari selama 2-4 minggu) untuk mencegah transisi infiltrat inflamasi menjadi fibrosis interstisial ireversibel."
        },
        {
            "id": "dq57",
            "category": "DIKI - Stewardship & Kuinolon Kristaluria",
            "question": "Ny. F (74 th, BB 45 kg, riwayat CKD dengan CrCl 28 mL/menit) dirawat dengan infeksi saluran kemih komplikata dan sepsis ringan. Dokter meresepkan Siprofloksasin IV dosis standar orang dewasa normal yaitu 400 mg setiap 8 jam tanpa melakukan penyesuaian dosis berbasis klirens ginjal. Pada hari ke-3 terapi, pasien mengalami oliguria dan SCr melonjak dari 1.6 ke 3.4 mg/dL. Urinalisis mikroskopik menunjukkan kristal berbentuk jarum kipas birefringen ganda (needle-shaped / fan-shaped crystals) khas kuinolon di dalam urin yang ber-pH 7.8 (alkalis). Apa mekanisme ganda nefrotoksisitas Siprofloksasin pada Ny. F dan rekomendasi penyesuaian dosis yang seharusnya diterapkan?",
            "options": [
                {
                    "label": "A",
                    "text": "Toksisitas ganda kristaluria obstruktif (kelarutan siprofloksasin anjlok pada pH alkalis > 7.3) dan AIN imunologik; pada CrCl < 30 mL/menit dosis siprofloksasin IV WAJIB DITURUNKAN menjadi 400 mg tiap 18-24 jam",
                    "correct": true
                },
                {
                    "label": "B",
                    "text": "Siprofloksasin memicu nekrosis iskemik glomerulus akibat inhibisi enzim topoisomerase endotel kapiler; pada gangguan ginjal sedang siprofloksasin harus dinaikkan dosisnya menjadi 800 mg tiap 8 jam via infus kontinu",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Kristalisasi siprofloksasin murni terjadi pada urin yang sangat asam di bawah pH 4.5; penanganan klinis utama adalah memberikan infus asam askorbat dosis tinggi untuk mengasamkan pH filtrat tubulus proksimal nefron",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Kuinolon tidak diekskresi via ginjal sehingga kegagalan ginjal Ny. F murni akibat infeksi bakteri resisten; dosis siprofloksasin harus dipertahankan penuh dan ditambahkan aminoglikosida dosis ganda secara simultan",
                    "correct": false
                }
            ],
            "explanation": "Patofisiologi Nefrotoksisitas Fluorokuinolon (Siprofloksasin): 1. Kristaluria Obstruktif: Siprofloksasin adalah senyawa zwitterion. Kelarutannya di air relatif baik pada pH urin fisiologis netral-asam (pH < 6.5), tetapi kelarutannya anjlok drastis pada urin alkalis (pH > 7.0-7.3). Pasien dengan ISK akibat bakteri penghasil urease (Proteus mirabilis, Klebsiella) atau yang menerima terapi alkalisasi memiliki pH urin alkalis, memicu presipitasi cepat kristal siprofloksasin ('fan-shaped/needle-shaped birefringent crystals') di lumen tubulus ginjal. 2. Acute Interstitial Nephritis (AIN): Kuinolon juga dapat memicu AIN imuno-alergik idiosinkratik yang diperantarai sel T. 3. Penyesuaian Dosis (Dosing Adjustment): Siprofloksasin 40-50% diekskresi utuh via urin. Pada pasien geriatri dengan CrCl < 30 mL/menit, dosis IV standar 400 mg q8h menyebabkan akumulasi toksik masif. Pedoman baku renal: Turunkan dosis siprofloksasin IV menjadi 400 mg setiap 18-24 jam (atau 200 mg q12h) dan pastikan hidrasi cairan adekuat untuk mempertahankan volume urin harian."
        },
        {
            "id": "dq58",
            "category": "DIKI - Stewardship & Sulfadiazin Tokso",
            "question": "Tn. M (36 th, pasien HIV stadium IV dengan ensefalitis Toksoplasmosis serebral) menerima terapi kombinasi Pirimetamin oral bersama Sulfadiazin oral dosis tinggi (1.500 mg 4x sehari = 6 gram/hari) disertai Asam Folinat. Pada hari ke-8 terapi, pasien mengeluh nyeri pinggang kolik bilateral hebat (renal colic), hematuria makroskopik, dan produksi urin turun tajam. USG ginjal memperlihatkan ektasia pelviokalises ringan tanpa batu radioopak pada foto polos rontgen BNO (batu radiolusen). Urinalisis mikroskopik sedimen sentrifugasi memperlihatkan kumpulan kristal khas berbentuk 'seikat gandum terikat' (shocks of wheat / sheaf of wheat appearance). Diagnosis DIKI apa yang dialami Tn. M dan protokol penanganan serta pencegahan baku yang harus segera diinstruksikan apoteker?",
            "options": [
                {
                    "label": "A",
                    "text": "Nefropati membranosa autoimun sekunder akibat toksoplasma; tatalaksana adalah penghentian asam folinat dan pemberian siklofosfamid intravena pulsatif disertai restriksi cairan kristaloid ketat < 500 mL/hari",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Sulfadiazine-Induced Crystal Nephropathy obstruktif; tatalaksana: hidrasi salin intravena masif (output urin > 2 L/hari) dan alkalisasi urin dengan Natrium Bikarbonat target pH urin > 7.15 untuk melarutkan kristal",
                    "correct": true
                },
                {
                    "label": "C",
                    "text": "Acute Tubular Necrosis toksik akibat pirimetamin murni; tatalaksana baku adalah melakukan hemodialisis darurat 4 jam untuk mengeliminasi pirimetamin dan mengganti sulfadiazin dengan kotrimoksazol dosis maksimal",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Kolelitiasis obstruktif ekstrahepatik; tatalaksana baku adalah tindakan laparoskopi kolesistektomi cito oleh spesialis bedah digestif dan pemberian antibiotik seftriakson intravena tanpa perlu mengubah dosis obat",
                    "correct": false
                }
            ],
            "explanation": "Sulfadiazine Crystal Nephropathy: Sulfadiazin adalah sulfonamida yang digunakan dosis tinggi (4-6 gram/hari) untuk ensefalitis toksoplasma. Sulfadiazin dan metabolit terasetilasinya (N4-asetilsulfadiazin) memiliki pKa ~6.5. Pada urin yang asam (pH 5.0 - 5.5), kelarutan sulfadiazin sangat rendah (hanya ~10-20 mg/100 mL), memicu presipitasi kristal masif di lumen tubulus ginjal, kaliks, ureter, hingga kandung kemih. Gambaran Mikroskopik Patognomonik: Kristal berbentuk 'seikat gandum' atau 'berkas gandum bertumpuk' (sheaves of wheat / rosette appearance) yang bersifat radiolusen (tidak tampak pada foto rontgen polos BNO). Protokol Pencegahan & Penanganan Baku: (1) Hidrasi cairan intravena agresif untuk menjamin volume urin minimal > 2-2.5 liter/hari (urin encer); (2) Alkalisasi Urin dengan pemberian Natrium Bikarbonat oral atau IV untuk mempertahankan pH urin konsisten > 7.15 (peningkatan pH dari 5.5 ke 7.5 melipatgandakan kelarutan sulfadiazin lebih dari 10-20 kali lipat, melarutkan kristal secara tuntas tanpa perlu menghentikan antibiotik penyelamat jiwa pada infeksi toksoplasma otak)."
        },
        {
            "id": "dq59",
            "category": "DIKI - Stewardship & Bisfosfonat ATN/FSGS",
            "question": "Ny. K (61 th, multipel mieloma dengan lesi osteolitik difus) menerima infus Bisfosfonat intravena Zoledronic Acid (Asam Zoledronat 4 mg IV infus) setiap 4 minggu. Karena waktu di ruang kemoterapi terbatas, perawat memberikan infus 4 mg tersebut melalui drip cepat selama 5 menit (standar keamanan: infus minimal 15 menit). Pada siklus ke-3, SCr pasien melonjak dari baseline 0.9 mg/dL menjadi 2.8 mg/dL disertai oliguria. Di sisi lain, pada obat bisfosfonat intravena lain yaitu Pamidronat dosis tinggi jangka panjang, fenotipe cedera ginjal yang dominan adalah proteinuria masif nefrotik akibat Collapsing Focal Segmental Glomerulosclerosis (FSGS). Apa perbedaan patofisiologi nefrotoksisitas ginjal antara Asam Zoledronat drip cepat versus Pamidronat dosis tinggi?",
            "options": [
                {
                    "label": "A",
                    "text": "Zoledronat murni memicu nefritis interstisial granulomatosa alergik sedangkan pamidronat memicu kristaluria asam urat obstruktif di pelvis renalis yang tidak berkaitan sama sekali dengan membran podosit nefron",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Zoledronat memicu oklusi mekanik arteri renalis bilateral sedangkan pamidronat memicu trombosis vena renalis unilateral akibat stimulasi faktor pembekuan darah faktor VIII endotel yang berlebihan di mikrosirkulasi",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Zoledronat drip cepat memicu konsentrasi puncak plasma tinggi yang toksik nekrotik langsung ke epitel tubulus (ATN); sebaliknya Pamidronat lebih dominan bersifat podositotoksik memicu glomerulosklerosis (FSGS)",
                    "correct": true
                },
                {
                    "label": "D",
                    "text": "Kedua bisfosfonat bekerja eksklusif pada osteoklas tulang dan tidak memiliki filtrasi ginjal sama sekali; kegagalan ginjal pasien murni akibat kompresi mekanik lesi myeloma tanpa pengaruh kecepatan infus obat",
                    "correct": false
                }
            ],
            "explanation": "Perbedaan Fenotipe Nefrotoksisitas Bisfosfonat Intravena: 1. Asam Zoledronat (Zoledronic Acid): Memiliki potensi antiresorptif paling tinggi. Pola nefrotoksisitas dominannya adalah ACUTE TUBULAR NECROSIS (ATN) toksik pada sel epitel tubulus proksimal. Toksisitas tubuler ini sangat berkorelasi dengan Konsentrasi Puncak Plasma (Cmax). Jika diberikan via infus terlalu cepat (< 15 menit) atau dosis berlebih, lonjakan konsentrasi plasma membanjiri sel tubulus, merusak farnesyl pyrophosphate synthase dan memicu apoptosis sel tubulus proksimal yang cepat. Aturan Baku: Zoledronat HARUS diinfuskan minimal selama 15 menit atau lebih, dengan hidrasi adekuat, dan penyesuaian dosis bila CrCl < 60 mL/menit. 2. Pamidronat (Pamidronate): Pola nefrotoksisitasnya terutama PODOSITOPATI (Podocyte Injury) yang bermanifestasi sebagai Sindrom Nefrotik berat dan keruntuhan arsitektur podosit glomerulus (Collapsing Focal Segmental Glomerulosclerosis / FSGS) akibat paparan dosis kumulatif tinggi jangka panjang."
        },
        {
            "id": "dq60",
            "category": "DIKI - Stewardship & Algoritma Naranjo",
            "question": "Tn. D (71 th, rawat ICU dengan syok kardiogenik pasca IMA) menerima berbagai obat: Furosemid IV kontinu, Captopril oral, Aspirin, Klopidogrel, Atorvastatin, dan antibiotik profilaksis Sefazolin. Pada hari ke-4, SCr melonjak dari 1.0 ke 2.9 mg/dL (AKI Stage 2). Tim farmasi klinis melakukan Adverse Drug Reaction (ADR) Causality Assessment menggunakan Algoritma Naranjo. Pasien mendapat poin dari: adanya laporan literatur konfirmasi sebelumnya (+1), kejadian timbul pascapemberian obat (+2), perbaikan setelah obat dihentikan de-challenge (+1), tidak ada reaksi ulang re-challenge (0), adanya alternatif penyebab klinis syok kardiogenik (-1), obat tidak terdeteksi dalam cairan tubuh (0), tidak ada plasebo (0), tidak ada riwayat paparan serupa (0), cedera dikonfirmasi bukti objektif lab (+1). Berapakah skor total Naranjo pasien dan bagaimana kategori kesimpulan kausalitas probabilitasnya?",
            "options": [
                {
                    "label": "A",
                    "text": "Skor Total = 9 (Kategori Definite / Pasti); membuktikan secara mutlak tanpa keraguan bahwa gagal ginjal akut murni disebabkan oleh obat tunggal tanpa adanya pengaruh dari penurunan fraksi ejeksi jantung pasien",
                    "correct": false
                },
                {
                    "label": "B",
                    "text": "Skor Total = 1-2 (Kategori Doubtful / Ragu-ragu); menyimpulkan bahwa seluruh obat aman dilanjutkan tanpa penyesuaian dosis karena skor di bawah 3 meniadakan keterkaitan farmakologis reaksi obat merugikan pasien",
                    "correct": false
                },
                {
                    "label": "C",
                    "text": "Skor Total = 7 (Kategori Probable / Sangat Mungkin); mewajibkan pelaporan pidana malpraktik medis ke komite etik rumah sakit dan penghentian permanen seluruh kelas terapi obat kardiovaskular secara serentak",
                    "correct": false
                },
                {
                    "label": "D",
                    "text": "Skor Total = 4 (Kategori Possible / Mungkin); skor 1-4 mencerminkan kausalitas mungkin di mana peran nefrotoksin berkontribusi bersama faktor hemodinamik syok kardiogenik; wajib dilaporkan ke MESO BPOM RI",
                    "correct": true
                }
            ],
            "explanation": "Perhitungan Skor Algoritma Naranjo (Adverse Drug Reaction Probability Scale):\n1. Apakah ada laporan publikasi sebelumnya mengenai reaksi ini? Ya (+1)\n2. Apakah efek samping timbul setelah obat yang dicurigai diberikan? Ya (+2)\n3. Apakah reaksi mereda ketika obat dihentikan (dechallenge)? Ya (+1)\n4. Apakah reaksi muncul kembali ketika obat diberikan ulang (rechallenge)? Tidak dilakukan / Tidak tahu (0)\n5. Apakah ada penyebab alternatif (selain obat) yang dapat menjelaskan reaksi tersebut? Ya, ada syok kardiogenik / hipoperfusi (-1)\n6. Apakah reaksi muncul saat diberikan plasebo? Tidak tahu (0)\n7. Apakah obat terdeteksi dalam darah/cairan tubuh dalam kadar toksik? Tidak diukur (0)\n8. Apakah keparahan reaksi meningkat saat dosis dinaikkan / menurun saat dosis diturunkan? Tidak tahu (0)\n9. Apakah pasien pernah mengalami reaksi serupa terhadap obat yang sama/mirip sebelumnya? Tidak tahu (0)\n10. Apakah efek samping dikonfirmasi dengan bukti objektif (hasil lab SCr)? Ya (+1)\nTotal Skor = 1 + 2 + 1 + 0 - 1 + 0 + 0 + 0 + 0 + 1 = +4.\nInterpretasi Standar Naranjo:\n- Skor >= 9: Definite (Pasti)\n- Skor 5 - 8: Probable (Sangat Mungkin)\n- Skor 1 - 4: Possible (Mungkin)\n- Skor <= 0: Doubtful (Ragu-ragu / Tidak berhubungan).\nKarena skor Tn. D adalah 4, kausalitas berada pada kategori 'Possible' (Mungkin), mencerminkan interaksi multifaktorial antara penurunan perfusi ginjal kardiogenik dan peran obat (Triple Whammy / diuretik / ACEI). Seluruh dugaan ADR tetap wajib dilaporkan ke Pusat Farmakovigilans Nasional BPOM melalui Formulir Kuning MESO (Monitoring Efek Samping Obat)."
        }
  ]
};

// Aliasing quizQuestions to quiz to ensure backwards-compatibility and avoid duplication
window.DILI_DIKI_DATA.quizQuestions = window.DILI_DIKI_DATA.quiz;
