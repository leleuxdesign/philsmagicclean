import Layout from "@/components/Layout";

const posts = [
  {
    date: "May 14, 2025",
    title: "How Often Should You Clean Your Windows? A Bay Area Homeowner's Guide",
    excerpt: "Bay Area homeowners face unique challenges: marine layer, salt air, pollen, and urban dust all conspire to dirty your windows faster than you'd expect. Here's a practical guide to cleaning frequency.",
  },
  {
    date: "April 28, 2025",
    title: "Why Storefront Window Cleaning Is Your Best Marketing Investment",
    excerpt: "Before a customer ever reads your menu, sees your products, or talks to your staff, they've already formed an opinion — based on your windows. Here's why storefront window cleaning delivers a real marketing ROI.",
  },
  {
    date: "March 19, 2025",
    title: "Post-Construction Window Cleaning: What to Expect",
    excerpt: "Finishing a home renovation or new construction project in California? Post-construction window cleaning is a specialized job that requires more than soap and a squeegee. Here's what the process involves.",
  },
];

export default function Blog() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Tips &amp; Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Phil's Magic Window Cleaning Blog
          </h1>
          <p className="text-lg text-gray-600 mb-12" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Expert advice on keeping Bay Area homes and businesses looking their best — straight from the professionals.
          </p>

          <div className="space-y-10">
            {posts.map((post) => (
              <article key={post.title} className="border-b border-gray-100 pb-10 last:border-0">
                <div className="text-sm text-gray-500 mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {post.date}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {post.excerpt}
                </p>
                <a
                  href="tel:6506600430"
                  className="text-sm font-semibold text-[#0d7a8a] hover:underline no-underline"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Read Full Article →
                </a>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-[#f0f5f8] rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready for Spotless Windows?
            </h2>
            <p className="text-gray-600 mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Put our expertise to work for your home or business. Call Phil for a free quote.
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
