import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="bg-[#eef7fd] py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-radial from-[#3AC3F3]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-[40px] md:text-[48px] lg:text-[52px] xl:text-[58px] font-black leading-[1.15] mb-8 text-gray-900 font-heading tracking-[0.02em]">
              Выравниваем{' '}
              <span className="inline-block px-2 pb-1 border-2 border-dashed border-[#287FB8]/40 text-[#287FB8] rounded-lg transform -rotate-1 mx-1">
                любой прикус
              </span>
              <br />
              и создаём{' '}
              <span className="inline-block px-2 pb-1 border-2 border-dashed border-[#287FB8]/40 text-[#287FB8] rounded-lg transform rotate-1 mx-1 mt-2 lg:mt-0">
                идеальную улыбку
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Под руководством{' '}
              <span className="font-bold text-[#287FB8]">
                лучшего ортодонта Санкт-Петербурга — Андрея Тихонова
              </span>
            </p>

            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
              Запишитесь на бесплатную консультацию и получите план лечения уже на первом приеме.
            </p>

            {/* CTA Button - ONLY ONE */}
            <Button href="#appointment">
              Бесплатная консультация
            </Button>
          </div>

          {/* Right Side - Doctor Card */}
          <div className="order-1 lg:order-2">
            <DoctorCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// Doctor Card Component - AR'DENTA Style
function DoctorCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.12)] max-w-[600px] mx-auto lg:ml-auto lg:mr-0">
      <div className="relative">
        {/* Rating Badge */}
        <div className="absolute top-6 right-6 bg-white px-5 py-3 rounded-2xl shadow-xl z-10">
          <div className="text-center">
            <div className="text-3xl font-black text-gray-900 mb-1">4.9</div>
            <div className="text-yellow-400 text-base mb-1">★★★★★</div>
          </div>
        </div>

        {/* Doctor Photo - Right Side */}
        <div className="grid grid-cols-[auto,1fr]">
          {/* Left Side - Info */}
          <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white min-w-[280px]">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-heading leading-tight">
                Тихонов Андрей<br />Викторович
              </h3>
              
              {/* Badges */}
              <div className="space-y-3 pt-4">
                <InfoBadge text="24 года стаж" />
                <InfoBadge text="Кандидат Медицинских Наук" />
                <InfoBadge text="Топ-5 ортодонтов в России" highlight />
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="relative min-h-[450px] lg:min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 text-sm text-center p-4">
              [Фото - Тихонов Андрей Викторович]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Info Badge Component
interface InfoBadgeProps {
  text: string;
  highlight?: boolean;
}

function InfoBadge({ text, highlight }: InfoBadgeProps) {
  return (
    <div className={`inline-flex items-center px-5 py-2.5 rounded-full border-2 transition-all ${
      highlight 
        ? 'border-[#3AC3F3] bg-[#3AC3F3] text-white font-bold' 
        : 'border-[#3AC3F3] bg-white text-gray-800 hover:bg-[#3AC3F3]/5'
    }`}>
      <span className="text-sm leading-tight font-medium">
        {text}
      </span>
    </div>
  );
}
