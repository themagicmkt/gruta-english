
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to confirmation page after 3-5 seconds
    const redirectTimer = setTimeout(() => {
      navigate("/confirmacao");
    }, 4000); // 4 seconds

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center gap-6">
          <Loader className="h-16 w-16 text-[#5f9ea0] animate-spin" />
          
          <h1 className="text-2xl md:text-3xl font-playfair font-semibold text-[#333333]">
            Salvando seu Pedido de Oração...
          </h1>
          
          <p className="text-gray-600">
            Estamos processando seu pedido com todo o carinho e reverência.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
