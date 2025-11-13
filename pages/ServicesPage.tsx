import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data';
import { Service } from '../types';
import AnimatedSection from '../components/AnimatedSection';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const gradientClasses = [
    'from-sky-500 to-blue-600',
    'from-pink-500 to-rose-600',
    'from-pink-400 to-pink-600',
    'from-blue-400 to-blue-600'
  ];

  const cardHoverClasses = [
    'hover:shadow-sky-500/25',
    'hover:shadow-pink-500/25',
    'hover:shadow-pink-500/25',
    'hover:shadow-blue-500/25'
  ];

  const iconBgClasses = [
    'bg-sky-100',
    'bg-pink-100',
    'bg-pink-100',
    'bg-blue-100'
  ];

  return (
    <article
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-opacity-50 flex flex-col h-full"
      aria-labelledby={`service-title-${index}`}
      role="article"
    >
      {/* Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${gradientClasses[index]}`}></div>
      
      {/* Card Content */}
      <div className="p-8 flex-1">
        {/* Icon with gradient background */}
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${iconBgClasses[index]} mb-6 group-hover:scale-110 transition-transform duration-300`}
          aria-hidden="true"
        >
          <i className={`bi ${service.icon} text-3xl bg-gradient-to-r ${gradientClasses[index]} bg-clip-text text-transparent`}></i>
        </div>
        
        {/* Title */}
        <h3
          id={`service-title-${index}`}
          className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors duration-300"
        >
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-4 text-lg">
          {service.description}
        </p>
        
        {/* Detailed Info */}
        <div className="text-slate-500 text-sm leading-relaxed">
          {service.details}
        </div>
      </div>
      
      {/* CTA Button - Bottom Left Corner */}
      <div className="px-8 pb-8 pt-2">
        <Link
          to="/contact"
          className={`inline-flex items-center font-semibold py-3 px-6 rounded-full transition-all duration-300 group hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            index === 0 || index === 3
              ? 'bg-sky-600 hover:bg-pink-600 text-white focus:ring-sky-500 focus:ring-opacity-50'
              : 'bg-pink-600 hover:bg-sky-600 text-white focus:ring-sky-500 focus:ring-opacity-50'
          }`}
          aria-label={`Konsultasi gratis untuk ${service.title}`}
        >
          <span>Konsultasi Gratis</span>
          <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true"></i>
        </Link>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
    </article>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-24 md:py-36 relative"
        style={{ backgroundImage: `url('/sweetplanner/images/hero/services-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-slate-800/60"></div>
        <div className="max-w-screen-xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-sky-400">Layanan MICE</span> <span className="text-white">Komprehensif</span>
          </h1>
          <p className="text-slate-300 mt-4 text-lg max-w-3xl mx-auto">Kami siap memberikan pengalaman terbaik pada momen berharga Anda, dari private meeting hingga pameran berskala besar.</p>
        </div>
      </section>

      {/* Services Grid Section */}
      <AnimatedSection className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Layanan <span className="text-sky-600">Profesional</span> Kami
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Dari perencanaan hingga eksekusi, kami menyediakan solusi MICE yang komprehensif untuk berbagai kebutuhan bisnis Anda.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Siap Memulai Proyek Anda?
            </h3>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              Konsultasikan kebutuhan MICE Anda dengan tim ahli kami dan dapatkan solusi yang tepat untuk bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center"
              >
                <i className="bi bi-chat-dots mr-2"></i>
                Konsultasi Gratis
              </Link>
              <Link
                to="/portfolio"
                className="bg-white hover:bg-slate-50 text-sky-600 border-2 border-sky-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center"
              >
                <i className="bi bi-eye mr-2"></i>
                Lihat Portfolio
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default ServicesPage;
