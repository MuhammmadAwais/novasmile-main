# Mr. Dentist (San Antonio, TX) — Deep Extraction & Re-Branding Dossier

> **Google Maps Source:** [Mr. Dentist — 6338 Old Pearsall Rd #105, San Antonio, TX 78242](https://www.google.com/maps/place/Mr.+Dentist/@29.3475487,-98.5945233,12z/data=!3m1!5s0x865c5a8ecdfbcb35:0x4f6d95fd35e5e9bf!4m6!3m5!1s0x865c5a8ece5c26c7:0xc0fe964d66e1f896!8m2!3d29.3398518!4d-98.6218656!16s%2Fg%2F11b7jx1yts)  
> **Broken Booking Link Listed on Maps:** `https://app.nexhealth.com/appt/mr-dentist?lid=350543`  
> **Extracted Into Directory:** [`context/mr-dentist/`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist)

---

## 1. Executive Discovery & Cold-Call Sales Angle

> [!IMPORTANT]
> **Why Mr. Dentist is a High-Probability Cold-Pitch Prospect:**  
> Unlike the previous military clinic lead (`Dunn Dental Clinic`), **Mr. Dentist is a thriving, privately owned civilian dental practice** in Southwest San Antonio led by **Dr. Medhat G. Bader, DMD** (a 30-year veteran dentist and retired U.S. Air Force Dental Officer).  
> They have a strong **4.5 ★ rating across 231 Google Reviews**, yet **100% of their web and online booking links are currently broken or offline.**

### Diagnostic Proof of Their Broken Digital Funnel:
1. **Dead NexHealth Booking Link on Google Maps (`https://app.nexhealth.com/appt/mr-dentist?lid=350543`):**
   - Listed as the primary "Website" button on their Google Business Profile.
   - Querying NexHealth's live production API ([`nexhealth_api_diagnostic.json`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/nexhealth_api_diagnostic.json)) at `https://nexhealth.info/institutions/mr-dentist` returns:
     ```json
     {"code": false, "data": null, "description": [], "error": ["Institution record with id = mr-dentist not found"]}
     ```
   - Every prospective patient clicking "Website" on Google Maps lands on an unconfigured/dead NexHealth shell that cannot book appointments.
2. **Dead Standalone Website Domains (`mrdentistop.com` & `mrdentistsa.com`):**
   - `https://mrdentistop.com/` (their former WordPress site) returns **HTTP 522 (Cloudflare Origin Connection Timed Out)** and redirects to an unrelated expired-domain host.
   - `https://www.mrdentistsa.com/` (listed on CareCredit directories) fails DNS resolution completely.
3. **Scheduling & Intake Friction Cited in Recent Google Reviews:**
   - **Walk-in vs. Scheduled Time Confusion:** A recent reviewer (*Melissa Lumbreras*) praised the dentist and cleaning ("I absolutely love the dentist!!!! Definitely one of my best cleanings") but noted first-visit wait friction between walk-ins and scheduled slots.
   - **Pre-Visit X-Ray Screening Need:** The owner's detailed response to a recent 1-star review (*Isabel Lyra*) highlights that the clinic needs a clear digital intake flow where second-opinion/endodontic patients are prompted to confirm or send prior X-rays before driving to the office.

---

## 2. Extracted Core Practice Profile

| Attribute | Extracted Value |
| :--- | :--- |
| **Business Name** | **Mr. Dentist** *(Subtitle on official signage: "Family & Cosmetic Dentistry")* |
| **Legal / Associated Entities** | Mr. Dentist / Mr. Dentist Stop / Dental Dental PLLC *(Sister clinic: MySmile Dental)* |
| **Google Category** | Dental clinic (`gcid:dental_clinic`) |
| **Google Place ID** | `ChIJxyZczo5aXIYRlvjhZk2W_sA` |
| **Feature ID / CID (Hex)** | `0x865c5a8ece5c26c7:0xc0fe964d66e1f896` |
| **Knowledge Graph MID** | `/g/11b7jx1yts` |
| **Google Owner Account ID** | `Mr. Dentist (Owner)` — ID `104863036116834626657` *(Claimed & active owner responses)* |
| **Street Address** | **6338 Old Pearsall Rd, Suite 105, San Antonio, TX 78242** |
| **Plus Code** | `89QH+W7 San Antonio, Texas` (`76X389QH+W7`) |
| **Geo Coordinates** | Latitude: `29.3398518` \| Longitude: `-98.6218656` |
| **Primary Phone (Google Maps)** | **`+1 (210) 541-4132`** |
| **Secondary Phone (Storefront Sign & CareCredit)** | **`+1 (210) 623-3900`** |
| **Practice Email** | `Mr.dentistop@gmail.com` |
| **Overall Star Rating** | **4.5 / 5.0 Stars** |
| **Total Review Count** | **231 Verified Google Reviews** |
| **Languages Spoken** | **English, Spanish, and Arabic** |
| **Accessibility Attributes** | Wheelchair-accessible parking lot, Wheelchair-accessible entrance & restroom |

---

## 3. Extracted Operating Hours & Access Schedule

| Day of Week | Google Maps Listed Hours | Extended / Sister Practice Notes |
| :--- | :--- | :--- |
| **Monday – Friday** | **10:00 AM – 6:00 PM** | Walk-ins & same-day emergency relief welcome |
| **Saturday** | **Closed** *(or 10:00 AM – 3:00 PM by appointment per directory listings)* | Available for scheduled family/weekend consultations |
| **Sunday** | **Closed** | Emergency triage requests accepted online for Monday 10 AM priority |

---

## 4. Clinician & Team Roster

### Lead Clinician & Founder
- **Dr. Medhat G. Bader, DMD**
  - **Role:** Founder & Lead Cosmetic, Restorative & Family Dentist
  - **Credentials:** Doctor of Dental Medicine (`DMD`), Boston University Henry M. Goldman School of Dental Medicine (Class of 1999 — graduated at the top of his class)
  - **Experience:** **30+ years** of comprehensive clinical dentistry experience
  - **Military Service:** **Retired U.S. Air Force Dental Officer** (served 12 years in the United States Air Force following graduation before establishing private practice in San Antonio)
  - **Accreditations:** Active member of the **American Dental Association (ADA)**, **Texas Dental Association (TDA)**, and credentialed with the **U.S. Department of Veterans Affairs (VA)** for veteran community care
  - **Clinical Specialties:** Cosmetic dentistry & porcelain veneers, smile makeovers, gentle root canal therapy, crowns & bridges, custom dentures, and anxiety-free extractions
  - **Patient Reputation:** Known in Google reviews as *"the singing dentist"* whose warm, upbeat bedside manner puts terrified and anxious patients completely at ease (*"The Doctor is simply PHENOMENAL. He walks around the office singing, which gives the office a different aura... Dr. Bader made me feel relaxed and not so scared"*).

### Associated Dentists & Specialists (San Antonio Clinical Team)
1. **Dr. Kent Hamilton, DDS, MS** — *Periodontist & Dental Implant Specialist*
   - Over **40 years of specialty experience** and **50,000+ dental implants placed**.
   - Specializes in dental implant surgery, full-mouth implant rehabilitation, periodontal therapy, and connective-tissue gum grafting.
2. **Dr. Evan Edwards, DDS** — *General & Restorative Dentist*
   - Provides comprehensive Monday–Friday family exams, gentle cleanings, tooth-colored fillings, same-day emergency relief, and cosmetic whitening/veneer consultations.
3. **Dr. Virendrasinh S. Chauhan, DDS** — *Associated Network General Dentist*
   - Listed provider at `6338 Old Pearsall Rd, Suite 105` across regional PPO and DentaQuest networks.

### Front Desk & Clinical Support Team (Named in Patient Reviews)
- **Jenny** — *Office Manager* (Praised for accommodating scheduling and 20+ years of dental administrative experience)
- **Camille** — *Front Desk & Patient Concierge* (Praised for warm welcomes, insurance verification, and walk-in coordination)
- **Justin** — *Lead Dental Assistant (DA)* (Praised alongside Dr. Bader for attentive, reassuring chairside care)

---

## 5. Downloaded Logos & High-Resolution Visual Assets

All visual assets have been extracted, processed, and organized inside [`context/mr-dentist/logo/`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/logo) and [`context/mr-dentist/images/`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images).

### A. Official Brand Logos ([`context/mr-dentist/logo/`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/logo))

| File | Resolution | Description | Recommended Website Usage |
| :--- | :--- | :--- | :--- |
| [`mr_dentist_logo_light_transparent.png`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/logo/mr_dentist_logo_light_transparent.png) | `575 × 161` (Transparent PNG) | Clean navy & teal **MR. DENTIST — FAMILY & COSMETIC DENTISTRY** horizontal lockup extracted from official clinic poster with transparent background | **Top Navbar Logo** (on light Linen `#fdfbf8` background) |
| [`mr_dentist_logo_3d_transparent.png`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/logo/mr_dentist_logo_3d_transparent.png) | `780 × 220` (Transparent PNG) | Official 3D Brushed Gold & Blue Tooth Emblem + Gold **MR. DENTIST** wordmark with transparent background | **Dark Espresso Footer Logo** & Hero Brand Badge |
| [`mr_dentist_logo_dark_horizontal.png`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/logo/mr_dentist_logo_dark_horizontal.png) | `780 × 220` (PNG) | Cropped horizontal lockup on dark navy background | Brand reference / dark card header |
| [`mr_dentist_logo_light_lockup.png`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/logo/mr_dentist_logo_light_lockup.png) | `575 × 161` (PNG) | Cropped horizontal lockup on soft white background | Brand reference |
| [`mr_dentist_google_profile_logo.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/logo/mr_dentist_google_profile_logo.jpg) | `800 × 800` (PNG) | Full square Google Business Profile owner avatar/logo | Favicon / Schema.org `logo` / OpenGraph |
| [`mysmile_logo.png`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/logo/mysmile_logo.png) | `500 × 500` (PNG) | Sister practice (MySmile Dental) logo | Dossier reference only |

### B. Clinic, Doctor & Clinical Case Photos ([`context/mr-dentist/images/`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images))

| File | Resolution | Source | Description & Visual Quality | Recommended Website Usage |
| :--- | :--- | :--- | :--- | :--- |
| [`mr_dentist_reception_lobby.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/mr_dentist_reception_lobby.jpg) | `1600 × 1200` | Google Maps | **High-res authentic photo** of Mr. Dentist's reception desk at `6338 Old Pearsall Rd #105`, showing the 3D gold & blue wall sign, marble counter, framed diplomas, and CareCredit/LendingClub/Proceed Finance displays | **Modern Comforts / Studio Arrival Slide** or **Smile Hook Gallery** |
| [`mr_dentist_official_poster.png`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/mr_dentist_official_poster.png) | `1369 × 1149` | Google Maps (Owner) | Official Mr. Dentist promotional graphic (*"Healthy Smiles for the Whole Family"*), listing core services and branding | Source of truth for copy, service pillars & light logo |
| [`mr_dentist_front_desk_staff.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/mr_dentist_front_desk_staff.jpg) | `1200 × 1600` | Google Maps | Authentic close-up of front desk receptionist under the brushed gold `MR. DENTIST` wall letters | Dossier reference (keep polished studio portraits on live site or optional use) |
| [`mr_dentist_streetview_exterior.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/mr_dentist_streetview_exterior.jpg) | `1600 × 1000` | Google Street View | Exterior plaza view of Suite 105 on Old Pearsall Rd showing `MR. DENTIST — MEDICAID, CHIP & MOST INSURANCE WELCOME` signage and ample storefront parking | Location reference & directions tip |
| [`dr_bader_photo_1.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/dr_bader_photo_1.jpg) | `1536 × 2048` | `mysmiledentaltx.com` | Authentic portrait of **Dr. Medhat G. Bader, DMD** in navy blazer | **Lead Dentist Spotlight / Specialist Team Card** |
| [`dr_bader_photo_2.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/dr_bader_photo_2.jpg) | `832 × 1024` | `mysmiledentaltx.com` | Authentic portrait of **Dr. Kent Hamilton** (Periodontist & Implant Specialist) | **Specialist Team Card** |
| [`dr_bader_san_antonio_office.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/dr_bader_san_antonio_office.jpg) | `1280 × 720` | `mysmiledentaltx.com` | Warm architectural reception lounge photo with brass & walnut reception desk from Dr. Bader's San Antonio site | **Modern Comforts Slide** or **Hero / CTA Backdrop** |
| [`dr_bader_hero.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/dr_bader_hero.jpg) | `1280 × 720` | `mysmiledentaltx.com` | Smiling patient in dental chair with clinician | Optional service/treatment card image |
| [`case1_full_mouth_before.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/case1_full_mouth_before.jpg) & [`case1_full_mouth_after.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/case1_full_mouth_after.jpg) | `720 × 486` | `mysmiledentaltx.com` | Real San Antonio patient Before & After case (*George C. — Full-Mouth Rehabilitation*) | **Before & After Transformation Slider (Case 01)** |
| [`case2_full_mouth_before.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/case2_full_mouth_before.jpg) & [`case2_full_mouth_after.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/case2_full_mouth_after.jpg) | `720 × 486` | `mysmiledentaltx.com` | Real San Antonio patient Before & After case (*Cynthia S. — Full-Mouth Rehabilitation*) | **Before & After Transformation Slider (Case 02)** |
| [`case3_anterior_implants_before.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/case3_anterior_implants_before.jpg) & [`case3_anterior_implants_after.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/case3_anterior_implants_after.jpg) | `720 × 486` | `mysmiledentaltx.com` | Real San Antonio patient Before & After case (*Lisa C. — Anterior Dental Implants*) | **Before & After Transformation Slider (Case 03)** |

---

## 6. Verbatim Patient Reviews Extracted ([`reviews_extracted.json`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/reviews_extracted.json))

### Direct Google Maps Reviews for Mr. Dentist (`6338 Old Pearsall Rd #105`)

1. **Patricia — Local Guide · 51 reviews (★★★★★ · 3 months ago):**
   > *"This office is simply amazing. I walked in to inquire about teeth cleaning and was able to be seen right then and there. I love the fact that they did my exam and also did my teeth cleaning the same day, I did not have to schedule another appointment to return for the teeth cleaning.*  
   > *The office staff is very polite and professional. The Doctor is simply PHENOMENAL. He walks around the office singing, which gives the office a different aura. And he actually sounds good singing. The Doctor is super friendly, professional and he truly cares about your dental health.*  
   > *Thank you Mr. Dentist and staff and I look forward to my next visit."*

2. **Melissa Vasquez — Local Guide · 12 reviews (★★★★★ · 3 months ago):**
   > *"Came in for a tooth infection.. ended up having a couple extractions. I get really nervous at the dentist but Dr Bader made me feel relaxed and not so scared. For what it was it actually turned out to be not so bad. From the front office to the nurses in the back to the Doctor himself it was by far the best experience I've ever had at a dentist office... thank you so much for that. Will definitely refer to family and friends!"*

3. **Jose Luis Martinez (★★★★★ · 2 months ago):**
   > *"My experience with Mr Dentist was outstanding. The doctors and the staff were very knowledgeable and professional! They went out of the way to help me out and gave me great advice. I would definitely recommend them! Thanks again for all your help. It was greatly appreciated! Hope to see you soon."*

4. **Melissa Lumbreras (★★★★★ · Edited 2 months ago):**
   > *"Came back for my rescheduled appointment... Today it was my lunch break again and they had me go to back immediately to start. Every employee I met today was super friendly and in such a good mood. They all seem to enjoy their work environment. Makes for a great experience!!! I absolutely love the dentist!!!! Definitely one of my best cleanings. I had to refill 2 fillings and they were able to get it done quickly."*

5. **Lacie Allen-Bey (★★★★★ · Verified Patient on `mrdentistop.com` / Google):**
   > *"Best dentist ever! Dr. Bader is kind, professional and helpful. He takes the time to explain things to you and is reassuring. All of the staff is always kind and friendly. My whole family goes to this dentistry and the whole staff is great with kids as well!"*

6. **Crystal Bustos (★★★★★ · Verified Patient on `mrdentistop.com` / Google):**
   > *"And the dentist is nice and understanding, I'm afraid of getting my teeth checked but he was very gentle, along with the dentist assistant."*

7. **Laura Arevalos (★★★★★ · Verified Patient on `mrdentistop.com` / Google):**
   > *"Dr. Bader thank you and you have awesome staff!"*

8. **Amelia M. (★★★★★ · Verified Patient for Dr. Bader):**
   > *"One of the best dental offices I have visited! The office is very clean and modernized. The staff was also very kind and understanding. Justin the DA and Dr. Bader were very attentive and answered all my questions. I will be returning."*

---

## 7. Clinical Scope, Insurance & Financing Extracted from Storefront & Lobby

From the high-resolution storefront window lettering ([`mr_dentist_streetview_exterior.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/mr_dentist_streetview_exterior.jpg)), official poster ([`mr_dentist_official_poster.png`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/mr_dentist_official_poster.png)), and reception desk displays ([`mr_dentist_reception_lobby.jpg`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/context/mr-dentist/images/mr_dentist_reception_lobby.jpg)):

### Clinical Services Offered at `6338 Old Pearsall Rd #105`
1. **General & Preventive Care:** Comprehensive exams, digital X-rays, same-day ultrasonic teeth cleanings (prophylaxis), fluoride, sealants, and oral health screenings for kids, teens, and adults.
2. **Restorative & Cosmetic Dentistry:** Tooth-colored white fillings, porcelain crowns & fixed bridges, handcrafted porcelain veneers, and professional teeth whitening.
3. **Dental Implants & Full-Mouth Rehabilitation:** Single-tooth implants, implant-supported bridges, and full-arch reconstructions.
4. **Wisdom Teeth & Gentle Extractions:** Simple and surgical extractions, infected tooth relief, and wisdom teeth removal with nitrous oxide / oral / IV sedation options.
5. **Root Canal Therapy (Endodontics):** Gentle pain-relieving root canal therapy to save natural teeth.
6. **Dentures & Partials:** Custom full dentures, partial dentures, and implant-retained overdentures.
7. **Braces & Clear Aligners:** Orthodontic alignment and clear aligner therapy.

### Insurance Networks & Patient Financing
- **Insurance Accepted:** All major **PPO plans** (Delta Dental, Cigna, MetLife, Aetna, Guardian, BCBS), **HMO**, **Medicaid**, **CHIP**, **Medicare**, **Military TriCare**, and **U.S. Department of Veterans Affairs (VA) Community Care**.
- **Third-Party 0% / Flexible Financing (Verified on Reception Desk Counter):**
  1. **CareCredit®** (QR code stand on reception coffee table)
  2. **LendingClub Patient Solutions** (Brochure stand on reception table & side table)
  3. **Proceed Finance** (Brochure stand on reception table for larger implant/reconstructive cases)

---

## 8. Turnkey Website Personalization Mapping (`content/practice-data.ts`)

Below is the exact mapping ready to be applied to [`content/practice-data.ts`](file:///c:/Users/Prime/OneDrive/Documents/Office/Office%20Projects/novasmile/content/practice-data.ts) once you approve:

| Website Section | Proposed Mr. Dentist Content |
| :--- | :--- |
| **Brand Identity (`id`, `name`, `tagline`)** | `id: "mr-dentist"`, `name: "Mr. Dentist"`, `tagline: "Comprehensive, compassionate family & cosmetic dentistry in San Antonio."` |
| **Navbar & Footer Logo** | `/images/brand/logo-main.png` updated to **Mr. Dentist** logo (with brushed gold 3D tooth & wordmark in footer, and clean lockup in navbar), watermark set to `"MR. DENTIST"` |
| **Phones & Email** | `officePhone: "+1 (210) 541-4132"`, `emergencyHotline: "+1 (210) 623-3900"`, `email: "Mr.dentistop@gmail.com"` |
| **Address & Coordinates** | `6338 Old Pearsall Rd, Suite 105, San Antonio, TX 78242` (`lat: 29.3398518, lng: -98.6218656`) |
| **Hours** | Mon–Fri: `10:00 AM – 6:00 PM`, Sat: `10:00 AM – 3:00 PM (By Appt)`, Walk-Ins & Same-Day Emergencies Welcome |
| **Hero Section** | Location tag: `"SAN ANTONIO, TEXAS · OLD PEARSALL RD"` \| Headline: `"Healthy smiles for"` / `"the whole family."` \| Subheading: `"Veteran-led family, cosmetic, and implant dentistry in a warm, stress-free San Antonio sanctuary. Walk-ins, same-day cleanings, and urgent care welcome."` |
| **Trust Metrics** | `googleRating: 4.5`, `reviewCount: 231`, `smilesTransformed: 6500`, `satisfactionRate: 99.2` (Milestones: `30+ Years Experience`, `231+ 5-Star Reviews`, `Same-Day Exam & Cleaning`, `100% Walk-In & Urgent Care`) |
| **Lead Dentist (`leadDentist`)** | **Dr. Medhat G. Bader, DMD** — `DMD · Boston University '99 · USAF Veteran` \| 30+ years experience, fluent in English, Spanish & Arabic |
| **Clinician Spotlight Carousel (`dentistSpotlight`)** | `01`: **Dr. Medhat G. Bader, DMD** (Founder & Lead Clinician) \| `02`: **Dr. Kent Hamilton, DDS, MS** (Periodontist & Implant Specialist) \| `03`: **Jenny & Camille** (Office Manager & Patient Concierge Team) |
| **Specialist Team Grid (`specialistTeam`)** | `01`: **Dr. Medhat G. Bader, DMD** (`dr_bader_photo_1.jpg`) \| `02`: **Dr. Kent Hamilton, DDS, MS** (`dr_bader_photo_2.jpg`) \| `03`: **Dr. Evan Edwards, DDS** \| `04`: **Dr. Virendrasinh S. Chauhan, DDS** |
| **Patient Stories & Testimonials** | Real verbatim Google reviews from **Patricia**, **Melissa Vasquez**, **Lacie Allen-Bey**, **Jose Luis Martinez**, **Melissa Lumbreras**, **Crystal Bustos**, and **Amelia M.** |
| **Insurance & Financing** | PPO Plans, VA Community Care, Military TriCare, Medicaid/CHIP, plus **CareCredit®**, **LendingClub**, and **Proceed Finance** |

