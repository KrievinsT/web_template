import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function About() {
  const testimonials = [
    {
      quote:
        "Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.",
      name: "Kyle Killit",
      title: "Designer at Tiempo Labs",
      image:
        "https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed78514d7460_04f14af5199093cdd29a89eb295febf5.jpeg"
    },
    {
      quote:
        "Ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna",
      name: "Sergie Kalashnikov",
      title: "CEO at BentoBox",
      image:
        "https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed86384d7487_sergie-square.jpg"
    },
    {
      quote:
        "Nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.",
      name: "Bryant Chou",
      title: "CTO at Slapper Labs",
      image:
        "https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edf4be4d7485_bryant-square.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const nextTestimonial = () => {
    setDir(1);
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDir(-1);
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const props = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: `translateX(${dir * 50}px)` },
    reset: true,
    reverse: dir === -1,
    config: { duration: 500 }
  });

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-roboto mb-8 md:mb-12 text-center">
          What People Say About Us
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Previous Button */}
          <button
            aria-label="Previous"
            className="text-gray-400 hover:text-gray-600 hidden md:block"
            onClick={prevTestimonial}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Animated Testimonial Quote */}
          <animated.blockquote
            style={props}
            className="max-w-2xl text-center text-lg md:text-xl italic text-gray-700 leading-relaxed"
          >
            "{testimonials[current].quote}"
          </animated.blockquote>

          {/* Next Button */}
          <button
            aria-label="Next"
            className="text-gray-400 hover:text-gray-600 hidden md:block"
            onClick={nextTestimonial}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Animated Image, Name, and Title */}
        <animated.div style={props} className="flex flex-col items-center mt-8 md:mt-12">
          <animated.img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <animated.p className="font-bold text-xl md:text-2xl">{testimonials[current].name}</animated.p>
          <animated.p className="text-lg text-gray-500">{testimonials[current].title}</animated.p>
        </animated.div>

        {/* Mobile Navigation Controls */}
        <div className="md:hidden flex justify-center space-x-8 mt-8">
          {/* Previous Button for Mobile */}
          <button
            aria-label="Previous"
            className="text-gray-400 hover:text-gray-600"
            onClick={prevTestimonial}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next Button for Mobile */}
          <button
            aria-label="Next"
            className="text-gray-400 hover:text-gray-600"
            onClick={nextTestimonial}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <section className="bg-[#a1bfd4] py-6">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed71464d745d_client_logo_johnson_and_johnson.png"
            width="120"
            alt="Johnson & Johnson logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edbea24d746b_client_logo_tesla.png"
            width="120"
            alt="Tesla logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed4cd14d7488_client_logo_ouya.png"
            width="120"
            alt="Ouya logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed10654d7470_client_logo_chartboost.png"
            width="120"
            alt="Tesla logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed6db74d746a_client_logo_mammoth.png"
            width="120"
            alt="Tesla logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed67f74d7461_client_logo_neutrogena.png"
            width="120"
            alt="Tesla logo"
            className="logo"
          />
        </div>
      </section>

      <footer className="bg-[#2b2c2e] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-start md:items-center">
            <div className="w-full md:w-auto mb-8 md:mb-0">
              <h2 className="text-2xl font-bold">Metric</h2>
              <p className="mt-2 text-gray-400">Sign up for our newsletter</p>
              <form className="flex mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 bg-white text-black focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-500"
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-wrap gap-8 mb-8 md:mb-0">
              <div className="w-full md:w-auto">
                <h3 className="font-bold">Company</h3>
                <ul>
                  <li>About</li>
                  <li>Services</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div className="w-full md:w-auto">
                <h3 className="font-bold">Support</h3>
                <ul>
                  <li>Help Center</li>
                  <li>Contact</li>
                  <li>FAQ</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
