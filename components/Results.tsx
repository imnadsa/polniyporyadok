'use client';

import React from 'react';
import BeforeAfter from './ui/BeforeAfter';

// Данные
const cases = [
  {
    id: 1,
    title: "Брекет-система DQ2 на верхнюю и нижнюю челюсть",
    description: "Исправление скученности зубов и глубокого прикуса.",
    duration: "28 месяцев",
    age: "46 лет",
    before: "/case1-before.jpg", 
    after: "/case1-after.jpg",
  },
  {
    id: 2,
    title: "Исправление скученности зубов брекетами без удаления зубов",
    description: "В приведенном клиническом случае ортодонты использовали брекеты Damon Q/Q.",
    duration: "2 года",
    age: "17 лет",
    before: "/case2-before.jpg",
    after: "/case2-after.jpg",
  },
  {
    id: 3,
    title: "Исправление скученности зубов брекетами без удаления зуба",
    description: "В приведенном клиническом случае ортодонты использовали металлические самолигирующие брекеты Damon Q/Q.",
    duration: "18 месяцев",
    age: "27 лет",
    before: "/case3-before.jpg",
    after: "/case3-after.jpg",
  },
];

export default function Results() {
  return (
    <section className="py-16 lg:py-24 bg-[#eef7fd]" id="results">
      <div className="container-custom">
        
        {/* Заголовок и навигация */}
        <div className="flex justify-between items-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 font-heading">
            Результаты лечения
          </h2>
          {/* Стрелки навигации */}
          <div className="hidden lg:flex gap-4">
             <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#3AC3F3] hover:text-[#3AC3F3] transition-colors">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </button>
             <button className="w-12 h-12 rounded-full bg-[#3AC3F3] flex items-center justify-center text-white shadow-lg hover:bg-[#287FB8] transition-colors">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </button>
          </div>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-[2rem] overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
              
              {/* Блок Слайдера */}
              <div className="relative">
                 <BeforeAfter beforeImage={item.before} afterImage={item.after} />
              </div>

              {/* Текстовая часть (Кнопка убрана) */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight min-h-[3.5rem]">
                  {item.title}
                </h3>

                <div className="space-y-5 flex-grow">
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">Описание</div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Срок лечения</div>
                      <div className="text-gray-900 font-medium text-lg">{item.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Возраст</div>
                      <div className="text-gray-900 font-medium text-lg">{item.age}</div>
                    </div>
                  </div>
                </div>
                
                {/* Кнопка удалена */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
