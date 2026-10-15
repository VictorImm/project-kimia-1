// Data Materi Kuliah Farmasi Klinik Terintegrasi
// "Penyesuaian Dosis pada Populasi Khusus"
// Dosen Pengampu & Tim: Dr. apt. Ivonne Soeliono, M.Farm.Klin. & Dosen Gen Z Assistant

window.LECTURE_DATA = {
  meta: {
    title: "Farklin Masterclass: Penyesuaian Dosis pada Populasi Khusus",
    subtitle: "Asuhan Kefarmasian pada Ginjal, Hati, Geriatri, Ibu Hamil & Menyusui",
    lecturer: "Dr. apt. Ivonne Soeliono, M.Farm.Klin.",
    institution: "Fakultas Farmasi, Universitas Katolik Widya Mandala Surabaya",
    vibe: "Gen Z Friendly, Story-Driven, Evidence-Based, 1x Sesi Tuntas!",
    targetAudience: "Mahasiswa S1 Farmasi & Calon Apoteker Masa Depan ✨"
  },

  // 1. Kasus Pemantik (The Opening Hook)
  kasusPemantik: {
    title: "Kasus Pemantik: 1 Resep Siprofloksasin, 4 Pasien Berbeda!",
    recipe: {
      drug: "Siprofloksasin 500 mg",
      regimen: "Tiap 12 jam (q12h), selama 5 hari",
      indication: "Infeksi Saluran Kemih (ISK)"
    },
    question: "Apakah dosis dan pilihan obatnya boleh disamaratakan untuk keempat pasien ini? Spoiler: JANGAN COBA-COBA, BESTIE! 💀",
    patients: [
      {
        id: "tn_b",
        name: "Tn. B",
        age: 78,
        weight: 50,
        status: "Lansia + SCr 1.8 mg/dL",
        tag: "Gangguan Ginjal",
        color: "amber",
        icon: "activity",
        problem: "CrCl hanya ~23.9 mL/min. Siprofloksasin diekskresi via ginjal (fe = 0.4-0.5).",
        verdict: "BAHAYA TOKSISITAS!",
        action: "Dosis harus diturunkan jadi 250 mg q12h atau 500 mg q24h. Kadar obat bisa numpuk kalau gak disesuaikan!"
      },
      {
        id: "tn_h",
        name: "Tn. H",
        age: 55,
        weight: 65,
        status: "Sirosis Hati + Albumin 3.0 g/dL",
        tag: "Gangguan Hati",
        color: "rose",
        icon: "flame",
        problem: "Sirosis mengganggu metabolisme dan klirens intrinsik hepar, risiko ensefalopati.",
        verdict: "PERLU CAUTION & MONITORING!",
        action: "Siprofloksasin punya eliminasi ganda (ginjal + hepar). Perlu evaluasi skor Child-Pugh dan pantau fungsi hepar."
      },
      {
        id: "ny_s",
        name: "Ny. S",
        age: 32,
        weight: 58,
        status: "Hamil 8 Minggu (Trimester 1)",
        tag: "Ibu Hamil",
        color: "emerald",
        icon: "baby",
        problem: "Fluorokuinolon punya afinitas tinggi ke tulang rawan janin (artropati / cartilage damage).",
        verdict: "KONTRAINDIKASI / HINDARI!",
        action: "Hentikan Siprofloksasin! Ganti dengan antibiotik aman bumil (misal Amoksisilin-Klavulanat, Sefaleksin, atau Fosfomisin trometamol)."
      },
      {
        id: "ny_d",
        name: "Ny. D",
        age: 28,
        weight: 52,
        status: "Menyusui Bayi Usia 6 Minggu",
        tag: "Ibu Menyusui",
        color: "sky",
        icon: "heart",
        problem: "Fluorokuinolon diekskresikan ke dalam ASI dan berisiko mengganggu flora usus serta sendi bayi.",
        verdict: "HINDARI BILA ADA PILIHAN LAIN!",
        action: "Pilih antibiotik lini pertama menyusui dengan RID rendah (misal Nitrofurantoin untuk ISK bawah atau Sefalosporin generasi 1/2)."
      }
    ]
  },

  // 2. Modul-Modul Materi Kuliah
  chapters: [
    {
      id: "bab1",
      number: "01",
      title: "Prinsip Dasar PK/PD & Formula Sakti Dosis",
      tagline: "The Core Lore: Jangan Asal Kasih Dosis, Pahami Jalurnya!",
      lecturerNote: "Hai semuanya! Kenapa sih kita harus pusing-pusing ngitung dosis? Bayangin obat itu kayak tamu VIP yang masuk ke festival musik tubuh kita. Kalau pintu keluarnya macet tapi kita tetep kirim tamu tiap jam, venuenya bakal overcapacity alias TOKSIK! 💥",
      sections: [
        {
          subtitle: "Rantai ADME dalam Bahasa Santai",
          content: "Farmakokinetik (PK) adalah nasib obat di dalam tubuh (*What the body does to the drug*). Terdiri dari 4 tahap sakti:",
          analogies: [
            { stage: "Absorpsi (A)", desc: "Proses obat masuk ke sirkulasi sistemik. Pada bumil: lambung lambat kosong (progesteron naik). Pada lansia: laju penyerapan oral sering melambat." },
            { stage: "Distribusi (D)", desc: "Penyebaran obat ke jaringan. Dipengaruhi Volume Distribusi (Vd) dan ikatan protein plasma (Albumin). Albumin turun di penyakit hepar/ginjal -> Fraksi obat bebas (fu) naik bebas kelayapan!" },
            { stage: "Metabolisme (M)", desc: "Dapur pengolahan obat (terutama di hepar via CYP450 Fase 1 Oksidasi & Fase 2 Glukuronidasi). Sirosis = dapur terbakar, enzim CYP drop parah." },
            { stage: "Ekskresi (E)", desc: "Pintu pembuangan utama (Ginjal/Urin & Empedu/Feses). Fraksi ekskresi ginjal utuh disebut fe. Kalau fe tinggi dan ginjal rusak, waspada!" }
          ]
        },
        {
          subtitle: "6 Parameter Kunci Farmakokinetik",
          params: [
            { symbol: "CL (Klirens)", unit: "L/jam atau mL/min", meaning: "Kemampuan tubuh membersihkan volume darah dari obat per satuan waktu. feCL = CL_renal + CL_non-renal." },
            { symbol: "V_d (Volume Distribusi)", unit: "Liter atau L/kg", meaning: "Ruang semu tempat obat terdistribusi. Vd besar (> 5 L/kg) = obat suka ngumpet di lemak/jaringan (susah dicuci dialisis!)." },
            { symbol: "t_{1/2} (Waktu Paruh)", unit: "Jam", meaning: "Waktu yang dibutuhkan kadar obat untuk turun jadi 50%. Rumus: fet_{1/2} = \\frac{0.693 \\times V_d}{CL}fe." },
            { symbol: "f_e (Fraksi Renal)", unit: "0 - 1.0 (atau %)", meaning: "Persentase obat yang dieliminasi lewat urin dalam bentuk UTUH tanpa diubah." },
            { symbol: "f_u (Fraksi Bebas)", unit: "0 - 1.0", meaning: "Persentase obat yang TIDAK terikat albumin. Hanya obat bebas yang punya efek farmakologis & bisa difiltrasi ginjal!" },
            { symbol: "E (Rasio Ekstraksi)", unit: "0 - 1.0", meaning: "Efisiensi hepar menyaring obat dalam satu kali aliran darah. feE > 0.7fe (High) vs feE < 0.3fe (Low)." }
          ]
        },
        {
          subtitle: "2 Strategi Penyesuaian Dosis (Pick Your Strategy!)",
          strategies: [
            {
              name: "Strategi 1: Turunkan Dosis (Dose Reduction)",
              formula: "D_{pasien} = D_{normal} \\times Q",
              interval: "Interval (\\tau) tetap sama",
              pros: "Kadar obat dalam darah lebih rata dan fluktuasi puncak-lembah (feC_{max}-C_{min}fe) lebih kecil.",
              when: "Sangat cocok untuk obat dengan indeks terapi sempit atau obat tipe *time-dependent* (misal antidiabetes, beberapa antiepilepsi)."
            },
            {
              name: "Strategi 2: Perpanjang Interval (Interval Extension)",
              formula: "\\tau_{pasien} = \\frac{\\tau_{normal}}{Q}",
              interval: "Dosis tetap sama, interval diperpanjang",
              pros: "Tetap mencapai kadar puncak (feC_{max}fe) yang tinggi untuk efek bakterisidal maksimal.",
              when: "Sangat cocok untuk obat tipe *concentration-dependent* seperti Aminoglikosida (Gentamisin, Amikasin) dan Fluorokuinolon."
            }
          ]
        },
        {
          subtitle: "Formula Sakti Dettli & Rowland-Tozer (feQfe Factor)",
          latexFormula: "Q = 1 - f_e \\times (1 - KF)",
          detailExplanation: "Di mana: \\n• fef_efe = fraksi obat utuh di urin pada fungsi ginjal normal\\n• feKFfe (Kidney Function ratio) = fe\\frac{CrCl_{pasien}}{CrCl_{normal}}fe (CrCl normal diasumsikan 100 atau 120 mL/min)\\n• Jika fef_e = 0.9fe dan feKF = 0.3fe, maka feQ = 1 - 0.9 \\times (1 - 0.3) = 1 - 0.63 = 0.37fe (dosis disunat jadi 37%!).."
        }
      ]
    },

    {
      id: "bab2",
      number: "02",
      title: "The Renal Saga: Pasien Gangguan Ginjal",
      tagline: "Ginjal Bukan Sekadar Filter Air, tapi Pintu Utama Eliminasi Obat!",
      lecturerNote: "Guys, jangan pernah ketipu sama angka SCr normal pada kakek-nenek kurus! SCr bisa aja 0.8 mg/dL karena massa ototnya udah nyusut, padahal CrCl aslinya udah terjun payung ke < 30 mL/min! Hitung selalu pakai Cockcroft-Gault! 🧮",
      sections: [
        {
          subtitle: "Rumus Keramat: Cockcroft-Gault Equation",
          equationMale: "CrCl = \\frac{(140 - \\text{Usia}) \\times BB}{72 \\times SCr}",
          equationFemale: "CrCl_{\\text{wanita}} = CrCl_{\\text{pria}} \\times 0.85",
          notes: "Gunakan BB ideal jika pasien obesitas. Kenapa wanita dikali 0.85? Karena massa otot wanita rata-rata 15% lebih rendah dibanding pria!"
        },
        {
          subtitle: "Tahapan Penurunan Fungsi Ginjal & Tindakan",
          stages: [
            { gfr: "> 90 mL/min", stage: "Tahap 1 (Normal / Minimal)", action: "Dosis standar, pantau hidrasi dan obat nefrotoksik." },
            { gfr: "60 - 89 mL/min", stage: "Tahap 2 (Ringan)", action: "Mulai waspada pada obat fe > 0.8 dengan indeks terapi sempit." },
            { gfr: "30 - 59 mL/min", stage: "Tahap 3 (Sedang)", action: "Penyesuaian dosis wajib untuk mayoritas antibiotik renal. Metformin maks 1000 mg/hari jika CrCl 30-45." },
            { gfr: "15 - 29 mL/min", stage: "Tahap 4 (Berat)", action: "KONTRAINDIKASI Metformin (risiko Asidosis Laktat). Dosis antibiotik disunat 50-75%." },
            { gfr: "< 15 mL/min", stage: "Tahap 5 (Gagal Ginjal Terminal / ESRD)", action: "Memerlukan Terapi Pengganti Ginjal (Dialisis). Gunakan panduan Renal Drug Handbook!" }
          ]
        },
        {
          subtitle: "Prinsip Obat & Hemodialisis (Bisa Dicuci Gak Sih?)",
          rules: [
            { title: "Berat Molekul (BM)", desc: "BM < 500 Da sangat mudah terbuang lewat membran dialisis konvensional. Vankomisin (BM ±1.400 Da) hanya tersaring pada dialzer High-Flux." },
            { title: "Ikatan Protein (Protein Binding)", desc: "Hanya fraksi bebas (fef_ufe) yang bisa menembus pori membran dialisis. Obat dengan ikatan protein > 90% (misal Fenitoin, Warfarin) tidak banyak terbuang." },
            { title: "Volume Distribusi (Vd)", desc: "Obat yang ngumpet di jaringan dengan Vd raksasa (misal Digoksin Vd 300-500 L, Amiodaron) tidak bisa ditarik oleh mesin dialisis." }
          ]
        }
      ],
      caseStudy: {
        title: "Kasus 1: Tn. B (78 th, 50 kg, SCr 1.8 mg/dL) & Metformin",
        scenario: "Tn. B menderita DM tipe 2 dan diresepkan Metformin 500 mg 3x sehari. SCr lab = 1.8 mg/dL.",
        calculation: "CrCl = (140 - 78) * 50 / (72 * 1.8) = 62 * 50 / 129.6 = 23.9 mL/menit!",
        drp: "DRP Kritis: Metformin diekskresi 90-100% utuh di urin (fef_e = 0.9-1.0fe). Pada CrCl < 30 mL/min, akumulasi Metformin memicu Lactic Acidosis (bisa fatal!).",
        recommendation: "HENTIKAN METFORMIN SEGERA! Ganti dengan antidiabetes yang aman untuk CrCl < 30 mL/min (misal Insulin, Linagliptin tanpa penyesuaian dosis, atau Gliklazid dosis rendah)."
      }
    },

    {
      id: "bab3",
      number: "03",
      title: "The Liver Drama: Pasien Sirosis & Gangguan Hati",
      tagline: "Tidak Ada 'CrCl' untuk Hati! Pahami Shunt, Enzim, dan Child-Pugh!",
      lecturerNote: "Gengs, liver itu pabrik kimia terbesar di tubuh kita! Kalau sirosis, darah bakal bikin jalan pintas (portosystemic shunt) ngelewatin hepar. Akibatnya obat oral yang tadinya dihancurin hepar (first-pass effect) langsung tembus 100% ke otak! Gawat kan? 🤯",
      sections: [
        {
          subtitle: "3 Perubahan Patofisiologis Utama pada Sirosis",
          points: [
            { icon: "git-branch", title: "Portosystemic Shunt & Aliran Darah Turun", text: "Darah memotong jalur hepar -> First-pass metabolism lenyap -> Bioavailabilitas (feFfe) obat oral melonjak drastis! Dosis normal bisa bikin overdosis." },
            { icon: "zap-off", title: "Kerusakan Enzim CYP (Fase 1 Drop Parah)", text: "Oksidasi CYP450 rusak berat. TAPI Glukuronidasi (Fase 2) relatif lebih bertahan. Makanya pilih benzodiazepin Fase 2 (Lorazepam, Oksazepam) daripada Fase 1 (Diazepam)!" },
            { icon: "droplet", title: "Sintesis Albumin Menurun", text: "Hipoalbuminemia -> Fraksi bebas obat asam (fef_ufe) melonjak tinggi -> Efek samping meningkat tajam walau kadar total terlihat normal." }
          ]
        },
        {
          subtitle: "High Extraction (feE > 0.7fe) vs Low Extraction (feE < 0.3fe)",
          extractionComparison: [
            {
              type: "High Extraction Drugs (E > 0.7)",
              meaning: "Klirens obat dibatasi oleh ALIRAN DARAH hepar (Flow-limited).",
              examples: "Propranolol, Lidokain, Morfin, Verapamil, Nitrat.",
              impact: "Pada sirosis: Aliran darah turun + Shunt -> Klirens drop 50-80% -> Bioavailabilitas oral naik 2-4 KALI LIPAT! Solusi: Turunkan dosis awal oral secara radikal."
            },
            {
              type: "Low Extraction Drugs (E < 0.3)",
              meaning: "Klirens obat dibatasi oleh AKTIVITAS ENZIM INTRINSIK & IKATAN PROTEIN (feCL_{int} \\times f_ufe).",
              examples: "Warfarin, Fenitoin, Diazepam, Teofilin.",
              impact: "Pada sirosis: Albumin turun membuat fraksi bebas naik, tapi enzim CYP turun membuat eliminasi lambat. Perlu TDM dan monitoring ketat!"
            }
          ]
        },
        {
          subtitle: "Sistem Skoring Child-Pugh (Pengukur Derajat Kerusakan Hati)",
          matrix: [
            { param: "Bilirubin Total (mg/dL)", p1: "< 2.0", p2: "2.0 - 3.0", p3: "> 3.0" },
            { param: "Albumin Serum (g/dL)", p1: "> 3.5", p2: "2.8 - 3.5", p3: "< 2.8" },
            { param: "INR (atau Waktu Protrombin)", p1: "< 1.7", p2: "1.7 - 2.2", p3: "> 2.2" },
            { param: "Asites", p1: "Nihil / Tidak ada", p2: "Ringan (respons diuretik)", p3: "Sedang-Berat / Refrakter" },
            { param: "Ensefalopati Hepatik", p1: "Tidak ada (Grade 0)", p2: "Grade 1 - 2 (bingung ringan)", p3: "Grade 3 - 4 (stupor / koma)" }
          ],
          classes: [
            { grade: "Child-Pugh A (5 - 6 Poin)", status: "Kompensasi Baik", doseRule: "Penurunan dosis minimal (10-20%) atau pantau rutin." },
            { grade: "Child-Pugh B (7 - 9 Poin)", status: "Gangguan Fungsional Sedang", doseRule: "Turunkan dosis sebesar 25 - 50% terutama obat klirens hepar." },
            { grade: "Child-Pugh C (10 - 15 Poin)", status: "Dekompensasi Berat", doseRule: "Turunkan dosis minimal 50% atau HINDARI obat hepatotoksik/sedatif!" }
          ]
        }
      ],
      caseStudy: {
        title: "Kasus 2: Tn. H (55 th, Sirosis Alkoholik) & Insomnia / Nyeri Sendi",
        scenario: "Tn. H (Bilirubin 2.5, Albumin 3.0, Asites ringan, tanpa ensefalopati = Child-Pugh B, Skor 8). Diresepkan Diazepam 5 mg 2x sehari dan Ibuprofen 400 mg 3x sehari.",
        drp: "1. Diazepam dimetabolisme lewat Oksidasi CYP450 (Fase 1) dan punya metabolit aktif (desmetildiazepam) dengan waktu paruh molor hingga >100 jam di pasien sirosis! Bisa memicu koma ensefalopati hepatik.\\n2. Ibuprofen (NSAID) merusak prostaglandin ginjal -> memicu sindrom hepatorenal dan meningkatkan risiko perdarahan varises esofagus!",
        recommendation: "1. HENTIKAN DIAZEPAM! Jika mutlak butuh sedatif, pilih Lorazepam dosis sangat rendah (0.5 mg prn) karena hanya butuh Glukuronidasi (Fase 2) tanpa metabolit aktif.\\n2. HENTIKAN IBUPROFEN! Ganti Parasetamol dosis rendah terbagi (maksimal 2.000 mg/hari) atau terapi non-farmakologi."
      }
    },

    {
      id: "bab4",
      number: "04",
      title: "The Geriatric Reality: Pasien Lansia & Kaskade Peresepan",
      tagline: "Tubuh Menyusut, Reseptor Sensitif, Resep Bertambah! Waspada Polifarmasi!",
      lecturerNote: "Lansia itu unik banget, rekan-rekan. Air tubuh turun (-10-15%), lemak naik, albumin turun, klirens hepar & ginjal turun. Ditambah reseptor otak makin peka obat antikolinergik & sedatif. Jangan sampai terjadi KASKADE PERESEPAN: efek samping obat A malah diobatin pake obat B! 📉",
      sections: [
        {
          subtitle: "Perubahan Fisiologis Penuaan vs Dampak PK",
          changes: [
            { organ: "Air Tubuh Total & Massa Otot (-10 s/d 15%)", impact: "Volume distribusi obat larut air (Litium, Digoksin, Aminoglikosida) menyusut -> Kadar puncak (feC_{max}fe) melonjak tinggi!" },
            { organ: "Persentase Lemak Tubuh (+20 s/d 40%)", impact: "Volume distribusi obat larut lemak (Diazepam, Lipofilik) membesar -> Obat terperangkap di lemak, fet_{1/2}fe memanjang drastis, pasien teler berhari-hari!" },
            { organ: "Aliran Darah Hepar (-20 s/d 50%)", impact: "Klirens obat hepar ekstraksi tinggi menurun tajam (Propranolol, Lidokain, Morfin)." },
            { organ: "Laju Filtrasi Glomerulus (-1 mL/min/th sesudah 40 th)", impact: "Ekskresi obat renal melambat drastis walau SCr tampak normal (pseudonormal SCr)." }
          ]
        },
        {
          subtitle: "Paradoks Furosemid: Mengapa Furosemid Oral 40 mg Gagal pada Lansia?",
          explanation: "Furosemid bekerja dari SISI DALAM lumen tubulus ginjal (harus disekresi ke urin). Pada lansia dengan edema / gagal jantung, laju absorpsi saluran cerna melambat. Meskipun total obat yang terserap sama (*AUC sama*), laju masuknya lambat sehingga kadar furosemid di tubulus tidak pernah menembus batas ambang (*threshold ceiling effect*).",
          solution: "Beri Furosemid IV 40 mg (tembus threshold langsung) atau tingkatkan dosis bolus oral, bukan membagi jadi dosis kecil sering! Pastikan tidak ada NSAID yang menghambat kerja diuretik."
        },
        {
          subtitle: "Bahaya Nyata Kaskade Peresepan (Prescribing Cascade)",
          chain: [
            { step: "1. Pasien Depresi", desc: "Diberi Paroksetin + Haloperidol (Antipsikotik)" },
            { step: "2. Muncul Efek Samping", desc: "Haloperidol memblokade dopamin -> Muncul Tremor / Gejala Ekstrapiramidal (EPS)" },
            { step: "3. Salah Diagnosis!", desc: "Dokter mengira pasien terkena penyakit Parkinson baru" },
            { step: "4. Tambah Obat Baru", desc: "Pasien diresepkan Levodopa / Karbidopa" },
            { step: "5. Malapetaka Terjadi", desc: "Kombinasi memicu Hipotensi Ortostatik berat -> Pasien jatuh berulang -> Fraktur tulang -> Rawat Inap!" }
          ],
          goldenRule: "GOLDEN RULE GERIATRI: Selalu curigai gejala baru sebagai EFEK SAMPING OBAT sampai terbukti sebaliknya! *Start Low, Go Slow!*"
        }
      ],
      caseStudy: {
        title: "Kasus 3: Ny. M.G. (75 th, Gagal Jantung Kongestif)",
        scenario: "Ny. M.G. mengeluh sesak dan bengkak kaki memberat. Minum Furosemid 40 mg oral tapi pipis tidak kunjung bertambah. Hasil lab: SCr 1.2 mg/dL, BB 48 kg.",
        drp: "1. Furosemid oral lambat diserap pada mukosa edematous lansia -> kadar tubulus di bawah ambang diuresis.\\n2. Hitung CrCl: fe(140-75) \\times 48 / (72 \\times 1.2) \\times 0.85 = 30.6fe mL/min (Gangguan ginjal tahap 3!).",
        recommendation: "Ganti ke Furosemid 40 mg IV secara perlahan untuk mengatasi edema akut. Setelah terkontrol, edukasi pembatasan natrium dan evaluasi interaksi obat nefrotoksik."
      }
    },

    {
      id: "bab5",
      number: "05",
      title: "Dua Pasien dalam Satu Resep: Ibu Hamil",
      tagline: "Ibu Sehat, Janin Selamat: Membedah Organogenesis, Barrier Plasenta & PLLR!",
      lecturerNote: "Calon apoteker hebat, saat merawat bumil, kalian sedang mengobati DUA nyawa sekaligus! Ingat: Kategori A, B, C, D, X dari FDA tahun 1979 SUDAH DITINGGALKAN sejak 2015. Sekarang kita wajib pakai sistem PLLR (Pregnancy and Lactation Labeling Rule) yang membedah narasi risiko secara nyata! 🤰",
      sections: [
        {
          subtitle: "Perubahan Fisiologis Kehamilan (Trimester 1 - 3)",
          items: [
            { icon: "heart", title: "Curah Jantung (+30 s/d 50%) & Volume Plasma (+40 s/d 50%)", desc: "Volume distribusi membesar secara masif. Kadar puncak obat larut air bisa turun (perlu dosis lebih tinggi pada obat tertentu seperti antibiotik beta-laktam)." },
            { icon: "wind", title: "Laju Filtrasi Ginjal / GFR (+50%)", desc: "Klirens ginjal melonjak drastis. Obat yang dibuang via ginjal (misal Ampisilin, Digoksin) dieliminasi lebih cepat." },
            { icon: "shield", title: "Albumin Menurun (Hemodilusi)", desc: "Fraksi bebas obat meningkat, namun klirens juga meningkat sehingga kadar total sering terlihat rendah semu." }
          ]
        },
        {
          subtitle: "3 Periode Kerentanan Janin (Timing is Everything!)",
          timeline: [
            {
              period: "Minggu 1 - 2 (Pascakonsepsi)",
              name: "Periode Pre-Diferensiasi (All-or-None Period)",
              desc: "Zigot belum menempel sempurna atau baru membelah sel. Paparan obat toksik akan menyebabkan keguguran spontan (None) ATAU sel induk yang tersisa memperbaiki diri sempurna sehingga janin tumbuh normal (All)."
            },
            {
              period: "Minggu 3 - 8 (Trimester 1)",
              name: "Periode Embriogenesis / Organogenesis (PERIODE PALING RENTAN!)",
              desc: "Pembentukan organ utama (jantung, SSP, anggota gerak, mata, telinga, bibir). Paparan teratogen (misal Talidomid, Metotreksat, Fenitoin) menyebabkan MALFORMASI ANATOMI STRUKTURAL permanen!"
            },
            {
              period: "Minggu 9 - Kelahiran (Trimester 2 & 3)",
              name: "Periode Fetal (Pertumbuhan & Pematangan Fungsi)",
              desc: "Organogenesis selesai, terjadi pertumbuhan ukuran dan pematangan fungsional otak/ginjal. Teratogen di fase ini memicu defisit fungsional, retardasi pertumbuhan intrauterin (IUGR), atau toksisitas organ (misal ACEI/ARB memicu anuria janin)."
            }
          ]
        },
        {
          subtitle: "Karakteristik Obat Menembus Plasenta",
          barrierRules: [
            { label: "Berat Molekul", text: "BM < 500 Da sangat mudah menembus plasenta secara difusi pasif. BM 500-1000 Da menembus lebih lambat. BM > 1000 Da (Heparin, Insulin) TIDAK MENEMBUS plasenta (Aman untuk bumil!)." },
            { label: "Kelarutan Lemak (Lipofilisitas)", text: "Obat lipofilik (Opioid, anestesi, sedatif) menembus plasenta dalam hitungan detik hingga menit." },
            { label: "Ionisasi & pH", text: "Darah janin sedikit lebih asam (pH 7.30) dibanding darah ibu (pH 7.40) -> Obat basa lemah (misal opioid) bisa terperangkap di sirkulasi janin (*Ion Trapping*)." }
          ]
        }
      ],
      caseStudy: {
        title: "Kasus 4: Ny. S. (32 th, Hamil 8 Minggu) & Obat Antihipertensi",
        scenario: "Ny. S. (G2P1A0) hamil 8 minggu, punya riwayat hipertensi kronik (TD 136/86 mmHg) dan hipotiroid. Saat ini rutin minum Lisinopril 10 mg 1x sehari dan Levotiroksin 88 mcg 1x pagi.",
        drp: "Lisinopril (ACE Inhibitor) adalah TERATOGEN BERBAHAYA! Penggunaan pada kehamilan (khususnya trimester 2-3) menyebabkan gangguan perfusi ginjal janin -> Anuria Janin -> Oligohidramnion (cairan ketuban habis) -> Hipoplasia Paru, Hipokalvaria (tengkorak tidak menutup), gagal ginjal janin, hingga kematian neonatal.",
        recommendation: "1. HENTIKAN LISINOPRIL DETIK INI JUGA!\\n2. Ganti antihipertensi lini pertama kehamilan: Metildopa oral, Labetalol oral, atau Nifedipin lepas lambat (Briggs: Compatible with Pregnancy).\\n3. Levotiroksin WAJIB DILANJUTKAN! Kebutuhan hormon tiroid justru naik 30-50% saat hamil untuk perkembangan otak janin (pantau TSH tiap 4 minggu)."
      }
    },

    {
      id: "bab5b",
      number: "06",
      title: "Obat & Air Susu Ibu (Laktasi): Lindungi Bayi!",
      tagline: "Hitung Relative Infant Dose (RID), Pahami Kategori Hale, Dukung ASI Eksklusif!",
      lecturerNote: "Teman-teman, jangan buru-buru nyuruh ibu stop menyusui hanya karena beliau minum obat! Sebagian besar obat hanya masuk sedikit ke ASI. Hitung dulu Relative Infant Dose (RID)-nya! Kalau RID < 10%, secara umum aman dan ibu tetap bisa mengASIhi dengan tenang. 🥰🍼",
      sections: [
        {
          subtitle: "Rumus Keramat: Relative Infant Dose (RID)",
          latexFormula: "\\text{RID (\\%)} = \\frac{\\text{Dosis Bayi via ASI (mg/kg/hari)}}{\\text{Dosis Terapi Ibu (mg/kg/hari)}} \\times 100\\%",
          explanation: "Standar Keamanan Internasional:\\n• RID < 10%: Umumnya dianggap RELATIF AMAN untuk bayi cukup bulan dan sehat.\\n• RID > 10%: Perlu perhatian khusus, evaluasi rasio manfaat/risiko, atau pilih alternatif obat lain.\\n• Obat sitotoksik / radioaktif / imunosupresif kuat: KONTRAINDIKASI mutlak menyusui apapun nilai RID-nya."
        },
        {
          subtitle: "Sifat Obat yang MEMINIMALISIR Masuk ke ASI (The Protective Shield)",
          shields: [
            { icon: "shield-check", title: "Ikatan Protein Plasma Tinggi (> 90%)", desc: "Hanya fraksi bebas yang bisa berdifusi ke kelenjar mamae. Contoh: Sertralin (98% protein-bound), Ibuprofen (99% protein-bound) -> Sangat sedikit masuk ASI!" },
            { icon: "anchor", title: "Berat Molekul Raksasa (> 800 - 1000 Da)", desc: "Molekul besar seperti Heparin, Insulin, dan Antibodi Monoklonal tidak bisa menembus taut sel alveoli mamae." },
            { icon: "clock", title: "Waktu Paruh Pendek (fet_{1/2}fe singkat)", desc: "Obat cepat dibersihkan dari darah ibu sebelum jadwal menyusui berikutnya." },
            { icon: "scissors", title: "Bioavailabilitas Oral Bayi Rendah", desc: "Meskipun obat masuk ke ASI, jika obat tersebut rusak oleh asam lambung/enzim usus bayi (misal Gentamisin, Vankomisin oral), obat tidak akan diserap ke darah bayi." }
          ]
        },
        {
          subtitle: "Kategori Keamanan Laktasi menurut Prof. Thomas Hale (L1 - L5)",
          haleCategories: [
            { code: "L1", status: "Paling Aman (Safest)", desc: "Obat telah digunakan oleh ribuan ibu menyusui tanpa efek merugikan, atau obat tidak bioavailabel pada bayi (contoh: Parasetamol, Ibuprofen, Sefaleksin)." },
            { code: "L2", status: "Aman (Safer)", desc: "Penelitian pada sejumlah ibu menyusui menunjukkan bukti efek merugikan sangat minim (contoh: Sertralin, Amoksisilin, Loratadin)." },
            { code: "L3", status: "Cukup Aman (Moderately Safe)", desc: "Tidak ada data terkontrol, atau terdapat risiko efek samping ringan yang terkendali." },
            { code: "L4", status: "Berpotensi Bahaya (Possibly Hazardous)", desc: "Terdapat bukti risiko pada bayi, hanya digunakan jika kondisi ibu mengancam jiwa." },
            { code: "L5", status: "KONTRAINDIKASI (Hazardous)", desc: "Obat terbukti sangat berbahaya bagi bayi (contoh: Kemoterapi sitotoksik, Radiofarmaka, Retinoid)." }
          ]
        }
      ],
      caseStudy: {
        title: "Kasus 5: Ny. D. (28 th, 6 Minggu Pascapersalinan) & Sertralin vs Kodein",
        scenario: "Ny. D. melahirkan sesar 6 minggu lalu, menyusui ASI eksklusif, bayi sehat (BB 4.8 kg). Didiagnosis depresi pascapersalinan dan diresepkan Sertralin 50 mg/hari serta Kodein 30 mg 3x/hari untuk nyeri punggung.",
        drp: "1. Sertralin: Kategori Hale L2, RID sangat rendah (0.4 - 2.2%), ikatan protein 98%. Kadar pada plasma bayi hampir tidak terdeteksi. AMAN DILANJUTKAN.\\n2. KODEIN: SANGAT BERBAHAYA! Kodein diubah jadi morfin via CYP2D6. Jika ibu adalah *Ultra-Rapid Metabolizer* CYP2D6, kadar morfin dalam ASI melonjak fatal hingga memicu depresi pernapasan dan kematian pada bayi (FDA Black Box Warning!).",
        recommendation: "1. Sertralin BOLEH dilanjutkan! Dukung ibu tetap menyusui sambil memantau pola tidur dan tumbuh kembang bayi.\\n2. HENTIKAN KODEIN SEGERA! Ganti analgesik aman: Ibuprofen (Hale L1, RID < 0.5%) atau Parasetamol (Hale L1)."
      }
    }
  ],

  // 3. Grand Round: Kasus Tugas Ny. K (Slide 44 - Komprehensif)
  grandRoundCase: {
    title: "Grand Round Clinic: Kasus Ny. K (80 Tahun, 45 kg)",
    weightGrade: "Bobot Nilai: 2.5% - Sesi Uji Kompetensi Apoteker Klinis",
    patient: {
      name: "Ny. K",
      age: 80,
      gender: "Wanita",
      weight: 45,
      scr: 1.4,
      chiefComplaints: "Infeksi Saluran Kemih (disuria, demam ringan), Nyeri Sendi Lutut bilateral (Osteoartritis), dan Mengeluh Sulit Tidur (Insomnia).",
      currentDrugs: [
        { name: "Metformin", dose: "850 mg 2× sehari", indication: "Diabetes Melitus Tipe 2" },
        { name: "Siprofloksasin", dose: "500 mg 2× sehari", indication: "Infeksi Saluran Kemih" },
        { name: "Meloksikam", dose: "15 mg 1× sehari", indication: "Nyeri Osteoartritis Lutut" },
        { name: "Diazepam", dose: "5 mg malam hari", indication: "Keluhan Sulit Tidur" }
      ]
    },
    stepByStepSolver: [
      {
        stepNumber: 1,
        title: "Hitung CrCl Cockcroft-Gault & Tentukan Derajat Gangguan Ginjal",
        formulaUsed: "CrCl = \\frac{(140 - 80) \\times 45}{72 \\times 1.4} \\times 0.85 = \\frac{60 \\times 45}{100.8} \\times 0.85 = 26.78 \\times 0.85 = 22.76 \\approx 22.8 \\text{ mL/menit}",
        result: "CrCl = 22.8 mL/min (Gangguan Ginjal Tahap 4 / Berat: 15 - 29 mL/min).",
        clinicalInsight: "Walaupun SCr pasien hanya 1.4 mg/dL (terlihat 'hanya sedikit di atas normal lab'), karena usia 80 tahun dan BB hanya 45 kg, fungsi ginjal sebenarnya sudah turun drastis ke level berat!"
      },
      {
        stepNumber: 2,
        title: "Identifikasi 4 Masalah Terkait Obat (DRP Analysis)",
        drps: [
          {
            drug: "Metformin 850 mg 2x/hari",
            problem: "KONTRAINDIKASI MUTLAK pada CrCl < 30 mL/min! Risiko tinggi akumulasi asam laktat (Lactic Acidosis) yang berpotensi fatal.",
            severity: "KRITIS / MERAH"
          },
          {
            drug: "Siprofloksasin 500 mg 2x/hari",
            problem: "Dosis berlebih untuk CrCl 22.8 mL/min (normal 500 mg q12h). Risiko neurotoksisitas, kebingungan mental, pemanjangan QTc, dan tendinopati pada lansia.",
            severity: "TINGGI / ORANYE"
          },
          {
            drug: "Meloksikam 15 mg 1x/hari (NSAID)",
            problem: "Nefrotoksik! Menghambat prostaglandin vasodilatator aferen ginjal -> menurunkan GFR lebih lanjut, memicu retensi cairan & hipertensi.",
            severity: "TINGGI / ORANYE"
          },
          {
            drug: "Diazepam 5 mg malam hari",
            problem: "BEERS CRITERIA RED FLAG! Benzodiazepin long-acting pada lansia dengan penurunan klirens -> waktu paruh molor, sedasi berkepanjangan, ataksia, dan risiko TINGGI JATUH/FRAKTUR.",
            severity: "KRITIS / MERAH"
          }
        ]
      },
      {
        stepNumber: 3,
        title: "Rekomendasi Terapi Pengganti & Dosis Tepat (Evidence-Based)",
        recommendations: [
          {
            target: "Diabetes Melitus",
            solution: "STOP Metformin! Ganti dengan Linagliptin 5 mg 1x sehari (ekskresi mayoritas via empedu/feses, tidak butuh penyesuaian dosis ginjal) atau Insulin basal dosis rendah.",
            reference: "KDIGO 2023 & ADA Guidelines 2024"
          },
          {
            target: "Infeksi Saluran Kemih",
            solution: "Sesuaikan dosis Siprofloksasin menjadi 250 mg tiap 12 jam ATAU 500 mg tiap 24 jam selama 3-5 hari, atau pertimbangkan antibiotik yang lebih ramah lansia seperti Fosfomisin 3g single dose.",
            reference: "Renal Drug Handbook 5th Ed"
          },
          {
            target: "Nyeri Osteoartritis",
            solution: "STOP Meloksikam oral! Mulai dengan Parasetamol oral 500 mg 3x/hari (maks 2-3 g/hari) ditambah Diklofenak Gel Topikal 1% pada kedua lutut (penyerapan sistemik < 5%, sangat aman untuk ginjal lansia).",
            reference: "ACR Guidelines for Osteoarthritis & Beers Criteria 2023"
          },
          {
            target: "Keluhan Sulit Tidur",
            solution: "STOP Diazepam! Terapkan Sleep Hygiene (batasi tidur siang, kamar redup, hindari kafein sore). Jika sangat diperlukan untuk jangka pendek, pertimbangkan Melatonin 1-3 mg atau Lorazepam 0.5 mg prn.",
            reference: "AGS Beers Criteria 2023"
          }
        ]
      },
      {
        stepNumber: 4,
        title: "Rencana Pemantauan Klinis & Edukasi Pasien / Keluarga",
        monitoringPoints: [
          "Pantau Serum Kreatinin (SCr), elektrolit (Kalium, Natrium), dan produksi urin dalam 48-72 jam.",
          "Pantau tanda vital, gula darah sewaktu (GDS) rutin untuk mencegah hipoglikemia pasca peralihan obat DM.",
          "Evaluasi perbaikan gejala ISK (demam, disuria) dan pantau ada tidaknya efek samping pusing/ataksia.",
          "Edukasi keluarga untuk memastikan asupan cairan cukup (tidak dehidrasi) dan menyingkirkan karpet licin di rumah untuk mencegah risiko jatuh."
        ]
      }
    ]
  },

  // 4. Comprehensive HOTS Clinical Quiz (60 Soal Kasus Adaptif & Penuh Narasi)
  quiz: [
    {
      "id": "q1",
      "category": "Kalkulasi PK",
      "question": "Tn. B (62 th, BB 70 kg, TB 170 cm) dirawat di bangsal paru dengan pneumonia nosokomial berat. Pasien menerima antibiotik bakterisidal X dengan parameter eliminasi fraksi ekskresi ginjal utuh fe = 0.80. Nilai Serum Kreatinin pasien saat ini 2.8 mg/dL dengan Klirens Kreatinin terhitung CrCl = 25 mL/menit (Klirens normal referensi 100 mL/menit). Dosis lazim antibiotik X pada fungsi ginjal normal adalah 500 mg tiap 8 jam. Dokter meminta apoteker menghitung penyesuaian penurunan dosis (Dose Reduction strategy) berdasarkan Formula Dettli agar akumulasi obat tidak memicu nefrotoksisitas sekunder. Berapakah nilai faktor fraksi eliminasi Dettli (Q) dan rekomendasi regimen dosis pemeliharaan baru yang tepat dengan interval pemberian tetap tiap 8 jam?",
      "options": [
        {
          "label": "A",
          "text": "Q = 0.25; Regimen baru yang direkomendasikan adalah 125 mg tiap 8 jam",
          "correct": false
        },
        {
          "label": "B",
          "text": "Q = 0.40; Regimen baru yang direkomendasikan adalah 200 mg tiap 8 jam",
          "correct": true
        },
        {
          "label": "C",
          "text": "Q = 0.60; Regimen baru yang direkomendasikan adalah 300 mg tiap 8 jam",
          "correct": false
        },
        {
          "label": "D",
          "text": "Q = 0.80; Regimen baru yang direkomendasikan adalah 400 mg tiap 8 jam",
          "correct": false
        }
      ],
      "explanation": "Rasio fungsi ginjal KF = CrCl_pasien / CrCl_normal = 25 / 100 = 0.25. Faktor Dettli Q = 1 - fe * (1 - KF) = 1 - 0.80 * (1 - 0.25) = 1 - 0.80 * 0.75 = 1 - 0.60 = 0.40. Pada strategi penurunan dosis (Dose Reduction) dengan interval tetap (tau = 8 jam): Dosis_pasien = Dosis_normal * Q = 500 mg * 0.40 = 200 mg tiap 8 jam."
    },
    {
      "id": "q2",
      "category": "Kalkulasi PK",
      "question": "Pada Tn. B di atas (Q = 0.40, klirens menurun 60%), dokter spesialis mikrobiologi mengingatkan bahwa antibiotik X bersifat concentration-dependent bactericidal (daya bunuh kuman bergantung pada tingginya rasio Cmax/MIC). Jika dosis per pemberian diturunkan menjadi 200 mg, kadar puncak Cmax dikhawatirkan gagal membasmi bakteri resisten. Oleh karena itu, tim medis memutuskan untuk mempertahankan dosis penuh 500 mg namun memperpanjang interval pemberian (Interval Extension strategy). Berapakah interval pemberian baru (tau_pasien) yang harus ditetapkan apoteker untuk mempertahankan profil Cmax puncak yang adekuat tanpa akumulasi toksik?",
      "options": [
        {
          "label": "A",
          "text": "tau_pasien = 12 jam; Regimen baru adalah 500 mg tiap 12 jam",
          "correct": false
        },
        {
          "label": "B",
          "text": "tau_pasien = 16 jam; Regimen baru adalah 500 mg tiap 16 jam",
          "correct": false
        },
        {
          "label": "C",
          "text": "tau_pasien = 32 jam; Regimen baru adalah 500 mg tiap 32 jam",
          "correct": false
        },
        {
          "label": "D",
          "text": "tau_pasien = 20 jam; Regimen baru adalah 500 mg tiap 20 jam (dapat dibulatkan secara praktis menjadi 500 mg tiap 24 jam dengan TDM)",
          "correct": true
        }
      ],
      "explanation": "Pada strategi perpanjangan interval (Interval Extension): tau_pasien = tau_normal / Q = 8 jam / 0.40 = 20 jam. Dengan memberikan 500 mg tiap 20 jam (atau disesuaikan secara praktis 24 jam dengan pemantauan TDM kadar palung), kadar puncak Cmax tetap tinggi mencapai target bakterisidal puncak sementara waktu eliminasi diperpanjang untuk mencegah akumulasi toksik pada organ ginjal."
    },
    {
      "id": "q3",
      "category": "Kalkulasi PK",
      "question": "Tn. Y (55 th, BB 60 kg) dirawat di ICU dengan syok sepsis dan membutuhkan terapi darurat antibiotik bakterisidal Aminoglikosida intravena. Target kadar puncak terapeutik (Cmax) yang harus segera dicapai untuk membasmi kuman adalah 20 mcg/mL. Diketahui volume distribusi populasi obat adalah Vd = 0.25 L/kgBB. Pasien memiliki disfungsi ginjal berat dengan estimasi klirens obat turun 70% (CL = 1.2 L/jam). Berapakah Dosis Muatan (Loading Dose / D_L) yang harus segera diberikan kepada Tn. Y pada pemberian pertama, dan bagaimana prinsip eliminasi mempengaruhi penentuan Loading Dose?",
      "options": [
        {
          "label": "A",
          "text": "Loading Dose = 300 mg; Dosis muatan HANYA dipengaruhi oleh Volume Distribusi (Vd) dan target konsentrasi plasma (C_target), TIDAK diturunkan oleh gangguan klirens ginjal pasien",
          "correct": true
        },
        {
          "label": "B",
          "text": "Loading Dose = 90 mg; Dosis muatan harus diturunkan 70% sebanding dengan penurunan klirens ginjal untuk mencegah nefrotoksisitas instan",
          "correct": false
        },
        {
          "label": "C",
          "text": "Loading Dose = 600 mg; Dosis muatan harus digandakan karena eliminasi ginjal yang lambat menghambat penetrasi obat ke jaringan perifer",
          "correct": false
        },
        {
          "label": "D",
          "text": "Loading Dose = 150 mg; Dosis muatan dihitung dari perkalian klirens total dengan waktu paruh eliminasi baru",
          "correct": false
        }
      ],
      "explanation": "Prinsip Emas Farmakokinetik Klinis: Formula Loading Dose: D_L = Vd * C_target. Vd = 0.25 L/kg * 60 kg = 15 Liter. D_L = 15 L * 20 mg/L = 300 mg. Hukum Fundamental: Loading dose bertujuan mengisi ruang distribusi tubuh hingga mencapai kadar terapeutik efektif secepat mungkin. Oleh karena itu, D_L TIDAK bergantung pada Klirens (CL) atau fungsi organ eliminasi. Penurunan fungsi ginjal HANYA mempengaruhi dosis pemeliharaan (Maintenance Dose) dan interval pemberian (tau), BUKAN dosis muatan awal!"
    },
    {
      "id": "q4",
      "category": "Kalkulasi PK",
      "question": "Suatu obat kardiologi memiliki Volume Distribusi (Vd) normal sebesar 50 Liter dan Klirens Total (CL) normal sebesar 5 L/jam pada individu sehat (sehingga waktu paruh normal t1/2 = 6.93 jam). Ny. K (68 th) dengan Gagal Ginjal Kronis Stadium 5 mengalami penurunan klirens total obat menjadi hanya 1.25 L/jam, sedangkan nilai Vd obat tidak berubah (tetap 50 Liter). Berapakah waktu paruh eliminasi (t1/2) obat yang baru pada Ny. K dan berapa lama waktu yang dibutuhkan infus kontinu tanpa loading dose untuk mencapai kondisi tunak (Steady-State / C_ss)?",
      "options": [
        {
          "label": "A",
          "text": "t1/2 = 13.86 jam; Waktu untuk mencapai kondisi tunak adalah sekitar 24 hingga 36 jam",
          "correct": false
        },
        {
          "label": "B",
          "text": "t1/2 = 6.93 jam; Waktu untuk mencapai kondisi tunak tetap sama 28 hingga 35 jam karena steady state tidak dipengaruhi klirens",
          "correct": false
        },
        {
          "label": "C",
          "text": "t1/2 = 27.72 jam; Waktu untuk mencapai kondisi tunak adalah sekitar 111 hingga 139 jam (membutuhkan 4 hingga 5 kali waktu paruh)",
          "correct": true
        },
        {
          "label": "D",
          "text": "t1/2 = 55.44 jam; Waktu untuk mencapai kondisi tunak adalah 12 jam pasca inisiasi infus",
          "correct": false
        }
      ],
      "explanation": "t1/2 = (0.693 * Vd) / CL = (0.693 * 50 L) / 1.25 L/jam = 34.65 / 1.25 = 27.72 jam (waktu paruh molor 4 kali lipat akibat klirens turun 4 kali lipat!). Waktu untuk mencapai kondisi tunak (steady-state, 93.75% - 96.875% akumulasi) secara farmakokinetik mutlak membutuhkan 4 - 5 * t1/2: 4 * 27.72 jam = 110.88 jam hingga 5 * 27.72 jam = 138.6 jam (~4.5 - 5.8 hari!). Tanpa loading dose, pasien berada dalam kondisi subterapeutik selama berhari-hari."
    },
    {
      "id": "q5",
      "category": "Kalkulasi PK",
      "question": "Tn. M (50 th, BB 65 kg) dirawat di bangsal nefrologi dengan sindrom nefrotik berat. Pemeriksaan laboratorium menunjukkan Albumin serum anjlok ke 1.8 g/dL (normal: 3.5 - 5.0 g/dL). Pasien mengalami kejang fokal sekunder dan menerima antikonvulsan Fenitoin oral. Hasil pemantauan kadar obat terapeutik (TDM) melaporkan kadar total Fenitoin serum terukur adalah 7.5 mcg/mL (tampak subterapeutik bila dibandingkan rentang target populasi normal 10 - 20 mcg/mL). Mengapa kadar total terukur tersebut menipu, berapakah estimasi konsentrasi Fenitoin terkoreksi albumin menurut Persamaan Winter-Tozer, dan rekomendasi klinis apa yang harus diberikan apoteker?",
      "options": [
        {
          "label": "A",
          "text": "Fenitoin terkoreksi = 7.5 mcg/mL; Hipoalbuminemia tidak mempengaruhi distribusi fenitoin; dosis harus segera digandakan hingga kadar mencapai 15 mcg/mL",
          "correct": false
        },
        {
          "label": "B",
          "text": "Fenitoin terkoreksi = 16.3 mcg/mL; Kadar obat sebenarnya berada di rentang target terapeutik optimal (10-20 mcg/mL) karena hipoalbuminemia meningkatkan fraksi bebas aktif obat; JANGAN menaikkan dosis fenitoin karena berisiko toksisitas fatal!",
          "correct": true
        },
        {
          "label": "C",
          "text": "Fenitoin terkoreksi = 3.75 mcg/mL; Pasien mengalami defisiensi absorbsi saluran cerna; ganti fenitoin ke rute intramuskular dengan dosis 3 kali lipat",
          "correct": false
        },
        {
          "label": "D",
          "text": "Fenitoin terkoreksi = 28.5 mcg/mL; Pasien berada dalam kondisi intoksikasi letal; fenitoin harus segera dihentikan dan dilakukan dialisis albumin",
          "correct": false
        }
      ],
      "explanation": "Formula Winter-Tozer untuk koreksi kadar Fenitoin pada hipoalbuminemia: C_terkoreksi = C_terukur / ((0.2 * Albumin) + 0.1) = 7.5 / ((0.2 * 1.8) + 0.1) = 7.5 / (0.36 + 0.1) = 7.5 / 0.46 = 16.30 mcg/mL. Fenitoin adalah obat asam dengan ikatan protein plasma sangat tinggi (~90%). Pada hipoalbuminemia berat, situs pengikatan albumin berkurang drastis sehingga fraksi bebas tak terikat (fu) yang aktif secara farmakologis meningkat. Laboratorium hanya mengukur kadar total (terikat + bebas). Kadar terukur 7.5 mcg/mL sebenarnya setara dengan kadar efektif 16.3 mcg/mL pada albumin normal. Menaikkan dosis pada pasien ini akan memicu toksisitas neurologis berat (nistagmus, ataksia, koma)."
    },
    {
      "id": "q6",
      "category": "Fundamental PK",
      "question": "Apoteker klinis di ruang rawat intensif membandingkan dua obat dengan karakteristik klirens hepar yang bertolak belakang: Obat A bersifat High Extraction Ratio (E_H > 0.7, klirens bergantung pada aliran darah hepar / perfusion-limited), sedangkan Obat B bersifat Low Extraction Ratio (E_H < 0.3, klirens bergantung pada aktivitas intrinsik enzim mikrosomal hepar dan fraksi bebas / capacity-limited). Pasien kelolaan mengalami sirosis hepatis dekompensata dengan pembentukan shunt portosistemik masif yang mengalihkan 60% aliran darah portal langsung ke sirkulasi sistemik tanpa melewati sinusoid hepatosit. Apa konsekuensi farmakokinetik pemberian oral Obat A versus Obat B pada pasien sirosis dengan portosystemic shunting tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Bioavailabilitas Obat A akan turun menjadi nol karena hepar memblokade seluruh absorbsi obat di duodenum",
          "correct": false
        },
        {
          "label": "B",
          "text": "Obat B akan mengalami peningkatan klirens total 5 kali lipat karena darah dialirkan langsung ke vena kava inferior",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kedua obat tidak mengalami perubahan farmakokinetik karena sirkulasi portosistemik hanya mempengaruhi metabolisme karbohidrat",
          "correct": false
        },
        {
          "label": "D",
          "text": "Bioavailabilitas oral (F) Obat A akan melonjak drastis secara tidak terduga akibat hilangnya metabolisme lintas pertama (first-pass metabolism), sedangkan klirens sistemik Obat B akan turun terutama akibat penurunan kapasitas intrinsik enzim CYP450 dan deplesi albumin",
          "correct": true
        }
      ],
      "explanation": "Pada obat High Extraction Ratio (E_H > 0.7, cth: Propranolol, Morfin, Verapamil, Lidokain), first-pass metabolism di hepar normal sangat masif sehingga bioavailabilitas oral lazim hanya 10-30%. Pada sirosis dengan portosystemic shunt, darah portal yang membawa obat oral memotong hepatosit dan langsung masuk sirkulasi sistemik. Hal ini menyebabkan first-pass metabolism kolaps dan bioavailabilitas (F) melonjak hingga 2 - 4 kali lipat (memicu overdosis toksik pada dosis lazim). Sebaliknya, pada obat Low Extraction Ratio (E_H < 0.3, cth: Warfarin, Fenitoin, Teofilin), klirens tidak bergantung pada aliran darah melainkan pada kapasitas enzim intrinsik (CL_int) dan fraksi bebas (fu). Penurunan massa hepatosit fungsional pada sirosis menurunkan CL_int secara signifikan."
    },
    {
      "id": "q7",
      "category": "Fundamental PK",
      "question": "Seorang pasien lansia (78 th) dengan gastritis erosif rutin mengonsumsi Omeprazol 20 mg 2x/hari selama 3 bulan sehingga pH lambungnya meningkat netral (pH > 5.5). Pasien didiagnosis terinfeksi jamur sistemik dan diresepkan Ketokonazol tablet oral 200 mg 1x/hari serta suplemen Besi (Ferro Sulfat 300 mg). Dua minggu kemudian, terapi infeksi jamur dinyatakan gagal total dan anemia defisiensi besi pasien tidak membaik sama sekali. Berdasarkan prinsip kelarutan dan ionisasi fisikokimia obat, apa penyebab kegagalan terapi tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Ketokonazol adalah basa lemah yang membutuhkan keasaman lambung (pH < 3.0) untuk mengalami disolusi dan ionisasi agar dapat diabsorbsi, dan ion Besi membutuhkan suasana asam untuk mereduksi Fe3+ menjadi Fe2+; hipoklorhidria kronis akibat PPI menggagalkan disolusi dan absorbsi sistemik kedua agen tersebut",
          "correct": true
        },
        {
          "label": "B",
          "text": "Omeprazol menginduksi transporter efflux P-glikoprotein di enterosit ileum sehingga membuang seluruh ketokonazol kembali ke lumen usus",
          "correct": false
        },
        {
          "label": "C",
          "text": "Ketokonazol dan Besi membentuk senyawa dimer kovalen yang mengendap di esofagus bagian bawah",
          "correct": false
        },
        {
          "label": "D",
          "text": "Peningkatan pH lambung memicu degradasi enzimatik pepsin terhadap cincin azol ketokonazol",
          "correct": false
        }
      ],
      "explanation": "Ketokonazol dan Itrakonazol konvensional adalah senyawa basa sangat lemah yang memiliki profil kelarutan bergantung-pH (pH-dependent solubility). Obat-obatan ini membutuhkan lingkungan asam kuat (pH 1-2) di lambung untuk proses disintegrasi, pelarutan (disolusi), dan ionisasi sebelum diserap di duodenum. Penggunaan kronis PPI atau H2-blocker meningkatkan pH lambung mendekati netral (pH > 5), sehingga serbuk tablet ketokonazol tidak dapat melarut dan diekskresi utuh di feses tanpa diserap (AUC anjlok > 80%). Demikian pula absorpsi besi non-heme membutuhkan asam lambung untuk reduksi Fe3+ ke bentuk Fe2+ yang dapat diserap via DMT-1."
    },
    {
      "id": "q8",
      "category": "Fundamental PK",
      "question": "Tn. E (60 th) penderita DM Tipe 2 dengan komplikasi Penyakit Ginjal Kronis (CKD Stage 4, eGFR 22 mL/menit/1.73m²) datang untuk evaluasi terapi antidiabetes. Pasien saat ini masih meminum Glibenklamid 5 mg 1x/hari dan mengalami episode hipoglikemia berulang yang berat di rumah (GDS pernah 42 mg/dL dengan keringat dingin dan tremor). Mengapa Glibenklamid KONTRAINDIKASI MUTLAK pada gangguan ginjal berat dan agen golongan inhibitor DPP-4 manakah yang paling aman dipilih karena eliminasinya independen dari fungsi ginjal tanpa perlu penyesuaian dosis?",
      "options": [
        {
          "label": "A",
          "text": "Glibenklamid memicu nefrokalsinosis kristal tubular akut; Sitagliptin adalah DPP-4 inhibitor yang tidak butuh penyesuaian dosis ginjal",
          "correct": false
        },
        {
          "label": "B",
          "text": "Glibenklamid menghambat produksi eritropoietin ginjal; Alogliptin adalah obat yang aman tanpa penyesuaian dosis",
          "correct": false
        },
        {
          "label": "C",
          "text": "Glibenklamid memiliki metabolit aktif yang dieliminasi via ginjal dan berakumulasi memicu hipoglikemia berkepanjangan yang fatal; Linagliptin adalah DPP-4 inhibitor pilihan utama karena dieliminasi mayoritas via rute bilier/feses (> 80%) tanpa penyesuaian dosis",
          "correct": true
        },
        {
          "label": "D",
          "text": "Glibenklamid menginduksi sekresi asam urat masif; Vildagliptin aman digunakan pada dosis maksimal 100 mg 2x/hari tanpa modifikasi ginjal",
          "correct": false
        }
      ],
      "explanation": "Glibenklamid (Gliburid) dimetabolisme di hati menjadi metabolit aktif (4-trans-hidroksiglibenklamid dan 3-cis-hidroksiglibenklamid) yang diekskresi 50% via filtrasi ginjal. Pada gagal ginjal (CKD Stage 3-5, eGFR < 60 mL/min), metabolit aktif ini berakumulasi masif, memperpanjang stimulasi sekresi insulin sel beta pankreas selama berhari-hari, memicu hipoglikemia berat yang mengancam jiwa. Sebaliknya, di antara seluruh DPP-4 inhibitor, Linagliptin adalah satu-satunya agen yang dieliminasi terutama via enterohepatik/empedu dan feses (~85%), sehingga dapat diberikan pada dosis lazim 5 mg sekali sehari pada setiap derajat gangguan ginjal (bahkan pada hemodialisis) tanpa penyesuaian dosis."
    },
    {
      "id": "q9",
      "category": "Fundamental PK",
      "question": "Ny. T (52 th) dirawat di bangsal nefrologi dengan Acute Kidney Injury (AKI Stage 3). Pasien memiliki riwayat aritmia atrial fibrilasi dan rutin mengonsumsi Digoksin tablet 0.25 mg 1x/hari. Serum Kreatinin pasien naik dari baseline 0.9 menjadi 3.6 mg/dL. Kadar kalium darah terukur 5.6 mEq/L. Apoteker klinis menginstruksikan penghentian sementara Digoksin dan pemeriksaan kadar serum darurat. Berdasarkan karakteristik farmakokinetik eliminasi Digoksin (fe = 0.70 - 0.80, indeks terapi sempit target 0.5 - 0.9 ng/mL), apa bahaya farmakodinamik yang mengancam jika dosis digoksin tidak disesuaikan pada gagal ginjal akut?",
      "options": [
        {
          "label": "A",
          "text": "Digoksin akan mengalami pergeseran ikatan protein menjadi 100% sehingga tidak mampu berikatan dengan pompa Na+/K+ ATPase di miokard",
          "correct": false
        },
        {
          "label": "B",
          "text": "Penurunan klirens ginjal menyebabkan akumulasi kadar Digoksin plasma melampaui ambang toksik (> 2.0 ng/mL), yang diperparah oleh gangguan elektrolit hingga memicu aritmia ventrikel letal (VT/VF) dan blok atrioventrikular derajat tinggi",
          "correct": true
        },
        {
          "label": "C",
          "text": "Digoksin akan diubah oleh mikrobiota usus menjadi metabolit inaktif yang memicu hipertensi krisis",
          "correct": false
        },
        {
          "label": "D",
          "text": "Gangguan ginjal mempercepat klirens digoksin sehingga memicu eksaserbasi takiaritmia akibat hilangnya efek inotropik",
          "correct": false
        }
      ],
      "explanation": "Digoksin dieliminasi terutama melalui filtrasi glomerulus dan sekresi aktif tubulus renalis via P-glikoprotein (fe = 70-80%). Waktu paruhnya pada fungsi ginjal normal adalah 36-48 jam, namun pada gagal ginjal anurik melonjak menjadi 3.5 hingga 5 hari. Karena indeks terapinya sangat sempit (target gagal jantung: 0.5 - 0.9 ng/mL; kadar > 1.2 - 2.0 ng/mL sudah toksik), penurunan GFR akut tanpa penyesuaian dosis akan melipatgandakan kadar serum hingga ke rentang fatal. Keracunan digoksin memicu aritmia fatal (ekstrasistol ventrikel, takikardia ventrikel bidireksional, AV block total) dan hiperkalemia berat akibat hambatan sistemik pompa Na+/K+-ATPase."
    },
    {
      "id": "q10",
      "category": "Fundamental PK",
      "question": "Seorang apoteker memimpin ronde klinis di bangsal anak dan mendiskusikan perbedaan fisiologis farmakokinetik antara neonatus prematur (usia gestasi 32 minggu, usia kronologis 5 hari) dengan dewasa muda. Pasien neonatus menerima terapi Gentamisin dan Fenobarbital. Manakah pernyataan yang PALING TEPAT mengenai perubahan Volume Distribusi (Vd) obat hidrofilik versus lipofilik serta kapasitas metabolisme obat pada kelompok neonatus?",
      "options": [
        {
          "label": "A",
          "text": "Neonatus memiliki persentase lemak tubuh 50% sehingga obat hidrofilik tidak dapat terdistribusi ke kompartemen sentral",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kapasitas filtrasi glomerulus neonatus sudah matang sempurna sejak hari ke-2 kelahiran melebihi kapasitas orang dewasa",
          "correct": false
        },
        {
          "label": "C",
          "text": "Neonatus memiliki kadar albumin plasma 2 kali lebih tinggi dibanding dewasa sehingga fraksi bebas obat asam turun drastis",
          "correct": false
        },
        {
          "label": "D",
          "text": "Persentase total cairan tubuh neonatus sangat tinggi (~80% BB) sehingga Volume Distribusi (Vd) obat hidrofilik (seperti Gentamisin) meningkat signifikan dan membutuhkan dosis muatan (mg/kg) lebih besar; sedangkan ekspresi enzim CYP450 dan glukuronidasi (UGT) masih sangat imatur sehingga klirens obat metabolik lambat dan waktu paruh memanjang",
          "correct": true
        }
      ],
      "explanation": "Karakteristik Farmakokinetik Neonatus: 1. Komposisi Tubuh: Air tubuh total (Total Body Water) pada neonatus prematur mencapai 80-85% dari BB (dibanding dewasa ~55-60%). Akibatnya, obat-obat hidrofilik polar (seperti Aminoglikosida: Gentamisin/Amikasin) memiliki volume distribusi (Vd) per kilogram yang jauh lebih besar (0.4 - 0.5 L/kg vs dewasa 0.25 L/kg), sehingga membutuhkan loading dose per kgBB yang lebih tinggi untuk mencapai kadar puncak efektif. 2. Imaturitas Eliminasi: Filtrasi glomerulus (GFR) saat lahir hanya ~30-40% dari dewasa, dan sistem enzim mikrosomal hepar (CYP450 serta konjugasi glukuronidasi UGT) sangat belum matang. Hal ini menyebabkan klirens metabolik obat lambat dan waktu paruh memanjang, membutuhkan perpanjangan interval pemberian (misal gentamisin tiap 24-36 jam). Contoh klasik toksisitas imaturitas UGT adalah Gray Baby Syndrome akibat akumulasi Kloramfenikol."
    },
    {
      "id": "q11",
      "category": "Gangguan Ginjal",
      "question": "Ny. W (68 th, wanita, BB 48 kg, TB 152 cm) dirawat di ruang penyakit dalam dengan infeksi luka diabetik. Hasil laboratorium menunjukkan Serum Kreatinin 2.0 mg/dL, BUN 38 mg/dL, Albumin 3.1 g/dL. Berapakah nilai Klirens Kreatinin (CrCl) Ny. W yang dihitung menggunakan Persamaan Cockcroft-Gault dan klasifikasi derajat gangguan fungsi ginjalnya menurut KDIGO?",
      "options": [
        {
          "label": "A",
          "text": "CrCl = 35.5 mL/menit; Gangguan Ginjal Derajat Sedang (Tahap 3)",
          "correct": false
        },
        {
          "label": "B",
          "text": "CrCl = 24.0 mL/menit; Gangguan Ginjal Derajat Berat (Tahap 4)",
          "correct": false
        },
        {
          "label": "C",
          "text": "CrCl = 20.4 mL/menit; Gangguan Ginjal Derajat Berat (Tahap 4, rentang 15-29 mL/menit)",
          "correct": true
        },
        {
          "label": "D",
          "text": "CrCl = 16.8 mL/menit; Gagal Ginjal Terminal (Tahap 5)",
          "correct": false
        }
      ],
      "explanation": "Formula Cockcroft-Gault Wanita: CrCl = [((140 - Usia) * BB) / (72 * SCr)] * 0.85 = [((140 - 68) * 48) / (72 * 2.0)] * 0.85 = [(72 * 48) / 144] * 0.85 = [3456 / 144] * 0.85 = 24.0 * 0.85 = 20.4 mL/menit. Rentang CrCl 15 - 29 mL/menit diklasifikasikan sebagai Gangguan Ginjal Derajat Berat (Tahap 4). Kesalahan paling fatal yang sering dilakukan klinisi adalah lupa mengalikan faktor koreksi jenis kelamin wanita (0.85), yang menyebabkan perkiraan klirens overestimate 15% lebih tinggi dari kenyataan."
    },
    {
      "id": "q12",
      "category": "Gangguan Ginjal",
      "question": "Tn. D (56 th) penderita diabetes melitus tipe 2 datang ke poliklinik dengan membawa hasil lab: eGFR 24 mL/menit/1.73m² (CKD Stage 4) dan SCr 2.6 mg/dL. Dokter penyakit dalam meminta pertimbangan apoteker mengenai kelanjutan terapi Metformin 1000 mg 2x/hari yang selama ini diminum pasien. Mengapa Metformin KONTRAINDIKASI MUTLAK pada kondisi Tn. D dan apa patofisiologi komplikasi fatal yang dikhawatirkan?",
      "options": [
        {
          "label": "A",
          "text": "Metformin dieliminasi 90-100% utuh via filtrasi ginjal; pada eGFR < 30 mL/min, akumulasi obat menghambat fosforilasi oksidatif mitokondria dan konversi laktat menjadi glukosa di hepar, memicu penumpukan asam laktat masif (Lactic Acidosis) dengan mortalitas mencapai 30-50%",
          "correct": true
        },
        {
          "label": "B",
          "text": "Metformin memblokade kanal natrium di tubulus proksimal yang memicu nekrosis tubular akut dalam waktu 24 jam",
          "correct": false
        },
        {
          "label": "C",
          "text": "Metformin mengikat kalsium serum membentuk kristal nefrolitiasis yang menyumbat ureter bilateral",
          "correct": false
        },
        {
          "label": "D",
          "text": "Metformin memicu pelepasan histamin masif yang menyebabkan sindrom Stevens-Johnson renal",
          "correct": false
        }
      ],
      "explanation": "Metformin tidak dimetabolisme oleh hati dan diekskresi hampir 100% dalam bentuk utuh melalui filtrasi glomerulus dan sekresi aktif tubulus ginjal (OCT2/MATE1). Pada insufisiensi ginjal berat (eGFR < 30 mL/min/1.73m²), klirens renal metformin anjlok drastis menyebabkan akumulasi intraseluler masif. Kadar metformin tinggi menghambat kompleks I rantai transport elektron mitokondria, menekan respirasi aerobik seluler, dan menghambat glukoneogenesis hepar dari prekursor laktat. Akibatnya, asam laktat menumpuk di sirkulasi sistemik memicu Asidosis Laktat (Metformin-Associated Lactic Acidosis / MALA) dengan gejala syok, asidosis metabolik anion-gap tinggi, hipotermia, dan angka kematian hingga 50%. Metformin mutlak KONTRAINDIKASI pada eGFR < 30 mL/min."
    },
    {
      "id": "q13",
      "category": "Gangguan Ginjal",
      "question": "Tn. K (58 th) dengan End-Stage Renal Disease (ESRD) yang rutin menjalani Hemodialisis (HD) 3 kali seminggu mengalami bakteremia MRSA nosokomial dan diresepkan antibiotik glikopeptida Vankomisin IV. Dializer yang digunakan di unit hemodialisis adalah High-Flux Polysulfone. Kapan waktu pemberian dosis pemeliharaan Vankomisin yang paling tepat secara farmakokinetik?",
      "options": [
        {
          "label": "A",
          "text": "Tepat 4 jam sebelum sesi hemodialisis dimulai agar obat sempat terdistribusi merata ke seluruh organ",
          "correct": false
        },
        {
          "label": "B",
          "text": "Hanya diberikan pada hari bebas dialisis di pagi hari saat puasa",
          "correct": false
        },
        {
          "label": "C",
          "text": "Secara bolus intravena cepat saat jarum fistula arteri baru ditusukkan",
          "correct": false
        },
        {
          "label": "D",
          "text": "Diberikan pada 30-60 menit terakhir sesi hemodialisis atau SEGERA SETELAH sesi hemodialisis selesai, karena membran High-Flux membuang 30-50% vankomisin dari darah selama proses dialisis",
          "correct": true
        }
      ],
      "explanation": "Vankomisin memiliki berat molekul relatif besar (~1448 Da). Membran dialisis konvensional (low-flux) tidak dapat menyaringnya, namun dializer modern High-Flux memiliki ukuran pori membran yang mampu membersihkan 30% hingga 50% kadar Vankomisin dalam sirkulasi darah selama 4 jam dialisis. Jika Vankomisin diberikan sebelum atau di awal sesi HD, sebagian besar obat akan terbuang sia-sia ke cairan dialisat (underdosing parah). Oleh karena itu, konsensus IDSA/ASHP merekomendasikan infus pemeliharaan Vankomisin diberikan selama 30-60 menit terakhir sesi HD (via jalur vena sirkuit dialisis) atau segera setelah sesi dialisis selesai."
    },
    {
      "id": "q14",
      "category": "Gangguan Ginjal",
      "question": "Tn. G (74 th, BB 52 kg) dengan CrCl terukur 20 mL/menit didiagnosis mengalami pielonefritis akut komplikata. Dokter meresepkan Siprofloksasin oral dengan dosis standar dewasa normal 500 mg tiap 12 jam (q12h). Siprofloksasin memiliki fraksi eliminasi ginjal utuh fe sekitar 0.40 - 0.50. Mengapa dosis standar tersebut membahayakan Tn. G dan bagaimana rekomendasi penyesuaian dosis yang aman menurut Renal Drug Handbook?",
      "options": [
        {
          "label": "A",
          "text": "Dosis harus dinaikkan menjadi 750 mg tiap 8 jam karena penetrasi jaringan ginjal berkurang",
          "correct": false
        },
        {
          "label": "B",
          "text": "Dosis harus disesuaikan menjadi 250 mg tiap 12 jam ATAU 500 mg tiap 24 jam; dosis standar 500 mg q12h akan memicu akumulasi obat yang berisiko toksisitas neurologis berat (konfusi mental, halusinasi, tremor, bangkitan kejang) dan pemanjangan interval QTc",
          "correct": true
        },
        {
          "label": "C",
          "text": "Siprofloksasin tidak perlu disesuaikan dosisnya karena seluruhnya dimetabolisme menjadi metabolit inaktif di hepar",
          "correct": false
        },
        {
          "label": "D",
          "text": "Siprofloksasin harus diganti dengan injeksi Gentamisin dosis tinggi tiap 8 jam",
          "correct": false
        }
      ],
      "explanation": "Siprofloksasin dieliminasi melalui kombinasi filtrasi glomerulus/sekresi tubuler ginjal (40-50%) dan metabolisme hepar serta ekskresi bilier. Pada pasien dengan gangguan ginjal berat (CrCl < 30 mL/min), klirens eliminasi melambat dan waktu paruh memanjang dari 4 jam menjadi 8-10 jam. Akumulasi siprofloksasin dan metabolitnya pada lansia dengan penurunan integritas sawar darah otak dapat memicu neurotoksisitas serius (agitasi, konfusi, disorientasi, mioklonus, kejang epileptik) serta aritmia ventrikel via pemanjangan interval QTc. Rekomendasi baku: Turunkan dosis 50% menjadi 250 mg q12h atau perpanjang interval menjadi 500 mg q24h."
    },
    {
      "id": "q15",
      "category": "Gangguan Ginjal",
      "question": "Pasien kritis di ICU dengan infeksi pneumonia ventilator (VAP) akibat Acinetobacter baumannii resisten-karbapenem (CRAB) menerima terapi Kolistin (Kolistimetat Natrium / CMS) IV. Karena demam belum turun pada hari ke-3, seorang dokter mengusulkan menambahkan Gentamisin IV untuk memperkuat spektrum cakupan kuman. Apoteker klinis menolak usulan kombinasi tersebut. Apa dasar farmakoterapi dan pertimbangan toksikologi di balik penolakan apoteker?",
      "options": [
        {
          "label": "A",
          "text": "Kolistin dan Gentamisin saling menginaktivasi secara kimiawi di sirkulasi darah membentuk endapan ester",
          "correct": false
        },
        {
          "label": "B",
          "text": "Gentamisin menyebabkan resistensi silang instan terhadap seluruh antibiotik golongan polimiksin",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kolistin dan Gentamisin keduanya merupakan nefrotoksin poten yang sama-sama merusak membran sel epitel tubulus proksimal ginjal; kombinasinya menghasilkan sinergisme nefrotoksisitas destruktif yang memicu Acute Tubular Necrosis (ATN) masif dan gagal ginjal anurik akut",
          "correct": true
        },
        {
          "label": "D",
          "text": "Kolistin menurunkan absorbsi gentamisin di pleura paru",
          "correct": false
        }
      ],
      "explanation": "Baik Kolistin (polipeptida siklik kationik) maupun Gentamisin (aminoglikosida polikationik) memiliki mekanisme nefrotoksisitas tubuler yang identik dan tumpang tindih. Keduanya berikatan dengan membran mikrovili bermuatan negatif sel epitel tubulus proksimal ginjal, meningkatkan permeabilitas membran secara patologis, memicu lisis seluler, stres oksidatif, dan nekrosis tubulus akut (ATN). Kombinasi bersamaan dua obat ini memiliki efek sinergis toksisitas yang sangat destruktif (risiko AKI > 70-80%). Solusi stewardship: Hindari kombinasi nefrotoksin ganda; pilih kombinasi alternatif untuk CRAB seperti Kolistin + Tigesiklin dosis tinggi atau Ampisilin-Sulbaktam dosis tinggi."
    },
    {
      "id": "q16",
      "category": "Gangguan Ginjal",
      "question": "Tn. R (65 th) dengan riwayat Penyakit Ginjal Kronis Stadium 3b (eGFR 38 mL/menit/1.73m²) mengalami kekambuhan artritis gout akut pada jempol kaki kanannya. Pasien meminta resep Natrium Diklofenak 50 mg 3x sehari atau Ketorolak tablet kepada dokter jaga. Apoteker merekomendasikan untuk TIDAK memberikan obat golongan NSAID sistemik. Apa bahaya hemodinamik renal yang terjadi jika NSAID tetap diberikan pada pasien CKD?",
      "options": [
        {
          "label": "A",
          "text": "Pada CKD, perfusi glomerulus sangat bergantung pada vasodilatasi kompensatorik arteriol aferen yang diperantarai oleh Prostaglandin renal (PGE2 dan PGI2); NSAID memblokade COX sehingga memicu vasokonstriksi tajam arteriol aferen, meruntuhkan tekanan filtrasi intraglomerular, dan mempercepat transisi ke gagal ginjal terminal",
          "correct": true
        },
        {
          "label": "B",
          "text": "NSAID mengikat asam urat membentuk kristal kalsium urat di kandung kemih",
          "correct": false
        },
        {
          "label": "C",
          "text": "NSAID merangsang produksi renin secara berlebih memicu hipotensi kolaps",
          "correct": false
        },
        {
          "label": "D",
          "text": "NSAID menghancurkan glomerulus melalui induksi apoptosis sel endotel vena renalis",
          "correct": false
        }
      ],
      "explanation": "Pada ginjal normal saat hidrasi baik, prostaglandin renal memainkan peran basal minimal. Namun pada kondisi gangguan ginjal kronis (CKD), gagal jantung, atau sirosis, sirkulasi renal berada dalam kondisi vasokonstriksi kronis. Ginjal sangat bergantung pada sintesis lokal Prostaglandin vasodilator (PGE2 dan Prostasiklin PGI2) untuk mendilatasi arteriol aferen agar aliran darah dan laju filtrasi glomerulus (GFR) tetap terjaga. Hambatan sintesis prostaglandin oleh NSAID (non-selektif maupun COX-2 selektif) menghilangkan mekanisme protektif ini, memicu vasokonstriksi berat arteriol aferen, penurunan GFR akut, retensi natrium/air berat, hiperkalemia, dan mempercepat kerusakan nefron permanen. Terapi aman untuk gout pada CKD: Kolkisin dosis rendah terencana atau Kortikosteroid oral jangka pendek (Prednison)."
    },
    {
      "id": "q17",
      "category": "Gangguan Ginjal",
      "question": "Pasien pria (58 th) dengan riwayat hiperurisemia berat dan CrCl terukur 15 mL/menit diresepkan terapi penurun asam urat Alopurinol. Apoteker melakukan verifikasi dosis awal yang aman. Alopurinol dimetabolisme cepat oleh xantin oksidase menjadi metabolit aktifnya Oksipurinol. Mengapa penyesuaian dosis Alopurinol sangat krusial pada pasien gagal ginjal berat?",
      "options": [
        {
          "label": "A",
          "text": "Oksipurinol dimetabolisme oleh empedu menjadi senyawa beracun bagi pankreas",
          "correct": false
        },
        {
          "label": "B",
          "text": "Alopurinol mengikat eritropoietin sehingga memicu anemia hemolitik akut",
          "correct": false
        },
        {
          "label": "C",
          "text": "Pada gagal ginjal, alopurinol kehilangan efektivitas menghambat xantin oksidase sehingga harus diberikan dosis maksimal 900 mg/hari",
          "correct": false
        },
        {
          "label": "D",
          "text": "Metabolit aktif Oksipurinol diekskresi terutama via filtrasi ginjal dengan waktu paruh normal 18-30 jam; pada CrCl 15 mL/min waktu paruhnya molor hingga > 100 jam, memicu akumulasi masif yang berkorelasi kuat dengan sindrom mematikan Allopurinol Hypersensitivity Syndrome (AHS/DRESS)",
          "correct": true
        }
      ],
      "explanation": "Alopurinol memiliki waktu paruh singkat (~1-2 jam) dan diubah menjadi metabolit aktif Oksipurinol. Oksipurinol memiliki waktu paruh panjang (18-30 jam pada ginjal normal) dan diekskresi hampir seluruhnya via ginjal. Pada gagal ginjal berat (CrCl < 20-30 mL/min), waktu paruh Oksipurinol melonjak melampaui 100 jam. Akumulasi Oksipurinol supraterapeutik dalam jaringan berkorelasi erat dengan presipitasi Allopurinol Hypersensitivity Syndrome (AHS), yang ditandai dengan demam tinggi, ruam toksik (DRESS/SJS/TEN), vaskulitis sistemik, hepatitis, dan mortalitas mencapai 20-25%. Dosis awal alopurinol pada CrCl 15 mL/min harus dibatasi maksimal 50-100 mg/hari atau dipertimbangkan Febuksostat (eliminasi mayoritas hepar)."
    },
    {
      "id": "q18",
      "category": "Gangguan Ginjal",
      "question": "Ny. F (60 th, BB 55 kg) dirawat dengan sepsis intraabdomen. Klirens kreatinin pasien terhitung CrCl = 22 mL/menit. Dokter meresepkan antibiotik Seftriakson 2 gram intravena sekali sehari. Apoteker bangsal menyetujui resep tersebut tanpa meminta penurunan dosis. Apa rasionalitas farmakokinetik klinis yang mendasari keputusan apoteker bahwa Seftriakson tidak memerlukan penyesuaian dosis pada gangguan ginjal terisolasi?",
      "options": [
        {
          "label": "A",
          "text": "Seftriakson sama sekali tidak melewati ginjal dan 100% dieliminasi lewat kelenjar keringat",
          "correct": false
        },
        {
          "label": "B",
          "text": "Seftriakson memiliki jalur eliminasi ganda seimbang (Dual Elimination Pathway: ~60% diekskresi via ginjal dan ~40% diekskresi via bilier/empedu ke feses); bila fungsi ginjal menurun, rute eliminasi bilier mengalami kompensasi sehingga tidak terjadi akumulasi toksik berbahaya",
          "correct": true
        },
        {
          "label": "C",
          "text": "Seftriakson adalah prodrug yang hanya aktif di dalam glomerulus ginjal",
          "correct": false
        },
        {
          "label": "D",
          "text": "Seftriakson memiliki indeks terapi tak terbatas sehingga kadar serum setinggi apa pun tidak pernah menimbulkan efek samping",
          "correct": false
        }
      ],
      "explanation": "Seftriakson adalah sefalosporin generasi ke-3 yang unik karena memiliki jalur eliminasi ganda (Dual Elimination Pathway): sekitar 50-65% dieliminasi utuh via filtrasi ginjal, dan 35-50% diekskresi via empedu dan feses tanpa diubah. Pada pasien dengan gangguan ginjal saja (bahkan dengan CrCl < 10 mL/min), jalur eliminasi bilier meningkatkan klirens kompensatorik sehingga kadar obat tidak melonjak secara ekstrem. Penyesuaian dosis Seftriakson (maksimal 2 gram/hari) HANYA diperlukan bila pasien mengalami gangguan kombinasi ganda berat: gagal ginjal berat DISERTAI gagal hati berat sekaligus."
    },
    {
      "id": "q19",
      "category": "Gangguan Ginjal",
      "question": "Tn. P (71 th, BB 60 kg) dengan CrCl 22 mL/menit dirawat karena Deep Vein Thrombosis (DVT) akut. Dokter berencana meresepkan antikoagulan Low Molecular Weight Heparin (LMWH: Enoksaparin) subkutan dengan dosis terapeutik standar 1 mg/kgBB tiap 12 jam. Mengapa rejimen standar Enoksaparin ini sangat berbahaya pada CrCl < 30 mL/menit dan bagaimana penatalaksanaan antikoagulasi yang tepat?",
      "options": [
        {
          "label": "A",
          "text": "Enoksaparin memicu lisis eritrosit sekunder di tubulus distal ginjal",
          "correct": false
        },
        {
          "label": "B",
          "text": "Enoksaparin diinaktivasi oleh kreatinin sehingga kehilangan seluruh efektivitas antitrombotiknya",
          "correct": false
        },
        {
          "label": "C",
          "text": "Enoksaparin dieliminasi terutama melalui filtrasi ginjal (fe ~0.80); pada CrCl < 30 mL/min, bioakumulasi aktivitas anti-Faktor Xa melonjak tajam melipatgandakan risiko perdarahan mayor fatal, sehingga dosis wajib diturunkan menjadi 1 mg/kgBB sekali sehari (tiap 24 jam) ATAU beralih ke Unfractionated Heparin (UFH) dengan pemantauan aPTT",
          "correct": true
        },
        {
          "label": "D",
          "text": "Enoksaparin harus diganti dengan Warfarin dosis muatan 20 mg tanpa pemantauan INR",
          "correct": false
        }
      ],
      "explanation": "LMWH (Enoksaparin) memiliki rantai polisakarida pendek yang dieliminasi hampir seluruhnya melalui rute renal. Pada pasien dengan gangguan ginjal berat (CrCl < 30 mL/min), klirens enoksaparin turun hingga 50%, menyebabkan akumulasi progresif aktivitas anti-Faktor Xa di sirkulasi, yang memicu lonjakan insidensi perdarahan intrakranial dan gastrointestinal mayor. FDA dan pedoman CHEST merekomendasikan: (1) Bila Enoksaparin digunakan untuk terapi DVT pada CrCl < 30 mL/min, dosis HARUS diturunkan 50% menjadi 1 mg/kg sekali sehari (q24h) disertai TDM anti-Xa, ATAU (2) Beralih ke Unfractionated Heparin (UFH) IV kontinu karena UFH dieliminasi via sistem retikuloendotelial dan endotel non-renal, dengan titrasi dosis berbasis nilai aPTT."
    },
    {
      "id": "q20",
      "category": "Gangguan Ginjal",
      "question": "Apoteker klinis melakukan telaah resep pada pasien gagal jantung dan nefropati diabetik dengan eGFR 22 mL/menit/1.73m² yang mendapatkan resep baru Empagliflozin 10 mg 1x/hari. Dokter ragu-ragu karena pada informasi produk terdahulu tertulis obat ini tidak efektif mengontrol glukosa darah pada GFR rendah. Berdasarkan konsensus pedoman KDIGO 2023 dan bukti uji klinis kardiorenal modern, apa rekomendasi apoteker yang paling tepat?",
      "options": [
        {
          "label": "A",
          "text": "Resep DAPAT DISETUJUI dan dilanjutkan; meskipun efikasi penurunan HbA1c menurun pada eGFR < 45, inisiasi SGLT2 inhibitor tetap direkomendasikan hingga batas eGFR >= 20 mL/min/1.73m² karena terbukti kuat memperlambat progresi gagal ginjal, menurunkan risiko dialisis, dan menurunkan mortalitas kardiovaskular",
          "correct": true
        },
        {
          "label": "B",
          "text": "Resep harus ditolak karena SGLT2 inhibitor mutlak dilarang pada semua pasien dengan eGFR di bawah 60 mL/menit",
          "correct": false
        },
        {
          "label": "C",
          "text": "Empagliflozin harus dinaikkan dosisnya menjadi 50 mg agar mampu memaksa filtrasi ginjal yang rusak",
          "correct": false
        },
        {
          "label": "D",
          "text": "Empagliflozin harus diganti dengan Fenformin untuk meningkatkan perfusi ginjal",
          "correct": false
        }
      ],
      "explanation": "Berdasarkan pedoman klinis KDIGO 2023 (Kidney Disease: Improving Global Outcomes) dan ADA Standards of Care 2024: Indikasi SGLT2 inhibitor telah bergeser dari sekadar agen penurun glukosa menjadi agen nefroprotektif dan kardioprotektif fundamental (organ-protective agent). Meskipun efek glukosuria untuk menurunkan gula darah berkurang saat eGFR < 45 mL/min (karena beban filtrasi glukosa glomerulus menurun), efek protektif hemodinamik renal (penurunan tekanan intraglomerular via TGF) dan metabolik seluler tubulus tetap bekerja penuh. SGLT2i (Empagliflozin, Dapagliflozin) direkomendasikan untuk diinisiasi pada pasien dengan eGFR >= 20 mL/min/1.73m² dan dapat diteruskan hingga pasien memulai terapi dialisis."
    },
    {
      "id": "q21",
      "category": "Gangguan Ginjal",
      "question": "Tn. H (66 th, penderita DM tipe 2 dan CKD Stage 3b, SCr baseline 1.9 mg/dL) dijadwalkan menjalani angiografi koroner elektif dengan zat kontras iodinasi radiologi. Apoteker diminta menyusun protokol pencegahan Contrast-Induced Nephropathy (CIN). Protokol pencegahan evidence-based manakah yang paling efektif dan direkomendasikan oleh KDIGO?",
      "options": [
        {
          "label": "A",
          "text": "Memberikan Furosemid dosis tinggi 80 mg IV tepat sebelum injeksi kontras untuk menguras zat kontras secepatnya",
          "correct": false
        },
        {
          "label": "B",
          "text": "Melakukan restriksi cairan ketat (puasa minum 12 jam sebelum dan sesudah tindakan)",
          "correct": false
        },
        {
          "label": "C",
          "text": "Memberikan manitol 20% bersamaan dengan injeksi kontras iodinasi",
          "correct": false
        },
        {
          "label": "D",
          "text": "Hidrasi cairan kristaloid isotonik intravena (Normal Saline 0.9% 1 mL/kgBB/jam) selama 12 jam sebelum dan 12 jam sesudah prosedur, menggunakan volume zat kontras iso/low-osmolar seminimal mungkin, dan menghentikan obat nefrotoksik sementara",
          "correct": true
        }
      ],
      "explanation": "Pedoman KDIGO secara tegas menetapkan bahwa pilar utama pencegahan Contrast-Induced Acute Kidney Injury (CI-AKI) yang memiliki bukti klinis terkuat adalah ekspansi volume intravaskular dengan cairan isotonik (NaCl 0.9% atau Natrium Bikarbonat) pada laju 1.0 - 1.5 mL/kg/jam selama 6-12 jam sebelum dan 6-12 jam sesudah paparan kontras. Hidrasi isotonik mendilusi konsentrasi zat kontras di lumen tubulus ginjal, mencegah vasokonstriksi medula renalis, dan mempercepat eliminasi kontras. Penggunaan diuretik (Furosemid) atau Manitol profilaksis justru terbukti meningkatkan deplesi volume dan MEMPERBURUK risiko CIN, sehingga sangat dilarang!"
    },
    {
      "id": "q22",
      "category": "Gangguan Ginjal",
      "question": "Ny. B (64 th, BB 50 kg) dengan riwayat CKD Stage 4 (CrCl 18 mL/menit) mengeluh nyeri neuropati diabetik berat. Dokter meresepkan Gabapentin kapsul dengan dosis standar dewasa normal 300 mg 3 kali sehari (900 mg/hari). Dua hari kemudian, keluarga membawa pasien ke IGD karena pasien mengalami letargi berat, kebingungan mental, tremor kasar, dan kedutan otot mendadak (mioklonus berat). Apa penyebab intoksikasi tersebut dan bagaimana prinsip penyesuaian dosis Gabapentin pada gangguan ginjal?",
      "options": [
        {
          "label": "A",
          "text": "Gabapentin dimetabolisme di hepar menjadi metabolit neurotoksik yang merangsang reseptor glutamat",
          "correct": false
        },
        {
          "label": "B",
          "text": "Gabapentin dieliminasi 100% utuh dalam bentuk tidak berubah via filtrasi ginjal tanpa metabolisme hepar; pada CrCl 18 mL/min eliminasi terhenti memicu akumulasi masif di susunan saraf pusat, sehingga dosis wajib diturunkan drastis (misal 100 - 300 mg sekali sehari malam hari atau tiap 48 jam)",
          "correct": true
        },
        {
          "label": "C",
          "text": "Pasien mengalami alergi anafilaktik tipe lambat terhadap cangkang kapsul gelatin gabapentin",
          "correct": false
        },
        {
          "label": "D",
          "text": "Gabapentin menginduksi ekskresi kalsium ginjal masif memicu tetani hipokalsemik",
          "correct": false
        }
      ],
      "explanation": "Gabapentin dan Pregabalin tidak dimetabolisme oleh enzim hati manusia dan diekskresi 100% utuh melalui eliminasi ginjal (fe = 1.0). Klirens gabapentin berbanding lurus secara linier dengan klirens kreatinin. Pada CrCl < 30 mL/min, waktu paruh eliminasi gabapentin melonjak dari 5-7 jam menjadi 20-40 jam. Pemberian dosis standar 900 mg/hari pada pasien dengan CrCl 18 mL/min menyebabkan akumulasi supraterapeutik yang sangat toksik bagi SSP, bermanifestasi sebagai mioklonus difus, ataksia berat, sedasi mendalam, depresi pernapasan, dan koma. Penyesuaian dosis wajib dilakukan: pada CrCl 15-29 mL/min dosis maksimum lazim adalah 200 - 300 mg sekali sehari."
    },
    {
      "id": "q23",
      "category": "Gangguan Hati",
      "question": "Tn. J (58 th) dengan sirosis hepatis alkoholik dirawat di bangsal hepatologi. Data pemeriksaan fisik dan laboratorium: Bilirubin Total 3.5 mg/dL (ULN 1.0), Albumin serum 2.6 g/dL (normal > 3.5), INR 2.1 (normal < 1.1), asites sedang-berat yang tampak jelas pada inspeksi abdomen, dan ditemukan tanda Ensefalopati Hepatik Grade 1 (gangguan pola tidur, euforia ringan, dan apraksia). Hitunglah total skor Child-Pugh Tn. J, tentukan kelasnya, dan bagaimana rekomendasi umum penyesuaian dosis untuk obat-obatan dengan metabolisme hepar utama?",
      "options": [
        {
          "label": "A",
          "text": "Total Skor = 7 (Child-Pugh Kelas A); tidak memerlukan penyesuaian dosis",
          "correct": false
        },
        {
          "label": "B",
          "text": "Total Skor = 9 (Child-Pugh Kelas B); dosis obat hepar diturunkan 10-20%",
          "correct": false
        },
        {
          "label": "C",
          "text": "Total Skor = 11 (Child-Pugh Kelas C - Dekompensasi Berat); dosis obat-obatan dengan eliminasi hepar harus diturunkan minimal 50% hingga 75% dari dosis lazim atau dihindari sama sekali",
          "correct": true
        },
        {
          "label": "D",
          "text": "Total Skor = 14 (Child-Pugh Kelas C); pasien harus menjalani cuci darah hemodialisis harian",
          "correct": false
        }
      ],
      "explanation": "Kalkulasi Skor Child-Pugh: 1. Bilirubin Total 3.5 mg/dL (> 3.0) = 3 poin; 2. Albumin Serum 2.6 g/dL (< 2.8) = 3 poin (atau jika batas 2.8-3.5 skor 2-3); 3. INR 2.1 (rentang 1.7-2.2) = 2 poin; 4. Asites Sedang-Berat = 3 poin (atau sedang 2 poin); 5. Ensefalopati Grade 1 = 1-2 poin. Total akumulasi skor = 11 poin. Skor 10 - 15 diklasifikasikan sebagai Child-Pugh Kelas C (Dekompensasi Hati Berat). Pada Kelas C, kapasitas biotransformasi mikrosomal dan aliran darah portal rusak parah, sehingga rekomendasi klinis adalah menurunkan dosis awal obat metabolisme hepar sebesar 50-75% dan memantau efek samping toksik secara ketat."
    },
    {
      "id": "q24",
      "category": "Gangguan Hati",
      "question": "Seorang pasien sirosis dekompensata mengalami kegelisahan dan insomnia berat di bangsal. Dokter berencana meresepkan sedatif golongan benzodiazepin. Di antara Diazepam dan Lorazepam, dokter meminta apoteker menjelaskan mengapa Lorazepam jauh lebih aman dipilih pada pasien sirosis berdasarkan profil metabolisme hepatik Fase I versus Fase II.",
      "options": [
        {
          "label": "A",
          "text": "Diazepam dimetabolisme via Oksidasi CYP450 (Fase I) yang rusak parah pada sirosis dan menghasilkan metabolit aktif berwaktu paruh sangat panjang (> 100 jam); sedangkan Lorazepam dimetabolisme via Glukuronidasi (Fase II) yang relatif bertahan pada sirosis serta tidak memiliki metabolit aktif",
          "correct": true
        },
        {
          "label": "B",
          "text": "Diazepam diekskresi 100% via saliva sedangkan Lorazepam diekskresi via paru-paru",
          "correct": false
        },
        {
          "label": "C",
          "text": "Lorazepam bekerja menginduksi sintesis albumin baru di hepatosit yang rusak",
          "correct": false
        },
        {
          "label": "D",
          "text": "Diazepam mengikat reseptor insulin dan memicu ketoasidosis diabetik hepatik",
          "correct": false
        }
      ],
      "explanation": "Pada penyakit hati kronis dan sirosis, arsitektur mikrosomal hepar rusak dan perfusi oksigen sinusoid menurun, sehingga sistem enzim Cytochrome P450 (Fase I Oksidasi/Hidroksilasi/Dealkilasi) mengalami penurunan aktivitas yang drastis sejak stadium awal. Sebaliknya, enzim Glukuronil Transferase (UGT pada Fase II Konjugasi) bersifat sitosolik dan ekstra-mikrosomal yang relatif jauh lebih tahan terhadap kerusakan sirosis. Diazepam membutuhkan Fase I CYP2C19/CYP3A4 dan menghasilkan metabolit aktif (Desmetildiazepam) yang waktu paruhnya molor dari 36 jam menjadi > 120 jam, memicu koma ensefalopati. Lorazepam, Oksazepam, dan Temazepam (LOT) langsung dikonjugasi via Glukuronidasi Fase II menjadi metabolit glukuronida inaktif, sehingga kinetikanya tidak banyak terganggu."
    },
    {
      "id": "q25",
      "category": "Gangguan Hati",
      "question": "Tn. S (53 th) penderita sirosis hepatis dengan hipertensi portal dan riwayat perdarahan varises esofagus akan memulai terapi profilaksis sekunder dengan Propranolol oral (obat High Extraction Ratio, normal F oral ~25%). Dokter bertanya mengapa dosis inisiasi Propranolol pada sirosis harus dimulai dari dosis sangat rendah (misal 10 - 20 mg 2x/hari) dan bukan dosis lazim hipertensi (40 - 80 mg). Apa penjelasan farmakokinetik yang mendasarinya?",
      "options": [
        {
          "label": "A",
          "text": "Propranolol mengendap di usus halus sehingga tidak dapat diserap pada dosis di atas 20 mg",
          "correct": false
        },
        {
          "label": "B",
          "text": "Sirosis memicu mutasi reseptor beta-1 adrenergik jantung menjadi 10 kali lebih banyak",
          "correct": false
        },
        {
          "label": "C",
          "text": "Propranolol diekskresi via empedu yang tersumbat total pada pasien hipertensi portal",
          "correct": false
        },
        {
          "label": "D",
          "text": "Adanya shunt portosistemik dan penurunan aliran darah hepar menghilangkan metabolisme lintas pertama (first-pass effect); bioavailabilitas oral (F) Propranolol melonjak 3 hingga 4 kali lipat (mencapai 70-80%), sehingga dosis oral kecil sudah menghasilkan kadar plasma sistemik yang sangat tinggi",
          "correct": true
        }
      ],
      "explanation": "Propranolol adalah prototipe obat High Extraction Ratio (E_H > 0.7 - 0.8). Pada individu sehat, sekitar 75% dari dosis oral yang diserap langsung dihancurkan oleh hepar pada lintasan pertama (first-pass clearance), sehingga hanya ~25% yang lolos ke sirkulasi sistemik (F = 0.25). Pada sirosis dengan hipertensi portal, darah portal memotong parenkim hepar melalui pembuluh kolateral (portosystemic shunts) langsung ke vena kava. Hilangnya first-pass metabolism ini menyebabkan bioavailabilitas oral (F) melonjak hingga 70-80% (naik 3-4 kali lipat!). Dosis standar 40-80 mg pada sirosis dapat menghasilkan kadar puncak setara overdosis masif yang memicu bradikardia berat, syok kardiogenik, dan hipotensi kolaps. Inisiasi harus 'start low' (10-20 mg) dan dititrasi perlahan."
    },
    {
      "id": "q26",
      "category": "Gangguan Hati",
      "question": "Ny. E (50 th) penderita sirosis Child-Pugh B mengeluh sakit kepala dan nyeri osteoartritis lutut. Dokter umum di klinik primer ragu meresepkan Parasetamol karena khawatir parasetamol hepatotoksik, dan berencana meresepkan Asam Mefenamat atau Ketorolak. Apoteker mengintervensi dan meluruskan pemilihan obat tersebut. Apa konsensus ilmiah hepatologi internasional (AASLD/ACG) mengenai keamanan Parasetamol versus NSAID pada sirosis?",
      "options": [
        {
          "label": "A",
          "text": "Parasetamol mutlak dilarang pada semua pasien penyakit liver dan harus diganti dengan Asam Asetilsalisilat dosis tinggi",
          "correct": false
        },
        {
          "label": "B",
          "text": "Parasetamol tetap merupakan analgesik lini pertama pilihan yang PALING AMAN pada sirosis asalkan dosis dibatasi maksimal 2.0 gram/hari (misal 500 mg tiap 6-8 jam prn); sebaliknya NSAID (Asam Mefenamat/Ketorolak) KONTRAINDIKASI MUTLAK karena memicu perdarahan varises esofagus dan Sindrom Hepatorenal (HRS)",
          "correct": true
        },
        {
          "label": "C",
          "text": "NSAID sangat aman bagi pasien sirosis karena menghambat inflamasi di kapsul Glisson hepar",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kedua obat tersebut sama-sama aman diberikan pada dosis maksimal kemasan tanpa batas",
          "correct": false
        }
      ],
      "explanation": "Miskonsepsi umum menganggap parasetamol tabu untuk pasien penyakit hati. Padahal konsensus AASLD dan ACG menetapkan bahwa Parasetamol adalah analgesik teraman pada penyakit hati kronis dan sirosis, asalkan dosis harian kumulatif dibatasi maksimal 2.000 mg/24 jam (misal 500 mg tiap 6 jam atau tiap 8 jam bila perlu). Pada dosis ini, cadangan glutation yang tersisa masih sangat mencukupi untuk menetralisir NAPQI. Sebaliknya, NSAID adalah musuh nomor satu pasien sirosis: NSAID memicu perdarahan saluran cerna masif dari varises esofagus/gastropati hipertensi portal (via penghambatan COX-1 platelet dan erosi mukosa) serta meruntuhkan perfusi ginjal kompensatorik memicu gagal ginjal anurik mematikan (Hepatorenal Syndrome / HRS)."
    },
    {
      "id": "q27",
      "category": "Gangguan Hati",
      "question": "Tn. A (60 th, sirosis hepatis stadium dekompensata) dibawa ke IGD dalam kondisi apatis, bingung berat, asteriksis positif (flapping tremor pada pergelangan tangan), dan kadar amonia plasma terukur 140 mcmol/L. Dari riwayat obat, diketahui pasien diberi resep Diazepam tablet 5 mg oleh dokter luar 2 hari lalu untuk mengatasi insomnia. Mengapa obat sedatif benzodiazepin dan opioid sangat berbahaya serta mampu mencetuskan Ensefalopati Hepatik akut pada pasien sirosis?",
      "options": [
        {
          "label": "A",
          "text": "Diazepam menginaktivasi flora usus normal sehingga bakteri penghasil amonia mati total",
          "correct": false
        },
        {
          "label": "B",
          "text": "Benzodiazepin memicu pelepasan amonia langsung dari jaringan adiposa perifer",
          "correct": false
        },
        {
          "label": "C",
          "text": "Penurunan klirens hepar memperpanjang waktu paruh sedatif secara ekstrem, disertai peningkatan permeabilitas sawar darah otak dan 'up-regulation' sensitivitas kompleks reseptor GABA-A di susunan saraf pusat pada kondisi sirosis, memicu depresi SSP mendalam dan presipitasi koma hepatikum",
          "correct": true
        },
        {
          "label": "D",
          "text": "Sedatif menginduksi sekresi asam lambung yang membakar vena porta hepatika",
          "correct": false
        }
      ],
      "explanation": "Pada sirosis hepatis, terjadi kombinasi kelainan farmakokinetik dan farmakodinamik: 1. Farmakokinetik: Metabolisme oksidatif CYP450 dan klirens intrinsik obat sedatif anjlok drastis, memperpanjang waktu paruh Diazepam dan metabolitnya hingga berhari-hari. 2. Farmakodinamik: Pasien sirosis mengalami hipersensitivitas reseptor susunan saraf pusat. Neurotransmisi GABAergik meningkat secara patologis pada ensefalopati hepatik (peningkatan ligan endogen mirip benzodiazepin dan peningkatan densitas reseptor GABA-A serebral). Dosis benzodiazepin atau opioid yang pada orang normal hanya menimbulkan kantuk ringan, pada pasien sirosis akan memicu depresi SSP berat, supresi pernapasan, asteriksis hebat, hingga koma hepatik (hepatic coma)."
    },
    {
      "id": "q28",
      "category": "Gangguan Hati",
      "question": "Tn. M (54 th) menderita sirosis hati dengan komplikasi asites abdomen masif dan edema perifer. Dokter spesialis penyakit dalam meresepkan terapi kombinasi diuretik oral: Spironolakton dan Furosemid. Mengapa Spironolakton menjadi diuretik pilar utama (lini pertama) pada asites sirotik, dan berapakah rasio dosis baku Spironolakton : Furosemid yang direkomendasikan panduan klinis AASLD/EASL untuk menjaga keseimbangan kalium serum?",
      "options": [
        {
          "label": "A",
          "text": "Spironolakton mengatasi hiperaldosteronisme sekunder yang mendasari retensi natrium pada sirosis; rasio dosis baku yang direkomendasikan adalah 100 mg Spironolakton : 40 mg Furosemid sekali sehari pagi",
          "correct": true
        },
        {
          "label": "B",
          "text": "Furosemid adalah lini pertama sedangkan spironolakton hanya pelengkap; rasio baku adalah 20 mg Spironolakton : 100 mg Furosemid",
          "correct": false
        },
        {
          "label": "C",
          "text": "Spironolakton bekerja membunuh kuman E. coli di cairan asites; rasio baku adalah 500 mg : 10 mg",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kombinasi diuretik dilarang pada sirosis dan pasien hanya boleh diberikan infus albumin harian tanpa obat",
          "correct": false
        }
      ],
      "explanation": "Patofisiologi asites sirotik didorong oleh vasodilatasi arteri splanknikus yang memicu penurunan volume sirkulasi efektif, mengaktifkan sistem Renin-Angiotensin-Aldosteron (RAAS) secara masif. Hiperaldosteronisme sekunder ini memicu reabsorpsi natrium berlebih di tubulus distal dan duktus kolektivus. Spironolakton (antagonis reseptor aldosteron) bekerja tepat pada mekanisme patofisiologi utama tersebut. Monoterapi furosemid sering gagal karena natrium yang lolos dari ansa Henle akan diserap kembali di tubulus distal oleh aldosteron tinggi. Rasio standar emas AASLD: 100 mg Spironolakton : 40 mg Furosemid (dapat dititrasi bertahap hingga maks 400 mg : 160 mg). Rasio 100:40 ini secara fisiologis menyeimbangkan efek hemat-kalium dari spironolakton dan efek buang-kalium dari furosemid, mempertahankan kalium serum normal."
    },
    {
      "id": "q29",
      "category": "Gangguan Hati",
      "question": "Pasien sirosis dengan Ensefalopati Hepatik akut menerima terapi Laktulosa sirup oral 30 mL tiap 2 jam hingga pasien defekasi encer 2-3 kali, lalu dilanjutkan dosis pemeliharaan 20-30 mL 3x sehari. Bagaimana mekanisme farmakologi Laktulosa dalam menurunkan kadar amonia darah (The Ammonia Trapping Mechanism)?",
      "options": [
        {
          "label": "A",
          "text": "Laktulosa diserap 100% ke darah dan mengkatalisis penguraian urea di ginjal",
          "correct": false
        },
        {
          "label": "B",
          "text": "Laktulosa mengikat amonia secara kovalen di lambung membentuk asam amino esensial",
          "correct": false
        },
        {
          "label": "C",
          "text": "Laktulosa merangsang regenerasi sel hepatosit hepar yang nekrotik",
          "correct": false
        },
        {
          "label": "D",
          "text": "Laktulosa tidak diserap di usus halus dan difermentasi oleh mikrobiota kolon menjadi asam organik (asam laktat & asetat), menurunkan pH lumen kolon menjadi asam (~pH 5); ion H+ mengubah amonia bebas (NH3) yang mudah diserap menjadi ion amonium (NH4+) yang tidak dapat menembus mukosa usus (ammonia ion-trapping) lalu dievakuasi via efek laksatif osmotik",
          "correct": true
        }
      ],
      "explanation": "Laktulosa adalah disakarida sintetik non-absorbable (galaktosa-fruktosa). Di kolon, bakteri usus memfermentasi laktulosa menjadi asam lemak rantai pendek (asam laktat, format, dan asetat). Proses ini menurunkan pH intraluminal kolon dari netral/basa (~7.0) menjadi asam (~5.0). Pada suasana asam ini: 1. Amonia bebas terlarut yang mudah berdifusi ke darah (NH3) mengalami protonasi menjadi ion amonium polar bermuatan positif (NH4+). Membran mukosa usus tidak permeabel terhadap ion NH4+, sehingga amonia terperangkap di lumen usus (Ammonia Trapping). 2. Penurunan pH menekan pertumbuhan bakteri proteolitik penghasil amonia dan meningkatkan penggunaan amonia oleh bakteri sakarolitik. 3. Efek osmotik laktulosa mempercepat transit feses dan membuang amonium keluar tubuh."
    },
    {
      "id": "q30",
      "category": "Gangguan Hati",
      "question": "Tn. B (57 th) mengalami episode berulang Ensefalopati Hepatik meskipun telah patuh meminum Laktulosa dengan frekuensi BAB 3x/hari. Dokter memutuskan menambahkan antibiotik oral Rifaximin 550 mg 2x sehari. Mengapa Rifaximin menjadi antibiotik pilihan utama yang superior dan aman untuk profilaksis sekunder ensefalopati hepatik dibanding antibiotik konvensional seperti Neomisin atau Metronidazol?",
      "options": [
        {
          "label": "A",
          "text": "Rifaximin diserap sempurna ke sirkulasi sistemik untuk membunuh kuman di parenkim otak",
          "correct": false
        },
        {
          "label": "B",
          "text": "Rifaximin memiliki penyerapan sistemik yang sangat minimal (< 0.4%), bekerja lokal di lumen saluran cerna membasmi bakteri kolon penghasil amonia tanpa memicu nefrotoksisitas, ototoksisitas, atau neurotoksisitas perifer kumulatif",
          "correct": true
        },
        {
          "label": "C",
          "text": "Rifaximin menstimulasi produksi enzim CYP3A4 di hepar hingga 10 kali lipat",
          "correct": false
        },
        {
          "label": "D",
          "text": "Rifaximin bekerja menghancurkan asam empedu di kantung empedu",
          "correct": false
        }
      ],
      "explanation": "Rifaximin adalah turunan rifamisin sintetis non-sistemik dengan bioavailabilitas oral kurang dari 0.4%. Keunggulan farmakokinetik ini membuatnya bekerja murni secara topikal intraluminal di saluran pencernaan untuk mengeliminasi flora bakteri penghasil urease dan deaminase yang memproduksi amonia. Berbeda dengan Neomisin (yang diserap sebagian dan terbukti memicu nefrotoksisitas serta ototoksisitas permanen) atau Metronidazol (yang memicu neurotoksisitas perifer berat pada penggunaan jangka panjang), Rifaximin 550 mg 2x/hari terbukti dalam uji klinis acak (RCT) sangat efektif menurunkan risiko kekambuhan ensefalopati hingga 58% dengan profil keamanan yang sangat baik."
    },
    {
      "id": "q31",
      "category": "Gangguan Hati",
      "question": "Apoteker bangsal melakukan audit terapi pada pasien sirosis hepatis dekompensata dengan asites dan menemukan resep Ketorolak injeksi 30 mg IV tiap 8 jam untuk nyeri punggung. Apoteker segera menghubungi dokter untuk membatalkan obat tersebut. Apa komplikasi klinis mematikan yang dapat dipicu oleh pemberian NSAID pada pasien sirosis dekompensata?",
      "options": [
        {
          "label": "A",
          "text": "Pankreatitis nekrotikan autoimun",
          "correct": false
        },
        {
          "label": "B",
          "text": "Tirotoksikosis badai tiroid",
          "correct": false
        },
        {
          "label": "C",
          "text": "Presipitasi gagal ginjal anurik Sindrom Hepatorenal (Hepatorenal Syndrome / HRS-AKI) akibat vasokonstriksi arteriol aferen ginjal, retensi natrium/air refrakter yang memperparah asites, dan perdarahan varises esofagus masif",
          "correct": true
        },
        {
          "label": "D",
          "text": "Penutupan duktus arteriosus botalli pada pasien dewasa",
          "correct": false
        }
      ],
      "explanation": "Pada sirosis dekompensata, terjadi vasodilatasi masif pada sirkulasi arteri splanknikus akibat pelepasan Nitric Oxide (NO) berlebih. Tubuh merespons dengan vasokonstriksi sistemik kompensatorik, termasuk pada sirkulasi ginjal. Agar ginjal tidak mati, sel-sel ginjal memproduksi Prostaglandin vasodilator lokal (PGE2/PGI2) secara maksimal untuk mempertahankan perfusi glomerulus. Pemberian NSAID (terutama Ketorolak yang sangat poten) memblokade COX secara instan, melenyapkan prostaglandin vasodilator renal -> aliran darah ginjal kolaps seketika memicu Hepatorenal Syndrome (HRS-AKI) yang fatal. Selain itu, efek anti-platelet NSAID memicu ruptur dan perdarahan masif pada varises esofagus."
    },
    {
      "id": "q32",
      "category": "Gangguan Hati",
      "question": "Mengapa obat Non-Selective Beta-Blocker (NSBB: Propranolol, Nadolol, Carvedilol) menjadi terapi baku emas (gold standard) farmakologis dalam pencegahan perdarahan varises esofagus pada hipertensi portal sirotik?",
      "options": [
        {
          "label": "A",
          "text": "NSBB memiliki aksi ganda: blokade reseptor Beta-1 menurunkan curah jantung (cardiac output), sedangkan blokade reseptor Beta-2 membiarkan stimulasi Alpha-1 adrenergik bekerja tanpa lawan (unopposed alpha-1 vasoconstriction) memicu vasokonstriksi arteri splanknikus, menurunkan aliran darah masuk ke sistem porta dan menurunkan tekanan gradien vena hepatika (HVPG)",
          "correct": true
        },
        {
          "label": "B",
          "text": "NSBB bekerja mengentalkan darah di dalam varises esofagus sehingga menyumbat lumen varises",
          "correct": false
        },
        {
          "label": "C",
          "text": "NSBB mendilatasi vena porta secara masif agar darah mengalir deras ke hepar",
          "correct": false
        },
        {
          "label": "D",
          "text": "NSBB membunuh virus hepatitis B dan C di dalam sinusoid hati",
          "correct": false
        }
      ],
      "explanation": "Mekanisme hemodinamik NSBB pada Hipertensi Portal: 1. Blokade reseptor Beta-1 adrenergik di miokard menurunkan denyut jantung dan volume sekuncup, sehingga curah jantung (cardiac output) turun. 2. Blokade reseptor Beta-2 adrenergik di pembuluh darah splanknikus menghilangkan efek vasodilatasi Beta-2, membiarkan tonus Alpha-1 adrenergik vasokonstriktor bekerja tanpa hambatan (*unopposed alpha-1 vasoconstriction*). Hal ini memicu vasokonstriksi kuat pada arteriol splanknikus, menurunkan aliran darah portal inflow secara signifikan, dan menurunkan Hepatic Venous Pressure Gradient (HVPG) di bawah ambang pecah varises (< 12 mmHg)."
    },
    {
      "id": "q33",
      "category": "Gangguan Hati",
      "question": "Pasien sirosis hati mengeluh nyeri kronis pasca trauma ringan. Dokter mempertimbangkan analgesik golongan opioid: Tramadol atau Kodein. Mengapa penggunaan prodrug opioid seperti Kodein dan Tramadol sangat tidak dapat diprediksi efikasi dan toksisitasnya pada sirosis, serta apa risiko komplikasi gastrointestinal yang mengintai?",
      "options": [
        {
          "label": "A",
          "text": "Kodein dan Tramadol langsung diekskresi 100% via keringat pada pasien sirosis",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kedua obat tersebut memicu pembentukan batu empedu kalsium bilirubinat dalam 24 jam",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kodein dan tramadol menginduksi glikogenolisis masif memicu hiperglikemia hiperosmolar",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kodein dan Tramadol adalah prodrug yang membutuhkan bioaktivasi enzimatik Fase I oleh CYP2D6 menjadi metabolit aktifnya (Morfin dan O-desmetiltramadol); kerusakan enzim CYP pada sirosis menyebabkan kegagalan bioaktivasi analgesik, sementara waktu paruh eliminasi senyawa induk memanjang, memperparah konstipasi parah yang memicu reabsorpsi amonia dan ensefalopati hepatik",
          "correct": true
        }
      ],
      "explanation": "Kodein dan Tramadol adalah prodrug: Kodein harus di-O-demetilasi oleh CYP2D6 menjadi Morfin, dan Tramadol diubah oleh CYP2D6 menjadi metabolit aktif M1 (O-desmetiltramadol) untuk menghasilkan analgesia murni. Pada sirosis, kapasitas CYP2D6 turun drastis, sehingga bioaktivasi metabolit aktif terganggu (analgesia gagal tercapai). Pada saat yang sama, klirens hepar dan eliminasi senyawa induk melambat, bioavailabilitas melonjak akibat shunt, dan efek samping opioid perifer (terutama konstipasi hebat via penurunan motilitas usus) meningkat tajam. Konstipasi pada sirosis menahan feses di kolon, meningkatkan fermentasi dan produksi amonia oleh bakteri usus, mencetuskan Ensefalopati Hepatik akut."
    },
    {
      "id": "q34",
      "category": "Gangguan Hati",
      "question": "Tn. W (52 th) memiliki riwayat Non-Alcoholic Fatty Liver Disease (NAFLD / MASLD) dengan peningkatan transaminase kronis ringan (ALT 65 U/L, AST 55 U/L, ULN 40 U/L). Pasien mengalami dislipidemia berat pasca infark miokard akut (STEMI). Dokter ragu meresepkan Atorvastatin karena khawatir enzim hatinya meningkat. Berdasarkan pedoman modern AASLD dan National Lipid Association (NLA), apa rekomendasi farmakoterapi yang tepat mengenai penggunaan Statin pada pasien penyakit hati kronis terkompensasi?",
      "options": [
        {
          "label": "A",
          "text": "Statin KONTRAINDIKASI MUTLAK pada setiap kenaikan enzim transaminase di atas batas normal laboratorium",
          "correct": false
        },
        {
          "label": "B",
          "text": "Statin AMAN dan SANGAT DIREKOMENDASIKAN untuk perlindungan kardiovaskular pada NAFLD/NASH dan sirosis terkompensasi (Child-Pugh A); statin terbukti menurunkan mortalitas kardiovaskular dan menurunkan progresi sirosis serta risiko karsinoma hepatoseluler; kontraindikasi HANYA berlaku pada gagal hati akut fulminan atau sirosis dekompensata stadium akhir (Child-Pugh C)",
          "correct": true
        },
        {
          "label": "C",
          "text": "Statin harus diganti dengan Gemfibrozil dosis maksimal bersamaan dengan Kolestipol",
          "correct": false
        },
        {
          "label": "D",
          "text": "Statin hanya boleh diminum jika ALT dan AST bernilai di bawah 10 U/L",
          "correct": false
        }
      ],
      "explanation": "Panduan klinis modern AASLD, EASL, dan NLA menegaskan bahwa kenaikan transaminase ringan-sedang pada NAFLD/NASH atau sirosis terkompensasi (Child-Pugh A) BUKANLAH kontraindikasi statin. Pasien NAFLD justru memiliki risiko mortalitas tertinggi akibat penyakit kardiovaskular aterosklerotik (ASCVD), bukan akibat gagal hati! Berbagai studi kohort raksasa membuktikan statin aman pada kelompok ini dan bahkan memiliki efek pleiotropik anti-inflamasi endotel hepar yang menurunkan hipertensi portal dan risiko kanker hepar (HCC). Statin hanya dikontraindikasikan pada Acute Liver Failure fulminan atau sirosis dekompensata Child-Pugh C."
    },
    {
      "id": "q35",
      "category": "Geriatri",
      "question": "Ny. T (85 th, wanita, BB 40 kg, TB 150 cm, tirah baring lama dengan sarkopenia ekstrem) dirawat karena pneumonia aspirasi. Hasil lab menunjukkan kadar Serum Kreatinin tampak 'normal' yaitu 0.7 mg/dL. Dokter mengira fungsi ginjal pasien sangat prima sehingga meresepkan antibiotik nefrotoksik dosis dewasa muda penuh. Mengapa angka Serum Kreatinin 'normal' pada lansia kurus sering kali menyesatkan (Pseudonormal Serum Creatinine), dan berapa perkiraan CrCl Cockcroft-Gault sebenarnya?",
      "options": [
        {
          "label": "A",
          "text": "SCr 0.7 mg/dL mencerminkan GFR super normal > 120 mL/min karena lansia tidak memproduksi toksin",
          "correct": false
        },
        {
          "label": "B",
          "text": "CrCl pasien adalah 70 mL/menit; dosis normal dapat dilanjutkan tanpa risiko",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kreatinin adalah produk penguraian massa otot skelet; pada lansia sangat kurus dengan atrofi otot berat, laju pembentukan kreatinin harian anjlok drastis sehingga SCr darah tampak rendah menipu, padahal GFR sebenarnya sudah turun drastis (CrCl terhitung hanya ~37 mL/min atau bahkan < 25 mL/min bila dibulatkan ke baseline sarkopenik)",
          "correct": true
        },
        {
          "label": "D",
          "text": "Kadar kreatinin yang rendah disebabkan oleh regenerasi nefron baru di usia tua",
          "correct": false
        }
      ],
      "explanation": "Kreatinin serum diproduksi secara endogen dari metabolisme kreatin fosfat di jaringan otot lurik. Pada lansia lanjut usia (frail elderly) dengan kaheksia atau sarkopenia berat, massa otot berkurang drastis sehingga pembentukan kreatinin per 24 jam sangat sedikit. Akibatnya, meskipun Laju Filtrasi Glomerulus (GFR) ginjalnya telah merosot tajam akibat proses penuaan nefron, kadar Serum Kreatinin terukur di laboratorium tetap tampak 'normal' (0.6 - 0.8 mg/dL). Perhitungan CrCl Ny. T: CrCl = [((140 - 85) * 40) / (72 * 0.7)] * 0.85 = [(55 * 40) / 50.4] * 0.85 = [2200 / 50.4] * 0.85 = 43.65 * 0.85 = 37.1 mL/min. Memberikan dosis penuh obat eliminasi ginjal berbasis angka SCr 0.7 mg/dL akan memicu overdosis toksik berat."
    },
    {
      "id": "q36",
      "category": "Geriatri",
      "question": "Bagaimana perubahan komposisi tubuh fisiologis pada proses penuaan geriatri (penurunan total air tubuh -15%, peningkatan persentase lemak tubuh +35%, dan penurunan massa otot) mempengaruhi Volume Distribusi (Vd) dan profil konsentrasi obat larut air versus larut lemak?",
      "options": [
        {
          "label": "A",
          "text": "Vd obat larut air (seperti Digoksin, Gentamisin, Litium) menyusut sehingga kadar puncak plasma (Cmax) melonjak tinggi; sebaliknya Vd obat larut lemak (seperti Diazepam) membesar masif sehingga obat tertimbun di lemak tubuh dan waktu paruh eliminasi (t1/2) memanjang drastis",
          "correct": true
        },
        {
          "label": "B",
          "text": "Vd obat larut air membesar 3 kali lipat sedangkan obat larut lemak menyusut menjadi nol",
          "correct": false
        },
        {
          "label": "C",
          "text": "Seluruh obat mengalami penurunan Vd secara serentak tanpa memandang sifat kelarutannya",
          "correct": false
        },
        {
          "label": "D",
          "text": "Komposisi tubuh lansia tidak mempengaruhi farmakokinetik distribusi obat",
          "correct": false
        }
      ],
      "explanation": "Perubahan fisiologis penuaan terhadap kompartemen tubuh: 1. Penurunan Total Body Water (TBW) sebesar 10-15%: Obat-obat hidrofilik larut air (misal Aminoglikosida, Digoksin, Litium) memiliki ruang distribusi cairan yang menyempit, sehingga pada dosis normal akan menghasilkan konsentrasi puncak plasma (Cmax) yang lebih tinggi dan mudah memicu toksisitas akut. 2. Peningkatan persentase Lemak Tubuh (Adipose tissue) sebesar 20-40%: Obat-obat sangat lipofilik (misal Benzodiazepin masa kerja panjang seperti Diazepam) memiliki Volume Distribusi (Vd) yang membesar masif, terperangkap di jaringan adiposa, dan waktu paruh eliminasinya (t1/2) melonjak hingga > 80-100 jam, menyebabkan efek sedasi sisa (hangover effect) berhari-hari dan risiko jatuh."
    },
    {
      "id": "q37",
      "category": "Geriatri",
      "question": "Ny. M (76 th) rutin mengonsumsi Amlodipin 10 mg untuk hipertensi. Tiga minggu kemudian pasien mengeluh kedua pergelangan kakinya bengkak (edema pretibial bilateral). Dokter mengira pasien menderita gagal jantung baru dan meresepkan Furosemid 40 mg 1x/hari. Akibat sering buang air kecil, pasien mengalami inkontinensia urin dan pusing melayang saat berdiri, lalu diresepkan Oksibutinin (antimuskarinik). Dua minggu kemudian pasien jatuh di kamar mandi dan mengalami fraktur collum femoris. Rangkaian malapetaka farmakoterapi apakah yang dialami Ny. M dan bagaimana langkah pencegahannya?",
      "options": [
        {
          "label": "A",
          "text": "Reaksi resistensi antibiotik sekunder",
          "correct": false
        },
        {
          "label": "B",
          "text": "Sindrom lisis tumor vaskular",
          "correct": false
        },
        {
          "label": "C",
          "text": "Keracunan makanan kadaluarsa",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kaskade Peresepan (Prescribing Cascade); edema kaki adalah efek samping vasodilatasi prekapiler arteriol oleh Amlodipin yang salah didiagnosis sebagai penyakit baru; pencegahannya adalah mengenali efek samping obat sejak awal, menurunkan dosis amlodipin menjadi 5 mg atau mengganti ke ACEI/ARB, bukan menambah obat baru (Furosemid & Oksibutinin)",
          "correct": true
        }
      ],
      "explanation": "Kasus ini adalah prototipe klasik Kaskade Peresepan (Prescribing Cascade): 1. Amlodipin (CCB Dihidropiridin) dosis tinggi (10 mg) memicu ekstravasasi cairan interstisial ke pergelangan kaki akibat vasodilatasi arteriol prekapiler yang tidak diimbangi dilatasi venula postkapiler (bukan retensi cairan sistemik). 2. Efek samping ini disalahartikan sebagai penyakit baru (gagal jantung kongestif), lalu diterapi dengan Diuretik (Furosemid). 3. Furosemid memicu poliuria dan inkontinensia urgensi lansia, yang kembali diobati keliru dengan Oksibutinin (antikolinergik). 4. Oksibutinin memicu konfusi kognitif, mengaburkan penglihatan, dan memperparah hipotensi ortostatik furosemid -> Pasien JATUH dan PATAH TULANG. Golden Rule Geriatri: Selalu curigai keluhan baru sebagai efek samping obat!"
    },
    {
      "id": "q38",
      "category": "Geriatri",
      "question": "Menurut kriteria baku internasional AGS Beers Criteria 2023, mengapa obat antihistamin generasi pertama (seperti Difenhidramin, Klorfeniramin/CTM, dan Dimenhidrinat) masuk dalam kategori KONTRAINDIKASI KUAT / HINDARI (Strong Avoid) pada seluruh pasien geriatri?",
      "options": [
        {
          "label": "A",
          "text": "Antihistamin generasi pertama merangsang nafsu makan berlebih sehingga memicu obesitas",
          "correct": false
        },
        {
          "label": "B",
          "text": "Antihistamin generasi 1 memiliki sifat antikolinergik sentral dan perifer yang sangat poten (memicu retensi urin akut, konstipasi, glaukoma sudut tertutup, mulut kering) serta menembus sawar darah otak memicu sedasi mendalam, delirium/konfusi, ataksia, dan risiko jatuh/fraktur",
          "correct": true
        },
        {
          "label": "C",
          "text": "Antihistamin generasi 1 menurunkan efikasi vaksin influenza",
          "correct": false
        },
        {
          "label": "D",
          "text": "Antihistamin generasi 1 memicu kerusakan enamel gigi secara langsung",
          "correct": false
        }
      ],
      "explanation": "AGS Beers Criteria 2023 secara tegas mengkategorikan Antihistamin Generasi Pertama (Diphenhydramine, Chlorpheniramine, Hydroxyzine, Dimenhydrinate) sebagai obat yang harus DIHINDARI (Strong Recommendation, High Quality of Evidence) pada geriatri. Alasan: 1. Klirens obat menurun seiring usia dan penetrasi ke SSP sangat tinggi, memicu sedasi berlebih, gangguan psikomotor, delirium, dan peningkatan drastis risiko jatuh serta fraktur tulang. 2. Efek samping antikolinergik poten: memicu retensi urin akut (terutama pada pria dengan BPH), konstipasi berat hingga impaksi feses, mulut kering yang merusak gigi palsu, dan presipitasi glaukoma sudut tertutup. Bila butuh antihistamin, gunakan Generasi Kedua non-sedatif (Loratadin, Setirizin dosis rendah, Feksofenadin)."
    },
    {
      "id": "q39",
      "category": "Geriatri",
      "question": "Tn. K (80 th) menderita gagal jantung kongestif dengan retensi cairan memberat. Pasien meminum Furosemid oral 20 mg 2x sehari namun volume urin tidak kunjung bertambah dan edema pretibial menetap. Berdasarkan konsep farmakodinamik 'Threshold Ceiling Dose' Furosemid pada lansia dengan penurunan aliran darah ginjal, strategi penyesuaian dosis apa yang paling tepat dilakukan?",
      "options": [
        {
          "label": "A",
          "text": "Membagi dosis menjadi lebih kecil dan sering: 10 mg 4 kali sehari",
          "correct": false
        },
        {
          "label": "B",
          "text": "Menghentikan furosemid dan menggantinya dengan tablet kalium klorida oral",
          "correct": false
        },
        {
          "label": "C",
          "text": "Meningkatkan dosis tunggal bolus menjadi 40 mg hingga 80 mg sekali minum (atau beralih ke rute IV) agar konsentrasi obat di lumen tubulus ginjal mampu menembus ambang batas respons diuresis (ceiling threshold)",
          "correct": true
        },
        {
          "label": "D",
          "text": "Menambahkan NSAID untuk memperkuat retensi cairan fisiologis",
          "correct": false
        }
      ],
      "explanation": "Furosemid adalah *loop diuretic* yang bekerja dari sisi dalam lumen tubulus ginjal (harus disekresi secara aktif via transporter asam organik OAT ke dalam lumen ansa Henle). Hubungan antara laju ekskresi furosemid di tubulus dan respons natriuresis berbentuk kurva sigmoid yang memiliki nilai ambang (*threshold effect*). Pada lansia dengan gagal jantung dan CKD, laju penyerapan usus melambat dan sekresi tubuler berkurang. Dosis kecil (20 mg) tidak pernah mencapai konsentrasi intraluminal di atas ambang respons, sehingga tidak menghasilkan efek diuresis sama sekali (respons nol). Membagi dosis menjadi 10 mg 4x sehari justru memastikan obat selalu di bawah ambang! Solusi farmakoterapi: Tingkatkan dosis tunggal (misal 40 mg atau 80 mg sekaligus) untuk menembus ambang ceiling batas respons lumen tubulus."
    },
    {
      "id": "q40",
      "category": "Geriatri",
      "question": "Mengapa pedoman AGS Beers Criteria 2023 melarang keras penggunaan obat antidiabetes golongan Sulfonilurea masa kerja panjang (khususnya Glibenklamid/Gliburid dan Glimepirid) pada populasi lansia?",
      "options": [
        {
          "label": "A",
          "text": "Waktu paruh biologis yang panjang dan akumulasi metabolit aktif akibat penurunan klirens ginjal fisiologis lansia memicu risiko Hipoglikemia Berat Berkelanjutan yang sering tanpa gejala peringatan otonom (hypoglycemia unawareness), memicu stroke iskemik, disritmia, koma, dan jatuh",
          "correct": true
        },
        {
          "label": "B",
          "text": "Sulfonilurea memicu osteoporosis tulang iga",
          "correct": false
        },
        {
          "label": "C",
          "text": "Sulfonilurea bereaksi dengan asam lambung memicu ulkus duodenum masif",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sulfonilurea meningkatkan absorbsi laktosa di usus halus",
          "correct": false
        }
      ],
      "explanation": "Glibenklamid dan Glimepirid memiliki masa kerja panjang dan menghasilkan metabolit aktif yang diekskresi via ginjal. Pada lansia, laju filtrasi ginjal menurun dan respons glukagon/epinefrin terhadap penurunan glukosa darah terganggu (blunted autonomic response / hypoglycemia unawareness). Akumulasi obat memicu episode hipoglikemia yang berlangsung berjam-jam hingga berhari-hari. Hipoglikemia pada lansia sering bermanifestasi secara atipikal sebagai delirium akut, kebingungan mental, jatuh, serangan iskemik transien (TIA), infark miokard, kerusakan neuron permanen, dan kematian. Alternatif aman: DPP-4 inhibitor (Linagliptin), SGLT2i, atau Gliklazid kerja pendek dengan target HbA1c individual yang lebih longgar (7.5 - 8.0%)."
    },
    {
      "id": "q41",
      "category": "Geriatri",
      "question": "Prinsip farmakoterapi emas dalam memulai pemberian obat baru pada pasien geriatri adalah 'Start Low, Go Slow, but Get to the Goal'. Apa dasar pertimbangan perubahan farmakodinamik (kepekaan jaringan/reseptor) yang mendasari prinsip tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Lansia memiliki jumlah reseptor obat yang berlipat ganda di seluruh organ perifer",
          "correct": false
        },
        {
          "label": "B",
          "text": "Semua enzim di tubuh lansia bekerja 10 kali lebih lambat dibanding anak-anak",
          "correct": false
        },
        {
          "label": "C",
          "text": "Refleks baroreseptor lansia bekerja terlalu sensitif sehingga memicu hipertensi krisis",
          "correct": false
        },
        {
          "label": "D",
          "text": "Perubahan farmakodinamik penuaan menyebabkan peningkatan sensitivitas intrinsik reseptor target di susunan saraf pusat (terhadap sedatif, opioid, antikolinergik) serta penumpulan mekanisme homeostatis refleks baroreseptor vaskular (risiko tinggi hipotensi ortostatik dan sinkop)",
          "correct": true
        }
      ],
      "explanation": "Selain perubahan farmakokinetik (ADME), geriatri mengalami perubahan Farmakodinamik (respons biologis pada reseptor target). Reseptor susunan saraf pusat mengalami peningkatan kepekaan (hyper-responsiveness) terhadap depresan SSP (benzodiazepin, antipsikotik, opioid, sedatif), di mana konsentrasi serum yang sama menghasilkan efek sedasi dan ataksia yang jauh lebih berat. Sebaliknya, refleks otonom kardiovaskular (refleks baroreseptor) mengalami penumpulan (blunted compensatory reflex), sehingga vasodilatasi ringan dari antihipertensi mudah memicu hipotensi ortostatik berat yang menyebabkan pingsan dan cedera kepala. Prinsip 'Start Low, Go Slow' meminimalkan risiko ini sambil tetap menitrasi hingga target klinis tercapai."
    },
    {
      "id": "q42",
      "category": "Geriatri",
      "question": "Seorang kakek (79 th) dengan demensia Alzheimer mengalami agitasi dan keluyuran malam hari. Keluarga mendesak dokter untuk meresepkan antipsikotik Haloperidol atau Risperidon agar pasien tenang dan tidur. Apoteker mengingatkan tim medis mengenai adanya peringatan 'Black Box Warning' dari FDA terkait penggunaan antipsikotik pada lansia dengan demensia. Apa isi peringatan fatal tersebut?",
      "options": [
        {
          "label": "A",
          "text": "Antipsikotik memicu katarak kongenital dan kebutaan mendadak",
          "correct": false
        },
        {
          "label": "B",
          "text": "Penggunaan antipsikotik (tipikal maupun atipikal) pada lansia dengan psikosis terkait demensia meningkatkan risiko mortalitas semua penyebab (all-cause mortality) secara signifikan, terutama akibat kejadian kardiovaskular akut (gagal jantung, henti jantung mendadak) dan infeksi pneumonia aspirasi",
          "correct": true
        },
        {
          "label": "C",
          "text": "Antipsikotik memicu kanker kolon stadium 4 dalam waktu 1 bulan",
          "correct": false
        },
        {
          "label": "D",
          "text": "Antipsikotik menyebabkan peningkatan massa otot secara berlebih",
          "correct": false
        }
      ],
      "explanation": "FDA menetapkan Black Box Warning (peringatan paling keras) pada seluruh obat Antipsikotik (generasi 1 seperti Haloperidol dan generasi 2 seperti Risperidon, Olanzapin, Kuetiapin): Pasien lanjut usia dengan demensia-related psychosis yang diobati dengan obat antipsikotik memiliki peningkatan risiko kematian (mortalitas 1.6 hingga 1.7 kali lebih tinggi dibanding plasebo). Penyebab utama kematian adalah kejadian kardiovaskular (aritmia ventrikel QTc prolongation, henti jantung, stroke iskemik) dan infeksi paru (pneumonia aspirasi akibat disfagia dan sedasi mendalam). Terapi lini pertama untuk gejala perilaku demensia adalah intervensi non-farmakologis (modifikasi lingkungan, stimulasi sensorik, sleep hygiene). Antipsikotik hanya opsi terakhir jika membahayakan diri/orang lain, pada dosis minimal dan durasi sesingkat mungkin."
    },
    {
      "id": "q43",
      "category": "Geriatri",
      "question": "Tn. S (78 th) memiliki riwayat pembesaran prostat jinak (Benign Prostatic Hyperplasia / BPH) dengan gejala LUTS ringan. Karena batuk pilek dan nyeri pinggang, pasien meminum obat flu kombinasi bebas yang mengandung Pseudoefedrin serta tablet Amitriptilin 25 mg malam hari untuk membantu tidur. Dua puluh empat jam kemudian, pasien berteriak kesakitan di IGD dengan retensi urin akut (kandung kemih teraba tegang membesar berisi 1.200 mL urin) dan harus segera dipasang kateter urin darurat. Bagaimana interaksi farmakodinamik obat-obat tersebut memicu retensi urin akut pada BPH?",
      "options": [
        {
          "label": "A",
          "text": "Pseudoefedrin merusak glomerulus ginjal sehingga ginjal tidak mampu lagi memproduksi urin",
          "correct": false
        },
        {
          "label": "B",
          "text": "Amitriptilin memicu lisis prostat akut yang menyumbat uretra secara mekanik",
          "correct": false
        },
        {
          "label": "C",
          "text": "Pseudoefedrin (Alpha-1 adrenergik agonis) memicu kontraksi otot polos leher kandung kemih dan stroma prostat (menutup pintu keluar urin), sedangkan Amitriptilin (antikolinergik poten) memblokade reseptor muskarinik M3 sehingga melumpuhkan kontraksi otot detrusor kandung kemih (gagal memompa urin keluar)",
          "correct": true
        },
        {
          "label": "D",
          "text": "Kedua obat bereaksi membentuk kristal garam di meatus uretra eksterna",
          "correct": false
        }
      ],
      "explanation": "Mekanisme miksi normal melibatkan relaksasi sfingter uretra (leher vesika urinaria) dan kontraksi aktif otot detrusor kandung kemih via stimulasi asetilkolin pada reseptor muskarinik M3. Pada pasien ini terjadi kombinasi 'serangan ganda' farmakodinamik: 1. Pseudoefedrin (dekongestan simpatomimetik) merangsang reseptor Alpha-1 adrenergik di leher kandung kemih dan kapsul prostat, memicu kontraksi kuat dan spasme uretra (menutup jalan keluar urin rapat-rapat). 2. Amitriptilin (antidepresan trisiklik dengan efek antikolinergik sangat kuat) memblokade reseptor M3 di dinding kandung kemih, melumpuhkan tonus kontraksi otot detrusor. Akibatnya otot detrusor atoni (tidak bisa memeras) dan sfingter terkunci, menghasilkan retensi urin obstruktif akut masif."
    },
    {
      "id": "q44",
      "category": "Geriatri",
      "question": "Pasien geriatri 82 tahun rutin meminum 10 jenis obat setiap hari (polifarmasi berat) dan dibawa ke klinik farmasi untuk program pengkajian pengobatan (Comprehensive Medication Review) dan deprescribing. Apoteker menghitung Anticholinergic Cognitive Burden (ACB Score) pasien dan menemukan total skor 5 (kategori risiko tinggi penurunan kognitif dan jatuh). Manakah langkah kerangka kerja Deprescribing evidence-based yang paling tepat dilakukan apoteker?",
      "options": [
        {
          "label": "A",
          "text": "Mengidentifikasi obat yang tidak lagi memiliki indikasi klinis valid, obat yang saling menduplikasi terapi, atau obat berisiko tinggi (seperti PPI > 8 minggu tanpa ulkus aktif, sedatif tanpa indikasi), lalu merencanakan penghentian bertahap (tapering off) satu per satu dengan pemantauan gejala putus obat",
          "correct": true
        },
        {
          "label": "B",
          "text": "Menghentikan seluruh 10 jenis obat sekaligus secara mendadak pada hari yang sama",
          "correct": false
        },
        {
          "label": "C",
          "text": "Menambahkan 3 obat baru untuk menekan skor antikolinergik pasien",
          "correct": false
        },
        {
          "label": "D",
          "text": "Mengganti seluruh obat dengan suplemen herbal tanpa konsultasi dengan dokter penanggung jawab",
          "correct": false
        }
      ],
      "explanation": "Kerangka Kerja Deprescribing Terstruktur (Deprescribing Protocol): 1. Rekonsiliasi seluruh obat (termasuk OTC, herbal, dan suplemen). 2. Identifikasi obat yang berpotensi tidak tepat (Potentially Inappropriate Medications / PIMs) menggunakan kriteria Beers atau STOPP/START. 3. Identifikasi obat tanpa indikasi yang jelas, obat kaskade peresepan, atau yang target terapinya sudah tercapai/berubah (misal PPI jangka panjang tanpa indikasi ulkus memicu risiko fraktur dan defisiensi B12/Mg, atau statin pada demensia stadium akhir). 4. Prioritaskan obat yang akan dihentikan bersama dokter dan pasien, lakukan penurunan dosis bertahap (*tapering off*) satu demi satu untuk mencegah *withdrawal syndrome* atau efek *rebound*, dan pantau hasil klinis secara berkala."
    },
    {
      "id": "q45",
      "category": "Ibu Hamil",
      "question": "Perubahan farmakokinetik fisiologis apa yang terjadi secara dramatis pada ibu hamil trimester 2 dan 3 yang menyebabkan peningkatan klirens eliminasi dan penurunan kadar plasma pada obat-obatan hidrofilik yang diekskresi via ginjal (seperti Ampisilin, Sefazolin, dan Litium)?",
      "options": [
        {
          "label": "A",
          "text": "Penurunan aliran darah ginjal sebesar 80% akibat penekanan uterus",
          "correct": false
        },
        {
          "label": "B",
          "text": "Peningkatan keasaman lambung yang menghancurkan seluruh molekul antibiotik",
          "correct": false
        },
        {
          "label": "C",
          "text": "Penurunan volume plasma maternal hingga separuh dari normal",
          "correct": false
        },
        {
          "label": "D",
          "text": "Peningkatan Laju Filtrasi Glomerulus (GFR) hingga 50%, peningkatan curah jantung 30-50%, serta ekspansi volume plasma maternal hingga 40-50% (hemodilusi), yang memperbesar volume distribusi dan mempercepat eliminasi renal",
          "correct": true
        }
      ],
      "explanation": "Fisiologi Kehamilan & Dampak Farmakokinetik: 1. Curah Jantung (Cardiac Output) meningkat 30-50% dan Aliran Plasma Renal (Renal Plasma Flow) serta Laju Filtrasi Glomerulus (GFR) melonjak hingga 50% di atas nilai baseline sejak awal trimester ke-2. Akibatnya, obat-obat yang dieliminasi via filtrasi ginjal utuh (misal antibiotik Beta-laktam: Ampisilin, Sefazolin, Sefotaksim, serta Litium dan Digoksin) dibersihkan dari tubuh jauh lebih cepat. 2. Volume Plasma meningkat 40-50% dan cairan ekstraseluler bertambah masif, memperbesar Volume Distribusi (Vd) obat-obat polar/hidrofilik. Kombinasi Vd yang besar dan klirens renal yang melonjak menyebabkan konsentrasi obat dalam darah anjlok di bawah kadar efektif terapeutik. Pada infeksi berat saat hamil, antibiotik sering membutuhkan dosis yang lebih tinggi atau interval pemberian yang lebih sering."
    },
    {
      "id": "q46",
      "category": "Ibu Hamil",
      "question": "Pada usia kehamilan berapakah janin berada pada Periode Emas Organogenesis (Embriogenesis) di mana paparan obat teratogenik memiliki risiko paling destruktif dalam memicu Malformasi Anatomi Struktural Mayor permanen?",
      "options": [
        {
          "label": "A",
          "text": "Minggu ke-1 hingga ke-2 pascakonsepsi (Periode Pre-Diferensiasi)",
          "correct": false
        },
        {
          "label": "B",
          "text": "Minggu ke-3 hingga ke-8 pascakonsepsi (setara minggu ke-5 hingga ke-10 usia kehamilan klinis)",
          "correct": true
        },
        {
          "label": "C",
          "text": "Minggu ke-20 hingga ke-24 kehamilan",
          "correct": false
        },
        {
          "label": "D",
          "text": "Minggu ke-36 hingga sesaat sebelum persalinan",
          "correct": false
        }
      ],
      "explanation": "Periode Kerentanan Teratogenik Janin: 1. Minggu 1-2 Pascakonsepsi (Pre-diferensiasi): Berlaku prinsip 'All-or-None' (paparan toksik memicu kematian zigot/keguguran spontan ATAU pemulihan sempurna oleh sel totipoten yang tersisa tanpa kecacatan). 2. Minggu 3 - 8 Pascakonsepsi (Organogenesis): PERIODE KRITIS TERATOGENISITAS! Pada fase ini terjadi diferensiasi dan pembentukan primordial organ-organ vital (jantung, tabung saraf SSP, anggota gerak, mata, telinga, langit-langit mulut). Paparan teratogen pada jendela waktu ini memicu kelainan struktur anatomis berat (malformasi kongenital mayor seperti fokomelia, defek tabung saraf, defek septum jantung). 3. Minggu 9 - Kelahiran (Periode Fetal): Organ sudah terbentuk, terjadi pematangan fungsi dan pertumbuhan ukuran sel; paparan toksik menyebabkan retardasi pertumbuhan (IUGR) atau toksisitas fungsional spesifik."
    },
    {
      "id": "q47",
      "category": "Ibu Hamil",
      "question": "Karakteristik fisikokimia obat manakah di bawah ini yang MENYULITKAN atau MENGHAMBAT obat tersebut menembus membran plasenta sehingga relatif lebih aman bagi janin?",
      "options": [
        {
          "label": "A",
          "text": "Berat molekul sangat kecil (< 200 Da), tidak terionisasi, dan sangat lipofilik",
          "correct": false
        },
        {
          "label": "B",
          "text": "Senyawa nonpolar dengan ikatan protein plasma rendah (fu mendekati 100%)",
          "correct": false
        },
        {
          "label": "C",
          "text": "Berat molekul raksasa (BM > 1.000 Da), derajat ionisasi tinggi pada pH fisiologis darah (sangat polar), dan ikatan protein plasma maternal yang sangat tinggi (> 90%)",
          "correct": true
        },
        {
          "label": "D",
          "text": "Kelarutan lemak tinggi dan afinitas rendah terhadap transporter efflux plasenta",
          "correct": false
        }
      ],
      "explanation": "Transfer obat menembus sawar plasenta terjadi terutama melalui difusi pasif sederhana. Karakteristik yang MENGHAMBAT transfer plasenta: 1. Berat Molekul Tinggi: Molekul dengan BM > 500-1000 Da sangat sulit menembus membran sinsitiotrofoblas. Contoh prototipe: Heparin (BM 12.000 - 15.000 Da) dan Insulin (BM ~5.800 Da) tidak menembus plasenta sama sekali sehingga menjadi obat pilihan utama pada kehamilan. Sebaliknya Warfarin (BM 308 Da) menembus plasenta secara bebas dan memicu embriopati berat. 2. Derajat Ionisasi Tinggi & Hidrofilisitas: Molekul polar terionkan sulit menembus lapis ganda lipid membran. 3. Ikatan Protein Plasma Tinggi: Hanya fraksi bebas tak terikat (fu) yang dapat berdifusi menembus plasenta."
    },
    {
      "id": "q48",
      "category": "Ibu Hamil",
      "question": "Pada tahun 2015, US Food and Drug Administration (FDA) secara resmi menghapus sistem kategori huruf lama (Kategori A, B, C, D, X) dan menggantikannya dengan Pregnancy and Lactation Labeling Rule (PLLR). Mengapa sistem huruf lama tersebut ditinggalkan?",
      "options": [
        {
          "label": "A",
          "text": "Sistem huruf terlalu menyederhanakan risiko secara keliru (oversimplified), menyesatkan klinisi seolah risiko bertingkat linier dari A ke X, dan Kategori C menjadi 'tempat sampah' yang membingungkan karena mencakup > 65% seluruh obat tanpa data manusia yang memadai; PLLR menggantikannya dengan narasi evaluasi risiko berbasis bukti ilmiah mendalam",
          "correct": true
        },
        {
          "label": "B",
          "text": "Karena huruf A dan B dinilai mendiskriminasi huruf abjad lainnya",
          "correct": false
        },
        {
          "label": "C",
          "text": "Karena seluruh obat di dunia saat ini telah terbukti 100% aman bagi ibu hamil",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sistem lama dihapus agar pabrik farmasi tidak perlu mencantumkan efek samping kehamilan pada kemasan",
          "correct": false
        }
      ],
      "explanation": "Kelemahan Fatal Sistem Kategori Huruf Lama (FDA 1979): 1. Kategori C menjadi kategori 'keranjang sampah' yang memuat lebih dari 65-70% seluruh obat di pasaran. Kategori C menggabungkan obat yang terbukti teratogenik pada hewan uji bersama obat yang sama sekali belum pernah diteliti, membuat klinisi sangat bingung. 2. Persepsi risiko keliru: Banyak dokter mengira risiko naik secara berurutan A-B-C-D-X. Kenyataannya, Kategori X tidak selalu lebih toksik dibanding D, melainkan hanya berarti rasio manfaat/risiko obat tidak menguntungkan pada kehamilan (misal statin vs obat kemoterapi kanker). Sistem PLLR modern (2015) menyajikan 3 sub-bagian naratif rinci: 8.1 Pregnancy (termasuk persalinan), 8.2 Lactation (termasuk sekresi ASI), dan 8.3 Females and Males of Reproductive Potential (efek pada fertilitas dan tes kehamilan)."
    },
    {
      "id": "q49",
      "category": "Ibu Hamil",
      "question": "Ny. T (29 th, G1P0A0, hamil 16 minggu) memiliki riwayat hipertensi esensial dan selama ini rutin mengonsumsi Kandesartan 8 mg 1x sehari. Pasien datang berkonsultasi ke apotek. Mengapa obat golongan ARB (Kandesartan) dan ACE-Inhibitor KONTRAINDIKASI MUTLAK pada kehamilan (khususnya trimester 2 dan 3) dan apa sindrom fetopati yang mengancam janin?",
      "options": [
        {
          "label": "A",
          "text": "Kandesartan memicu penutupan tuba falopi ibu secara permanen",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kandesartan menyebabkan kenaikan berat badan janin berlebih hingga > 6 kg",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kandesartan menginaktivasi hormon prolaktin ibu sejak masa awal kehamilan",
          "correct": false
        },
        {
          "label": "D",
          "text": "Blokade sistem RAAS pada janin menurunkan perfusi ginjal janin secara drastis, memicu anuria janin, oligohidramnion (cairan ketuban habis total), hipoplasia paru janin, hipokalvaria (tengkorak tidak menutup), gagal ginjal anurik neonatal, dan kematian janin intrauterin (ACEI/ARB Fetopathy)",
          "correct": true
        }
      ],
      "explanation": "Pada trimester ke-2 dan ke-3 kehamilan, perkembangan dan fungsi ginjal janin sangat bergantung pada sistem Renin-Angiotensin-Aldosteron (RAAS) lokal untuk mempertahankan tekanan filtrasi glomerulus janin. Paparan ACE-Inhibitor (Lisinopril, Kaptopril, Ramipril) atau ARB (Kandesartan, Valsartan, Losartan) memblokade RAAS janin, menyebabkan iskemia renal janin berat -> disgenesis tubulus renalis janin -> Anuria Janin (janin tidak bisa pipis). Karena urin janin adalah komponen utama cairan ketuban (amnion), terjadi Oligohidramnion berat. Hilangnya cairan ketuban memicu kompresi mekanik janin: Hipoplasia Paru (paru-paru janin tidak berkembang), deformitas kraniofasial, kontraktur sendi, hipokalvaria cacat tulang tengkorak, dan kematian perinatal (ACEI/ARB Fetopathy Syndrome)."
    },
    {
      "id": "q50",
      "category": "Ibu Hamil",
      "question": "Pada Ny. T di atas, obat antihipertensi lini pertama manakah yang direkomendasikan oleh pedoman ACOG dan ESC untuk menggantikan Kandesartan secara aman selama kehamilan?",
      "options": [
        {
          "label": "A",
          "text": "Spironolakton atau Furosemid dosis tinggi",
          "correct": false
        },
        {
          "label": "B",
          "text": "Metildopa oral, Labetalol oral, atau Nifedipin lepas lambat (extended-release)",
          "correct": true
        },
        {
          "label": "C",
          "text": "Atenolol atau Aliskiren",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kombinasi Natrium Nitroprusid dan Diltiazem IV",
          "correct": false
        }
      ],
      "explanation": "Pedoman ACOG (American College of Obstetricians and Gynecologists) dan ESC merekomendasikan 3 pilihan utama antihipertensi lini pertama yang aman dan telah teruji puluhan tahun pada kehamilan: 1. Metildopa (agonis alpha-2 adrenergik sentral): memiliki rekam jejak keamanan jangka panjang terpanjang pada tumbuh kembang anak. 2. Labetalol (beta-blocker dengan efek vasodilatasi alpha-1): sangat efektif dan menjadi pilihan utama hipertensi gestasional dan preeklamsia. 3. Nifedipin sediaan lepas lambat (CCB Dihidropiridin): aman dan efektif tanpa efek teratogenik. Sebaliknya, Atenolol harus dihindari karena memicu IUGR (retardasi pertumbuhan janin) dan plasenta mengecil; ACEI/ARB mutlak kontraindikasi."
    },
    {
      "id": "q51",
      "category": "Ibu Hamil",
      "question": "Ny. G (30 th, hamil 8 minggu / Trimester 1) memiliki riwayat Deep Vein Thrombosis (DVT) berulang dan memerlukan antikoagulan terapeutik penuh. Dokter meminta saran apoteker mengenai pemilihan antikoagulan yang aman antara Warfarin oral dan Low Molecular Weight Heparin (LMWH: Enoksaparin) subkutan. Mengapa LMWH adalah pilihan yang jauh lebih aman dibanding Warfarin pada trimester pertama?",
      "options": [
        {
          "label": "A",
          "text": "Warfarin diserap di lambung sedangkan janin bernapas dengan plasenta",
          "correct": false
        },
        {
          "label": "B",
          "text": "Enoksaparin adalah antikoagulan berbentuk sirup yang mudah diminum",
          "correct": false
        },
        {
          "label": "C",
          "text": "Warfarin memiliki berat molekul kecil yang bebas menembus plasenta dan memicu 'Warfarin Embryopathy' (hipoplasia tulang hidung, kondrodisplasia pungtata, mikrosefali, dan perdarahan janin); sedangkan LMWH (Enoksaparin) memiliki molekul besar bermuatan negatif yang TIDAK MENEMBUS plasenta sehingga aman bagi janin",
          "correct": true
        },
        {
          "label": "D",
          "text": "Warfarin meningkatkan produksi hormon insulin janin memicu makrosomia",
          "correct": false
        }
      ],
      "explanation": "Warfarin memiliki berat molekul rendah (BM 308 Da) dan larut lemak, sehingga menembus plasenta secara bebas ke sirkulasi janin. Paparan Warfarin pada minggu ke-6 hingga ke-12 kehamilan memicu sindrom teratogenik berat Warfarin Embryopathy (hipoplasia nasal masif dengan hidung pelana, stippled epiphyses / bintik kalsifikasi tulang rawan, atrofi optik, mikrosefali, dan perdarahan intrakranial fatal pada janin). Sebaliknya, Heparin (baik LMWH Enoksaparin maupun UFH) adalah mukopolisakarida rantai panjang bermuatan negatif kuat dengan berat molekul besar (> 4.500 - 15.000 Da) yang secara fisikokimia TIDAK DAPAT menembus membran plasenta. LMWH adalah antikoagulan standar emas pilihan pada kehamilan."
    },
    {
      "id": "q52",
      "category": "Ibu Hamil",
      "question": "Ny. K (26 th) dengan epilepsi umum tonik-klonik berencana untuk hamil (prakonsepsi). Pasien saat ini rutin meminum antikonvulsan Asam Valproat 500 mg 2x sehari. Mengapa Asam Valproat merupakan antiepilepsi yang PALING BERBAHAYA pada wanita usia subur/kehamilan, dan tindakan prakonsepsi apa yang harus direkomendasikan?",
      "options": [
        {
          "label": "A",
          "text": "Asam Valproat memiliki risiko teratogenisitas tertinggi di antara seluruh antiepilepsi (~10% malformasi kongenital mayor: defek tabung saraf / spina bifida, kelainan kraniofasial, defek jantung) serta penurunan IQ dan autisme pada anak; pasien harus dialihkan ke alternatif lebih aman (Lamotrigin atau Levetirasetam) sebelum hamil dan diberikan suplementasi Asam Folat dosis tinggi (4-5 mg/hari)",
          "correct": true
        },
        {
          "label": "B",
          "text": "Asam Valproat memicu kehamilan kembar siam pada 90% kasus",
          "correct": false
        },
        {
          "label": "C",
          "text": "Asam Valproat harus diganti dengan Fenitoin dosis tinggi tanpa asam folat",
          "correct": false
        },
        {
          "label": "D",
          "text": "Asam Valproat aman dilanjutkan asalkan diminum bersama susu sapi murni",
          "correct": false
        }
      ],
      "explanation": "Konsensus AAN (American Academy of Neurology) dan ILAE menegaskan bahwa Asam Valproat memiliki tingkat teratogenisitas anatomis dan neurodevelopmental tertinggi di antara seluruh AED (Anti-Epileptic Drugs). Risiko malformasi kongenital mayor mencapai 10-11% (terutama Neural Tube Defects / Spina Bifida 1-2%, defek septum jantung, celah bibir/palatum, dan hipospadia). Yang paling memprihatinkan, paparan valproat intrauterin menurunkan skor IQ anak rata-rata 8-11 poin dan meningkatkan risiko spektrum autisme (ASD) hingga 3-5 kali lipat. Wanita usia subur harus beralih ke agen yang jauh lebih aman seperti Lamotrigin atau Levetirasetam sebelum konsepsi, disertai konsumsi Asam Folat dosis tinggi 4-5 mg/hari minimal 3 bulan sebelum hamil untuk proteksi penutupan tabung saraf."
    },
    {
      "id": "q53",
      "category": "Ibu Hamil",
      "question": "Ny. D (30 th, hamil 32 minggu / Trimester 3) mengalami nyeri punggung bawah dan sakit gigi berat. Pasien membeli sendiri tablet Ibuprofen 400 mg di apotek dan meminumnya 3x sehari selama 5 hari. Mengapa penggunaan NSAID (seperti Ibuprofen, Asam Mefenamat, Ketorolak) KONTRAINDIKASI KUAT pada usia kehamilan >= 20 - 28 minggu?",
      "options": [
        {
          "label": "A",
          "text": "NSAID memicu penutupan plasenta prematur sehingga janin lahir seketika",
          "correct": false
        },
        {
          "label": "B",
          "text": "NSAID memicu diabetes gestasional akut dalam waktu 24 jam",
          "correct": false
        },
        {
          "label": "C",
          "text": "NSAID menginduksi kebotakan permanen pada rambut janin",
          "correct": false
        },
        {
          "label": "D",
          "text": "NSAID menghambat sintesis prostaglandin janin yang bertugas menjaga patensi duktus arteriosus dan perfusi ginjal janin; paparan pada trimester 3 memicu Penutupan Prematur Duktus Arteriosus (Premature Closure of Ductus Arteriosus) yang memicu hipertensi pulmonal persisten neonatal serta Oligohidramnion berat akibat disfungsi ginjal janin",
          "correct": true
        }
      ],
      "explanation": "Pada sirkulasi janin intrauterin, darah memintas paru-paru yang belum mengembang melalui pembuluh pintas Duktus Arteriosus Botalli menuju aorta desendens. Patensi pembuluh duktus ini mutlak dipertahankan oleh Prostaglandin E2 (PGE2) dan PGI2 yang diproduksi secara lokal. Penggunaan NSAID pada trimester ketiga (khususnya usia kehamilan >= 20-28 minggu) menghambat sintesis prostaglandin, memicu konstriksi dan penutupan prematur duktus arteriosus in utero. Akibatnya terjadi hipertensi pulmonal persisten pada bayi baru lahir (PPHN) dan gagal jantung kanan janin. Selain itu, NSAID menghambat perfusi ginjal janin memicu anuria janin dan Oligohidramnion (FDA Drug Safety Warning 2020). Analgesik pilihan aman: Parasetamol."
    },
    {
      "id": "q54",
      "category": "Ibu Menyusui",
      "question": "Seorang ibu menyusui (BB 60 kg) meminum obat analgesik X dengan dosis terapi 800 mg/hari (setara 13.3 mg/kgBB/hari dosis maternal). Bayinya berusia 2 bulan dengan BB 5 kg dan mengonsumsi ASI rata-rata 150 mL/kgBB/hari. Hasil uji klinis menunjukkan konsentrasi rata-rata obat X dalam ASI adalah 4 mcg/mL (0.004 mg/mL). Berapakah estimasi asupan harian obat oleh bayi melalui ASI, berapakah nilai Relative Infant Dose (RID), dan bagaimana interpretasi keamanannya menurut standar Prof. Thomas Hale?",
      "options": [
        {
          "label": "A",
          "text": "Dosis bayi = 6.0 mg/kg/hari; RID = 45.1%; Obat sangat berbahaya dan menyusui harus disetop",
          "correct": false
        },
        {
          "label": "B",
          "text": "Dosis bayi = 0.6 mg/kg/hari; RID = 4.51%; Karena RID < 10%, obat diklasifikasikan RELATIF AMAN dan ibu dapat terus menyusui bayinya",
          "correct": true
        },
        {
          "label": "C",
          "text": "Dosis bayi = 0.04 mg/kg/hari; RID = 0.45%; Obat tidak masuk ke ASI sama sekali",
          "correct": false
        },
        {
          "label": "D",
          "text": "Dosis bayi = 1.2 mg/kg/hari; RID = 18.2%; Menyusui hanya boleh dilakukan jika bayi berusia di atas 5 tahun",
          "correct": false
        }
      ],
      "explanation": "Langkah Perhitungan RID: 1. Dosis Bayi via ASI (mg/kg/hari) = Konsentrasi obat dalam ASI * Asupan volume ASI harian bayi = 0.004 mg/mL * 150 mL/kg/hari = 0.6 mg/kgBB/hari. 2. Dosis Terapi Ibu per kgBB = 800 mg / 60 kg = 13.33 mg/kgBB/hari. 3. Relative Infant Dose (RID) = (Dosis Bayi / Dosis Ibu) * 100% = (0.6 / 13.33) * 100% = 4.50% (atau ~4.51%). Interpretasi Internasional: Ambang batas baku (The Golden 10% Rule): Nilai RID < 10% secara umum dianggap relatif aman bagi bayi cukup bulan dan sehat. Karena RID obat X hanya 4.51% (< 10%), obat kompatibel dengan laktasi dan ibu sangat didukung untuk melanjutkan pemberian ASI."
    },
    {
      "id": "q55",
      "category": "Ibu Menyusui",
      "question": "Prof. Thomas Hale mengklasifikasikan keamanan obat pada laktasi menjadi 5 kategori (Hale's Lactation Risk Categories L1 hingga L5). Manakah pernyataan yang PALING TEPAT mengenai definisi Kategori L5 (Hazardous) dan kelompok obat apa yang masuk dalam kategori ini?",
      "options": [
        {
          "label": "A",
          "text": "Kategori L5 adalah obat herbal yang belum memiliki izin edar BPOM",
          "correct": false
        },
        {
          "label": "B",
          "text": "Kategori L5 adalah obat bebas yang aman diminum tanpa batas oleh ibu menyusui",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kategori L5 adalah KONTRAINDIKASI MUTLAK; obat terbukti memiliki risiko destruktif terdokumentasi pada bayi atau merupakan zat dengan potensi toksisitas tinggi (seperti agen kemoterapi sitotoksik antineoplastik, isotop radioaktif, dan imunosupresif kuat); ibu WAJIB menghentikan pemberian ASI",
          "correct": true
        },
        {
          "label": "D",
          "text": "Kategori L5 adalah suplemen multivitamin penambah nafsu makan bayi",
          "correct": false
        }
      ],
      "explanation": "Hierarki Kategori Laktasi Prof. Thomas Hale (Medications & Mothers' Milk): L1 (Safest / Paling Aman), L2 (Safer / Aman), L3 (Moderately Safe / Cukup Aman), L4 (Possibly Hazardous / Berpotensi Bahaya). Kategori L5 (Hazardous / Kontraindikasi Mutlak): Obat-obatan yang terbukti menimbulkan efek samping toksik parah pada bayi atau zat sitotoksik berisiko tinggi. Contoh obat L5: Antineoplastik/Kemoterapi Sitotoksik (Doxorubicin, Cyclophosphamide, Methotrexate) yang menekan sumsum tulang bayi; Radiofarmaka (Iodium radioaktif I-131) yang menghancurkan kelenjar tiroid bayi; Senyawa Emas; dan Obat-obatan terlarang (amfetamin, kokain). Penggunaan obat L5 mewajibkan penghentian menyusui demi keselamatan bayi."
    },
    {
      "id": "q56",
      "category": "Ibu Menyusui",
      "question": "Seorang ibu menyusui (26 th, pascaoperasi sesar minggu ke-2) diresepkan analgesik KODEIN 30 mg 3x sehari untuk mengatasi nyeri punggung. FDA telah mengeluarkan Black Box Warning keras yang melarang penggunaan Kodein pada ibu menyusui. Mengapa penggunaan Kodein pada laktasi sangat mematikan dan bagaimana faktor farmakogenomik CYP2D6 ibu berperan dalam tragedi kematian bayi?",
      "options": [
        {
          "label": "A",
          "text": "Kodein adalah prodrug yang diubah menjadi Morfin oleh enzim CYP2D6; jika ibu memiliki polimorfisme genetik sebagai CYP2D6 Ultra-Rapid Metabolizer (UM), kodein diubah menjadi morfin dalam jumlah masif dan cepat, melonjakkan kadar morfin bebas dalam ASI hingga memicu depresi pernapasan fatal, henti napas, dan kematian mendadak pada bayi",
          "correct": true
        },
        {
          "label": "B",
          "text": "Kodein merusak kelenjar mamae sehingga ASI berubah menjadi asam klorida pekat",
          "correct": false
        },
        {
          "label": "C",
          "text": "Kodein memicu penutupan fontanel tengkorak bayi secara instan dalam 2 jam",
          "correct": false
        },
        {
          "label": "D",
          "text": "Kodein menyebabkan bayi mengalami pubertas prekoks pada usia 1 bulan",
          "correct": false
        }
      ],
      "explanation": "Tragedi Farmakogenomik Kodein & Morfin: Kodein adalah prodrug inaktif yang membutuhkan bioaktivasi oleh enzim CYP2D6 di hepar ibu untuk diubah menjadi metabolit aktif analgesik Morfin. Pada populasi tertentu (hingga 10-29% pada etnis Timur Tengah dan Afrika Utara, serta 1-10% kaukasia/asia), terdapat duplikasi genetik CYP2D6 yang menjadikannya Ultra-Rapid Metabolizer (UM). Pada ibu tipe UM, metabolisme kodein melonjak eksponensial menghasilkan kadar Morfin serum dan ASI yang sangat tinggi. Bayi baru lahir memiliki imaturitas klirens glukuronidasi hepar dan ginjal, sehingga morfin yang terminum via ASI berakumulasi cepat, memicu depresi susunan saraf pusat, hipotonia berat ('floppy baby'), depresi pernapasan berat, dan kematian mendadak. FDA Black Box Warning melarang keras Kodein dan Tramadol pada ibu menyusui."
    },
    {
      "id": "q57",
      "category": "Ibu Menyusui",
      "question": "Ibu menyusui 29 tahun yang melahirkan 8 minggu lalu didiagnosis mengalami Postpartum Depression sedang. Dokter ingin meresepkan antidepresan golongan SSRI (Selective Serotonin Reuptake Inhibitor). Mengapa Sertralin dan Paroksetin menjadi SSRI pilihan utama yang paling direkomendasikan pada laktasi dibanding Fluoksetin?",
      "options": [
        {
          "label": "A",
          "text": "Fluoksetin menyebabkan ASI berbusa dan asam",
          "correct": false
        },
        {
          "label": "B",
          "text": "Sertralin memicu peningkatan produksi ASI hingga 5 liter sehari",
          "correct": false
        },
        {
          "label": "C",
          "text": "Fluoksetin hanya bekerja pada sistem saraf pria dewasa",
          "correct": false
        },
        {
          "label": "D",
          "text": "Sertralin dan Paroksetin memiliki ikatan protein plasma sangat tinggi (~98%) dan nilai Relative Infant Dose sangat rendah (RID 0.4 - 2.2%), sehingga kadar dalam darah bayi hampir tidak terdeteksi; sebaliknya Fluoksetin memiliki metabolit aktif (Norfluoksetin) berwaktu paruh sangat panjang (1-2 minggu) yang berakumulasi pada bayi memicu iritabilitas, kolik, sedasi, dan penurunan berat badan",
          "correct": true
        }
      ],
      "explanation": "Sertralin dan Paroksetin adalah antidepresan SSRI lini pertama pilihan pada masa menyusui (Hale Kategori L2). Karakteristik fisikokimianya sangat menguntungkan: ikatan protein plasma sangat tinggi (98%), sehingga hanya fraksi bebas 2% yang dapat berdifusi ke ASI, menghasilkan nilai RID yang luar biasa rendah (0.4% - 2.2%, jauh di bawah ambang 10%). Berbagai studi klinis membuktikan kadar sertralin dalam serum bayi menyusui berada di bawah batas deteksi laboratorium tanpa efek samping pada tumbuh kembang. Sebaliknya, Fluoksetin (Hale L3) memiliki waktu paruh panjang dan menghasilkan metabolit aktif Norfluoksetin dengan t1/2 hingga 1-2 minggu. Karena ginjal dan hepar bayi belum matang, norfluoksetin berakumulasi dalam darah bayi, memicu tangisan iritabel, kolik berat, gelisah, sedasi, dan penurunan berat badan."
    },
    {
      "id": "q58",
      "category": "Ibu Menyusui",
      "question": "Ny. V (28 th, menyusui eksklusif bayi usia 4 minggu) mengalami Mastitis Bakterial Akut pada payudara kanan dengan gejala demam (38.8 °C), payudara kanan bengkak, merah, nyeri tekan hebat, dan menggigil. Dokter meresepkan Kloksasilin oral 500 mg 4x sehari selama 10 hari. Pasien bertanya apakah ia harus segera menyapih bayinya dan menghentikan pemberian ASI. Apa edukasi klinis dan farmakoterapi yang paling tepat disampaikan apoteker?",
      "options": [
        {
          "label": "A",
          "text": "ASI harus segera dibuang dan payudara kanan diikat kencang tanpa boleh dipompa",
          "correct": false
        },
        {
          "label": "B",
          "text": "Ibu sangat dianjurkan untuk TETAP MENYUSUI secara rutin dari kedua payudara (atau memompa ASI hingga tuntas), karena pengosongan payudara secara teratur adalah pilar utama penyembuhan mastitis, dan Kloksasilin adalah antibiotik beta-laktam yang aman bagi bayi (Hale L1/L2, kadar di ASI minimal)",
          "correct": true
        },
        {
          "label": "C",
          "text": "Pemberian ASI harus disetop permanen dan bayi langsung dialihkan ke susu kental manis",
          "correct": false
        },
        {
          "label": "D",
          "text": "Menyusui hanya boleh dimulai kembali 1 bulan setelah terapi antibiotik selesai tuntas",
          "correct": false
        }
      ],
      "explanation": "Edukasi Klinis Mastitis Laktasional: 1. Patofisiologi: Mastitis berawal dari stasis ASI (pengosongan payudara yang tidak tuntas/sumbatan duktus) yang kemudian mengalami infeksi sekunder oleh bakteri komensal kulit Staphylococcus aureus. 2. Pilar Terapi: PENGOSONGAN PAYUDARA SECARA TUNTAS adalah terapi terpenting! Menghentikan menyusui secara mendadak justru memperparah stasis ASI dan memicu pembentukan abses payudara yang membutuhkan pembedahan. Ibu harus tetap menyusui dari kedua payudara (mulai dari payudara yang sehat, lalu payudara yang sakit setelah LOR aktif). 3. Keamanan Antibiotik: Kloksasilin, Dikloksasilin, atau Sefaleksin memiliki ikatan protein tinggi (> 90%), penetrasi ke ASI sangat rendah, tidak berbahaya bagi bayi, dan aman dilanjutkan bersama ASI."
    },
    {
      "id": "q59",
      "category": "Ibu Menyusui",
      "question": "Kapan strategi Penyesuaian Waktu Minum Obat Tepat Setelah Sesi Menyusui (Timing of Medication Administration) paling efektif diterapkan oleh ibu menyusui untuk meminimalkan paparan obat pada bayi?",
      "options": [
        {
          "label": "A",
          "text": "Hanya berlaku untuk sediaan topikal salep kulit dan tetes mata",
          "correct": false
        },
        {
          "label": "B",
          "text": "Untuk obat-obatan sustained-release dengan waktu paruh eliminasi sangat panjang > 72 jam",
          "correct": false
        },
        {
          "label": "C",
          "text": "Untuk obat-obatan dengan waktu paruh eliminasi pendek (t1/2 singkat < 2-3 jam); meminum obat segera setelah selesai menyusui atau sebelum periode tidur terpanjang bayi memberi jeda waktu eliminasi sehingga saat sesi menyusui berikutnya tiba, konsentrasi obat dalam darah ibu telah melewati puncak (Cmax) dan turun ke kadar terendah (trough level)",
          "correct": true
        },
        {
          "label": "D",
          "text": "Obat harus diminum tepat 1 menit sebelum bayi melekat ke puting susu",
          "correct": false
        }
      ],
      "explanation": "Prinsip Timing of Administration pada Laktasi: Kadar sebagian besar obat di dalam ASI mengikuti fluktuasi konsentrasi fraksi bebas obat dalam plasma maternal secara dinamis via difusi pasif dua arah. Untuk obat-obatan dengan waktu paruh eliminasi pendek (t1/2 singkat, misal Parasetamol, Ibuprofen): Jika ibu meminum obat SEGERA SETELAH sesi menyusui tuntas, konsentrasi puncak plasma ibu (Cmax) akan tercapai saat bayi sedang tidur kenyang (jeda 2-4 jam). Pada saat sesi menyusui berikutnya dimulai, kadar obat dalam darah ibu sudah turun drastis ke titik terendah (trough), sehingga jumlah obat yang berdifusi ke ASI minimal. Sebaliknya, strategi timing ini tidak efektif untuk obat dengan t1/2 sangat panjang (kadar plasma konstan) atau sediaan lepas lambat."
    },
    {
      "id": "q60",
      "category": "Ibu Menyusui",
      "question": "Seorang ibu menyusui (bayi usia 3 bulan) datang ke apotek mengeluh hidung tersumbat berat dan pilek. Pasien meminta obat tablet dekongestan oral yang mengandung Pseudoefedrin 60 mg. Apoteker menolak memberikan Pseudoefedrin oral dan merekomendasikan alternatif lain. Apa efek samping spesifik Pseudoefedrin terhadap proses laktasi yang menjadi alasan penolakan apoteker?",
      "options": [
        {
          "label": "A",
          "text": "Pseudoefedrin bekerja sebagai simpatomimetik yang secara akut menekan sekresi hormon Prolaktin hipofisis anterior, menyebabkan penurunan volume produksi ASI hingga 25% - 40% hanya dalam satu kali konsumsi; apoteker merekomendasikan semprot hidung salin isotonik atau oksimetazolin topikal jangka pendek",
          "correct": true
        },
        {
          "label": "B",
          "text": "Pseudoefedrin mengubah warna ASI menjadi merah muda menyala",
          "correct": false
        },
        {
          "label": "C",
          "text": "Pseudoefedrin memicu fermentasi asam laktat di duktus laktifereus",
          "correct": false
        },
        {
          "label": "D",
          "text": "Pseudoefedrin memicu gigi bayi tumbuh sebelum waktunya",
          "correct": false
        }
      ],
      "explanation": "Pseudoefedrin adalah dekongestan simpatomimetik agonis adrenergik alfa dan beta. Studi klinis terkontrol membuktikan bahwa pemberian Pseudoefedrin oral dosis tunggal 60 mg pada ibu menyusui memicu supresi akut sekresi hormon Prolaktin di kelenjar hipofisis anterior, menyebabkan penurunan produksi volume ASI secara tajam sebesar 24% hingga 33% (bahkan hingga > 40% pada dosis berulang) dalam kurun waktu 24 jam. Hal ini dapat menggagalkan keberlangsungan ASI eksklusif. Selain itu, pseudoefedrin yang lolos ke ASI dapat memicu iritabilitas, insomnia, dan takikardia pada bayi. Rekomendasi aman: Terapi non-sistemik seperti Nasal Saline Spray (semprot hidung NaCl 0.9%) atau Dekongestan topikal lokal (Oksimetazolin semprot hidung selama < 3 hari) yang absorpsi sistemiknya sangat minimal."
    }
  ],

  // 5. Cheat Sheet & Rangkuman Cepat (Slide 43 & 45)
  cheatSheet: [
    {
      population: "Gangguan Ginjal",
      primaryChange: "Klirens renal (feCL_Rfe) turun, waktu paruh (fet_{1/2}fe) memanjang, fraksi bebas obat asam (fef_ufe) naik.",
      tool: "Kalkulator Cockcroft-Gault (CrCl mL/min)",
      actionPrinciple: "Hitung CrCl -> Gunakan Dettli Factor feQ = 1 - f_e(1-KF)fe -> Turunkan dosis atau panjangkan interval. Hindari Metformin pada CrCl < 30.",
      keyRef: "The Renal Drug Handbook 5th ed & DiPiro Ch. 69"
    },
    {
      population: "Gangguan Hati & Sirosis",
      primaryChange: "Shunt portosistemik (feFfe oral naik), CYP Fase 1 rusak parah, Glukuronidasi Fase 2 relatif bertahan, Albumin turun.",
      tool: "Skor Child-Pugh (Kelas A: 5-6, B: 7-9, C: 10-15)",
      actionPrinciple: "Tidak ada rumus eksak seperti CrCl -> Turunkan dosis awal 25-50% pada Kelas B/C. Pilih Lorazepam dibanding Diazepam. Hindari NSAID & sedatif berat.",
      keyRef: "Shargel Bab 25 & DiPiro Bab 58"
    },
    {
      population: "Geriatri (Lansia)",
      primaryChange: "Air tubuh turun (-15%), lemak naik (+30%), massa otot turun (SCr menipu), aliran darah hepar & ginjal turun, sensitivitas SSP naik.",
      tool: "Cockcroft-Gault + AGS Beers Criteria 2023",
      actionPrinciple: "'Start Low, Go Slow!'. Waspada Kaskade Peresepan. Ingat Furosemid oral butuh dosis bolus cukup untuk tembus ceiling tubulus.",
      keyRef: "Zeind Carvalho Bab 107 & Beers Criteria"
    },
    {
      population: "Ibu Hamil",
      primaryChange: "Volume plasma naik (+50%), GFR naik (+50%), curah jantung naik. Organogenesis minggu 3-8 sangat rentan.",
      tool: "Sistem PLLR (Pregnancy and Lactation Labeling Rule) & Briggs Drugs in Pregnancy",
      actionPrinciple: "HINDARI ACEI/ARB (Lisinopril), Metotreksat, Warfarin, Valproat, Fluorokuinolon. Ganti antihipertensi ke Metildopa/Labetalol/Nifedipin.",
      keyRef: "Briggs 12th ed & DiPiro Bab 105"
    },
    {
      population: "Ibu Menyusui",
      primaryChange: "Obat masuk ke ASI via difusi pasif fraksi bebas (fef_ufe).",
      tool: "Kalkulator Relative Infant Dose (RID) & Buku Medications & Mothers' Milk (Prof. Thomas Hale)",
      actionPrinciple: "Ambang batas RID < 10% aman. Pilih obat ber-BM besar, fet_{1/2}fe singkat, dan protein binding tinggi. HINDARI Kodein (risiko CYP2D6 UM) & Kemoterapi.",
      keyRef: "Hale's Medications & Mothers' Milk 2023"
    }
  ]
};
