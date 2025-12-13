import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ортодонтия | Полный Порядок - Выравниваем прикус",
  description: "Научный подход без компромиссов. Запишитесь на бесплатную консультацию с ортодонтом.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
