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
            { symbol: "CL (Klirens)", unit: "L/jam atau mL/min", meaning: "Kemampuan tubuh membersihkan volume darah dari obat per satuan waktu. $CL = CL_{renal} + CL_{non-renal}$." },
            { symbol: "V_d (Volume Distribusi)", unit: "Liter atau L/kg", meaning: "Ruang semu tempat obat terdistribusi. Vd besar (> 5 L/kg) = obat suka ngumpet di lemak/jaringan (susah dicuci dialisis!)." },
            { symbol: "t_{1/2} (Waktu Paruh)", unit: "Jam", meaning: "Waktu yang dibutuhkan kadar obat untuk turun jadi 50%. Rumus: $t_{1/2} = \\frac{0.693 \\times V_d}{CL}$." },
            { symbol: "f_e (Fraksi Renal)", unit: "0 - 1.0 (atau %)", meaning: "Persentase obat yang dieliminasi lewat urin dalam bentuk UTUH tanpa diubah." },
            { symbol: "f_u (Fraksi Bebas)", unit: "0 - 1.0", meaning: "Persentase obat yang TIDAK terikat albumin. Hanya obat bebas yang punya efek farmakologis & bisa difiltrasi ginjal!" },
            { symbol: "E (Rasio Ekstraksi)", unit: "0 - 1.0", meaning: "Efisiensi hepar menyaring obat dalam satu kali aliran darah. $E > 0.7$ (High) vs $E < 0.3$ (Low)." }
          ]
        },
        {
          subtitle: "2 Strategi Penyesuaian Dosis (Pick Your Strategy!)",
          strategies: [
            {
              name: "Strategi 1: Turunkan Dosis (Dose Reduction)",
              formula: "D_{pasien} = D_{normal} \\times Q",
              interval: "Interval (\\tau) tetap sama",
              pros: "Kadar obat dalam darah lebih rata dan fluktuasi puncak-lembah ($C_{max}-C_{min}$) lebih kecil.",
              when: "Sangat cocok untuk obat dengan indeks terapi sempit atau obat tipe *time-dependent* (misal antidiabetes, beberapa antiepilepsi)."
            },
            {
              name: "Strategi 2: Perpanjang Interval (Interval Extension)",
              formula: "\\tau_{pasien} = \\frac{\\tau_{normal}}{Q}",
              interval: "Dosis tetap sama, interval diperpanjang",
              pros: "Tetap mencapai kadar puncak ($C_{max}$) yang tinggi untuk efek bakterisidal maksimal.",
              when: "Sangat cocok untuk obat tipe *concentration-dependent* seperti Aminoglikosida (Gentamisin, Amikasin) dan Fluorokuinolon."
            }
          ]
        },
        {
          subtitle: "Formula Sakti Dettli & Rowland-Tozer ($Q$ Factor)",
          latexFormula: "Q = 1 - f_e \\times (1 - KF)",
          detailExplanation: "Di mana: \\n• $f_e$ = fraksi obat utuh di urin pada fungsi ginjal normal\\n• $KF$ (Kidney Function ratio) = $\\frac{CrCl_{pasien}}{CrCl_{normal}}$ (CrCl normal diasumsikan 100 atau 120 mL/min)\\n• Jika $f_e = 0.9$ dan $KF = 0.3$, maka $Q = 1 - 0.9 \\times (1 - 0.3) = 1 - 0.63 = 0.37$ (dosis disunat jadi 37%!)."
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
            { title: "Ikatan Protein (Protein Binding)", desc: "Hanya fraksi bebas ($f_u$) yang bisa menembus pori membran dialisis. Obat dengan ikatan protein > 90% (misal Fenitoin, Warfarin) tidak banyak terbuang." },
            { title: "Volume Distribusi (Vd)", desc: "Obat yang ngumpet di jaringan dengan Vd raksasa (misal Digoksin Vd 300-500 L, Amiodaron) tidak bisa ditarik oleh mesin dialisis." }
          ]
        }
      ],
      caseStudy: {
        title: "Kasus 1: Tn. B (78 th, 50 kg, SCr 1.8 mg/dL) & Metformin",
        scenario: "Tn. B menderita DM tipe 2 dan diresepkan Metformin 500 mg 3x sehari. SCr lab = 1.8 mg/dL.",
        calculation: "CrCl = (140 - 78) * 50 / (72 * 1.8) = 62 * 50 / 129.6 = 23.9 mL/menit!",
        drp: "DRP Kritis: Metformin diekskresi 90-100% utuh di urin ($f_e = 0.9-1.0$). Pada CrCl < 30 mL/min, akumulasi Metformin memicu Lactic Acidosis (bisa fatal!).",
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
            { icon: "git-branch", title: "Portosystemic Shunt & Aliran Darah Turun", text: "Darah memotong jalur hepar -> First-pass metabolism lenyap -> Bioavailabilitas ($F$) obat oral melonjak drastis! Dosis normal bisa bikin overdosis." },
            { icon: "zap-off", title: "Kerusakan Enzim CYP (Fase 1 Drop Parah)", text: "Oksidasi CYP450 rusak berat. TAPI Glukuronidasi (Fase 2) relatif lebih bertahan. Makanya pilih benzodiazepin Fase 2 (Lorazepam, Oksazepam) daripada Fase 1 (Diazepam)!" },
            { icon: "droplet", title: "Sintesis Albumin Menurun", text: "Hipoalbuminemia -> Fraksi bebas obat asam ($f_u$) melonjak tinggi -> Efek samping meningkat tajam walau kadar total terlihat normal." }
          ]
        },
        {
          subtitle: "High Extraction ($E > 0.7$) vs Low Extraction ($E < 0.3$)",
          extractionComparison: [
            {
              type: "High Extraction Drugs (E > 0.7)",
              meaning: "Klirens obat dibatasi oleh ALIRAN DARAH hepar (Flow-limited).",
              examples: "Propranolol, Lidokain, Morfin, Verapamil, Nitrat.",
              impact: "Pada sirosis: Aliran darah turun + Shunt -> Klirens drop 50-80% -> Bioavailabilitas oral naik 2-4 KALI LIPAT! Solusi: Turunkan dosis awal oral secara radikal."
            },
            {
              type: "Low Extraction Drugs (E < 0.3)",
              meaning: "Klirens obat dibatasi oleh AKTIVITAS ENZIM INTRINSIK & IKATAN PROTEIN ($CL_{int} \\times f_u$).",
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
            { organ: "Air Tubuh Total & Massa Otot (-10 s/d 15%)", impact: "Volume distribusi obat larut air (Litium, Digoksin, Aminoglikosida) menyusut -> Kadar puncak ($C_{max}$) melonjak tinggi!" },
            { organ: "Persentase Lemak Tubuh (+20 s/d 40%)", impact: "Volume distribusi obat larut lemak (Diazepam, Lipofilik) membesar -> Obat terperangkap di lemak, $t_{1/2}$ memanjang drastis, pasien teler berhari-hari!" },
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
        drp: "1. Furosemid oral lambat diserap pada mukosa edematous lansia -> kadar tubulus di bawah ambang diuresis.\\n2. Hitung CrCl: $(140-75) \\times 48 / (72 \\times 1.2) \\times 0.85 = 30.6$ mL/min (Gangguan ginjal tahap 3!).",
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
            { icon: "clock", title: "Waktu Paruh Pendek ($t_{1/2}$ singkat)", desc: "Obat cepat dibersihkan dari darah ibu sebelum jadwal menyusui berikutnya." },
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

  // 4. Quick Pop Quiz (5 Soal Gamified)
  quiz: [
    {
        "id": "q1",
        "category": "Kalkulasi PK",
        "question": "Seorang pasien pria (60 th, 70 kg) dengan pneumonia berat menerima antibiotik X yang memiliki fraksi ekskresi ginjal utuh fe = 0.80. Klirens kreatinin pasien terukur 25 mL/menit (CrCl normal 100 mL/menit). Jika dosis lazim obat X adalah 500 mg tiap 8 jam, berapakah dosis baru yang direkomendasikan bila menggunakan strategi penyesuaian penurunan dosis (Dose Reduction) menurut formula Dettli?",
        "options": [
            {
                "label": "A",
                "text": "200 mg tiap 8 jam (Q = 0.40)",
                "correct": true
            },
            {
                "label": "B",
                "text": "125 mg tiap 8 jam (Q = 0.25)",
                "correct": false
            },
            {
                "label": "C",
                "text": "350 mg tiap 8 jam (Q = 0.70)",
                "correct": false
            },
            {
                "label": "D",
                "text": "500 mg tiap 20 jam (Q = 0.40)",
                "correct": false
            }
        ],
        "explanation": "KF = 25 / 100 = 0.25. Faktor Dettli: Q = 1 - fe * (1 - KF) = 1 - 0.80 * (1 - 0.25) = 1 - 0.80 * 0.75 = 1 - 0.60 = 0.40. Dosis baru = Dosis normal * Q = 500 mg * 0.40 = 200 mg tiap 8 jam (interval tetap)."
    },
    {
        "id": "q2",
        "category": "Kalkulasi PK",
        "question": "Pada pasien yang sama (Q = 0.40), dokter ingin mempertahankan kadar puncak (Cmax) yang tinggi karena obat X memiliki sifat bakterisidal concentration-dependent. Berapakah interval pemberian baru yang tepat bila dosis tetap dipertahankan 500 mg?",
        "options": [
            {
                "label": "A",
                "text": "500 mg tiap 12 jam",
                "correct": false
            },
            {
                "label": "B",
                "text": "500 mg tiap 16 jam",
                "correct": false
            },
            {
                "label": "C",
                "text": "500 mg tiap 20 jam",
                "correct": true
            },
            {
                "label": "D",
                "text": "500 mg tiap 24 jam",
                "correct": false
            }
        ],
        "explanation": "Untuk strategi interval extension: tau_pasien = tau_normal / Q = 8 jam / 0.40 = 20 jam. Jadi regimen barunya adalah 500 mg tiap 20 jam."
    },
    {
        "id": "q3",
        "category": "Fundamental PK",
        "question": "Obat Aminoglikosida (Gentamisin) memiliki eliminasi utama via filtrasi glomerulus ginjal (fe = 0.98) dan bersifat bakterisidal konsentrasi-dependen dengan Post-Antibiotic Effect (PAE) yang panjang. Mengapa strategi pemberian sekali sehari dosis tinggi (Extended-Interval Dosing) lebih disukai pada gangguan ginjal ringan-sedang dibanding dosis terbagi sering?",
        "options": [
            {
                "label": "A",
                "text": "Mencapai rasio Cmax/MIC > 8-10 untuk efikasi maksimal sekaligus memberikan periode kadar lembah (Cmin) yang rendah untuk meminimalisir akumulasi di sel tubulus ginjal",
                "correct": true
            },
            {
                "label": "B",
                "text": "Meningkatkan ikatan protein plasma sehingga obat tidak dapat difiltrasi ke urin",
                "correct": false
            },
            {
                "label": "C",
                "text": "Mempercepat klirens metabolisme lintas pertama di hepar",
                "correct": false
            },
            {
                "label": "D",
                "text": "Menghilangkan kebutuhan Therapeutic Drug Monitoring (TDM)",
                "correct": false
            }
        ],
        "explanation": "Uptake aminoglikosida ke dalam sel tubulus proksimal ginjal bersifat saturable. Dosis tinggi sekali sehari memberikan Cmax tinggi untuk bakterisidal maksimal dan menyisakan waktu lebih lama dengan kadar lembah rendah (trough < 1 mcg/mL) sehingga menurunkan risiko nefrotoksisitas & ototoksisitas."
    },
    {
        "id": "q4",
        "category": "Fundamental PK",
        "question": "Suatu obat memiliki Volume Distribusi (Vd) normal sebesar 40 Liter dan Klirens (CL) normal sebesar 4 L/jam (t1/2 = 6.93 jam). Pada pasien gagal ginjal kronis stadium 4, klirens total obat turun menjadi 1 L/jam tanpa perubahan Vd. Berapakah waktu paruh eliminasi (t1/2) obat yang baru pada pasien tersebut?",
        "options": [
            {
                "label": "A",
                "text": "13.86 jam",
                "correct": false
            },
            {
                "label": "B",
                "text": "27.72 jam",
                "correct": true
            },
            {
                "label": "C",
                "text": "3.46 jam",
                "correct": false
            },
            {
                "label": "D",
                "text": "55.44 jam",
                "correct": false
            }
        ],
        "explanation": "t1/2 = (0.693 * Vd) / CL = (0.693 * 40) / 1 = 27.72 jam (waktu paruh meningkat 4 kali lipat sebanding dengan penurunan klirens 4 kali lipat!)."
    },
    {
        "id": "q5",
        "category": "Fundamental PK",
        "question": "Berapa lamakah waktu yang dibutuhkan pasien gagal ginjal pada soal sebelumnya (t1/2 = 27.72 jam) untuk mencapai kondisi tunak (Steady-State / Css) jika diberikan infus kontinu tanpa loading dose?",
        "options": [
            {
                "label": "A",
                "text": "Sekitar 24 jam (1 hari)",
                "correct": false
            },
            {
                "label": "B",
                "text": "Sekitar 48 jam (2 hari)",
                "correct": false
            },
            {
                "label": "C",
                "text": "Sekitar 110 - 138 jam (4 s/d 5 kali waktu paruh)",
                "correct": true
            },
            {
                "label": "D",
                "text": "Langsung tercapai setelah dosis pertama diberikan",
                "correct": false
            }
        ],
        "explanation": "Kondisi steady state (Css) secara matematis selalu membutuhkan 4 sampai 5 kali waktu paruh (t1/2). Dengan t1/2 = 27.72 jam, maka 4-5 x t1/2 = 110.8 s/d 138.6 jam (~4.6 - 5.7 hari). Oleh karena itu, loading dose sangat krusial pada kasus darurat!"
    },
    {
        "id": "q6",
        "category": "Fundamental PK",
        "question": "Mengapa Loading Dose (Dosis Muatan / D_L) suatu obat pada pasien gagal ginjal pada umumnya TIDAK PERLU diturunkan, kecuali jika Volume Distribusi (Vd) obat tersebut berubah?",
        "options": [
            {
                "label": "A",
                "text": "Karena Loading Dose hanya ditentukan oleh target konsentrasi plasma dan Volume Distribusi (DL = Ctarget * Vd), bukan oleh Klirens atau Laju Eliminasi",
                "correct": true
            },
            {
                "label": "B",
                "text": "Karena Loading Dose langsung diekskresikan melalui keringat",
                "correct": false
            },
            {
                "label": "C",
                "text": "Karena hepar secara otomatis mengambil alih fungsi ginjal saat dosis pertama",
                "correct": false
            },
            {
                "label": "D",
                "text": "Karena obat tidak akan terdistribusi ke organ lain pada pemberian pertama",
                "correct": false
            }
        ],
        "explanation": "Rumus DL = (Ctarget * Vd) / F. Besarnya dosis muatan semata-mata bertujuan mengisi ruang distribusi (Vd) untuk mencapai kadar target secepatnya. Yang disesuaikan pada gagal ginjal adalah MAINTENANCE DOSE (Dosis Pemeliharaan) karena klirensnya yang turun."
    },
    {
        "id": "q7",
        "category": "Fundamental PK",
        "question": "Fenitoin adalah obat antiepilepsi asam lemah dengan ikatan protein plasma normal 90% (fraksi bebas fu = 0.10). Pada pasien uremia dengan albumin serum turun menjadi 2.5 g/dL, kadar fenitoin total terukur 8 mcg/mL (rentang normal total 10-20 mcg/mL). Mengapa pasien tersebut justru menunjukkan gejala toksisitas (nistagmus, ataksia)?",
        "options": [
            {
                "label": "A",
                "text": "Uremia dan hipoalbuminemia menggeser ikatan fenitoin sehingga fraksi bebas (fu) melonjak menjadi 20-30%; konsentrasi obat bebas aktif sebenarnya sudah mencapai >2 mcg/mL (kadar bebas toksik)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Fenitoin mengalami ekskresi terbalik di tubulus distal",
                "correct": false
            },
            {
                "label": "C",
                "text": "Uremia meningkatkan klirens intrinsik hepar terhadap fenitoin",
                "correct": false
            },
            {
                "label": "D",
                "text": "Kadar metabolit inaktif berubah menjadi racun di lambung",
                "correct": false
            }
        ],
        "explanation": "Pada hipoalbuminemia & uremia, toksin uremik berkompetisi pada binding site albumin + albumin turun. Rumus Sheiner-Tozer memprediksi kadar terkoreksi: C_koreksi = C_ukur / (0.2 * Albumin + 0.1). Kadar obat bebas (fu * C) yang merupakan fraksi aktif secara farmakologis melonjak tinggi walau kadar total tampak rendah!"
    },
    {
        "id": "q8",
        "category": "Fundamental PK",
        "question": "Obat antidiabetes manakah di bawah ini yang eliminasi totalnya paling TIDAK dipengaruhi oleh penurunan fungsi ginjal?",
        "options": [
            {
                "label": "A",
                "text": "Metformin (fe = 0.95)",
                "correct": false
            },
            {
                "label": "B",
                "text": "Atenolol (fe = 0.85)",
                "correct": false
            },
            {
                "label": "C",
                "text": "Linagliptin (fe < 0.05, ekskresi mayoritas enterohepatik/feses)",
                "correct": true
            },
            {
                "label": "D",
                "text": "Flukonazol (fe = 0.80)",
                "correct": false
            }
        ],
        "explanation": "Linagliptin dieliminasi terutama lewat empedu dan feses dalam bentuk utuh (>80%), fraksi ekskresi ginjalnya (fe) kurang dari 5%, sehingga tidak memerlukan penyesuaian dosis pada derajat gagal ginjal berapapun."
    },
    {
        "id": "q9",
        "category": "Fundamental PK",
        "question": "Jika suatu obat bersifat Low Extraction Ratio (E < 0.3) di hepar dan terikat kuat dengan albumin, apa parameter utama yang membatasi klirens heparnya?",
        "options": [
            {
                "label": "A",
                "text": "Laju aliran darah hepar (Hepatic Blood Flow)",
                "correct": false
            },
            {
                "label": "B",
                "text": "Aktivitas enzim intrinsik hepatosit (CLint) dan fraksi obat bebas (fu)",
                "correct": true
            },
            {
                "label": "C",
                "text": "pH cairan empedu",
                "correct": false
            },
            {
                "label": "D",
                "text": "Kecepatan motilitas usus halus",
                "correct": false
            }
        ],
        "explanation": "Untuk obat ekstraksi rendah (E < 0.3), rumus klirens hepar adalah CL_H = fu * CL_int. Klirens tidak dipengaruhi oleh aliran darah hepar, melainkan sangat bergantung pada kapasitas enzim intrinsik dan fraksi obat yang tidak terikat protein (free fraction)."
    },
    {
        "id": "q10",
        "category": "Fundamental PK",
        "question": "Apa dampak farmakokinetik utama dari penurunan keasaman lambung (pH naik) akibat penggunaan rutin antasida atau PPI pada lansia terhadap obat antijamur azol seperti Ketokonazol atau Itrakonazol oral?",
        "options": [
            {
                "label": "A",
                "text": "Disolusi dan absorpsi obat menurun drastis karena antijamur azol membutuhkan suasana asam lambung untuk ionisasi dan kelarutan",
                "correct": true
            },
            {
                "label": "B",
                "text": "Metabolisme lintas pertama di hepar meningkat tajam",
                "correct": false
            },
            {
                "label": "C",
                "text": "Ekskresi ginjal meningkat melalui sekresi tubulus aktif",
                "correct": false
            },
            {
                "label": "D",
                "text": "Volume distribusi obat meningkat 10 kali lipat",
                "correct": false
            }
        ],
        "explanation": "Ketokonazol dan Itrakonazol tablet memerlukan pH asam lambung untuk terdisolusi. Peningkatan pH lambung akibat PPI/antasida atau aklorhidria fisiologis lansia menyebabkan bioavailabilitas obat-obat ini anjlok hingga gagal terapi."
    },
    {
        "id": "q11",
        "category": "Gangguan Ginjal",
        "question": "Tn. R (72 th, BB 55 kg) memiliki hasil laboratorium SCr 1.5 mg/dL. Menggunakan formula Cockcroft-Gault, berapakah estimasi Klirens Kreatinin (CrCl) Tn. R dan apa klasifikasi stadium CKD-nya?",
        "options": [
            {
                "label": "A",
                "text": "CrCl = 34.6 mL/min (CKD Tahap 3 / Sedang)",
                "correct": true
            },
            {
                "label": "B",
                "text": "CrCl = 52.1 mL/min (CKD Tahap 2 / Ringan)",
                "correct": false
            },
            {
                "label": "C",
                "text": "CrCl = 21.3 mL/min (CKD Tahap 4 / Berat)",
                "correct": false
            },
            {
                "label": "D",
                "text": "CrCl = 68.5 mL/min (CKD Tahap 2 / Ringan)",
                "correct": false
            }
        ],
        "explanation": "CrCl = [(140 - 72) * 55] / (72 * 1.5) = (68 * 55) / 108 = 3740 / 108 = 34.63 mL/menit. Rentang 30-59 mL/min termasuk CKD Stadium 3 (Gangguan Ginjal Sedang)."
    },
    {
        "id": "q12",
        "category": "Gangguan Ginjal",
        "question": "Ny. W (68 th, BB 48 kg) memiliki kadar SCr 2.0 mg/dL. Berapakah nilai CrCl setelah dikoreksi faktor jenis kelamin wanita?",
        "options": [
            {
                "label": "A",
                "text": "24.0 mL/min",
                "correct": false
            },
            {
                "label": "B",
                "text": "20.4 mL/min",
                "correct": true
            },
            {
                "label": "C",
                "text": "31.2 mL/min",
                "correct": false
            },
            {
                "label": "D",
                "text": "16.8 mL/min",
                "correct": false
            }
        ],
        "explanation": "CrCl pria = [(140 - 68) * 48] / (72 * 2.0) = (72 * 48) / 144 = 24.0 mL/min. Koreksi wanita = 24.0 * 0.85 = 20.4 mL/min (CKD Stadium 4 / Berat)."
    },
    {
        "id": "q13",
        "category": "Gangguan Ginjal",
        "question": "Pasien DM Tipe 2 dengan eGFR 24 mL/menit/1.73m2 datang ke apotek membawa resep Metformin 500 mg 2x sehari. Sebagai apoteker klinis, apa rekomendasi yang paling tepat sesuai pedoman KDIGO dan ADA?",
        "options": [
            {
                "label": "A",
                "text": "Lanjutkan Metformin dengan dosis dinaikkan menjadi 850 mg",
                "correct": false
            },
            {
                "label": "B",
                "text": "Hentikan Metformin karena kontraindikasi mutlak pada eGFR < 30 mL/min/1.73m2 akibat risiko Asidosis Laktat; rekomendasikan beralih ke Linagliptin atau Insulin",
                "correct": true
            },
            {
                "label": "C",
                "text": "Turunkan Metformin menjadi 250 mg seminggu sekali tanpa monitoring",
                "correct": false
            },
            {
                "label": "D",
                "text": "Ganti Metformin dengan Glibenklamid dosis maksimal",
                "correct": false
            }
        ],
        "explanation": "Pedoman internasional (KDIGO & ADA) menetapkan batas eGFR < 30 mL/min/1.73m2 sebagai kontraindikasi mutlak Metformin karena klirens renal metformin anjlok memicu akumulasi asam laktat hepatik. Glibenklamid juga dihindari pada CKD berat karena metabolit aktifnya menumpuk memicu hipoglikemia berkepanjangan."
    },
    {
        "id": "q14",
        "category": "Gangguan Ginjal",
        "question": "Seorang pasien gagal ginjal terminal yang menjalani Hemodialisis (HD) 3 kali seminggu memerlukan terapi antibiotik Vankomisin untuk bakteremia MRSA. Mengapa Vankomisin hanya dapat dibersihkan secara signifikan bila menggunakan dializer jenis High-Flux membrane?",
        "options": [
            {
                "label": "A",
                "text": "Karena Vankomisin memiliki Berat Molekul besar (±1.448 Da) yang melebihi cut-off pori dializer Low-Flux konvensional (< 500 Da)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Karena Vankomisin terikat 100% pada hemoglobin eritrosit",
                "correct": false
            },
            {
                "label": "C",
                "text": "Karena Vankomisin mengendap di cairan dialisat asam",
                "correct": false
            },
            {
                "label": "D",
                "text": "Karena Vankomisin dimetabolisme oleh serat selulosa dializer",
                "correct": false
            }
        ],
        "explanation": "Membran Low-Flux konvensional hanya mampu menyaring molekul kecil (< 500 Da). Vankomisin (BM 1.448 Da) tergolong middle-molecule yang membutuhkan pori dializer High-Flux (polysulfone/polyamide) untuk klirens adekuat."
    },
    {
        "id": "q15",
        "category": "Gangguan Ginjal",
        "question": "Kapan waktu pemberian dosis pemeliharaan Vankomisin yang paling tepat bagi pasien yang menjalani jadwal sesi hemodialisis reguler?",
        "options": [
            {
                "label": "A",
                "text": "2 jam tepat sebelum hemodialisis dimulai",
                "correct": false
            },
            {
                "label": "B",
                "text": "Segera setelah sesi hemodialisis selesai (post-dialysis) atau selama 30-60 menit terakhir dialisis",
                "correct": true
            },
            {
                "label": "C",
                "text": "Di tengah-tengah sesi hemodialisis",
                "correct": false
            },
            {
                "label": "D",
                "text": "Hanya pada hari bebas dialisis (off-dialysis day)",
                "correct": false
            }
        ],
        "explanation": "Jika diberikan sebelum dialisis, sebagian obat akan terbuang percuma oleh mesin HD (dialyzed out). Pemberian pasca-dialisis memastikan kadar terapeutik tercapai penuh di sirkulasi darah tanpa terbuang."
    },
    {
        "id": "q16",
        "category": "Gangguan Ginjal",
        "question": "Pasien dengan CrCl 20 mL/min diresepkan Siprofloksasin oral untuk infeksi saluran kemih berkomplikasi. Manakah penyesuaian dosis yang tepat menurut The Renal Drug Handbook?",
        "options": [
            {
                "label": "A",
                "text": "750 mg tiap 12 jam",
                "correct": false
            },
            {
                "label": "B",
                "text": "250 mg tiap 12 jam ATAU 500 mg tiap 24 jam",
                "correct": true
            },
            {
                "label": "C",
                "text": "500 mg tiap 8 jam",
                "correct": false
            },
            {
                "label": "D",
                "text": "Tidak perlu penyesuaian dosis karena eliminasi murni hepar",
                "correct": false
            }
        ],
        "explanation": "Siprofloksasin memiliki fe ~0.40 - 0.50. Pada CrCl < 30 mL/min, klirens ginjal turun drastis, sehingga dosis lazim (500 mg q12h) harus diturunkan 50% menjadi 250 mg q12h atau 500 mg q24h untuk menghindari akumulasi dan toksisitas SSP."
    },
    {
        "id": "q17",
        "category": "Gangguan Ginjal",
        "question": "Digoksin adalah obat gagal jantung dengan indeks terapi sempit (target 0.5 - 0.9 ng/mL). Mengapa kadar serum Digoksin harus dipantau sangat ketat pada pasien yang fungsi ginjalnya memburuk?",
        "options": [
            {
                "label": "A",
                "text": "Karena fe Digoksin adalah 0.70-0.80 dan Volume Distribusi (Vd) juga menyusut pada gagal ginjal, sehingga klirens turun drastis dan risiko aritmia fatal meningkat",
                "correct": true
            },
            {
                "label": "B",
                "text": "Karena Digoksin berubah menjadi metabolit aktif yang merusak glomerulus",
                "correct": false
            },
            {
                "label": "C",
                "text": "Karena Digoksin menghambat absorpsi kalium di lambung",
                "correct": false
            },
            {
                "label": "D",
                "text": "Karena Digoksin merangsang pembentukan batu asam urat",
                "correct": false
            }
        ],
        "explanation": "Digoksin diekskresi 70-80% utuh via filtrasi ginjal. Selain itu, uremia menurunkan ikatan digoksin pada reseptor Na+/K+ ATPase di jaringan otot skelet, menyebabkan Vd menyusut 30-50%. Klirens turun + Vd turun = kadar serum melonjak cepat memicu toksisitas glikosida jantung!"
    },
    {
        "id": "q18",
        "category": "Gangguan Ginjal",
        "question": "Manakah kombinasi antibiotik berikut yang memiliki risiko sinergisme NEFROTOKSISITAS paling tinggi pada pasien dengan gangguan ginjal yang sudah ada?",
        "options": [
            {
                "label": "A",
                "text": "Amoksisilin + Asam Klavulanat",
                "correct": false
            },
            {
                "label": "B",
                "text": "Vankomisin + Gentamisin (atau Piperasilin-Tazobaktam)",
                "correct": true
            },
            {
                "label": "C",
                "text": "Azitromisin + Seftriakson",
                "correct": false
            },
            {
                "label": "D",
                "text": "Doksisiklin + Klindamisin",
                "correct": false
            }
        ],
        "explanation": "Kombinasi Vankomisin dan Aminoglikosida (Gentamisin/Amikasin) atau Vankomisin + Piperasilin-Tazobaktam terbukti secara klinis melipatgandakan risiko Acute Kidney Injury (AKI) melalui kerusakan tubular sinergis dan nekrosis tubular akut."
    },
    {
        "id": "q19",
        "category": "Gangguan Ginjal",
        "question": "Penggunaan NSAID (seperti Ketorolak, Ibuprofen, Natrium Diklofenak) pada pasien gagal ginjal kronis dapat menyebabkan penurunan Laju Filtrasi Glomerulus (GFR) secara akut. Bagaimana mekanisme farmakodinamik terjadinya efek samping tersebut?",
        "options": [
            {
                "label": "A",
                "text": "NSAID menghambat sintesis Prostaglandin PGE2 dan PGI2 yang bertugas mempertahankan vasodilatasi arteriol AFEREN glomerulus, sehingga terjadi vasokonstriksi arteriol aferen dan iskemia glomerulus",
                "correct": true
            },
            {
                "label": "B",
                "text": "NSAID memblokade reseptor Angiotensin II pada arteriol eferen",
                "correct": false
            },
            {
                "label": "C",
                "text": "NSAID merusak membran filtrasi podosit secara mekanik",
                "correct": false
            },
            {
                "label": "D",
                "text": "NSAID memicu ekskresi albumin berlebihan ke dalam tubulus",
                "correct": false
            }
        ],
        "explanation": "Pada kondisi hipoperfusi ginjal atau CKD, aliran darah glomerulus dipertahankan oleh Prostaglandin (vasodilatasi arteriol aferen) dan Angiotensin II (vasokonstriksi arteriol eferen). Penghambatan COX oleh NSAID melenyapkan prostaglandin sehingga arteriol aferen konstriksi dan GFR drop drastis!"
    },
    {
        "id": "q20",
        "category": "Gangguan Ginjal",
        "question": "Apa fenomena 'Triple Whammy' dalam farmakoterapi yang sangat ditakuti pada pasien lansia dengan penurunan cadangan fungsi ginjal?",
        "options": [
            {
                "label": "A",
                "text": "Kombinasi ACE-Inhibitor (atau ARB) + Diuretik + NSAID yang secara simultan menurunkan perfusi glomerulus, memicu gagal ginjal akut (AKI) mendadak",
                "correct": true
            },
            {
                "label": "B",
                "text": "Kombinasi 3 jenis antibiotik beta-laktam secara bersamaan",
                "correct": false
            },
            {
                "label": "C",
                "text": "Kombinasi Statin + Antasida + Vitamin C",
                "correct": false
            },
            {
                "label": "D",
                "text": "Kombinasi Parasetamol + Antihistamin + Dekongestan",
                "correct": false
            }
        ],
        "explanation": "Triple Whammy: Diuretik (hipovolemia/dehidrasi) + NSAID (konstriksi arteriol aferen via hambatan prostaglandin) + ACEI/ARB (dilatasi arteriol eferen via hambatan AT-II) -> tekanan kapiler glomerulus kolaps total -> AKI berat!"
    },
    {
        "id": "q21",
        "category": "Gangguan Ginjal",
        "question": "Pasien dengan CrCl 15 mL/menit mengalami hiperurisemia sekunder dan serangan gout. Allopurinol diresepkan dokter. Mengapa dosis Allopurinol harus diturunkan drastis (misal mulai dari 50-100 mg/hari)?",
        "options": [
            {
                "label": "A",
                "text": "Karena metabolit aktifnya, Oksipurinol, memiliki fe mendekati 100% dan waktu paruhnya memanjang dari 20 jam menjadi >100 jam pada gagal ginjal, meningkatkan risiko fatal Allopurinol Hypersensitivity Syndrome (AHS/Stevens-Johnson)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Karena Allopurinol langsung merusak kristal asam urat di glomerulus",
                "correct": false
            },
            {
                "label": "C",
                "text": "Karena Allopurinol menyebabkan retensi natrium parah",
                "correct": false
            },
            {
                "label": "D",
                "text": "Karena Allopurinol tidak diserap di usus jika ada uremia",
                "correct": false
            }
        ],
        "explanation": "Oksipurinol adalah metabolit aktif Allopurinol yang dibuang via ginjal. Pada insufisiensi ginjal berat, akumulasi oksipurinol sangat tinggi dan berkorelasi kuat dengan Allopurinol Hypersensitivity Syndrome (AHS) yang memiliki mortalitas 20-25%."
    },
    {
        "id": "q22",
        "category": "Gangguan Ginjal",
        "question": "Seftriakson adalah antibiotik sefalosporin generasi 3 yang unik karena memiliki jalur eliminasi ganda (50% renal, 50% biliar/hepar). Bagaimana rekomendasi penyesuaian dosis Seftriakson pada pasien gagal ginjal murni tanpa gangguan hepar?",
        "options": [
            {
                "label": "A",
                "text": "Dosis harus disunat menjadi 10% dari dosis normal",
                "correct": false
            },
            {
                "label": "B",
                "text": "Tidak memerlukan penyesuaian dosis rutin (maksimal 2 gram/hari), karena jalur ekskresi biliar/hati mengompensasi penurunan ekskresi renal",
                "correct": true
            },
            {
                "label": "C",
                "text": "Kontraindikasi mutlak dan harus diganti Sefotaksim",
                "correct": false
            },
            {
                "label": "D",
                "text": "Hanya boleh diberikan secara infus kontinu 72 jam",
                "correct": false
            }
        ],
        "explanation": "Seftriakson memiliki dual elimination (50:50). Jika ginjal rusak tapi fungsi hepar normal, hepar mengompensasi pembuangan metabolit sehingga tidak diperlukan penyesuaian dosis, kecuali jika terjadi gagal ganda (ginjal + hati berat bersamaan)."
    },
    {
        "id": "q23",
        "category": "Gangguan Hati",
        "question": "Tn. J (58 th) didiagnosis sirosis hepatis alkoholik dengan data lab: Bilirubin total 3.5 mg/dL (3 poin), Albumin 2.6 g/dL (3 poin), INR 2.4 (3 poin), Asites sedang (2 poin), Ensefalopati hepatik grade 1 (2 poin). Berapakah total skor Child-Pugh dan kelas keparahannya?",
        "options": [
            {
                "label": "A",
                "text": "Skor 13 Poin, Kelas C (Dekompensasi Berat)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Skor 10 Poin, Kelas B (Gangguan Sedang)",
                "correct": false
            },
            {
                "label": "C",
                "text": "Skor 8 Poin, Kelas B (Gangguan Sedang)",
                "correct": false
            },
            {
                "label": "D",
                "text": "Skor 6 Poin, Kelas A (Kompensasi Baik)",
                "correct": false
            }
        ],
        "explanation": "Total Poin = 3 (Bilirubin >3) + 3 (Albumin <2.8) + 3 (INR >2.2) + 2 (Asites sedang) + 2 (Ensefalopati gr 1-2) = 13 Poin. Skor 10-15 diklasifikasikan sebagai Child-Pugh Kelas C (Dekompensasi Berat)."
    },
    {
        "id": "q24",
        "category": "Gangguan Hati",
        "question": "Bagaimana rekomendasi penyesuaian dosis umum untuk obat-obatan yang dimetabolisme di hati pada pasien dengan Child-Pugh Kelas C?",
        "options": [
            {
                "label": "A",
                "text": "Berikan dosis normal karena hati memiliki cadangan enzim tak terbatas",
                "correct": false
            },
            {
                "label": "B",
                "text": "Turunkan dosis awal minimal 50% atau hindari obat hepatotoksik/sedatif berat, serta lakukan pemantauan ketat respons klinis dan efek samping",
                "correct": true
            },
            {
                "label": "C",
                "text": "Tingkatkan dosis obat oral sebesar 200%",
                "correct": false
            },
            {
                "label": "D",
                "text": "Cukup berikan suplemen vitamin C",
                "correct": false
            }
        ],
        "explanation": "Pada Child-Pugh C, kapasitas metabolisme hepar, aliran darah hepar, dan sintesis albumin telah rusak masif. Penurunan dosis awal minimal 50% atau memilih obat dengan rute eliminasi alternatif (renal murni) adalah keharusan klinis."
    },
    {
        "id": "q25",
        "category": "Gangguan Hati",
        "question": "Pada pasien sirosis hepatis stadium lanjut, terjadi pembentukan anastomosis portosistemik (portosystemic shunting). Apa dampak langsung fenomena ini terhadap bioavailabilitas oral (F) obat High Extraction Ratio seperti Morfin atau Propranolol?",
        "options": [
            {
                "label": "A",
                "text": "Bioavailabilitas oral meningkat tajam (bisa mencapai 2 hingga 4 kali lipat) karena darah yang membawa obat memotong hepar, melenyapkan First-Pass Metabolism",
                "correct": true
            },
            {
                "label": "B",
                "text": "Bioavailabilitas oral turun menjadi 0% karena lambung tidak menyerap obat",
                "correct": false
            },
            {
                "label": "C",
                "text": "Tidak ada pengaruh terhadap bioavailabilitas",
                "correct": false
            },
            {
                "label": "D",
                "text": "Obat langsung terikat pada eritrosit di limpa",
                "correct": false
            }
        ],
        "explanation": "Obat High Extraction (E > 0.7) normalnya mengalami metabolisme lintas pertama (first-pass) hingga 70-90% di hepar. Ketika darah memotong jalur hepar via shunt, obat oral langsung lolos ke sirkulasi sistemik tanpa filter, melipatgandakan bioavailabilitas dan memicu overdosis pada dosis standar!"
    },
    {
        "id": "q26",
        "category": "Gangguan Hati",
        "question": "Mengapa metabolisme obat melalui jalur Glukuronidasi (Fase II Konjugasi) seperti Lorazepam dan Oksazepam relatif lebih terlindungi dibanding metabolisme Oksidasi CYP450 (Fase I) pada pasien sirosis?",
        "options": [
            {
                "label": "A",
                "text": "Enzim UDP-glukuronosiltransferase (UGT) memiliki cadangan fungsional ekstra-hepatik yang lebih besar dan secara anatomis lebih resisten terhadap kerusakan parenkim hepar dibanding sistem mikrosomal CYP450",
                "correct": true
            },
            {
                "label": "B",
                "text": "Glukuronidasi hanya terjadi di dalam lumen usus besar",
                "correct": false
            },
            {
                "label": "C",
                "text": "Glukuronidasi tidak memerlukan enzim biologis apapun",
                "correct": false
            },
            {
                "label": "D",
                "text": "Enzim CYP450 berpindah ke ginjal saat sirosis",
                "correct": false
            }
        ],
        "explanation": "Aktivitas sitokrom P450 (Fase I Oksidasi) anjlok drastis sejak awal sirosis. Sebaliknya, enzim UGT (Fase II) memiliki kapasitas enzimatik tinggi dan tersebar di berbagai jaringan sehingga kapasitas konjugasi glukuronida relatif terjaga."
    },
    {
        "id": "q27",
        "category": "Gangguan Hati",
        "question": "Seorang pasien sirosis Child-Pugh B mengeluh cemas dan sulit tidur. Dokter meminta saran apoteker untuk memilih benzodiazepin yang paling aman. Manakah pilihan yang paling tepat berdasarkan profil farmakokinetik klinis?",
        "options": [
            {
                "label": "A",
                "text": "Diazepam (Fase I Oksidasi, metabolit aktif desmetildiazepam t1/2 > 100 jam)",
                "correct": false
            },
            {
                "label": "B",
                "text": "Klordiazepoksid (Fase I Oksidasi dengan multiple active metabolites)",
                "correct": false
            },
            {
                "label": "C",
                "text": "Lorazepam (Fase II Glukuronidasi murni, tanpa metabolit aktif, t1/2 relatif stabil)",
                "correct": true
            },
            {
                "label": "D",
                "text": "Flurazepam (Long-acting lipofilik tinggi)",
                "correct": false
            }
        ],
        "explanation": "Lorazepam, Oksazepam, dan Temazepam (dikenal dengan singkatan LOT) dimetabolisme murni melalui konjugasi glukuronidasi tanpa metabolit aktif. Pada sirosis, eliminasinya jauh lebih aman dibandingkan Diazepam yang dapat memicu koma ensefalopati hepatik berkepanjangan."
    },
    {
        "id": "q28",
        "category": "Gangguan Hati",
        "question": "Berapakah batas dosis harian maksimal Parasetamol yang direkomendasikan pada pasien sirosis hati kompensata yang membutuhkan analgesik jangka pendek menurut konsensus hepatologi internasional?",
        "options": [
            {
                "label": "A",
                "text": "Maksimal 2.000 mg/hari (2 gram/hari) terbagi dalam beberapa dosis",
                "correct": true
            },
            {
                "label": "B",
                "text": "Maksimal 4.000 mg/hari (sama dengan pasien normal)",
                "correct": false
            },
            {
                "label": "C",
                "text": "Parasetamol kontraindikasi mutlak, dosis maksimal 0 mg",
                "correct": false
            },
            {
                "label": "D",
                "text": "Maksimal 6.000 mg/hari",
                "correct": false
            }
        ],
        "explanation": "Meskipun parasetamol dimetabolisme di hati, pada sirosis kompensata parasetamol dosis rendah (maks 2 g/hari) JAUH LEBIH AMAN dibanding NSAID (yang memicu perdarahan varises dan sindrom hepatorenal). Jalur glukuronidasi dan sulfasi parasetamol masih memadai pada dosis <= 2 g/hari."
    },
    {
        "id": "q29",
        "category": "Gangguan Hati",
        "question": "Mengapa penggunaan obat golongan NSAID (seperti Asam Mefenamat, Ibuprofen, Ketorolak) menjadi KONTRAINDIKASI RELATIF / SANGAT DIHINDARI pada pasien dengan sirosis hepatis dekompensata?",
        "options": [
            {
                "label": "A",
                "text": "Meningkatkan risiko perdarahan saluran cerna masif dari varises esofagus (akibat efek antiplatelet & ulserogenik) serta memicu vasokonstriksi renal yang menginduksi Sindrom Hepatorenal fatal",
                "correct": true
            },
            {
                "label": "B",
                "text": "NSAID merangsang pertumbuhan virus hepatitis",
                "correct": false
            },
            {
                "label": "C",
                "text": "NSAID mengikat bilirubin dan memicu ikterus mekanik",
                "correct": false
            },
            {
                "label": "D",
                "text": "NSAID menurunkan tekanan vena porta secara drastis",
                "correct": false
            }
        ],
        "explanation": "Pada sirosis dekompensata, pasien memiliki hipertensi porta, varises esofagus, dan koagulopati. NSAID menghambat agregasi trombosit, merusak mukosa lambung, dan mengikis prostaglandin ginjal sehingga memicu gagal ginjal akut tipe Sindrom Hepatorenal (HRS) dengan mortalitas tinggi."
    },
    {
        "id": "q30",
        "category": "Gangguan Hati",
        "question": "Diuretik manakah yang menjadi lini pertama pilihan dalam penatalaksanaan asites akibat sirosis hepatis berdasarkan patofisiologi hiperaldosteronisme sekunder?",
        "options": [
            {
                "label": "A",
                "text": "Spironolakton (Antagonis Aldosteron)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Hidroklorotiazid",
                "correct": false
            },
            {
                "label": "C",
                "text": "Manitol",
                "correct": false
            },
            {
                "label": "D",
                "text": "Asetazolamid",
                "correct": false
            }
        ],
        "explanation": "Asites sirosis dipicu oleh vasodilatasi splanknik dan aktivasi masif sistem RAAS (hiperaldosteronisme sekunder). Spironolakton bekerja spesifik memblokade aldosteron di tubulus distal. Sering dikombinasikan dengan Furosemid dengan rasio baku 100 mg Spironolakton : 40 mg Furosemid untuk menjaga normokalemia."
    },
    {
        "id": "q31",
        "category": "Gangguan Hati",
        "question": "Laktulosa digunakan dalam terapi Ensefalopati Hepatik. Bagaimana mekanisme kerja farmakoterapi Laktulosa dalam menurunkan kadar amonia darah?",
        "options": [
            {
                "label": "A",
                "text": "Laktulosa difermentasi oleh bakteri kolon menjadi asam laktat/asetat sehingga menurunkan pH kolon; suasana asam mengubah amonia (NH3 yang mudah diserap) menjadi ion amonium (NH4+ yang impermeable) yang terperangkap dan dibuang lewat feses",
                "correct": true
            },
            {
                "label": "B",
                "text": "Laktulosa memblokade reseptor GABA di korteks serebri",
                "correct": false
            },
            {
                "label": "C",
                "text": "Laktulosa merangsang regenerasi hepatosit secara langsung",
                "correct": false
            },
            {
                "label": "D",
                "text": "Laktulosa mengikat albumin serum dan meningkatkan ekskresi ginjal",
                "correct": false
            }
        ],
        "explanation": "Konsep 'Ammonia Trapping': Di usus besar, laktulosa diubah jadi asam organik -> pH lumen usus turun -> NH3 (lipofilik) terprotonasi menjadi NH4+ (hidrofilik bermuatan). Ion NH4+ tidak dapat menembus mukosa usus dan dikeluarkan saat defekasi (2-3 kali BAB lunak per hari)."
    },
    {
        "id": "q32",
        "category": "Gangguan Hati",
        "question": "Hepatitis virus kronis menurunkan klirens hepar (CL_H) suatu obat sebesar 50%. Diketahui fraksi renal fe = 0.40 dan fraksi hepar fh = 0.60 pada kondisi normal. Berapakah fraksi klirens total obat yang tersisa pada pasien tersebut?",
        "options": [
            {
                "label": "A",
                "text": "0.70 (Klirens total tersisa 70% dari normal)",
                "correct": true
            },
            {
                "label": "B",
                "text": "0.50 (Klirens total tersisa 50% dari normal)",
                "correct": false
            },
            {
                "label": "C",
                "text": "0.30 (Klirens total tersisa 30% dari normal)",
                "correct": false
            },
            {
                "label": "D",
                "text": "0.85 (Klirens total tersisa 85% dari normal)",
                "correct": false
            }
        ],
        "explanation": "CL_total = CL_R + CL_H. Normal = 0.40 + 0.60 = 1.0. Saat CL_H turun 50%, sisa CL_H = 0.60 * 0.50 = 0.30. Maka CL_total baru = 0.40 (renal) + 0.30 (hepar) = 0.70 (70% dari normal)."
    },
    {
        "id": "q33",
        "category": "Gangguan Hati",
        "question": "Mengapa penggunaan sedatif golongan Opioid (seperti Morfin, Fentanil, Petidin) sangat berbahaya dan dapat mempresipitasi Ensefalopati Hepatik pada pasien sirosis?",
        "options": [
            {
                "label": "A",
                "text": "Penurunan klirens hepar masif memperpanjang waktu paruh opioid, ditambah peningkatan permeabilitas sawar darah otak dan hipersensitivitas reseptor SSP pada sirosis",
                "correct": true
            },
            {
                "label": "B",
                "text": "Opioid merangsang pembelahan sel virus di parenkim hati",
                "correct": false
            },
            {
                "label": "C",
                "text": "Opioid memicu pembentukan batu empedu kolesterol akut",
                "correct": false
            },
            {
                "label": "D",
                "text": "Opioid menghancurkan sintesis eritropoietin di limpa",
                "correct": false
            }
        ],
        "explanation": "Pada sirosis, first-pass metabolism morfin hilang + klirens turun drastis -> kadar melonjak. Selain itu, konstipasi akibat opioid meningkatkan produksi dan absorpsi amonia usus, sementara efek depresan SSP memperburuk koma ensefalopati."
    },
    {
        "id": "q34",
        "category": "Gangguan Hati",
        "question": "Antibiotik non-absorbable Rifaximin sering ditambahkan pada terapi Ensefalopati Hepatik berulang. Apa keunggulan profil farmakokinetik Rifaximin?",
        "options": [
            {
                "label": "A",
                "text": "Bioavailabilitas sistemik sangat rendah (< 0.4%), bekerja lokal di lumen usus untuk mereduksi bakteri penghasil amonia tanpa membebani klirens hepar dan minim efek samping sistemik",
                "correct": true
            },
            {
                "label": "B",
                "text": "Rifaximin dimetabolisme 100% menjadi nutrisi bagi hepatosit",
                "correct": false
            },
            {
                "label": "C",
                "text": "Rifaximin meningkatkan sintesis faktor pembekuan darah",
                "correct": false
            },
            {
                "label": "D",
                "text": "Rifaximin menggantikan fungsi enzim glukuronidasi",
                "correct": false
            }
        ],
        "explanation": "Rifaximin adalah turunan rifamisin yang hampir tidak diserap ke sirkulasi (<0.4%). Obat ini membunuh flora usus gram negatif penghasil urease (penghasil amonia) secara lokal di usus tanpa menimbulkan toksisitas sistemik pada pasien sirosis."
    },
    {
        "id": "q35",
        "category": "Geriatri",
        "question": "Seorang wanita 85 tahun dengan BB 42 kg datang dengan hasil lab Serum Kreatinin 0.7 mg/dL. Dokter menganggap fungsi ginjal pasien sangat prima karena SCr di bawah 1.0. Mengapa anggapan tersebut keliru secara farmakokinetik klinis?",
        "options": [
            {
                "label": "A",
                "text": "Kadar SCr yang rendah merupakan akibat dari hilangnya massa otot (sarkopenia) pada lansia kurus, padahal hasil perhitungan Cockcroft-Gault menunjukkan CrCl sebenarnya hanya ~33 mL/min (CKD Tahap 3)",
                "correct": true
            },
            {
                "label": "B",
                "text": "SCr wanita lansia seharusnya bernilai negatif",
                "correct": false
            },
            {
                "label": "C",
                "text": "Ginjal lansia memproduksi kreatinin sendiri di tubulus",
                "correct": false
            },
            {
                "label": "D",
                "text": "Kreatinin serum hanya mencerminkan asupan karbohidrat",
                "correct": false
            }
        ],
        "explanation": "CrCl = [(140-85) * 42] / (72 * 0.7) * 0.85 = (55 * 42) / 50.4 * 0.85 = 45.83 * 0.85 = 38.9 mL/min. Angka SCr rendah terjadi bukan karena filtrasi ginjal hebat, melainkan karena produksi kreatinin dari massa otot sudah sangat sedikit (Pseudonormal SCr)."
    },
    {
        "id": "q36",
        "category": "Geriatri",
        "question": "Bagaimana perubahan komposisi tubuh fisiologis pada lansia (penurunan air tubuh total 10-15% dan peningkatan lemak tubuh 20-40%) memengaruhi parameter Volume Distribusi (Vd) obat?",
        "options": [
            {
                "label": "A",
                "text": "Vd obat hidrofilik (misal Digoksin, Litium) menyusut -> Cmax naik; Vd obat lipofilik (misal Diazepam) membesar -> t1/2 memanjang drastis",
                "correct": true
            },
            {
                "label": "B",
                "text": "Vd semua obat menjadi 0 L",
                "correct": false
            },
            {
                "label": "C",
                "text": "Vd obat lipofilik menyusut drastis sehingga obat cepat hilang",
                "correct": false
            },
            {
                "label": "D",
                "text": "Tidak ada perubahan distribusi pada lansia",
                "correct": false
            }
        ],
        "explanation": "Air tubuh turun -> volume sebaran obat larut air mengecil -> dosis standar memicu kadar puncak darah melonjak tinggi. Lemak tubuh naik -> obat larut lemak terakumulasi di jaringan adiposa -> eliminasi melambat dan waktu paruh molor berhari-hari."
    },
    {
        "id": "q37",
        "category": "Geriatri",
        "question": "Ny. M (76 th) mengonsumsi Amlodipin 10 mg untuk hipertensi, kemudian mengalami efek samping edema pergelangan kaki bilateral. Dokter yang tidak cermat mendiagnosis edema sebagai gagal jantung dan meresepkan Furosemid 40 mg. Furosemid memicu inkontinensia urin, sehingga dokter menambahkan Tolterodin (antikolinergik) yang akhirnya memicu retensi urin akut dan konfusi. Rangkaian peristiwa ini adalah contoh klasik dari:",
        "options": [
            {
                "label": "A",
                "text": "Kaskade Peresepan (Prescribing Cascade)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Toleransi Farmakokinetik",
                "correct": false
            },
            {
                "label": "C",
                "text": "Synergistic Agonism",
                "correct": false
            },
            {
                "label": "D",
                "text": "Idiosinkrasi Imunologi",
                "correct": false
            }
        ],
        "explanation": "Prescribing Cascade terjadi ketika efek samping suatu obat (Adverse Drug Reaction) disalahartikan sebagai kondisi medis baru, sehingga diresepkan obat kedua untuk mengobatinya, yang kemudian memicu efek samping baru dan obat ketiga."
    },
    {
        "id": "q38",
        "category": "Geriatri",
        "question": "Menurut kriteria AGS Beers Criteria 2023, mengapa obat antihistamin generasi pertama dengan efek antikolinergik kuat (seperti Difenhidramin, Klorfeniramin/CTM, Hidroksizin) harus DIHINDARI pada populasi geriatri?",
        "options": [
            {
                "label": "A",
                "text": "Risiko tinggi sedasi berat, gangguan kognitif akut/delirium, retensi urin, konstipasi parah, mulut kering, dan peningkatan risiko jatuh/fraktur",
                "correct": true
            },
            {
                "label": "B",
                "text": "Antihistamin generasi 1 memicu diabetes melitus tipe 1",
                "correct": false
            },
            {
                "label": "C",
                "text": "Antihistamin generasi 1 menurunkan penyerapan vitamin D di usus",
                "correct": false
            },
            {
                "label": "D",
                "text": "Antihistamin generasi 1 merusak email gigi secara langsung",
                "correct": false
            }
        ],
        "explanation": "Otak lansia mengalami penurunan transmisi kolinergik fisiologis dan peningkatan permeabilitas sawar darah otak. Obat antikolinergik memblokade reseptor muskarinik SSP memicu konfusi, delirium akut, ataksia, dan risiko jatuh yang membahayakan nyawa."
    },
    {
        "id": "q39",
        "category": "Geriatri",
        "question": "Pasien lansia 80 tahun mengalami retensi cairan akibat gagal jantung kongestif kambuh. Furosemid oral 40 mg gagal memicu diuresis. Apa penjelasan farmakokinetik yang mendasari kegagalan ini dan bagaimana solusinya?",
        "options": [
            {
                "label": "A",
                "text": "Laju absorpsi furosemid oral melambat akibat edema mukosa saluran cerna sehingga kadar di lumen tubulus tidak pernah menembus batas ambang (threshold); solusinya berikan Furosemid 40 mg secara Intravena (IV) atau naikkan dosis bolus oral",
                "correct": true
            },
            {
                "label": "B",
                "text": "Furosemid dihancurkan oleh enzim ludah lansia; solusinya kunyah tablet",
                "correct": false
            },
            {
                "label": "C",
                "text": "Furosemid berubah menjadi vasodilator murni",
                "correct": false
            },
            {
                "label": "D",
                "text": "Tubulus ginjal lansia kehilangan seluruh reseptor Na-K-2Cl",
                "correct": false
            }
        ],
        "explanation": "Diuretik loop memiliki kurva dosis-respons sigmoid dengan threshold effect. Furosemid harus mencapai kadar puncak tertentu di cairan tubulus untuk memblokade kotransporter NKCC2. Penyerapan oral yang lambat membuat kadar tubulus selalu berada di bawah threshold."
    },
    {
        "id": "q40",
        "category": "Geriatri",
        "question": "Mengapa penggunaan obat golongan Sulfonilurea masa kerja panjang seperti Glibenklamid (Glyburide) masuk dalam kategori Potentially Inappropriate Medications (PIMs) pada lansia menurut Beers Criteria?",
        "options": [
            {
                "label": "A",
                "text": "Waktu paruh metabolit aktifnya memanjang akibat penurunan klirens ginjal fisiologis lansia, memicu risiko Hipoglikemia Berat, Berkepanjangan, dan Fatal",
                "correct": true
            },
            {
                "label": "B",
                "text": "Glibenklamid merusak saraf optik lansia secara instan",
                "correct": false
            },
            {
                "label": "C",
                "text": "Glibenklamid menyebabkan katarak kongenital",
                "correct": false
            },
            {
                "label": "D",
                "text": "Glibenklamid memicu kenaikan asam urat masif",
                "correct": false
            }
        ],
        "explanation": "Glibenklamid dimetabolisme menjadi metabolit aktif yang diekskresi via ginjal. Penurunan GFR lansia membuat metabolit menumpuk, menyebabkan hipoglikemia yang bisa berlangsung >24-48 jam dan memicu koma atau stroke hipoglikemik. Pilihan lebih aman: Glipizid atau Gliklazid (short-acting tanpa metabolit aktif bermakna)."
    },
    {
        "id": "q41",
        "category": "Geriatri",
        "question": "Prinsip farmakoterapi emas dalam memulai pemberian obat baru pada pasien geriatri adalah Start Low, Go Slow, but Get to the Goal. Apa maksud dari prinsip ini?",
        "options": [
            {
                "label": "A",
                "text": "Mulai dengan dosis awal rendah (misal 25-50% dosis lazim dewasa), lakukan titrasi kenaikan dosis secara bertahap dan perlahan sambil memantau toleransi serta efek samping hingga target terapeutik tercapai",
                "correct": true
            },
            {
                "label": "B",
                "text": "Memberikan obat hanya satu kali dalam sebulan",
                "correct": false
            },
            {
                "label": "C",
                "text": "Menghindari pemberian obat apapun selamanya",
                "correct": false
            },
            {
                "label": "D",
                "text": "Menghentikan semua obat setelah 2 hari pemberian",
                "correct": false
            }
        ],
        "explanation": "Penurunan cadangan organ (homeostenosis), variabilitas farmakokinetik tinggi, dan peningkatan sensitivitas reseptor farmakodinamik mengharuskan klinisi memulai dari dosis subterapeutik awal lalu menaikkannya perlahan untuk mencegah intoksikasi mendadak."
    },
    {
        "id": "q42",
        "category": "Geriatri",
        "question": "Seorang kakek 79 tahun dengan hipertensi dan Benign Prostatic Hyperplasia (BPH) diresepkan Prazosin (alpha-1 blocker non-selektif). Mengapa risiko First-Dose Syncope dan Hipotensi Ortostatik sangat tinggi pada lansia ini?",
        "options": [
            {
                "label": "A",
                "text": "Penurunan refleks baroreseptor fisiologis pada lansia menyebabkan tubuh gagal mengompensasi vasodilatasi mendadak saat berdiri, memicu penurunan perfusi serebral dan pingsan/jatuh",
                "correct": true
            },
            {
                "label": "B",
                "text": "Prazosin memicu aritmia ventrikel instan",
                "correct": false
            },
            {
                "label": "C",
                "text": "Prazosin merusak otot jantung secara langsung",
                "correct": false
            },
            {
                "label": "D",
                "text": "Prazosin menghambat pelepasan insulin dari pankreas",
                "correct": false
            }
        ],
        "explanation": "Refleks barorefleks arteri pada lansia mengalami penurunan elastisitas dan sensitivitas. Blokade alfa-1 memicu vasodilatasi vena & arteri tanpa kompensasi takikardia vasokonstriksi yang memadai -> tekanan darah ortostatik anjlok saat pasien bangun dari tidur/duduk."
    },
    {
        "id": "q43",
        "category": "Geriatri",
        "question": "Mengapa penggunaan obat Antipsikotik (misal Haloperidol, Risperidon, Olanzapin) untuk mengatasi gejala perilaku demensia (BPSD) pada lansia memiliki FDA Black Box Warning?",
        "options": [
            {
                "label": "A",
                "text": "Meningkatkan risiko mortalitas total (terutama akibat kejadian kardiovaskular fatal seperti stroke, gagal jantung, dan pneumonia aspirasi)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Menyebabkan kebotakan permanen",
                "correct": false
            },
            {
                "label": "C",
                "text": "Memicu gagal ginjal polikistik",
                "correct": false
            },
            {
                "label": "D",
                "text": "Menghancurkan sel darah merah dalam 1 jam",
                "correct": false
            }
        ],
        "explanation": "FDA Black Box Warning: Penggunaan antipsikotik atipikal maupun tipikal pada pasien lansia dengan psikosis terkait demensia berkaitan dengan peningkatan risiko kematian 1.6 hingga 1.7 kali lipat akibat henti jantung mendadak, stroke iskemik, dan infeksi pneumonia."
    },
    {
        "id": "q44",
        "category": "Geriatri",
        "question": "Pasien geriatri 82 tahun rutin minum 9 jenis obat setiap hari (polifarmasi berat). Langkah awal apa yang paling tepat dilakukan apoteker dalam proses Medication Therapy Management (MTM)?",
        "options": [
            {
                "label": "A",
                "text": "Melakukan rekonsiliasi obat menyeluruh, skrining Beers Criteria / STOPP-START Criteria, dan mengidentifikasi potensi deprescribing (penghentian obat tanpa indikasi/duplikasi/berisiko tinggi)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Menambahkan 5 jenis suplemen herbal baru",
                "correct": false
            },
            {
                "label": "C",
                "text": "Menginstruksikan pasien meminum semua obat sekaligus dalam 1 gelas air",
                "correct": false
            },
            {
                "label": "D",
                "text": "Mengganti semua obat menjadi sediaan injeksi",
                "correct": false
            }
        ],
        "explanation": "Deprescribing terstruktur menggunakan kriteria eksplisit (Beers, STOPP/START) adalah standar emas untuk menyederhanakan regimen obat, mengurangi interaksi obat yang merugikan, dan meningkatkan kepatuhan pasien lansia."
    },
    {
        "id": "q45",
        "category": "Ibu Hamil",
        "question": "Perubahan farmakokinetik apa yang terjadi secara fisiologis pada trimester kedua dan ketiga kehamilan yang dapat menurunkan konsentrasi serum obat-obat hidrofilik di dalam darah ibu?",
        "options": [
            {
                "label": "A",
                "text": "Peningkatan volume plasma darah (ekspansi cairan tubuh hingga 40-50%) dan peningkatan Laju Filtrasi Glomerulus (GFR hingga 50%) yang mempercepat klirens ginjal",
                "correct": true
            },
            {
                "label": "B",
                "text": "Pengecilan ukuran rahim dan penurunan aliran darah plasenta",
                "correct": false
            },
            {
                "label": "C",
                "text": "Peningkatan albumin serum hingga 2 kali lipat",
                "correct": false
            },
            {
                "label": "D",
                "text": "Penghentian seluruh metabolisme hepar",
                "correct": false
            }
        ],
        "explanation": "Pada kehamilan lanjut: Volume plasma naik 40-50% (Vd obat membesar -> kadar obat menurun) + Curah jantung dan GFR naik 50% (klirens ginjal melonjak). Untuk beberapa obat seperti antibiotik beta-laktam atau antiepilepsi, dosis mungkin perlu dinaikkan atau interval diperpendek."
    },
    {
        "id": "q46",
        "category": "Ibu Hamil",
        "question": "Pada usia kehamilan berapakah janin berada pada Periode Emas Organogenesis yang paling rentan terhadap cacat lahir bawaan struktural / anatomis berat jika terpapar obat teratogenik?",
        "options": [
            {
                "label": "A",
                "text": "Minggu ke-3 hingga minggu ke-8 setelah pembuahan (Trimester I)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Minggu ke-1 hingga ke-2 (Pre-diferensiasi)",
                "correct": false
            },
            {
                "label": "C",
                "text": "Minggu ke-28 hingga ke-40 (Trimester III)",
                "correct": false
            },
            {
                "label": "D",
                "text": "Hanya 1 hari sebelum proses persalinan",
                "correct": false
            }
        ],
        "explanation": "Organogenesis berlangsung pada minggu ke-3 s/d ke-8 pascakonsepsi. Di fase ini organ-organ vital (jantung, tabung saraf, mata, telinga, tungkai) sedang berdiferensiasi aktif. Teratogen di fase ini memicu malformasi mayor (anencephaly, phocomelia, defek septum jantung)."
    },
    {
        "id": "q47",
        "category": "Ibu Hamil",
        "question": "Apa karakteristik fisikokimia obat yang MENYULITKAN obat tersebut menembus sawar plasenta sehingga relatif aman bagi janin?",
        "options": [
            {
                "label": "A",
                "text": "Berat Molekul sangat besar (> 1.000 Dalton), sangat polar / larut air tinggi, dan memiliki ikatan protein plasma yang sangat kuat",
                "correct": true
            },
            {
                "label": "B",
                "text": "Sangat lipofilik dan non-ionik",
                "correct": false
            },
            {
                "label": "C",
                "text": "Berat molekul < 200 Dalton",
                "correct": false
            },
            {
                "label": "D",
                "text": "Waktu paruh > 80 jam",
                "correct": false
            }
        ],
        "explanation": "Sawar plasenta adalah membran lipid bilayer. Molekul raksasa (BM > 1.000 Da seperti Heparin dan Insulin) tidak mampu menembus membran plasenta secara difusi pasif, sehingga tidak masuk ke sirkulasi janin."
    },
    {
        "id": "q48",
        "category": "Ibu Hamil",
        "question": "Mengapa sistem pelabelan obat kehamilan FDA format lama (Kategori A, B, C, D, X) resmi DIGANTIKAN oleh Pregnancy and Lactation Labeling Rule (PLLR) sejak tahun 2015?",
        "options": [
            {
                "label": "A",
                "text": "Kategori huruf A-B-C-D-X terlalu menyederhanakan risiko, sering disalahartikan sebagai skala linier bahaya (misal Kategori C dianggap lebih aman dari D padahal hanya ketiadaan data), dan tidak memberikan rincian naratif berbasis bukti klinis",
                "correct": true
            },
            {
                "label": "B",
                "text": "Karena huruf alfabet dalam bahasa Inggris sudah diganti",
                "correct": false
            },
            {
                "label": "C",
                "text": "Karena semua obat modern dijamin 100% aman untuk bumil",
                "correct": false
            },
            {
                "label": "D",
                "text": "Karena FDA dibubarkan pada tahun 2015",
                "correct": false
            }
        ],
        "explanation": "Sistem PLLR memuat narasi komprehensif 3 bagian: Pregnancy (termasuk risiko latar belakang & register kehamilan), Lactation (termasuk ekskresi ASI & efek pada bayi), serta Females and Males of Reproductive Potential (infertilitas & kontrasepsi)."
    },
    {
        "id": "q49",
        "category": "Ibu Hamil",
        "question": "Ny. T (29 th, G1P0A0, hamil 16 minggu) memiliki riwayat hipertensi esensial dan saat ini masih mengonsumsi Kaptopril (ACE-Inhibitor). Apa bahaya spesifik fetotoksisitas ACEI pada trimester ke-2 dan ke-3 kehamilan?",
        "options": [
            {
                "label": "A",
                "text": "Gangguan hemodinamik perfusi ginjal janin -> Anuria Janin -> Oligohidramnion (air ketuban habis) -> Hipoplasia Paru, Deformitas Kraniofasial, Hipokalvaria (tengkorak tidak menutup), dan Gagal Ginjal Neonatal",
                "correct": true
            },
            {
                "label": "B",
                "text": "Memicu katarak kongenital dan hidrosefalus",
                "correct": false
            },
            {
                "label": "C",
                "text": "Menyebabkan gigi janin berwarna cokelat",
                "correct": false
            },
            {
                "label": "D",
                "text": "Menyebabkan penutupan prematur duktus arteriosus",
                "correct": false
            }
        ],
        "explanation": "ACE-Inhibitor dan ARB mengganggu pembentukan ginjal dan perfusi urin janin. Karena cairan ketuban berasal dari urin janin, anuria memicu oligohidramnion berat dengan sekuel sindrom Potter (hipoplasia paru fatal, deformitas tulang tengkorak)."
    },
    {
        "id": "q50",
        "category": "Ibu Hamil",
        "question": "Manakah antihipertensi lini pertama yang direkomendasikan untuk menggantikan ACE-Inhibitor pada ibu hamil (Briggs: Compatible)?",
        "options": [
            {
                "label": "A",
                "text": "Metildopa oral, Labetalol oral, atau Nifedipin lepas lambat",
                "correct": true
            },
            {
                "label": "B",
                "text": "Kandesartan atau Valsartan",
                "correct": false
            },
            {
                "label": "C",
                "text": "Spironolakton dosis tinggi",
                "correct": false
            },
            {
                "label": "D",
                "text": "Natrium Nitroprusid",
                "correct": false
            }
        ],
        "explanation": "Metildopa (agonis alfa-2 sentral dengan riwayat keamanan jangka panjang puluhan tahun), Labetalol (alfa-beta blocker), dan Nifedipin extended-release (CCB) adalah pilihan lini pertama yang terbukti aman dan efektif mengontrol tekanan darah maternal tanpa mengorbankan perfusi uteroplasenta."
    },
    {
        "id": "q51",
        "category": "Ibu Hamil",
        "question": "Ibu hamil 10 minggu dengan riwayat Deep Vein Thrombosis (DVT) membutuhkan antikoagulan. Mengapa Low Molecular Weight Heparin (LMWH, misal Enoksaparin) jauh lebih aman dibandingkan Warfarin oral?",
        "options": [
            {
                "label": "A",
                "text": "LMWH memiliki Berat Molekul besar bermuatan negatif tinggi sehingga TIDAK MENEMBUS plasenta; sedangkan Warfarin mudah menembus plasenta dan memicu Warfarin Embryopathy (hipoplasia nasal, condrodysplasia punctata, perdarahan intrakranial janin)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Warfarin langsung menghentikan detak jantung ibu",
                "correct": false
            },
            {
                "label": "C",
                "text": "LMWH diserap di lambung janin",
                "correct": false
            },
            {
                "label": "D",
                "text": "LMWH mempercepat persalinan secara prematur",
                "correct": false
            }
        ],
        "explanation": "Warfarin adalah molekul kecil yang bebas menembus plasenta dan teratogenik kuat pada trimester 1 (Fetal Warfarin Syndrome) serta memicu perdarahan intrakranial fatal janin di trimester 2-3. Heparin dan LMWH tidak menembus sawar plasenta sama sekali."
    },
    {
        "id": "q52",
        "category": "Ibu Hamil",
        "question": "Ibu hamil dengan epilepsi terkontrol memerlukan terapi antikonvulsan. Manakah obat antiepilepsi yang memiliki risiko TERATOGENIK PALING TINGGI terhadap defek tabung saraf (Neural Tube Defect / Spina Bifida) dan gangguan neurodevelopmental anak?",
        "options": [
            {
                "label": "A",
                "text": "Asam Valproat (Natrium Valproat)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Levetirasetam",
                "correct": false
            },
            {
                "label": "C",
                "text": "Lamotrigin",
                "correct": false
            },
            {
                "label": "D",
                "text": "Gabapentin",
                "correct": false
            }
        ],
        "explanation": "Asam Valproat memiliki risiko malformasi mayor tertinggi (10-11% dibanding baseline 2-3%), terutama spina bifida (1-2%) dan penurunan skor IQ anak 8-10 poin. Bila memungkinkan, pasien usia subur dialihkan ke Lamotrigin atau Levetirasetam dengan suplementasi asam folat dosis tinggi (4-5 mg/hari)."
    },
    {
        "id": "q53",
        "category": "Ibu Hamil",
        "question": "Mengapa penggunaan NSAID (Ibuprofen, Ketorolak, Asam Mefenamat) pada usia kehamilan > 20 minggu (khususnya trimester 3) harus DIHINDARI?",
        "options": [
            {
                "label": "A",
                "text": "Dapat menyebabkan penutupan prematur Duktus Arteriosus Botalli janin (memicu hipertensi pulmonal persisten neonatal) dan disfungsi ginjal janin yang memicu oligohidramnion (FDA Drug Safety Communication)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Menyebabkan kehamilan ganda",
                "correct": false
            },
            {
                "label": "C",
                "text": "Memicu robekan plasenta secara mekanik",
                "correct": false
            },
            {
                "label": "D",
                "text": "Membunuh seluruh bakteri probiotik vagina",
                "correct": false
            }
        ],
        "explanation": "Prostaglandin maternal mempertahankan patensi duktus arteriosus janin in utero. Hambatan sintesis prostaglandin oleh NSAID di trimester 3 memicu konstriksi prematur duktus arteriosus dan kerusakan perfusi renal janin."
    },
    {
        "id": "q54",
        "category": "Ibu Menyusui",
        "question": "Seorang ibu menyusui (BB 60 kg) meminum obat analgesik dengan dosis 800 mg/hari. Pengukuran laboratorium menunjukkan konsentrasi obat dalam ASI adalah 2 mg/L. Asumsi asupan ASI bayi adalah 0.15 L/kg/hari (150 mL/kg/hari). Berapakah nilai Relative Infant Dose (RID) obat tersebut?",
        "options": [
            {
                "label": "A",
                "text": "2.25% (Aman, RID < 10%)",
                "correct": true
            },
            {
                "label": "B",
                "text": "15.0% (Bahaya, RID > 10%)",
                "correct": false
            },
            {
                "label": "C",
                "text": "0.75% (Aman)",
                "correct": false
            },
            {
                "label": "D",
                "text": "8.50% (Aman)",
                "correct": false
            }
        ],
        "explanation": "Dosis Bayi = 2 mg/L * 0.15 L/kg/hari = 0.30 mg/kg/hari. Dosis Ibu = 800 mg / 60 kg = 13.33 mg/kg/hari. RID = (0.30 / 13.33) * 100% = 2.25%. Karena RID jauh di bawah ambang batas 10%, obat ini tergolong kompatibel dan aman untuk ibu menyusui."
    },
    {
        "id": "q55",
        "category": "Ibu Menyusui",
        "question": "Prof. Thomas Hale mengklasifikasikan keamanan obat pada laktasi menjadi 5 kategori (L1 hingga L5). Apa arti kategori L2 (Safer)?",
        "options": [
            {
                "label": "A",
                "text": "Obat telah diteliti pada sejumlah terbatas ibu menyusui tanpa bukti peningkatan efek merugikan pada bayi, dan/atau bukti risiko yang merugikan sangat kecil kemungkinannya terjadi",
                "correct": true
            },
            {
                "label": "B",
                "text": "Obat kontraindikasi mutlak bagi ibu menyusui",
                "correct": false
            },
            {
                "label": "C",
                "text": "Obat tidak boleh diminum kecuali bayi diopname",
                "correct": false
            },
            {
                "label": "D",
                "text": "Obat menyebabkan produksi ASI berhenti total",
                "correct": false
            }
        ],
        "explanation": "Kategori Hale: L1 (Paling Aman / Safest), L2 (Aman / Safer, misal Amoksisilin, Sertralin, Loratadin), L3 (Cukup Aman / Moderately Safe), L4 (Berpotensi Bahaya / Possibly Hazardous), L5 (Kontraindikasi / Hazardous, misal Kemoterapi sitotoksik, Radiofarmaka)."
    },
    {
        "id": "q56",
        "category": "Ibu Menyusui",
        "question": "Mengapa penggunaan obat batuk/analgesik KODEIN pada ibu menyusui memiliki FDA Black Box Warning dan telah dilaporkan menyebabkan kasus kematian neonatal akibat depresi pernapasan fatal?",
        "options": [
            {
                "label": "A",
                "text": "Kodein adalah prodrug yang diubah menjadi Morfin oleh enzim CYP2D6; pada ibu dengan polimorfisme CYP2D6 Ultra-Rapid Metabolizer, konversi menjadi morfin terjadi sangat masif sehingga kadar morfin dalam ASI melonjak ke level toksik mematikan bagi bayi",
                "correct": true
            },
            {
                "label": "B",
                "text": "Kodein langsung merusak kelenjar mamae dan membekukan ASI",
                "correct": false
            },
            {
                "label": "C",
                "text": "Kodein membuat bayi menolak rasa manis ASI",
                "correct": false
            },
            {
                "label": "D",
                "text": "Kodein memicu reaksi alergi anafilaksis pada puting susu",
                "correct": false
            }
        ],
        "explanation": "Sekitar 1-10% populasi adalah CYP2D6 Ultra-Rapid Metabolizers (UM). Ibu dengan fenotipe ini memproduksi morfin dalam konsentrasi sangat tinggi di sirkulasi darah dan ASI. Sistem saraf pusat bayi yang imatur sangat rentan terhadap depresi napas opioid fatal."
    },
    {
        "id": "q57",
        "category": "Ibu Menyusui",
        "question": "Manakah analgesik-antipiretik lini pertama pilihan yang paling aman (Kategori Hale L1) untuk ibu menyusui pascapersalinan?",
        "options": [
            {
                "label": "A",
                "text": "Ibuprofen dan Parasetamol (keduanya memiliki RID sangat rendah < 1% dan riwayat keamanan laktasi sangat luas)",
                "correct": true
            },
            {
                "label": "B",
                "text": "Aspirin dosis tinggi (risiko Reye Syndrome)",
                "correct": false
            },
            {
                "label": "C",
                "text": "Tramadol oral (risiko depresi napas bayi)",
                "correct": false
            },
            {
                "label": "D",
                "text": "Ketorolak tablet 4 kali sehari",
                "correct": false
            }
        ],
        "explanation": "Ibuprofen (ikatan protein 99%, t1/2 singkat 2 jam, RID <0.5%) dan Parasetamol (RID <1-2%) adalah dua analgesik lini pertama pilihan paling aman yang masuk dalam kategori Hale L1 (Safest)."
    },
    {
        "id": "q58",
        "category": "Ibu Menyusui",
        "question": "Ibu menyusui 28 tahun mengalami Postpartum Depression. Dokter ingin meresepkan antidepresan golongan SSRI. Mengapa Sertralin jauh lebih disukai dibandingkan Fluoksetin selama masa menyusui?",
        "options": [
            {
                "label": "A",
                "text": "Sertralin memiliki ikatan protein plasma sangat tinggi (98%) dan RID rendah (0.4-2.2%), sedangkan Fluoksetin memiliki metabolit aktif (Norfluoksetin) dengan waktu paruh sangat panjang (1-2 minggu) yang dapat berakumulasi di tubuh bayi",
                "correct": true
            },
            {
                "label": "B",
                "text": "Fluoksetin menyebabkan ASI berbusa",
                "correct": false
            },
            {
                "label": "C",
                "text": "Sertralin meningkatkan produksi hormon prolaktin 100 kali lipat",
                "correct": false
            },
            {
                "label": "D",
                "text": "Fluoksetin hanya bekerja pada pria",
                "correct": false
            }
        ],
        "explanation": "Sertralin dan Paroksetin adalah SSRI pilihan utama menyusui karena kadar dalam plasma bayi hampir tidak terdeteksi (RID sangat rendah). Sebaliknya, Fluoksetin dan metabolitnya norfluoksetin memiliki t1/2 super panjang yang memicu kolik, sedasi, dan penurunan berat badan bayi."
    },
    {
        "id": "q59",
        "category": "Ibu Menyusui",
        "question": "Ibu menyusui mengalami mastitis bakterial akut dan diresepkan Kloksasilin oral 500 mg 4x sehari. Apa edukasi klinis yang paling tepat disampaikan apoteker mengenai kelangsungan pemberian ASI?",
        "options": [
            {
                "label": "A",
                "text": "Ibu sangat dianjurkan untuk TETAP MENYUSUI secara rutin dari kedua payudara (atau memompa ASI), karena pengosongan payudara adalah kunci penyembuhan mastitis dan Kloksasilin aman bagi bayi (Hale L1/L2)",
                "correct": true
            },
            {
                "label": "B",
                "text": "ASI harus segera dibuang dan bayi beralih permanen ke susu kedelai",
                "correct": false
            },
            {
                "label": "C",
                "text": "Payudara yang meradang harus diikat kencang tanpa menyusui",
                "correct": false
            },
            {
                "label": "D",
                "text": "Menyusui hanya boleh dilakukan setelah terapi antibiotik selesai 14 hari",
                "correct": false
            }
        ],
        "explanation": "Mastitis terjadi akibat stasis ASI dan infeksi sekunder Staphylococcus aureus. Mengosongkan payudara secara tuntas melalui proses menyusui yang sering adalah terapi utama. Antibiotik beta-laktam anti-stafilokokus (Kloksasilin/Dikloksasilin/Sefaleksin) sangat aman dalam laktasi."
    },
    {
        "id": "q60",
        "category": "Ibu Menyusui",
        "question": "Kapan strategi Waktu Minum Obat Tepat Setelah Menyusui (Timing of Dose Administration) paling efektif diterapkan oleh ibu menyusui?",
        "options": [
            {
                "label": "A",
                "text": "Untuk obat-obatan dengan waktu paruh pendek (t1/2 singkat), sehingga konsentrasi obat dalam darah ibu telah melewati kadar puncak (Cmax) dan turun ke kadar terendah sebelum jadwal sesi menyusui berikutnya",
                "correct": true
            },
            {
                "label": "B",
                "text": "Hanya untuk sediaan salep kulit",
                "correct": false
            },
            {
                "label": "C",
                "text": "Untuk semua obat extended-release ber-t1/2 48 jam",
                "correct": false
            },
            {
                "label": "D",
                "text": "Agar obat langsung mengalir ke puting susu dalam 1 menit",
                "correct": false
            }
        ],
        "explanation": "Meminum obat segera setelah selesai menyusui atau sebelum periode tidur panjang bayi memaksimalkan jeda waktu eliminasi sebelum jadwal menyusui berikutnya. Kadar obat di ASI mengikuti kadar plasma bebas ibu, sehingga saat menyusu kembali kadar obat sudah berada di titik terendah."
    }
],

  // 5. Cheat Sheet & Rangkuman Cepat (Slide 43 & 45)
  cheatSheet: [
    {
      population: "Gangguan Ginjal",
      primaryChange: "Klirens renal ($CL_R$) turun, waktu paruh ($t_{1/2}$) memanjang, fraksi bebas obat asam ($f_u$) naik.",
      tool: "Kalkulator Cockcroft-Gault (CrCl mL/min)",
      actionPrinciple: "Hitung CrCl -> Gunakan Dettli Factor $Q = 1 - f_e(1-KF)$ -> Turunkan dosis atau panjangkan interval. Hindari Metformin pada CrCl < 30.",
      keyRef: "The Renal Drug Handbook 5th ed & DiPiro Ch. 69"
    },
    {
      population: "Gangguan Hati & Sirosis",
      primaryChange: "Shunt portosistemik ($F$ oral naik), CYP Fase 1 rusak parah, Glukuronidasi Fase 2 relatif bertahan, Albumin turun.",
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
      primaryChange: "Obat masuk ke ASI via difusi pasif fraksi bebas ($f_u$).",
      tool: "Kalkulator Relative Infant Dose (RID) & Buku Medications & Mothers' Milk (Prof. Thomas Hale)",
      actionPrinciple: "Ambang batas RID < 10% aman. Pilih obat ber-BM besar, $t_{1/2}$ singkat, dan protein binding tinggi. HINDARI Kodein (risiko CYP2D6 UM) & Kemoterapi.",
      keyRef: "Hale's Medications & Mothers' Milk 2023"
    }
  ]
};
