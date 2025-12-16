import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center gap-1 group";

  // Цвета
  const colorStyles = "bg-[#E7B9D1] hover:bg-[#F0B7D2] text-white";

  const content = (
    <>
      {/* Основная часть кнопки с текстом */}
      <span className={`px-8 lg:px-10 py-4 lg:py-5 rounded-full ${colorStyles} text-base lg:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300`}>
        {children}
      </span>
      
      {/* Круг со стрелкой - отдельный элемент */}
      <span className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center ${colorStyles} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </span>
    </>
  );

  const combinedClassName = `${baseStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  );
}
