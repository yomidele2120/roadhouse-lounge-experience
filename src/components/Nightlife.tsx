import { Music, Calendar, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nightlife from '@/assets/nightlife.jpg';

const events = [
  {
    title: 'Friday Night Fever',
    date: 'Every Friday',
    description: 'Live DJ sets and exclusive cocktail specials',
    icon: Music,
  },
  {
    title: 'Saturday Vibes',
    date: 'Every Saturday',
    description: 'The hottest party in Jalingo with top DJs',
    icon: Sparkles,
  },
  {
    title: 'VIP Nights',
    date: 'First Saturday of Month',
    description: 'Exclusive access, premium service, unforgettable nights',
    icon: Star,
  },
];

const Nightlife = () => {
  return (
    <section id="nightlife" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${nightlife})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Nightlife Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Where The <span className="text-gradient glow-text">Night Comes Alive</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience Jalingo's most electrifying nightlife. Premium DJ sets, VIP experiences, and
            an atmosphere that keeps you coming back for more.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <div
              key={event.title}
              className="group p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-500 neon-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <event.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                <Calendar className="w-4 h-4" />
                {event.date}
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="glow"
            size="xl"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Reserve VIP Seating
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Nightlife;
