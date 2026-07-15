import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Meet Phil — The Man Behind the Magic
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            The story of Phil's Magic Cleaning is about doing one thing exceptionally well, earning trust one window at a time, and building a business on genuine care for the community.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Who Phil Is</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                <p>Phil is the founder, lead cleaner, and driving force behind Phil's Magic Cleaning. Based in Burlingame, CA, Phil has spent years mastering the craft of professional window cleaning — developing techniques, sourcing the best professional-grade tools, and building a reputation for quality that has spread entirely through word of mouth in the tightly-knit Bay Area Peninsula community.</p>
                <p>Before launching Phil's Magic Cleaning, Phil developed a deep appreciation for detail work and the satisfaction of transforming something grimy into something genuinely beautiful. Window cleaning turned out to be the perfect expression of that passion — tangible, immediate results that you can see the moment the job is done.</p>
                <p>Phil is known throughout the communities he serves as someone who shows up early, works methodically, and leaves every property better than he found it. His personality — warm, professional, easy to talk to — has turned countless first-time customers into loyal recurring clients who have been with him for years.</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>How the Business Started</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                <p>Phil's Magic Cleaning grew organically from referrals — neighbors telling neighbors, business owners recommending Phil to other business owners, and property managers calling back again and again because the results were simply better than anything they'd experienced before. Phil never needed a big marketing push; the work spoke for itself.</p>
                <p>The company now serves a diverse roster of clients across Burlingame, San Mateo, Foster City, Millbrae, Redwood City, Palo Alto, and beyond — from the Burlingame Tobacconist and FASTSIGNS San Mateo to homeowners with Victorian-era windows and condo residents on the third floor. Every property receives the same level of attention regardless of size or scope.</p>
                <p>Phil has also built relationships with professional restoration firms like Belfor Property Restoration, handling demanding post-construction and disaster-cleanup window work that requires specialized technique and equipment. These professional endorsements are among the highest testimony to the quality of Phil's work.</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Why Window Cleaning Matters</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                <p>Clean windows aren't a luxury — they're maintenance. Dirty glass etches over time as minerals, salt, and atmospheric pollutants bond with the surface. Left unaddressed, this etching becomes permanent and the glass must be replaced. Regular professional cleaning is the most cost-effective way to protect your window investment.</p>
                <p>For businesses, clean windows are your most visible marketing asset. First impressions are formed in seconds, and a sparkling storefront communicates care and quality before a customer ever steps inside.</p>
                <p>For homeowners, clean windows improve the quality of light inside your home, make spaces feel larger and brighter, and significantly boost curb appeal — whether you're preparing for sale or simply want to enjoy your Bay Area view.</p>
              </div>
            </div>

            {/* Values */}
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Phil's Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "⏰", title: "Punctuality", desc: "Phil isn't just on time — clients regularly report he arrives early. Respecting your schedule is non-negotiable." },
                  { icon: "🔍", title: "Meticulous Detail", desc: "Every pane is scraped, cleaned, squeegeed, and inspected before Phil considers the job done." },
                  { icon: "🤝", title: "Personable Service", desc: "Phil is consistently described as warm, friendly, and a genuine pleasure to work with." },
                  { icon: "🏘️", title: "Community First", desc: "Built on trust earned in the Burlingame community — and giving back to that community is part of the mission." },
                ].map((v) => (
                  <div key={v.title} className="bg-[#f0f5f8] rounded-lg p-5">
                    <div className="text-2xl mb-2">{v.icon}</div>
                    <h3 className="font-bold text-[#1a3a4a] mb-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{v.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Licensed, Insured &amp; Community Trusted</h2>
              <div className="flex flex-wrap gap-3">
                {["✅ Licensed & Insured", "⭐ 5.0 Google Rating", "🏆 42 Five-Star Reviews", "🔐 Fully Vetted Team", "💯 100% Satisfaction Guarantee"].map((badge) => (
                  <span key={badge} className="bg-[#f0f5f8] border border-gray-200 text-sm text-gray-700 px-4 py-2 rounded" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#1a3a4a] rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Experience the Difference?
            </h2>
            <p className="text-gray-300 mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Call Phil directly. He answers his own phone and gives honest assessments and fair prices.
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
