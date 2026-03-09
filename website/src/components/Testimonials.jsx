import testimonialImg from '../assets/testimonial-1.png';

const testimonials = [
    {
        quote: "Pixelforge completely transformed our online presence. Within three months of launching our new site, we saw a 47% increase in qualified leads. Their team understood exactly what our customers needed to see.",
        name: 'Sarah Mitchell',
        title: 'Marketing Director, BrightPath Solutions',
        image: testimonialImg,
    },
    {
        quote: "I was skeptical about investing in a website redesign, but the ROI speaks for itself. Our bounce rate dropped by 60% and online revenue doubled in the first quarter. Best business decision I've made.",
        name: 'David Chen',
        title: 'CEO, Meridian Consulting',
        image: null,
        initials: 'DC',
    },
    {
        quote: "What impressed me most was how they translated our brand story into a digital experience. The site doesn't just look beautiful — it feels like us. Our customers constantly compliment the design.",
        name: 'Laura Reeves',
        title: 'Founder, Ember & Oak Studio',
        image: null,
        initials: 'LR',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 lg:py-28 bg-neutral-50/50 border-y border-neutral-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
                    <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
                        Real results
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
                        Loved by businesses like yours
                    </h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        Don't just take our word for it — hear from the founders and teams we've helped grow.
                    </p>
                </div>

                {/* Testimonial cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className={`fade-in-up stagger-${i + 1} flex flex-col bg-white rounded-2xl border border-neutral-100 p-7 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-300`}
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-5">
                                {[...Array(5)].map((_, j) => (
                                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <blockquote className="text-sm text-neutral-600 leading-relaxed mb-6 flex-1">
                                "{t.quote}"
                            </blockquote>

                            <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                                {t.image ? (
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-10 h-10 rounded-full object-cover ring-2 ring-neutral-100"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-neutral-100">
                                        {t.initials}
                                    </div>
                                )}
                                <div>
                                    <div className="text-sm font-semibold text-neutral-900">{t.name}</div>
                                    <div className="text-xs text-neutral-400">{t.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
