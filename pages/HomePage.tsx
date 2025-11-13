import React from 'react';
import { Link } from 'react-router-dom';
import { services, portfolioItems, testimonials } from '../data';
import AnimatedSection from '../components/AnimatedSection';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-32 md:py-48 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/sweetplanner-official/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/sweetplanner-official/images/hero/hero-bg.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="max-w-screen-xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-pink-400">Acara Sempurna</span>, <span className="text-white">Pengalaman Tak Terlupakan</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Mitra terpercaya Anda untuk Rapat, Insentif, Konferensi, dan Pameran di jantung Indonesia Timur.
          </p>
          <Link
            to="/services"
            className="bg-sky-600 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Jelajahi Layanan Kami
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Keahlian Kami</h2>
          <p className="text-slate-500 mb-12 max-w-2xl mx-auto">Kami menyediakan solusi menyeluruh untuk setiap acara, memastikan pelaksanaan yang sempurna dan hasil yang terukur.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="bg-sky-100 text-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`bi ${service.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
          <Link to="/services" className="mt-12 inline-block bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Lihat Semua Layanan
          </Link>
        </div>
      </AnimatedSection>

      {/* Portfolio Highlight Section */}
      <AnimatedSection className="py-20 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Kisah Sukses</h2>
            <p className="text-slate-500 mt-2">Sekilas tentang acara-acara berdampak yang telah kami rancang.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.slice(0, 2).map(item => (
              <div key={item.id} className="group rounded-lg overflow-hidden shadow-lg relative">
                <img src={item.imageUrl} alt={item.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                    <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">{item.category}</span>
                    <h3 className="text-white text-2xl font-bold mt-2 text-shadow">{item.title}</h3>
                </div>
                <Link to="/portfolio" className="absolute inset-0" aria-label={`View details for ${item.title}`}></Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="bg-sky-600 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
              Lihat Portofolio Lengkap Kami
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Apa Kata Klien Kami</h2>
            <div className="grid md:grid-cols-1 gap-8">
                {testimonials.slice(0, 1).map((testimonial, index) => (
                    <figure key={index} className="max-w-2xl mx-auto">
                        <i className="bi bi-quote text-5xl text-sky-300"></i>
                        <blockquote className="text-2xl font-semibold italic text-slate-800 my-4">
                            <p>"{testimonial.quote}"</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6">
                            <img className="w-12 h-12 rounded-full mr-4 object-cover" src={testimonial.imageUrl} alt={testimonial.author} />
                            <div className="text-left">
                                <cite className="pr-1 font-bold text-slate-900 not-italic">{testimonial.author}</cite>
                                <cite className="text-slate-500">{testimonial.title}</cite>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="bg-slate-800 text-white">
        <div className="max-w-screen-md mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold">Siap merencanakan acara Anda berikutnya?</h2>
          <p className="text-slate-300 my-4">Mari terhubung dan wujudkan visi Anda menjadi kenyataan yang luar biasa. Kami di sini untuk membantu di setiap langkah.</p>
          <Link to="/contact" className="mt-4 inline-block bg-sky-600 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
            Hubungi Kami
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
};

export default HomePage;
