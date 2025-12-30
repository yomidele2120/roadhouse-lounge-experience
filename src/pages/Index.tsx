import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import OutdoorLounge from '@/components/OutdoorLounge';
import Nightlife from '@/components/Nightlife';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Roadhouse Lounge | Premium Restaurant, Outdoor Lounge & Nightlife in Jalingo</title>
        <meta
          name="description"
          content="Experience the best of Jalingo at Roadhouse Lounge. Fine dining, outdoor lounge, and vibrant nightlife. Eat, relax, and experience nightlife at Taraba's premier destination."
        />
        <meta
          name="keywords"
          content="Roadhouse Lounge, Jalingo, Taraba, Nigeria, restaurant, lounge, nightlife, bar, outdoor lounge, fine dining"
        />
        <link rel="canonical" href="https://roadhouselounge.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Menu />
          <OutdoorLounge />
          <Nightlife />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
