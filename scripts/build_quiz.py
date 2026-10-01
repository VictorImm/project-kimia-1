import json

questions = [
    # --- KELOMPOK 1: FUNDAMENTAL PK/PD & PERHITUNGAN DOSIS (1-10) ---
    {
        "id": "q1",
        "category": "Kalkulasi PK",
        "question": "Seorang pasien pria (60 th, 70 kg) dengan pneumonia berat menerima antibiotik X yang memiliki fraksi ekskresi ginjal utuh fe = 0.80. Klirens kreatinin pasien terukur 25 mL/menit (CrCl normal 100 mL/menit). Jika dosis lazim obat X adalah 500 mg tiap 8 jam, berapakah dosis baru yang direkomendasikan bila menggunakan strategi penyesuaian penurunan dosis (Dose Reduction) menurut formula Dettli?",
        "options": [
            {"label": "A", "text": "200 mg tiap 8 jam (Q = 0.40)", "correct": True},
            {"label": "B", "text": "125 mg tiap 8 jam (Q = 0.25)", "correct": False},
            {"label": "C", "text": "350 mg tiap 8 jam (Q = 0.70)", "correct": False},
            {"label": "D", "text": "500 mg tiap 20 jam (Q = 0.40)", "correct": False}
        ],
        "explanation": "KF = 25 / 100 = 0.25. Faktor Dettli: Q = 1 - fe * (1 - KF) = 1 - 0.80 * (1 - 0.25) = 1 - 0.80 * 0.75 = 1 - 0.60 = 0.40. Dosis baru = Dosis normal * Q = 500 mg * 0.40 = 200 mg tiap 8 jam (interval tetap)."
    },
    {
        "id": "q2",
        "category": "Kalkulasi PK",
        "question": "Pada pasien yang sama (Q = 0.40), dokter ingin mempertahankan kadar puncak (Cmax) yang tinggi karena obat X memiliki sifat bakterisidal concentration-dependent. Berapakah interval pemberian baru yang tepat bila dosis tetap dipertahankan 500 mg?",
        "options": [
            {"label": "A", "text": "500 mg tiap 12 jam", "correct": False},
            {"label": "B", "text": "500 mg tiap 16 jam", "correct": False},
            {"label": "C", "text": "500 mg tiap 20 jam", "correct": True},
            {"label": "D", "text": "500 mg tiap 24 jam", "correct": False}
        ],
        "explanation": "Untuk strategi interval extension: tau_pasien = tau_normal / Q = 8 jam / 0.40 = 20 jam. Jadi regimen barunya adalah 500 mg tiap 20 jam."
    },
    {
        "id": "q3",
        "category": "Fundamental PK",
        "question": "Obat Aminoglikosida (Gentamisin) memiliki eliminasi utama via filtrasi glomerulus ginjal (fe = 0.98) dan bersifat bakterisidal konsentrasi-dependen dengan Post-Antibiotic Effect (PAE) yang panjang. Mengapa strategi pemberian sekali sehari dosis tinggi (Extended-Interval Dosing) lebih disukai pada gangguan ginjal ringan-sedang dibanding dosis terbagi sering?",
        "options": [
            {"label": "A", "text": "Mencapai rasio Cmax/MIC > 8-10 untuk efikasi maksimal sekaligus memberikan periode kadar lembah (Cmin) yang rendah untuk meminimalisir akumulasi di sel tubulus ginjal", "correct": True},
            {"label": "B", "text": "Meningkatkan ikatan protein plasma sehingga obat tidak dapat difiltrasi ke urin", "correct": False},
            {"label": "C", "text": "Mempercepat klirens metabolisme lintas pertama di hepar", "correct": False},
            {"label": "D", "text": "Menghilangkan kebutuhan Therapeutic Drug Monitoring (TDM)", "correct": False}
        ],
        "explanation": "Uptake aminoglikosida ke dalam sel tubulus proksimal ginjal bersifat saturable. Dosis tinggi sekali sehari memberikan Cmax tinggi untuk bakterisidal maksimal dan menyisakan waktu lebih lama dengan kadar lembah rendah (trough < 1 mcg/mL) sehingga menurunkan risiko nefrotoksisitas & ototoksisitas."
    },
    {
        "id": "q4",
        "category": "Fundamental PK",
        "question": "Suatu obat memiliki Volume Distribusi (Vd) normal sebesar 40 Liter dan Klirens (CL) normal sebesar 4 L/jam (t1/2 = 6.93 jam). Pada pasien gagal ginjal kronis stadium 4, klirens total obat turun menjadi 1 L/jam tanpa perubahan Vd. Berapakah waktu paruh eliminasi (t1/2) obat yang baru pada pasien tersebut?",
        "options": [
            {"label": "A", "text": "13.86 jam", "correct": False},
            {"label": "B", "text": "27.72 jam", "correct": True},
            {"label": "C", "text": "3.46 jam", "correct": False},
            {"label": "D", "text": "55.44 jam", "correct": False}
        ],
        "explanation": "t1/2 = (0.693 * Vd) / CL = (0.693 * 40) / 1 = 27.72 jam (waktu paruh meningkat 4 kali lipat sebanding dengan penurunan klirens 4 kali lipat!)."
    },
    {
        "id": "q5",
        "category": "Fundamental PK",
        "question": "Berapa lamakah waktu yang dibutuhkan pasien gagal ginjal pada soal sebelumnya (t1/2 = 27.72 jam) untuk mencapai kondisi tunak (Steady-State / Css) jika diberikan infus kontinu tanpa loading dose?",
        "options": [
            {"label": "A", "text": "Sekitar 24 jam (1 hari)", "correct": False},
            {"label": "B", "text": "Sekitar 48 jam (2 hari)", "correct": False},
            {"label": "C", "text": "Sekitar 110 - 138 jam (4 s/d 5 kali waktu paruh)", "correct": True},
            {"label": "D", "text": "Langsung tercapai setelah dosis pertama diberikan", "correct": False}
        ],
        "explanation": "Kondisi steady state (Css) secara matematis selalu membutuhkan 4 sampai 5 kali waktu paruh (t1/2). Dengan t1/2 = 27.72 jam, maka 4-5 x t1/2 = 110.8 s/d 138.6 jam (~4.6 - 5.7 hari). Oleh karena itu, loading dose sangat krusial pada kasus darurat!"
    },
    {
        "id": "q6",
        "category": "Fundamental PK",
        "question": "Mengapa Loading Dose (Dosis Muatan / D_L) suatu obat pada pasien gagal ginjal pada umumnya TIDAK PERLU diturunkan, kecuali jika Volume Distribusi (Vd) obat tersebut berubah?",
        "options": [
            {"label": "A", "text": "Karena Loading Dose hanya ditentukan oleh target konsentrasi plasma dan Volume Distribusi (DL = Ctarget * Vd), bukan oleh Klirens atau Laju Eliminasi", "correct": True},
            {"label": "B", "text": "Karena Loading Dose langsung diekskresikan melalui keringat", "correct": False},
            {"label": "C", "text": "Karena hepar secara otomatis mengambil alih fungsi ginjal saat dosis pertama", "correct": False},
            {"label": "D", "text": "Karena obat tidak akan terdistribusi ke organ lain pada pemberian pertama", "correct": False}
        ],
        "explanation": "Rumus DL = (Ctarget * Vd) / F. Besarnya dosis muatan semata-mata bertujuan mengisi ruang distribusi (Vd) untuk mencapai kadar target secepatnya. Yang disesuaikan pada gagal ginjal adalah MAINTENANCE DOSE (Dosis Pemeliharaan) karena klirensnya yang turun."
    },
    {
        "id": "q7",
        "category": "Fundamental PK",
        "question": "Fenitoin adalah obat antiepilepsi asam lemah dengan ikatan protein plasma normal 90% (fraksi bebas fu = 0.10). Pada pasien uremia dengan albumin serum turun menjadi 2.5 g/dL, kadar fenitoin total terukur 8 mcg/mL (rentang normal total 10-20 mcg/mL). Mengapa pasien tersebut justru menunjukkan gejala toksisitas (nistagmus, ataksia)?",
        "options": [
            {"label": "A", "text": "Uremia dan hipoalbuminemia menggeser ikatan fenitoin sehingga fraksi bebas (fu) melonjak menjadi 20-30%; konsentrasi obat bebas aktif sebenarnya sudah mencapai >2 mcg/mL (kadar bebas toksik)", "correct": True},
            {"label": "B", "text": "Fenitoin mengalami ekskresi terbalik di tubulus distal", "correct": False},
            {"label": "C", "text": "Uremia meningkatkan klirens intrinsik hepar terhadap fenitoin", "correct": False},
            {"label": "D", "text": "Kadar metabolit inaktif berubah menjadi racun di lambung", "correct": False}
        ],
        "explanation": "Pada hipoalbuminemia & uremia, toksin uremik berkompetisi pada binding site albumin + albumin turun. Rumus Sheiner-Tozer memprediksi kadar terkoreksi: C_koreksi = C_ukur / (0.2 * Albumin + 0.1). Kadar obat bebas (fu * C) yang merupakan fraksi aktif secara farmakologis melonjak tinggi walau kadar total tampak rendah!"
    },
    {
        "id": "q8",
        "category": "Fundamental PK",
        "question": "Obat antidiabetes manakah di bawah ini yang eliminasi totalnya paling TIDAK dipengaruhi oleh penurunan fungsi ginjal?",
        "options": [
            {"label": "A", "text": "Metformin (fe = 0.95)", "correct": False},
            {"label": "B", "text": "Atenolol (fe = 0.85)", "correct": False},
            {"label": "C", "text": "Linagliptin (fe < 0.05, ekskresi mayoritas enterohepatik/feses)", "correct": True},
            {"label": "D", "text": "Flukonazol (fe = 0.80)", "correct": False}
        ],
        "explanation": "Linagliptin dieliminasi terutama lewat empedu dan feses dalam bentuk utuh (>80%), fraksi ekskresi ginjalnya (fe) kurang dari 5%, sehingga tidak memerlukan penyesuaian dosis pada derajat gagal ginjal berapapun."
    },
    {
        "id": "q9",
        "category": "Fundamental PK",
        "question": "Jika suatu obat bersifat Low Extraction Ratio (E < 0.3) di hepar dan terikat kuat dengan albumin, apa parameter utama yang membatasi klirens heparnya?",
        "options": [
            {"label": "A", "text": "Laju aliran darah hepar (Hepatic Blood Flow)", "correct": False},
            {"label": "B", "text": "Aktivitas enzim intrinsik hepatosit (CLint) dan fraksi obat bebas (fu)", "correct": True},
            {"label": "C", "text": "pH cairan empedu", "correct": False},
            {"label": "D", "text": "Kecepatan motilitas usus halus", "correct": False}
        ],
        "explanation": "Untuk obat ekstraksi rendah (E < 0.3), rumus klirens hepar adalah CL_H = fu * CL_int. Klirens tidak dipengaruhi oleh aliran darah hepar, melainkan sangat bergantung pada kapasitas enzim intrinsik dan fraksi obat yang tidak terikat protein (free fraction)."
    },
    {
        "id": "q10",
        "category": "Fundamental PK",
        "question": "Apa dampak farmakokinetik utama dari penurunan keasaman lambung (pH naik) akibat penggunaan rutin antasida atau PPI pada lansia terhadap obat antijamur azol seperti Ketokonazol atau Itrakonazol oral?",
        "options": [
            {"label": "A", "text": "Disolusi dan absorpsi obat menurun drastis karena antijamur azol membutuhkan suasana asam lambung untuk ionisasi dan kelarutan", "correct": True},
            {"label": "B", "text": "Metabolisme lintas pertama di hepar meningkat tajam", "correct": False},
            {"label": "C", "text": "Ekskresi ginjal meningkat melalui sekresi tubulus aktif", "correct": False},
            {"label": "D", "text": "Volume distribusi obat meningkat 10 kali lipat", "correct": False}
        ],
        "explanation": "Ketokonazol dan Itrakonazol tablet memerlukan pH asam lambung untuk terdisolusi. Peningkatan pH lambung akibat PPI/antasida atau aklorhidria fisiologis lansia menyebabkan bioavailabilitas obat-obat ini anjlok hingga gagal terapi."
    },

    # --- KELOMPOK 2: GANGGUAN GINJAL & DIALISIS (11-22) ---
    {
        "id": "q11",
        "category": "Gangguan Ginjal",
        "question": "Tn. R (72 th, BB 55 kg) memiliki hasil laboratorium SCr 1.5 mg/dL. Menggunakan formula Cockcroft-Gault, berapakah estimasi Klirens Kreatinin (CrCl) Tn. R dan apa klasifikasi stadium CKD-nya?",
        "options": [
            {"label": "A", "text": "CrCl = 34.6 mL/min (CKD Tahap 3 / Sedang)", "correct": True},
            {"label": "B", "text": "CrCl = 52.1 mL/min (CKD Tahap 2 / Ringan)", "correct": False},
            {"label": "C", "text": "CrCl = 21.3 mL/min (CKD Tahap 4 / Berat)", "correct": False},
            {"label": "D", "text": "CrCl = 68.5 mL/min (CKD Tahap 2 / Ringan)", "correct": False}
        ],
        "explanation": "CrCl = [(140 - 72) * 55] / (72 * 1.5) = (68 * 55) / 108 = 3740 / 108 = 34.63 mL/menit. Rentang 30-59 mL/min termasuk CKD Stadium 3 (Gangguan Ginjal Sedang)."
    },
    {
        "id": "q12",
        "category": "Gangguan Ginjal",
        "question": "Ny. W (68 th, BB 48 kg) memiliki kadar SCr 2.0 mg/dL. Berapakah nilai CrCl setelah dikoreksi faktor jenis kelamin wanita?",
        "options": [
            {"label": "A", "text": "24.0 mL/min", "correct": False},
            {"label": "B", "text": "20.4 mL/min", "correct": True},
            {"label": "C", "text": "31.2 mL/min", "correct": False},
            {"label": "D", "text": "16.8 mL/min", "correct": False}
        ],
        "explanation": "CrCl pria = [(140 - 68) * 48] / (72 * 2.0) = (72 * 48) / 144 = 24.0 mL/min. Koreksi wanita = 24.0 * 0.85 = 20.4 mL/min (CKD Stadium 4 / Berat)."
    },
    {
        "id": "q13",
        "category": "Gangguan Ginjal",
        "question": "Pasien DM Tipe 2 dengan eGFR 24 mL/menit/1.73m2 datang ke apotek membawa resep Metformin 500 mg 2x sehari. Sebagai apoteker klinis, apa rekomendasi yang paling tepat sesuai pedoman KDIGO dan ADA?",
        "options": [
            {"label": "A", "text": "Lanjutkan Metformin dengan dosis dinaikkan menjadi 850 mg", "correct": False},
            {"label": "B", "text": "Hentikan Metformin karena kontraindikasi mutlak pada eGFR < 30 mL/min/1.73m2 akibat risiko Asidosis Laktat; rekomendasikan beralih ke Linagliptin atau Insulin", "correct": True},
            {"label": "C", "text": "Turunkan Metformin menjadi 250 mg seminggu sekali tanpa monitoring", "correct": False},
            {"label": "D", "text": "Ganti Metformin dengan Glibenklamid dosis maksimal", "correct": False}
        ],
        "explanation": "Pedoman internasional (KDIGO & ADA) menetapkan batas eGFR < 30 mL/min/1.73m2 sebagai kontraindikasi mutlak Metformin karena klirens renal metformin anjlok memicu akumulasi asam laktat hepatik. Glibenklamid juga dihindari pada CKD berat karena metabolit aktifnya menumpuk memicu hipoglikemia berkepanjangan."
    },
    {
        "id": "q14",
        "category": "Gangguan Ginjal",
        "question": "Seorang pasien gagal ginjal terminal yang menjalani Hemodialisis (HD) 3 kali seminggu memerlukan terapi antibiotik Vankomisin untuk bakteremia MRSA. Mengapa Vankomisin hanya dapat dibersihkan secara signifikan bila menggunakan dializer jenis High-Flux membrane?",
        "options": [
            {"label": "A", "text": "Karena Vankomisin memiliki Berat Molekul besar (±1.448 Da) yang melebihi cut-off pori dializer Low-Flux konvensional (< 500 Da)", "correct": True},
            {"label": "B", "text": "Karena Vankomisin terikat 100% pada hemoglobin eritrosit", "correct": False},
            {"label": "C", "text": "Karena Vankomisin mengendap di cairan dialisat asam", "correct": False},
            {"label": "D", "text": "Karena Vankomisin dimetabolisme oleh serat selulosa dializer", "correct": False}
        ],
        "explanation": "Membran Low-Flux konvensional hanya mampu menyaring molekul kecil (< 500 Da). Vankomisin (BM 1.448 Da) tergolong middle-molecule yang membutuhkan pori dializer High-Flux (polysulfone/polyamide) untuk klirens adekuat."
    },
    {
        "id": "q15",
        "category": "Gangguan Ginjal",
        "question": "Kapan waktu pemberian dosis pemeliharaan Vankomisin yang paling tepat bagi pasien yang menjalani jadwal sesi hemodialisis reguler?",
        "options": [
            {"label": "A", "text": "2 jam tepat sebelum hemodialisis dimulai", "correct": False},
            {"label": "B", "text": "Segera setelah sesi hemodialisis selesai (post-dialysis) atau selama 30-60 menit terakhir dialisis", "correct": True},
            {"label": "C", "text": "Di tengah-tengah sesi hemodialisis", "correct": False},
            {"label": "D", "text": "Hanya pada hari bebas dialisis (off-dialysis day)", "correct": False}
        ],
        "explanation": "Jika diberikan sebelum dialisis, sebagian obat akan terbuang percuma oleh mesin HD (dialyzed out). Pemberian pasca-dialisis memastikan kadar terapeutik tercapai penuh di sirkulasi darah tanpa terbuang."
    },
    {
        "id": "q16",
        "category": "Gangguan Ginjal",
        "question": "Pasien dengan CrCl 20 mL/min diresepkan Siprofloksasin oral untuk infeksi saluran kemih berkomplikasi. Manakah penyesuaian dosis yang tepat menurut The Renal Drug Handbook?",
        "options": [
            {"label": "A", "text": "750 mg tiap 12 jam", "correct": False},
            {"label": "B", "text": "250 mg tiap 12 jam ATAU 500 mg tiap 24 jam", "correct": True},
            {"label": "C", "text": "500 mg tiap 8 jam", "correct": False},
            {"label": "D", "text": "Tidak perlu penyesuaian dosis karena eliminasi murni hepar", "correct": False}
        ],
        "explanation": "Siprofloksasin memiliki fe ~0.40 - 0.50. Pada CrCl < 30 mL/min, klirens ginjal turun drastis, sehingga dosis lazim (500 mg q12h) harus diturunkan 50% menjadi 250 mg q12h atau 500 mg q24h untuk menghindari akumulasi dan toksisitas SSP."
    },
    {
        "id": "q17",
        "category": "Gangguan Ginjal",
        "question": "Digoksin adalah obat gagal jantung dengan indeks terapi sempit (target 0.5 - 0.9 ng/mL). Mengapa kadar serum Digoksin harus dipantau sangat ketat pada pasien yang fungsi ginjalnya memburuk?",
        "options": [
            {"label": "A", "text": "Karena fe Digoksin adalah 0.70-0.80 dan Volume Distribusi (Vd) juga menyusut pada gagal ginjal, sehingga klirens turun drastis dan risiko aritmia fatal meningkat", "correct": True},
            {"label": "B", "text": "Karena Digoksin berubah menjadi metabolit aktif yang merusak glomerulus", "correct": False},
            {"label": "C", "text": "Karena Digoksin menghambat absorpsi kalium di lambung", "correct": False},
            {"label": "D", "text": "Karena Digoksin merangsang pembentukan batu asam urat", "correct": False}
        ],
        "explanation": "Digoksin diekskresi 70-80% utuh via filtrasi ginjal. Selain itu, uremia menurunkan ikatan digoksin pada reseptor Na+/K+ ATPase di jaringan otot skelet, menyebabkan Vd menyusut 30-50%. Klirens turun + Vd turun = kadar serum melonjak cepat memicu toksisitas glikosida jantung!"
    },
    {
        "id": "q18",
        "category": "Gangguan Ginjal",
        "question": "Manakah kombinasi antibiotik berikut yang memiliki risiko sinergisme NEFROTOKSISITAS paling tinggi pada pasien dengan gangguan ginjal yang sudah ada?",
        "options": [
            {"label": "A", "text": "Amoksisilin + Asam Klavulanat", "correct": False},
            {"label": "B", "text": "Vankomisin + Gentamisin (atau Piperasilin-Tazobaktam)", "correct": True},
            {"label": "C", "text": "Azitromisin + Seftriakson", "correct": False},
            {"label": "D", "text": "Doksisiklin + Klindamisin", "correct": False}
        ],
        "explanation": "Kombinasi Vankomisin dan Aminoglikosida (Gentamisin/Amikasin) atau Vankomisin + Piperasilin-Tazobaktam terbukti secara klinis melipatgandakan risiko Acute Kidney Injury (AKI) melalui kerusakan tubular sinergis dan nekrosis tubular akut."
    },
    {
        "id": "q19",
        "category": "Gangguan Ginjal",
        "question": "Penggunaan NSAID (seperti Ketorolak, Ibuprofen, Natrium Diklofenak) pada pasien gagal ginjal kronis dapat menyebabkan penurunan Laju Filtrasi Glomerulus (GFR) secara akut. Bagaimana mekanisme farmakodinamik terjadinya efek samping tersebut?",
        "options": [
            {"label": "A", "text": "NSAID menghambat sintesis Prostaglandin PGE2 dan PGI2 yang bertugas mempertahankan vasodilatasi arteriol AFEREN glomerulus, sehingga terjadi vasokonstriksi arteriol aferen dan iskemia glomerulus", "correct": True},
            {"label": "B", "text": "NSAID memblokade reseptor Angiotensin II pada arteriol eferen", "correct": False},
            {"label": "C", "text": "NSAID merusak membran filtrasi podosit secara mekanik", "correct": False},
            {"label": "D", "text": "NSAID memicu ekskresi albumin berlebihan ke dalam tubulus", "correct": False}
        ],
        "explanation": "Pada kondisi hipoperfusi ginjal atau CKD, aliran darah glomerulus dipertahankan oleh Prostaglandin (vasodilatasi arteriol aferen) dan Angiotensin II (vasokonstriksi arteriol eferen). Penghambatan COX oleh NSAID melenyapkan prostaglandin sehingga arteriol aferen konstriksi dan GFR drop drastis!"
    },
    {
        "id": "q20",
        "category": "Gangguan Ginjal",
        "question": "Apa fenomena 'Triple Whammy' dalam farmakoterapi yang sangat ditakuti pada pasien lansia dengan penurunan cadangan fungsi ginjal?",
        "options": [
            {"label": "A", "text": "Kombinasi ACE-Inhibitor (atau ARB) + Diuretik + NSAID yang secara simultan menurunkan perfusi glomerulus, memicu gagal ginjal akut (AKI) mendadak", "correct": True},
            {"label": "B", "text": "Kombinasi 3 jenis antibiotik beta-laktam secara bersamaan", "correct": False},
            {"label": "C", "text": "Kombinasi Statin + Antasida + Vitamin C", "correct": False},
            {"label": "D", "text": "Kombinasi Parasetamol + Antihistamin + Dekongestan", "correct": False}
        ],
        "explanation": "Triple Whammy: Diuretik (hipovolemia/dehidrasi) + NSAID (konstriksi arteriol aferen via hambatan prostaglandin) + ACEI/ARB (dilatasi arteriol eferen via hambatan AT-II) -> tekanan kapiler glomerulus kolaps total -> AKI berat!"
    },
    {
        "id": "q21",
        "category": "Gangguan Ginjal",
        "question": "Pasien dengan CrCl 15 mL/menit mengalami hiperurisemia sekunder dan serangan gout. Allopurinol diresepkan dokter. Mengapa dosis Allopurinol harus diturunkan drastis (misal mulai dari 50-100 mg/hari)?",
        "options": [
            {"label": "A", "text": "Karena metabolit aktifnya, Oksipurinol, memiliki fe mendekati 100% dan waktu paruhnya memanjang dari 20 jam menjadi >100 jam pada gagal ginjal, meningkatkan risiko fatal Allopurinol Hypersensitivity Syndrome (AHS/Stevens-Johnson)", "correct": True},
            {"label": "B", "text": "Karena Allopurinol langsung merusak kristal asam urat di glomerulus", "correct": False},
            {"label": "C", "text": "Karena Allopurinol menyebabkan retensi natrium parah", "correct": False},
            {"label": "D", "text": "Karena Allopurinol tidak diserap di usus jika ada uremia", "correct": False}
        ],
        "explanation": "Oksipurinol adalah metabolit aktif Allopurinol yang dibuang via ginjal. Pada insufisiensi ginjal berat, akumulasi oksipurinol sangat tinggi dan berkorelasi kuat dengan Allopurinol Hypersensitivity Syndrome (AHS) yang memiliki mortalitas 20-25%."
    },
    {
        "id": "q22",
        "category": "Gangguan Ginjal",
        "question": "Seftriakson adalah antibiotik sefalosporin generasi 3 yang unik karena memiliki jalur eliminasi ganda (50% renal, 50% biliar/hepar). Bagaimana rekomendasi penyesuaian dosis Seftriakson pada pasien gagal ginjal murni tanpa gangguan hepar?",
        "options": [
            {"label": "A", "text": "Dosis harus disunat menjadi 10% dari dosis normal", "correct": False},
            {"label": "B", "text": "Tidak memerlukan penyesuaian dosis rutin (maksimal 2 gram/hari), karena jalur ekskresi biliar/hati mengompensasi penurunan ekskresi renal", "correct": True},
            {"label": "C", "text": "Kontraindikasi mutlak dan harus diganti Sefotaksim", "correct": False},
            {"label": "D", "text": "Hanya boleh diberikan secara infus kontinu 72 jam", "correct": False}
        ],
        "explanation": "Seftriakson memiliki dual elimination (50:50). Jika ginjal rusak tapi fungsi hepar normal, hepar mengompensasi pembuangan metabolit sehingga tidak diperlukan penyesuaian dosis, kecuali jika terjadi gagal ganda (ginjal + hati berat bersamaan)."
    },

    # --- KELOMPOK 3: GANGGUAN HATI & SIROSIS (23-34) ---
    {
        "id": "q23",
        "category": "Gangguan Hati",
        "question": "Tn. J (58 th) didiagnosis sirosis hepatis alkoholik dengan data lab: Bilirubin total 3.5 mg/dL (3 poin), Albumin 2.6 g/dL (3 poin), INR 2.4 (3 poin), Asites sedang (2 poin), Ensefalopati hepatik grade 1 (2 poin). Berapakah total skor Child-Pugh dan kelas keparahannya?",
        "options": [
            {"label": "A", "text": "Skor 13 Poin, Kelas C (Dekompensasi Berat)", "correct": True},
            {"label": "B", "text": "Skor 10 Poin, Kelas B (Gangguan Sedang)", "correct": False},
            {"label": "C", "text": "Skor 8 Poin, Kelas B (Gangguan Sedang)", "correct": False},
            {"label": "D", "text": "Skor 6 Poin, Kelas A (Kompensasi Baik)", "correct": False}
        ],
        "explanation": "Total Poin = 3 (Bilirubin >3) + 3 (Albumin <2.8) + 3 (INR >2.2) + 2 (Asites sedang) + 2 (Ensefalopati gr 1-2) = 13 Poin. Skor 10-15 diklasifikasikan sebagai Child-Pugh Kelas C (Dekompensasi Berat)."
    },
    {
        "id": "q24",
        "category": "Gangguan Hati",
        "question": "Bagaimana rekomendasi penyesuaian dosis umum untuk obat-obatan yang dimetabolisme di hati pada pasien dengan Child-Pugh Kelas C?",
        "options": [
            {"label": "A", "text": "Berikan dosis normal karena hati memiliki cadangan enzim tak terbatas", "correct": False},
            {"label": "B", "text": "Turunkan dosis awal minimal 50% atau hindari obat hepatotoksik/sedatif berat, serta lakukan pemantauan ketat respons klinis dan efek samping", "correct": True},
            {"label": "C", "text": "Tingkatkan dosis obat oral sebesar 200%", "correct": False},
            {"label": "D", "text": "Cukup berikan suplemen vitamin C", "correct": False}
        ],
        "explanation": "Pada Child-Pugh C, kapasitas metabolisme hepar, aliran darah hepar, dan sintesis albumin telah rusak masif. Penurunan dosis awal minimal 50% atau memilih obat dengan rute eliminasi alternatif (renal murni) adalah keharusan klinis."
    },
    {
        "id": "q25",
        "category": "Gangguan Hati",
        "question": "Pada pasien sirosis hepatis stadium lanjut, terjadi pembentukan anastomosis portosistemik (portosystemic shunting). Apa dampak langsung fenomena ini terhadap bioavailabilitas oral (F) obat High Extraction Ratio seperti Morfin atau Propranolol?",
        "options": [
            {"label": "A", "text": "Bioavailabilitas oral meningkat tajam (bisa mencapai 2 hingga 4 kali lipat) karena darah yang membawa obat memotong hepar, melenyapkan First-Pass Metabolism", "correct": True},
            {"label": "B", "text": "Bioavailabilitas oral turun menjadi 0% karena lambung tidak menyerap obat", "correct": False},
            {"label": "C", "text": "Tidak ada pengaruh terhadap bioavailabilitas", "correct": False},
            {"label": "D", "text": "Obat langsung terikat pada eritrosit di limpa", "correct": False}
        ],
        "explanation": "Obat High Extraction (E > 0.7) normalnya mengalami metabolisme lintas pertama (first-pass) hingga 70-90% di hepar. Ketika darah memotong jalur hepar via shunt, obat oral langsung lolos ke sirkulasi sistemik tanpa filter, melipatgandakan bioavailabilitas dan memicu overdosis pada dosis standar!"
    },
    {
        "id": "q26",
        "category": "Gangguan Hati",
        "question": "Mengapa metabolisme obat melalui jalur Glukuronidasi (Fase II Konjugasi) seperti Lorazepam dan Oksazepam relatif lebih terlindungi dibanding metabolisme Oksidasi CYP450 (Fase I) pada pasien sirosis?",
        "options": [
            {"label": "A", "text": "Enzim UDP-glukuronosiltransferase (UGT) memiliki cadangan fungsional ekstra-hepatik yang lebih besar dan secara anatomis lebih resisten terhadap kerusakan parenkim hepar dibanding sistem mikrosomal CYP450", "correct": True},
            {"label": "B", "text": "Glukuronidasi hanya terjadi di dalam lumen usus besar", "correct": False},
            {"label": "C", "text": "Glukuronidasi tidak memerlukan enzim biologis apapun", "correct": False},
            {"label": "D", "text": "Enzim CYP450 berpindah ke ginjal saat sirosis", "correct": False}
        ],
        "explanation": "Aktivitas sitokrom P450 (Fase I Oksidasi) anjlok drastis sejak awal sirosis. Sebaliknya, enzim UGT (Fase II) memiliki kapasitas enzimatik tinggi dan tersebar di berbagai jaringan sehingga kapasitas konjugasi glukuronida relatif terjaga."
    },
    {
        "id": "q27",
        "category": "Gangguan Hati",
        "question": "Seorang pasien sirosis Child-Pugh B mengeluh cemas dan sulit tidur. Dokter meminta saran apoteker untuk memilih benzodiazepin yang paling aman. Manakah pilihan yang paling tepat berdasarkan profil farmakokinetik klinis?",
        "options": [
            {"label": "A", "text": "Diazepam (Fase I Oksidasi, metabolit aktif desmetildiazepam t1/2 > 100 jam)", "correct": False},
            {"label": "B", "text": "Klordiazepoksid (Fase I Oksidasi dengan multiple active metabolites)", "correct": False},
            {"label": "C", "text": "Lorazepam (Fase II Glukuronidasi murni, tanpa metabolit aktif, t1/2 relatif stabil)", "correct": True},
            {"label": "D", "text": "Flurazepam (Long-acting lipofilik tinggi)", "correct": False}
        ],
        "explanation": "Lorazepam, Oksazepam, dan Temazepam (dikenal dengan singkatan LOT) dimetabolisme murni melalui konjugasi glukuronidasi tanpa metabolit aktif. Pada sirosis, eliminasinya jauh lebih aman dibandingkan Diazepam yang dapat memicu koma ensefalopati hepatik berkepanjangan."
    },
    {
        "id": "q28",
        "category": "Gangguan Hati",
        "question": "Berapakah batas dosis harian maksimal Parasetamol yang direkomendasikan pada pasien sirosis hati kompensata yang membutuhkan analgesik jangka pendek menurut konsensus hepatologi internasional?",
        "options": [
            {"label": "A", "text": "Maksimal 2.000 mg/hari (2 gram/hari) terbagi dalam beberapa dosis", "correct": True},
            {"label": "B", "text": "Maksimal 4.000 mg/hari (sama dengan pasien normal)", "correct": False},
            {"label": "C", "text": "Parasetamol kontraindikasi mutlak, dosis maksimal 0 mg", "correct": False},
            {"label": "D", "text": "Maksimal 6.000 mg/hari", "correct": False}
        ],
        "explanation": "Meskipun parasetamol dimetabolisme di hati, pada sirosis kompensata parasetamol dosis rendah (maks 2 g/hari) JAUH LEBIH AMAN dibanding NSAID (yang memicu perdarahan varises dan sindrom hepatorenal). Jalur glukuronidasi dan sulfasi parasetamol masih memadai pada dosis <= 2 g/hari."
    },
    {
        "id": "q29",
        "category": "Gangguan Hati",
        "question": "Mengapa penggunaan obat golongan NSAID (seperti Asam Mefenamat, Ibuprofen, Ketorolak) menjadi KONTRAINDIKASI RELATIF / SANGAT DIHINDARI pada pasien dengan sirosis hepatis dekompensata?",
        "options": [
            {"label": "A", "text": "Meningkatkan risiko perdarahan saluran cerna masif dari varises esofagus (akibat efek antiplatelet & ulserogenik) serta memicu vasokonstriksi renal yang menginduksi Sindrom Hepatorenal fatal", "correct": True},
            {"label": "B", "text": "NSAID merangsang pertumbuhan virus hepatitis", "correct": False},
            {"label": "C", "text": "NSAID mengikat bilirubin dan memicu ikterus mekanik", "correct": False},
            {"label": "D", "text": "NSAID menurunkan tekanan vena porta secara drastis", "correct": False}
        ],
        "explanation": "Pada sirosis dekompensata, pasien memiliki hipertensi porta, varises esofagus, dan koagulopati. NSAID menghambat agregasi trombosit, merusak mukosa lambung, dan mengikis prostaglandin ginjal sehingga memicu gagal ginjal akut tipe Sindrom Hepatorenal (HRS) dengan mortalitas tinggi."
    },
    {
        "id": "q30",
        "category": "Gangguan Hati",
        "question": "Diuretik manakah yang menjadi lini pertama pilihan dalam penatalaksanaan asites akibat sirosis hepatis berdasarkan patofisiologi hiperaldosteronisme sekunder?",
        "options": [
            {"label": "A", "text": "Spironolakton (Antagonis Aldosteron)", "correct": True},
            {"label": "B", "text": "Hidroklorotiazid", "correct": False},
            {"label": "C", "text": "Manitol", "correct": False},
            {"label": "D", "text": "Asetazolamid", "correct": False}
        ],
        "explanation": "Asites sirosis dipicu oleh vasodilatasi splanknik dan aktivasi masif sistem RAAS (hiperaldosteronisme sekunder). Spironolakton bekerja spesifik memblokade aldosteron di tubulus distal. Sering dikombinasikan dengan Furosemid dengan rasio baku 100 mg Spironolakton : 40 mg Furosemid untuk menjaga normokalemia."
    },
    {
        "id": "q31",
        "category": "Gangguan Hati",
        "question": "Laktulosa digunakan dalam terapi Ensefalopati Hepatik. Bagaimana mekanisme kerja farmakoterapi Laktulosa dalam menurunkan kadar amonia darah?",
        "options": [
            {"label": "A", "text": "Laktulosa difermentasi oleh bakteri kolon menjadi asam laktat/asetat sehingga menurunkan pH kolon; suasana asam mengubah amonia (NH3 yang mudah diserap) menjadi ion amonium (NH4+ yang impermeable) yang terperangkap dan dibuang lewat feses", "correct": True},
            {"label": "B", "text": "Laktulosa memblokade reseptor GABA di korteks serebri", "correct": False},
            {"label": "C", "text": "Laktulosa merangsang regenerasi hepatosit secara langsung", "correct": False},
            {"label": "D", "text": "Laktulosa mengikat albumin serum dan meningkatkan ekskresi ginjal", "correct": False}
        ],
        "explanation": "Konsep 'Ammonia Trapping': Di usus besar, laktulosa diubah jadi asam organik -> pH lumen usus turun -> NH3 (lipofilik) terprotonasi menjadi NH4+ (hidrofilik bermuatan). Ion NH4+ tidak dapat menembus mukosa usus dan dikeluarkan saat defekasi (2-3 kali BAB lunak per hari)."
    },
    {
        "id": "q32",
        "category": "Gangguan Hati",
        "question": "Hepatitis virus kronis menurunkan klirens hepar (CL_H) suatu obat sebesar 50%. Diketahui fraksi renal fe = 0.40 dan fraksi hepar fh = 0.60 pada kondisi normal. Berapakah fraksi klirens total obat yang tersisa pada pasien tersebut?",
        "options": [
            {"label": "A", "text": "0.70 (Klirens total tersisa 70% dari normal)", "correct": True},
            {"label": "B", "text": "0.50 (Klirens total tersisa 50% dari normal)", "correct": False},
            {"label": "C", "text": "0.30 (Klirens total tersisa 30% dari normal)", "correct": False},
            {"label": "D", "text": "0.85 (Klirens total tersisa 85% dari normal)", "correct": False}
        ],
        "explanation": "CL_total = CL_R + CL_H. Normal = 0.40 + 0.60 = 1.0. Saat CL_H turun 50%, sisa CL_H = 0.60 * 0.50 = 0.30. Maka CL_total baru = 0.40 (renal) + 0.30 (hepar) = 0.70 (70% dari normal)."
    },
    {
        "id": "q33",
        "category": "Gangguan Hati",
        "question": "Mengapa penggunaan sedatif golongan Opioid (seperti Morfin, Fentanil, Petidin) sangat berbahaya dan dapat mempresipitasi Ensefalopati Hepatik pada pasien sirosis?",
        "options": [
            {"label": "A", "text": "Penurunan klirens hepar masif memperpanjang waktu paruh opioid, ditambah peningkatan permeabilitas sawar darah otak dan hipersensitivitas reseptor SSP pada sirosis", "correct": True},
            {"label": "B", "text": "Opioid merangsang pembelahan sel virus di parenkim hati", "correct": False},
            {"label": "C", "text": "Opioid memicu pembentukan batu empedu kolesterol akut", "correct": False},
            {"label": "D", "text": "Opioid menghancurkan sintesis eritropoietin di limpa", "correct": False}
        ],
        "explanation": "Pada sirosis, first-pass metabolism morfin hilang + klirens turun drastis -> kadar melonjak. Selain itu, konstipasi akibat opioid meningkatkan produksi dan absorpsi amonia usus, sementara efek depresan SSP memperburuk koma ensefalopati."
    },
    {
        "id": "q34",
        "category": "Gangguan Hati",
        "question": "Antibiotik non-absorbable Rifaximin sering ditambahkan pada terapi Ensefalopati Hepatik berulang. Apa keunggulan profil farmakokinetik Rifaximin?",
        "options": [
            {"label": "A", "text": "Bioavailabilitas sistemik sangat rendah (< 0.4%), bekerja lokal di lumen usus untuk mereduksi bakteri penghasil amonia tanpa membebani klirens hepar dan minim efek samping sistemik", "correct": True},
            {"label": "B", "text": "Rifaximin dimetabolisme 100% menjadi nutrisi bagi hepatosit", "correct": False},
            {"label": "C", "text": "Rifaximin meningkatkan sintesis faktor pembekuan darah", "correct": False},
            {"label": "D", "text": "Rifaximin menggantikan fungsi enzim glukuronidasi", "correct": False}
        ],
        "explanation": "Rifaximin adalah turunan rifamisin yang hampir tidak diserap ke sirkulasi (<0.4%). Obat ini membunuh flora usus gram negatif penghasil urease (penghasil amonia) secara lokal di usus tanpa menimbulkan toksisitas sistemik pada pasien sirosis."
    },

    # --- KELOMPOK 4: GERIATRI & POLIFARMASI (35-44) ---
    {
        "id": "q35",
        "category": "Geriatri",
        "question": "Seorang wanita 85 tahun dengan BB 42 kg datang dengan hasil lab Serum Kreatinin 0.7 mg/dL. Dokter menganggap fungsi ginjal pasien sangat prima karena SCr di bawah 1.0. Mengapa anggapan tersebut keliru secara farmakokinetik klinis?",
        "options": [
            {"label": "A", "text": "Kadar SCr yang rendah merupakan akibat dari hilangnya massa otot (sarkopenia) pada lansia kurus, padahal hasil perhitungan Cockcroft-Gault menunjukkan CrCl sebenarnya hanya ~33 mL/min (CKD Tahap 3)", "correct": True},
            {"label": "B", "text": "SCr wanita lansia seharusnya bernilai negatif", "correct": False},
            {"label": "C", "text": "Ginjal lansia memproduksi kreatinin sendiri di tubulus", "correct": False},
            {"label": "D", "text": "Kreatinin serum hanya mencerminkan asupan karbohidrat", "correct": False}
        ],
        "explanation": "CrCl = [(140-85) * 42] / (72 * 0.7) * 0.85 = (55 * 42) / 50.4 * 0.85 = 45.83 * 0.85 = 38.9 mL/min. Angka SCr rendah terjadi bukan karena filtrasi ginjal hebat, melainkan karena produksi kreatinin dari massa otot sudah sangat sedikit (Pseudonormal SCr)."
    },
    {
        "id": "q36",
        "category": "Geriatri",
        "question": "Bagaimana perubahan komposisi tubuh fisiologis pada lansia (penurunan air tubuh total 10-15% dan peningkatan lemak tubuh 20-40%) memengaruhi parameter Volume Distribusi (Vd) obat?",
        "options": [
            {"label": "A", "text": "Vd obat hidrofilik (misal Digoksin, Litium) menyusut -> Cmax naik; Vd obat lipofilik (misal Diazepam) membesar -> t1/2 memanjang drastis", "correct": True},
            {"label": "B", "text": "Vd semua obat menjadi 0 L", "correct": False},
            {"label": "C", "text": "Vd obat lipofilik menyusut drastis sehingga obat cepat hilang", "correct": False},
            {"label": "D", "text": "Tidak ada perubahan distribusi pada lansia", "correct": False}
        ],
        "explanation": "Air tubuh turun -> volume sebaran obat larut air mengecil -> dosis standar memicu kadar puncak darah melonjak tinggi. Lemak tubuh naik -> obat larut lemak terakumulasi di jaringan adiposa -> eliminasi melambat dan waktu paruh molor berhari-hari."
    },
    {
        "id": "q37",
        "category": "Geriatri",
        "question": "Ny. M (76 th) mengonsumsi Amlodipin 10 mg untuk hipertensi, kemudian mengalami efek samping edema pergelangan kaki bilateral. Dokter yang tidak cermat mendiagnosis edema sebagai gagal jantung dan meresepkan Furosemid 40 mg. Furosemid memicu inkontinensia urin, sehingga dokter menambahkan Tolterodin (antikolinergik) yang akhirnya memicu retensi urin akut dan konfusi. Rangkaian peristiwa ini adalah contoh klasik dari:",
        "options": [
            {"label": "A", "text": "Kaskade Peresepan (Prescribing Cascade)", "correct": True},
            {"label": "B", "text": "Toleransi Farmakokinetik", "correct": False},
            {"label": "C", "text": "Synergistic Agonism", "correct": False},
            {"label": "D", "text": "Idiosinkrasi Imunologi", "correct": False}
        ],
        "explanation": "Prescribing Cascade terjadi ketika efek samping suatu obat (Adverse Drug Reaction) disalahartikan sebagai kondisi medis baru, sehingga diresepkan obat kedua untuk mengobatinya, yang kemudian memicu efek samping baru dan obat ketiga."
    },
    {
        "id": "q38",
        "category": "Geriatri",
        "question": "Menurut kriteria AGS Beers Criteria 2023, mengapa obat antihistamin generasi pertama dengan efek antikolinergik kuat (seperti Difenhidramin, Klorfeniramin/CTM, Hidroksizin) harus DIHINDARI pada populasi geriatri?",
        "options": [
            {"label": "A", "text": "Risiko tinggi sedasi berat, gangguan kognitif akut/delirium, retensi urin, konstipasi parah, mulut kering, dan peningkatan risiko jatuh/fraktur", "correct": True},
            {"label": "B", "text": "Antihistamin generasi 1 memicu diabetes melitus tipe 1", "correct": False},
            {"label": "C", "text": "Antihistamin generasi 1 menurunkan penyerapan vitamin D di usus", "correct": False},
            {"label": "D", "text": "Antihistamin generasi 1 merusak email gigi secara langsung", "correct": False}
        ],
        "explanation": "Otak lansia mengalami penurunan transmisi kolinergik fisiologis dan peningkatan permeabilitas sawar darah otak. Obat antikolinergik memblokade reseptor muskarinik SSP memicu konfusi, delirium akut, ataksia, dan risiko jatuh yang membahayakan nyawa."
    },
    {
        "id": "q39",
        "category": "Geriatri",
        "question": "Pasien lansia 80 tahun mengalami retensi cairan akibat gagal jantung kongestif kambuh. Furosemid oral 40 mg gagal memicu diuresis. Apa penjelasan farmakokinetik yang mendasari kegagalan ini dan bagaimana solusinya?",
        "options": [
            {"label": "A", "text": "Laju absorpsi furosemid oral melambat akibat edema mukosa saluran cerna sehingga kadar di lumen tubulus tidak pernah menembus batas ambang (threshold); solusinya berikan Furosemid 40 mg secara Intravena (IV) atau naikkan dosis bolus oral", "correct": True},
            {"label": "B", "text": "Furosemid dihancurkan oleh enzim ludah lansia; solusinya kunyah tablet", "correct": False},
            {"label": "C", "text": "Furosemid berubah menjadi vasodilator murni", "correct": False},
            {"label": "D", "text": "Tubulus ginjal lansia kehilangan seluruh reseptor Na-K-2Cl", "correct": False}
        ],
        "explanation": "Diuretik loop memiliki kurva dosis-respons sigmoid dengan threshold effect. Furosemid harus mencapai kadar puncak tertentu di cairan tubulus untuk memblokade kotransporter NKCC2. Penyerapan oral yang lambat membuat kadar tubulus selalu berada di bawah threshold."
    },
    {
        "id": "q40",
        "category": "Geriatri",
        "question": "Mengapa penggunaan obat golongan Sulfonilurea masa kerja panjang seperti Glibenklamid (Glyburide) masuk dalam kategori Potentially Inappropriate Medications (PIMs) pada lansia menurut Beers Criteria?",
        "options": [
            {"label": "A", "text": "Waktu paruh metabolit aktifnya memanjang akibat penurunan klirens ginjal fisiologis lansia, memicu risiko Hipoglikemia Berat, Berkepanjangan, dan Fatal", "correct": True},
            {"label": "B", "text": "Glibenklamid merusak saraf optik lansia secara instan", "correct": False},
            {"label": "C", "text": "Glibenklamid menyebabkan katarak kongenital", "correct": False},
            {"label": "D", "text": "Glibenklamid memicu kenaikan asam urat masif", "correct": False}
        ],
        "explanation": "Glibenklamid dimetabolisme menjadi metabolit aktif yang diekskresi via ginjal. Penurunan GFR lansia membuat metabolit menumpuk, menyebabkan hipoglikemia yang bisa berlangsung >24-48 jam dan memicu koma atau stroke hipoglikemik. Pilihan lebih aman: Glipizid atau Gliklazid (short-acting tanpa metabolit aktif bermakna)."
    },
    {
        "id": "q41",
        "category": "Geriatri",
        "question": "Prinsip farmakoterapi emas dalam memulai pemberian obat baru pada pasien geriatri adalah Start Low, Go Slow, but Get to the Goal. Apa maksud dari prinsip ini?",
        "options": [
            {"label": "A", "text": "Mulai dengan dosis awal rendah (misal 25-50% dosis lazim dewasa), lakukan titrasi kenaikan dosis secara bertahap dan perlahan sambil memantau toleransi serta efek samping hingga target terapeutik tercapai", "correct": True},
            {"label": "B", "text": "Memberikan obat hanya satu kali dalam sebulan", "correct": False},
            {"label": "C", "text": "Menghindari pemberian obat apapun selamanya", "correct": False},
            {"label": "D", "text": "Menghentikan semua obat setelah 2 hari pemberian", "correct": False}
        ],
        "explanation": "Penurunan cadangan organ (homeostenosis), variabilitas farmakokinetik tinggi, dan peningkatan sensitivitas reseptor farmakodinamik mengharuskan klinisi memulai dari dosis subterapeutik awal lalu menaikkannya perlahan untuk mencegah intoksikasi mendadak."
    },
    {
        "id": "q42",
        "category": "Geriatri",
        "question": "Seorang kakek 79 tahun dengan hipertensi dan Benign Prostatic Hyperplasia (BPH) diresepkan Prazosin (alpha-1 blocker non-selektif). Mengapa risiko First-Dose Syncope dan Hipotensi Ortostatik sangat tinggi pada lansia ini?",
        "options": [
            {"label": "A", "text": "Penurunan refleks baroreseptor fisiologis pada lansia menyebabkan tubuh gagal mengompensasi vasodilatasi mendadak saat berdiri, memicu penurunan perfusi serebral dan pingsan/jatuh", "correct": True},
            {"label": "B", "text": "Prazosin memicu aritmia ventrikel instan", "correct": False},
            {"label": "C", "text": "Prazosin merusak otot jantung secara langsung", "correct": False},
            {"label": "D", "text": "Prazosin menghambat pelepasan insulin dari pankreas", "correct": False}
        ],
        "explanation": "Refleks barorefleks arteri pada lansia mengalami penurunan elastisitas dan sensitivitas. Blokade alfa-1 memicu vasodilatasi vena & arteri tanpa kompensasi takikardia vasokonstriksi yang memadai -> tekanan darah ortostatik anjlok saat pasien bangun dari tidur/duduk."
    },
    {
        "id": "q43",
        "category": "Geriatri",
        "question": "Mengapa penggunaan obat Antipsikotik (misal Haloperidol, Risperidon, Olanzapin) untuk mengatasi gejala perilaku demensia (BPSD) pada lansia memiliki FDA Black Box Warning?",
        "options": [
            {"label": "A", "text": "Meningkatkan risiko mortalitas total (terutama akibat kejadian kardiovaskular fatal seperti stroke, gagal jantung, dan pneumonia aspirasi)", "correct": True},
            {"label": "B", "text": "Menyebabkan kebotakan permanen", "correct": False},
            {"label": "C", "text": "Memicu gagal ginjal polikistik", "correct": False},
            {"label": "D", "text": "Menghancurkan sel darah merah dalam 1 jam", "correct": False}
        ],
        "explanation": "FDA Black Box Warning: Penggunaan antipsikotik atipikal maupun tipikal pada pasien lansia dengan psikosis terkait demensia berkaitan dengan peningkatan risiko kematian 1.6 hingga 1.7 kali lipat akibat henti jantung mendadak, stroke iskemik, dan infeksi pneumonia."
    },
    {
        "id": "q44",
        "category": "Geriatri",
        "question": "Pasien geriatri 82 tahun rutin minum 9 jenis obat setiap hari (polifarmasi berat). Langkah awal apa yang paling tepat dilakukan apoteker dalam proses Medication Therapy Management (MTM)?",
        "options": [
            {"label": "A", "text": "Melakukan rekonsiliasi obat menyeluruh, skrining Beers Criteria / STOPP-START Criteria, dan mengidentifikasi potensi deprescribing (penghentian obat tanpa indikasi/duplikasi/berisiko tinggi)", "correct": True},
            {"label": "B", "text": "Menambahkan 5 jenis suplemen herbal baru", "correct": False},
            {"label": "C", "text": "Menginstruksikan pasien meminum semua obat sekaligus dalam 1 gelas air", "correct": False},
            {"label": "D", "text": "Mengganti semua obat menjadi sediaan injeksi", "correct": False}
        ],
        "explanation": "Deprescribing terstruktur menggunakan kriteria eksplisit (Beers, STOPP/START) adalah standar emas untuk menyederhanakan regimen obat, mengurangi interaksi obat yang merugikan, dan meningkatkan kepatuhan pasien lansia."
    },

    # --- KELOMPOK 5: IBU HAMIL & TERATOGENESIS (45-53) ---
    {
        "id": "q45",
        "category": "Ibu Hamil",
        "question": "Perubahan farmakokinetik apa yang terjadi secara fisiologis pada trimester kedua dan ketiga kehamilan yang dapat menurunkan konsentrasi serum obat-obat hidrofilik di dalam darah ibu?",
        "options": [
            {"label": "A", "text": "Peningkatan volume plasma darah (ekspansi cairan tubuh hingga 40-50%) dan peningkatan Laju Filtrasi Glomerulus (GFR hingga 50%) yang mempercepat klirens ginjal", "correct": True},
            {"label": "B", "text": "Pengecilan ukuran rahim dan penurunan aliran darah plasenta", "correct": False},
            {"label": "C", "text": "Peningkatan albumin serum hingga 2 kali lipat", "correct": False},
            {"label": "D", "text": "Penghentian seluruh metabolisme hepar", "correct": False}
        ],
        "explanation": "Pada kehamilan lanjut: Volume plasma naik 40-50% (Vd obat membesar -> kadar obat menurun) + Curah jantung dan GFR naik 50% (klirens ginjal melonjak). Untuk beberapa obat seperti antibiotik beta-laktam atau antiepilepsi, dosis mungkin perlu dinaikkan atau interval diperpendek."
    },
    {
        "id": "q46",
        "category": "Ibu Hamil",
        "question": "Pada usia kehamilan berapakah janin berada pada Periode Emas Organogenesis yang paling rentan terhadap cacat lahir bawaan struktural / anatomis berat jika terpapar obat teratogenik?",
        "options": [
            {"label": "A", "text": "Minggu ke-3 hingga minggu ke-8 setelah pembuahan (Trimester I)", "correct": True},
            {"label": "B", "text": "Minggu ke-1 hingga ke-2 (Pre-diferensiasi)", "correct": False},
            {"label": "C", "text": "Minggu ke-28 hingga ke-40 (Trimester III)", "correct": False},
            {"label": "D", "text": "Hanya 1 hari sebelum proses persalinan", "correct": False}
        ],
        "explanation": "Organogenesis berlangsung pada minggu ke-3 s/d ke-8 pascakonsepsi. Di fase ini organ-organ vital (jantung, tabung saraf, mata, telinga, tungkai) sedang berdiferensiasi aktif. Teratogen di fase ini memicu malformasi mayor (anencephaly, phocomelia, defek septum jantung)."
    },
    {
        "id": "q47",
        "category": "Ibu Hamil",
        "question": "Apa karakteristik fisikokimia obat yang MENYULITKAN obat tersebut menembus sawar plasenta sehingga relatif aman bagi janin?",
        "options": [
            {"label": "A", "text": "Berat Molekul sangat besar (> 1.000 Dalton), sangat polar / larut air tinggi, dan memiliki ikatan protein plasma yang sangat kuat", "correct": True},
            {"label": "B", "text": "Sangat lipofilik dan non-ionik", "correct": False},
            {"label": "C", "text": "Berat molekul < 200 Dalton", "correct": False},
            {"label": "D", "text": "Waktu paruh > 80 jam", "correct": False}
        ],
        "explanation": "Sawar plasenta adalah membran lipid bilayer. Molekul raksasa (BM > 1.000 Da seperti Heparin dan Insulin) tidak mampu menembus membran plasenta secara difusi pasif, sehingga tidak masuk ke sirkulasi janin."
    },
    {
        "id": "q48",
        "category": "Ibu Hamil",
        "question": "Mengapa sistem pelabelan obat kehamilan FDA format lama (Kategori A, B, C, D, X) resmi DIGANTIKAN oleh Pregnancy and Lactation Labeling Rule (PLLR) sejak tahun 2015?",
        "options": [
            {"label": "A", "text": "Kategori huruf A-B-C-D-X terlalu menyederhanakan risiko, sering disalahartikan sebagai skala linier bahaya (misal Kategori C dianggap lebih aman dari D padahal hanya ketiadaan data), dan tidak memberikan rincian naratif berbasis bukti klinis", "correct": True},
            {"label": "B", "text": "Karena huruf alfabet dalam bahasa Inggris sudah diganti", "correct": False},
            {"label": "C", "text": "Karena semua obat modern dijamin 100% aman untuk bumil", "correct": False},
            {"label": "D", "text": "Karena FDA dibubarkan pada tahun 2015", "correct": False}
        ],
        "explanation": "Sistem PLLR memuat narasi komprehensif 3 bagian: Pregnancy (termasuk risiko latar belakang & register kehamilan), Lactation (termasuk ekskresi ASI & efek pada bayi), serta Females and Males of Reproductive Potential (infertilitas & kontrasepsi)."
    },
    {
        "id": "q49",
        "category": "Ibu Hamil",
        "question": "Ny. T (29 th, G1P0A0, hamil 16 minggu) memiliki riwayat hipertensi esensial dan saat ini masih mengonsumsi Kaptopril (ACE-Inhibitor). Apa bahaya spesifik fetotoksisitas ACEI pada trimester ke-2 dan ke-3 kehamilan?",
        "options": [
            {"label": "A", "text": "Gangguan hemodinamik perfusi ginjal janin -> Anuria Janin -> Oligohidramnion (air ketuban habis) -> Hipoplasia Paru, Deformitas Kraniofasial, Hipokalvaria (tengkorak tidak menutup), dan Gagal Ginjal Neonatal", "correct": True},
            {"label": "B", "text": "Memicu katarak kongenital dan hidrosefalus", "correct": False},
            {"label": "C", "text": "Menyebabkan gigi janin berwarna cokelat", "correct": False},
            {"label": "D", "text": "Menyebabkan penutupan prematur duktus arteriosus", "correct": False}
        ],
        "explanation": "ACE-Inhibitor dan ARB mengganggu pembentukan ginjal dan perfusi urin janin. Karena cairan ketuban berasal dari urin janin, anuria memicu oligohidramnion berat dengan sekuel sindrom Potter (hipoplasia paru fatal, deformitas tulang tengkorak)."
    },
    {
        "id": "q50",
        "category": "Ibu Hamil",
        "question": "Manakah antihipertensi lini pertama yang direkomendasikan untuk menggantikan ACE-Inhibitor pada ibu hamil (Briggs: Compatible)?",
        "options": [
            {"label": "A", "text": "Metildopa oral, Labetalol oral, atau Nifedipin lepas lambat", "correct": True},
            {"label": "B", "text": "Kandesartan atau Valsartan", "correct": False},
            {"label": "C", "text": "Spironolakton dosis tinggi", "correct": False},
            {"label": "D", "text": "Natrium Nitroprusid", "correct": False}
        ],
        "explanation": "Metildopa (agonis alfa-2 sentral dengan riwayat keamanan jangka panjang puluhan tahun), Labetalol (alfa-beta blocker), dan Nifedipin extended-release (CCB) adalah pilihan lini pertama yang terbukti aman dan efektif mengontrol tekanan darah maternal tanpa mengorbankan perfusi uteroplasenta."
    },
    {
        "id": "q51",
        "category": "Ibu Hamil",
        "question": "Ibu hamil 10 minggu dengan riwayat Deep Vein Thrombosis (DVT) membutuhkan antikoagulan. Mengapa Low Molecular Weight Heparin (LMWH, misal Enoksaparin) jauh lebih aman dibandingkan Warfarin oral?",
        "options": [
            {"label": "A", "text": "LMWH memiliki Berat Molekul besar bermuatan negatif tinggi sehingga TIDAK MENEMBUS plasenta; sedangkan Warfarin mudah menembus plasenta dan memicu Warfarin Embryopathy (hipoplasia nasal, condrodysplasia punctata, perdarahan intrakranial janin)", "correct": True},
            {"label": "B", "text": "Warfarin langsung menghentikan detak jantung ibu", "correct": False},
            {"label": "C", "text": "LMWH diserap di lambung janin", "correct": False},
            {"label": "D", "text": "LMWH mempercepat persalinan secara prematur", "correct": False}
        ],
        "explanation": "Warfarin adalah molekul kecil yang bebas menembus plasenta dan teratogenik kuat pada trimester 1 (Fetal Warfarin Syndrome) serta memicu perdarahan intrakranial fatal janin di trimester 2-3. Heparin dan LMWH tidak menembus sawar plasenta sama sekali."
    },
    {
        "id": "q52",
        "category": "Ibu Hamil",
        "question": "Ibu hamil dengan epilepsi terkontrol memerlukan terapi antikonvulsan. Manakah obat antiepilepsi yang memiliki risiko TERATOGENIK PALING TINGGI terhadap defek tabung saraf (Neural Tube Defect / Spina Bifida) dan gangguan neurodevelopmental anak?",
        "options": [
            {"label": "A", "text": "Asam Valproat (Natrium Valproat)", "correct": True},
            {"label": "B", "text": "Levetirasetam", "correct": False},
            {"label": "C", "text": "Lamotrigin", "correct": False},
            {"label": "D", "text": "Gabapentin", "correct": False}
        ],
        "explanation": "Asam Valproat memiliki risiko malformasi mayor tertinggi (10-11% dibanding baseline 2-3%), terutama spina bifida (1-2%) dan penurunan skor IQ anak 8-10 poin. Bila memungkinkan, pasien usia subur dialihkan ke Lamotrigin atau Levetirasetam dengan suplementasi asam folat dosis tinggi (4-5 mg/hari)."
    },
    {
        "id": "q53",
        "category": "Ibu Hamil",
        "question": "Mengapa penggunaan NSAID (Ibuprofen, Ketorolak, Asam Mefenamat) pada usia kehamilan > 20 minggu (khususnya trimester 3) harus DIHINDARI?",
        "options": [
            {"label": "A", "text": "Dapat menyebabkan penutupan prematur Duktus Arteriosus Botalli janin (memicu hipertensi pulmonal persisten neonatal) dan disfungsi ginjal janin yang memicu oligohidramnion (FDA Drug Safety Communication)", "correct": True},
            {"label": "B", "text": "Menyebabkan kehamilan ganda", "correct": False},
            {"label": "C", "text": "Memicu robekan plasenta secara mekanik", "correct": False},
            {"label": "D", "text": "Membunuh seluruh bakteri probiotik vagina", "correct": False}
        ],
        "explanation": "Prostaglandin maternal mempertahankan patensi duktus arteriosus janin in utero. Hambatan sintesis prostaglandin oleh NSAID di trimester 3 memicu konstriksi prematur duktus arteriosus dan kerusakan perfusi renal janin."
    },

    # --- KELOMPOK 6: IBU MENYUSUI & LAKTASI (54-60) ---
    {
        "id": "q54",
        "category": "Ibu Menyusui",
        "question": "Seorang ibu menyusui (BB 60 kg) meminum obat analgesik dengan dosis 800 mg/hari. Pengukuran laboratorium menunjukkan konsentrasi obat dalam ASI adalah 2 mg/L. Asumsi asupan ASI bayi adalah 0.15 L/kg/hari (150 mL/kg/hari). Berapakah nilai Relative Infant Dose (RID) obat tersebut?",
        "options": [
            {"label": "A", "text": "2.25% (Aman, RID < 10%)", "correct": True},
            {"label": "B", "text": "15.0% (Bahaya, RID > 10%)", "correct": False},
            {"label": "C", "text": "0.75% (Aman)", "correct": False},
            {"label": "D", "text": "8.50% (Aman)", "correct": False}
        ],
        "explanation": "Dosis Bayi = 2 mg/L * 0.15 L/kg/hari = 0.30 mg/kg/hari. Dosis Ibu = 800 mg / 60 kg = 13.33 mg/kg/hari. RID = (0.30 / 13.33) * 100% = 2.25%. Karena RID jauh di bawah ambang batas 10%, obat ini tergolong kompatibel dan aman untuk ibu menyusui."
    },
    {
        "id": "q55",
        "category": "Ibu Menyusui",
        "question": "Prof. Thomas Hale mengklasifikasikan keamanan obat pada laktasi menjadi 5 kategori (L1 hingga L5). Apa arti kategori L2 (Safer)?",
        "options": [
            {"label": "A", "text": "Obat telah diteliti pada sejumlah terbatas ibu menyusui tanpa bukti peningkatan efek merugikan pada bayi, dan/atau bukti risiko yang merugikan sangat kecil kemungkinannya terjadi", "correct": True},
            {"label": "B", "text": "Obat kontraindikasi mutlak bagi ibu menyusui", "correct": False},
            {"label": "C", "text": "Obat tidak boleh diminum kecuali bayi diopname", "correct": False},
            {"label": "D", "text": "Obat menyebabkan produksi ASI berhenti total", "correct": False}
        ],
        "explanation": "Kategori Hale: L1 (Paling Aman / Safest), L2 (Aman / Safer, misal Amoksisilin, Sertralin, Loratadin), L3 (Cukup Aman / Moderately Safe), L4 (Berpotensi Bahaya / Possibly Hazardous), L5 (Kontraindikasi / Hazardous, misal Kemoterapi sitotoksik, Radiofarmaka)."
    },
    {
        "id": "q56",
        "category": "Ibu Menyusui",
        "question": "Mengapa penggunaan obat batuk/analgesik KODEIN pada ibu menyusui memiliki FDA Black Box Warning dan telah dilaporkan menyebabkan kasus kematian neonatal akibat depresi pernapasan fatal?",
        "options": [
            {"label": "A", "text": "Kodein adalah prodrug yang diubah menjadi Morfin oleh enzim CYP2D6; pada ibu dengan polimorfisme CYP2D6 Ultra-Rapid Metabolizer, konversi menjadi morfin terjadi sangat masif sehingga kadar morfin dalam ASI melonjak ke level toksik mematikan bagi bayi", "correct": True},
            {"label": "B", "text": "Kodein langsung merusak kelenjar mamae dan membekukan ASI", "correct": False},
            {"label": "C", "text": "Kodein membuat bayi menolak rasa manis ASI", "correct": False},
            {"label": "D", "text": "Kodein memicu reaksi alergi anafilaksis pada puting susu", "correct": False}
        ],
        "explanation": "Sekitar 1-10% populasi adalah CYP2D6 Ultra-Rapid Metabolizers (UM). Ibu dengan fenotipe ini memproduksi morfin dalam konsentrasi sangat tinggi di sirkulasi darah dan ASI. Sistem saraf pusat bayi yang imatur sangat rentan terhadap depresi napas opioid fatal."
    },
    {
        "id": "q57",
        "category": "Ibu Menyusui",
        "question": "Manakah analgesik-antipiretik lini pertama pilihan yang paling aman (Kategori Hale L1) untuk ibu menyusui pascapersalinan?",
        "options": [
            {"label": "A", "text": "Ibuprofen dan Parasetamol (keduanya memiliki RID sangat rendah < 1% dan riwayat keamanan laktasi sangat luas)", "correct": True},
            {"label": "B", "text": "Aspirin dosis tinggi (risiko Reye Syndrome)", "correct": False},
            {"label": "C", "text": "Tramadol oral (risiko depresi napas bayi)", "correct": False},
            {"label": "D", "text": "Ketorolak tablet 4 kali sehari", "correct": False}
        ],
        "explanation": "Ibuprofen (ikatan protein 99%, t1/2 singkat 2 jam, RID <0.5%) dan Parasetamol (RID <1-2%) adalah dua analgesik lini pertama pilihan paling aman yang masuk dalam kategori Hale L1 (Safest)."
    },
    {
        "id": "q58",
        "category": "Ibu Menyusui",
        "question": "Ibu menyusui 28 tahun mengalami Postpartum Depression. Dokter ingin meresepkan antidepresan golongan SSRI. Mengapa Sertralin jauh lebih disukai dibandingkan Fluoksetin selama masa menyusui?",
        "options": [
            {"label": "A", "text": "Sertralin memiliki ikatan protein plasma sangat tinggi (98%) dan RID rendah (0.4-2.2%), sedangkan Fluoksetin memiliki metabolit aktif (Norfluoksetin) dengan waktu paruh sangat panjang (1-2 minggu) yang dapat berakumulasi di tubuh bayi", "correct": True},
            {"label": "B", "text": "Fluoksetin menyebabkan ASI berbusa", "correct": False},
            {"label": "C", "text": "Sertralin meningkatkan produksi hormon prolaktin 100 kali lipat", "correct": False},
            {"label": "D", "text": "Fluoksetin hanya bekerja pada pria", "correct": False}
        ],
        "explanation": "Sertralin dan Paroksetin adalah SSRI pilihan utama menyusui karena kadar dalam plasma bayi hampir tidak terdeteksi (RID sangat rendah). Sebaliknya, Fluoksetin dan metabolitnya norfluoksetin memiliki t1/2 super panjang yang memicu kolik, sedasi, dan penurunan berat badan bayi."
    },
    {
        "id": "q59",
        "category": "Ibu Menyusui",
        "question": "Ibu menyusui mengalami mastitis bakterial akut dan diresepkan Kloksasilin oral 500 mg 4x sehari. Apa edukasi klinis yang paling tepat disampaikan apoteker mengenai kelangsungan pemberian ASI?",
        "options": [
            {"label": "A", "text": "Ibu sangat dianjurkan untuk TETAP MENYUSUI secara rutin dari kedua payudara (atau memompa ASI), karena pengosongan payudara adalah kunci penyembuhan mastitis dan Kloksasilin aman bagi bayi (Hale L1/L2)", "correct": True},
            {"label": "B", "text": "ASI harus segera dibuang dan bayi beralih permanen ke susu kedelai", "correct": False},
            {"label": "C", "text": "Payudara yang meradang harus diikat kencang tanpa menyusui", "correct": False},
            {"label": "D", "text": "Menyusui hanya boleh dilakukan setelah terapi antibiotik selesai 14 hari", "correct": False}
        ],
        "explanation": "Mastitis terjadi akibat stasis ASI dan infeksi sekunder Staphylococcus aureus. Mengosongkan payudara secara tuntas melalui proses menyusui yang sering adalah terapi utama. Antibiotik beta-laktam anti-stafilokokus (Kloksasilin/Dikloksasilin/Sefaleksin) sangat aman dalam laktasi."
    },
    {
        "id": "q60",
        "category": "Ibu Menyusui",
        "question": "Kapan strategi Waktu Minum Obat Tepat Setelah Menyusui (Timing of Dose Administration) paling efektif diterapkan oleh ibu menyusui?",
        "options": [
            {"label": "A", "text": "Untuk obat-obatan dengan waktu paruh pendek (t1/2 singkat), sehingga konsentrasi obat dalam darah ibu telah melewati kadar puncak (Cmax) dan turun ke kadar terendah sebelum jadwal sesi menyusui berikutnya", "correct": True},
            {"label": "B", "text": "Hanya untuk sediaan salep kulit", "correct": False},
            {"label": "C", "text": "Untuk semua obat extended-release ber-t1/2 48 jam", "correct": False},
            {"label": "D", "text": "Agar obat langsung mengalir ke puting susu dalam 1 menit", "correct": False}
        ],
        "explanation": "Meminum obat segera setelah selesai menyusui atau sebelum periode tidur panjang bayi memaksimalkan jeda waktu eliminasi sebelum jadwal menyusui berikutnya. Kadar obat di ASI mengikuti kadar plasma bebas ibu, sehingga saat menyusu kembali kadar obat sudah berada di titik terendah."
    }
]

with open("/tmp/quiz_60.json", "w") as f:
    json.dump(questions, f, indent=2)

print(f"Generated {len(questions)} HOTS questions successfully!")
