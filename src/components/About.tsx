import { Utensils, Music, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Exquisite cuisine crafted with passion and the finest ingredients.',
  },
  {
    icon: Music,
    title: 'Live Entertainment',
    description: 'Premium DJ sets and live performances every weekend.',
  },
  {
    icon: Users,
    title: 'Social Hub',
    description: 'The perfect spot for celebrations, dates, and gatherings.',
  },
  {
    icon: Star,
    title: 'VIP Experience',
    description: 'Exclusive seating and personalized service for special occasions.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Where <span className="text-gradient">Vibes</span> Meet Excellence
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Roadhouse is a modern destination in Jalingo offering restaurant dining, an outdoor
            lounge, and vibrant nightlife. We blend food, music, ambience, and culture to create
            unforgettable social experiences. Whether you're here for a romantic dinner, a night
            out with friends, or a celebration, we promise an experience you'll remember.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
