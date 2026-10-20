# Website Guide & Complete Content Specification for Google Stitch Redesign
**Brand / Project:** Veyil Transit (Infiny Taxi & Tour Services)  
**Version:** 2.0 (Redesign Specification)  
**Target Platform:** Google Stitch / Web & Mobile UI Design  

---

## 1. Executive Summary & Brand Overview

### 1.1 Brand Identity
* **Brand Name:** Veyil Transit
* **Tagline:** *"Kerala, Made Easy. Every Mile, Thoughtfully Driven."*
* **Core Business:** Premium Chauffeur-driven Taxi Rentals, Airport Transfers, Outstation Trips, and Curated Multi-Day Kerala Holiday Tour Packages.
* **Target Audience:**
  1. Domestic and international tourists visiting Kerala.
  2. Families and couples looking for reliable, stress-free private holiday transportation.
  3. Business travelers needing punctual airport transfers and corporate travel.
* **Brand Tone & Voice:** Trustworthy, warm, professional, hospitable, transparent, and tranquil.
* **Primary Conversion Goal:** Direct bookings and quote inquiries via WhatsApp (`+91 79943 34254`) and Direct Phone (`+91 79943 34254`).

---

## 2. Information Architecture & Sitemap

```
├── Home Page (index.html)
│   ├── Floating / Sticky Navigation Bar
│   ├── 1. Hero Section (Dynamic Visual Carousel + Value Assurances)
│   ├── 2. Why Choose Us (4 Core Value Pillars)
│   ├── 3. Fleet Showcase (4 Vehicle Categories with Specifications)
│   ├── 4. Top Destinations & Tour Packages
│   │   ├── Featured Flagship Itinerary Banner (7 Days Kerala Tour)
│   │   ├── Top Destination Cards (4 Locations)
│   │   └── Quick Service Packages (4 Service Types)
│   ├── 5. How It Works (3-Step Booking Workflow)
│   ├── 6. Testimonials & Social Proof (Customer Reviews Carousel)
│   ├── 7. Frequently Asked Questions (Accordion)
│   └── 8. Footer & Persistent Floating Action Buttons
│
└── 7-Day Kerala Tour Package Page (package.html)
    ├── Floating / Sticky Navigation Bar
    ├── 1. Package Hero Banner (Route Trail + Inclusions + Download CTA)
    ├── 2. Trip Highlights Carousel (8 Visual Category Cards)
    ├── 3. Day-by-Day Road Map Itinerary (7 Interactive Stages)
    │   ├── Day 1: Kochi → Munnar (Highlands Ascent & Waterfalls)
    │   ├── Day 2: Munnar Circuit (Tea Trails, Dams & High Peaks)
    │   ├── Day 3: Munnar → Thekkady (Periyar Wildlife & Spice Corridors)
    │   ├── Day 4: Thekkady → Alleppey (Private Houseboat Backwater Cruise)
    │   ├── Day 5: Alleppey → Varkala (Jatayu Earth Center & Cliff Sunset)
    │   ├── Day 6: Varkala → Kovalam & Poovar (Mangrove Safari & Azhimala Shiva)
    │   └── Day 7: Trivandrum (Padmanabhaswamy Temple, Shopping & Airport Drop)
    ├── 4. Tour Reservation Banner (WhatsApp + Phone Hotline)
    ├── 5. Package-Specific FAQs (4 Accordions)
    └── 6. Footer & Persistent Floating Action Buttons
```

---

## 3. Detailed Page Breakdown & Full Content Copy

---

### PAGE 1: Home Landing Page (`index.html`)

#### Component 1: Global Navigation Bar
* **Logo Asset:** `assets/images/logo.webp` (Alt: "Veyil Transit")
* **Navigation Links:**
  * `Home` (`index.html`)
  * `Tour Packages` (`package.html`)
  * `Destinations` (`#destinations`)
  * `Why Us` (`#why-us`)
  * `FAQ` (`#faq`)
