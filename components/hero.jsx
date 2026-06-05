export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <h2 className="text-4xl font-bold text-white">Wear Your Hero</h2>
      <p className="mt-4 text-lg text-gray-300">Explore our exclusive Captain America clothing line.</p>
      <button className="mt-6 bg-[#6C63FF] text-white px-4 py-2 rounded">Shop Now</button>
    </section>
  );
}