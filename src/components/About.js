import React, { useState } from "react";

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

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">What People Say About Us</h2>
        <div className="flex items-center justify-center space-x-8">
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
          <blockquote className="max-w-2xl text-center text-xl italic text-gray-700 leading-relaxed">
            "{testimonials[current].quote}"
          </blockquote>
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
        <div className="flex flex-col items-center mt-12">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <p className="font-bold text-2xl">{testimonials[current].name}</p>
          <p className="text-lg text-gray-500">{testimonials[current].title}</p>
        </div>
      </div>
      
      <section className="bg-[#93c5fd] py-6">
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed71464d745d_client_logo_johnson_and_johnson.png"
            width="120"
            alt="FastCompany logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edbea24d746b_client_logo_tesla.png"
            width="120"
            alt="Forbes logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed4cd14d7488_client_logo_ouya.png"
            width="120"
            alt="TechCrunch logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed10654d7470_client_logo_chartboost.png"
            width="120"
            alt="Wired logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed6db74d746a_client_logo_mammoth.png"
            width="120"
            alt="ZDNet logo"
            className="logo"
          />
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed67f74d7461_client_logo_neutrogena.png"
            width="120"
            alt="ZDNet logo"
            className="logo"
          />
        </div>
      </section>

      <footer className="bg-gray-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-start md:items-center">
            <div className="w-full md:w-auto mb-8 md:mb-0">
              <h2 className="text-xl font-bold">Metric</h2>
              <p className="mt-2">Sign up for our newsletter</p>
              <form className="flex mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2  bg-white text-black focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-600  hover:bg-gray-500"
                >
                  Subscribe
                </button>
                
              </form>
              <div className="flex space-x-4 mt-4">
               
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
              <div>
                <h3 className="font-semibold">Company</h3>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Clients</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Sign Up</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Product</h3>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Analytics</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Businesses</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Legal</h3>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-400">
            &copy; 2024 Metric. All Rights Reserved. Brand logos for demonstration purposes only.
          </div>
        </div>
      </footer>
    </div>
  );
};
