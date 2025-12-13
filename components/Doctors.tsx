'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

const doctorsData = [
  {
    id: 1,
    name: "Косороткина Екатерина Сергеевна",
    specialty: "Стоматолог-терапевт, пародонтолог, хирург, ведущий специалист",
    tagline: "Ортодонт-перфекционист",
    experience: "16 лет",
    image: "/doctor.png",
  },
  {
    id: 2,
    name: "Иванова Мария Петровна",
    specialty: "Стоматолог-ортодонт, гнатолог",
    tagline: "Создаю улыбки мечты",
    experience: "12 лет",
    image: "/doctor.png",
  },
  {
    id: 3,
    name: "Смирнов Алексей Владимирович",
    specialty: "Челюстно-лицевой хирург, имплантолог",
    tagline: "Хирург с золотыми руками",
    experience: "20 лет",
    image: "/doctor.png",
  },
  {
    id: 4,
    name: "Петров Дмитрий Сергеевич",
    specialty: "Стоматолог-ортопед",
    tagline: "Эстетика в каждой детали",
    experience: "8 лет",
    image: "/doctor.png",
  },
  {
    id: 5,
    name: "Соколова Анна Игоревна",
    specialty: "Детский стоматолог",
    tagline: "Зубная фея для детей",
    experience: "10 лет",
    image: "/doctor.png",
  },
  {
    id: 6,
    name: "Волков Сергей Андреевич",
    specialty: "Стоматолог-хирург",
    tagline: "Удаление без боли",
    experience: "14 лет",
    image: "/doctor.png",
  },
];

export default function Doctors() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 300;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        
        {/* Заголовок и навигация */}
        <div className="flex justify-between items-end mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 font-heading uppercase">
            Наши врачи
          </h2>
          
          {/* Кнопки */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-[#3AC3F3] flex items-center justify-center text-[#3AC3F3] hover:bg-[#3AC3F3] hover:text-white transition-all active:scale-95"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-[#3AC3F3] flex items-center justify-center text-white shadow-lg hover:bg-[#287FB8] transition-all active:scale-95"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H19"/><path d="M12 5L19 12L12 19"/></svg>
            </button>
          </div>
        </div>

        {/* Карусель */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-hide"
        >
          {doctorsData.map((doc) => (
            <div 
              key={doc.id} 
              // Делаем карточку шире: w-[85vw] на мобильном (почти экран), фиксировано на десктопе
              className="flex-none w-[85vw] sm:w-[450px] lg:w-[480px] snap-center"
            >
              <div className="relative bg-[#effaff] rounded-[2.5rem] border-2 border-[#3AC3F3] h-[480px] lg:h-[520px] overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                
                {/* 
                   ЛЕВАЯ ЧАСТЬ (ТЕКСТ) 
                   Ограничиваем ширину (max-w-[65%]), чтобы текст не лез на врача справа
                */}
                <div className="relative z-20 p-6 lg:p-8 flex flex-col h-full pointer-events-none max-w-[65%]">
                  
                  {/* Имя */}
                  <h3 className="text-xl lg:text-2xl font-black text-gray-900 font-heading leading-tight mb-3">
                    {doc.name}
                  </h3>

                  {/* Специальность */}
                  <p className="text-gray-500 text-sm lg:text-base mb-5 leading-snug">
                    {doc.specialty}
                  </p>
                  
                  {/* Плашка Стаж */}
                  <div className="mb-auto">
                    <span className="inline-block border border-[#3AC3F3] text-[#287FB8] px-4 py-1.5 rounded-lg font-bold text-xs lg:text-sm bg-white">
                      Стаж: {doc.experience}
                    </span>
                  </div>

                  {/* 
                     ТАГЛАЙН (Фраза) - теперь СТИКЕР
                     Сделали белую подложку с тенью, чтобы читалось на любом фоне
                  */}
                  {doc.tagline && (
                    <div className="mt-4 mb-4 relative z-30">
                      <div className="inline-block bg-white text-[#3AC3F3] font-bold text-sm lg:text-base font-heading px-4 py-3 rounded-xl rounded-tl-none shadow-md border border-blue-100 rotate-[-1deg]">
                        "{doc.tagline}"
                      </div>
                    </div>
                  )}

                </div>

                {/* 
                   ПРАВАЯ ЧАСТЬ (ФОТО)
                   Сдвинули сильно вправо (right-[-40px] или right-[-15%]) 
                   и вниз, чтобы освободить левый угол для текста.
                */}
                <div className="absolute bottom-0 right-[-30px] lg:right-[-40px] w-[60%] h-[75%] lg:h-[80%] z-10 flex items-end justify-end pointer-events-none">
                  <div className="relative w-full h-full">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
