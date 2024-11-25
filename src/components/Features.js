import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';

const Features = () => {
  const { ref: img1Ref, inView: img1InView } = useInView({ triggerOnce: true });
  const { ref: img2Ref, inView: img2InView } = useInView({ triggerOnce: true });
  const { ref: imgMetricsRef, inView: imgMetricsInView } = useInView({ triggerOnce: true });

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">Sync Across All Devices</h2>
        <h2 className="text-2xl font-sans text-gray-400 mb-10">Everything you need to make your business grow super fast!</h2>

        {/* First Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <img
            ref={img1Ref}
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed985b4d747a_Metric-screenshot2.png"
            alt="Sync Across All Devices"
            className={`w-full md:w-1/2 mb-6 md:mb-0 transform transition duration-1000 ease-in-out ${
              img1InView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
          <div className="text-left md:ml-6">
            <img
              src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed3d464d7465_iconmonstr-laptop-2-icon.svg"
              alt="Laptop Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Web Application</h3>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-left md:mr-6 mb-6 md:mb-0">
            <img
              src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edd11a4d747b_iconmonstr-download-13-icon.svg"
              alt="Download Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Mobile App</h3>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <img
            ref={img2Ref}
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed61054d7490_Metric-screenshot-phone.png"
            alt="Mobile Application"
            className={`w-full md:w-1/2 transform transition duration-1000 ease-in-out ${
              img2InView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>

        {/* Horizontal Layout for Dashboard, Custom Rules, Presets, and Metrics */}
        <div className="flex justify-between items-start text-left mb-40">
          {/* Dashboard */}
          <div className="flex flex-col items-center w-full md:w-1/4 text-center mb-6 md:mb-0">
            <img
              src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed6db44d7473_iconmonstr-control-panel-icon.svg"
              alt="Dashboard Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Dashboard</h3>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          {/* Custom Rules */}
          <div className="flex flex-col items-center w-full md:w-1/4 text-center mb-6 md:mb-0">
            <img
              src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed67164d747f_iconmonstr-sitemap-7-icon.svg"
              alt="Custom Rules Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Custom Rules</h3>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          {/* Presets */}
          <div className="flex flex-col items-center w-full md:w-1/4 text-center mb-6 md:mb-0">
            <img
              src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed497e4d7467_iconmonstr-save-9-icon.svg"
              alt="Presets Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Presets</h3>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          {/* Metrics */}
          <div className="flex flex-col items-center w-full md:w-1/4 text-center">
            <img
              ref={imgMetricsRef}
              src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed6ef14d745f_iconmonstr-bar-chart-4-icon.svg"
              alt="Metrics Icon"
              className={`w-12 h-12 mb-4 transform transition duration-1000 ease-in-out ${
                imgMetricsInView ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Metrics</h3>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
