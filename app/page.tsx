import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Info from "@/components/Info";
import Science from '@/components/Science';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Info />
      <Science />
    </main>
  );
}
