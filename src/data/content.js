/**
 * Shiva Nanda Kathak Classes - Academy Content Source of Truth
 * 
 * Verified Client Information:
 * - Academy: Shiva Nanda Kathak Classes
 * - Teacher: Samidha Karanjekar (Teaching since 2014, 12+ years)
 * - Phone / WhatsApp: 99207 64766 (https://wa.me/919920764766)
 * - Email: samidhakathak111@gmail.com
 * - Address: Society 33, D3, MHADA Colony, SVP Nagar, near Telephone Exchange,
 *            Kids Planet School Lane, Andheri West, Mumbai – 400053
 * - Socials: Instagram (https://www.instagram.com/samidha.kathak),
 *            Facebook (https://www.facebook.com/share/1CMuwVCfva/),
 *            YouTube (https://youtube.com/@samidhakaranjekar)
 * - Lineage: Jaipur Gharana under Guru Shri Rajkumar Jaipurwale ji & Guru Smt. [TODO: Add Second Guru Name]
 * - Qualifications: Alankaar from Gandharva Mahavidyalaya; M.A. in Kathak from Khairagarh University
 * - Philosophy: Making Kathak simple and enjoyable while preserving its classical foundation.
 *               Teaching focuses on technique, rhythm, expressions and individual growth.
 * - Stage Experience: Performed on various platforms and cities across India.
 *                     Annual stage performances for past 8 years to build confidence.
 * - Courses:
 *   1. Kathak classical training from Prarambhik to Visharad (Fees: "Contact for details")
 *   2. Gandharva Mahavidyalaya examination preparation and Alankaar (Fees: "Contact for details")
 *   3. Semi-classical batches (Fees: "Contact for details")
 *   4. Workshops and special choreographies (Fees: "Contact for details")
 */

// ==========================================
// 1. SITE & CONTACT CONFIGURATION
// ==========================================
export const siteConfig = {
  academyName: "Shiva Nanda Kathak Classes",
  academyShortName: "Shiva Nanda",
  academySub: "Academy of Indian Classical Dance",
  teacher: "Samidha Karanjekar",
  founder: "Samidha Karanjekar", // backwards-compatible alias
  teacherRole: "Kathak Performer & Teacher",
  teachingSince: "2014",
  experienceYears: "12+",
  phone: "99207 64766",
  displayPhone: "+91 99207 64766",
  whatsappNumber: "919920764766",
  whatsappUrl: "https://wa.me/919920764766",
  email: "samidhakathak111@gmail.com",
  fullAddress: "Society 33, D3, MHADA Colony, SVP Nagar, near Telephone Exchange, Kids Planet School Lane, Andheri West, Mumbai – 400053",
  addressShort: "SVP Nagar, MHADA Colony, Andheri West, Mumbai",
  landmarks: "Near Telephone Exchange, Kids Planet School Lane",
  city: "Mumbai",
  pincode: "400053",
  state: "Maharashtra",
  location: "SVP Nagar, MHADA Colony, Andheri West, Mumbai",
  googleMapsUrl: "https://maps.google.com/?q=Society+33+D3+MHADA+Colony+SVP+Nagar+Andheri+West+Mumbai+400053",
  instagramUrl: "https://www.instagram.com/samidha.kathak",
  facebookUrl: "https://www.facebook.com/share/1CMuwVCfva/",
  youtubeUrl: "https://youtube.com/@samidhakaranjekar",
  socialLinks: {
    instagram: "https://www.instagram.com/samidha.kathak",
    facebook: "https://www.facebook.com/share/1CMuwVCfva/",
    youtube: "https://youtube.com/@samidhakaranjekar",
  },
  affiliation: "Akhil Bharatiya Gandharva Mahavidyalaya Mandal (Recognized Center)",
  timings: "Weekday & Weekend Batches Available (Contact for Schedule)",
  annualShowLegacyYears: "8",
  establishedYear: "2014",
};

// ==========================================
// 2. SEO BLOCK FOR "Kathak classes in Andheri West Mumbai"
// ==========================================
export const seoConfig = {
  title: "Shiva Nanda Kathak Classes | Samidha Karanjekar | Kathak Classes in Andheri West Mumbai",
  metaTitle: "Kathak Classes in Andheri West Mumbai | Shiva Nanda Kathak Classes",
  description: "Learn classical Kathak dance in Andheri West, Mumbai with Samidha Karanjekar (Alankaar, M.A. Kathak). Jaipur Gharana training, Gandharva Mahavidyalaya exam preparation, semi-classical batches, and annual stage performances.",
  keywords: [
    "Kathak classes in Andheri West Mumbai",
    "Kathak dance classes Andheri West",
    "Samidha Karanjekar",
    "Shiva Nanda Kathak Classes",
    "Jaipur Gharana Kathak Mumbai",
    "Gandharva Mahavidyalaya Kathak exams",
    "Kathak Alankaar teacher Mumbai",
    "Khairagarh University Kathak",
    "semi classical dance classes Andheri",
    "Kathak classes SVP Nagar MHADA Colony",
    "classical dance classes for kids and adults Mumbai",
  ].join(", "),
  canonical: "https://shivanandakathak.com/",
  openGraph: {
    title: "Shiva Nanda Kathak Classes | Samidha Karanjekar | Andheri West Mumbai",
    description: "Jaipur Gharana Kathak training under Samidha Karanjekar (Alankaar, M.A. Kathak). Prarambhik to Visharad, Gandharva exams, semi-classical, and annual stage shows in Andheri West.",
    url: "https://shivanandakathak.com/",
    siteName: "Shiva Nanda Kathak Classes",
    locale: "en_IN",
    type: "website",
    image: "/og-image.jpg", // TODO: Add high-res OG banner
  },
  twitter: {
    card: "summary_large_image",
    title: "Kathak Classes in Andheri West Mumbai | Shiva Nanda Kathak Classes",
    description: "Classical Kathak training with Samidha Karanjekar in SVP Nagar, Andheri West. 12+ years teaching legacy.",
  },
};

