export default function SocialProof() {
    const logos = [
        {
            name: 'Stripe', svg: (
                <svg viewBox="0 0 60 25" className="h-6 w-auto"><path d="M5 10.2c0-.7.6-1 1.5-1 1.3 0 3 .4 4.3 1.1V6.7c-1.5-.6-2.9-.8-4.3-.8C3.2 5.9.8 7.8.8 10.4c0 4.1 5.6 3.4 5.6 5.2 0 .8-.7 1.1-1.7 1.1-1.5 0-3.4-.6-4.9-1.4v3.7c1.7.7 3.3 1 4.9 1 3.4 0 5.8-1.7 5.8-4.4-.1-4.4-5.5-3.6-5.5-5.4z" fill="currentColor" /><path d="M15.5 2.1l-4.2.9V6l4.2-.9V2.1zm0 4.8h-4.2v12h4.2V6.9zm4.3 1l-.3-1H16v12h4.2v-8.1c1-1.3 2.7-1.1 3.2-.9V6.9c-.5-.2-2.5-.5-3.6 1zm8.4-1H25l.1-.6L26 1l-4.2.9-.9 5h-1.7v3h1.5l-.1 5c0 3.7 2.8 4.9 5.2 4.9 1.6 0 2.7-.3 3.4-.7v-3.3c-.5.2-3.2.9-3.2-1.5v-4.4h3.2V6.9zm12 0H44l.1-.6.9-5.2-4.2.9-.9 5H38v3h1.7v5c0 3.7 2.8 4.9 5.2 4.9 1.6 0 2.7-.3 3.4-.7v-3.3c-.5.2-3.2.9-3.2-1.5V9.9h3.2L48.2 7zm8.8 12c-1 0-1.6-.4-1.6-1.3 0-1.2 1.3-1.7 3.3-1.7v1.8c-.6.8-1.3 1.2-1.7 1.2zm-.1-12.2c-2 0-4.1.8-5.6 2.2l1.8 2.2c1.1-.9 2.1-1.2 3.4-1.2 1.2 0 2 .5 2 1.5v.2c-3.8 0-7.5 1.3-7.5 4.7 0 2.4 1.7 3.8 4 3.8 1.6 0 2.8-.7 3.6-1.5l.3 1.3h3.8V11c-.1-3.1-2-4.3-5.8-4.3z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'Shopify', svg: (
                <svg viewBox="0 0 110 30" className="h-6 w-auto"><text x="0" y="22" fill="currentColor" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18">shopify</text></svg>
            )
        },
        {
            name: 'HubSpot', svg: (
                <svg viewBox="0 0 110 30" className="h-6 w-auto"><text x="0" y="22" fill="currentColor" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18">HubSpot</text></svg>
            )
        },
        {
            name: 'Notion', svg: (
                <svg viewBox="0 0 100 30" className="h-6 w-auto"><text x="0" y="22" fill="currentColor" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18">Notion</text></svg>
            )
        },
        {
            name: 'Vercel', svg: (
                <svg viewBox="0 0 100 30" className="h-6 w-auto"><text x="0" y="22" fill="currentColor" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18">Vercel</text></svg>
            )
        },
        {
            name: 'Figma', svg: (
                <svg viewBox="0 0 90 30" className="h-6 w-auto"><text x="0" y="22" fill="currentColor" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18">Figma</text></svg>
            )
        },
    ];

    return (
        <section className="py-16 bg-neutral-50/50 border-y border-neutral-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="fade-in-up">
                    <p className="text-center text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-8">
                        Trusted by industry-leading companies
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                        {logos.map((logo) => (
                            <div
                                key={logo.name}
                                className="text-neutral-300 hover:text-neutral-500 transition-colors duration-300 cursor-default"
                                title={logo.name}
                            >
                                {logo.svg}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
