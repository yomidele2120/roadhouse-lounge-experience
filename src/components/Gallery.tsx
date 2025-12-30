import { useState } from 'react';
import { X } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import outdoorLounge from '@/assets/outdoor-lounge.jpg';
import nightlife from '@/assets/nightlife.jpg';
import foodMain from '@/assets/food-main.jpg';
import drinks from '@/assets/drinks.jpg';
import foodStarter from '@/assets/food-starter.jpg';

const galleryImages = [
  { src: heroBg, alt: 'Lounge Interior', category: 'Interior' },
  { src: outdoorLounge, alt: 'Outdoor Lounge', category: 'Outdoor' },
  { src: nightlife, alt: 'Nightlife Party', category: 'Nightlife' },
  { src: foodMain, alt: 'Gourmet Dish', category: 'Food' },
  { src: drinks, alt: 'Premium Cocktails', category: 'Drinks' },
  { src: foodStarter, alt: 'Appetizers', category: 'Food' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Captured <span className="text-gradient">Moments</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a glimpse into the Roadhouse experience through our lens.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  index === 0 ? 'h-[400px] md:h-full' : 'h-64'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm">
                  {image.category}
                </span>
                <p className="text-foreground font-medium mt-2">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