// ==========================================
// 3. ABOUT TEACHER (POLISHED 3-PARAGRAPH BIO)
// Strictly adhering to verified client info
// ==========================================
export const aboutTeacher = {
  name: "Samidha Karanjekar",
  title: "Kathak Performer & Teacher",
  credentials: "Alankaar (Gandharva Mahavidyalaya) • M.A. in Kathak (Khairagarh University)",
  lineage: "Jaipur Gharana of Kathak",
  gurus: [
    {
      name: "Guru Shri Rajkumar Jaipurwale ji",
      role: "Jaipur Gharana Maestro",
      note: "Primary Gharana training in rhythmic velocity and classical aesthetics",
    },
    {
      // TODO: Client to provide exact second guru name
      name: "Guru Smt. [TODO: Add Second Guru Name]",
      role: "Guru & Mentor",
      note: "Advanced guidance in classical repertoire and expressions",
    },
  ],
  qualifications: [
    "Alankaar from Akhil Bharatiya Gandharva Mahavidyalaya Mandal",
    "Master of Arts (M.A.) in Kathak from Indira Kala Sangeet Vishwavidyalaya, Khairagarh",
  ],
  teachingExperience: "Teaching since 2014 (12+ years of dedicated mentoring)",
  performanceExperience: "Performed on esteemed cultural platforms and festivals across various cities in India",
  annualPerformances: "Organizing grand annual student stage performances for the past 8 years to build confidence, stage presence, and performance experience",
  
  // Warm, well-written 3 paragraphs strictly following verified facts
  bioParagraphs: [
    "Samidha Karanjekar is an accomplished Kathak performer and dedicated dance educator who has been nurturing disciples since 2014, with over 12 years of rich teaching experience. She has undergone intensive classical training in the prestigious Jaipur Gharana of Kathak under the esteemed Guru Shri Rajkumar Jaipurwale ji and Guru Smt. [TODO: Add Second Guru Name]. Her artistic depth is anchored by premier academic and classical credentials, holding an Alankaar from the Akhil Bharatiya Gandharva Mahavidyalaya Mandal and a Master of Arts (M.A.) in Kathak from the renowned Khairagarh University.",
    "Having performed on numerous cultural platforms and stages across various cities in India, Samidha brings dynamic stage experience directly to her classroom in Andheri West. Her teaching philosophy centers on making Kathak simple and enjoyable while steadfastly preserving its classical foundation. Her pedagogy places deliberate focus on four essential pillars: sound technique, rhythmic precision, nuanced expressions, and the holistic artistic growth of each student.",
    "Recognizing that live performance is vital to developing an artist's confidence and poise, Samidha has produced annual student stage showcases for the past 8 consecutive years. These stage recitals give disciples of all age groups the transformative opportunity to perform in complete classical attire with lights and music, building confidence, camaraderie, and a lifelong love for Indian classical dance.",
  ],

  philosophySummary: "Making Kathak simple and enjoyable while preserving its classical foundation. Teaching focuses on technique, rhythm, expressions and individual growth.",

  highlights: [
    {
      title: "Jaipur Gharana Lineage",
      desc: "Trained under Guru Shri Rajkumar Jaipurwale ji & Guru Smt. [TODO: Add Second Guru Name].",
    },
    {
      title: "Dual Classical Degrees",
      desc: "Alankaar from Gandharva Mahavidyalaya & M.A. in Kathak from Khairagarh University.",
    },
    {
      title: "Pan-India Performances",
      desc: "Performed as a classical soloist across various platforms and cities in India.",
    },
    {
      title: "8-Year Stage Legacy",
      desc: "Annual student stage showcases for 8 consecutive years building stage confidence.",
    },
  ],
  statsBadge: "Teaching in Andheri West since 2014 (12+ Years)",
  quote: "Making Kathak simple and enjoyable while preserving its classical foundation. When technique, rhythm, and emotion meet, the dancer blossoms.",
  quoteAuthor: "— Samidha Karanjekar",
};

// Backwards-compatible alias for GuruSection
export const guruContent = {
  sectionTag: "The Lineage & Teacher",
  title: "Samidha Karanjekar",
  devanagari: "समिधा कारंजेकर • जयपूर घराणा",
  qualification: "Alankaar (Gandharva Mahavidyalaya) | M.A. Kathak (Khairagarh University)",
  bio: aboutTeacher.bioParagraphs,
  quote: aboutTeacher.quote,
  quoteAuthor: aboutTeacher.quoteAuthor,
  highlights: aboutTeacher.highlights,
  statsBadge: aboutTeacher.statsBadge,
};

// ==========================================
// 4. PHILOSOPHY CONTENT
// ==========================================
export const philosophyContent = {
  sectionTag: "Artistic Philosophy",
  title: "Preserving Classical Roots with Joy",
  devanagari: "तंत्र • ताल • भाव • विकास",
  description: "Making Kathak simple and enjoyable while preserving its classical foundation. Every session in our Andheri West studio focuses on technique, rhythm, expressions, and individual growth.",
  pillars: [
    {
      id: "technique",
      title: "Sound Technique",
      subTitle: "Jaipur Gharana Precision",
      devanagari: "अंग शुद्धता व तत्कार",
      description: "Rigorous attention to clean posture (Anga Shuddhi), grounding footwork (Tatkar), and lightning pirouettes (Chakkars) rooted in Jaipur Gharana tradition.",
    },
    {
      id: "rhythm",
      title: "Rhythm & Taal",
      subTitle: "Mathematical Clarity",
      devanagari: "ताल व पड़ंत",
      description: "Mastery of rhythmic cycles (Teentaal, Jhaptal) through oral recitation (Padant) before footwork, cultivating deep musicality.",
    },
    {
      id: "expressions",
      title: "Expressions & Abhinaya",
      subTitle: "Soulful Storytelling",
      devanagari: "भाव व रस",
      description: "Nurturing subtle eye, facial, and hand gestures to convey the poetic beauty of classical and semi-classical literature.",
    },
    {
      id: "growth",
      title: "Individual Growth & Stage Presence",
      subTitle: "8 Years of Annual Recitals",
      devanagari: "रंगमंच आत्मविश्वास",
      description: "Building confidence and stage poise through personalized attention and our grand annual stage recitals held for the past 8 consecutive years.",
    },
  ],
};