* **Primary CTA Button:**
  * **Text:** `"Book Now"`
  * **Link / Action:** WhatsApp URL (`https://wa.me/917994334254?text=Hi%20I%20would%20like%20to%20book%20a%20trip`)
* **Mobile Drawer Elements:**
  * Links to Home, 7 Days Kerala Package (highlighted), Destinations, Why Us, FAQ, plus Full-width `"Book Now"` button with WhatsApp icon.

---

#### Component 2: Hero Section
* **Hero Headline (H1):**
  > **"Kerala, Made Easy.  
  > Every Mile, Thoughtfully Driven."**
* **Subheadline / Body Text:**
  > *"Professional chauffeur-driven taxis and tailor-made Kerala tours, with clean vehicles, transparent pricing, and local expertise."*
* **Primary CTA:** `"Book Now ↗"` (WhatsApp trigger)
* **Secondary CTA:** `"7 Days Kerala Package ↗"` (Links to `package.html`)
* **Trust Badges / Assurances (Chips with checkmarks):**
  1. `✓ Verified drivers`
  2. `✓ Upfront pricing`
  3. `✓ 24/7 trip support`
* **Visual Imagery:** 3 background sliding banners showcasing Kerala's misty tea plantations, backwaters, and scenic highways (`banner-1.webp`, `banner-2.webp`, `banner-3.webp`).

---

#### Component 3: Why Choose Us (Trust & Value Props)
* **Pre-title / Tag:** `"WHY CHOOSE US"`
* **Section Heading (H3):** `"Why Travel With Veyil Transit?"`
* **Section Description:** *"Dedicated to giving you the safest, most comfortable, and hassle-free travel experience across Kerala."*
* **4 Core Value Pillars:**
  1. **Pillar 1: Transparent Rates**
     * *Icon:* Receipt / Bill icon
     * *Body:* *"No hidden charges, zero toll surprises, and 100% upfront pricing clarity on both per-km and package trips."*
     * *Badge:* `"✓ Best Price Guarantee"`
  2. **Pillar 2: Friendly & Expert Drivers**
     * *Icon:* Steering wheel icon
     * *Body:* *"Polite, verified drivers who know Kerala roads well and help you have a safe, relaxed journey."*
     * *Badge:* `"✓ 5+ Yrs Hill Experience"`
  3. **Pillar 3: Sanitized & Modern Fleet**
     * *Icon:* Sparkle / Clean car icon
     * *Body:* *"100% Air-conditioned, impeccably cleaned, and regularly serviced vehicles for maximum touring comfort."*
     * *Badge:* `"✓ Clean & Odor-Free"`
  4. **Pillar 4: 24/7 Instant Support**
     * *Icon:* Headset / Support icon
     * *Body:* *"Round-the-clock trip coordination on call and WhatsApp for seamless, stress-free travel assistance anytime."*
     * *Badge:* `"✓ 24/7 Roadside Assistance"`

---

#### Component 4: Fleet / Vehicle Showcase
* **Pre-title / Tag:** `"OUR FLEET"`
* **Section Heading (H3):** `"Choose Your Ride"`
* **Section Description:** *"From comfortable sedans to spacious SUVs, we have the perfect vehicle for your journey."*
* **Vehicle Options:**

| Vehicle Name | Image File | Badge | Seating Capacity | Luggage Bags | Best For | CTA Text & Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Swift Dzire** | `swift.webp` | AC | 4 Seating Capacity | 2 Luggage Bags | Small Family | `"Book Dzire"` → WhatsApp (`text=Hi I want to book a Swift Dzire`) |
| **Ertiga** | `ertiga.webp` | AC | 6 Seating Capacity | 3 Luggage Bags | Mid Family | `"Book Ertiga"` → WhatsApp (`text=Hi I want to book an Ertiga`) |
| **Innova** | `innova.webp` | AC | 7-8 Seating | 5 Luggage Bags | Long Tours | `"Book Innova"` → WhatsApp (`text=Hi I want to book an Innova`) |
| **Wagon R** | `wagonR.webp` | AC | 4 Seating Capacity | 1-2 Luggage Bags | Local Trips | `"Book Wagon R"` → WhatsApp (`text=Hi I want to book a Wagon R`) |

