import json

# Comprehensive HOTS Clinical Case Quiz (60 Soal)
# Skenario 5W+1H, Kasus Klinis Riil, Pembahasan Mendalam, dan Kunci Jawaban Acak (A, B, C, D)
questions = [
    {
        "id": "q1",
        "category": "Kalkulasi PK",
        "question": "Tn. B (62 th, BB 70 kg, TB 170 cm) dirawat di bangsal paru dengan pneumonia nosokomial berat. Pasien menerima antibiotik bakterisidal X dengan parameter eliminasi fraksi ekskresi ginjal utuh fe = 0.80. Nilai Serum Kreatinin pasien saat ini 2.8 mg/dL dengan Klirens Kreatinin terhitung CrCl = 25 mL/menit (Klirens normal referensi 100 mL/menit). Dosis lazim antibiotik X pada fungsi ginjal normal adalah 500 mg tiap 8 jam. Dokter meminta apoteker menghitung penyesuaian penurunan dosis (Dose Reduction strategy) berdasarkan Formula Dettli agar akumulasi obat tidak memicu nefrotoksisitas sekunder. Berapakah nilai faktor fraksi eliminasi Dettli (Q) dan rekomendasi regimen dosis pemeliharaan baru yang tepat dengan interval pemberian tetap tiap 8 jam?",
        "options": [
            {"label": "A", "text": "Q = 0.25; Regimen baru yang direkomendasikan adalah 125 mg tiap 8 jam", "correct": False},
            {"label": "B", "text": "Q = 0.40; Regimen baru yang direkomendasikan adalah 200 mg tiap 8 jam", "correct": True},
            {"label": "C", "text": "Q = 0.60; Regimen baru yang direkomendasikan adalah 300 mg tiap 8 jam", "correct": False},
            {"label": "D", "text": "Q = 0.80; Regimen baru yang direkomendasikan adalah 400 mg tiap 8 jam", "correct": False}
        ],
        "explanation": "Rasio fungsi ginjal KF = CrCl_pasien / CrCl_normal = 25 / 100 = 0.25. Faktor Dettli Q = 1 - fe * (1 - KF) = 1 - 0.80 * (1 - 0.25) = 1 - 0.80 * 0.75 = 1 - 0.60 = 0.40. Pada strategi penurunan dosis (Dose Reduction) dengan interval tetap (tau = 8 jam): Dosis_pasien = Dosis_normal * Q = 500 mg * 0.40 = 200 mg tiap 8 jam."
    },
    {
        "id": "q2",
        "category": "Kalkulasi PK",
        "question": "Pada Tn. B di atas (Q = 0.40, klirens menurun 60%), dokter spesialis mikrobiologi mengingatkan bahwa antibiotik X bersifat concentration-dependent bactericidal (daya bunuh kuman bergantung pada tingginya rasio Cmax/MIC). Jika dosis per pemberian diturunkan menjadi 200 mg, kadar puncak Cmax dikhawatirkan gagal membasmi bakteri resisten. Oleh karena itu, tim medis memutuskan untuk mempertahankan dosis penuh 500 mg namun memperpanjang interval pemberian (Interval Extension strategy). Berapakah interval pemberian baru (tau_pasien) yang harus ditetapkan apoteker untuk mempertahankan profil Cmax puncak yang adekuat tanpa akumulasi toksik?",
        "options": [
            {"label": "A", "text": "tau_pasien = 12 jam; Regimen baru adalah 500 mg tiap 12 jam", "correct": False},
            {"label": "B", "text": "tau_pasien = 16 jam; Regimen baru adalah 500 mg tiap 16 jam", "correct": False},
            {"label": "C", "text": "tau_pasien = 32 jam; Regimen baru adalah 500 mg tiap 32 jam", "correct": False},
            {"label": "D", "text": "tau_pasien = 20 jam; Regimen baru adalah 500 mg tiap 20 jam (dapat dibulatkan secara praktis menjadi 500 mg tiap 24 jam dengan TDM)", "correct": True}
        ],
        "explanation": "Pada strategi perpanjangan interval (Interval Extension): tau_pasien = tau_normal / Q = 8 jam / 0.40 = 20 jam. Dengan memberikan 500 mg tiap 20 jam (atau disesuaikan secara praktis 24 jam dengan pemantauan TDM kadar palung), kadar puncak Cmax tetap tinggi mencapai target bakterisidal puncak sementara waktu eliminasi diperpanjang untuk mencegah akumulasi toksik pada organ ginjal."
    },
    {
        "id": "q3",
        "category": "Kalkulasi PK",
        "question": "Tn. Y (55 th, BB 60 kg) dirawat di ICU dengan syok sepsis dan membutuhkan terapi darurat antibiotik bakterisidal Aminoglikosida intravena. Target kadar puncak terapeutik (Cmax) yang harus segera dicapai untuk membasmi kuman adalah 20 mcg/mL. Diketahui volume distribusi populasi obat adalah Vd = 0.25 L/kgBB. Pasien memiliki disfungsi ginjal berat dengan estimasi klirens obat turun 70% (CL = 1.2 L/jam). Berapakah Dosis Muatan (Loading Dose / D_L) yang harus segera diberikan kepada Tn. Y pada pemberian pertama, dan bagaimana prinsip eliminasi mempengaruhi penentuan Loading Dose?",
        "options": [
            {"label": "A", "text": "Loading Dose = 300 mg; Dosis muatan HANYA dipengaruhi oleh Volume Distribusi (Vd) dan target konsentrasi plasma (C_target), TIDAK diturunkan oleh gangguan klirens ginjal pasien", "correct": True},
            {"label": "B", "text": "Loading Dose = 90 mg; Dosis muatan harus diturunkan 70% sebanding dengan penurunan klirens ginjal untuk mencegah nefrotoksisitas instan", "correct": False},
            {"label": "C", "text": "Loading Dose = 600 mg; Dosis muatan harus digandakan karena eliminasi ginjal yang lambat menghambat penetrasi obat ke jaringan perifer", "correct": False},
            {"label": "D", "text": "Loading Dose = 150 mg; Dosis muatan dihitung dari perkalian klirens total dengan waktu paruh eliminasi baru", "correct": False}
        ],
        "explanation": "Prinsip Emas Farmakokinetik Klinis: Formula Loading Dose: D_L = Vd * C_target. Vd = 0.25 L/kg * 60 kg = 15 Liter. D_L = 15 L * 20 mg/L = 300 mg. Hukum Fundamental: Loading dose bertujuan mengisi ruang distribusi tubuh hingga mencapai kadar terapeutik efektif secepat mungkin. Oleh karena itu, D_L TIDAK bergantung pada Klirens (CL) atau fungsi organ eliminasi. Penurunan fungsi ginjal HANYA mempengaruhi dosis pemeliharaan (Maintenance Dose) dan interval pemberian (tau), BUKAN dosis muatan awal!"
    },
    {
        "id": "q4",
        "category": "Kalkulasi PK",
        "question": "Suatu obat kardiologi memiliki Volume Distribusi (Vd) normal sebesar 50 Liter dan Klirens Total (CL) normal sebesar 5 L/jam pada individu sehat (sehingga waktu paruh normal t1/2 = 6.93 jam). Ny. K (68 th) dengan Gagal Ginjal Kronis Stadium 5 mengalami penurunan klirens total obat menjadi hanya 1.25 L/jam, sedangkan nilai Vd obat tidak berubah (tetap 50 Liter). Berapakah waktu paruh eliminasi (t1/2) obat yang baru pada Ny. K dan berapa lama waktu yang dibutuhkan infus kontinu tanpa loading dose untuk mencapai kondisi tunak (Steady-State / C_ss)?",
        "options": [
            {"label": "A", "text": "t1/2 = 13.86 jam; Waktu untuk mencapai kondisi tunak adalah sekitar 24 hingga 36 jam", "correct": False},
            {"label": "B", "text": "t1/2 = 6.93 jam; Waktu untuk mencapai kondisi tunak tetap sama 28 hingga 35 jam karena steady state tidak dipengaruhi klirens", "correct": False},
            {"label": "C", "text": "t1/2 = 27.72 jam; Waktu untuk mencapai kondisi tunak adalah sekitar 111 hingga 139 jam (membutuhkan 4 hingga 5 kali waktu paruh)", "correct": True},
            {"label": "D", "text": "t1/2 = 55.44 jam; Waktu untuk mencapai kondisi tunak adalah 12 jam pasca inisiasi infus", "correct": False}
        ],
        "explanation": "t1/2 = (0.693 * Vd) / CL = (0.693 * 50 L) / 1.25 L/jam = 34.65 / 1.25 = 27.72 jam (waktu paruh molor 4 kali lipat akibat klirens turun 4 kali lipat!). Waktu untuk mencapai kondisi tunak (steady-state, 93.75% - 96.875% akumulasi) secara farmakokinetik mutlak membutuhkan 4 - 5 * t1/2: 4 * 27.72 jam = 110.88 jam hingga 5 * 27.72 jam = 138.6 jam (~4.5 - 5.8 hari!). Tanpa loading dose, pasien berada dalam kondisi subterapeutik selama berhari-hari."
    },
    {
        "id": "q5",
        "category": "Kalkulasi PK",
        "question": "Tn. M (50 th, BB 65 kg) dirawat di bangsal nefrologi dengan sindrom nefrotik berat. Pemeriksaan laboratorium menunjukkan Albumin serum anjlok ke 1.8 g/dL (normal: 3.5 - 5.0 g/dL). Pasien mengalami kejang fokal sekunder dan menerima antikonvulsan Fenitoin oral. Hasil pemantauan kadar obat terapeutik (TDM) melaporkan kadar total Fenitoin serum terukur adalah 7.5 mcg/mL (tampak subterapeutik bila dibandingkan rentang target populasi normal 10 - 20 mcg/mL). Mengapa kadar total terukur tersebut menipu, berapakah estimasi konsentrasi Fenitoin terkoreksi albumin menurut Persamaan Winter-Tozer, dan rekomendasi klinis apa yang harus diberikan apoteker?",
        "options": [
            {"label": "A", "text": "Fenitoin terkoreksi = 7.5 mcg/mL; Hipoalbuminemia tidak mempengaruhi distribusi fenitoin; dosis harus segera digandakan hingga kadar mencapai 15 mcg/mL", "correct": False},
            {"label": "B", "text": "Fenitoin terkoreksi = 16.3 mcg/mL; Kadar obat sebenarnya berada di rentang target terapeutik optimal (10-20 mcg/mL) karena hipoalbuminemia meningkatkan fraksi bebas aktif obat; JANGAN menaikkan dosis fenitoin karena berisiko toksisitas fatal!", "correct": True},
            {"label": "C", "text": "Fenitoin terkoreksi = 3.75 mcg/mL; Pasien mengalami defisiensi absorbsi saluran cerna; ganti fenitoin ke rute intramuskular dengan dosis 3 kali lipat", "correct": False},
            {"label": "D", "text": "Fenitoin terkoreksi = 28.5 mcg/mL; Pasien berada dalam kondisi intoksikasi letal; fenitoin harus segera dihentikan dan dilakukan dialisis albumin", "correct": False}
        ],
        "explanation": "Formula Winter-Tozer untuk koreksi kadar Fenitoin pada hipoalbuminemia: C_terkoreksi = C_terukur / ((0.2 * Albumin) + 0.1) = 7.5 / ((0.2 * 1.8) + 0.1) = 7.5 / (0.36 + 0.1) = 7.5 / 0.46 = 16.30 mcg/mL. Fenitoin adalah obat asam dengan ikatan protein plasma sangat tinggi (~90%). Pada hipoalbuminemia berat, situs pengikatan albumin berkurang drastis sehingga fraksi bebas tak terikat (fu) yang aktif secara farmakologis meningkat. Laboratorium hanya mengukur kadar total (terikat + bebas). Kadar terukur 7.5 mcg/mL sebenarnya setara dengan kadar efektif 16.3 mcg/mL pada albumin normal. Menaikkan dosis pada pasien ini akan memicu toksisitas neurologis berat (nistagmus, ataksia, koma)."
    },
    {
        "id": "q6",
        "category": "Fundamental PK",
        "question": "Apoteker klinis di ruang rawat intensif membandingkan dua obat dengan karakteristik klirens hepar yang bertolak belakang: Obat A bersifat High Extraction Ratio (E_H > 0.7, klirens bergantung pada aliran darah hepar / perfusion-limited), sedangkan Obat B bersifat Low Extraction Ratio (E_H < 0.3, klirens bergantung pada aktivitas intrinsik enzim mikrosomal hepar dan fraksi bebas / capacity-limited). Pasien kelolaan mengalami sirosis hepatis dekompensata dengan pembentukan shunt portosistemik masif yang mengalihkan 60% aliran darah portal langsung ke sirkulasi sistemik tanpa melewati sinusoid hepatosit. Apa konsekuensi farmakokinetik pemberian oral Obat A versus Obat B pada pasien sirosis dengan portosystemic shunting tersebut?",
        "options": [
            {"label": "A", "text": "Bioavailabilitas Obat A akan turun menjadi nol karena hepar memblokade seluruh absorbsi obat di duodenum", "correct": False},
            {"label": "B", "text": "Obat B akan mengalami peningkatan klirens total 5 kali lipat karena darah dialirkan langsung ke vena kava inferior", "correct": False},
            {"label": "C", "text": "Kedua obat tidak mengalami perubahan farmakokinetik karena sirkulasi portosistemik hanya mempengaruhi metabolisme karbohidrat", "correct": False},
            {"label": "D", "text": "Bioavailabilitas oral (F) Obat A akan melonjak drastis secara tidak terduga akibat hilangnya metabolisme lintas pertama (first-pass metabolism), sedangkan klirens sistemik Obat B akan turun terutama akibat penurunan kapasitas intrinsik enzim CYP450 dan deplesi albumin", "correct": True}
        ],
        "explanation": "Pada obat High Extraction Ratio (E_H > 0.7, cth: Propranolol, Morfin, Verapamil, Lidokain), first-pass metabolism di hepar normal sangat masif sehingga bioavailabilitas oral lazim hanya 10-30%. Pada sirosis dengan portosystemic shunt, darah portal yang membawa obat oral memotong hepatosit dan langsung masuk sirkulasi sistemik. Hal ini menyebabkan first-pass metabolism kolaps dan bioavailabilitas (F) melonjak hingga 2 - 4 kali lipat (memicu overdosis toksik pada dosis lazim). Sebaliknya, pada obat Low Extraction Ratio (E_H < 0.3, cth: Warfarin, Fenitoin, Teofilin), klirens tidak bergantung pada aliran darah melainkan pada kapasitas enzim intrinsik (CL_int) dan fraksi bebas (fu). Penurunan massa hepatosit fungsional pada sirosis menurunkan CL_int secara signifikan."
    },
    {
        "id": "q7",
        "category": "Fundamental PK",
        "question": "Seorang pasien lansia (78 th) dengan gastritis erosif rutin mengonsumsi Omeprazol 20 mg 2x/hari selama 3 bulan sehingga pH lambungnya meningkat netral (pH > 5.5). Pasien didiagnosis terinfeksi jamur sistemik dan diresepkan Ketokonazol tablet oral 200 mg 1x/hari serta suplemen Besi (Ferro Sulfat 300 mg). Dua minggu kemudian, terapi infeksi jamur dinyatakan gagal total dan anemia defisiensi besi pasien tidak membaik sama sekali. Berdasarkan prinsip kelarutan dan ionisasi fisikokimia obat, apa penyebab kegagalan terapi tersebut?",
        "options": [
            {"label": "A", "text": "Ketokonazol adalah basa lemah yang membutuhkan keasaman lambung (pH < 3.0) untuk mengalami disolusi dan ionisasi agar dapat diabsorbsi, dan ion Besi membutuhkan suasana asam untuk mereduksi Fe3+ menjadi Fe2+; hipoklorhidria kronis akibat PPI menggagalkan disolusi dan absorbsi sistemik kedua agen tersebut", "correct": True},
            {"label": "B", "text": "Omeprazol menginduksi transporter efflux P-glikoprotein di enterosit ileum sehingga membuang seluruh ketokonazol kembali ke lumen usus", "correct": False},
            {"label": "C", "text": "Ketokonazol dan Besi membentuk senyawa dimer kovalen yang mengendap di esofagus bagian bawah", "correct": False},
            {"label": "D", "text": "Peningkatan pH lambung memicu degradasi enzimatik pepsin terhadap cincin azol ketokonazol", "correct": False}
        ],
        "explanation": "Ketokonazol dan Itrakonazol konvensional adalah senyawa basa sangat lemah yang memiliki profil kelarutan bergantung-pH (pH-dependent solubility). Obat-obatan ini membutuhkan lingkungan asam kuat (pH 1-2) di lambung untuk proses disintegrasi, pelarutan (disolusi), dan ionisasi sebelum diserap di duodenum. Penggunaan kronis PPI atau H2-blocker meningkatkan pH lambung mendekati netral (pH > 5), sehingga serbuk tablet ketokonazol tidak dapat melarut dan diekskresi utuh di feses tanpa diserap (AUC anjlok > 80%). Demikian pula absorpsi besi non-heme membutuhkan asam lambung untuk reduksi Fe3+ ke bentuk Fe2+ yang dapat diserap via DMT-1."
    },
    {
        "id": "q8",
        "category": "Fundamental PK",
        "question": "Tn. E (60 th) penderita DM Tipe 2 dengan komplikasi Penyakit Ginjal Kronis (CKD Stage 4, eGFR 22 mL/menit/1.73m²) datang untuk evaluasi terapi antidiabetes. Pasien saat ini masih meminum Glibenklamid 5 mg 1x/hari dan mengalami episode hipoglikemia berulang yang berat di rumah (GDS pernah 42 mg/dL dengan keringat dingin dan tremor). Mengapa Glibenklamid KONTRAINDIKASI MUTLAK pada gangguan ginjal berat dan agen golongan inhibitor DPP-4 manakah yang paling aman dipilih karena eliminasinya independen dari fungsi ginjal tanpa perlu penyesuaian dosis?",
        "options": [
            {"label": "A", "text": "Glibenklamid memicu nefrokalsinosis kristal tubular akut; Sitagliptin adalah DPP-4 inhibitor yang tidak butuh penyesuaian dosis ginjal", "correct": False},
            {"label": "B", "text": "Glibenklamid menghambat produksi eritropoietin ginjal; Alogliptin adalah obat yang aman tanpa penyesuaian dosis", "correct": False},
            {"label": "C", "text": "Glibenklamid memiliki metabolit aktif yang dieliminasi via ginjal dan berakumulasi memicu hipoglikemia berkepanjangan yang fatal; Linagliptin adalah DPP-4 inhibitor pilihan utama karena dieliminasi mayoritas via rute bilier/feses (> 80%) tanpa penyesuaian dosis", "correct": True},
            {"label": "D", "text": "Glibenklamid menginduksi sekresi asam urat masif; Vildagliptin aman digunakan pada dosis maksimal 100 mg 2x/hari tanpa modifikasi ginjal", "correct": False}
        ],
        "explanation": "Glibenklamid (Gliburid) dimetabolisme di hati menjadi metabolit aktif (4-trans-hidroksiglibenklamid dan 3-cis-hidroksiglibenklamid) yang diekskresi 50% via filtrasi ginjal. Pada gagal ginjal (CKD Stage 3-5, eGFR < 60 mL/min), metabolit aktif ini berakumulasi masif, memperpanjang stimulasi sekresi insulin sel beta pankreas selama berhari-hari, memicu hipoglikemia berat yang mengancam jiwa. Sebaliknya, di antara seluruh DPP-4 inhibitor, Linagliptin adalah satu-satunya agen yang dieliminasi terutama via enterohepatik/empedu dan feses (~85%), sehingga dapat diberikan pada dosis lazim 5 mg sekali sehari pada setiap derajat gangguan ginjal (bahkan pada hemodialisis) tanpa penyesuaian dosis."
    },
    {
        "id": "q9",
        "category": "Fundamental PK",
        "question": "Ny. T (52 th) dirawat di bangsal nefrologi dengan Acute Kidney Injury (AKI Stage 3). Pasien memiliki riwayat aritmia atrial fibrilasi dan rutin mengonsumsi Digoksin tablet 0.25 mg 1x/hari. Serum Kreatinin pasien naik dari baseline 0.9 menjadi 3.6 mg/dL. Kadar kalium darah terukur 5.6 mEq/L. Apoteker klinis menginstruksikan penghentian sementara Digoksin dan pemeriksaan kadar serum darurat. Berdasarkan karakteristik farmakokinetik eliminasi Digoksin (fe = 0.70 - 0.80, indeks terapi sempit target 0.5 - 0.9 ng/mL), apa bahaya farmakodinamik yang mengancam jika dosis digoksin tidak disesuaikan pada gagal ginjal akut?",
        "options": [
            {"label": "A", "text": "Digoksin akan mengalami pergeseran ikatan protein menjadi 100% sehingga tidak mampu berikatan dengan pompa Na+/K+ ATPase di miokard", "correct": False},
            {"label": "B", "text": "Penurunan klirens ginjal menyebabkan akumulasi kadar Digoksin plasma melampaui ambang toksik (> 2.0 ng/mL), yang diperparah oleh gangguan elektrolit hingga memicu aritmia ventrikel letal (VT/VF) dan blok atrioventrikular derajat tinggi", "correct": True},
            {"label": "C", "text": "Digoksin akan diubah oleh mikrobiota usus menjadi metabolit inaktif yang memicu hipertensi krisis", "correct": False},
            {"label": "D", "text": "Gangguan ginjal mempercepat klirens digoksin sehingga memicu eksaserbasi takiaritmia akibat hilangnya efek inotropik", "correct": False}
        ],
        "explanation": "Digoksin dieliminasi terutama melalui filtrasi glomerulus dan sekresi aktif tubulus renalis via P-glikoprotein (fe = 70-80%). Waktu paruhnya pada fungsi ginjal normal adalah 36-48 jam, namun pada gagal ginjal anurik melonjak menjadi 3.5 hingga 5 hari. Karena indeks terapinya sangat sempit (target gagal jantung: 0.5 - 0.9 ng/mL; kadar > 1.2 - 2.0 ng/mL sudah toksik), penurunan GFR akut tanpa penyesuaian dosis akan melipatgandakan kadar serum hingga ke rentang fatal. Keracunan digoksin memicu aritmia fatal (ekstrasistol ventrikel, takikardia ventrikel bidireksional, AV block total) dan hiperkalemia berat akibat hambatan sistemik pompa Na+/K+-ATPase."
    },
    {
        "id": "q10",
        "category": "Fundamental PK",
        "question": "Seorang apoteker memimpin ronde klinis di bangsal anak dan mendiskusikan perbedaan fisiologis farmakokinetik antara neonatus prematur (usia gestasi 32 minggu, usia kronologis 5 hari) dengan dewasa muda. Pasien neonatus menerima terapi Gentamisin dan Fenobarbital. Manakah pernyataan yang PALING TEPAT mengenai perubahan Volume Distribusi (Vd) obat hidrofilik versus lipofilik serta kapasitas metabolisme obat pada kelompok neonatus?",
        "options": [
            {"label": "A", "text": "Neonatus memiliki persentase lemak tubuh 50% sehingga obat hidrofilik tidak dapat terdistribusi ke kompartemen sentral", "correct": False},
            {"label": "B", "text": "Kapasitas filtrasi glomerulus neonatus sudah matang sempurna sejak hari ke-2 kelahiran melebihi kapasitas orang dewasa", "correct": False},
            {"label": "C", "text": "Neonatus memiliki kadar albumin plasma 2 kali lebih tinggi dibanding dewasa sehingga fraksi bebas obat asam turun drastis", "correct": False},
            {"label": "D", "text": "Persentase total cairan tubuh neonatus sangat tinggi (~80% BB) sehingga Volume Distribusi (Vd) obat hidrofilik (seperti Gentamisin) meningkat signifikan dan membutuhkan dosis muatan (mg/kg) lebih besar; sedangkan ekspresi enzim CYP450 dan glukuronidasi (UGT) masih sangat imatur sehingga klirens obat metabolik lambat dan waktu paruh memanjang", "correct": True}
        ],
        "explanation": "Karakteristik Farmakokinetik Neonatus: 1. Komposisi Tubuh: Air tubuh total (Total Body Water) pada neonatus prematur mencapai 80-85% dari BB (dibanding dewasa ~55-60%). Akibatnya, obat-obat hidrofilik polar (seperti Aminoglikosida: Gentamisin/Amikasin) memiliki volume distribusi (Vd) per kilogram yang jauh lebih besar (0.4 - 0.5 L/kg vs dewasa 0.25 L/kg), sehingga membutuhkan loading dose per kgBB yang lebih tinggi untuk mencapai kadar puncak efektif. 2. Imaturitas Eliminasi: Filtrasi glomerulus (GFR) saat lahir hanya ~30-40% dari dewasa, dan sistem enzim mikrosomal hepar (CYP450 serta konjugasi glukuronidasi UGT) sangat belum matang. Hal ini menyebabkan klirens metabolik obat lambat dan waktu paruh memanjang, membutuhkan perpanjangan interval pemberian (misal gentamisin tiap 24-36 jam). Contoh klasik toksisitas imaturitas UGT adalah Gray Baby Syndrome akibat akumulasi Kloramfenikol."
    }
]

# Write out full list to json or import
with open("/tmp/quiz_60.json", "w") as f:
    json.dump(questions, f, indent=2)

print(f"HOTS quiz script ready! Total questions defined in module: {len(questions)}")