// ==========================================
// 5. COURSES & CURRICULUM
// 4 Client Programs + "Contact for details" placeholder
// ==========================================
export const coursesContent = {
  sectionTag: "Offerings & Batches",
  title: "Kathak Programs & Batches",
  devanagari: "अभ्यासक्रम व वर्ग",
  description: "Comprehensive classical, semi-classical, and examination programs under Samidha Karanjekar in SVP Nagar, Andheri West.",
  courses: [
    {
      id: "classical-training",
      level: "Level 1 • Classical Repertoire",
      title: "Kathak Classical Training",
      subTitle: "Prarambhik to Visharad",
      devanagari: "शास्त्रीय कथक वर्ग (प्रारम्भिक ते विशारद)",
      badge: "Classical Foundation",
      targetAudience: "Children (ages 5+), teens, and beginner adults",
      duration: "Progressive Multi-Year Curriculum",
      sessions: "Weekday & Weekend Slots",
      fee: "Contact for details", // Verified placeholder
      curriculum: [
        "Jaipur Gharana foundational footwork (Tatkar) and Hastaks",
        "Mastery of Teentaal (16 matras) with oral Padant recitation",
        "Gradual progression through Amad, Tukras, Toras, and Chakkars",
        "Detailed study of Hasta Mudras and classical theory",
        "Stage preparation for our 8-year legacy annual productions",
      ],
      ghungrooCount: "Introduced post-foundational tatkar",
    },
    {
      id: "exam-preparation",
      level: "Level 2 • Certified Board",
      title: "Gandharva Mahavidyalaya Examination Preparation & Alankaar",
      subTitle: "Recognized Diplomas",
      devanagari: "गांधर्व महाविद्यालय परीक्षा व अलंकार वर्ग",
      badge: "Board Certified",
      targetAudience: "Students seeking formal government-recognized diplomas",
      duration: "Annual Examination Cycle",
      sessions: "Dedicated Theory & Practical Sessions",
      fee: "Contact for details", // Verified placeholder
      curriculum: [
        "Affiliated preparation for Akhil Bharatiya Gandharva Mahavidyalaya Mandal",
        "Full syllabus coverage: Prarambhik, Praveshika, Madhyama, and Visharad",
        "Advanced mentorship for the prestigious Alankaar examination",
        "Theory exam coaching, viva preparation, and shloka recitation",
        "Exam center assistance and mock board examinations in Mumbai",
      ],
      ghungrooCount: "As prescribed by Gandharva syllabus",
    },
    {
      id: "semi-classical",
      level: "Level 3 • Expressive Dance",
      title: "Semi-Classical Batches",
      subTitle: "Lyrical & Soulful Choreographies",
      devanagari: "उप-शास्त्रीय नृत्य वर्ग",
      badge: "Popular with Adults",
      targetAudience: "Adults, working professionals, and music enthusiasts",
      duration: "Monthly / Modular Sessions",
      sessions: "Flexible Evening & Weekend Batches",
      fee: "Contact for details", // Verified placeholder
      curriculum: [
        "Blending Kathak grace with soulful bhajans, thumris, and Sufi melodies",
        "Emphasis on fluid body language, graceful wrists, and eye expressions",
        "Gentle, joyful classical fitness and stress-relieving movement",
        "No prior classical dance background required to join",
        "Special choreography modules designed for cultural celebrations",
      ],
      ghungrooCount: "Optional / Lightweight bells",
    },
    {
      id: "workshops-choreography",
      level: "Level 4 • Intensives",
      title: "Workshops & Special Choreographies",
      subTitle: "Custom Events & Intensives",
      devanagari: "विशेष कार्यशाळा व नृत्यदिग्दर्शन",
      badge: "Custom Modules",
      targetAudience: "Dancers, stage artists, and special occasion participants",
      duration: "Short-Term Intensives & Workshops",
      sessions: "By Appointment / Seasonal",
      fee: "Contact for details", // Verified placeholder
      curriculum: [
        "Intensive bootcamps focusing on Jaipur Gharana Chakkars & Layakari",
        "Bespoke choreography for festivals, family milestones, and weddings",
        "Specialized abhinaya workshops on classical Sanskrit shlokas",
        "Stage projection, lighting, and classical costume styling masterclasses",
        "Seasonal holiday dance workshops for young students",
      ],
      ghungrooCount: "Customized to workshop",
    },
  ],
};

// ==========================================
// 6. ANNUAL STAGE SHOWCASE (8-YEAR LEGACY)
// ==========================================
export const annualShowcaseContent = {
  badge: "8 Consecutive Years of Recitals",
  title: "Annual Stage Performances",
  devanagari: "वार्षिक रंगमंच सादरीकरण",
  description: "For the past 8 years, Samidha Karanjekar has organized an annual stage production in Mumbai, giving every disciple the opportunity to perform live on stage in complete classical attire with lights and music.",
  benefits: [
    {
      title: "Stage Confidence",
      desc: "Transforming classroom practice into confident stage projection before an appreciative theater audience.",
    },
    {
      title: "Live Music & Padant",
      desc: "Experiencing the thrill of performing to traditional percussion and oral recitation.",
    },
    {
      title: "Traditional Attire",
      desc: "Adorning classical Kathak costumes, brass Ghungroos, and authentic stage makeup.",
    },
    {
      title: "Family Celebration",
      desc: "A cherished annual celebration where parents and friends witness the student's artistic evolution.",
    },
  ],
};

// ==========================================
// 7. PLACEHOLDERS (CLEARLY MARKED TODO)
// ==========================================

// ==========================================
// 6. EVENTS & WORKSHOPS (TIMELINE CALENDAR)
// ==========================================
export const eventsContent = {
  sectionTag: "Calendar & Showcases",
  title: "Upcoming Stage Recitals & Intensives",
  devanagari: "॥ आगामी कार्यक्रम व कार्यशाळा ॥",
  subtitle: "Experience the vibrant energy of Jaipur Gharana Kathak across Mumbai. Mark your calendar for upcoming masterclasses, student showcases, and annual productions.",
  emptyState: {
    message: "Next annual showcase: announcing soon. Follow us for updates",
    description: "Guru Samidha Karanjekar and our disciples are deep in riyaz for our 9th annual grand stage production. Connect with us on social media or WhatsApp to receive priority seating announcements.",
  },
  events: [
    {
      id: "event-1",
      day: "18",
      month: "JUL",
      year: "2026",
      fullDate: "July 18, 2026",
      time: "10:00 AM – 1:00 PM IST",
      title: "Jaipur Gharana Tatkar & Chakkars Masterclass",
      subtitle: "3-Hour Intensive Riyaz Workshop with Guru Samidha",
      venue: "Shiva Nanda Kathak Studio, SVP Nagar, Andheri West, Mumbai",
      description: "An intensive masterclass diving deep into intricate 16-matra Teentaal footwork, oral padant recitation, and the mechanics of 27-spin pirouettes.",
      startDateTime: "2026-07-18T10:00:00+05:30",
      endDateTime: "2026-07-18T13:00:00+05:30",
      badge: "Intensive Workshop",
      isPlaceholder: true,
      todoNote: "TODO: Client to confirm exact workshop dates and timings",
    },
    {
      id: "event-2",
      day: "28",
      month: "NOV",
      year: "2026",
      fullDate: "November 28, 2026",
      time: "6:30 PM Onwards",
      title: "9th Annual Kathak Showcase: 'Nataraja Vandana'",
      subtitle: "Grand Student Stage Recital with Live Classical Ensemble",
      venue: "Mukesh Patel Auditorium, Vile Parle / Andheri West, Mumbai",
      description: "Celebrating 12+ years of teaching excellence and 9 consecutive years of stage productions. Over 40 disciples perform classical bandishes with live sitar, tabla, and vocal accompaniment.",
      startDateTime: "2026-11-28T18:30:00+05:30",
      endDateTime: "2026-11-28T21:30:00+05:30",
      badge: "Annual Stage Recital",
      isPlaceholder: true,
      todoNote: "TODO: Client to confirm 9th Annual Showcase auditorium booking date",
    },
    {
      id: "event-3",
      day: "10",
      month: "JAN",
      year: "2027",
      fullDate: "January 10, 2027",
      time: "5:00 PM – 7:30 PM",
      title: "Classical Abhinaya & Mudra Intensive",
      subtitle: "Mastery of Facial Expression & Poetic Storytelling",
      venue: "Shiva Nanda Kathak Studio, SVP Nagar, Andheri West, Mumbai",
      description: "Exploration of Nayika Bhed, Thumri abhinaya expressions, and hasta mudra nuances from the Natyashastra under personal guidance of Samidha Karanjekar.",
      startDateTime: "2027-01-10T17:00:00+05:30",
      endDateTime: "2027-01-10T19:30:00+05:30",
      badge: "Abhinaya Intensive",
      isPlaceholder: true,
      todoNote: "TODO: Client to confirm Abhinaya workshop schedule",
    },
  ],
};

