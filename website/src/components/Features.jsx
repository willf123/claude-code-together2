const features = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>
        ),
        title: 'Stunning Design',
        description: 'Every pixel is crafted to reflect your brand and captivate visitors the moment they land on your page.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>
        ),
        title: 'Built to Convert',
        description: 'Strategic layouts and clear calls-to-action that guide visitors toward becoming paying customers.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
        title: 'Mobile-First',
        description: 'Flawless performance on every device. Your site looks and works beautifully from phone to desktop.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        title: 'Lightning Fast',
        description: 'Optimized code and next-gen hosting mean your pages load in under 2 seconds, every time.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
            </svg>
        ),
        title: 'SEO Optimized',
        description: 'Built-in search engine optimization so customers can find you when they need you most.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z" />
            </svg>
        ),
        title: 'Secure & Reliable',
        description: 'Enterprise-grade SSL, daily backups, and 99.9% uptime so you never lose a single lead.',
    },
];

export default function Features() {
    return (
        <section id="features" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
                    <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
                        Everything you need
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
                        A website that works as hard as you do
                    </h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        We handle the design, development, and optimization — so you can focus on running your business.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <div
                            key={feature.title}
                            className={`fade-in-up stagger-${i + 1} group relative p-7 bg-neutral-50/80 border border-neutral-100 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-neutral-900/5 hover:border-primary-100 transition-all duration-300`}
                        >
                            <div className="w-11 h-11 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-base font-bold text-neutral-900 mb-2">{feature.title}</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