* **Section Bottom Prompt:** `"Need help choosing? Message Us →"`

---

#### Component 5: Destinations & Service Packages
* **Pre-title / Tag:** `"EXPLORE"`
* **Section Heading (H3):** `"Top Destinations & Packages"`
* **Section Description:** *"Discover the beauty of our top routes or let us custom tailor a package just for you."*

##### A. Featured Itinerary Banner Card (Clickable to `package.html`)
* **Badge:** `"FEATURED ITINERARY • 7 DAYS / 6 NIGHTS"`
* **Title (H4):** `"7 Days in God's Own Country"`
* **Route Trail:** `Kochi → Munnar → Thekkady → Alleppey → Varkala → Trivandrum`
* **Summary Copy:** *"From misty tea hills in Munnar to sunset over Varkala's red cliffs and a peaceful night aboard an Alleppey backwater houseboat — an unhurried road trip with your own private cab and chauffeur."*
* **Button Text:** `"Explore ↗"`
* **Background Image:** `kerala-package-bg.webp`

##### B. Top Destination Cards (4 Grid Items)
1. **Munnar Hills** (`munnar-hills.webp`) → CTA: `"Explore Trip"` (WhatsApp: `text=Hi I want to explore Munnar`)
2. **Alleppey Backwaters** (`highlights-houseboat.webp`) → CTA: `"Explore Trip"` (WhatsApp: `text=Hi I want to explore Alleppey`)
3. **Thekkady Forest** (`thekkedi-forest.webp`) → CTA: `"Explore Trip"` (WhatsApp: `text=Hi I want to explore Thekkady`)
4. **Fort Kochi** (`fort-kochi.webp`) → CTA: `"Explore Trip"` (WhatsApp: `text=Hi I want to explore Fort Kochi`)

##### C. Service Packages (4 Cards)
1. **Airport Pickup**
   * *Icon:* Airplane
   * *Description:* *"Punctual and reliable airport transfer services 24/7."*
   * *CTA:* `"Book Now →"` (WhatsApp: `text=Book Airport Pickup`)
2. **One Day Tour**
   * *Icon:* Sun
   * *Description:* *"Explore the city's highlights in a comfortable, guided day trip."*
   * *CTA:* `"Book Now →"` (WhatsApp: `text=Book One Day Tour`)
3. **Multi-Day Tour**
   * *Icon:* Calendar
   * *Description:* *"Comprehensive travel packages for extended vacations."*
   * *CTA:* `"Book Now →"` (WhatsApp: `text=Book Multi-Day Tour`)
4. **Custom Trip (Featured Card)**
   * *Icon:* Crown & Compass Navigation
   * *Description:* *"Create your own itinerary. We follow your lead."*
   * *CTA:* `"Request Quote"` (WhatsApp: `text=Custom Trip Request`)

---

#### Component 6: How It Works (3-Step Booking)
* **Pre-title / Tag:** `"QUICK & SIMPLE"`
* **Section Heading (H3):** `"3-Step Easy Booking"`
* **Section Description:** *"Book your private cab or custom Kerala holiday package in under 60 seconds."*
* **Steps:**
  * **Step 01: Choose Vehicle or Package**  
    *Body:* *"Select your preferred car (Dzire, Ertiga, Innova, Wagon R) or pick our flagship 7 Days Kerala Tour package."*  
    *Sub-tag:* `Step 1 • Instant Selection`
  * **Step 02: Chat on WhatsApp for Quote**  
    *Body:* *"Send your travel dates and requirements. Our team sends you instant all-inclusive transparent pricing."*  
    *Sub-tag:* `Step 2 • Fast Confirmation`
  * **Step 03: Enjoy a Smooth Journey**  
    *Body:* *"Meet your dedicated chauffeur on time and explore God's Own Country in total safety and luxury."*  
    *Sub-tag:* `Step 3 • Unforgettable Memories`