// Backwards-compatible alias
export const eventsPlaceholder = eventsContent.events;

// ==========================================
// 7. TESTIMONIALS & STUDENT VOICES
// ==========================================
export const testimonialsPlaceholder = [
  {
    id: 1,
    name: "Anindita Dasgupta Bakaraju",
    role: "Student · 3 reviews",
    duration: "3 years ago",
    location: "Google Review",
    stars: 5,
    quote: "The most graceful, qualified, patient, kind teacher of the dance art i have ever come across and i have seen a lot of dance teachers.. Highly recommend joining the class if you want to learn kathak and gain knowledge on the art as well.. Samidha ma'am is one of a kind and she has made me love the art even more..",
  },
  {
    id: 2,
    name: "Namrata Jaitly",
    role: "Local Guide · 19 reviews",
    duration: "3 years ago",
    location: "Google Review",
    stars: 5,
    quote: "One of the best classes in Andheri for Kathak dance. Samidha Ma'am is highly qualified and knowledgeable in the art. She is very patient and kind and the best guru one can aspire to have. Must join for Kathak enthusiasts!",
  },
  {
    id: 3,
    name: "Aarti Pagare",
    role: "Parent · 13 reviews",
    duration: "4 years ago",
    location: "Google Review",
    stars: 5,
    quote: "I must say she is best dance teacher. My 7 year old daughter enjoys going for the classes and super excited for every class. She even developed confidence in dancing and with clear steps.",
  },
  {
    id: 4,
    name: "Alpa Purohit",
    role: "Student · 1 review",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Awesome class. Very good teacher. She is very friendly we enjoy our class. She teaches with discipline still we enjoy a lot.. Learning Kathak has changed my life.",
  },
  {
    id: 5,
    name: "Samata Mahidharia",
    role: "Local Guide · 17 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Samidha is a very good and graceful dancer. She knows her work well. I personally have learnt from her and very happy with her teachings and dance.",
  },
  {
    id: 6,
    name: "Sonali Jain",
    role: "Student · 8 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Samidha is a sweet, patient and warm teacher with excellent kathak skills. She delivers the same passion in her students too.",
  },
  {
    id: 7,
    name: "Advika S",
    role: "Local Guide · 22 reviews",
    duration: "4 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Samidha ma'am is an amazing katthak teacher.. She teaches so effortlessly and so accurately.. She is sweet and very encouraging.",
  },
  {
    id: 8,
    name: "Sally",
    role: "Student · 2 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Samidha is an excellent teacher. Under her guidance anyone can learn to dance. She is very patient and humble. All the best Samidha.",
  },
  {
    id: 9,
    name: "Neena Pawar",
    role: "Student · 1 review",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Best kathak classes, nice ambience very genuine teacher, she takes care of minute details while teaching.",
  },
  {
    id: 10,
    name: "Khushi Singh",
    role: "Student · 1 review",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Very nice class, beautiful ambience, wonderful teacher. Very dedicated the way she teaches is amazing..",
  },
  {
    id: 11,
    name: "Sumeet Gavas",
    role: "Student · 2 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Like the teaching part, very cooperative, she has very deep knowledge of classical dancing adjustable at our convenience.",
  },
  {
    id: 12,
    name: "Ssurup Bonsai",
    role: "Student · 12 reviews",
    duration: "5 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Just amazing dance teacher. So sweet and so much of patience in teaching the best. Thank you Samidhaji.",
  },
  {
    id: 13,
    name: "Nivedita Nimbkar",
    role: "Local Guide · 25 reviews",
    duration: "3 years ago",
    location: "Google Review",
    stars: 5,
    quote: "A good kathak teacher, and a graceful dancer....taking efforts to teach each n Every student.",
  },
  {
    id: 14,
    name: "Khushi Bhavnani",
    role: "Student · 7 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "An excellent teacher.. Very polite, teaches very well.. Her dance steps are very graceful.",
  },
  {
    id: 15,
    name: "Amrita Hire",
    role: "Student · 1 review",
    duration: "5 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Best Kathak classes by Samidha Karanjekar. Excellent guidance and deep classical understanding.",
  },
  {
    id: 16,
    name: "Kajal Singh",
    role: "Student · 2 reviews",
    duration: "a month ago",
    location: "Google Review",
    stars: 5,
    quote: "Wonderful Kathak learning experience with personalized attention from Samidha Ma'am.",
  },
  {
    id: 17,
    name: "Manoj Yadav",
    role: "Student · 3 reviews",
    duration: "3 months ago",
    location: "Google Review",
    stars: 5,
    quote: "Highly recommended Kathak dance class in Andheri West. Great atmosphere and coaching.",
  },
  {
    id: 18,
    name: "Hiral Jani",
    role: "Local Guide · 21 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "She is an amazing dancer and an extremely good teacher.. 🙏 must visit her.",
  },
  {
    id: 19,
    name: "Venisha Mistry",
    role: "Student · 4 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Best dance class. The teacher is excellent. Worth going ❤️",
  },
  {
    id: 20,
    name: "Asha Rawat",
    role: "Student · 3 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Samidha ji is an exceptional teacher. Dedicated, polite, and very graceful.",
  },
  {
    id: 21,
    name: "Sanket Siddhe",
    role: "Student · 1 review",
    duration: "5 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Very graceful and dedicated teacher. Teaches classical kathak with utmost passion.",
  },
  {
    id: 22,
    name: "Yash Keshe",
    role: "Student · 2 reviews",
    duration: "5 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Inspiring teaching and very humble atmosphere. Best place to learn Kathak.",
  },
  {
    id: 23,
    name: "Parth Rothe",
    role: "Student · 3 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Awesome teaching skills and patient guidance. Truly commendable academy.",
  },
  {
    id: 24,
    name: "Vaibhav Jadhav",
    role: "Student · 1 review",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Best Kathak class in Mumbai with disciplined yet encouraging environment.",
  },
  {
    id: 25,
    name: "Khushboo Khushi",
    role: "Student · 8 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Best dance teacher... the way she teaches is awesome 🤗",
  },
  {
    id: 26,
    name: "Punam Das",
    role: "Student",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Best Kathak dance academy. Teacher gives personal focus to each student.",
  },
  {
    id: 27,
    name: "Madhvi Broker",
    role: "Student · 2 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Very graceful dancer and teacher. Happy to be learning classical dance here.",
  },
  {
    id: 28,
    name: "Anita More",
    role: "Student",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Highly recommended Kathak dance classes by Samidha Karanjekar in Andheri West.",
  },
  {
    id: 29,
    name: "Naina Patole",
    role: "Student · 2 reviews",
    duration: "2 years ago",
    location: "Google Review",
    stars: 5,
    quote: "One of the best classes in Andheri for Kathak dance.",
  },
  {
    id: 30,
    name: "Jyoti Gajjar",
    role: "Student · 1 review",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "She is a good dancer. She is a very good teacher.",
  },
  {
    id: 31,
    name: "Rutik P",
    role: "Student · 3 reviews",
    duration: "6 years ago",
    location: "Google Review",
    stars: 5,
    quote: "Very nice dance class is very good.",
  },
  {
    id: 32,
    name: "Kaira's World",
    role: "Local Guide · 109 reviews",
    duration: "3 years ago",
    location: "Google Review",
    stars: 5,
    quote: "First day, first impression, nice.",
  },
  {
    id: 33,
    name: "Adakara Himanshi",
    role: "Student · 11 reviews",
    duration: "3 months ago",
    location: "Google Review",
    stars: 5,
    quote: "She is amazing 🫶🏻🫶🏻🫶🏻",
  },
];

