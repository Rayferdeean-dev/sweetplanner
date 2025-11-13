import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-screen-xl mx-auto p-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0 md:col-span-2">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-pink-400">Sweet</span> <span className="text-sky-400">Planner</span>
            </h3>
            <p className="text-slate-400">Facilitator yang Cerdas & Peduli. Menyelenggarakan acara yang mulus, kaya akan budaya, dan memberikan hasil yang terukur di Indonesia Timur.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-sky-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-sky-400 transition-colors"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-xl hover:text-sky-400 transition-colors"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-xl hover:text-sky-400 transition-colors"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-xl hover:text-sky-400 transition-colors"><i className="bi bi-twitter-x"></i></a>
            </div>
            <p className="mt-4 text-sm">contact@sweetplanner.id</p>
          </div>
        </div>
        <hr className="my-6 border-slate-700" />
        <div className="text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Sweet Planner. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;