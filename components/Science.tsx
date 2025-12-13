import React from 'react';

export default function Science() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* 
            --- ПРАВАЯ КОЛОНКА (ТЕКСТ) ---
            На мобильном идет ПЕРВОЙ (order-1), на десктопе ВТОРОЙ (lg:order-2) 
            Правка: Вы просили на мобильном текст сверху. 
            По умолчанию в flex-col блоки идут по порядку. 
            Поэтому просто меняем порядок колонок в HTML или используем order.
            Я сделаю структуру так, чтобы текст был первым в коде, а видео вторым.
            А на десктопе через grid поменяем их местами, если нужно видео слева.
          */}
          
          <div className="order-1 lg:order-2">
            {/* Заголовок */}
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 font-heading leading-tight mb-6">
              <span className="text-[#287FB8]">Научный подход</span> в основе каждого решения.
            </h2>

            {/* Подзаголовок */}
            <p className="text-lg lg:text-xl font-bold text-gray-800 mb-8 leading-relaxed">
              Мы не следуем моде — мы опираемся на доказательную медицину.
            </p>

            {/* Список с ромбиками */}
            <div className="space-y-6 mb-10">
              <ListItem text="Все методики лечения разработаны и проверены в ходе многолетних клинических исследований, подтверждены публикациями и международными протоколами." />
              <ListItem text="Наши врачи регулярно участвуют в международных научных конференциях, ведут собственные исследования и внедряют только те технологии, эффективность которых подтверждена." />
            </div>

            {/* Блок с цитатой */}
            <div className="flex gap-4 lg:gap-6 mt-8 lg:mt-12">
              {/* Кавычки (SVG) */}
              <div className="shrink-0 text-[#287FB8]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20H0V0H20V20H10V40H0V20ZM30 20H20V0H40V20H30V40H20V20Z" fill="currentColor" fillOpacity="0.2"/>
                  <path d="M12 22H2V2H22V22H12V42H2V22ZM32 22H22V2H42V22H32V42H22V22Z" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-600 italic text-base lg:text-lg leading-relaxed">
                  Здесь нет места догадкам: каждый план лечения — это индивидуальный проект, основанный на научных данных, точных расчетах и биомеханике.
                </p>
                {/* Подпись (закорючка) - опционально, можно добавить SVG подписи, если есть */}
              </div>
            </div>
          </div>

          {/* 
            --- ЛЕВАЯ КОЛОНКА (ВИДЕО) ---
            На мобильном ВТОРАЯ (order-2), на десктопе ПЕРВАЯ (lg:order-1)
          */}
          <div className="order-2 lg:order-1 relative w-full">
            {/* Контейнер видео (заглушка) */}
            <div className="relative rounded-3xl overflow-hidden bg-gray-200 aspect-[4/5] lg:aspect-[3.5/4] shadow-lg group cursor-pointer">
              {/* Плейсхолдер фото (серый фон + текст) */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-400 font-medium text-lg">[Видео доктора]</span>
              </div>

              {/* Кнопка Play по центру */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#287FB8]/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Текст "Посмотрите обращение" - опционально, как на референсе */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-14 text-white font-medium text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">
                Посмотрите обращение<br/>от главного врача
              </div>
            </div>

            {/* Карточка с именем врача (наезжает на видео снизу) */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 max-w-[90%] mx-auto -mt-10 lg:-mt-16 lg:ml-8 relative z-10 border border-gray-100">
              <h3 className="text-xl lg:text-2xl font-bold text-[#287FB8] font-heading mb-2">
                Тихонов Андрей<br/>Викторович
              </h3>
              <p className="text-sm lg:text-base text-gray-500 leading-snug">
                к.м.н., ТОП-5 ортодонтов России,<br/>Спикер международного уровня
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Компонент списка с "небрежным" ромбиком
function ListItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      {/* Иконка ромбика */}
      <div className="shrink-0 mt-1.5 mr-4 lg:mr-6">
        <div className="w-4 h-4 grid grid-cols-2 gap-[2px] transform rotate-45">
           {/* Квадратики: два синих, два посветлее для эффекта перелива/небрежности */}
           <div className="bg-[#287FB8] rounded-[1px]"></div>
           <div className="bg-[#287FB8] opacity-60 rounded-[1px]"></div>
           <div className="bg-[#287FB8] opacity-60 rounded-[1px]"></div>
           <div className="bg-[#287FB8] rounded-[1px]"></div>
        </div>
      </div>
      
      {/* Текст пункта */}
      <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
}
