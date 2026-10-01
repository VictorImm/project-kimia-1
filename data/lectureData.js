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
      id: "q1",
      question: "Obat A memiliki fraksi ekskresi ginjal utuh (fe) = 0.9. Pasien memiliki CrCl 30 mL/menit (CrCl normal diasumsikan 100 mL/menit). Berapakah faktor penyesuaian dosis Q (Dettli Formula)?",
      options: [
        { label: "A", text: "Q = 0.90", correct: false },
        { label: "B", text: "Q = 0.37 (Dosis diturunkan menjadi 37% dari normal)", correct: true },
        { label: "C", text: "Q = 0.63", correct: false },
        { label: "D", text: "Q = 0.10", correct: false }
      ],
      explanation: "KF = 30 / 100 = 0.30. Rumus Q = 1 - fe * (1 - KF) = 1 - 0.9 * (1 - 0.3) = 1 - 0.9 * 0.7 = 1 - 0.63 = 0.37! Luar biasa! 🎉"
    },
    {
      id: "q2",
      question: "Pasien sirosis hati Child-Pugh B mengalami insomnia berat. Mengapa Lorazepam jauh lebih disukai dibandingkan Diazepam?",
      options: [
        { label: "A", text: "Diazepam hanya diekskresi lewat ginjal", correct: false },
        { label: "B", text: "Lorazepam dimetabolisme via Glukuronidasi (Fase 2) tanpa metabolit aktif, sedangkan Diazepam via Oksidasi CYP (Fase 1) dengan metabolit aktif ber-t½ sangat panjang", correct: true },
        { label: "C", text: "Lorazepam meningkatkan sintesis albumin serum", correct: false },
        { label: "D", text: "Diazepam tidak bisa menembus sawar darah otak", correct: false }
      ],
      explanation: "Tepat sekali! Pada sirosis, enzim CYP (Fase 1) rusak berat sehingga Diazepam menumpuk dan memicu koma hepatikum. Glukuronidasi (Fase 2) Lorazepam relatif utuh!"
    },
    {
      id: "q3",
      question: "Seorang wanita lansia 85 tahun, BB 40 kg memiliki hasil laboratorium SCr 0.9 mg/dL. Berapakah perkiraan CrCl dan bagaimana status fungsi ginjalnya?",
      options: [
        { label: "A", text: "CrCl ~90 mL/min, fungsi ginjal normal sempurna", correct: false },
        { label: "B", text: "CrCl ~29.3 mL/min, mengalami penurunan fungsi ginjal berat (Tahap 4)", correct: true },
        { label: "C", text: "CrCl ~65 mL/min, gangguan ginjal ringan", correct: false },
        { label: "D", text: "CrCl tidak dapat dihitung tanpa urin 24 jam", correct: false }
      ],
      explanation: "CrCl = [(140 - 85) * 40 / (72 * 0.9)] * 0.85 = (55 * 40 / 64.8) * 0.85 = 33.95 * 0.85 = 28.8 - 29.3 mL/min! SCr 0.9 tampak normal hanya karena atrofi massa otot!"
    },
    {
      id: "q4",
      question: "Kapan periode kehamilan yang paling rentan terhadap terjadinya malformasi struktural/anatomis janin (teratogenesis berat)?",
      options: [
        { label: "A", text: "Minggu 1 - 2 setelah pembuahan (Periode All-or-None)", correct: false },
        { label: "B", text: "Minggu 3 - 8 (Periode Embriogenesis / Organogenesis)", correct: true },
        { label: "C", text: "Minggu 28 - 40 (Trimester 3 akhir)", correct: false },
        { label: "D", text: "Saat proses persalinan berlangsung", correct: false }
      ],
      explanation: "Organogenesis terjadi pada minggu 3 hingga 8 pascakonsepsi saat semua organ utama dibentuk. Ini adalah jendela paling rentan terhadap cacat lahir struktural!"
    },
    {
      id: "q5",
      question: "Ibu menyusui mengonsumsi obat dengan Relative Infant Dose (RID) sebesar 1.5%. Apakah obat ini aman bagi bayi?",
      options: [
        { label: "A", text: "Sangat berbahaya, bayi harus segera diberi susu formula", correct: false },
        { label: "B", text: "Aman, karena nilai RID < 10% (standar baku emas keamanan laktasi)", correct: true },
        { label: "C", text: "Hanya aman jika ibu memompa ASI dan membuangnya selama 24 jam", correct: false },
        { label: "D", text: "Obat hanya boleh diminum jika bayi berusia di atas 2 tahun", correct: false }
      ],
      explanation: "Nilai baku emas RID adalah < 10%. Dengan RID 1.5%, jumlah obat yang sampai ke sirkulasi bayi sangat minimal dan umumnya tidak menimbulkan efek farmakologis merugikan!"
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
