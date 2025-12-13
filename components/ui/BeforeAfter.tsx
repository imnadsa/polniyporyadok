'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Функция вычисления позиции
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percent);
  }, []);

  // Обработчики мыши и тача
  const onMouseDown = () => setIsDragging(true);
  const onTouchStart = () => setIsDragging(true);

  // Глобальные обработчики (чтобы не срывалось, если мышь выйдет за пределы)
  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);
    const onTouchEnd = () => setIsDragging(false);
    
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden select-none cursor-ew-resize group"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* 1. ФОТО "ПОСЛЕ" (Нижний слой, виден полностью) */}
      <Image 
        src={afterImage} 
        alt="После" 
        fill 
        className="object-cover pointer-events-none"
      />
      
      {/* Плашка "После" */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-lg text-sm font-medium text-[#287FB8] shadow-sm z-10 pointer-events-none">
        После
      </div>

      {/* 2. ФОТО "ДО" (Верхний слой, обрезается шириной) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden border-r-4 border-[#3AC3F3]"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full">
           {/* Важно: Image должен быть relative контейнеру, чтобы не плющился */}
           {/* Мы хардкодим ширину картинки равной ширине родительского контейнера, чтобы она не сжималась */}
           <div className="absolute inset-0 w-[100vw] sm:w-[500px] md:w-[600px] lg:w-[800px] h-full"> 
             {/* ^ Тут маленький хак: ширину нужно ставить большую, чтобы при обрезке контейнера картинка оставалась на месте. 
                 В идеале использовать object-cover на родителя, но в clip-path режиме проще так */}
             <Image 
              src={beforeImage} 
              alt="До" 
              fill 
              className="object-cover object-left pointer-events-none"
            />
           </div>
        </div>
      </div>
      
      {/* Плашка "До" */}
      <div 
        className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-lg text-sm font-medium text-[#287FB8] shadow-sm z-10 pointer-events-none transition-opacity duration-200"
        style={{ opacity: sliderPosition < 15 ? 0 : 1 }}
      >
        До
      </div>

      {/* 3. ПОЛЗУНОК (Кругляш) */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-[#3AC3F3] rounded-full flex items-center justify-center shadow-lg z-20 pointer-events-none transform -translate-x-1/2"
        style={{ left: `${sliderPosition}%` }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
          <polyline points="9 18 3 12 9 6" className="hidden"></polyline> {/* Стрелка влево */}
          <polyline points="19 12 12 19 5 12" className="hidden"></polyline>
        </svg>
        {/* Иконка стрелочек влево-вправо */}
        <div className="flex gap-1">
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 1L1 5L5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>

    </div>
  );
}
