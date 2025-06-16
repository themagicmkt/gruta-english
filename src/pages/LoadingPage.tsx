import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Loader } from "lucide-react";

const LoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/confirmation", {
        state: location.state, // ✅ repassa o nome do lead corretamente
      });
    }, 4000);

    return () => clearTimeout(redirectTimer);
  }, [navigate, location.state]);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center gap-6">
          <Loader className="h-16 w-16 text-[#5f9ea0] animate-spin" />
          <h1 className="text-2xl md:text-3xl font-playfair font-semibold text-[#333333]">
            Saving your Prayer Request...
          </h1>
          <p className="text-gray-600">
            We are processing your request with care and reverence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
