import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MonthlyPlan = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            document.getElementById('hotmart-sales-funnel')?.scrollIntoView({ behavior: 'smooth' });
        }, 15000);

        const script = document.createElement('script');
        script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
        script.onload = () => {
            if (window.checkoutElements) {
                window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
            }
        };
        document.body.appendChild(script);

        return () => clearTimeout(timer);
    }, []);

    const handleUpsellDecline = () => {
        navigate('/downsell');
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-4 py-10">
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

                {/* HOTMART + BOTÃO FAKE */}
                <div className="relative my-6 w-full flex justify-center" style={{ minHeight: '280px' }}>
                    {/* Botão fake */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '250px',
                            height: '48px',
                            backgroundColor: '#e63946',
                            color: '#fff',
                            fontSize: '1.1em',
                            fontWeight: 'bold',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none',
                            zIndex: 2,
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        Aceitar Oferta
                    </div>

                    {/* Widget Hotmart */}
                    <div
                        id="hotmart-sales-funnel"
                        className="w-full"
                        style={{
                            zIndex: 1,
                            height: '100%',
                        }}
                    ></div>
                </div>

                {/* Decline Option */}
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
    );
};

export default MonthlyPlan;
