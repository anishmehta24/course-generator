import localFont from "next/font/local";
import { Inter,Outfit } from 'next/font/google'
import "./globals.css";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";

const inter = Outfit({ subsets: ['latin'] })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Course-Generator",
  description: "Create new Courses for free",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <GoogleOneTap/>
      <body
        className={`${inter.className} ${geistMono.variable} antialiased`}
      >
        <div >
        {children}
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
