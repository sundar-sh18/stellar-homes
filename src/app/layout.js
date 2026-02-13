import { Geist, Geist_Mono, Courgette, Happy_Monkey, Caveat, Titan_One } from "next/font/google";
import Footer from './components/Footer/Footer'
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courgette = Courgette({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-head',
});

const happyMonkey = Happy_Monkey({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-subHead',
});

const caveat = Caveat({
  subsets: ['cyrillic'],
  weight: ['400','500','600','700'],
  variable: '--font-body',
})

  const titan = Titan_One({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-titan',
  })

export const metadata = {
  title: "Stellar Homes",
  description: "A Trusted Team With Vision and Passion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${happyMonkey.variable} ${courgette.variable} ${caveat.variable} ${titan.variable} antialiased overscroll-none flex flex-col`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
