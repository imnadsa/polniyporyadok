import Button from './ui/Button';
import Image from 'next/image';

export
default function Hero() {
  return (
    <section className="bg-[#eef7fd] py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-radial from-[#3AC3F3]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* 
            ИЗМЕНЕНИЯ ЗДЕСЬ:
            grid -> flex flex-col lg:grid
            Это говорит: на мобильном блоки идут в столбик, на десктопе - в сетку
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* 
             Левая часть (Текст)
             order-2 lg:order-1 -> На мобильном будет второй, на десктопе - первый.
             ИЗМЕНЕНИЕ: меняем на order-1 lg:order-1
             Теперь этот блок ВСЕГДА первый
          */}
          <div className="order-1 lg:order-1">
            <h1 className="text-[40px] md:text-[48px] lg:text-[52px] xl:text-[58px] font-black leading-[1.15] mb-8 text-gray-900 font-heading tracking-[0.02em]">
              Выравниваем{' '}
              <span className="inline-block px-2 pb-1 border-2 border-dashed border-[#287FB8]/40 text-[#287FB8] rounded-lg transform -rotate-1 mx-1">
                любой прикус
              </span>
              <br />
              и создаём{' '}
              <span className="inline-block px-2 pb-1 border-2 border-dashed border-[#287FB8]/40 text-[#287FB8] rounded-lg transform rotate-1 mx-1 mt-2 lg:mt-0">
                идеальную улыбку
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Под руководством{' '}
              <span className="font-bold text-[#287FB8]">
                лучшего ортодонта Санкт-Петербурга — Андрея Тихонова
              </span>
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
              Запишитесь на бесплатную консультацию и получите план лечения уже на первом приеме.
            </p>
            <Button href="#appointment">
              Бесплатная консультация
            </Button>
          </div>

          {/* 
             Правая часть (Карточка врача)
             order-1 lg:order-2 -> На мобильном будет первая, на десктопе - вторая.
             ИЗМЕНЕНИЕ: меняем на order-2 lg:order-2
             Теперь этот блок на мобильном будет ВТОРЫМ
          */}
          <div className="order-2 lg:order-2">
            <DoctorCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// ... остальной код (DoctorCard, InfoBadge) остается без изменений ...

// --- КАРТОЧКА ВРАЧА С ФОТО И ПРОЗРАЧНЫМ ТЕКСТОМ ---
function DoctorCard() {
  return (
    // Главный контейнер
    <div className="relative rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-lg mx-auto lg:ml-auto lg:mr-0 overflow-hidden">
      
      {/* 1. ФОТОГРАФИЯ (на весь фон) */}
      <div className="relative w-full h-[500px] lg:h-[550px]">
        <Image
          src="/atikhonov.jpg"
          alt="Фото - Тихонов Андрей Викторович"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* 2. БЛОК С ТЕКСТОМ (накладывается поверх фото) */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        
        {/* Имя и Бейджи (снизу) */}
        <div className="text-white">
          <h3 className="text-3xl lg:text-4xl font-bold font-heading leading-tight mb-6 drop-shadow-md">
            Тихонов Андрей<br />Викторович
          </h3>
          <div className="flex flex-col items-start gap-3">
            <InfoBadge text="24 года стаж" />
            <InfoBadge text="Кандидат Медицинских Наук" />
            <InfoBadge text="Топ-5 ортодонтов в России" highlight />
          </div>
        </div>
      </div>

    </div>
  );
}

// --- Бейдж ---
interface InfoBadgeProps {
  text: string;
  highlight?: boolean;
}

function InfoBadge({ text, highlight }: InfoBadgeProps) {
  return (
    <div className={`inline-flex items-center px-5 py-2.5 rounded-full backdrop-blur-sm transition-all ${
      highlight 
        ? 'bg-[#3AC3F3]/90 text-white font-bold border-2 border-transparent' 
        : 'bg-white/20 text-white border-2 border-white/30'
    }`}>
      <span className="text-sm font-medium leading-tight">
        {text}
      </span>
    </div>
  );
}
