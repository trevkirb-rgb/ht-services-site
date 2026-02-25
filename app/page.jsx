import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import GallerySection from '../components/GallerySection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  );
}