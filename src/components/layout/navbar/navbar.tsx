export const Navbar = () => {
  return (
    <header className="shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center space-x-2" aria-label="Home">
          <img src="/favicon.ico" alt="Site Logo" className="h-6 w-6" />
          <span className="text-xl font-semibold">BrandName</span>
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

        {/* <!-- Mobile Toggle -->
    <button
      className="md:hidden focus:outline-none"
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
           viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </nav> */}

        {/* <div className={`md:hidden px-4 pb-4 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
    <a href="#features" className="block py-2 text-sm hover:text-blue-600">Features</a>
    <a href="#pricing" className="block py-2 text-sm hover:text-blue-600">Pricing</a>
    <a href="#about" className="block py-2 text-sm hover:text-blue-600">About</a>
    <a href="#contact" className="block py-2 text-sm hover:text-blue-600">Contact</a>
  </div> */}
      </nav>
    </header>
  );
};
