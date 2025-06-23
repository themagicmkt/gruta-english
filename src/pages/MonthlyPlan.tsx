import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MonthlyPlan = () => {
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
      Persisting in prayer <strong>can make all the difference.</strong>
    </p>
    <p className="text-center text-lg text-gray-700">
      Many believers pray and give thanks every month because they know that by staying connected in faith, <strong>the chances of receiving the awaited miracle increase.</strong>
    </p>

    {/* Highlight Section */}
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

    {/* Pricing */}
    <div className="text-center">
      <p className="text-2xl text-pink-600 font-semibold">Only $9/month</p>
      <p className="text-sm text-gray-500">Cancel anytime</p>
    </div>

    {/* Call to Action */}
    <div className="flex flex-col items-center space-y-4">
      <button
        id="cta-button"
        onClick={handleUpsellAccept}
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded shadow-md transition duration-200 w-full max-w-xs"
      >
        Yes, I want prayers every month 🙏
      </button>

      <button
        onClick={handleUpsellDecline}
        className="text-sm text-gray-500 hover:text-gray-700 underline"
      >
        No, thank you. I prefer a single prayer.
      </button>
    </div>

  </div>
</div>

    );
};

export default MonthlyPlan;
