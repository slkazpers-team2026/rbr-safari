import type { Metadata } from "next";
// 1. Google Fonts import කරගමු (Next.js ක්‍රමේට)
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

// 2. ෆොන්ට්ස් සෙටප් කරගමු
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair', // මේ නමින් තමයි අපි Tailwind වලදි මේක අඳුරගන්නේ
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'], // අපිට ඕන බර ප්‍රමාණ
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "RBR Sigiriya Adventures",
  description: "Jeep Safari and Traditional Hena Cooking Class in Sigiriya, Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 3. body එකට අර ෆොන්ට් වේරියබල් ටික ඇඩ් කරනවා */}
      <body className={`${playfair.variable} ${poppins.variable} font-sans bg-stone-50`}>
        {children}
      </body>
    </html>
  );
}