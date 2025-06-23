import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpsellPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            document.getElementById('cta-button')?.scrollIntoView({ behavior: 'smooth' });
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    const handleUpsellAccept = () => {
        navigate('/checkout-oracao-mensal');
    };

    const handleUpsellDecline = () => {
        navigate('/downsell');
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-4 py-10">
            <div className="w-full max-w-4xl space-y-8">
                {/* Main Title */}
                <h1 className="text-4xl font-extrabold text-center text-pink-700">
                    ⚠️ Attention: Special Prayer for You...
                </h1>

                {/* Initial Description */}
                <p className="text-center text-lg text-gray-700">
                    Insisting on taking the prayer more than once <strong>can make all the difference.</strong>
                </p>
                <p className="text-center text-lg text-gray-700">
                    Many people do penances every year because they know that by constantly asking and giving thanks — <strong>their chances of receiving the expected miracle increase.</strong>
                </p>

                {/* Highlight Section */}
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 shadow-md space-y-4">
                    <h2 className="text-2xl font-bold text-pink-700 text-center">
                        🌹 Receive a powerful prayer every month made by the Sisters of the Congregation of Lourdes
                    </h2>
                    <p className="text-center text-gray-700">
                        In addition to the prayer, we will send your request to the grotto every month until it is <strong>answered by Saint Lourdes.</strong>
                    </p>
                </div>

                {/* Illustrative Image */}
                <div className="flex justify-center my-4">
                    <img
                        src="/voluntarios.jpg"
                        alt="Sisters praying at the Lourdes Grotto"
                        className="rounded-lg shadow-md max-h-64 object-cover"
                    />
                </div>

                {/* Benefits */}
                <ul className="space-y-2 text-gray-800">
                    <li>✅ Monthly prayer for your intentions</li>
                    <li>✅ Easy submission of new requests</li>
                    <li>✅ Strengthen your faith with this ongoing connection to Lourdes</li>
                </ul>

                {/* Price */}
                <div className="text-center">
                    <p className="text-2xl text-pink-600 font-semibold">Only R$9.90/month</p>
                    <p className="text-sm text-gray-500">Cancel anytime</p>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center space-y-4">
                    <button
                        id="cta-button"
                        onClick={handleUpsellAccept}
                        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded shadow-md transition duration-200 w-full max-w-xs"
                    >
                        I want to receive prayers every month 🙏
                    </button>

                    <button
                        onClick={handleUpsellDecline}
                        className="text-sm text-gray-500 hover:text-gray-700 underline"
                    >
                        No, thank you. I prefer not to receive monthly prayers.
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpsellPage;
