import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Features', href: '#features' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-neutral-100'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold text-neutral-900 tracking-tight">Pixelforge</span>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-500/25 active:scale-[0.98]"
                        >
                            Unlock Free Website
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-neutral-100 ${mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="block text-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-all"
                    >
                        Unlock Free Website
                    </a>
                </div>
            </div>
        </nav>
    );
}