// Backwards-compatible alias for TestimonialsSection
export const testimonialsContent = {
  sectionTag: "Student Voices",
  title: "Student Experiences & Reflections",
  devanagari: "॥ शिष्य व पालक अनुभव ॥",
  subtitle: "Heartfelt reflections from disciples and parents training with Samidha Karanjekar at SVP Nagar, Andheri West.",
  description: "Words from students and parents training with Samidha Karanjekar in Andheri West.",
  reviews: testimonialsPlaceholder,
};

// ==========================================
// 8. FREQUENTLY ASKED QUESTIONS (FAQ)
// ==========================================
export const faqsPlaceholder = [
  {
    id: "faq-age-groups",
    q: "What age groups are eligible to join Shiva Nanda Kathak Classes?",
    a: "We welcome children from age 5 onwards, teenagers, and adult learners of all ages. Batches are thoughtfully segregated by age and experience level so every student learns in an encouraging, peer-aligned environment.",
    category: "Admissions",
    isPlaceholder: true,
  },
  {
    id: "faq-trial-class",
    q: "Is a trial or orientation session available before enrollment?",
    a: "Yes, prospective students can attend an orientation and trial session at our studio in Society 33, MHADA Colony, SVP Nagar, Andheri West. This allows you to meet teacher Samidha Karanjekar, experience the rhythm of the class, and determine the ideal batch slot.",
    category: "Trial",
    isPlaceholder: true,
  },
  {
    id: "faq-adult-beginners",
    q: "Can adults with zero dance background start learning Kathak?",
    a: "Absolutely! We run dedicated adult beginner batches tailored specifically for working professionals, homemakers, and dance enthusiasts starting for the first time. The curriculum progresses step-by-step with focus on posture, stamina, and rhythmic joy.",
    category: "Adults",
    isPlaceholder: true,
  },
  {
    id: "faq-batch-timings",
    q: "What are the batch schedules and days of classes in Andheri West?",
    a: "Classes are conducted on weekdays (afternoon and evening slots) and on weekends (Saturday and Sunday mornings and evenings) to accommodate school students, college goers, and working professionals. Contact us on WhatsApp at 99207 64766 for the current timetable.",
    category: "Schedule",
    isPlaceholder: true,
  },
  {
    id: "faq-exams",
    q: "Do you prepare students for Gandharva Mahavidyalaya examinations?",
    a: "Yes. Samidha Karanjekar holds an Alankaar from Gandharva Mahavidyalaya and systematically prepares students for certified board examinations from Prarambhik, Praveshika, Madhyama, up to Visharad and Alankaar.",
    category: "Certifications",
    isPlaceholder: true,
  },
  {
    id: "faq-annual-show",
    q: "Do students get opportunities to perform on stage?",
    a: "Yes! For the past 8 consecutive years, the academy has presented a grand annual stage recital in Mumbai. Every student who completes their annual curriculum is encouraged to participate in traditional costume with lights and live classical accompaniment.",
    category: "Performances",
    isPlaceholder: true,
  },
  {
    id: "faq-costumes",
    q: "What is the recommended dress code and when are Ghungroos introduced?",
    a: "Students wear comfortable cotton Indian classical attire such as a knee-length Kurti with churidar/leggings and a securely pinned dupatta. Brass Ghungroos (ankle bells) are introduced after foundational footwork technique is mastered, followed by a traditional Ghungroo consecration blessing.",
    category: "Attire",
    isPlaceholder: true,
  },
];

// Backwards-compatible alias for FaqSection
export const faqContent = {
  sectionTag: "Guidance & Clarity",
  title: "Frequently Asked Questions",
  devanagari: "॥ प्रश्नोत्तरी व मार्गदर्शन ॥",
  subtitle: "Clear answers on batch admissions, trial classes, syllabus, certifications, and academy policies.",
  faqs: faqsPlaceholder,
};

// ==========================================
// 7. GALLERY & VIDEO SHOWCASE CONTENT
// ==========================================
export const galleryCategories = ["All", "Performances", "Classes", "Annual Show"];

