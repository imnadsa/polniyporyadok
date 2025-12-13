import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-blue-50 pt-16 pb-8 text-sm">
      <div className="container-custom">
        
        {/* --- ВЕРХНЯЯ ЧАСТЬ: Навигация и Инфо --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* 1. Логотип и дескриптор */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 text-[#3BC3F3] group-hover:scale-105 transition-transform duration-300">
                 {/* Логотип SVG */}
                 <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M108 0H12V103.369C12 104.596 12.3634 105.795 13.0444 106.815C14.1958 108.54 16.1326 109.576 18.2065 109.576H19.1077C21.0388 109.576 22.9028 108.868 24.3469 107.586L50.2682 84.5736C53.0501 82.104 56.6409 80.74 60.3609 80.74C64.0809 80.74 67.6717 82.104 70.4536 84.5736L96.6819 107.858C97.9282 108.965 99.5426 109.576 101.209 109.576C103.221 109.576 105.136 108.683 106.425 107.138C107.443 105.918 108 104.38 108 102.792V0Z" fill="currentColor"/>
                 </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-gray-900 uppercase leading-none">
                  ПОЛНЫЙ ПОРЯДОК <sup className="text-xs text-gray-400">®</sup>
                </span>
                <span className="text-xs text-gray-500 font-medium mt-1">Ортодонтия и стоматология</span>
              </div>
            </Link>
          </div>

          {/* 2. Услуги */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-[#155e85] uppercase tracking-wider mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-600">
              <li><FooterLink href="/uslugi/terapiya">Лечение зубов</FooterLink></li>
              <li><FooterLink href="/uslugi/ortopediya">Протезирование</FooterLink></li>
              <li><FooterLink href="/uslugi/hirurgiya">Хирургия</FooterLink></li>
              <li><FooterLink href="/uslugi/parodontologiya">Пародонтология</FooterLink></li>
              <li><FooterLink href="/uslugi/detskaya-stomatologiya">Детская стоматология</FooterLink></li>
              <li><FooterLink href="/uslugi/ortodontiya">Ортодонтия</FooterLink></li>
              <li><FooterLink href="/full_survey" highlight>Заполните анкету</FooterLink></li>
            </ul>
          </div>

          {/* 3. О клинике */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-[#155e85] uppercase tracking-wider mb-4">Пациентам</h3>
            <ul className="space-y-2 text-gray-600">
              <li><FooterLink href="/smi-i-novosti">Акции и новости</FooterLink></li>
              <li><FooterLink href="/vrachi">Врачи</FooterLink></li>
              <li><FooterLink href="/otzyvy">Отзывы пациентов</FooterLink></li>
              <li><FooterLink href="/result">Результаты лечения</FooterLink></li>
              <li><FooterLink href="/ceny">Цены</FooterLink></li>
              <li><FooterLink href="/kontakty">Контакты</FooterLink></li>
              <li><FooterLink href="/courses">Офис-курсы для ортодонтов</FooterLink></li>
            </ul>
          </div>

          {/* 4. Кнопки и Соцсети */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Кнопка */}
            <button className="border-2 border-[#3BC3F3] text-[#2274a4] font-bold py-3 px-6 rounded-full hover:bg-[#3BC3F3] hover:text-white transition-colors w-full lg:w-auto text-center">
              Письмо руководству
            </button>

            {/* Рейтинг */}
            <div className="bg-[#effaff] p-4 rounded-2xl flex items-center gap-4">
               <div className="text-3xl font-black text-[#2274a4]">4.7</div>
               <div className="text-xs text-gray-500 leading-tight">
                 средняя оценка<br/>
                 <span className="text-[#2274a4] font-bold">400+</span> отзывов
               </div>
            </div>

            {/* Соцсети */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <SocialLink href="https://vk.com/polniy_poryadok" icon="vk" />
                <SocialLink href="https://t.me/polniyporyadok_ortho" icon="tg" />
                <span className="text-xs text-gray-400">Санкт-Петербург</span>
              </div>
              <div className="flex items-center gap-3">
                <SocialLink href="https://vk.com/gatchina_ortodont" icon="vk" />
                <span className="text-xs text-gray-400">Гатчина</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- СРЕДНЯЯ ЧАСТЬ: Адреса (Как нас найти) --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-black text-gray-900 font-heading mb-8">КАК НАС НАЙТИ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Клиника 1 */}
            <AddressCard 
              city="Санкт-Петербург"
              address="м. Международная, ул. Турку, д. 11, к. 2"
              phones={['8 (812) 320-10-01', '8 (812) 214-99-00']}
              email="office@ppclinic.ru"
            />

            {/* Клиника 2 */}
            <AddressCard 
              city="Санкт-Петербург"
              address="м. Чкаловская, ул. Петрозаводская, д. 13"
              phones={['8 (812) 320-10-01', '8 (812) 214-99-00']}
              email="info@ppclinic.ru"
            />

            {/* Клиника 3 */}
            <AddressCard 
              city="Гатчина"
              address="ул. Коли Подрядчикова д. 22"
              phones={['8 (812) 320-10-01', '8 (812) 214-99-00']}
              email="info_ppg@ppclinic.ru"
            />

          </div>
        </div>

        {/* --- НИЖНЯЯ ЧАСТЬ: Легал --- */}
        <div className="border-t border-gray-100 pt-8 flex flex-col lg:flex-row justify-between gap-8 text-xs text-gray-400 leading-relaxed">
          
          <div className="space-y-2 lg:max-w-md">
            <p>© {currentYear} Полный порядок Polniy Poryadok</p>
            <div className="flex flex-col gap-1">
              <Link href="/about" className="hover:text-[#3BC3F3]">Общая информация</Link>
              <Link href="/policy" className="hover:text-[#3BC3F3]">Пользовательское соглашение</Link>
              <Link href="/payment" className="hover:text-[#3BC3F3]">Правила платежей на сайте</Link>
            </div>
          </div>

          <div className="space-y-1 lg:text-right">
            <p>ООО "Улыбка в порядке" "Ulybka v Poryadke" limited liability Company</p>
            <p>ИНН 7816704653</p>
            <p>192071, Россия, г. Санкт-Петербург, ул. Турку, д. 11, корп. 2, лит. А</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

// --- Вспомогательные компоненты ---

function FooterLink({ href, children, highlight }: { href: string, children: React.ReactNode, highlight?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`hover:text-[#3BC3F3] transition-colors ${highlight ? 'text-[#2274a4] font-medium' : ''}`}
    >
      {children}
    </Link>
  );
}

function SocialLink({ href, icon }: { href: string, icon: 'vk' | 'tg' }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="nofollow noreferrer"
      className="w-8 h-8 rounded-full bg-[#3BC3F3] text-white flex items-center justify-center hover:bg-[#2274a4] transition-colors"
    >
      {icon === 'vk' && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C5.1 2 2 5.1 2 8.93v6.14C2 18.9 5.1 22 8.93 22h6.14c3.83 0 6.93-3.1 6.93-6.93V8.93C22 5.1 18.9 2 15.07 2zM17.3 14.5c.32.32.65.63.95.96.2.22.4.45.18.79-.17.26-.4.29-.68.29h-2.3c-.5 0-.82-.2-1.07-.63-.2-.36-.45-.69-.69-1.02-.1-.13-.23-.25-.4-.25-.26 0-.32.12-.33.37v1.22c0 .26-.08.32-.34.32h-1.68c-2.6 0-4.32-1.62-5.55-4.59-.07-.17 0-.28.21-.28h2.3c.27 0 .38.12.46.33.4.98.9 1.93 1.57 2.76.12.15.22.25.4.15.12-.07.16-.21.16-.36V11.2c-.02-.67-.37-.77-1.05-.8-.18 0-.21-.12-.13-.26.23-.41.77-.66 1.55-.66h.5c.67.03.73.23.75.67v2.33c0 .12.06.2.16.22.26.02.43-.2.57-.36.6-.72 1.05-1.5 1.45-2.3.08-.16.2-.26.4-.26h2.3c.3 0 .44.11.36.42-.23.77-.85 1.9-1.6 2.6-.2.17-.18.25 0 .43z"/></svg>
      )}
      {icon === 'tg' && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.432z"/></svg>
      )}
    </a>
  );
}

function AddressCard({ city, address, phones, email }: { city: string, address: string, phones: string[], email: string }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
      {/* Имитация карты (заглушка) */}
      <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 relative overflow-hidden group cursor-pointer">
         <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
            Карта
         </div>
         <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
      </div>
      
      <div className="mb-1 text-xs font-bold text-gray-400 uppercase">{city}</div>
      <div className="text-gray-800 font-medium mb-3 h-10">{address}</div>
      
      <div className="space-y-1 mb-3">
        {phones.map(phone => (
          <a key={phone} href={`tel:${phone.replace(/\D/g, '')}`} className="block text-[#2274a4] font-bold hover:text-[#3BC3F3]">
            {phone}
          </a>
        ))}
      </div>
      
      <a href={`mailto:${email}`} className="text-sm text-gray-500 hover:text-[#3BC3F3] underline decoration-gray-300">
        {email}
      </a>
    </div>
  );
}
