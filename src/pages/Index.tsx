import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeatureCards from "@/components/FeatureCards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react"; // Sugestão: use lucide para o ícone flutuante

const Index = () => {
  // Link personalizado para saber que veio da LP
  const whatsappUrl = "https://wa.me/5548999999999?text=Olá!%20Vim%20pela%20página%20e%20gostaria%20de%20um%20atendimento%20discreto.";

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      
      {/* Background fixo com mais visibilidade */}
      <div className="fixed inset-0 z-0">
        <img
          src={heroBg}
          alt="Elegância e sofisticação"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* BOTÃO FLUTUANTE WhatsApp */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce-slow"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} className="md:w-8 md:h-8" />
      </a>

      <main className="flex-1 relative z-10 flex flex-col items-center px-4 py-8 md:py-16">
        <div className="flex flex-col items-center text-center w-full max-w-3xl mx-auto space-y-6 md:space-y-8">
          
          {/* Logo */}
          <img 
            src={logo} 
            alt="Cheiro de Rosa" 
            className="h-14 md:h-24 w-auto animate-float"
          />

          <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-coral to-transparent" />

          {/* Headline otimizada para mobile */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold text-foreground leading-tight tracking-wide px-2">
            Sua Intimidade com <br />
            <span className="text-coral">Máxima Discrição</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-sm sm:text-base md:text-xl text-coral-light font-medium tracking-wide px-4">
            Entrega Expressa em toda Grande Florianópolis. <br />
            Receba hoje mesmo, em embalagem 100% discreta.
          </p>

          {/* Cards de Benefícios */}
          <div className="pt-2 md:pt-4 w-full px-2">
            <FeatureCards />
          </div>

          {/* Seção de Avaliações */}
          <div className="w-full px-2">
            <Testimonials />
          </div>

          {/* CTA Principal */}
          <div className="pt-4 md:pt-8 flex flex-col items-center gap-3 md:gap-4 w-full px-4">
            <WhatsAppButton phoneNumber="5548999999999" label="CHAMAR NO WHATSAPP AGORA" />
            
            {/* Elemento de Confiança */}
            <div className="flex items-center gap-2 text-muted-foreground/80 text-xs md:text-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Especialistas online agora para te ajudar
            </div>
          </div>

          <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-coral to-transparent" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