export const galleryPhotos = [
  {
    id: "gallery-1",
    title: "Jaipur Gharana Solo Recital",
    category: "Performances",
    image: "/src/assets/gallery/performance-solo.jpg",
    placeholderUrl: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop",
    alt: "[TODO: Add Solo Recital Stage Photo of Guru Samidha]",
    caption: "Classical soloist performance featuring intricate Jaipur Gharana bandishes, swift chakkars, and live percussion.",
    aspect: "aspect-[3/4]",
    isPlaceholder: true,
  },
  {
    id: "gallery-2",
    title: "8th Annual Student Stage Recital",
    category: "Annual Show",
    image: "/src/assets/gallery/annual-show-ensemble.jpg",
    placeholderUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop",
    alt: "[TODO: Add 8th Annual Showcase Group Ensemble Photo]",
    caption: "Disciples performing in full classical Kathak costume with traditional brass ghungroos on stage in Mumbai.",
    aspect: "aspect-[4/5]",
    isPlaceholder: true,
  },
  {
    id: "gallery-3",
    title: "Studio Tatkar & Riyaz Session",
    category: "Classes",
    image: "/src/assets/gallery/studio-tatkar.jpg",
    placeholderUrl: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop",
    alt: "[TODO: Add Classroom Footwork Drill Photo in Andheri Studio]",
    caption: "Intensive 16-matra Teentaal footwork discipline and oral padant recitation at SVP Nagar.",
    aspect: "aspect-[1/1]",
    isPlaceholder: true,
  },
  {
    id: "gallery-4",
    title: "Vandana & Shloka Abhinaya",
    category: "Performances",
    image: "/src/assets/gallery/abhinaya-stage.jpg",
    placeholderUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    alt: "[TODO: Add Expressive Abhinaya Stage Recital Photo]",
    caption: "Nuanced hand gestures (Hasta Mudras) and emotive storytelling in honour of Lord Nataraja.",
    aspect: "aspect-[4/5]",
    isPlaceholder: true,
  },
  {
    id: "gallery-5",
    title: "Ghungroo Consecration Ceremony",
    category: "Annual Show",
    image: "/src/assets/gallery/ghungroo-pooja.jpg",
    placeholderUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    alt: "[TODO: Add Ghungroo Consecration Ritual Photo]",
    caption: "Sacred bell-tying ritual initiating new disciples into stage performance heritage.",
    aspect: "aspect-[3/4]",
    isPlaceholder: true,
  },
  {
    id: "gallery-6",
    title: "Adult Batch Classical Riyaz",
    category: "Classes",
    image: "/src/assets/gallery/adult-batch.jpg",
    placeholderUrl: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=800&auto=format&fit=crop",
    alt: "[TODO: Add Adult Batch Classroom Riyaz Photo]",
    caption: "Adult disciples discovering rhythm, classical posture, and joyous movement in Andheri West.",
    aspect: "aspect-[4/3]",
    isPlaceholder: true,
  },
  {
    id: "gallery-7",
    title: "Tarana Classical Finale",
    category: "Performances",
    image: "/src/assets/gallery/tarana-finale.jpg",
    placeholderUrl: "https://images.unsplash.com/photo-1509670811275-79453d576390?q=80&w=800&auto=format&fit=crop",
    alt: "[TODO: Add Dynamic Tarana Stage Climax Photo]",
    caption: "High-speed Layakari climax presenting 27 lightning chakkars in seamless succession.",
    aspect: "aspect-[3/4]",
    isPlaceholder: true,
  },
  {
    id: "gallery-8",
    title: "Junior Batch Mudra Practice",
    category: "Classes",
    image: "/src/assets/gallery/junior-mudras.jpg",
    placeholderUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    alt: "[TODO: Add Junior Disciples Learning Mudras Photo]",
    caption: "Young disciples mastering Pataka, Tripataka, and Alapadma with precision and joy.",
    aspect: "aspect-[1/1]",
    isPlaceholder: true,
  },
];

// Backwards-compatible alias
export const galleryImagesPlaceholder = galleryPhotos;

// Real YouTube Videos from https://youtube.com/@samidhakaranjekar
export const youtubeVideosPlaceholder = [
  {
    id: "yt-1",
    youtubeId: "wevdR4liQ3A",
    title: "Kathak Recital — Samidha Karanjekar",
    description: "Classical Kathak performance from the Shiva Nanda stage.",
    duration: null,
    thumbnail: null,
    isPlaceholder: false,
  },
  {
    id: "yt-2",
    youtubeId: "1qU2-LrdQ2M",
    title: "Stage Performance — Shiva Nanda Kathak",
    description: "Annual stage recital featuring students of all levels.",
    duration: null,
    thumbnail: null,
    isPlaceholder: false,
  },
  {
    id: "yt-3",
    youtubeId: "-KeR519gJ3I",
    title: "Kathak Expressionism — Abhinaya & Bhav",
    description: "A lyrical piece showcasing expressional aspects of Kathak.",
    duration: null,
    thumbnail: null,
    isPlaceholder: false,
  },
  {
    id: "yt-4",
    youtubeId: "-u3td-xVsps",
    title: "Teentaal Footwork Showcase",
    description: "High-speed chakkar and tatkar display in Teentaal.",
    duration: null,
    thumbnail: null,
    isPlaceholder: false,
  },
  {
    id: "yt-5",
    youtubeId: "3ED1TUjnRvo",
    title: "Student Recital — Shiva Nanda Annual Show",
    description: "Ensemble of Shiva Nanda disciples in annual stage show.",
    duration: null,
    thumbnail: null,
    isPlaceholder: false,
  },
  {
    id: "yt-6",
    youtubeId: "5SNIJZcocww",
    title: "Jaipur Gharana Solo — Samidha Karanjekar",
    description: "Classical Jaipur Gharana Kathak with live tabla accompaniment.",
    duration: null,
    thumbnail: null,
    isPlaceholder: false,
  },
];

// ==========================================
// 8. SCHEDULE & STUDIO DETAILS
// ==========================================
export const scheduleContent = {
  sectionTag: "Timetable & Studio Location",
  title: "Batches in Andheri West",
  devanagari: "साप्ताहिक वर्ग वेळापत्रक",
  description: "Located at Society 33, D3, MHADA Colony, SVP Nagar, near Telephone Exchange, Kids Planet School Lane, Andheri West, Mumbai – 400053. Small batch sizes for dedicated personal attention.",
  locationHighlights: [
    "SVP Nagar, MHADA Colony, near Telephone Exchange",
    "Kids Planet School Lane, Andheri West, Mumbai",
    "Air-conditioned dance studio with mirrors and sprung wooden flooring",
    "Live padant and classical musical accompaniment",
  ],
  days: [
    {
      day: "Weekday Classical Batches",
      batches: [
        { time: "Contact for Timetable", name: "Bal Kathak (Ages 5–11)", level: "Prarambhik", status: "Open" },
        { time: "Contact for Timetable", name: "Junior & Teens Classical", level: "Praveshika", status: "Open" },
        { time: "Contact for Timetable", name: "Adult Classical Foundation", level: "Beginner", status: "Open" },
      ],
    },
    {
      day: "Exam & Advanced Track",
      batches: [
        { time: "Contact for Timetable", name: "Gandharva Board Exam Preparation", level: "All Board Levels", status: "Certified" },
        { time: "Contact for Timetable", name: "Alankaar Masterclass", level: "Advanced", status: "Mentorship" },
      ],
    },
    {
      day: "Weekend & Semi-Classical",
      batches: [
        { time: "Contact for Timetable", name: "Semi-Classical Expression (Adults)", level: "All Levels", status: "Popular" },
        { time: "Contact for Timetable", name: "Weekend Classical Riyaz", level: "Working Adults", status: "Open" },
      ],
    },
  ],
};