* **Section CTA:** `"Start WhatsApp Booking Now"` (WhatsApp trigger)

---

#### Component 7: Testimonials / What Our Riders Say
* **Pre-title / Tag:** `"TESTIMONIALS"`
* **Section Heading (H3):** `"What Our Riders Say"`
* **Reviews:**
  1. **John Doe (Tourist from UK)** — Rating: ★★★★★  
     > *"Incredible service! The driver was on time, the car was spotless, and the drive to Munnar was incredibly smooth. Highly recommend Veyil Transit."*
  2. **Arjun Sharma (Family Trip)** — Rating: ★★★★★  
     > *"Very professional. Booking via WhatsApp was super fast. The driver knew all the best local spots. Will definitely use them again next year!"*
  3. **Maria Rodriguez (Business Traveler)** — Rating: ★★★★★  
     > *"Airport pickup was flawless even though my flight was delayed. Great communication and very competitive pricing."*

---

#### Component 8: Frequently Asked Questions (FAQs)
* **Pre-title / Tag:** `"GOT QUESTIONS?"`
* **Section Heading (H3):** `"Frequently Asked Questions"`
* **Q&A Items:**
  1. **Q: How do I book a ride?**  
     *A:* *"Booking is incredibly easy! Just click any 'Book Now' floating WhatsApp button on our site, send us your requirements, and our team will confirm your booking instantly."*
  2. **Q: Are your drivers experienced?**  
     *A:* *"Yes, all our drivers carry years of experience, possess thorough knowledge of local routes, and undergo strict background checks to ensure your complete safety and comfort."*
  3. **Q: What payment methods do you accept?**  
     *A:* *"We accept Cash, UPI (Google Pay, PhonePe, Paytm), and major Credit/Debit cards upon arrival or via advance online links."*
  4. **Q: What is your cancellation policy?**  
     *A:* *"We offer free cancellation up to 24 hours before your scheduled trip. For later cancellations, a small administrative fee may apply. Please refer to your booking confirmation for specifics."*

---

#### Component 9: Footer & Global Contacts
* **Company Bio:** *"Professional taxi and touring services offering you the best and safest journeys across multiple breathtaking destinations."*
* **Contact Numbers:**
  * Phone: `+91 79943 34254` (`tel:7994334254`)
  * Email: `veyiltransit@gmail.com` (`mailto:veyiltransit@gmail.com`)
* **Direct Booking CTA:** `"Book via WhatsApp"`
* **Legal:** `© 2026 Veyil Transit. All rights reserved.` | `Privacy Policy` | `Terms of Service`
* **Persistent Floating Controls:**
  * WhatsApp Quick Chat Button (Round Floating Button)
  * Back to Top Smooth Scroll Button

---

---

### PAGE 2: 7 Days Kerala Tour Package Page (`package.html`)

#### Component 1: Package Hero Banner
* **Badge:** `"FEATURED ITINERARY • 7 DAYS / 6 NIGHTS"`
* **Page Title (H1):** `"7 Days in God's Own Country"`
* **Route Path:** `Kochi → Munnar → Thekkady → Alleppey → Varkala → Trivandrum`
* **Description:**  
  > *"From misty tea hills in Munnar to sunset over Varkala's red cliffs and a peaceful night aboard an Alleppey backwater houseboat — an unhurried road trip with your own private cab and chauffeur."*
* **Core Package Inclusions (Chips):**
  * `🚗 Private Chauffeur Cab`
  * `⛵ 1N Luxury Houseboat`
  * `🎛️ 100% Customizable`
* **Actions:**
  1. Primary CTA: `"Enquire on WhatsApp ↗"`
  2. Secondary Action: `"Download Itinerary ⬇"` (Downloads `assets/images/itinery.webp`)

