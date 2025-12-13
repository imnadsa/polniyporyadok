import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Info from "@/components/Info";
import Science from '@/components/Science';
import Appointment from '@/components/Appointment';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Info />
      <Science />
      <Appointment />
    </main>
  );
}
