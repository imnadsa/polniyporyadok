'use client';

import React, inport Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percent);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onTouchStart = () => setIsDragging(true);

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
      // ИЗМЕНЕНИЕ 1: Пропорции стали 16:9
      className="relative w-full aspect-video overflow-hidden select-none cursor-ew-resize group rounded-t-[2rem]"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* 1. ФОТО "ПОСЛЕ" (Нижний слой) */}
      <Image 
        src={afterImage} 
        alt="После" 
        fill 
        className="object-cover pointer-events-none"
        priority // Важно для LCP
      />
      
      {/* 2. ФОТО "ДО" (Верхний слой, обрезается) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        {/* ИЗМЕНЕНИЕ 2: Убран хак с широким div, теперь картинка не будет "зумиться" */}
        <Image 
          src={beforeImage} 
          alt="До" 
          fill
          className="object-cover object-left pointer-events-none"
          priority
        />
      </div>

      {/* 3. ГОЛУБАЯ ЛИНИЯ (Разделитель) */}
      {/* ИЗМЕНЕНИЕ 3: Линия стала жирнее (w-1 = 4px) */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-[#3BC3F3] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      ></div>

      {/* 4. КРУГЛАЯ КНОПКА */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 bg-[#3BC3F3] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] z-30 pointer-events-none transform -translate-x-1/2"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Стрелочки */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 16L10 12L14 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-6, 0)"/>
          <path d="M10 16L14 12L10 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(6, 0)"/>
        </svg>
      </div>

      {/* 5. ПЛАШКИ "До" и "После" */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition < 10 ? 0 : 1 }}>
        <span className="bg-white px-4 py-1.5 rounded-lg text-[#3BC3F3] text-sm font-bold shadow-sm">
          До
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-20 pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition > 90 ? 0 : 1 }}>
        <span className="bg-white px-4 py-1.5 rounded-lg text-[#3BC3F3] text-sm font-bold shadow-sm">
          После
        </span>
      </div>

    </div>
  );
}