---

#### Component 2: Trip Highlights Carousel (8 Visual Experiences)

| Slide | Title | Tag / Category | Visual Asset |
| :--- | :--- | :--- | :--- |
| **01** | **Munnar Hills** | Tea Estates & Mist | `munnar-hills.webp` |
| **02** | **Cheeyappara & Valara** | Cascading Waterfalls | `Cheeyappara & Valara.webp` |
| **03** | **Cliff Beaches** | Varkala & Kovalam | `highlights-beaches.webp` |
| **04** | **Wildlife Safari** | Periyar Lake & Forest | `highlights-wildlife.webp` |
| **05** | **Luxury Houseboat** | Alleppey Backwaters | `highlights-houseboat.webp` |
| **06** | **Living Culture** | Kathakali & Traditions | `kadhakali.webp` |
| **07** | **Spice Gardens** | Thekkady Trails | `highlights-spices.webp` |
| **08** | **Local Flavours** | Traditional Sadhya | `sadhya.webp` |

---

#### Component 3: Day-by-Day Interactive Road Map & Itinerary

##### DAY 01: Ascent to Munnar Tea Highlands
* **Stage & Route:** `Stage 1 • 130 km | Kochi → Munnar`
* **Drive Time:** `~3.5 hrs drive`
* **Headline:** `"Ascent to Munnar Tea Highlands"`
* **Overview:** *"Private cab pickup at Kochi. Scenic ascent through rubber estates and rainforests with stops at roaring Cheeyappara and Valara waterfalls."*
* **Checklist / Inclusions:**
  * Airport / Station AC cab pickup
  * Cheeyappara & Valara waterfall stops
  * Munnar mountain resort check-in
  * Optional evening Kathakali cultural show
* **Stay:** `Munnar Resort`
* **Insider Tip:** `💡 Keep a light jacket ready for cool evening winds.`
* **Image:** `day1-waterfalls.webp`

##### DAY 02: Tea Trails, Lakes & High Peaks
* **Stage & Route:** `Stage 2 • Local Circuit | Munnar Exploration`
* **Drive Time:** `Full-Day Cab Sightseeing`
* **Headline:** `"Tea Trails, Lakes & High Peaks"`
* **Overview:** *"Explore Munnar's iconic attractions including tea plantations, historic museums, scenic dam viewpoints, and spice gardens."*
* **Checklist / Inclusions:**
  * Tata Tea Museum & factory tour
  * Mattupetty Dam & Kundala Lake
  * Natural Echo Point voice games
  * Spices garden & homemade chocolates
* **Stay:** `Munnar Resort`
* **Insider Tip:** `💡 Visit Echo Point in the morning for clearest sound reflections.`
* **Image:** `munnar-hills.webp`

##### DAY 03: Periyar Wildlife & Spice Valleys
* **Stage & Route:** `Stage 3 • 90 km | Munnar → Thekkady`
* **Drive Time:** `~3 hrs drive`
* **Headline:** `"Periyar Wildlife & Spice Valleys"`
* **Overview:** *"Drive through mountain spice corridors to Thekkady. Boat safari inside the Periyar Tiger Reserve lake to spot wild elephants and birdlife."*
* **Checklist / Inclusions:**
  * Cardamom Highway scenic drive
  * Periyar Lake boat wildlife safari
  * Elephant feeding & safari park
  * Kumily wholesale spice bazaar walk
* **Stay:** `Forest Lodge in Thekkady`
* **Insider Tip:** `💡 Buy premium 8mm green cardamom directly in Kumily markets.`
* **Image:** `day3-thekkady.webp`

