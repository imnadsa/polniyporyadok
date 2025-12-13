'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Состояние для модального окна с картой
  const [activeMap, setActiveMap] = useState<string | null>(null);

  // ДАННЫЕ КЛИНИК И НОВЫЕ ССЫЛКИ НА КАРТЫ
  const clinics = [
    {
      city: "Санкт-Петербург",
      address: "м. Международная, ул. Турку, д. 11, к. 2",
      phones: ['8 (812) 320-10-01', '8 (812) 214-99-00'],
      email: "office@ppclinic.ru",
      // Точка на Турку
      mapSrc: "https://yandex.ru/map-widget/v1/?ll=30.379465%2C59.866573&mode=search&oid=1321972654&ol=biz&z=16.95"
    },
    {
      city: "Санкт-Петербург",
      address: "м. Чкаловская, ул. Петрозаводская, д. 13",
      phones: ['8 (812) 320-10-01', '8 (812) 214-99-00'],
      email: "info@ppclinic.ru",
      // Точка на Петрозаводской
      mapSrc: "https://yandex.ru/map-widget/v1/?ll=30.295356%2C59.963685&mode=poi&poi%5Bpoint%5D=30.288881%2C59.964874&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D87260402616&z=16.45"
    },
    {
      city: "Гатчина",
      address: "ул. Коли Подрядчикова д. 22",
      phones: ['8 (812) 320-10-01', '8 (812) 214-99-00'],
      email: "info_ppg@ppclinic.ru",
      // Точка в Гатчине
      mapSrc: "https://yandex.ru/map-widget/v1/?ll=30.121839%2C59.580181&mode=search&oid=139473820804&ol=biz&z=16.95"
    }
  ];

  return (
    <>
      <footer className="bg-[#1F1F1F] pt-12 pb-8 text-sm text-gray-300 relative mt-32">
        <div className="container-custom">
          
          {/* --- ВЕРХНЯЯ ЧАСТЬ --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 border-b border-gray-800 pb-12">
            
            {/* 1. ЛОГОТИП И РЕЙТИНГ (СЛЕВА - 5 колонок) */}
            <div className="lg:col-span-5 flex flex-col items-start relative">
              
              {/* Логотип (эффект закладки) */}
              <div className="absolute -top-32 lg:-top-44 left-0 flex flex-col gap-4">
                 {/* Иконка */}
                 <div className="w-28 h-28 lg:w-40 lg:h-40 text-[#3BC3F3] drop-shadow-2xl">
                   <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M108 0H12V103.369C12 104.596 12.3634 105.795 13.0444 106.815C14.1958 108.54 16.1326 109.576 18.2065 109.576H19.1077C21.0388 109.576 22.9028 108.868 24.3469 107.586L50.2682 84.5736C53.0501 82.104 56.6409 80.74 60.3609 80.74C64.0809 80.74 67.6717 82.104 70.4536 84.5736L96.6819 107.858C97.9282 108.965 99.5426 109.576 101.209 109.576C103.221 109.576 105.136 108.683 106.425 107.138C107.443 105.918 108 104.38 108 102.792V0Z" fill="currentColor"/>
                   </svg>
                 </div>
                 
                 {/* Текст логотипа */}
                 <div className="flex flex-col mt-2">
                  <span className="text-3xl lg:text-5xl font-black text-white uppercase leading-none tracking-wide">
                    ПОЛНЫЙ<br/>ПОРЯДОК <sup className="text-lg text-gray-500">®</sup>
                  </span>
                  <span className="text-base text-gray-400 font-medium mt-3 tracking-widest uppercase">
                    Ортодонтия и стоматология
                  </span>
                </div>
              </div>
              
              {/* Распорка */}
              <div className="h-56 lg:h-64 block w-full"></div>

              {/* Рейтинг */}
              <div className="flex items-center gap-6 mt-4">
                 <div className="text-6xl font-black text-[#3BC3F3]">4.9</div>
                 <div className="text-base text-gray-400 leading-snug">
                   Средняя оценка на основе<br/>
                   <span className="text-white font-bold text-lg border-b border-[#3BC3F3]">600+ отзывов</span>
                 </div>
              </div>
            </div>

            {/* 2. CALL TO ACTION (Ортодонтия) */}
            <div className="lg:col-span-7 flex flex-col justify-end">
              <div className="bg-[#2A2A2A] rounded-3xl p-8 lg:p-12 border border-gray-800">
                  <h3 className="text-2xl lg:text-3xl font-black text-white font-heading mb-6 uppercase flex items-center gap-4">
                      <span className="w-2 h-10 bg-[#3BC3F3] rounded-full"></span>
                      Создаем улыбки мечты
                  </h3>
                  
                  <p className="text-gray-300 mb-8 text-base lg:text-lg leading-relaxed max-w-2xl">
                      Ортодонтия — это не просто ровные зубы, это гармония лица, правильная функция и уверенность в себе на всю жизнь. 
                      Наши специалисты используют передовые цифровые технологии для достижения идеального результата.
                  </p>
                  
                  {/* Кнопка Оставить заявку */}
                  <div>
                      <button className="group relative w-full sm:w-auto py-5 px-10 rounded-2xl bg-[#3BC3F3] text-white font-bold text-lg overflow-hidden shadow-[0_0_25px_rgba(59,195,243,0.3)] hover:shadow-[0_0_40px_rgba(59,195,243,0.5)] transition-all active:scale-[0.98]">
                          <span className="relative z-10 flex items-center justify-center gap-3">
                              Оставить заявку
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </span>
                          <div className="absolute top-0 -left-full w-full h-full bg-white/20 -skew-x-[20deg] group-hover:animate-shine transition-all"></div>
                      </button>
                  </div>
              </div>
            </div>

          </div>

          {/* --- СРЕДНЯЯ ЧАСТЬ: Клиники (С открытием карты) --- */}
          <div className="mb-16">
            <h3 className="text-2xl font-black text-white font-heading mb-8 uppercase pl-4 border-l-4 border-[#3BC3F3]">
              Наши клиники
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clinics.map((clinic, index) => (
                <div key={index} className="bg-[#2A2A2A] rounded-2xl p-6 border border-gray-800 hover:border-[#3BC3F3]/50 transition-colors group h-full flex flex-col">
                  {/* Заглушка карты (Кнопка открытия) */}
                  <div 
                    onClick={() => setActiveMap(clinic.mapSrc)}
                    className="w-full h-36 bg-[#1a1a1a] rounded-xl mb-5 relative overflow-hidden flex items-center justify-center border border-gray-800 group-hover:border-[#3BC3F3]/50 transition-all cursor-pointer shadow-inner"
                  >
                     {/* Имитация карты с логотипом Yandex или просто точкой */}
                     <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center bg-[#1F1F1F]">
                        <span className="text-[#3BC3F3] opacity-20 text-6xl">🗺️</span>
                     </div>
                     
                     <div className="relative z-10 bg-[#3BC3F3]/10 px-4 py-2 rounded-full text-[#3BC3F3] text-sm font-bold flex items-center gap-2 group-hover:bg-[#3BC3F3] group-hover:text-white transition-colors">
                        <span className="text-lg">📍</span> Показать на карте
                     </div>
                  </div>
                  
                  <div className="mb-2 text-xs font-bold text-[#3BC3F3] uppercase tracking-wider">{clinic.city}</div>
                  <div className="text-white font-medium mb-4 h-12 leading-snug text-lg">{clinic.address}</div>
                  
                  <div className="mt-auto space-y-3 pt-5 border-t border-gray-700">
                    {clinic.phones.map(phone => (
                      <a key={phone} href={`tel:${phone.replace(/\D/g, '')}`} className="block text-gray-300 font-bold hover:text-white transition-colors text-lg">
                        {phone}
                      </a>
                    ))}
                    <a href={`mailto:${clinic.email}`} className="block text-sm text-gray-500 hover:text-[#3BC3F3] transition-colors pt-1">
                      {clinic.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- НИЖНЯЯ ЧАСТЬ: Копирайт --- */}
          <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between gap-8 text-xs text-gray-500 leading-relaxed">
            <div className="space-y-3 lg:max-w-md">
              <p className="text-gray-400 font-medium text-sm">© {currentYear} Полный порядок. Ортодонтия и стоматология.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="https://xn--d1ajebkedbcem2k7b.xn--p1ai/about/" target="_blank" className="hover:text-[#3BC3F3] transition-colors underline decoration-gray-700">Общая информация</a>
                <a href="https://xn--d1ajebkedbcem2k7b.xn--p1ai/polzovatelskoe_soglashenie/" target="_blank" className="hover:text-[#3BC3F3] transition-colors underline decoration-gray-700">Политика конфиденциальности</a>
              </div>
            </div>
            <div className="space-y-1 lg:text-right">
              <p>ООО "Улыбка в порядке"</p>
              <p>ИНН 7816704653</p>
              <p>Лицензия № ЛО-78-01-011234 от 25.10.2019</p>
            </div>
          </div>

        </div>
      </footer>

      {/* --- МОДАЛЬНОЕ ОКНО С КАРТОЙ --- */}
      {activeMap && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setActiveMap(null)}>
          <div className="relative w-full max-w-5xl h-[80vh] bg-[#1F1F1F] rounded-3xl overflow-hidden shadow-2xl border border-gray-700" onClick={e => e.stopPropagation()}>
            
            {/* Кнопка закрытия */}
            <button 
              onClick={() => setActiveMap(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors shadow-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Iframe с картой */}
            <iframe 
              src={activeMap} 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen={true} 
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
