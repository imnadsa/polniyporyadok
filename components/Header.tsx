'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Фиктивные данные клиник
  const clinics = [
    { title: "Клиника у м. Международная", address: "ул. Турку, д. 11, корпус 2" },
    { title: "Клиника в Гатчине", address: "ул. Коли Подрядчикова д. 22" },
    { title: "Клиника на Петрозаводской", address: "ул. Петрозаводская, д. 13" },
  ];

  // Обработка скролла для теней
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container-custom">
        
        {/* MAIN HEADER ROW */}
        <div className="flex justify-between items-center py-3 lg:py-6">
          
          {/* LOGO AREA */}
          <Link href="/" className="flex items-center gap-3 lg:gap-4 shrink-0">
            {/* SVG Logo */}
            <div className="w-10 h-10 lg:w-[60px] lg:h-[60px] text-[#3BC3F3]">
              <LogoIcon />
            </div>
            
            {/* Text - Hidden on Mobile */}
            <div className="hidden lg:flex flex-col">
              <span className="text-xl font-black text-gray-900 uppercase tracking-wide leading-none">
                ПОЛНЫЙ ПОРЯДОК <sup className="text-xs text-gray-500">®</sup>
              </span>
              <span className="text-sm text-gray-500 font-medium">Ортодонтия и стоматология</span>
            </div>
          </Link>

          {/* DESKTOP INFO AREA (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            
            {/* Address Selector */}
            <div className="relative group">
              <button 
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center gap-2 text-left hover:opacity-80 transition"
              >
                <div className="w-8 h-8 rounded-full bg-[#eef7fd] flex items-center justify-center text-[#3BC3F3]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div className="text-[#3BC3F3] font-bold text-sm border-b border-dashed border-[#3BC3F3] inline-block leading-tight">
                    3 клиники
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    в Санкт-Петербурге и Гатчине
                  </div>
                </div>
              </button>

              {/* Dropdown Menu */}
              {isLocationOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-2 z-50 animate-fade-in-up">
                  {/* Треугольник сверху */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
                  
                  <div className="relative bg-white rounded-lg overflow-hidden">
                    {clinics.map((clinic, idx) => (
                      <div key={idx} className="p-3 hover:bg-[#eef7fd] cursor-pointer transition-colors border-b last:border-0 border-gray-50">
                        <div className="text-sm font-bold text-gray-800 mb-1">{clinic.title}</div>
                        <div className="text-xs text-gray-500">{clinic.address}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#3BC3F3] flex items-center justify-center text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <a href="tel:+78122149900" className="text-xl font-bold text-gray-900 hover:text-[#3BC3F3] transition">
                +7 812 214 99 00
              </a>
            </div>

            {/* Desktop Button */}
            <button className="bg-[#3BC3F3] hover:bg-[#287FB8] text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-[#3BC3F3]/30">
              Записаться на приём
            </button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex lg:hidden items-center gap-3">
             {/* Mobile Button - Compact */}
             <button className="bg-[#3BC3F3] text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-md">
              Записаться
            </button>

            {/* Burger Menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 relative"
            >
              <span className={`h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-[#3BC3F3]' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-[#3BC3F3]' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
           {/* Здесь можно оставить ссылки, если нужны на мобилке, или убрать */}
           <nav className="space-y-6 text-center">
              <MobileNavLink href="#start" onClick={() => setIsMobileMenuOpen(false)}>Начни здесь</MobileNavLink>
              <MobileNavLink href="#doctors" onClick={() => setIsMobileMenuOpen(false)}>Врачи</MobileNavLink>
              <MobileNavLink href="#contacts" onClick={() => setIsMobileMenuOpen(false)}>Контакты</MobileNavLink>
           </nav>
           
           <div className="mt-auto space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-gray-500 text-sm mb-2">Наш телефон:</div>
                <a href="tel:+78122149900" className="text-2xl font-black text-gray-900 block">+7 812 214 99 00</a>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}

// Вспомогательный компонент для ссылки меню мобилки
function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick} className="block text-xl font-bold text-gray-900 hover:text-[#3BC3F3]">
      {children}
    </Link>
  );
}

// Логотип (SVG)
function LogoIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M108 0H12V103.369C12 104.596 12.3634 105.795 13.0444 106.815C14.1958 108.54 16.1326 109.576 18.2065 109.576H19.1077C21.0388 109.576 22.9028 108.868 24.3469 107.586L50.2682 84.5736C53.0501 82.104 56.6409 80.74 60.3609 80.74C64.0809 80.74 67.6717 82.104 70.4536 84.5736L96.6819 107.858C97.9282 108.965 99.5426 109.576 101.209 109.576C103.221 109.576 105.136 108.683 106.425 107.138C107.443 105.918 108 104.38 108 102.792V0Z" fill="#3BC3F3"/>
    </svg>
  );
}
