import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  label?: string;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Olá! Vim pelo site e gostaria de um atendimento discreto.", 
  label = "Fale Conosco no WhatsApp" 
}: WhatsAppButtonProps) => {
  
  const handleClick = () => {
    // Rastreio seguro para o build não falhar
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold bg-[#25D366] text-white rounded-full transition-all hover:scale-105 shadow-xl cursor-pointer border-none w-full justify-center"
    >
      <MessageCircle className="w-6 h-6" />
      <span>{label}</span>
    </button>
  );
};

export default WhatsAppButton;
