import { Lock, Truck, Smile } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega no Mesmo Dia",
    description: "Na Grande Florianópolis",
  },
  {
    icon: Lock,
    title: "100% Sigiloso",
    description: "Embalagem discreta e sem identificação",
  },
  {
    icon: Smile,
    title: "Sem Julgamentos",
    description: "Atendimento especializado e acolhedor",
  },
];

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 w-full max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group flex flex-row sm:flex-col items-center sm:items-center p-4 md:p-6 rounded-xl md:rounded-2xl
                     bg-secondary/60 backdrop-blur-sm border border-border/30
                     transition-all duration-300 hover:bg-secondary/70 hover:border-coral/30
                     hover:shadow-[0_0_30px_hsl(14_90%_58%/0.15)]"
        >
          <div className="p-2 md:p-3 rounded-full bg-primary/20 mr-3 sm:mr-0 sm:mb-3 md:mb-4 
                          transition-all duration-300 group-hover:bg-primary/30 shrink-0">
            <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-coral" />
          </div>
          <div className="text-left sm:text-center">
            <h3 className="font-display text-base md:text-xl font-semibold text-foreground mb-0.5 md:mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm font-body">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
