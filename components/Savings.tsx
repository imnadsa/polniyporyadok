import React from 'react';

export default function Savings() {
  return (
    <section className="bg-[#eef7fd] py-16 lg:py-24">
      <div className="container-custom">
        
        {/* Заголовок (Navigo, без Coolvetica) */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 font-sans mb-16 lg:mb-20 uppercase tracking-wide">
          Как ещё сэкономить<br />на лечении зубов?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* --- КАРТОЧКА 1: Терапия (10%) --- */}
          <SavingCard 
            title="Экономия на терапевте"
            text="Скидка 10% на терапевтическое лечение (санацию полости рта) при внесении предоплаты на ортодонтическое лечение."
          >
            {/* Иконка: Баббл с 10% */}
            <div className="w-16 h-16 flex items-center justify-center relative">
               <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#2274a4]">
                 {/* Контур баббла */}
                 <path d="M30 5C16.19 5 5 14.5 5 26.25C5 33.5 9.5 39.8 16.5 43.5L14 53L23.5 48.5C25.6 48.9 27.75 49.1 30 49.1C43.81 49.1 55 39.6 55 27.85C55 16.1 43.81 5 30 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
                 {/* Текст внутри */}
                 <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold" fontFamily="sans-serif">10%</text>
               </svg>
            </div>
          </SavingCard>

          {/* --- КАРТОЧКА 2: Рассрочка (Сердце) --- */}
          <SavingCard 
            title="Рассрочка"
            text="Рассрочка от клиники на 3 месяца на ортопедическое и хирургическое лечение."
          >
             {/* Иконка: Сердце */}
             <div className="w-16 h-16 flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#2274a4]">
                 <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
               </svg>
             </div>
          </SavingCard>

          {/* --- КАРТОЧКА 3: Без переплат (Рукописный стиль) --- */}
          <SavingCard 
            title="Никаких переплат"
            text="Фиксация стоимости ортодонтического лечения при внесении предоплаты."
          >
             {/* Иконка: Рукописный замок/щит */}
             <div className="w-16 h-16 flex items-center justify-center">
               <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#2274a4]">
                 {/* Эффект "кисточки" создается неровными линиями и скругленными концами */}
                 <path d="M25 10C25 10 15 12 10 15C10 28 15 38 25 42C35 38 40 28 40 15C35 12 25 10 25 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M18 25L23 30L32 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
          </SavingCard>

        </div>
      </div>
    </section>
  );
}

// Вспомогательный компонент карточки
interface SavingCardProps {
  title: string;
  text: string;
  children: React.ReactNode;
}

function SavingCard({ title, text, children }: SavingCardProps) {
  return (
    <div className="relative group">
      {/* 
         Основной контейнер.
         pt-12 - отступ сверху, чтобы иконка не наезжала на текст.
      */}
      <div className="relative bg-white border border-[#3AC3F3] rounded-[2rem] p-8 pt-12 text-center h-full hover:shadow-lg transition-shadow duration-300">
        
        {/* 
           ИКОНКА СВЕРХУ
           absolute -top-8 -> Вытаскиваем иконку наверх на половину её высоты.
           bg-white -> Белый фон перекрывает синюю границу карточки, создавая эффект "разрыва".
           px-2 -> Небольшой отступ, чтобы линия не прилипала к иконке.
        */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-4">
          {children}
        </div>

        {/* Заголовок (Navigo/Sans) */}
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-sans">
          {title}
        </h3>

        {/* Текст */}
        <p className="text-gray-600 font-sans leading-relaxed text-sm lg:text-base">
          {text}
        </p>
      </div>
    </div>
  );
}
