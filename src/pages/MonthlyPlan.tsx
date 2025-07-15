import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MonthlyPlan = () => {
    const navigate = useNavigate();
    const fakeButtonRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Injeta o script da Hotmart
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
        script.onload = () => {
            if (window.checkoutElements) {
                window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
            }
        };
        document.body.appendChild(script);
    }, []);

    // Verifica o botão da hotmart e posiciona o botão fake
    useEffect(() => {
        const tryAttachFakeButton = () => {
            const realButton = document.querySelector('button.default-buy-button') as HTMLElement;

            if (realButton && fakeButtonRef.current) {
                const rect = realButton.getBoundingClientRect();
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

                fakeButtonRef.current.style.top = `${rect.top + scrollTop}px`;
                fakeButtonRef.current.style.left = `${rect.left + scrollLeft}px`;
                fakeButtonRef.current.style.width = `${rect.width}px`;
                fakeButtonRef.current.style.height = `${rect.height}px`;
                fakeButtonRef.current.style.display = 'flex';

                // Parar de verificar após encontrar
                if (intervalRef.current) clearInterval(intervalRef.current);
            }
        };

        // Tenta verificar a cada 500ms até encontrar ou até 15s
        intervalRef.current = setInterval(tryAttachFakeButton, 500);

        // Stop after 15s to avoid infinite loop
        const timeout = setTimeout(() => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }, 15000);

        window.addEventListener('resize', tryAttachFakeButton);
        window.addEventListener('scroll', tryAttachFakeButton);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            clearTimeout(timeout);
            window.removeEventListener('resize', tryAttachFakeButton);
            window.removeEventListener('scroll', tryAttachFakeButton);
        };
    }, []);

    const handleUpsellDecline = () => {
        navigate('/downsell');
    };

    return (
        <>
            <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-4 py-10 relative">
                <div className="w-full max-w-4xl space-y-8">
                    <h1 className="text-4xl font-extrabold text-center text-pink-700">
                        🙏 Your prayer has been accepted!
                    </h1>
                    <p className="text-center text-lg text-gray-700">
                        It will soon be delivered to the Grotto of Lourdes with faith and devotion.
                    </p>
                    <p className="text-center text-lg text-pink-700 font-semibold">
                        Please read carefully — we have something special just for you.
                    </p>
                    <p className="text-center text-lg text-gray-700">
                        Persisting in prayer <strong>can make all the difference.</strong>
                    </p>
                    <p className="text-center text-lg text-gray-700">
                        Many believers pray and give thanks every month because they know that by staying connected in faith, <strong>the chances of receiving the awaited miracle increase.</strong>
                    </p>

                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 shadow-md space-y-4">
                        <h2 className="text-2xl font-bold text-pink-700 text-center">
                            🌹 Monthly Prayer Plan — Your prayer delivered every month to the Grotto
                        </h2>
                        <p className="text-center text-gray-700">
                            The Sisters of the Congregation of Lourdes will pray for your intentions each month and your request will be brought to the Grotto continuously — <strong>until your prayer is answered.</strong>
                        </p>
                        <p className="text-center text-sm text-gray-500">
                            Many people report receiving their miracle after the third month.
                        </p>
                    </div>

                    <div className="flex justify-center my-4">
                        <img
                            src="/voluntarios.jpg"
                            alt="Sisters praying at the Lourdes Grotto"
                            className="rounded-lg shadow-md max-h-64 object-cover"
                        />
                    </div>

                    <ul className="space-y-2 text-gray-800">
                        <li>✅ Monthly prayer for your personal intentions</li>
                        <li>✅ Easy submission of new prayer requests</li>
                        <li>✅ A continuous spiritual connection with Lourdes</li>
                    </ul>

                    <div id="hotmart-sales-funnel" className="my-6 w-full flex justify-center" />

                    <div className="flex justify-center">
                        <button
                            onClick={handleUpsellDecline}
                            className="text-sm text-gray-500 hover:text-gray-700 underline"
                        >
                            No thanks, I want to continue without the monthly prayer
                        </button>
                    </div>
                </div>
            </div>

            {/* Botão fake posicionado dinamicamente */}
            <div
                ref={fakeButtonRef}
                style={{
                    position: 'absolute',
                    backgroundColor: '#e63946',
                    color: '#fff',
                    fontSize: '1.1em',
                    fontWeight: 'bold',
                    borderRadius: '6px',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                }}
            >
                Aceitar Oferta
            </div>
        </>
    );
};

export default MonthlyPlan;
