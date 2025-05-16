
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, BookText, Heart, HandHeart, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      prayer: ""
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simular envio
    toast({
      title: "Oração recebida",
      description: "Seu pedido será levado à Gruta de Lourdes"
    });
    
    // Redirect to loading page instead of confirmation
    setTimeout(() => {
      navigate("/salvando");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <HandHeart className="text-[#5f9ea0]" size={24} />
            </div>
            <h1 className="text-xl font-playfair font-semibold text-[#5f9ea0]">Voluntários de Lourdes</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#como-funciona" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Como Funciona</a>
            <a href="#por-que-lourdes" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Por Que Lourdes?</a>
            <a href="#formulario" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Formulário de Oração</a>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Abrir menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-[#333333]">
              🕊 Milagres Acontecem Todos os Dias na Gruta de Lourdes
            </h2>
            <p className="text-xl md:text-2xl font-playfair mb-6 text-[#5f9ea0]">
              Envie Seu Pedido de Oração à Sagrada Gruta de Lourdes, na França
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Todos os anos, mais de 6 milhões de peregrinos viajam até a Gruta de Lourdes em busca de cura, 
              paz e intervenção divina. Agora, sua oração pode ser entregue neste local milagroso de onde você estiver. 
              Permita-nos levar sua mensagem até esse santuário sagrado, onde incontáveis milagres já aconteceram.
            </p>
            <Button 
              asChild
              className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <a href="#formulario">
                ➡️ Enviar Meu Pedido de Oração
              </a>
            </Button>
          </div>
        </section>

        {/* Entrega da Oração */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="bg-[#f4d58d]/10 border border-[#f4d58d]/30 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">
                Sua Oração, Entregue na Gruta de Lourdes
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Uma vez por mês, realizamos nossa viagem à Gruta de Lourdes com os pedidos de oração. 
                Se você preencher o formulário abaixo, levaremos sua oração pessoalmente na próxima visita. 
                Você receberá fotos por e-mail como prova de que sua oração foi entregue neste local sagrado.
              </p>
              
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/img01.jpg" 
                  alt="Gruta de Lourdes" 
                  className="w-full max-w-none aspect-video object-cover"
                />
              </div>
              
              <div className="flex justify-center">
                <Button 
                  asChild
                  className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <a href="#formulario">
                    ➡️ Enviar Meu Pedido de Oração
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

       {/* Formulário de Oração - Movido para a terceira seção */}
<section id="formulario" className="py-16 px-2 sm:px-4 bg-blue-50">
  <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-full sm:max-w-2xl">
    <h3 className="text-3xl font-playfair font-semibold mb-10 text-center text-[#333333]">
      Envie Sua Oração à Gruta de Lourdes
    </h3>
    <Card className="w-full border-[#5f9ea0]/30 shadow-lg">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">Nome</label>
            <Input
              id="name"
              placeholder="Digite seu nome"
              className="w-full border-[#5f9ea0]/30"
              {...register("name", { required: "Nome é obrigatório" })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="prayer" className="block text-sm font-medium">Seu Pedido de Oração</label>
            <Textarea
              id="prayer"
              placeholder="Escreva sua oração aqui..."
              className="w-full min-h-[150px] border-[#5f9ea0]/30"
              {...register("prayer", { required: "O pedido de oração é obrigatório" })}
            />
            {errors.prayer && <p className="text-red-500 text-sm">{errors.prayer.message}</p>}
          </div>

          <div className="pt-4">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando sua oração...
                </span>
              ) : (
                "Enviar Minha Oração"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</section>

        {/* Como Funciona */}
        <section id="como-funciona" className="py-16 md:py-24 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-5xl">
            <h3 className="text-3xl font-playfair font-semibold mb-12 text-center text-[#333333]">Como Funciona</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <BookText className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 1</h4>
                <p className="text-center">Imprimimos sua oração com carinho. Sua oração será cuidadosamente impressa em uma nota especial.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 2</h4>
                <p className="text-center">Entregamos sua oração na Gruta de Lourdes. Na Gruta, a oração será colocada na Caixa de Pedidos, onde será feita uma bênção especial. Este momento sagrado será fotografado.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 3</h4>
                <p className="text-center">Você recebe a confirmação. Você receberá as fotos da entrega diretamente no seu e-mail assim que chegarmos ao local na visita mensal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Os Milagres Esperam por Você */}
        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">Os Milagres Esperam por Você</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Ao enviar sua oração à Gruta de Lourdes, você se une a milhares de pessoas que já buscaram a graça divina nesse santuário. 
              Tenha conforto ao saber que sua prece foi colocada em um lugar tocado pela Virgem Maria, onde milagres são parte da rotina.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Seja você alguém em busca de cura, paz, amor ou clareza, entregar sua oração em Lourdes é um gesto espiritual profundo. 
              Esse momento sagrado ficará com você para sempre, como prova de que fez algo extraordinário para honrar a Deus.
            </p>
            <div className="flex justify-center">
              <Button 
                asChild
                className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                <a href="#formulario">
                  ➡️ Enviar Minha Oração Agora
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Viva as Bênçãos de Lourdes */}
        <section className="py-16 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">Viva as Bênçãos de Lourdes Sem Sair de Casa</h3>
            <p className="text-lg mb-8 text-center leading-relaxed">
              Você não precisa viajar até Lourdes para receber as bênçãos deste lugar sagrado. 
              Ao permitir que levemos sua oração, você economiza tempo e dinheiro, e ainda assim recebe os benefícios espirituais desse local santo.
            </p>
            
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/img02.webp" 
                alt="Paisagem serena representando bênçãos de Lourdes" 
                className="w-full max-w-none aspect-video object-cover"
              />
            </div>
          </div>
        </section>

        {/* Compartilhe as Bênçãos */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="bg-[#5f9ea0]/5 border border-[#5f9ea0]/10 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">Compartilhe as Bênçãos com Quem Você Ama</h3>
              <p className="text-lg mb-6 text-center leading-relaxed">
                Se você não precisa de um milagre agora, envie uma oração por alguém que precisa. 
                Ofereça esse gesto de amor a um ente querido e permita que a graça divina alcance a vida dele também.
              </p>
              <div className="flex justify-center">
                <Button 
                  asChild
                  className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <a href="#formulario">
                    ➡️ Enviar Oração por um Ente Querido
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Por Que a Gruta de Lourdes */}
        <section id="por-que-lourdes" className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">Por Que a Gruta de Lourdes?</h3>
            
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/img03.webp" 
                alt="Interior de catedral representando a Gruta de Lourdes" 
                className="w-full max-w-none aspect-video object-cover"
              />
            </div>
            
            <Card className="border-[#f4d58d]/30 shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="text-[#5f9ea0]" size={48} />
                  </div>
                </div>
                <p className="text-lg mb-0 leading-relaxed text-center">
                  Há mais de um século, a Gruta de Lourdes tem sido destino de peregrinação, 
                  conhecida por suas curas milagrosas e pela forte conexão espiritual. 
                  Peregrinos relatam transformações profundas após visitarem o local. 
                  Agora você também pode ter sua oração colocada diretamente nesse espaço sagrado.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Principal */}
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-[#333333]">
              Receba o Presente dos Milagres Hoje Mesmo
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Coloque sua oração na Gruta de Lourdes e confie no poder da intervenção divina. 
              Sua oração, entregue pessoalmente, fará parte da tradição sagrada desse lugar santo.
            </p>
            <a
              href="#formulario"
              className="inline-block px-6 py-4 bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white rounded-lg text-lg font-medium shadow-md hover:shadow-lg text-center leading-tight"
            >
              ➡️ Enviar Minha Oração<br />à Gruta de Lourdes
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#333333] text-gray-300 py-12 px-2 sm:px-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-playfair text-xl mb-4 text-white">Voluntários de Lourdes</h4>
              <p className="text-sm leading-relaxed mb-6">
                Voluntários de Lourdes fazem parte do Ministério das Devoções. Não somos representantes 
                oficiais do Santuário de Lourdes. Somos apenas voluntários que dedicam tempo e esforço 
                para levar as bênçãos de Nossa Senhora de Lourdes a quem precisa.
              </p>
              <p className="text-sm leading-relaxed">
                O conteúdo enviado (e-mails, ebooks e demais materiais) é apenas para fins informativos e 
                espirituais. Para questões médicas, legais ou psicológicas, procure um profissional qualificado.
              </p>
            </div>
            <div className="md:pl-8">
              <h4 className="font-playfair text-xl mb-4 text-white">Links Importantes</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-[#f4d58d] transition-colors">Termos e Condições</a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#f4d58d] transition-colors">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#f4d58d] transition-colors">Fale Conosco</a>
                </li>
              </ul>
              <div className="mt-8">
                <p className="text-sm text-gray-400">&copy; 2025 Voluntários de Lourdes. Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
