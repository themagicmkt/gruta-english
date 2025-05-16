
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, HeartPulse, Gift, HandHeart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Confirmation = () => {

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <HandHeart className="text-[#5f9ea0]" size={24} />
            </div>
            <h1 className="text-xl font-playfair font-semibold text-[#5f9ea0]">Volutários de Lourdes</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#como-funciona" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Como Funciona</a>
            <a href="#por-que-lourdes" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Por Que Lourdes?</a>
            <a href="#contribuicao" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Contribuir</a>
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
            <div className="w-20 h-20 mx-auto mb-6 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center">
              <HeartPulse className="text-[#5f9ea0]" size={40} />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-[#333333]">
              Seu Pedido de Oração foi Recebido para a Sagrada Gruta de Lourdes
            </h2>
          </div>
        </section>
        
        {/* Personal Greeting Section */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
              Querido(a) Irmão(ã) em Cristo,
            </h3>
            
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-lg mb-4 leading-relaxed">
                  Aqui é o Padre Afonso Freitas, e escrevo a você hoje com grande alegria e esperança no coração. Por muitos anos, minha esposa e eu fomos abençoados por servir como voluntários na Gruta de Lourdes – um lugar onde milagres de cura acontecem todos os dias.
                </p>
                <p className="text-lg mb-4 leading-relaxed">
                  Sempre que estou diante da Gruta, fico comovido com os testemunhos de pessoas que encontraram cura, paz e restauração no corpo e no espírito. Esse local sagrado, onde a Santíssima Virgem Maria apareceu, é conhecido em todo o mundo por seu poder divino de curar. Pela graça de Deus, temos o privilégio de levar suas orações até esse lugar milagroso.
                </p>
              </div>
                <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/img04.webp" 
                  alt="Gruta de Lourdes" 
                  className="w-full max-w-none aspect-video object-cover"
                />
                </div> </div>
          </div>
        </section>
        
        {/* Lourdes: A Place of Miracles */}
        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
                Lourdes: Um Lugar de Milagres
              </h3>
              
              <p className="text-lg mb-4 leading-relaxed">
                Amigo(a), eu pessoalmente testemunhei o poder curador da oração em Lourdes. Vi pessoas encontrarem alívio de doenças crônicas, se recuperarem fisicamente e alcançarem uma paz interior que só Deus pode oferecer. É como se o Céu tocasse a Terra em Lourdes — e cada oração elevada ali é acolhida com compaixão e misericórdia divina.
              </p>
              
              <p className="text-lg leading-relaxed">
                A cura em Lourdes não é apenas física — é espiritual e emocional também. Milhares de peregrinos buscam a intervenção divina e, pela intercessão da Virgem Maria, recebem milagres que superam tudo o que poderiam imaginar.
              </p>
            </div>
          </div>
        </section>
        
        {/* Prayer Journey Steps */}
        <section id="como-funciona" className="py-16 md:py-24 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-5xl">
            <h3 className="text-3xl font-playfair font-semibold mb-12 text-center text-[#333333]">
              A Jornada da Sua Oração
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 1</h4>
                <p className="text-center">Sua oração é impressa com respeito e carinho.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 2</h4>
                <p className="text-center">Sua oração é entregue pessoalmente na Gruta de Lourdes, colocada em um local sagrado onde milagres já aconteceram. Também realizamos uma bênção especial por você.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 3</h4>
                <p className="text-center">Você receberá por e-mail as fotos da sua oração colocada na Gruta assim que chegarmos ao local sagrado, na visita mensal.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* What Makes Lourdes Extraordinary */}
        <section id="por-que-lourdes" className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">
              O Que Torna Lourdes Tão Extraordinária?
            </h3>
            
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-lg mb-4 leading-relaxed">
                  Lourdes é reconhecida no mundo inteiro como um santuário de cura, onde os doentes buscam alívio e restauração. Todos os dias, vejo a fé transformar vidas neste lugar. Seja por cura física, paz interior ou renovação espiritual, a presença da Virgem Maria pode ser sentida em cada canto deste sagrado local.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Há mais de 160 anos, milhões de pessoas buscaram cura aqui — e muitas foram agraciadas com recuperações milagrosas. Corações restaurados, corpos curados, esperanças renovadas. Parece que o véu entre o Céu e a Terra se torna mais fino em Lourdes, permitindo que nossas orações cheguem rapidamente aos ouvidos do Pai.
                </p>
              </div>
                <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/img05.webp" 
                  alt="Rio entre montanhas" 
                  className="w-full max-w-none aspect-video object-cover"
                />
                </div>
            </div>
          </div>
        </section>
        
        {/* Join the Healing Chain */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="bg-[#5f9ea0]/5 border border-[#5f9ea0]/10 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">
                Una-se a Esta Corrente de Cura e Fé
              </h3>
              
              <p className="text-lg mb-6 text-center leading-relaxed">
                Você tem a oportunidade preciosa de enviar sua oração à Gruta de Lourdes — um local sagrado conhecido por milagres de cura. Imagine seus pedidos mais profundos sendo levados com fé até esse solo abençoado. Seja por você ou por alguém querido, esse ato de fé é mais que um pedido — é uma conexão direta com nosso Senhor e com todos que já foram tocados pela graça de Lourdes.
              </p>
            </div>
          </div>
        </section>
        
        {/* Ready to Feel Lourdes' Healing Power */}
        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
              Está Pronto para Sentir o Poder Curador de Lourdes?
            </h3>
            
            <div className="flex flex-col gap-8">
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/img06.webp" 
                  alt="Árvores de pinheiro" 
                  className="w-full max-w-none aspect-video object-cover"
                />
              </div> <div>
                <p className="text-lg leading-relaxed">
                  Não há nada como a paz e a cura que tomam conta do coração quando confiamos nossas preces a Lourdes. Seja por cura física, restauração espiritual ou alívio emocional, este local santo tem o poder de renovar pela graça de Deus.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contribution Section */}
        <section id="contribuicao" className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0] text-center">
              Envie Seu Pedido de Oração Agora
            </h3>
            
            <p className="text-lg mb-8 text-center leading-relaxed max-w-3xl mx-auto">
              Sabemos que nem todos têm a chance de deixar suas orações em um dos locais mais sagrados do mundo — especialmente em tempos difíceis financeiramente. Por isso, decidimos ajudar outras pessoas a enviarem suas orações e receberem as bênçãos que merecem.
            </p>
            
            <p className="text-lg mb-10 text-center font-semibold max-w-3xl mx-auto">
              Como devotos, jamais queremos que o dinheiro seja um obstáculo para suas preces sinceras.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Option 1 */}
              <Card className="border-[#5f9ea0]/30 shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6 px-4 pb-6">
                  <div className="flex justify-center mb-4">
                    <Gift className="text-[#5f9ea0]" size={32} />
                  </div>
                  
                  <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 9.90</h3>
                  <h4 className="font-sans text-lg mb-4 text-center">Preciso de um Pequeno Apoio</h4>
                  
                  <p className="text-sm mb-6 text-center italic">
                    "Por favor, levem minha oração até Lourdes. No momento, não consigo arcar com o valor completo, mas desejo participar deste ato sagrado."
                  </p>
                  
                  <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://seguro.voluntariosdelourdes.online/r/O1S2XW5HJE" target="_blank" rel="noopener noreferrer">
                      Incluir minha oração
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    É uma honra incluir sua oração.
                  </p>
                </CardContent>
              </Card>
              
              {/* Option 2 */}
              <Card className="border-[#5f9ea0] shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#5f9ea0] text-white text-xs py-1 px-3 rounded-bl-lg">
                  Recomendado
                </div>
                <CardContent className="pt-6 px-4 pb-6">
                  <div className="flex justify-center mb-4">
                    <HeartPulse className="text-[#5f9ea0]" size={32} />
                  </div>
                  
                  <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 19.90</h3>
                  <h4 className="font-sans text-lg mb-4 text-center">Custo Real da Entrega</h4>
                  
                  <p className="text-sm mb-6 text-center italic">
                    "Estou cobrindo o custo total para levar minha oração à Gruta. Obrigado por tornar isso possível."
                  </p>
                  
                  <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://seguro.voluntariosdelourdes.online/r/9XBO3KMO78" target="_blank" rel="noopener noreferrer">
                      Entrega Completa da Oração
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    Este é o custo real da missão de entrega.
                  </p>
                </CardContent>
              </Card>
              
              {/* Option 3 */}
              <Card className="border-[#f4d58d] shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6 px-4 pb-6">
                  <div className="flex justify-center mb-4">
                    <Gift className="text-[#f4d58d]" size={32} />
                  </div>
                  
                  <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 29.90</h3>
                  <h4 className="font-sans text-lg mb-4 text-center">Leve Minha Oração + Apoie Outro Devoto</h4>
                  
                  <p className="text-sm mb-6 text-center italic">
                    "Quero contribuir um pouco mais para ajudar outra pessoa que talvez não possa. Que minha oração e minha doação tragam bênçãos a quem precisa."
                  </p>
                  
                  <Button className="w-full bg-[#f4d58d] hover:bg-[#e3c47c] text-[#333333] px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://seguro.voluntariosdelourdes.online/r/LW61SFGXDT" target="_blank" rel="noopener noreferrer">
                      Enviar e Ajudar
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    Obrigado por sua generosidade.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-lg font-playfair italic">
                "Levai as cargas uns dos outros e, assim, cumprireis a lei de Cristo."
              </p>
              <p className="text-sm">– Gálatas 6:2</p>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-[#333333]">
              Receba o Presente dos Milagres Hoje Mesmo
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Coloque sua oração na Gruta de Lourdes e confie no poder da intervenção divina. 
              Sua oração, entregue pessoalmente, fará parte da tradição sagrada desse lugar santo.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#333333] text-gray-300 py-12 px-4">
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
                  <Link to="/termos" className="text-sm hover:text-[#f4d58d] transition-colors">Termos e Condições</Link>
                </li>
                <li>
                  <Link to="/privacidade" className="text-sm hover:text-[#f4d58d] transition-colors">Política de Privacidade</Link>
                </li>
                <li>
                  <Link to="/contato" className="text-sm hover:text-[#f4d58d] transition-colors">Fale Conosco</Link>
                </li>
              </ul>
              <div className="mt-8">
                <p className="text-sm text-gray-400">&copy; 2025 Voluntários de Lourdes. Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Confirmation;
