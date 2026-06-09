export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For TikTok Creators & Social Media Managers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Predict If Your TikTok Will{" "}
          <span className="text-[#58a6ff]">Go Viral</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze video metadata, early engagement patterns, and trending signals to get a viral potential score — before you waste time on content that won&apos;t land.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Start Predicting — $12/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "📊", title: "Engagement Analysis", desc: "Score based on likes, shares, comments velocity in the first hour." },
          { icon: "🔥", title: "Trend Matching", desc: "Match your content against current trending sounds, hashtags, and formats." },
          { icon: "🎯", title: "Viral Score", desc: "Get a 0–100 viral potential score with actionable improvement tips." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited viral predictions",
              "Real-time trend matching",
              "Engagement velocity tracking",
              "Actionable improvement tips",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How accurate are the viral predictions?",
              a: "Our model is trained on millions of TikTok videos and achieves ~78% accuracy in predicting videos that reach 100k+ views within 48 hours."
            },
            {
              q: "Do I need to connect my TikTok account?",
              a: "Yes. We use TikTok's official API to pull your video metadata and early engagement data. Your credentials are never stored."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Absolutely. Cancel with one click from your dashboard. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-[#8b949e]">
        © {new Date().getFullYear()} TikTok Viral Predictor. All rights reserved.
      </footer>
    </main>
  );
}