##### DAY 04: Private Luxury Houseboat in Backwaters
* **Stage & Route:** `Stage 4 • 140 km | Thekkady → Alleppey`
* **Drive Time:** `1N Houseboat Cruise`
* **Headline:** `"Private Luxury Houseboat in Backwaters"`
* **Overview:** *"Board your private AC houseboat in Alleppey at noon. Glide through tranquil palm channels while your chef serves fresh Kerala meals."*
* **Checklist / Inclusions:**
  * 12:00 PM houseboat boarding & welcome drink
  * Traditional Sadhya & Karimeen fish lunch
  * Sunset cruise with hot tea & banana fritters
  * Overnight mooring on peaceful backwaters
* **Stay:** `Deluxe AC Houseboat (All Meals Included)`
* **Insider Tip:** `💡 Inform your chef of spice preferences at boarding.`
* **Image:** `day4-backwaters.webp`

##### DAY 05: Jatayu Earth's Center & Cliff Sunset
* **Stage & Route:** `Stage 5 • 120 km | Alleppey → Varkala`
* **Drive Time:** `Arabian Sea Coast Drive`
* **Headline:** `"Jatayu Earth's Center & Cliff Sunset"`
* **Overview:** *"Ride the scenic cable car to Jatayu Nature Park's giant bird sculpture, followed by a golden sunset walk on Varkala's red cliff promenade."*
* **Checklist / Inclusions:**
  * Morning houseboat breakfast & checkout
  * Jatayu Earth's Center cable car ride
  * Varkala Cliff beach resort check-in
  * North Cliff promenade cafes & sunset views
* **Stay:** `Varkala Cliff Resort`
* **Insider Tip:** `💡 North Cliff Helipad is the premier sunset photography spot.`
* **Image:** `day5-varkala-cliff.webp`

##### DAY 06: Poovar Mangrove Safari & Azhimala Shiva
* **Stage & Route:** `Stage 6 • 80 km | Varkala → Kovalam & Poovar`
* **Drive Time:** `Mangrove & Lighthouse Circuit`
* **Headline:** `"Poovar Mangrove Safari & Azhimala Shiva"`
* **Overview:** *"Motorboat safari through Poovar's green mangrove canals, marvel at the 58-ft seaside Azhimala Lord Shiva statue, and relax at Kovalam Beach."*
* **Checklist / Inclusions:**
  * Poovar mangrove & golden sand spit boat safari
  * Azhimala 58-foot monolithic Lord Shiva statue
  * Kovalam Lighthouse beach promenade
  * Trivandrum / Kovalam hotel check-in
* **Stay:** `Kovalam / Trivandrum Hotel`
* **Insider Tip:** `💡 Try fresh catch of the day at Poovar floating food stalls.`
* **Image:** `day6-poovar-beach.webp`

##### DAY 07: Sacred Temple Blessings & Farewell
* **Stage & Route:** `Stage 7 • Departure | Trivandrum City & Drop`
* **Drive Time:** `Airport / Station Drop`
* **Headline:** `"Sacred Temple Blessings & Farewell"`
* **Overview:** *"Seek blessings at the grand Sree Padmanabhaswamy Temple, pick up fresh hot banana chips, and enjoy a hassle-free cab transfer to the airport."*
* **Checklist / Inclusions:**
  * Padmanabhaswamy Temple morning darshan
  * Fresh coconut oil banana chips shopping
  * Kuthira Malika Palace historic walk
  * Smooth transfer to Trivandrum Airport / Station
* **Stay / Conclusion:** `End of 7 Days Kerala Tour`
* **Insider Tip:** `💡 Traditional dhoti (Mundu) dress code required inside the temple.`
* **Image:** `day7-trivandrum.webp`

---

#### Component 4: Tour Reservation CTA Banner
* **Tag:** `"YOUR DREAM KERALA VACATION AWAITS"`
* **Headline (H2):** `"Ready to Experience the 7 Days Kerala Journey?"`
* **Description:** *"Connect with our holiday specialists now for custom quotes, seasonal vehicle discounts, and instant cab reservations."*
* **CTAs:**
  1. `"Book via WhatsApp Now ↗"` (`https://wa.me/917994334254?text=Hi%2C%20I%20am%20ready%20to%20book%20the%207%20Days%20Kerala%20Journey%20Package.`)
  2. `"Call +91 79943 34254 ↗"` (`tel:7994334254`)

