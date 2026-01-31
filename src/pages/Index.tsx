import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeatureCards from "@/components/FeatureCards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  // Número correto garantido
  const myPhoneNumber = "5548988048880"; 

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      </div>

      <main className="flex-1 relative z-10 flex flex-col items-center px-4 py-10 md:py-20">
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-8">
          <img src={logo} alt="Cheiro de Rosa" className="h-16 md:h-28 w-auto" />
          
          <h1 className="font-display text-3xl md:text-7xl font-bold text-foreground">
            Sua Intimidade com <span className="text-coral">Máxima Discrição</span>
          </h1>

          <section className="w-full"><FeatureCards /></section>
          <section className="w-full"><Testimonials /></section>

          <div className="w-full max-w-md pt-8">
            <WhatsAppButton phoneNumber={myPhoneNumber} label="QUERO ATENDIMENTO AGORA" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
