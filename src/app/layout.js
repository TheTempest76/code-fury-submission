import './globals.css'

export const metadata = {
  title: 'Disaster Relief Dashboard',
  description: 'Stay informed and help those in need',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Disaster Relief Dashboard</h1>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/news" className="hover:underline">News</a></li>
              <li><a href="/map" className="hover:underline">Emergency Services</a></li>
              <li><a href="/volunteer" className="hover:underline">Volunteer</a></li>
              <li><a href="/guides" className="hover:underline">Guides</a></li>
            </ul>
          </div>
        </nav>
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
  )
}