'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

const doctorsData = [
  {
    id: 1,
    name: "Тихонов Андрей Викторович",
    specialty: "Международный эксперт, ТОП-5 ортодонт России, кандидат наук",
    tagline: "Научный эксперт",
    experience: "24 года",
    quote: "Мы помогаем людям обрести уверенность и повысить качество жизни, обеспечивая им естественную красивую улыбку.",
    image: "/doctor4.png",
  },
  {
    id: 2,
    name: "Тихонов Сергей Викторович",
    specialty: "Ортодонт, заведующий отделением ортодонтии",
    tagline: "Создаю улыбки мечты",
    experience: "21 лет",
    quote: "Я стремлюсь к тому, чтобы объединять практическое мастерство и научные достижения, создавая новые стандарты в ортодонтии. Моя цель — помогать коллегам расти профессионально и делать улыбки пациентов красивыми и здоровыми",
    image: "/doctor3.png",
  },
  {
    id: 3,
    name: "Бовшикова Евгения Александровна",
    specialty: "Ортодонт, заведующая ортодонтическим отделением",
    tagline: "Лечение сложных случаев",
    experience: "12 лет",
    quote: "Красивая улыбка - это залог здоровья и успеха! Я стремлюсь создавать гармоничные и здоровые улыбки, обеспечивая комфортные условия, применяя современные методы и индивидуальный подход.",
    image: "/doctor2.png",
  },
  {
    id: 4,
    name: "Курганникова Юлия Владимировна",
    specialty: "Ведущий ортодонт",
    tagline: "Высокий уровень эмпатии",
    experience: "9 лет",
    quote: "Ваша красота и здоровье начинается с доверия. Здесь вас услышат, поддержат и помогут измениться — бережно и без границ.",
    image: "/doctor5.png",
  },
  {
    id: 5,
    name: "Владимировна Юлия Александровна",
    specialty: "Ведущий ортодонт",
    tagline: "Лечение детей и подростков",
    experience: "8 лет",
    quote: "Улыбка - не деталь. Это характер. Сделаем её уверенной",
    image: "/doctor7.png",
  },
  {
    id: 6,
    name: "Васильев Геннадий Георгиевич",
    specialty: "Ортодонт",
    tagline: "Лечение детей и подростков",
    experience: "7 лет",
    quote: "Моя цель - помочь обрести вам улыбку, которая будет радовать вас и окружающих каждый день!",
    image: "/doctor9.png",
  },
];

export default function Doctors() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Ширина карточки + отступ
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 300;
      // Добавляем 24px (gap-6) к сдвигу
      const scrollAmount = direction === 'left' ? -(cardWidth + 24) : (cardWidth + 24); 
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        // Обязательный класс для плавной прокрутки
        behavior: 'smooth', 
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#eef7fd] overflow-hidden">
      <div className="container-custom">
        
        {/* Заголовок и навигация */}
        <div className="flex justify-between items-end mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 font-heading uppercase">
            Наши врачи
          </h2>
          
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
          // ИЗМЕНЕНИЯ ЗДЕСЬ: 
          // 1. overflow-x-hidden (отключает скролл пальцем)
          // 2. scroll-smooth (для плавной прокрутки кнопками)
          // 3. Убраны snap-классы
          className="flex gap-6 overflow-x-hidden scroll-smooth pb-8 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-hide"
        >
          {doctorsData.map((doc) => (
            <div 
              key={doc.id} 
              // w-[85vw] - остается для мобильных, чтобы карточка занимала большую часть экрана
              className="flex-none w-[85vw] sm:w-[450px] lg:w-[480px]" 
            >
              <div className="relative bg-[#effaff] rounded-[2.5rem] border-2 border-[#3AC3F3] h-[500px] lg:h-[550px] overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                
                {/* ЛЕВАЯ ЧАСТЬ (ТЕКСТ) */}
                <div className="relative z-20 p-6 lg:p-8 flex flex-col h-full pointer-events-none max-w-[65%]">
                  
                  {/* Имя */}
                  <h3 className="text-xl lg:text-2xl font-black text-gray-900 font-heading leading-tight mb-3">
                    {doc.name}
                  </h3>

                  {/* Специальность */}
                  <p className="text-gray-500 text-sm lg:text-base mb-4 leading-snug">
                    {doc.specialty}
                  </p>
                  
                  {/* Плашка Стаж */}
                  <div className="mb-4">
                    <span className="inline-block border border-[#3AC3F3] text-[#287FB8] px-4 py-1.5 rounded-lg font-bold text-xs lg:text-sm bg-white">
                      Стаж: {doc.experience}
                    </span>
                  </div>

                  {/* Цитата врача */}
                  {doc.quote && (
                    <div className="mb-auto mt-2">
                       <div className="relative pl-3 border-l-2 border-[#3AC3F3]">
                          <p className="text-[#155e85] text-xs lg:text-sm italic leading-snug">
                            "{doc.quote}"
                          </p>
                       </div>
                    </div>
                  )}

                  {/* ТАГЛАЙН (Стикер) */}
                  {doc.tagline && (
                    <div className="mt-4 mb-4 relative z-30">
                      <div className="inline-block bg-white text-[#3AC3F3] font-bold text-sm lg:text-base font-heading px-4 py-3 rounded-xl rounded-tl-none shadow-md border border-blue-100 rotate-[-1deg]">
                        "{doc.tagline}"
                      </div>
                    </div>
                  )}

                </div>

                {/* ПРАВАЯ ЧАСТЬ (ФОТО) */}
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
