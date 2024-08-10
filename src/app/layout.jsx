import './globals.css'
import Navbar from "@/components/Navbar";
import Head from 'next/head';
export const metadata = {
  title: 'Relief Compass',
  description: 'Stay informed and help those in need',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="bg-black">
        <Navbar />
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}
