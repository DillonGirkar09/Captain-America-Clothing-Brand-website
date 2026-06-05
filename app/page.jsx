import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import ProductGrid from '@/components/product-grid';
import Stats from '@/components/stats';
import InteractiveSection from '@/components/interactive-section';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0D0F14] text-white">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Stats />
      <InteractiveSection />
    </main>
  );
}