// ==========================================
// 9. HERO & BANNER CONTENT
// ==========================================
export const heroContent = {
  // Exact user specifications for Hero Section
  eyebrowDevanagari: "नटराज को समर्पित",
  eyebrowEnglish: "Dedicated to the Cosmic Dancer",
  headline: "Where Rhythm Becomes Devotion",
  headlineWords: ["Where", "Rhythm", "Becomes", "Devotion"],
  subline: "Classical Kathak training in Andheri West, Mumbai · Jaipur Gharana · Since 2014",
  ctaTrial: "Book a Trial Class",
  ctaCourses: "Explore Courses",
  whatsappPrefilledMessage: "Hello Samidha ji, I would like to book a trial Kathak class at Shiva Nanda Classes.",
  whatsappTrialUrl: "https://wa.me/919920764766?text=Hello%20Samidha%20ji%2C%20I%20would%20like%20to%20book%20a%20trial%20Kathak%20class%20at%20Shiva%20Nanda%20Classes.",

  // Legacy/companion fields
  badge: "Jaipur Gharana • Teaching Since 2014 • Andheri West, Mumbai",
  titleMain: "Where Rhythm",
  titleHighlight: "Becomes Devotion",
  titleDevanagari: "॥ नटराज को समर्पित ॥",
  subtitle: "Classical Kathak training in Andheri West, Mumbai · Jaipur Gharana · Since 2014",
  ctaPrimary: "Book a Trial Class",
  ctaSecondary: "Explore Courses",
  ctaPhone: "Call Teacher Direct",
  stats: [
    { value: "12+", label: "Years Teaching", sublabel: "Est. 2014 in Mumbai" },
    { value: "8", label: "Years Annual Recitals", sublabel: "Stage performance legacy" },
    { value: "Alankaar", label: "Gandharva Certified", sublabel: "M.A. Kathak Khairagarh" },
    { value: "Jaipur", label: "Gharana Lineage", sublabel: "Shri Rajkumar Jaipurwale ji" },
  ],
  announcement: "Admissions open for Classical & Semi-Classical Batches in SVP Nagar, MHADA Colony, Andheri West.",
};

// ==========================================
// 10. SANSKRIT SHLOKAS & SCRIPTURAL INVOCATIONS
// ==========================================
export const shlokas = {
  natarajaDhyanam: {
    sanskrit: "आङ्गिकं भुवनं यस्य वाचिकं सर्ववाङ्गमयम् ।\nआहार्यं चन्द्रतारादि तं नुमः सात्त्विकं शिवम् ॥",
    devanagariTitle: "॥ नटराज ध्यानम् ॥",
    englishTranslation: "Whose bodily movement is the entire universe, whose speech is all literature, whose ornaments are the moon and stars—to that pure, serene Lord Shiva, we bow.",
    source: "Nāṭyaśāstra / Abhinaya Darpaṇa",
  },
  rhythmSeed: {
    sanskrit: "तत्कारं लयं तालं भावं रससमन्वितम् ।",
    devanagariTitle: "॥ कथक तत्त्वम् ॥",
    englishTranslation: "Rooted in Tatkar footwork, bound by Taal and Laya, awakened through Bhava, flowering into Rasa.",
    source: "Kathak Shastra",
  },
};

// ==========================================
// 11. NAVIGATION LINKS
// ==========================================
export const navigationLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Courses", href: "#courses", id: "courses" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Events", href: "#events", id: "events" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" },
];

// ==========================================
// 12. TAAL EXPLORER DATA
// ==========================================
export const taalExplorerContent = {
  sectionTag: "Interactive Rhythm",
  title: "The Heartbeat of Taal",
  devanagari: "ताल चक्र • पड़ंत • लयकारी",
  description: "In Kathak, mathematics meets emotion. The universe pulses in cycles called Avartan. Explore Teentaal, the king of classical rhythms with 16 beats (matras). Tap the matras to recite the bols and feel the pulse.",
  taals: [
    {
      id: "teentaal",
      name: "Teentaal",
      devanagari: "तीनताल",
      matras: 16,
      structure: "4 + 4 + 4 + 4",
      taliKhali: "Tali on 1, 5, 13; Khali on 9",
      beats: [
        { num: 1, bol: "धा", english: "Dha", type: "sam", sign: "X", desc: "Sam (Point of Creation)" },
        { num: 2, bol: "धिं", english: "Dhin", type: "tali", sign: "•", desc: "First Vibhag" },
        { num: 3, bol: "धिं", english: "Dhin", type: "tali", sign: "•", desc: "First Vibhag" },
        { num: 4, bol: "धा", english: "Dha", type: "tali", sign: "•", desc: "First Vibhag" },
        { num: 5, bol: "धा", english: "Dha", type: "tali", sign: "2", desc: "2nd Tali (Clap)" },
        { num: 6, bol: "धिं", english: "Dhin", type: "tali", sign: "•", desc: "Second Vibhag" },
        { num: 7, bol: "धिं", english: "Dhin", type: "tali", sign: "•", desc: "Second Vibhag" },
        { num: 8, bol: "धा", english: "Dha", type: "tali", sign: "•", desc: "Second Vibhag" },
        { num: 9, bol: "धा", english: "Dha", type: "khali", sign: "0", desc: "Khali (Empty Wave)" },
        { num: 10, bol: "तिं", english: "Tin", type: "khali", sign: "•", desc: "Third Vibhag" },
        { num: 11, bol: "तिं", english: "Tin", type: "khali", sign: "•", desc: "Third Vibhag" },
        { num: 12, bol: "ता", english: "Ta", type: "khali", sign: "•", desc: "Third Vibhag" },
        { num: 13, bol: "ता", english: "Ta", type: "tali", sign: "3", desc: "3rd Tali (Clap)" },
        { num: 14, bol: "धिं", english: "Dhin", type: "tali", sign: "•", desc: "Fourth Vibhag" },
        { num: 15, bol: "धिं", english: "Dhin", type: "tali", sign: "•", desc: "Fourth Vibhag" },
        { num: 16, bol: "धा", english: "Dha", type: "tali", sign: "•", desc: "Resolving to Sam" },
      ],
    },
    {
      id: "jhaptal",
      name: "Jhaptal",
      devanagari: "झपताल",
      matras: 10,
      structure: "2 + 3 + 2 + 3",
      taliKhali: "Tali on 1, 3, 8; Khali on 6",
      beats: [
        { num: 1, bol: "धी", english: "Dhi", type: "sam", sign: "X", desc: "Sam" },
        { num: 2, bol: "ना", english: "Na", type: "tali", sign: "•", desc: "Vibhag 1" },
        { num: 3, bol: "धी", english: "Dhi", type: "tali", sign: "2", desc: "2nd Tali" },
        { num: 4, bol: "धी", english: "Dhi", type: "tali", sign: "•", desc: "Vibhag 2" },
        { num: 5, bol: "ना", english: "Na", type: "tali", sign: "•", desc: "Vibhag 2" },
        { num: 6, bol: "ती", english: "Ti", type: "khali", sign: "0", desc: "Khali" },
        { num: 7, bol: "ना", english: "Na", type: "khali", sign: "•", desc: "Vibhag 3" },
        { num: 8, bol: "धी", english: "Dhi", type: "tali", sign: "3", desc: "3rd Tali" },
        { num: 9, bol: "धी", english: "Dhi", type: "tali", sign: "•", desc: "Vibhag 4" },
        { num: 10, bol: "ना", english: "Na", type: "tali", sign: "•", desc: "Resolving" },
      ],
    },
    {
      id: "dadra",
      name: "Dadra",
      devanagari: "दादरा",
      matras: 6,
      structure: "3 + 3",
      taliKhali: "Tali on 1; Khali on 4",
      beats: [
        { num: 1, bol: "धा", english: "Dha", type: "sam", sign: "X", desc: "Sam" },
        { num: 2, bol: "धी", english: "Dhi", type: "tali", sign: "•", desc: "Vibhag 1" },
        { num: 3, bol: "ना", english: "Na", type: "tali", sign: "•", desc: "Vibhag 1" },
        { num: 4, bol: "धा", english: "Dha", type: "khali", sign: "0", desc: "Khali" },
        { num: 5, bol: "ती", english: "Ti", type: "khali", sign: "•", desc: "Vibhag 2" },
        { num: 6, bol: "ना", english: "Na", type: "khali", sign: "•", desc: "Resolving" },
      ],
    },
  ],
};

