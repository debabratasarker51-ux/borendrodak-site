/* BorendroDak — shared front-end behaviors
   - Sticky nav: mobile hamburger
   - Active navigation highlight (per-page)
   - Fade-in reveal animations
*/

(function () {
  "use strict";

  // ---------- Language (EN / বাংলা) ----------
  // Uses data attributes:
  // - data-i18n="key"             => element.textContent
  // - data-i18n-placeholder="key" => element.placeholder
  // - data-i18n-aria="key"        => element.ariaLabel
  var I18N = {
    en: {
      "brand.title": "BorendroDak Health & Welfare Foundation",
      "brand.subtitle": "Health & Welfare • Rajshahi",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.programs": "Programs",
      "nav.activities": "Activities",
      "nav.volunteer": "Volunteer",
      "nav.donate": "Donate",
      "nav.contact": "Contact",
      "cta.volunteer": "Join as Volunteer",
      "cta.donate": "Donate",
      "m.call": "Call",
      "m.donate": "Donate",
      "home.eyebrow": "Community-first support",
      "home.h1": "Trusted health & welfare support—when families need it most.",
      "home.lead":
        "BorendroDak Health & Welfare Foundation helps patients and families with coordination for doctor appointments, emergency medicine, blood support, and welfare assistance—through one simple hotline.",
      "home.btn.donate": "Donate now",
      "home.btn.programs": "Explore programs",
      "home.btn.contact": "Get help / Contact",
      "home.trust.hotline": "Hotline:",
      "home.trust.location": "Location:",
      "home.trust.response": "Response:",
      "home.trust.locationVal": "Rajshahi",
      "home.trust.responseVal": "Fast coordination",
      "home.emergency.title": "Emergency support",
      "home.emergency.subtitle": "One number for hotline + WhatsApp coordination.",
      "home.emergency.label": "Hotline / WhatsApp",
      "home.emergency.call": "Call now",
      "home.emergency.wa": "WhatsApp",
      "home.qs.title1": "Doctor appointment",
      "home.qs.desc1": "Specialist & general guidance",
      "home.qs.title2": "Emergency medicine",
      "home.qs.desc2": "Support for hard-to-find medicines",
      "home.qs.title3": "Blood support",
      "home.qs.desc3": "Donor & blood bank coordination",
      "home.qs.title4": "Emergency transport",
      "home.qs.desc4": "Patient transport coordination",

      "skip": "Skip to content",
      "lang.label": "Language",

      "home.impact.h2": "Our impact areas",
      "home.impact.p": "Clear programs help donors understand where support goes—health, welfare, and emergency response.",
      "home.impact.btn": "View all programs",
      "home.impact.c1.h3": "Medical support",
      "home.impact.c1.p": "Appointment coordination, telemedicine support, and guidance to reach the right care faster.",
      "home.impact.c1.meta": "Focus: patient navigation",
      "home.impact.c2.h3": "Welfare assistance",
      "home.impact.c2.p": "Community welfare support for families in crisis—coordination and follow-up, with dignity.",
      "home.impact.c2.meta": "Focus: family support",
      "home.impact.c3.h3": "Blood donation network",
      "home.impact.c3.p": "Connecting donors, blood banks, and urgent patient needs—especially during emergency requests.",
      "home.impact.c3.meta": "Focus: emergency response",

      "home.stats.h2": "Transparency & progress",
      "home.stats.p": "Numbers help build trust. These can be updated anytime as the foundation grows.",
      "home.stats.s1": "Coordination mindset",
      "home.stats.s2": "Core service lines",
      "home.stats.s3": "Hotline for support",
      "home.stats.s4": "Community base",
      "home.stats.note": "Note: Replace the stats with real counts (patients supported, donors connected, transports coordinated) for maximum credibility.",

      "home.recent.h2": "Recent activities",
      "home.recent.p": "Updates show ongoing work and build confidence for donors and volunteers.",
      "home.recent.btn": "Go to activities",
      "home.recent.tag1": "Health",
      "home.recent.h3_1": "Patient appointment coordination drive",
      "home.recent.p_1": "Helping patients reach the right specialist and reduce delays through hotline guidance.",
      "home.recent.foot1a": "Rajshahi",
      "home.recent.foot1b": "Updated recently",
      "home.recent.tag2": "Blood",
      "home.recent.h3_2": "Emergency blood donor call",
      "home.recent.p_2": "Coordinating donors and blood banks quickly when urgent requests come in.",
      "home.recent.foot2a": "Coordination",
      "home.recent.foot2b": "Ongoing",
      "home.recent.tag3": "Welfare",
      "home.recent.h3_3": "Family welfare follow-up",
      "home.recent.p_3": "Guidance and support to families during hardship, with privacy and dignity.",
      "home.recent.foot3a": "Community",
      "home.recent.foot3b": "Monthly",

      "home.dcta.h3": "Your donation makes support possible",
      "home.dcta.p": "Donations help us respond faster and assist more families. We prioritize transparency and responsible coordination. Visit the Donate page for bKash, Nagad, and Bank details.",
      "home.dcta.b1": "Donate",
      "home.dcta.b2": "Become a volunteer",
      "home.dcta.b3": "Need help?",

      "footer.title": "BorendroDak Health & Welfare Foundation",
      "footer.about": "A community-first foundation supporting health coordination, welfare assistance, and emergency response in Rajshahi.",
      "footer.contact": "Contact",
      "footer.quick": "Quick links",
      "footer.link.donate": "Donate",
      "footer.link.volunteer": "Volunteer",
      "footer.link.activities": "Activities",
      "footer.fine": "Built with care • Minimal & trustworthy design",

      "crumb.home": "Home",

      "about.h1": "About the Foundation",
      "about.lead": "Our mission is to support patients and families with trusted coordination—fast, respectful, and community-driven.",
      "about.who.h2": "Who we are",
      "about.who.p": "BorendroDak Health & Welfare Foundation is a non-political, non-profit service organization working to ensure accessible, affordable, and quality healthcare for vulnerable and marginalized people.\nWe support doctor appointments, diagnostics, hospital assistance, emergency blood and medicine support, and 24/7 emergency help.\nServing humanity—by your side day and night.",
      "about.mission.h3": "Mission",
      "about.mission.p": "Our goal is to build a humane, accessible, and equity-based healthcare system.\nSo that every person—especially vulnerable and low-income communities—can receive timely, affordable care.\nWe strive to ensure emergency medical support reaches people whenever needed.\nWe are committed to making rare essential medicines and safe blood support easier to access.\nWhen required, we aim to deliver basic primary healthcare at home and stand beside the patient.\nServing humanity—our vision is to provide fast, reliable, and compassionate healthcare support.",
      "about.values.h3": "Values",
      "about.values.p": "Humanity, equity, fast service, and trust—these four pillars guide our work.",
      "about.glance.h3": "At a glance",
      "about.glance.p": "A clear summary helps donors and partners trust the work.",
      "about.glance.hotline": "Hotline",
      "about.glance.focus": "Core focus",
      "about.glance.area": "Area",
      "about.glance.focusv": "Coordination + follow-up",
      "about.glance.areav": "Rajshahi & nearby",

      "programs.h1": "Programs & Services",
      "programs.lead": "Clear, practical programs—designed for speed, safety, and dignity during emergencies and everyday needs.",
      "programs.h2": "What we support",
      "programs.p": "These are the most common service requests we coordinate through our hotline and community network.",
      "programs.c1.h3": "Doctor appointment coordination",
      "programs.c1.p": "Helping patients book appointments, find relevant specialists, and navigate where to go.",
      "programs.c1.meta": "Best for: guidance + scheduling",
      "programs.c2.h3": "Emergency medicine support",
      "programs.c2.p": "Support to locate uncommon or urgent medicines through pharmacy contacts and quick coordination.",
      "programs.c2.meta": "Best for: urgent medicine search",
      "programs.c3.h3": "Blood support",
      "programs.c3.p": "Connecting donors, blood banks, and patient attendants to reduce time loss during emergencies.",
      "programs.c3.meta": "Best for: donor + blood bank linking",
      "programs.c4.h3": "Emergency transport",
      "programs.c4.p": "Assisting with transport coordination so patients can reach facilities faster when time is critical.",
      "programs.c4.meta": "Best for: transport coordination",
      "programs.c5.h3": "Admission & operation guidance",
      "programs.c5.p": "Coordination support and guidance for hospital admission and operation-related steps.",
      "programs.c5.meta": "Best for: hospital process help",
      "programs.c6.h3": "Telemedicine support",
      "programs.c6.p": "When possible, we help people access phone/video consultation or guidance before visiting a facility.",
      "programs.c6.meta": "Best for: remote guidance",
      "programs.cta.h3": "Want to support a program?",
      "programs.cta.p": "Your donation helps sustain coordination tools, hotline response, and emergency support work.",

      "activities.h1": "Activities & Updates",
      "activities.lead": "Regular updates help donors and partners understand real work on the ground.",
      "activities.h2": "Latest highlights",
      "activities.p": "Replace these cards with real photos and short write-ups (date, place, what happened, outcome).",
      "activities.cta.h3": "Support these activities",
      "activities.cta.p": "Donations help keep coordination active and allow faster response during emergencies.",

      "vol.h1": "Volunteer with us",
      "vol.lead": "A small form, a real impact. Share your details—our team will contact you.",
      "vol.form.title": "Volunteer form",
      "vol.name": "Full name",
      "vol.phone": "Phone",
      "vol.location": "Location",
      "vol.ph.name": "Your name",
      "vol.ph.phone": "01XXXXXXXXX",
      "vol.ph.location": "Area / City",
      "vol.submit": "Submit",
      "vol.contactInstead": "Contact instead",
      "vol.note": "Note: This demo form is static. Connect it to email/server later for real submissions.",
      "vol.side.h3": "Where volunteers help",
      "vol.side.p": "Hotline coordination, donor connections, transport calls, and community follow-up—always respecting privacy and safety.",
      "vol.side.meta": "We’ll guide you step-by-step",
      "vol.wa.h3": "Prefer WhatsApp?",
      "vol.wa.p": "Message us to join as a volunteer.",
      "vol.wa.btn": "WhatsApp now",

      "donate.h1": "Donate with confidence",
      "donate.lead": "Your support helps keep emergency coordination active and expands welfare assistance for families.",
      "donate.cta.h3": "Thank you for supporting BorendroDak",
      "donate.cta.p": "Choose a method below. After donating, please send the transaction ID to our WhatsApp so we can confirm and record it.",
      "donate.cta.btn1": "Send receipt on WhatsApp",
      "donate.cta.btn2": "Need help?",
      "donate.bk.sub": "Send Money / Merchant",
      "donate.ng.sub": "Send Money",
      "donate.bank.sub": "Account transfer",
      "donate.f.number": "Number",
      "donate.f.type": "Type",
      "donate.f.ref": "Reference",
      "donate.f.note": "Note",
      "donate.f.accName": "Account name",
      "donate.f.accNo": "Account no.",
      "donate.f.bank": "Bank",
      "donate.f.branch": "Branch",
      "donate.v.type1": "Personal / Merchant",
      "donate.v.refDonation": "Donation",
      "donate.v.noteName": "Write your name",
      "donate.qr.title": "QR Code",
      "donate.qr.help": "Place a QR image here later.",
      "donate.qr.help2": "QR placeholder.",
      "donate.qr.bankTitle": "Bank QR",
      "donate.qr.bankHelp": "Optional QR placeholder.",
      "donate.tip1": "Tip: Replace the placeholder number and add your real QR image for maximum trust.",
      "donate.tip2": "After sending, WhatsApp us the transaction ID for confirmation.",
      "donate.tip3": "Replace bank details with real info. Add a receipt email/phone to increase credibility.",
      "donate.foot.p": "Thank you for supporting our health & welfare work.",
      "donate.foot.h": "Donation help",

      "contact.h1": "Contact",
      "contact.lead": "If you need support or want to partner with us, reach out—our team will respond.",
      "contact.form.name": "Name",
      "contact.form.phone": "Phone",
      "contact.form.msg": "Message",
      "contact.form.ph.name": "Your name",
      "contact.form.ph.phone": "01XXXXXXXXX",
      "contact.form.ph.msg": "How can we help?",
      "contact.form.send": "Send",
      "contact.form.note": "Note: This form is static. Add a server endpoint later to receive messages.",
      "contact.hot.h3": "Hotline / WhatsApp",
      "contact.hot.p": "Use the same number for urgent coordination and quick communication.",
      "contact.addr.h3": "Address",
      "contact.addr.p": "Court Station, Rajpara, Rajshahi",
      "contact.addr.note": "(Add a Google Map embed later if needed.)"
    },
    bn: {
      "brand.title": "বরেন্দ্রডাক স্বাস্থ্য ও সমাজকল্যাণ ফাউন্ডেশন",
      "brand.subtitle": "স্বাস্থ্য ও সমাজকল্যাণ • রাজশাহী",
      "nav.home": "হোম",
      "nav.about": "আমাদের সম্পর্কে",
      "nav.programs": "সেবা/প্রোগ্রাম",
      "nav.activities": "কার্যক্রম",
      "nav.volunteer": "স্বেচ্ছাসেবক",
      "nav.donate": "ডোনেট",
      "nav.contact": "যোগাযোগ",
      "cta.volunteer": "স্বেচ্ছাসেবক হন",
      "cta.donate": "ডোনেট করুন",
      "m.call": "কল করুন",
      "m.donate": "ডোনেট",
      "home.eyebrow": "কমিউনিটি-ফার্স্ট সাপোর্ট",
      "home.h1": "স্বাস্থ্য ও সমাজকল্যাণ সহায়তা—পরিবারের প্রয়োজনের সময় পাশে।",
      "home.lead":
        "বরেন্দ্রডাক স্বাস্থ্য ও সমাজকল্যাণ ফাউন্ডেশন—ডাক্তার অ্যাপয়েন্টমেন্ট, জরুরি ঔষধ, রক্ত সহায়তা এবং কল্যাণমূলক সাপোর্ট—সবকিছুর সমন্বয় করে একটিমাত্র হটলাইনে।",
      "home.btn.donate": "ডোনেট করুন",
      "home.btn.programs": "সেবা দেখুন",
      "home.btn.contact": "সাহায্য/যোগাযোগ",
      "home.trust.hotline": "হটলাইন:",
      "home.trust.location": "এলাকা:",
      "home.trust.response": "রেসপন্স:",
      "home.trust.locationVal": "রাজশাহী",
      "home.trust.responseVal": "দ্রুত সমন্বয়",
      "home.emergency.title": "জরুরি সহায়তা",
      "home.emergency.subtitle": "এক নম্বরে hotline + WhatsApp সমন্বয়।",
      "home.emergency.label": "হটলাইন / WhatsApp",
      "home.emergency.call": "কল করুন",
      "home.emergency.wa": "WhatsApp",
      "home.qs.title1": "ডাক্তার অ্যাপয়েন্টমেন্ট",
      "home.qs.desc1": "বিশেষজ্ঞ/জেনারেল গাইডলাইন",
      "home.qs.title2": "জরুরি ঔষধ সহায়তা",
      "home.qs.desc2": "কঠিন ঔষধ খুঁজে পেতে সাপোর্ট",
      "home.qs.title3": "রক্ত সহায়তা",
      "home.qs.desc3": "ডোনার ও ব্লাড ব্যাংক সমন্বয়",
      "home.qs.title4": "জরুরি ট্রান্সপোর্ট",
      "home.qs.desc4": "রোগী পরিবহন সমন্বয়",

      "skip": "কনটেন্টে যান",
      "lang.label": "ভাষা",

      "home.impact.h2": "আমাদের কাজের ক্ষেত্র",
      "home.impact.p": "স্পষ্ট প্রোগ্রামগুলো ডোনারদের বুঝতে সাহায্য করে—স্বাস্থ্য, সমাজকল্যাণ ও জরুরি সাড়া।",
      "home.impact.btn": "সব প্রোগ্রাম দেখুন",
      "home.impact.c1.h3": "চিকিৎসা সহায়তা",
      "home.impact.c1.p": "অ্যাপয়েন্টমেন্ট সমন্বয়, টেলিমেডিসিন সাপোর্ট ও সঠিক চিকিৎসার পথে গাইডলাইন।",
      "home.impact.c1.meta": "ফোকাস: রোগী গাইডেন্স",
      "home.impact.c2.h3": "কল্যাণ সহায়তা",
      "home.impact.c2.p": "সংকটে থাকা পরিবারের পাশে—সমন্বয় ও ফলো-আপ, সম্মান ও গোপনীয়তা বজায় রেখে।",
      "home.impact.c2.meta": "ফোকাস: পরিবার সাপোর্ট",
      "home.impact.c3.h3": "রক্তদাতা নেটওয়ার্ক",
      "home.impact.c3.p": "ডোনার, ব্লাড ব্যাংক ও জরুরি প্রয়োজন—দ্রুত সংযোগ ও সমন্বয়।",
      "home.impact.c3.meta": "ফোকাস: জরুরি সাড়া",

      "home.stats.h2": "স্বচ্ছতা ও অগ্রগতি",
      "home.stats.p": "সংখ্যা বিশ্বাস গড়ে। ফাউন্ডেশন বড় হলে এগুলো সহজেই আপডেট করা যাবে।",
      "home.stats.s1": "সমন্বয়ভিত্তিক কাজ",
      "home.stats.s2": "কোর সেবা লাইন",
      "home.stats.s3": "একটি হটলাইন",
      "home.stats.s4": "কমিউনিটি বেস",
      "home.stats.note": "নোট: সর্বোচ্চ বিশ্বাসের জন্য বাস্তব সংখ্যা দিন (রোগী সহায়তা, ডোনার কানেকশন, ট্রান্সপোর্ট সমন্বয় ইত্যাদি)।",

      "home.recent.h2": "সাম্প্রতিক কার্যক্রম",
      "home.recent.p": "আপডেটগুলো চলমান কাজ দেখায় এবং ডোনার/স্বেচ্ছাসেবকদের আস্থা বাড়ায়।",
      "home.recent.btn": "কার্যক্রম দেখুন",
      "home.recent.tag1": "স্বাস্থ্য",
      "home.recent.h3_1": "অ্যাপয়েন্টমেন্ট সমন্বয় উদ্যোগ",
      "home.recent.p_1": "হটলাইন গাইডেন্সে সঠিক বিশেষজ্ঞের কাছে পৌঁছাতে এবং দেরি কমাতে সহায়তা।",
      "home.recent.foot1a": "রাজশাহী",
      "home.recent.foot1b": "সাম্প্রতিক আপডেট",
      "home.recent.tag2": "রক্ত",
      "home.recent.h3_2": "জরুরি রক্তদাতা সমন্বয়",
      "home.recent.p_2": "জরুরি অনুরোধে ডোনার ও ব্লাড ব্যাংক দ্রুত সমন্বয়।",
      "home.recent.foot2a": "সমন্বয়",
      "home.recent.foot2b": "চলমান",
      "home.recent.tag3": "কল্যাণ",
      "home.recent.h3_3": "পরিবারভিত্তিক ফলো-আপ",
      "home.recent.p_3": "কষ্টের সময়ে গোপনীয়তা ও সম্মান বজায় রেখে দিকনির্দেশনা ও সহায়তা।",
      "home.recent.foot3a": "কমিউনিটি",
      "home.recent.foot3b": "মাসিক",

      "home.dcta.h3": "আপনার ডোনেশনেই সহায়তা সম্ভব",
      "home.dcta.p": "ডোনেশন আমাদের দ্রুত সাড়া দিতে এবং আরও পরিবারকে সহায়তা করতে সাহায্য করে। আমরা স্বচ্ছতা ও দায়িত্বশীল সমন্বয়কে অগ্রাধিকার দিই। bKash, Nagad ও Bank ডিটেইলসের জন্য Donate পেজ দেখুন।",
      "home.dcta.b1": "ডোনেট",
      "home.dcta.b2": "স্বেচ্ছাসেবক হন",
      "home.dcta.b3": "সাহায্য দরকার?",

      "footer.title": "বরেন্দ্রডাক স্বাস্থ্য ও সমাজকল্যাণ ফাউন্ডেশন",
      "footer.about": "রাজশাহীতে স্বাস্থ্য সমন্বয়, কল্যাণ সহায়তা ও জরুরি সাড়ায় কমিউনিটি-ফার্স্ট একটি উদ্যোগ।",
      "footer.contact": "যোগাযোগ",
      "footer.quick": "দ্রুত লিংক",
      "footer.link.donate": "ডোনেট",
      "footer.link.volunteer": "স্বেচ্ছাসেবক",
      "footer.link.activities": "কার্যক্রম",
      "footer.fine": "যত্ন নিয়ে তৈরি • মিনিমাল ও বিশ্বাসযোগ্য ডিজাইন",

      "crumb.home": "হোম",

      "about.h1": "ফাউন্ডেশন সম্পর্কে",
      "about.lead": "আমাদের লক্ষ্য—বিশ্বস্ত সমন্বয়ের মাধ্যমে রোগী ও পরিবারের পাশে থাকা: দ্রুত, সম্মানজনক ও কমিউনিটি-ভিত্তিক।",
      "about.who.h2": "আমরা কারা",
      "about.who.p": "বরেন্দ্রডাক স্বাস্থ্য ও সমাজকল্যাণ ফাউন্ডেশন একটি অরাজনৈতিক ও অলাভজনক সেবামূলক প্রতিষ্ঠান, যা অসহায় ও প্রান্তিক মানুষের জন্য সহজলভ্য, সাশ্রয়ী ও মানসম্মত স্বাস্থ্যসেবা নিশ্চিত করতে কাজ করে।\nআমরা ডাক্তার অ্যাপয়েন্টমেন্ট, ডায়াগনস্টিক, হাসপাতাল সাপোর্ট, জরুরি রক্ত ও ঔষধ সরবরাহ এবং ২৪/৭ জরুরি সহায়তা প্রদান করি।\nমানবতার সেবায়—দিন রাত আপনার পাশে",
      "about.mission.h3": "মিশন",
      "about.mission.p": "একটি মানবিক, সহজলভ্য ও ন্যায়ভিত্তিক স্বাস্থ্যব্যবস্থা গড়ে তোলা আমাদের লক্ষ্য।\nযেখানে সমাজের প্রতিটি মানুষ—বিশেষ করে অসহায় ও দরিদ্র জনগোষ্ঠী—সময়মতো ও সাশ্রয়ী চিকিৎসাসেবা পাবে।\nআমরা নিশ্চিত করতে চাই জরুরি চিকিৎসা সহায়তা সবসময় মানুষের কাছে পৌঁছাবে।\nদুর্লভ ও প্রয়োজনীয় ঔষধ এবং নিরাপদ রক্ত সহায়তা সহজলভ্য করা আমাদের অঙ্গীকার।\nপ্রয়োজনে বাসায় প্রাথমিক স্বাস্থ্যসেবা পৌঁছে দিয়ে রোগীর পাশে থাকা আমাদের দায়িত্ব।\nমানবতার সেবায়—দ্রুত, নির্ভরযোগ্য ও সহানুভূতিশীল স্বাস্থ্যসেবা নিশ্চিত করাই আমাদের ভিশন।",
      "about.values.h3": "মূল্যবোধ",
      "about.values.p": "মানবিকতা, সমতা, দ্রুত সেবা ও বিশ্বাস—এই চার ভিত্তিতেই আমাদের পথচলা।",
      "about.glance.h3": "সংক্ষেপে",
      "about.glance.p": "ডোনার ও পার্টনারদের আস্থা তৈরিতে পরিষ্কার সারাংশ সাহায্য করে।",
      "about.glance.hotline": "হটলাইন",
      "about.glance.focus": "কোর ফোকাস",
      "about.glance.area": "এলাকা",
      "about.glance.focusv": "সমন্বয় + ফলো-আপ",
      "about.glance.areav": "রাজশাহী ও আশেপাশে",

      "programs.h1": "সেবা ও প্রোগ্রাম",
      "programs.lead": "বাস্তব প্রয়োজনভিত্তিক সেবা—জরুরি ও দৈনন্দিন সহায়তায় দ্রুততা, নিরাপত্তা ও সম্মান নিশ্চিত করতে।",
      "programs.h2": "আমরা যেগুলোতে সহায়তা করি",
      "programs.p": "হটলাইন ও কমিউনিটি নেটওয়ার্কের মাধ্যমে এগুলোই সবচেয়ে বেশি সমন্বয় করা হয়।",
      "programs.c1.h3": "ডাক্তার অ্যাপয়েন্টমেন্ট সমন্বয়",
      "programs.c1.p": "অ্যাপয়েন্টমেন্ট, সঠিক বিশেষজ্ঞ নির্বাচন এবং কোথায় যেতে হবে—এই গাইডেন্স।",
      "programs.c1.meta": "যার জন্য ভালো: গাইডেন্স + শিডিউল",
      "programs.c2.h3": "জরুরি ঔষধ সহায়তা",
      "programs.c2.p": "কঠিন/জরুরি ঔষধ খুঁজতে ফার্মেসি ও নেটওয়ার্কের সাথে দ্রুত যোগাযোগ।",
      "programs.c2.meta": "যার জন্য ভালো: জরুরি ঔষধ খোঁজা",
      "programs.c3.h3": "রক্ত সহায়তা",
      "programs.c3.p": "ডোনার, ব্লাড ব্যাংক ও রোগীর স্বজনদের দ্রুত সংযোগ—সময় নষ্ট কমাতে।",
      "programs.c3.meta": "যার জন্য ভালো: ডোনার + ব্যাংক লিংক",
      "programs.c4.h3": "জরুরি ট্রান্সপোর্ট",
      "programs.c4.p": "সময়সীমা গুরুত্বপূর্ণ হলে দ্রুত হাসপাতালে পৌঁছাতে পরিবহন সমন্বয়।",
      "programs.c4.meta": "যার জন্য ভালো: ট্রান্সপোর্ট সমন্বয়",
      "programs.c5.h3": "ভর্তি ও অপারেশন গাইডেন্স",
      "programs.c5.p": "হাসপাতালে ভর্তি/অপারেশন সম্পর্কিত ধাপে ধাপে তথ্য ও সমন্বয় সহায়তা।",
      "programs.c5.meta": "যার জন্য ভালো: হাসপাতাল প্রক্রিয়া",
      "programs.c6.h3": "টেলিমেডিসিন সহায়তা",
      "programs.c6.p": "সম্ভব হলে হাসপাতালে যাওয়ার আগে ফোন/ভিডিও পরামর্শ বা গাইডেন্স পেতে সহায়তা।",
      "programs.c6.meta": "যার জন্য ভালো: রিমোট গাইডেন্স",
      "programs.cta.h3": "কোনো প্রোগ্রামকে সাপোর্ট করতে চান?",
      "programs.cta.p": "আপনার ডোনেশন সমন্বয় টুল, হটলাইন রেসপন্স ও জরুরি সাপোর্ট চালু রাখতে সাহায্য করে।",

      "activities.h1": "কার্যক্রম ও আপডেট",
      "activities.lead": "নিয়মিত আপডেট ডোনার ও পার্টনারদের মাঠের বাস্তব কাজ বুঝতে সাহায্য করে।",
      "activities.h2": "সাম্প্রতিক হাইলাইট",
      "activities.p": "এগুলোকে বাস্তব ছবি ও সংক্ষিপ্ত প্রতিবেদন দিয়ে আপডেট করুন (তারিখ, স্থান, কী হলো, ফলাফল)।",
      "activities.cta.h3": "এই কার্যক্রমগুলোকে সাপোর্ট করুন",
      "activities.cta.p": "ডোনেশন সমন্বয় চালু রাখে এবং জরুরিতে দ্রুত সাড়া দিতে সাহায্য করে।",

      "vol.h1": "স্বেচ্ছাসেবক হন",
      "vol.lead": "ছোট একটি ফর্ম, বড় প্রভাব। তথ্য দিন—আমাদের টিম যোগাযোগ করবে।",
      "vol.form.title": "স্বেচ্ছাসেবক ফর্ম",
      "vol.name": "পূর্ণ নাম",
      "vol.phone": "ফোন",
      "vol.location": "লোকেশন",
      "vol.ph.name": "আপনার নাম",
      "vol.ph.phone": "01XXXXXXXXX",
      "vol.ph.location": "এলাকা / শহর",
      "vol.submit": "সাবমিট",
      "vol.contactInstead": "যোগাযোগ করুন",
      "vol.note": "নোট: এই ফর্মটি ডেমো (স্ট্যাটিক)। বাস্তব সাবমিশনের জন্য পরে সার্ভার/ইমেইল কানেক্ট করুন।",
      "vol.side.h3": "স্বেচ্ছাসেবকরা কীভাবে সাহায্য করেন",
      "vol.side.p": "হটলাইন সমন্বয়, ডোনার কানেকশন, ট্রান্সপোর্ট কল, কমিউনিটি ফলো-আপ—সবসময় গোপনীয়তা ও নিরাপত্তা বজায় রেখে।",
      "vol.side.meta": "ধাপে ধাপে গাইড করা হবে",
      "vol.wa.h3": "WhatsApp পছন্দ?",
      "vol.wa.p": "স্বেচ্ছাসেবক হতে আমাদের মেসেজ করুন।",
      "vol.wa.btn": "WhatsApp করুন",

      "donate.h1": "নির্ভরতার সাথে ডোনেট করুন",
      "donate.lead": "আপনার সহায়তা জরুরি সমন্বয় চালু রাখে এবং পরিবারভিত্তিক কল্যাণ সহায়তা বাড়ায়।",
      "donate.cta.h3": "বরেন্দ্রডাককে সাপোর্ট করার জন্য ধন্যবাদ",
      "donate.cta.p": "নিচের যেকোনো পদ্ধতি বেছে নিন। ডোনেট করার পর ট্রানজ্যাকশন আইডি WhatsApp-এ পাঠালে আমরা কনফার্ম ও রেকর্ড করতে পারবো।",
      "donate.cta.btn1": "WhatsApp-এ রিসিট পাঠান",
      "donate.cta.btn2": "সাহায্য দরকার?",
      "donate.bk.sub": "সেন্ড মানি / মার্চেন্ট",
      "donate.ng.sub": "সেন্ড মানি",
      "donate.bank.sub": "ব্যাংক ট্রান্সফার",
      "donate.f.number": "নম্বর",
      "donate.f.type": "টাইপ",
      "donate.f.ref": "রেফারেন্স",
      "donate.f.note": "নোট",
      "donate.f.accName": "অ্যাকাউন্ট নাম",
      "donate.f.accNo": "অ্যাকাউন্ট নম্বর",
      "donate.f.bank": "ব্যাংক",
      "donate.f.branch": "ব্রাঞ্চ",
      "donate.v.type1": "পার্সোনাল / মার্চেন্ট",
      "donate.v.refDonation": "ডোনেশন",
      "donate.v.noteName": "আপনার নাম লিখুন",
      "donate.qr.title": "QR কোড",
      "donate.qr.help": "পরে এখানে QR ইমেজ বসান।",
      "donate.qr.help2": "QR প্লেসহোল্ডার।",
      "donate.qr.bankTitle": "ব্যাংক QR",
      "donate.qr.bankHelp": "ঐচ্ছিক QR প্লেসহোল্ডার।",
      "donate.tip1": "টিপস: প্লেসহোল্ডার নম্বর বদলে আসল নম্বর দিন এবং বাস্তব QR ইমেজ দিন—বিশ্বাস বাড়বে।",
      "donate.tip2": "সেন্ড করার পর কনফার্মেশনের জন্য ট্রানজ্যাকশন আইডি WhatsApp করুন।",
      "donate.tip3": "ব্যাংক ডিটেইলস বাস্তব তথ্য দিয়ে আপডেট করুন। রিসিট ইমেইল/ফোন যোগ করলে বিশ্বাস বাড়ে।",
      "donate.foot.p": "আমাদের স্বাস্থ্য ও কল্যাণমূলক কাজে পাশে থাকার জন্য ধন্যবাদ।",
      "donate.foot.h": "ডোনেশন সহায়তা",

      "contact.h1": "যোগাযোগ",
      "contact.lead": "সহায়তা দরকার বা পার্টনার হতে চান—যোগাযোগ করুন, টিম দ্রুত উত্তর দেবে।",
      "contact.form.name": "নাম",
      "contact.form.phone": "ফোন",
      "contact.form.msg": "মেসেজ",
      "contact.form.ph.name": "আপনার নাম",
      "contact.form.ph.phone": "01XXXXXXXXX",
      "contact.form.ph.msg": "আপনি কীভাবে সাহায্য চান?",
      "contact.form.send": "পাঠান",
      "contact.form.note": "নোট: এই ফর্মটি স্ট্যাটিক। পরে সার্ভার এন্ডপয়েন্ট যোগ করলে মেসেজ রিসিভ হবে।",
      "contact.hot.h3": "হটলাইন / WhatsApp",
      "contact.hot.p": "জরুরি সমন্বয় ও দ্রুত যোগাযোগ—একই নম্বরে।",
      "contact.addr.h3": "ঠিকানা",
      "contact.addr.p": "কোর্ট স্টেশন, রাজপাড়া, রাজশাহী",
      "contact.addr.note": "(প্রয়োজনে পরে Google Map যোগ করুন।)"
    }
  };

  function getLang() {
    var saved = "";
    try { saved = localStorage.getItem("bd_lang") || ""; } catch (_) {}
    return saved === "bn" ? "bn" : "en";
  }

  function setLang(lang) {
    var next = lang === "bn" ? "bn" : "en";
    try { localStorage.setItem("bd_lang", next); } catch (_) {}
    applyI18n(next);
    syncLangButtons(next);
    document.documentElement.setAttribute("lang", next === "bn" ? "bn" : "en");
  }

  function t(lang, key) {
    return (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || "";
  }

  function applyI18n(lang) {
    var textNodes = document.querySelectorAll("[data-i18n]");
    textNodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n") || "";
      if (!key) return;
      var val = t(lang, key);
      if (val) el.textContent = val;
    });

    var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder") || "";
      var val = t(lang, key);
      if (val) el.setAttribute("placeholder", val);
    });

    var arias = document.querySelectorAll("[data-i18n-aria]");
    arias.forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria") || "";
      var val = t(lang, key);
      if (val) el.setAttribute("aria-label", val);
    });
  }

  function syncLangButtons(lang) {
    var btns = document.querySelectorAll("[data-lang-btn]");
    btns.forEach(function (b) {
      var which = b.getAttribute("data-lang-btn");
      if (which !== "en" && which !== "bn") return;
      b.setAttribute("aria-pressed", lang === which ? "true" : "false");
    });
  }

  // Wire language buttons (if present on the page)
  (function initLang() {
    var btns = document.querySelectorAll("[data-lang-btn]");
    btns.forEach(function (btn) {
      var which = btn.getAttribute("data-lang-btn");
      if (which !== "en" && which !== "bn") return;
      btn.addEventListener("click", function () { setLang(which); });
    });
    var lang = getLang();
    applyI18n(lang);
    syncLangButtons(lang);
    document.documentElement.setAttribute("lang", lang === "bn" ? "bn" : "en");
  })();

  // ---------- Mobile menu ----------
  var toggle = document.querySelector("[data-nav-toggle]");
  var panel = document.querySelector("[data-mobile-panel]");

  function setPanel(open) {
    if (!panel || !toggle) return;
    panel.dataset.open = open ? "true" : "false";
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle && panel) {
    setPanel(false);

    toggle.addEventListener("click", function () {
      var open = panel.dataset.open !== "true";
      setPanel(open);
    });

    // Close when clicking any link inside panel.
    panel.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.closest && t.closest("a")) setPanel(false);
    });

    // Close on Escape.
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setPanel(false);
    });
  }

  // ---------- Current page in nav ----------
  // Avoid "template" feel: highlight only matching file name.
  (function markCurrentPage() {
    var links = document.querySelectorAll(".nav-links a, [data-mobile-panel] a");
    if (!links.length) return;

    var path = (window.location.pathname || "").split("/").pop() || "home.html";
    links.forEach(function (a) {
      var href = a.getAttribute("href") || "";
      var file = href.split("#")[0].split("/").pop();
      if (!file) return;
      if (file === path) a.setAttribute("aria-current", "page");
    });
  })();

  // ---------- Optional: section highlight on Home (anchors) ----------
  // On home.html only, keep top-nav aware of the visible section.
  (function sectionSpy() {
    var p = (window.location.pathname || "");
    var file = p.split("/").pop();
    var isHome = file === "" || file === "home.html" || p.endsWith("/");
    if (!isHome) return;

    var header = document.querySelector(".site-header");
    var navLinks = document.querySelectorAll(".nav-links a[href^=\"#\"], [data-mobile-panel] a[href^=\"#\"]");
    var sections = document.querySelectorAll("main section[id]");
    if (!navLinks.length || !sections.length) return;

    function activeId() {
      var line = header ? header.getBoundingClientRect().bottom + 6 : 96;
      var id = sections[0].id;
      sections.forEach(function (sec) {
        if (sec.getBoundingClientRect().top <= line) id = sec.id;
      });
      return id;
    }

    function sync() {
      var id = activeId();
      navLinks.forEach(function (a) {
        var href = a.getAttribute("href") || "";
        if (href.charAt(0) !== "#") return;
        var on = href === "#" + id;
        if (on) a.setAttribute("aria-current", "page");
        else if (a.getAttribute("aria-current") === "page") a.removeAttribute("aria-current");
      });
    }

    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    window.addEventListener("hashchange", sync);
    sync();
  })();

  // ---------- Reveal on scroll ----------
  (function revealOnScroll() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach(function (el) { io.observe(el); });
  })();
})();

