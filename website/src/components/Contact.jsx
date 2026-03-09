import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contact" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left — CTA copy */}
                    <div className="fade-in-up">
                        <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
                            Get started free
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
                            Ready to grow your business online?
                        </h2>
                        <p className="text-lg text-neutral-500 leading-relaxed mb-8">
                            Tell us a little about your project and we'll put together a free custom website mockup —
                            no commitments, no credit card, no catch.
                        </p>

                        <div className="space-y-4">
                            {[
                                'Free custom design mockup within 48 hours',
                                'No contracts — cancel anytime',
                                'Dedicated designer & project manager',
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-neutral-600">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="fade-in-up stagger-2">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-neutral-50/80 border border-neutral-100 rounded-2xl p-8"
                        >
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                                        Your name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Smith"
                                        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                                        Tell us about your project
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="I need a website for my..."
                                        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all resize-none"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 px-8 py-4 bg-primary-600 text-white text-base font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-500/25 active:scale-[0.98]"
                            >
                                {submitted ? '✓ Request Sent!' : 'Unlock Free Website'}
                            </button>

                            <p className="text-xs text-neutral-400 text-center mt-4">
                                We'll respond within 24 hours. No spam, ever.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