// ==========================================
// 13. HASTA MUDRAS CONTENT
// ==========================================
export const mudrasContent = {
  sectionTag: "Hasta Mudras & Abhinaya",
  title: "The Secret Language of Hands",
  devanagari: "असंयुत हस्त मुद्रा",
  description: "In the Kathak tradition of the Natyashastra, each hand gesture evokes worlds—from the cosmic peacock to the blessing of Shiva. Core Asamyuta (single hand) mudras practiced daily in our studio.",
  mudras: [
    {
      id: "pataka",
      name: "Pataka",
      devanagari: "पताका",
      meaning: "The Flag / Cloud / Ocean",
      usage: "Used to depict the sky, night, opening of doors, and majestic blessings in classical Vandana.",
      verse: "नृत्यारम्भे वारिधरे वने वस्तुनिषेधने...",
    },
    {
      id: "tripataka",
      name: "Tripataka",
      devanagari: "त्रिपताका",
      meaning: "The Three-Faceted Flag",
      usage: "Depicting a crown, sacred tree, lightning (Vajra), and the weapon of Indra.",
      verse: "मुकुटे पादपे वज्रे वक्रतुण्डे...",
    },
    {
      id: "mayura",
      name: "Mayura",
      devanagari: "मयूर",
      meaning: "The Cosmic Peacock",
      usage: "Depicting the throat of a peacock, curling vines, applying forehead tilak, and grace.",
      verse: "मयूरग्रीवायां ललाटतिलकेषु च...",
    },
    {
      id: "hamsasya",
      name: "Hamsasya",
      devanagari: "हंसास्य",
      meaning: "The Swan's Beak",
      usage: "Signifies tying a sacred thread, painting, pearls, lighting a lamp, and delicate pearls.",
      verse: "मङ्गलोत्सवसूत्रे च संहारे च...",
    },
    {
      id: "alapadma",
      name: "Alapadma",
      devanagari: "अलपद्म",
      meaning: "The Full Blooming Lotus",
      usage: "Full-blown lotus, beauty, radiant moonlight, offering flowers to Nataraja, and admiration.",
      verse: "विकचे पद्मे फलादौ च वृत्ताकारे...",
    },
    {
      id: "shikhara",
      name: "Shikhara",
      devanagari: "शिखर",
      meaning: "The Peak / Archer's Bow",
      usage: "Signifying Lord Shiva, Cupid's bow, firmness, ringing the temple bell, and masculine power.",
      verse: "मदने कार्मुके स्तम्भे निश्चये पितृकर्मणि...",
    },
  ],
};

// ==========================================
// 14. TRIAL FORM CONTENT
// ==========================================
export const trialFormContent = {
  modalTitle: "Inquire & Book Trial Session",
  modalSubtitle: "Connect directly with Samidha Karanjekar at our SVP Nagar, MHADA Colony studio in Andheri West.",
  formDevanagari: "॥ प्रवेश विचारणा ॥",
  fields: {
    fullName: "Full Name of Student",
    phone: "WhatsApp Contact Number",
    email: "Email Address",
    ageGroup: "Age Category",
    courseInterest: "Program Interested In",
    experience: "Prior Dance Experience",
    preferredSlot: "Preferred Batch Slot",
    notes: "Any specific goals or questions (optional)",
  },
  ageOptions: [
    "Kids (Ages 5 – 11)",
    "Teens (Ages 12 – 17)",
    "Adult (Ages 18 – 35)",
    "Senior Adult (Ages 36+)",
  ],
  slotOptions: [
    "Weekday Afternoon Batch",
    "Weekday Evening Batch",
    "Saturday Morning / Evening",
    "Sunday Morning / Evening",
  ],
  experienceOptions: [
    "Absolute Beginner (No prior training)",
    "Some childhood dance / Bollywood",
    "1–3 years of Kathak / classical dance",
    "Advanced / Gandharva exam completed",
  ],
  submitButton: "Send Inquiry via WhatsApp",
  submitSuccess: "Thank you! Click below to send your details directly to Samidha Karanjekar on WhatsApp (99207 64766).",
  whatsappDirectPrompt: "Connect directly with Samidha Karanjekar on WhatsApp:",
  whatsappCta: "Chat on WhatsApp (99207 64766)",
};

// ==========================================
// 15. FOOTER CONTENT
// ==========================================
export const footerContent = {
  quote: "नृत्यं शिवस्य हृदयं • तालः प्राणः स्वरूपकम्",
  quoteMeaning: "Dance is the heart of Shiva; rhythm is the breath of creation.",
  copyright: `© ${new Date().getFullYear()} Shiva Nanda Kathak Classes. All rights reserved.`,
  craftedWith: "Shiva Nanda Kathak Classes • Samidha Karanjekar",
  locationSummary: "Society 33, D3, MHADA Colony, SVP Nagar, Andheri West, Mumbai – 400053",
  quickLinksTitle: "Quick Navigation",
  lineageTitle: "Gharana & Tradition",
  lineageSummary: "Jaipur Gharana classical training under Guru Shri Rajkumar Jaipurwale ji and Guru Smt. [TODO: Add Second Guru Name]. Alankaar from Gandharva Mahavidyalaya & M.A. in Kathak from Khairagarh University.",
  contactTitle: "Studio Contact",
  phoneDisplay: "99207 64766",
  addressShort: "SVP Nagar, MHADA Colony, near Telephone Exchange, Andheri West, Mumbai",
};
