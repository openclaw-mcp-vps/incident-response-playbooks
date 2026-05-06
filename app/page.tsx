export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For DevOps &amp; SREs
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Incident Response<br />
          <span className="text-[#58a6ff]">Playbooks That Work</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Interactive, step-by-step incident response checklists with real-time collaboration and post-mortem templates. Resolve incidents faster, together.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $49/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ['Live Collaboration', 'Multiple responders on one playbook, in real time'],
            ['Step-by-Step Checklists', 'Guided runbooks so nothing gets missed'],
            ['Post-Mortem Templates', 'Structured blameless reviews after every incident']
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Team Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · unlimited incidents</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited playbooks & checklists',
              'Real-time multi-user collaboration',
              'Post-mortem templates & history',
              'Slack & PagerDuty integrations',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              'How does real-time collaboration work?',
              'Multiple team members can join an active incident playbook simultaneously. All step completions, notes, and status updates are synced live via WebSockets so everyone stays on the same page.'
            ],
            [
              'Can I customize playbooks for my team?',
              'Yes. You can create, edit, and version your own playbooks for any incident type — from database outages to security breaches — with custom steps, owners, and severity levels.'
            ],
            [
              'Is there a free trial?',
              'We offer a 14-day money-back guarantee. If the tool does not help your team respond faster, contact us for a full refund — no questions asked.'
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Incident Response Playbooks. All rights reserved.
      </footer>
    </main>
  )
}
