
import React, { useState, useEffect, useRef } from 'react';
import { portfolioItems } from '../data';
import { PortfolioItem } from '../types';
import AnimatedSection from '../components/AnimatedSection';

declare const Swiper: any;

const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const swiperRef = useRef(null);

  const filteredItems = filter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === filter);
  
  useEffect(() => {
    if (selectedItem && !swiperRef.current) {
      swiperRef.current = new Swiper('.portfolio-swiper', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }, [selectedItem]);

  const closeModal = () => {
    setSelectedItem(null);
    swiperRef.current = null;
  };

  return (
    <>
      <section
        className="bg-cover bg-center text-white py-20 relative"
        style={{ backgroundImage: `url('/sweetplanner-official/images/hero/portfolio-hero-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-slate-800/60"></div>
        <div className="max-w-screen-xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Portofolio Kami</h1>
          <p className="text-slate-300 mt-4 text-lg">Kisah sukses yang kami wujudkan bersama klien kami.</p>
        </div>
      </section>

      <AnimatedSection className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Portfolio Video Section */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Lihat Karya Kami Dalam Video</h2>
            <div className="max-w-3xl mx-auto relative">
              <video
                className="w-full rounded-lg shadow-2xl"
                controls
                poster="/sweetplanner-official/images/portfolio/digital-horizons.jpg"
              >
                <source src="/sweetplanner-official/videos/portfolio-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Logo kecil di sudut kanan atas */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-sm font-bold bg-black/50 px-2 py-1 rounded text-white">
                  <span className="text-pink-400">Sweet</span> <span className="text-sky-400">Planner</span>
                </span>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  filter === category
                    ? 'bg-sky-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">{item.category}</span>
                    <h3 className="text-white text-2xl font-bold mt-2 text-shadow">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={closeModal}>
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <button onClick={closeModal} className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8 hover:bg-black/75 z-20">
                <i className="bi bi-x-lg"></i>
              </button>
              
              <div className="swiper portfolio-swiper">
                <div className="swiper-wrapper">
                  {selectedItem.gallery.map((img, index) => (
                    <div key={index} className="swiper-slide">
                      <img src={img} alt={`${selectedItem.title} gallery image ${index + 1}`} className="w-full h-96 object-cover" />
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>

            <div className="p-8">
              <span className="bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">{selectedItem.category}</span>
              <h2 className="text-3xl font-bold mt-4 mb-2">{selectedItem.title}</h2>
              <p className="text-slate-500 mb-6 font-semibold">Klien: {selectedItem.client}</p>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-800">Tantangan</h4>
                  <p className="text-slate-600">{selectedItem.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-800">Solusi</h4>
                  <p className="text-slate-600">{selectedItem.solution}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-800">Hasil</h4>
                  <p className="text-slate-600">{selectedItem.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioPage;
