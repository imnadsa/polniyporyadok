import React from 'react';

export default function Science() {
  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* 
            --- ЛЕВАЯ КОЛОНКА (ВИДЕО) ---
            Сделал фиксированную ширину на десктопе (lg:w-[380px]), 
            чтобы видео не растягивалось на пол-экрана.
            flex-none не дает ему сжиматься.
          */}
          <div className="order-2 lg:order-1 relative w-full lg:w-[380px] flex-none mx-auto lg:mx-0">
            <iframe
              src="https://rutube.ru/play/embed/95a61ac72850acbbc68d7d0f0995fdc5
              frameBorder="0" 
              allow="clipboard-write; autoplay" 
              webkitAllowFullScreen 
              mozallowfullscreen 
              allowFullScreen 
              className="absolute inset-0 w-full h-full"
            ></iframe>

              {/* Кнопка Play (если используете обложку поверх плеера) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-[#287FB8]/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Карточка врача */}
            <div className="bg-white rounded-2xl shadow-xl p-5 lg:p-6 w-[90%] mx-auto -mt-8 relative z-10 border border-gray-100 text-center lg:text-left">
              <h3 className="text-lg lg:text-xl font-bold text-[#287FB8] font-heading leading-tight mb-1">
                Тихонов Андрей<br/>Викторович
              </h3>
              <p className="text-xs lg:text-sm text-gray-500 leading-snug">
                к.м.н., ТОП-5 ортодонтов России,<br/>Спикер международного уровня
              </p>
            </div>
          </div>

          {/* 
            --- ПРАВАЯ КОЛОНКА (ТЕКСТ) ---
            Занимает все оставшееся место (flex-1)
          */}
          <div className="order-1 lg:order-2 flex-1">
            {/* Заголовок */}
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 font-heading leading-tight mb-8">
              <span className="text-[#287FB8]">Научный подход</span> в основе каждого решения.
            </h2>

            {/* БЛОК-РОМБ (Акцентная фраза) */}
            <div className="relative bg-[#287FB8] text-white p-6 lg:p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-lg mb-10 mx-2 lg:mx-0">
               {/* Декоративный элемент (полупрозрачный ромб на фоне) */}
               <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-[3rem]"></div>
               
               <p className="text-lg lg:text-xl font-bold leading-relaxed relative z-10 text-center lg:text-left">
                 «Мы не следуем моде — мы опираемся на доказательную медицину»
               </p>
            </div>

            {/* Список */}
            <div className="space-y-5 mb-8 pl-2">
              <ListItem text="Все методики лечения разработаны и проверены в ходе многолетних клинических исследований, подтверждены публикациями и международными протоколами." />
              <ListItem text="Наши врачи регулярно участвуют в международных научных конференциях, ведут собственные исследования и внедряют только те технологии, эффективность которых подтверждена." />
            </div>

            {/* Цитата с простыми кавычками */}
            <div className="flex gap-4 mt-8 bg-gray-50 p-6 rounded-2xl border-l-4 border-[#287FB8]">
              <div className="shrink-0">
                {/* Простая иконка кавычек */}
                <span className="text-5xl leading-none text-[#287FB8] font-serif">“</span>
              </div>
              <p className="text-gray-600 italic text-sm lg:text-base leading-relaxed pt-2">
                Здесь нет места догадкам: каждый план лечения — это индивидуальный проект, основанный на научных данных, точных расчетах и биомеханике.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Компонент списка
function ListItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      {/* Иконка ромбика */}
      <div className="shrink-0 mt-1.5 mr-4">
        <div className="w-3 h-3 bg-[#287FB8] rotate-45"></div>
      </div>
      <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
}
