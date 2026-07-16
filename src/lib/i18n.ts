export type Lang = "ka" | "en" | "ru";

export const translations = {
  // Nav
  nav_services: { ka: "სერვისები", en: "Services", ru: "Услуги" },
  nav_about: { ka: "ჩვენ შესახებ", en: "About", ru: "О нас" },
  nav_team: { ka: "გუნდი", en: "Team", ru: "Команда" },
  nav_reviews: { ka: "შეფასებები", en: "Reviews", ru: "Отзывы" },
  nav_contact: { ka: "კონტაქტი", en: "Contact", ru: "Контакты" },
  book: { ka: "ჩაწერა ვიზიტზე", en: "Book Appointment", ru: "Записаться на приём" },
  book_short: { ka: "ჩაწერა", en: "Book", ru: "Записаться" },
  call: { ka: "დარეკვა", en: "Call", ru: "Позвонить" },

  clinic_name_short: {
    ka: "წმინდა ლუკა მახარებლის სახელობის კლინიკა",
    en: "St. Luke's Dental Clinic",
    ru: "Клиника Святого Луки",
  },
  clinic_name_full: {
    ka: "წმინდა ლუკა მახარებლის სახელობის სტომატოლოგიური კლინიკა",
    en: "St. Luke the Evangelist's Dental Clinic",
    ru: "Стоматологическая клиника имени Святого Луки Евангелиста",
  },
  clinic_name_alt: {
    ka: "მიხეილ ბახტაძის დენტალური იმპლანტაციის ცენტრი",
    en: "Mikheil Bakhtadze Dental Implantation Center",
    ru: "Центр дентальной имплантации Михаила Бахтадзе",
  },

  // Hero
  hero_eyebrow: {
    ka: "თბილისი · კერძო კლინიკა",
    en: "Tbilisi · Private Clinic",
    ru: "Тбилиси · Частная клиника",
  },
  hero_headline: {
    ka: "სტომატოლოგია, რომელსაც ენდობი",
    en: "Dentistry You Can Trust",
    ru: "Стоматология, которой доверяют",
  },
  hero_sub: {
    ka: "მზრუნველი, უმტკივნეულო მკურნალობა მშვიდ და დახვეწილ გარემოში — თბილისის გულში.",
    en: "Caring, painless treatment in a calm, refined space — in the heart of Tbilisi.",
    ru: "Заботливое, безболезненное лечение в спокойной и изысканной атмосфере — в самом сердце Тбилиси.",
  },
  hero_rating: {
    ka: "★ 4.9 შეფასება პაციენტებისგან",
    en: "★ 4.9 Rated by our patients",
    ru: "★ 4.9 Рейтинг наших пациентов",
  },
  hero_image_label: { ka: "სურათი / Image", en: "Image", ru: "Изображение" },
  hero_image_alt: {
    ka: "პაციენტი და ექიმი კლინიკაში",
    en: "Patient and doctor at the clinic",
    ru: "Пациент и врач в клинике",
  },
  hero_caption_title: {
    ka: "ყველაზე თბილი გარემო",
    en: "The warmest environment",
    ru: "Самая тёплая атмосфера",
  },
  hero_caption_sub: {
    ka: "თბილისი · EST. 2015",
    en: "TBILISI · EST. 2015",
    ru: "ТБИЛИСИ · ОСН. 2015",
  },

  // Trust bar
  trust_1: { ka: "სტერილური, სუფთა გარემო", en: "Spotless & Sterile", ru: "Стерильная чистота" },
  trust_2: {
    ka: "მზრუნველი, პროფესიონალი გუნდი",
    en: "Caring, Professional Team",
    ru: "Заботливая профессиональная команда",
  },
  trust_3: { ka: "უმტკივნეულო მკურნალობა", en: "Painless Treatment", ru: "Безболезненное лечение" },
  trust_4: {
    ka: "მრავალენოვანი მომსახურება",
    en: "Multilingual Care",
    ru: "Многоязычное обслуживание",
  },
  trust_4_sub: {
    ka: "ქართული · რუსული · ინგლისური",
    en: "Georgian · Russian · English",
    ru: "Грузинский · Русский · Английский",
  },

  // Services
  services_eyebrow: { ka: "სერვისები", en: "Our Services", ru: "Наши услуги" },
  services_title: {
    ka: "სრული სპექტრი ერთ ადგილას",
    en: "Complete Care, One Place",
    ru: "Полный спектр услуг в одном месте",
  },
  services_sub: {
    ka: "დახვეწილი მიდგომა თითოეული პაციენტისთვის — პროფილაქტიკიდან სასწრაფო დახმარებამდე.",
    en: "A refined approach for every patient — from prevention to emergency care.",
    ru: "Индивидуальный подход к каждому пациенту — от профилактики до неотложной помощи.",
  },
  svc_1_t: { ka: "ზოგადი სტომატოლოგია", en: "General Dentistry", ru: "Общая стоматология" },
  svc_1_d: {
    ka: "ყოვლისმომცველი მოვლა და რეგულარული შემოწმებები.",
    en: "Comprehensive care and regular check-ups.",
    ru: "Комплексный уход и регулярные осмотры.",
  },
  svc_2_t: { ka: "კბილის წმენდა და ჰიგიენა", en: "Cleaning & Hygiene", ru: "Чистка и гигиена" },
  svc_2_d: {
    ka: "ღრმა, დელიკატური წმენდა და პროფესიული ჰიგიენა.",
    en: "Deep, gentle cleaning and professional hygiene.",
    ru: "Глубокая, деликатная чистка и профессиональная гигиена.",
  },
  svc_3_t: { ka: "კარიესის მკურნალობა", en: "Cavity Treatment", ru: "Лечение кариеса" },
  svc_3_d: {
    ka: "თანამედროვე მასალები, უხილავი აღდგენა.",
    en: "Modern materials, invisible restoration.",
    ru: "Современные материалы, незаметная реставрация.",
  },
  svc_4_t: {
    ka: "გვირგვინები და პროთეზირება",
    en: "Crowns & Prosthetics",
    ru: "Коронки и протезирование",
  },
  svc_4_d: {
    ka: "ესთეტიური, გამძლე გადაწყვეტილებები თითოეული ღიმილისთვის.",
    en: "Aesthetic, durable solutions for every smile.",
    ru: "Эстетичные и долговечные решения для каждой улыбки.",
  },
  svc_5_t: { ka: "კბილების გათეთრება", en: "Teeth Whitening", ru: "Отбеливание зубов" },
  svc_5_d: {
    ka: "უსაფრთხო, პროფესიული გათეთრება ბუნებრივი შედეგისთვის.",
    en: "Safe, professional whitening with natural results.",
    ru: "Безопасное профессиональное отбеливание с естественным результатом.",
  },
  svc_6_t: {
    ka: "სასწრაფო სტომატოლოგიური დახმარება",
    en: "Emergency Dental Care",
    ru: "Неотложная стоматологическая помощь",
  },
  svc_6_d: {
    ka: "სწრაფი, მშვიდი პასუხი მაშინ, როცა ყველაზე მეტად გჭირდებათ.",
    en: "Fast, calm response when you need us most.",
    ru: "Быстрая и спокойная помощь именно тогда, когда она нужнее всего.",
  },

  // Featured services (homepage cards with photos)
  svc_feat_1_t: { ka: "წმენდა", en: "Professional Cleaning", ru: "Профессиональная чистка" },
  svc_feat_1_d: {
    ka: "ღრმა, დელიკატური კბილების წმენდა და პროფესიული ჰიგიენა ბრწყინვალე შედეგისთვის.",
    en: "Deep, gentle teeth cleaning and professional hygiene for a brilliant result.",
    ru: "Глубокая, деликатная чистка зубов и профессиональная гигиена для превосходного результата.",
  },
  svc_feat_2_t: { ka: "იმპლანტაცია", en: "Implants", ru: "Имплантация" },
  svc_feat_2_d: {
    ka: "თანამედროვე იმპლანტები, რომლებიც აღადგენენ ღიმილს ბუნებრივი სიმტკიცითა და სიცოცხლისუნარიანობით.",
    en: "Modern implants that restore your smile with natural strength and longevity.",
    ru: "Современные импланты, которые восстанавливают улыбку с естественной прочностью и долговечностью.",
  },
  svc_feat_3_t: { ka: "მეტალოკერამიკა", en: "Metal-Ceramic Crowns", ru: "Металлокерамика" },
  svc_feat_3_d: {
    ka: "გამძლე და ესთეტიური გვირგვინები, სანდო არჩევანი ყოველდღიური სიმტკიცისთვის.",
    en: "Durable, aesthetic crowns — a trusted choice for everyday strength.",
    ru: "Прочные и эстетичные коронки — надёжный выбор для ежедневной прочности.",
  },
  svc_feat_4_t: { ka: "ცირკონი", en: "Zirconia Crowns", ru: "Циркониевые коронки" },
  svc_feat_4_d: {
    ka: "პრემიუმ კლასის, ბუნებრივად გამჭვირვალე გვირგვინები უმაღლესი ესთეტიკისთვის.",
    en: "Premium, naturally translucent crowns for the highest level of aesthetics.",
    ru: "Премиальные, естественно прозрачные коронки для максимальной эстетики.",
  },

  // Why us
  whyus_image_alt: {
    ka: "კლინიკის გუნდი მუშაობისას",
    en: "The clinic team at work",
    ru: "Команда клиники за работой",
  },
  why_eyebrow: { ka: "რატომ ჩვენ", en: "Why Choose Us", ru: "Почему мы" },
  why_title: {
    ka: "გარემო, სადაც სტომატოლოგის შიში ქრება",
    en: "A place where fear of the dentist disappears",
    ru: "Место, где страх перед стоматологом исчезает",
  },
  why_p1: {
    ka: "ჩვენი კლინიკა შექმნილია იმ პაციენტისთვის, ვინც აფასებს სიმშვიდეს, სისუფთავეს და ნამდვილ ზრუნვას. სტერილური სივრცე, დახვეწილი დეტალები და გუნდი, რომელიც ისმენს.",
    en: "Our clinic is built for the patient who values calm, cleanliness, and genuine care. A sterile space, refined detail, and a team that listens.",
    ru: "Наша клиника создана для пациентов, которые ценят спокойствие, чистоту и искреннюю заботу. Стерильное пространство, продуманные детали и команда, которая умеет слушать.",
  },
  why_p2: {
    ka: "მრავალენოვანი პერსონალი — ქართული, რუსული და ინგლისური — უზრუნველყოფს კომფორტულ კომუნიკაციას ყოველ ვიზიტზე.",
    en: "Our multilingual team — Georgian, Russian and English — ensures comfortable communication at every visit.",
    ru: "Наш многоязычный персонал — грузинский, русский и английский — обеспечивает комфортное общение на каждом визите.",
  },
  why_b1: {
    ka: "სტერილური, სუფთა კლინიკა",
    en: "Spotless, sterile clinic",
    ru: "Безупречно чистая, стерильная клиника",
  },
  why_b2: {
    ka: "მზრუნველი და პასუხისმგებლიანი პერსონალი",
    en: "Caring, responsible staff",
    ru: "Заботливый и ответственный персонал",
  },
  why_b3: {
    ka: "გარემო, სადაც ყველა ექიმს ენდობი",
    en: "An environment where you trust every doctor",
    ru: "Атмосфера, где вы доверяете каждому врачу",
  },
  why_b4: { ka: "მრავალენოვანი გუნდი", en: "Multilingual team", ru: "Многоязычная команда" },

  // Before / After
  ba_eyebrow: { ka: "შედეგები", en: "Results", ru: "Результаты" },
  ba_title: { ka: "მანამდე / შემდეგ", en: "Before / After", ru: "До / После" },
  ba_sub: {
    ka: "გადაადგილეთ ხაზი და ნახეთ განსხვავება.",
    en: "Drag the slider to see the difference.",
    ru: "Перетащите ползунок, чтобы увидеть разницу.",
  },
  ba_before: { ka: "მანამდე", en: "Before", ru: "До" },
  ba_after: { ka: "შემდეგ", en: "After", ru: "После" },

  // Team
  team_eyebrow: { ka: "ჩვენი გუნდი", en: "Our Team", ru: "Наша команда" },
  team_title: {
    ka: "ხელოვნება მოსიყვარულე ხელებში",
    en: "Craft in caring hands",
    ru: "Мастерство в заботливых руках",
  },
  team_sub: {
    ka: "გამოცდილი, თბილი და მიდგომაში პრეციზული სპეციალისტები.",
    en: "Experienced, warm, and precise specialists.",
    ru: "Опытные, душевные и точные в своей работе специалисты.",
  },
  team_owner_label: { ka: "მფლობელი", en: "Owner", ru: "Владелец" },
  team_experience: {
    ka: "30+ წელი გამოცდილება",
    en: "30+ years of experience",
    ru: "30+ лет опыта",
  },
  team_portrait_placeholder: { ka: "პორტრეტი", en: "Portrait", ru: "Портрет" },
  team_1_name: { ka: "მიხეილ ბახტაძე", en: "Mikheil Bakhtadze", ru: "Михеил Бахтадзе" },
  team_1_role: {
    ka: "მფლობელი და მთავარი ექიმი",
    en: "Owner & Chief Doctor",
    ru: "Владелец и главный врач",
  },
  team_1_bio: {
    ka: "კლინიკის გულისცემა — 30 წელზე მეტი გამოცდილება პირის ღრუს ქირურგიაში, იმპლანტოლოგიასა და პროთეზირებაში. მისი ცოდნა სტომატოლოგიურ მკურნალობას სანდო და პერსონალურ გამოცდილებად აქცევს.",
    en: "The heart behind every smile at the clinic — over 30 years of experience in oral surgery, implantology, and prosthetic dentistry. His expertise turns dental treatment into a trusted, personalized experience.",
    ru: "Сердце клиники — более 30 лет опыта в челюстно-лицевой хирургии, имплантологии и протезировании. Его опыт превращает лечение зубов в надёжный и персональный процесс.",
  },
  team_2_name: { ka: "სალომე", en: "Salome", ru: "Саломе" },
  team_2_role: {
    ka: "სტომატოლოგი-თერაპევტი, ქირურგი",
    en: "Dentist-Therapist, Surgeon",
    ru: "Стоматолог-терапевт, хирург",
  },
  team_2_bio: {
    ka: "პაციენტების საყვარელი ექიმი — ცნობილია თავისი სითბოთი და ესთეტიური აღდგენისა და კარიესის მკურნალობის ზუსტი, დელიკატური მიდგომით.",
    en: "A patient favourite — known for her warmth and a precise, gentle approach to aesthetic restoration and cavity treatment.",
    ru: "Любимица пациентов — известна своей теплотой и точным, деликатным подходом к эстетической реставрации и лечению кариеса.",
  },
  team_3_name: { ka: "ანა", en: "Ana", ru: "Анна" },
  team_3_role: { ka: "სტომატოლოგი-თერაპევტი", en: "Dentist-Therapist", ru: "Стоматолог-терапевт" },
  team_3_bio: {
    ka: "ყურადღებიანი და პასუხისმგებლიანი ექიმი — პაციენტებს უფასებს სიმშვიდე და დეტალებზე ორიენტირებული მკურნალობა კარიესისა და ძირხვევის თერაპიის დროს.",
    en: "An attentive and dedicated doctor — patients value her calm manner and detail-oriented approach to cavity and root canal therapy.",
    ru: "Внимательный и ответственный врач — пациенты ценят её спокойствие и внимание к деталям при лечении кариеса и каналов.",
  },

  // Reviews
  reviews_eyebrow: { ka: "შეფასებები", en: "Patient Reviews", ru: "Отзывы пациентов" },
  reviews_title: {
    ka: "ჩვენი პაციენტების სიტყვები",
    en: "In our patients' words",
    ru: "Слова наших пациентов",
  },
  reviews_rating: {
    ka: "★ 4.9 საშუალო შეფასება",
    en: "★ 4.9 average rating",
    ru: "★ 4.9 средний рейтинг",
  },
  review_1_text: {
    ka: "ძალიან სუფთა კლინიკა, პერსონალი საუბრობს რუსულად და ინგლისურად, რამაც კომუნიკაცია გაამარტივა. ყველა ძალიან მეგობრული და პროფესიონალი იყო. სწრაფად დამეხმარნენ კბილის ტკივილში — დიდი მადლობა ზრუნვისთვის.",
    en: "Very clean clinic, staff speaks Russian and English which made communication easy. Everyone was friendly and professional. They quickly helped with my tooth pain — grateful for their care.",
    ru: "Очень чистая клиника, персонал говорит по-русски и по-английски, что упростило общение. Все были дружелюбны и профессиональны. Быстро помогли с зубной болью — благодарна за заботу.",
  },
  review_1_author: { ka: "ემილი", en: "Emil X.", ru: "Эмиль Х." },
  review_2_text: {
    ka: "ბატონი მიხეილი საუკეთესო სტომატოლოგია! ნამდვილად გირჩევთ!",
    en: "Dr. Bakhtadze is the best dentist! Definitely recommend!",
    ru: "Доктор Бахтадзе — лучший стоматолог! Однозначно рекомендую!",
  },
  review_2_author: { ka: "სალი", en: "Sally W.", ru: "Салли В." },
  review_3_text: {
    ka: "ძალიან კარგი გარემო, სადაც თითოეულ ექიმს თავისუფლად ვენდობი. მეგობრული, მზრუნველი და პასუხისმგებლიანი პერსონალი. მათი წყალობით ჩემი ერთ-ერთი ყველაზე დიდი შიში გაქრა და ახლა თავისუფლად დავდივარ სტომატოლოგთან.",
    en: "A very good environment where I trust each doctor. Friendly, loving, responsible staff. Thanks to them one of my biggest fears is gone and I now go to the dentist freely.",
    ru: "Очень хорошая атмосфера, где я доверяю каждому врачу. Дружелюбный, заботливый и ответственный персонал. Благодаря им один из моих главных страхов исчез, и теперь я спокойно хожу к стоматологу.",
  },
  review_3_author: { ka: "ლიზი", en: "Lizi J.", ru: "Лизи Дж." },

  // Contact
  contact_eyebrow: { ka: "ჩაწერა და კონტაქტი", en: "Book & Contact", ru: "Запись и контакты" },
  contact_title: { ka: "დაჯავშნე ვიზიტი", en: "Request an appointment", ru: "Записаться на приём" },
  contact_sub: {
    ka: "შეავსეთ ფორმა და ჩვენ მალე დაგიკავშირდებით ვიზიტის დასადასტურებლად.",
    en: "Fill in the form and we'll contact you shortly to confirm your appointment.",
    ru: "Заполните форму, и мы свяжемся с вами в ближайшее время для подтверждения записи.",
  },
  form_name: { ka: "სახელი", en: "Name", ru: "Имя" },
  form_phone: { ka: "ტელეფონი", en: "Phone", ru: "Телефон" },
  form_email: { ka: "ელფოსტა", en: "Email", ru: "Эл. почта" },
  form_service: { ka: "სერვისი", en: "Service", ru: "Услуга" },
  form_service_placeholder: {
    ka: "მაგ. კბილების გათეთრება",
    en: "e.g. Teeth whitening",
    ru: "напр. Отбеливание зубов",
  },
  form_datetime: {
    ka: "სასურველი თარიღი და დრო",
    en: "Preferred date & time",
    ru: "Желаемая дата и время",
  },
  form_datetime_placeholder: {
    ka: "მაგ. 12 მარტი, 15:00",
    en: "e.g. March 12, 3:00 PM",
    ru: "напр. 12 марта, 15:00",
  },
  form_message: { ka: "შეტყობინება", en: "Message", ru: "Сообщение" },
  form_submit: { ka: "ვიზიტის მოთხოვნა", en: "Request appointment", ru: "Запросить запись" },

  contact_address_label: { ka: "მისამართი", en: "Address", ru: "Адрес" },
  contact_address: {
    ka: "პაოლო იაშვილის ქუჩა 12, თბილისი",
    en: "12 Paolo Iashvili St, Tbilisi",
    ru: "ул. Паоло Иашвили 12, Тбилиси",
  },
  contact_phone_label: { ka: "ტელეფონი", en: "Phone", ru: "Телефон" },
  contact_hours_label: { ka: "სამუშაო საათები", en: "Working Hours", ru: "Часы работы" },
  contact_hours: {
    ka: "ორშ – შაბ · 10:00 – 19:00",
    en: "Mon – Sat · 10:00 – 19:00",
    ru: "Пн – Сб · 10:00 – 19:00",
  },
  contact_closed: { ka: "კვირა — დახურულია", en: "Sunday — Closed", ru: "Воскресенье — выходной" },

  // Footer
  footer_tag: {
    ka: "სტომატოლოგია, რომელსაც ენდობი.",
    en: "Dentistry you can trust.",
    ru: "Стоматология, которой доверяют.",
  },
  footer_nav: { ka: "ნავიგაცია", en: "Navigation", ru: "Навигация" },
  footer_contact: { ka: "კონტაქტი", en: "Contact", ru: "Контакты" },
  footer_rights: {
    ka: "ყველა უფლება დაცულია",
    en: "All rights reserved",
    ru: "Все права защищены",
  },
} as const;

export type TranslationKey = keyof typeof translations;
