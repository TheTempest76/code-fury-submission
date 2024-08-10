import './globals.css'
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'Disaster Relief Dashboard',
  description: 'Stay informed and help those in need',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="container mx-auto mt-8 px-4">
          {children}
        </main>
        <footer className="bg-gray-200 mt-12 py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Disaster Relief Dashboard. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
