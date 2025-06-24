import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MonthlyPlan = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Nada de Hotmart ou timers aqui, a página é simples e focada.
    }, []);

    const handleParticipateClick = () => {
        navigate('/seu-destino-apos-participar'); // Lembre-se de ajustar este destino!
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-4 py-10">
            <div className="w-full max-w-4xl space-y-8">

                {/* Confirmation Message */}
                <h1 className="text-4xl font-extrabold text-center text-pink-700">
                    🙏 Your prayer has been accepted!
                </h1>
                <p className="text-center text-lg text-gray-700">
                    It will soon be delivered to the Grotto of Lourdes with faith and devotion.
                </p>
                <p className="text-center text-lg text-pink-700 font-semibold">
                    Please read carefully — we have something special just for you.
                </p>

                {/* Upsell Introduction */}
                <p className="text-center text-lg text-gray-700">
                    Persisting in prayer **can make all the difference.**
                </p>
                <p className="text-center text-lg text-gray-700">
                    Many believers pray and give thanks every month because they know that by staying connected in faith, **the chances of receiving the awaited miracle increase.**
                </p>

                {/* Highlight Section */}
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 shadow-md space-y-4">
                    <h2 className="text-2xl font-bold text-pink-700 text-center">
                        🌹 Monthly Prayer Plan — Your prayer delivered every month to the Grotto
                    </h2>
                    <p className="text-center text-gray-700">
                        The Sisters of the Congregation of Lourdes will pray for your intentions each month and your request will be brought to the Grotto continuously — **until your prayer is answered.**
                    </p>
                    <p className="text-center text-sm text-gray-500">
                        Many people report receiving their miracle after the third month.
                    </p>
                </div>

                {/* Image */}
                <div className="flex justify-center my-4">
                    <img
                        src="/voluntarios.jpg"
                        alt="Sisters praying at the Lourdes Grotto"
                        className="rounded-lg shadow-md max-h-64 object-cover"
                    />
                </div>

                {/* Benefits */}
                <ul className="space-y-2 text-gray-800">
                    <li>✅ Monthly prayer for your personal intentions</li>
                    <li>✅ Easy submission of new prayer requests</li>
                    <li>✅ A continuous spiritual connection with Lourdes</li>
                </ul>

                {/* CTA Button */}
                <div className="flex justify-center mt-8">
                    <a
                        href="https://pay.hotmart.com/M99844043X?off=bfzaqzwz&checkoutMode=6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center"
                    >
                        I want to participate!
                    </a>
                </div>

                {/* Frase Bíblica para Reforço */}
                <p className="text-center text-sm text-gray-600 mt-4 pb-12 italic">
                    "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you." <br/> — Matthew 7:7
                </p>
            </div>
        </div>
    );
};

export default MonthlyPlan;