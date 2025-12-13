'use client';

import React, { useRef } from 'react';

// ID видео с Rutube
const videos = [
  { id: "95a61ac72850acbbc68d7d0f0995fdc5" },
  { id: "95a61ac72850acbbc68d7d0f0995fdc5" },
  { id: "95a61ac72850acbbc68d7d0f0995fdc5" },
  { id: "95a61ac72850acbbc68d7d0f0995fdc5" },
];

export default function Reviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Функция прокрутки по кнопкам
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Узнаем ширину одной карточки
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 300;
      // Скроллим ровно на одну карточку + отступ
      const scrollAmount = direction === 'left' ? -(cardWidth + 16) : (cardWidth + 16);
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        
        {/* Заголовок и Кнопки (Кнопки видны только на мобильном lg:hidden) */}
        <div className="flex flex-col lg:block items-center mb-10 lg:mb-16 relative">
          <h2 className="text-3xl lg:text-5xl font-black text-center text-gray-900 font-heading mb-6 lg:mb-0">
            ОТЗЫВЫ О НАС
          </h2>

          {/* Кнопки навигации (Только для мобильных) */}
          <div className="flex gap-4 lg:hidden">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-[#3AC3F3] flex items-center justify-center text-[#3AC3F3] hover:bg-[#3AC3F3] hover:text-white transition-all active:scale-95 bg-white"
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

        {/* 
           Контейнер слайдера:
           lg:grid -> На компе сетка (все сразу)
           flex -> На мобильном ряд
           overflow-hidden -> На мобильном запрещаем свайп пальцем (как ты просил "без скролла"), работает только по кнопкам. 
           (Если захочешь вернуть свайп, замени overflow-hidden на overflow-x-auto)
        */}
        <div 
          ref={scrollContainerRef}
          className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 overflow-hidden lg:overflow-visible scroll-smooth snap-x snap-mandatory"
        >
          {videos.map((video, index) => (
            <div 
              key={index}
              // w-full -> На мобильном карточка занимает 100% ширины контейнера
              className="relative shrink-0 w-full lg:w-auto snap-center"
            >
              {/* Контейнер 9:16 */}
              <div className="aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative group mx-auto max-w-[320px] lg:max-w-none">
                <iframe 
                  src={`https://rutube.ru/play/embed/${video.id}`}
                  allowFullScreen
                  frameBorder="0" 
                  allow="clipboard-write; autoplay" 
                  className="absolute inset-0 w-full h-full"
                ></iframe>

                {/* Рамка */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#3AC3F3]/50 rounded-3xl transition-colors pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
