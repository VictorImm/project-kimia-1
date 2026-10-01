# 💊 Clinical Pharmacy Interactive Hub (Gen Z Edition)

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Deploy-success?style=for-the-badge&logo=github)](https://victorimm.github.io/project-kimia-1/)
[![UKWMS Pharmacy](https://img.shields.io/badge/Fakultas%20Farmasi-UKWMS%202026%2F2027-blue?style=for-the-badge&logo=mortarboard)](https://wima.ac.id)
[![HOTS Questions](https://img.shields.io/badge/HOTS%20Vignettes-90%20Questions-purple?style=for-the-badge&logo=target)](https://victorimm.github.io/project-kimia-1/)

Pusat media pembelajaran interaktif Farmasi Klinik Terintegrasi berbasis silabus dan materi resmi Fakultas Farmasi Universitas Katolik Widya Mandala Surabaya (UKWMS).

---

## 🌐 Live Demo & Hosting

- **Portal Utama:** [https://victorimm.github.io/project-kimia-1/](https://victorimm.github.io/project-kimia-1/)
- **Modul 01 (Populasi Khusus):** [https://victorimm.github.io/project-kimia-1/farklin-populasi-khusus.html](https://victorimm.github.io/project-kimia-1/farklin-populasi-khusus.html)
- **Modul 02 (DILI & DIKI):** [https://victorimm.github.io/project-kimia-1/dili-diki.html](https://victorimm.github.io/project-kimia-1/dili-diki.html)

---

## 📁 Struktur Direktori

```text
project-kimia-1/
├── 🏠 index.html                   # Homepage Dashboard Portal (Track Selector & Quick Calculators)
├── 💊 farklin-populasi-khusus.html # Modul 01: Penyesuaian Dosis Populasi Khusus (Dr. apt. Ivonne Soeliono)
├── 🛡️ dili-diki.html               # Modul 02: Monitoring Keamanan DILI & DIKI (Apt. Vania Denise Djunaidy)
├── 🎨 styles.css                   # Custom CSS Design Tokens, Gradients, and Card Animations
├── ⚙️ app.js                       # Engine Interaktif Modul 01 (PK Curves, 4 Kalkulator, 60 Soal HOTS)
├── ⚡ dili-diki.js                 # Engine Interaktif Modul 02 (R-Ratio, OAT Stepper, Glomerular Sim, 30 Soal HOTS)
├── 📁 data/                        # Datasets & Structured Content
│   ├── lectureData.js              # Dataset Modul 01 (Chapters, Formulas, 60 HOTS Questions)
│   └── diliDikiData.js             # Dataset Modul 02 (Mechanisms, R-Ratio, 30 HOTS Questions)
├── 📁 scripts/                     # Helper & Builder Utilities
│   └── build_quiz.py               # Data Generation and Verification Utilities
├── 📁 .github/workflows/           # CI/CD Automated Pipelines
│   └── static.yml                  # GitHub Actions workflow for GitHub Pages
├── 📄 .gitignore                   # Git ignore for raw files and artifacts
├── 📄 .nojekyll                    # Disable Jekyll processing on GitHub Pages
└── 📄 README.md                    # Project Documentation
```

---

## 📚 Ringkasan Modul Pembelajaran

### 1. 💊 Modul 01: Penyesuaian Dosis pada Populasi Khusus
* **Dosen Pengampu:** Dr. apt. Ivonne Soeliono, M.Farm.Klin.
* **Topik Utama:**
  - Bab 1: Prinsip Farmakokinetik Klinis ($V_d$, $Cl$, $t_{1/2}$, $k$, $C_{max}$, $C_{min}$, $AUC$)
  - Bab 2: Gangguan Ginjal (Cockcroft-Gault, Dettli Formula $Q$, Dialisis)
  - Bab 3: Gangguan Hati & Sirosis (Klasifikasi Child-Pugh Score A/B/C)
  - Bab 4: Geriatri (Penuaan Organ, Kriteria AGS Beers 2023)
  - Bab 5: Pediatri & Neonatus (Organ Immaturity, Gray Baby, Bilirubin Kernicterus)
  - Bab 6: Ibu Hamil & Menyusui (Kategori FDA / Briggs, Relative Infant Dose Hale $<10\%$)
* **Fitur Interaktif:**
  - Simulasi Kurva PK Dinamis (Chart.js)
  - 4 Lab Kalkulator Klinis (CrCl, Child-Pugh, RID, Dettli $Q$)
  - Studi Kasus Grand Round Ny. K (Geriatri Sepsis)
  - Bank 60 Soal HOTS Interaktif dengan Matriks Navigasi

---

### 2. 🛡️ Modul 02: Monitoring Keamanan Terapi: DILI & DIKI
* **Dosen Pengampu:** Apt. Vania Denise Djunaidy, S.Farm., M.Farm.Klin.
* **Topik Utama:**
  - Part 1: Drug-Induced Liver Injury (DILI)
    - 5 Pilar Patogenesis (Stres Oksidatif NAPQI, BSEP Kolestatik, Hapten/DRESS, Mitokondria Valproat, Intrinsic vs Idiosyncratic)
    - Kriteria Rasio $R$ ($R \ge 5$ Hepatoseluler, $R \le 2$ Kolestatik, $2 < R < 5$ Campuran)
    - Sentinel Hy's Law ($\text{ALT} \ge 3\times\text{ULN} + \text{TBil} \ge 2\times\text{ULN}$, Mortalitas 10–50%)
    - Protokol Reintroduksi OAT Lini Pertama ($R \rightarrow H \rightarrow Z$ & Perpanjangan Rejimen 9 Bulan)
  - Part 2: Drug-Induced Kidney Injury (DIKI)
    - Hemodynamically Mediated AKI (Tonus Aferen via $PGE_2$ vs Eferen via $AT\text{-}II$)
    - "Triple Whammy" (Diuretik + NSAID + ACEI/ARB)
    - Efek SGLT2 Inhibitor (*Tubuloglomerular Feedback* & *eGFR Dip*)
    - Toksisitas Struktural: ATN Aminoglikosida Kationik, Nefropati Kristal (Asiklovir/MTX), Nefropati Osmotik
    - Kriteria KDIGO AKI Staging 1–3 & Multimodal Nephrotoxin Stewardship
* **Fitur Interaktif:**
  - R-Ratio DILI Calculator & Hy's Law Alert
  - Interactive OAT Rechallenge Stepper
  - Glomerular Hemodynamic Autoregulation Engine
  - KDIGO AKI Stager & Stewardship Framework
  - Bank 30 Soal HOTS Kasus Klinis

---

### 3. 🚀 Modul 03 (Expansion Ready): TDM & Interaksi Obat
Slot modul ketiga disiapkan untuk ekspansi materi *Therapeutic Drug Monitoring* (Vankomisin, Aminoglikosida, Fenitoin, Digoksin) dan Interaksi Obat CYP450 / P-gp.

---

## 📖 Referensi Standar Baku
1. **Shargel, L. & Yu, A.B.C.** *Applied Biopharmaceutics & Pharmacokinetics*, 7th/8th Ed.
2. **DiPiro, J.T., et al.** *Pharmacotherapy: A Pathophysiologic Approach*, 11th/12th Ed.
3. **American Geriatrics Society (AGS).** *2023 Updated AGS Beers Criteria® for Potentially Inappropriate Medication Use in Older Adults*.
4. **Briggs, G.G., et al.** *Drugs in Pregnancy and Lactation: A Reference Guide to Fetal and Neonatal Risk*, 12th Ed.
5. **Hale, T.W.** *Medications and Mothers' Milk*, 2023.
6. **KDIGO (Kidney Disease: Improving Global Outcomes).** *Clinical Practice Guideline for Acute Kidney Injury*.
7. **Danan, G. & Teschke, R.** *RUCAM in Drug and Herb Induced Liver Injury: The Update*, Int J Mol Sci, 2016.
8. **Materi Kuliah Resmi Farmasi Klinik Terintegrasi UKWMS 2026/2027** (Dr. apt. Ivonne Soeliono & Apt. Vania Denise Djunaidy).

---

## 💻 Tech Stack
- **Frontend Architecture:** Zero-Build Static Web (HTML5, Bootstrap 5, Tailwind CDN, KaTeX, Chart.js, FontAwesome 6).
- **Hosting & CI/CD:** GitHub Actions + GitHub Pages (`.nojekyll`).
- **Compatibility:** Full responsive on Desktop, Tablet, and Mobile.
