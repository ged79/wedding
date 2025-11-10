export default function Header() {
  return (
    <header className="bg-[#1a1a1a] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-8">
        <nav className="py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold tracking-tight" style={{color: '#D4AF37'}}>
                PREMIUM MATCH
              </h1>
            </div>

            <ul className="hidden md:flex items-center gap-12 text-sm">
              <li>
                <a href="#intro" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 tracking-wide">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#profiles" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 tracking-wide">
                  PROFILES
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 tracking-wide">
                  PROCESS
                </a>
              </li>
              <li>
                <a href="#success" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 tracking-wide">
                  STORIES
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 tracking-wide"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
