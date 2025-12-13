import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F1F1F] pt-12 pb-8 text-sm text-gray-300 relative mt-24">
      <div className="container-custom">
        
        {/* --- ВЕРХНЯЯ ЧАСТЬ --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 border-b border-gray-800 pb-12">
          
          {/* 1. ЛОГОТИП И РЕЙТИНГ (СЛЕВА - 5 колонок) */}
          <div className="lg:col-span-5 flex flex-col items-start relative">
            
            {/* Логотип (эффект закладки) */}
            <div className="absolute -top-24 lg:-top-32 left-0 flex flex-col gap-4">
               {/* Иконка */}
               <div className="w-24 h-24 lg:w-32 lg:h-32 text-[#3BC3F3] drop-shadow-2xl">
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
            
            {/* Распорка (чтобы контент не наезжал на логотип) */}
            <div className="h-48 lg:h-56 block w-full"></div>

            {/* Рейтинг */}
            <div className="flex items-center gap-6 mt-2">
               <div className="text-6xl font-black text-[#3BC3F3]">4.9</div>
               <div className="text-base text-gray-400 leading-snug">
                 Средняя оценка на основе<br/>
                 <span className="text-white font-bold text-lg border-b border-[#3BC3F3]">600+ отзывов</span>
               </div>
            </div>
          </div>

          {/* 2. CALL TO ACTION (СПРАВА - 7 колонок) */}
          <div className="lg:col-span-7 flex flex-col justify-end">
            <div className="bg-[#2A2A2A] rounded-3xl p-8 lg:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white font-heading mb-4 uppercase flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#3BC3F3] rounded-full"></span>
                    Служба заботы о пациентах
                </h3>
                <p className="text-gray-400 mb-8 text-base leading-relaxed max-w-2xl">
                    Мы ценим каждое мнение. Если у вас есть вопросы по лечению, предложения или замечания по качеству обслуживания — напишите нам напрямую. Мы решим любой вопрос.
                </p>
                
                {/* Сетка кнопок */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Кнопка 1: Письмо руководству (С подсветкой) */}
                    <button className="group relative py-5 px-6 rounded-2xl bg-[#3BC3F3] text-white font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(59,195,243,0.3)] hover:shadow-[0_0_40px_rgba(59,195,243,0.5)] transition-all active:scale-[0.98]">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            Написать руководству
                        </span>
                        <div className="absolute top-0 -left-full w-full h-full bg-white/20 -skew-x-[20deg] group-hover:animate-shine transition-all"></div>
                    </button>

                    {/* Кнопка 2: Чат-бот (Темная) */}
                    <a href="https://t.me/ChatBotOrtho_bot" target="_blank" className="py-5 px-6 rounded-2xl bg-[#3a3a3a] text-white font-bold text-lg hover:bg-[#4a4a4a] hover:text-[#3BC3F3] transition-all flex items-center justify-center gap-2 border border-gray-700">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        Помощь в Чат-боте 24/7
                    </a>
                </div>
            </div>
          </div>

        </div>

        {/* --- СРЕДНЯЯ ЧАСТЬ: Клиники --- */}
        <div className="mb-12">
          <h3 className="text-2xl font-black text-white font-heading mb-8 uppercase pl-4 border-l-4 border-[#3BC3F3]">
            Наши клиники
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AddressCard 
              city="Санкт-Петербург"
              address="м. Международная, ул. Турку, д. 11, к. 2"
              phones={['8 (812) 320-10-01', '8 (812) 214-99-00']}
              email="office@ppclinic.ru"
            />
            <AddressCard 
              city="Санкт-Петербург"
              address="м. Чкаловская, ул. Петрозаводская, д. 13"
              phones={['8 (812) 320-10-01', '8 (812) 214-99-00']}
              email="info@ppclinic.ru"
            />
            <AddressCard 
              city="Гатчина"
              address="ул. Коли Подрядчикова д. 22"
              phones={['8 (812) 320-10-01', '8 (812) 214-99-00']}
              email="info_ppg@ppclinic.ru"
            />
          </div>
        </div>

        {/* --- НИЖНЯЯ ЧАСТЬ: Копирайт --- */}
        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between gap-8 text-xs text-gray-500 leading-relaxed">
          <div className="space-y-2 lg:max-w-md">
            <p className="text-gray-400 font-medium">© {currentYear} Полный порядок. Ортодонтия и стоматология.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/about" className="hover:text-[#3BC3F3] transition-colors underline decoration-gray-700">Общая информация</Link>
              <Link href="/policy" className="hover:text-[#3BC3F3] transition-colors underline decoration-gray-700">Политика конфиденциальности</Link>
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
  );
}

// Компонент карточки адреса
function AddressCard({ city, address, phones, email }: { city: string, address: string, phones: string[], email: string }) {
  return (
    <div className="bg-[#2A2A2A] rounded-2xl p-6 border border-gray-800 hover:border-[#3BC3F3]/50 transition-colors group h-full flex flex-col">
      {/* Заглушка карты */}
      <div className="w-full h-32 bg-[#1a1a1a] rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-gray-800 group-hover:border-[#3BC3F3]/30 transition-colors cursor-pointer">
         <div className="text-gray-500 text-sm font-medium flex items-center gap-2 group-hover:text-[#3BC3F3] transition-colors">
            <span className="text-xl">📍</span> Показать на карте
         </div>
      </div>
      
      <div className="mb-2 text-xs font-bold text-[#3BC3F3] uppercase tracking-wider">{city}</div>
      <div className="text-white font-medium mb-4 h-12 leading-snug">{address}</div>
      
      <div className="mt-auto space-y-2 pt-4 border-t border-gray-700">
        {phones.map(phone => (
          <a key={phone} href={`tel:${phone.replace(/\D/g, '')}`} className="block text-gray-300 font-bold hover:text-white transition-colors text-lg">
            {phone}
          </a>
        ))}
        <a href={`mailto:${email}`} className="block text-sm text-gray-500 hover:text-[#3BC3F3] transition-colors pt-1">
          {email}
        </a>
      </div>
    </div>
  );
}
