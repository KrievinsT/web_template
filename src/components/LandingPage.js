import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [img1InView, setImg1InView] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const imgElement = document.getElementById('metric-dashboard-img');
      if (imgElement) {
        const rect = imgElement.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setImg1InView(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately in case it's already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="font-sans">
        <div className="bg-white text-black py-6 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
            <h1 className="text-3xl font-roboto-slab tracking-tight">Metric</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a href="#" className="text-lg font-medium text-gray-800 hover:text-black">Features</a>
                </li>
                <li>
                  <a href="#" className="text-lg font-medium text-gray-800 hover:text-black">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-lg font-medium text-gray-800 hover:text-black">Customers</a>
                </li>
                <li>
                  <a href="#" className="text-lg font-medium text-gray-800 hover:text-black">Sign Up</a>
                </li>
              </ul>
            </nav>
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-white text-black px-6 py-4 shadow-md">
            <ul className="space-y-4">
              <li><a href="#" className="block text-lg font-medium text-gray-800 hover:text-black">Features</a></li>
              <li><a href="#" className="block text-lg font-medium text-gray-800 hover:text-black">Pricing</a></li>
              <li><a href="#" className="block text-lg font-medium text-gray-800 hover:text-black">Customers</a></li>
              <li><a href="#" className="block text-lg font-medium text-gray-800 hover:text-black">Sign Up</a></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-600">
        <div className="container relative mx-auto grid min-h-[350px] max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 md:grid-cols-2 md:px-6 lg:min-h-[400px]">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-left">
              Grow Your Business 10x with Metric
            </h1>
            <p className="max-w-[450px] text-base text-white/90 md:text-lg">
              The Metric Dashboard brings all of your business insights under one roof. Revenue metrics, social, integrations - everything.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                className="inline-flex h-12 items-center justify-center bg-black px-6 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                href="#"
              >
                Sign Up
              </a>
              <a
                className="inline-flex h-12 items-center justify-center border border-black bg-transparent px-6 text-sm font-medium text-black transition-colors hover:bg-blue-500 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative z-10">
            <img
              id="metric-dashboard-img"
              src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed45304d748c_Metric-screenshot5.png"
              alt="Metric Dashboard Screenshot"
              className={`w-full md:w-3/4 lg:w-2/3 mb-6 md:mb-0 transform transition duration-1000 ease-in-out ${
                img1InView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            />
          </div>
        </div>

        {/* Background Image with Green Fade Effect */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 z-0" // Green gradient background
          style={{
            backgroundImage: "url('https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edbdcf4d746c_analytics-graphic2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center', // Keeps the image centered
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating
            opacity: 0.5, // Adds a fade effect
          }}
        />
      </section>

      {/* Press Section */}
      <section className="bg-[#3E5447] py-6">
        <h2 className="text-center text-white/80 text-xs font-medium tracking-wider uppercase mb-6">
          IN THE PRESS
        </h2>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed80684d7486_logo_Fastcompany.svg"
            width="120"
            alt="FastCompany logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed0a224d7479_logo_Forbes.svg"
            width="120"
            alt="Forbes logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edeb824d7462_logo_techcrunch.svg"
            width="120"
            alt="TechCrunch logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed2e5b4d7471_logo_Wired.svg"
            width="120"
            alt="Wired logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed57864d7476_logo_zdnet.svg"
            width="120"
            alt="ZDNet logo"
            className="logo"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
