import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Здесь будут другие секции */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-4">Другие секции будут здесь</h2>
          <p className="text-gray-600">Специализация, статистика, варианты лечения, и т.д.</p>
        </div>
      </section>
    </main>
  );
}
