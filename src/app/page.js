import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      
      {/* Navigation Bar */}
      <header className="w-full p-6 bg-green-300 flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-xl font-bold">
          <img src="/transparentMantisLogo.png" alt="Logo" className="h-8 inline mr-2" /> {/* Logo from public folder */}
          Mantis
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/participant" className="text-black hover:underline">
                Participants
              </Link>
            </li>
            <li>
              <Link href="/organizer_login" className="text-black hover:underline">
                Organizer Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Splash Screen Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl font-bold mb-6 text-black">Welcome to Mantis</h1>
        <img src="/transparentMantisLogo.png" alt="Splash Logo" className="w-48 h-48 mb-8" /> {/* Logo from public folder */}
        <p className="text-lg mb-6 text-black">
          Quote Placeholder
        </p>

        {/* Call to Action: Become an Organizer */}
        <Link href="/organizer_signup" className="bg-green-300 text-black px-6 py-3 rounded-lg hover:bg-green-600">
          Become an Organizer
        </Link>
      </main>

      {/* Footer */}
      <footer className="w-full p-4 bg-green-300 text-black text-center">
        © 2024 Mantis
      </footer>
    </div>
  );
}