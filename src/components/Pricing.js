import React from "react";
import { useInView } from "react-intersection-observer";

const Pricing = () => {
  // Setup the intersection observers for each plan
  const { ref: starterRef, inView: starterInView } = useInView({ triggerOnce: true });
  const { ref: professionalRef, inView: professionalInView } = useInView({ triggerOnce: true });
  const { ref: startupRef, inView: startupInView } = useInView({ triggerOnce: true });
  const { ref: businessRef, inView: businessInView } = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-[#dde7ed] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[32px] text-gray-900 mb-4">Plans & Pricing</h1>
          <p className="text-black-600 text-lg">
            No credit card required. No risk, <span className="font-medium">30-day money back guarantee!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Starter Plan */}
          <div
            ref={starterRef}
            className={`bg-white rounded-lg p-6 shadow-sm transform transition duration-1000 ease-in-out ${
              starterInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Starter</h2>
            <div className="mb-4">
              <span className="text-[#3B82F6] text-2xl font-bold">$15</span>
              <span className="text-gray-600">/month</span>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <span className="text-[#3B82F6] text-lg font-semibold">500</span>
                <span className="ml-2 text-gray-600">Data Points</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#3B82F6] text-lg font-semibold">1</span>
                <span className="ml-2 text-gray-600">Team Member</span>
              </div>
              <div className="text-gray-900">Email Support</div>
              <div className="text-gray-400">IOS and Android App</div>
              <div className="text-gray-400">Customizable Dashboard</div>
              <div className="text-gray-400">Metric API</div>
            </div>
            <button className="w-full bg-black text-white rounded py-2 font-medium hover:bg-gray-800 transition-colors">
              Choose Plan
            </button>
          </div>

          {/* Professional Plan */}
          <div
            ref={professionalRef}
            className={`bg-white rounded-lg p-6 shadow-sm transform transition duration-1000 ease-in-out ${
              professionalInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Professional</h2>
            <div className="mb-4">
              <span className="text-[#3B82F6] text-2xl font-bold">$30</span>
              <span className="text-gray-600">/month</span>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <span className="text-[#3B82F6] text-lg font-semibold">2000</span>
                <span className="ml-2 text-gray-600">Data Points</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#3B82F6] text-lg font-semibold">1</span>
                <span className="ml-2 text-gray-600">Team Member</span>
              </div>
              <div className="text-gray-900">Email Support</div>
              <div className="text-gray-900">IOS and Android App</div>
              <div className="text-gray-400">Customizable Dashboard</div>
              <div className="text-gray-400">Metric API</div>
            </div>
            <button className="w-full bg-black text-white rounded py-2 font-medium hover:bg-gray-800 transition-colors">
              Choose Plan
            </button>
          </div>

          {/* Startup Plan */}
          <div
            ref={startupRef}
            className={`bg-white rounded-lg p-6 shadow-sm transform transition duration-1000 ease-in-out ${
              startupInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Startup</h2>
            <div className="mb-4">
              <span className="text-[#3B82F6] text-2xl font-bold">$75</span>
              <span className="text-gray-600">/month</span>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <span className="text-[#3B82F6] text-lg font-semibold">5000</span>
                <span className="ml-2 text-gray-600">Data Points</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#3B82F6] text-lg font-semibold">3</span>
                <span className="ml-2 text-gray-600">Team Member</span>
              </div>
              <div className="text-gray-900">Email Support</div>
              <div className="text-gray-900">IOS and Android App</div>
              <div className="text-gray-900">Customizable Dashboard</div>
              <div className="text-gray-400">Metric API</div>
            </div>
            <button className="w-full bg-black text-white rounded py-2 font-medium hover:bg-gray-800 transition-colors">
              Choose Plan
            </button>
          </div>

          {/* Business Plan */}
          <div
            ref={businessRef}
            className={`bg-white rounded-lg p-6 shadow-sm transform transition duration-1000 ease-in-out ${
              businessInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Business</h2>
            <div className="mb-4">
              <span className="text-[#3B82F6] text-2xl font-bold">$250</span>
              <span className="text-gray-600">/month</span>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <span className="text-[#3B82F6] text-lg font-semibold">15000</span>
                <span className="ml-2 text-gray-600">Data Points</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#3B82F6] text-lg font-semibold">10</span>
                <span className="ml-2 text-gray-600">Team Member</span>
              </div>
              <div className="text-gray-900">Priority Support</div>
              <div className="text-gray-900">IOS and Android App</div>
              <div className="text-gray-900">Customizable Dashboard</div>
              <div className="text-gray-900">Metric API</div>
            </div>
            <button className="w-full bg-black text-white rounded py-2 font-medium hover:bg-gray-800 transition-colors">
              Choose Plan
            </button>
          </div>
        </div>

        <div className="text-center text-gray-600">
          Need more Data Points or Team Members? Please{' '}
          <a href="#" className="text-[#3B82F6] hover:underline">
            contact us
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Pricing;
