import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Request a Free Quote
          </h1>
          <p className="text-lg text-gray-600 mb-10" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Call Phil directly — he answers his own phone. No call centers, no voicemail maze.
          </p>
          <a
            href="tel:6506600430"
            className="block text-3xl font-bold text-[#1a3a4a] mb-10 no-underline hover:text-[#0d7a8a] transition-colors"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            650-660-0430
          </a>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f0f5f8] rounded-xl p-6">
              <h2 className="text-lg font-bold text-[#1a3a4a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Call or Text Phil Directly
              </h2>
              <a
                href="tel:6506600430"
                className="flex items-center gap-2 text-[#0d7a8a] font-semibold no-underline hover:underline mb-2"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                📞 650-660-0430
              </a>
              <p className="text-sm text-gray-600" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Phil answers his own phone. Free quotes, no obligation.
              </p>
            </div>

            <div className="bg-[#f0f5f8] rounded-xl p-6">
              <h2 className="text-lg font-bold text-[#1a3a4a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Business Information
              </h2>
              <ul className="space-y-3 text-sm text-gray-700" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <div>
                    <strong>Address</strong><br />
                    1404 Burlingame Ave, Burlingame, CA 94010
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <div>
                    <strong>Licensed &amp; Insured</strong><br />
                    Fully covered for residential and commercial work
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-lg font-bold text-[#1a3a4a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Service Area
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Burlingame", "San Mateo", "Foster City", "Millbrae", "Redwood City", "Palo Alto", "Daly City", "South San Francisco", "+ Greater Bay Area"].map((city) => (
                <span key={city} className="bg-[#f0f5f8] border border-gray-200 text-sm text-gray-700 px-3 py-1.5 rounded" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#1a3a4a] rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Find Us
            </h2>
            <p className="text-gray-300 mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              1404 Burlingame Ave, Burlingame, CA 94010
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

