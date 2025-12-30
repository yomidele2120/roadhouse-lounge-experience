import { useState } from 'react';
import { Button } from '@/components/ui/button';
import foodMain from '@/assets/food-main.jpg';
import foodStarter from '@/assets/food-starter.jpg';
import drinks from '@/assets/drinks.jpg';

const categories = ['All', 'Starters', 'Mains', 'Grills', 'Drinks', 'Desserts'];

const menuItems = [
  {
    id: 1,
    name: 'Signature Bruschetta',
    description: 'Crispy toast topped with fresh tomatoes, basil, and aged balsamic',
    price: '₦3,500',
    category: 'Starters',
    image: foodStarter,
  },
  {
    id: 2,
    name: 'Grilled Ribeye Steak',
    description: 'Premium cut, perfectly seared with herb butter and seasonal vegetables',
    price: '₦15,000',
    category: 'Mains',
    image: foodMain,
  },
  {
    id: 3,
    name: 'Suya Platter',
    description: 'Traditional Nigerian suya with spicy peanut seasoning and fresh onions',
    price: '₦8,500',
    category: 'Grills',
    image: foodMain,
  },
  {
    id: 4,
    name: 'Golden Sunset Cocktail',
    description: 'Our signature blend of premium spirits with tropical fruits',
    price: '₦5,500',
    category: 'Drinks',
    image: drinks,
  },
  {
    id: 5,
    name: 'Jollof Rice Special',
    description: 'Authentic smoky jollof with grilled chicken and fried plantains',
    price: '₦6,500',
    category: 'Mains',
    image: foodMain,
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
    price: '₦4,500',
    category: 'Desserts',
    image: foodStarter,
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Culinary <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with passion and the
            finest local and international ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'gold' : 'outline'}
              size="lg"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
