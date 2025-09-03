import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, BookText, Heart, HandHeart } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

import { saveLead } from "@/lib/leadStorage";
import { maskEmailPrefix } from "@/lib/obfuscate";

type FormValues = {
  name: string;
  email: string;
  prayer: string;
};

const Index = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: { name: "", email: "", prayer: "" }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const name = data.name.trim();
      const email = data.email.trim();
      const prayer = data.prayer.trim();

      // seus envios (mantidos; remova telefone dos payloads)
      await fetch("https://api-email-english.vercel.app/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, prayer })
      });

      const gptRes = await fetch("https://api-sellpage-eng.vercel.app/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, prayer })
      });
      const gptData = await gptRes.json();
      localStorage.setItem("headline", gptData.headline || "");
      localStorage.setItem("paragraph", gptData.paragraph || "");

      await fetch('https://aykluquuqdkudyxuqzxq.supabase.co/functions/v1/create-member-from-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5a2x1cXV1cWRrdWR5eHVxenhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNzg5NjIsImV4cCI6MjA2OTc1NDk2Mn0.YUddXN0kOVAtC6bS4HfGUOFdhQZOImfRgyMcM5tr1ZY'
        },
        body: JSON.stringify({ name, email, message: prayer })
      });

      // monta versões para o fluxo
      const maskedEmail = maskEmailPrefix(email);

      saveLead(
        { name, email, prayer },                    // RAW
        { name, email: maskedEmail, prayer }        // MASKED (dots + +tag)
      );

      toast({ title: "✉️ Prayer received", description: "Please keep this page open." });
      navigate("/loading", { state: { nome: name } });

    } catch (error) {
      console.error("Submit error:", error);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header e demais seções do seu layout... */}

      {/* FORM */}
      <section id="formulario" className="py-16 px-2 sm:px-4 bg-blue-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg sm:max-w-2xl">
          <h3 className="text-3xl font-playfair font-semibold mb-10 text-center text-[#333333]">
            Send Your Prayer to the Grotto of Lourdes
          </h3>
          <Card className="w-full border-[#5f9ea0]/30 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Enter your name"
                    className="w-full border-[#5f9ea0]/30"
                    {...register("name", { required: "Name is required" })} />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <Input id="email" placeholder="Enter your email"
                    className="w-full border-[#5f9ea0]/30"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address"
                      }
                    })} />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="prayer" className="block text-sm font-medium">Your Prayer Intention</label>
                  <Textarea id="prayer" placeholder="Write your prayer here..."
                    className="w-full min-h-[150px] border-[#5f9ea0]/30"
                    {...register("prayer", { required: "Prayer is required" })} />
                  {errors.prayer && <p className="text-red-500 text-sm">{errors.prayer.message}</p>}
                </div>

                <div className="pt-4">
                  <Button type="submit" disabled={isSubmitting}
                    className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all">
                    {isSubmitting ? "Sending your prayer..." : "Submit my prayer"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
