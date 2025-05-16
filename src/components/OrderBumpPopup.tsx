import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderBumpPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const OrderBumpPopup = ({ open, onOpenChange }: OrderBumpPopupProps) => {
  const [includeCandle, setIncludeCandle] = useState(false);

  const handleContinue = () => {
    // Redirect based on checkbox state
    if (includeCandle) {
      window.location.href = "https://voluntariosdelourdes.online/checkout-com-vela";
    } else {
      window.location.href = "https://voluntariosdelourdes.online/checkout-sem-vela";
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <DialogTitle asChild>
            <h2 className="text-2xl font-playfair font-semibold text-[#333333]">
              Gostaria de adicionar o acendimento de uma vela pela sua oração por R$8?
            </h2>
          </DialogTitle>
          <div></div>
        </div>
        
        <div className="mb-6">
          <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/velas.webp"
              alt="Capela com velas acesas"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
        
        <div className="border-2 border-[#F97316] rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <Checkbox 
              id="include-candle" 
              checked={includeCandle}
              onCheckedChange={(checked) => setIncludeCandle(checked === true)}
              className="mt-1"
            />
            <label 
              htmlFor="include-candle" 
              className="text-lg font-medium cursor-pointer"
            >
              Sim, acender uma vela pela minha oração
            </label>
          </div>
          
          <div className="pl-7">
            <h4 className="font-medium mb-2">Acender uma Vela:</h4>
            <p className="text-gray-700">
              Suas orações podem ser abençoadas com o acendimento de uma pequena vela no local sagrado de Lourdes. 
              Acenderemos a vela e tiraremos uma foto dela junto com o seu pedido de oração.
            </p>
          </div>
        </div>
        
        <Button 
          onClick={handleContinue} 
          className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
        >
          Continuar
        </Button>
      </DialogContent>
    </Dialog>
  );
};
