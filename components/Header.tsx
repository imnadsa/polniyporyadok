import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-10">
            <div className="w-20 h-20 bg-accent rounded-2xl rounded-b-none"></div>
            <div>
              <h1 className="text-xs font-semibold text-primary uppercase tracking-wider">
                12 ЛЕТ ПОМОГАЕМ ЛЮДЯМ
              </h1>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex items-center gap-12">
            <div className="text-sm">
              <span className="font-semibold text-gray-900">9:00 до 21:00</span>{' '}
              <span className="font-semibold text-primary">Без выходных</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-primary text-xl">📍</span>
              <div className="text-xs text-gray-600 leading-relaxed">
                г. Москва, ул. Никулинская, д. 15<br />
                к. 1; м. Озерная, м. Юго-Западная
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-9">
              <li><Link href="#start" className="text-sm font-medium text-gray-900 hover:text-primary transition">Начни здесь</Link></li>
              <li><Link href="#doctors" className="text-sm font-medium text-gray-900 hover:text-primary transition">Врачи</Link></li>
              <li><Link href="#guarantee" className="text-sm font-medium text-gray-900 hover:text-primary transition">Гарантии</Link></li>
              <li><Link href="#reviews" className="text-sm font-medium text-gray-900 hover:text-primary transition">Отзывы</Link></li>
              <li><Link href="#contacts" className="text-sm font-medium text-gray-900 hover:text-primary transition">Контакты</Link></li>
            </ul>
          </nav>

          {/* Contacts */}
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-3">
                <a href="tel:+74992391535" className="text-sm font-bold text-gray-900 hover:text-primary transition">
                  +7 (499) 239-15-35
                </a>
                <span className="text-2xl">📱</span>
                <a href="tel:+74959681612" className="text-sm font-bold text-gray-900 hover:text-primary transition">
                  +7 (495) 968-16-12
                </a>
              </div>
              <div className="text-xs text-gray-600">ar-denta@mail.ru</div>
            </div>
            <Link href="#appointment" className="btn-secondary">
              Запись
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
