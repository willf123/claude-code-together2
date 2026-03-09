import heroMockup from '../assets/hero-mockup.png';

export default function Hero() {
    return (
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-200/30 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Copy */}
                    <div className="fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-200 rounded-full text-xs font-semibold text-primary-700 mb-6">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
                            Now accepting new clients
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-[1.1] tracking-tight mb-6">
                            Websites that turn{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                visitors into customers
                            </span>
                        </h1>

                        <p className="text-lg text-neutral-500 leading-relaxed max-w-lg mb-8">
                            We design stunning, high-converting websites that make your business
                            stand out online. More traffic, more leads, more revenue — guaranteed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-base font-semibold rounded-2xl hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-500/25 active:scale-[0.98] group"
                            >
                                Unlock Free Website
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                            <a
                                href="#features"
                                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-100 text-neutral-700 text-base font-semibold rounded-2xl hover:bg-neutral-200 transition-all active:scale-[0.98]"
                            >
                                See How It Works
                            </a>
                        </div>

                        {/* Mini stats */}
                        <div className="flex items-center gap-8 mt-10 pt-8 border-t border-neutral-100">
                            {[
                                { value: '200+', label: 'Sites Launched' },
                                { value: '3.5x', label: 'Avg. ROI Increase' },
                                { value: '98%', label: 'Client Satisfaction' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                                    <div className="text-xs text-neutral-400 font-medium mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Mockup */}
                    <div className="fade-in-up stagger-2 relative">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-200/50 to-primary-100/30 rounded-3xl blur-2xl scale-105" />
                            <img
                                src={heroMockup}
                                alt="Premium website design mockup"
                                className="relative w-full rounded-2xl shadow-2xl shadow-neutral-900/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
