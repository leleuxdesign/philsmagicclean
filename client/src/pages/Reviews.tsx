import Layout from "@/components/Layout";

const reviews = [
  { initials: "KK", name: "Klara Kallis", role: "Homeowner", text: "Phil's Magic Window Cleaning was fantastic from start to finish. Professional, punctual, and incredibly efficient. Left our windows sparkling like new. He's just a joy to work with." },
  { initials: "MO", name: "Mesut Ozcab", role: "Salon Owner", text: "He cleans the windows, doors, and the entire front of my salon perfectly. He does an amazing job with love and passion. Thank you, Phil, for keeping my place spotless!" },
  { initials: "TC", name: "Theary Chhuo", role: "Restaurant Owner", text: "My restaurant windows are perfect now! Crystal clear. He's also cleaned my other restaurant location. I would highly recommend this cleaning service!" },
  { initials: "BR", name: "Becca Russell", role: "Property Manager", text: "Hired Phil to clean windows for a client in Burlingame and he did a fantastic job. Thorough, punctual (early, in fact!), and personable. Reasonably priced for the quality." },
  { initials: "BR", name: "Betsy Rosen", role: "Homeowner", text: "Phil and his assistant did an amazing job. Easy to schedule, arrived on time, totally professional. I've used others — will only go with Phil in the future." },
  { initials: "DA", name: "Dan A", role: "Restoration Pro", text: "I work for Belfor in property restoration and I've seen my fair share of cleaning crews. But I've never seen anyone clean windows the way Phil Magic and his team did." },
  { initials: "DG", name: "Don Gross", role: "Burlingame Tobacconist", text: "Phil has been cleaning our store windows for the last two years and we are incredibly happy. Always on time, exceptional quality, and a wonderful person to work with!" },
  { initials: "E", name: "easerk", role: "Verified Customer", text: "Our windows have never looked better — they sparkle like new! He took the time to ensure every detail was perfect and exceeded our expectations." },
  { initials: "FS", name: "FASTSIGNS San Mateo", role: "Commercial Client", text: "Phil is in fact Magic, just like the name. He's our go-to for window cleaning. Always on time and professional. A pleasure to see his involvement in the community." },
  { initials: "WY", name: "Wuv Yu", role: "Local Merchant", text: "Best window washer ever. So efficient, polite and attention to detail. He scraped all the crap off my windows then deep cleaned them to pristine! Recommended to all merchants." },
  { initials: "BA", name: "Baking Arts", role: "Bakery", text: "Phil did a fabulous job on our store's front doors and back windows. Crystal clear now! Highly recommend." },
  { initials: "AG", name: "Ann Greenberg", role: "Homeowner", text: "Phil and Noah were so professional and left my windows clean enough to eat off of. They arrived promptly and did above and beyond what was requested." },
  { initials: "CB", name: "Cybelle Brown", role: "Recurring Client", text: "Professional, flexible with scheduling, and the quality of his work is exceptional. Always does a very thorough job and uses great cleaning products. Very satisfied!" },
  { initials: "EC", name: "Everett Carvalho", role: "Homeowner", text: "Phil did an amazing job on all my windows. He was extremely professional and I would highly recommend him to anyone who wants their windows perfect." },
  { initials: "VL", name: "Vincent Lan", role: "Verified Customer", text: "Phil's window cleaning is top notch! Super friendly guy, very nice work recommended!" },
  { initials: "DP", name: "Doug Person", role: "Condo Owner", text: "Showed up promptly. Terrific work on the outside windows of our third story condo. Very customer friendly — he wants you to be a satisfied customer!" },
  { initials: "MC", name: "Med Castel", role: "Verified Customer", text: "Phil and his team were amazing, very thorough and professional. Arrived on time, worked quickly and efficiently, exceeded our expectations. 10/10." },
  { initials: "NL", name: "Nichol Lee", role: "Homeowner", text: "Phil is professional and does exceptional work. I highly recommend him to clean your windows inside and out." },
  { initials: "DH", name: "Dan Hampe", role: "Recurring Client", text: "Phils Magic keeps my windows looking brand new every time! Reliable and hard working, I can always count on Phil." },
  { initials: "S", name: "Sunny", role: "Homeowner", text: "Phil's Magic Cleaning is an excellent and reliable window cleaning service. Friendly, professional, accommodating with scheduling. HIGHLY RECOMMENDED." },
];

export default function Reviews() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Customer Reviews
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mt-2 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Customers Are Saying
          </h1>
          <p className="text-gray-600 mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Real reviews from Bay Area homeowners, restaurant owners, property managers, and business owners who trust Phil's Magic Cleaning.
          </p>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="font-semibold text-[#1a3a4a]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>5.0 · 42 reviews</span>
            <a
              href="tel:6506600430"
              className="ml-4 bg-[#0d7a8a] hover:bg-[#0a6370] text-white text-sm font-semibold px-5 py-2 rounded no-underline transition-colors"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              📞 Call 650-660-0430
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name + r.role} className="border border-gray-200 rounded-lg p-6 flex flex-col">
                <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
                <div className="text-xs text-gray-500 mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{r.role}</div>
                <blockquote className="text-sm text-gray-700 italic leading-relaxed flex-1 mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  "{r.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1a3a4a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {r.initials}
                  </div>
                  <div className="text-sm font-semibold text-[#1a3a4a]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    {r.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#1a3a4a] rounded-xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Join 42 Satisfied Customers
            </h2>
            <p className="text-gray-300 mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Experience the Phil's Magic difference for yourself. Call for a free quote — most jobs scheduled within the week.
            </p>
            <a
              href="tel:6506600430"
              className="inline-block bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-8 py-3 rounded no-underline transition-colors"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              📞 Call 650-660-0430
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
