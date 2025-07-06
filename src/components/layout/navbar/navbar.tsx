import { useState } from "react";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center space-x-2" aria-label="Home">
          <img
            src={"/logo.png"}
            alt="Site Logo"
            className="h-auto w-[120px] object-contain"
          />
        </a>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-blue-600 transition">
            Pricing
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>
        <div className="hidden md:block">
          <button>Light/Dark Mode</button>
          <button>Sound Effects ON/OFF</button>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <div
        className={`md:hidden px-4 pb-4 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <a href="#features" className="block py-2 text-sm hover:text-blue-600">
          Features
        </a>
        <a href="#pricing" className="block py-2 text-sm hover:text-blue-600">
          Pricing
        </a>
        <a href="#about" className="block py-2 text-sm hover:text-blue-600">
          About
        </a>
        <a href="#contact" className="block py-2 text-sm hover:text-blue-600">
          Contact
        </a>
      </div>
    </header>
  );
};
