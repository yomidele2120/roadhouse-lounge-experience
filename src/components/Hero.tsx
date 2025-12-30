import { Button } from '@/components/ui/button';
import { MapPin, ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-glow opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
            Welcome to Jalingo's Premier Destination
          </span>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="text-gradient glow-text">Roadhouse</span>
          <br />
          <span className="text-foreground">Lounge</span>
        </h1>

        <p
          className="text-2xl md:text-3xl text-primary font-display mb-4 animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          Eat • Relax • Experience Nightlife
        </p>

        <p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          <MapPin className="inline-block w-5 h-5 mr-2 text-primary" />
          Located in Jalingo, Taraba State — great food, great music, great vibes.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: '1s' }}
        >
          <Button variant="gold" size="xl" onClick={() => scrollToSection('#menu')}>
            View Menu
          </Button>
          <Button variant="gold-outline" size="xl" onClick={() => scrollToSection('#contact')}>
            Visit Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <button
          onClick={() => scrollToSection('#about')}
          className="text-primary/60 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
