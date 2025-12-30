import { Star, Sparkles, Users, PartyPopper } from 'lucide-react';
import outdoorLounge from '@/assets/outdoor-lounge.jpg';

const features = [
  { icon: Star, text: 'Premium Outdoor Seating' },
  { icon: Sparkles, text: 'Ambient String Lights' },
  { icon: Users, text: 'Perfect for Groups' },
  { icon: PartyPopper, text: 'Celebration Ready' },
];

const OutdoorLounge = () => {
  return (
    <section id="lounge" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50">
              <img
                src={outdoorLounge}
                alt="Outdoor Lounge"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Outdoor Lounge
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Unwind Under <span className="text-gradient">The Stars</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our outdoor lounge offers the perfect escape from the everyday. Relax in our
              beautifully designed open-air space with comfortable seating, ambient lighting, and
              a refreshing atmosphere. Whether you're catching up with friends, celebrating a
              special occasion, or simply enjoying a quiet evening, our lounge provides the ideal
              setting.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutdoorLounge;
