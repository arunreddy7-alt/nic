import { Geist, Geist_Mono, Montserrat, Poppins, Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  weight: ["400", "600"],
  variable: "--font-crimson-text",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["300"],
  variable: "--font-avenir-next-lt-pro-light",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luxury Interior Architecture & Lifestyle Studio in India | NICARA",
  description: "NICARA is a luxury interior architecture and lifestyle studio in India, designing bespoke residential, commercial, and hospitality spaces. We craft thoughtful interiors, curated furniture, and refined spatial experiences aligned with your lifestyle vision.",
  keywords: "interior design India, luxury interior architecture, bespoke interiors India, curated furniture, lifestyle studio, design consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${crimsonText.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