---

#### Component 5: Package FAQs & Customization
* **Tag:** `"GOT QUESTIONS?"`
* **Headline (H2):** `"Package FAQs & Customization"`
* **Q&A Items:**
  1. **Q: Can we customize or modify this 7-day itinerary?**  
     *A:* *"Yes, absolutely! The 7-day Kerala Journey is 100% customizable. You can add extra days in Munnar, replace Varkala with Kovalam, or tailor the pickup and drop points to your flight schedules. Simply message our team on WhatsApp at +91 79943 34254."*
  2. **Q: Are the cab drivers experienced in Kerala hill station driving?**  
     *A:* *"Yes, every chauffeur in our fleet has over 5+ years of professional driving experience across the steep hairpin bends of Munnar, Thekkady, and coastal highways. They speak English, Hindi, and Malayalam and double as friendly local guides!"*
  3. **Q: How do we confirm the booking?**  
     *A:* *"Booking is completely hassle-free. Message us on WhatsApp with your travel dates, passenger count, and preferred car. We'll send you an instant customized quote, and you can confirm with a small advance token via UPI or bank transfer."*
  4. **Q: What are the food options available on the Alleppey Houseboat?**  
     *A:* *"The private houseboat features a dedicated chef on board who prepares delicious authentic Kerala meals (Traditional Sadhya, Karimeen fish fry, chicken curry, vegetarian delicacies). Pure vegetarian and Jain food options are also readily prepared upon request!"*

---

## 4. Google Stitch Prompting Blueprint & UI Specifications

When generating layouts, wireframes, and variants in Google Stitch, use the following prompts structured by screen:

### Screen 1: Home Landing Page (Desktop & Mobile)
```
Prompt for Google Stitch:
Create a modern, ultra-clean, high-conversion landing page for 'Veyil Transit', a premium chauffeur-driven taxi and Kerala tour package service. 
- Theme: Clean light aesthetic with Deep Navy (#07284f) and Warm Accent Orange (#f47a20).
- Structure:
  1. Floating frosted glass navigation header with logo, links (Home, Tour Packages, Destinations, Why Us, FAQ), and orange 'Book Now' pill CTA.
  2. Full-viewport Hero Banner featuring Kerala landscape imagery, split headline 'Kerala, Made Easy. Every Mile, Thoughtfully Driven.', subtitle, primary orange CTA 'Book Now' and secondary white CTA '7 Days Kerala Package', plus 3 assurance chips (Verified drivers, Upfront pricing, 24/7 trip support).
  3. 'Why Choose Us' grid with 4 cards (Transparent Rates, Friendly & Expert Drivers, Sanitized Fleet, 24/7 Support) with icons and guarantee badges.
  4. 'Our Fleet' vehicle selector with 4 car cards (Swift Dzire, Ertiga, Innova, Wagon R) displaying passenger capacity, luggage count, best-for tag, and 'Book Car' CTA.
  5. 'Top Destinations & Packages' featuring a prominent dark scenic banner for '7 Days in God's Own Country' (Kochi to Trivandrum), 4 destination photo cards (Munnar, Alleppey, Thekkady, Fort Kochi), and 4 service cards (Airport Pickup, One Day, Multi-Day, Custom Trip).
  6. '3-Step Easy Booking' timeline (Select Car/Package -> WhatsApp Chat -> Enjoy Journey).
  7. Testimonial carousel with 5-star ratings and customer quotes.
  8. Accordion FAQ section with 4 questions.
  9. Footer with company bio, contact phone numbers (+91 79943 34254), email, and floating WhatsApp round button.
```

