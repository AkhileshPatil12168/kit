import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-white">BrandLogo</span>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-5 mt-6">
              {/* Replace # with your social links */}
              <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i> FB</a>
              <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i> TW</a>
              <a href="#" className="hover:text-white"><i className="fab fa-github"></i> GH</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition">Marketing</a></li>
              <li><a href="#" className="text-sm hover:text-white transition">Analytics</a></li>
              <li><a href="#" className="text-sm hover:text-white transition">Commerce</a></li>
              <li><a href="#" className="text-sm hover:text-white transition">Insights</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-sm hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-white transition">Guides</a></li>
              <li><a href="#" className="text-sm hover:text-white transition">API Status</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Subscribe to our newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <input
                type="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            &copy; 2026 Your Company, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;