### Screen 2: 7-Day Kerala Tour Package Page (Desktop & Mobile)
```
Prompt for Google Stitch:
Create a luxury travel itinerary detail page for 'Veyil Transit - 7 Days Kerala Journey'.
- Theme: Fresh, airy, editorial travel aesthetic with Warm Orange and Navy highlights.
- Structure:
  1. Sticky top navigation with active 'Tour Packages' indicator.
  2. Scenic Package Hero Banner with route breadcrumbs (Kochi -> Munnar -> Thekkady -> Alleppey -> Varkala -> Trivandrum), key inclusions chips (Private Chauffeur Cab, 1N Luxury Houseboat, 100% Customizable), WhatsApp inquiry CTA, and 'Download Itinerary' button.
  3. 'Trip Highlights' horizontal carousel with 8 cards (Munnar Hills, Waterfalls, Cliff Beaches, Wildlife Safari, Luxury Houseboat, Kathakali, Spice Gardens, Sadhya).
  4. Interactive vertical '7-Day Road Trip Itinerary' with highway progress line and car marker:
     - Day 1: Kochi to Munnar (Ascent & waterfalls, resort stay)
     - Day 2: Munnar Tea Trails & Lakes
     - Day 3: Periyar Wildlife Safari & Thekkady
     - Day 4: Private Alleppey Houseboat with meals
     - Day 5: Jatayu Earth Center & Varkala Cliff Sunset
     - Day 6: Poovar Mangrove Safari & Azhimala Shiva
     - Day 7: Padmanabhaswamy Temple & Trivandrum Airport Drop
     Each day card contains stage distance, drive duration, scenic photo thumbnail, 4-point checklist, hotel stay tag, and insider travel tip.
  5. High-impact dark navy CTA banner with WhatsApp and phone click triggers.
  6. Package FAQs accordion (Customization, Driver experience, Booking process, Houseboat food).
  7. Footer with direct contact details and floating WhatsApp button.
```

---

## 5. Contact & WhatsApp Query Mapping Dictionary

| Trigger Location | Target URL / Deep Link | Pre-filled WhatsApp Text |
| :--- | :--- | :--- |
| **Main Navigation** | `https://wa.me/917994334254?...` | `Hi I would like to book a trip` |
| **Hero Primary CTA** | `https://wa.me/917994334254?...` | `Hi I would like to book a trip` |
| **Fleet: Swift Dzire** | `https://wa.me/917994334254?...` | `Hi I want to book a Swift Dzire` |
| **Fleet: Ertiga** | `https://wa.me/917994334254?...` | `Hi I want to book an Ertiga` |
| **Fleet: Innova** | `https://wa.me/917994334254?...` | `Hi I want to book an Innova` |
| **Fleet: Wagon R** | `https://wa.me/917994334254?...` | `Hi I want to book a Wagon R` |
| **Destinations: Munnar** | `https://wa.me/917994334254?...` | `Hi I want to explore Munnar` |
| **Destinations: Alleppey** | `https://wa.me/917994334254?...` | `Hi I want to explore Alleppey` |
| **Destinations: Thekkady**| `https://wa.me/917994334254?...` | `Hi I want to explore Thekkady` |
| **Destinations: Fort Kochi**| `https://wa.me/917994334254?...`| `Hi I want to explore Fort Kochi` |
| **Package: Airport Pickup** | `https://wa.me/917994334254?...`| `Book Airport Pickup` |
| **Package: One Day Tour**| `https://wa.me/917994334254?...` | `Book One Day Tour` |
| **Package: Multi-Day Tour**| `https://wa.me/917994334254?...`| `Book Multi-Day Tour` |
| **Package: Custom Trip** | `https://wa.me/917994334254?...` | `Custom Trip Request` |
| **7-Day Package Inquire**| `https://wa.me/917994334254?...` | `Hi, I am interested in the 7 Days Kerala Journey Package. Please send quote and details.` |
| **Floating Action Button**| `https://wa.me/917994334254?...`| `Hi I would like to book a trip` |
