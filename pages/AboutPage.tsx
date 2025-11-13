import React from 'react';
import { team } from '../data';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <>
      <section
        className="bg-cover bg-center text-white py-20 relative"
        style={{ backgroundImage: `url('/sweetplanner-official/images/hero/about-hero-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-slate-800/60"></div>
        <div className="max-w-screen-xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Tentang</span> <span className="text-pink-400">Sweet</span> <span className="text-sky-400">Planner</span>
          </h1>
          <p className="text-slate-200 mt-4 text-lg max-w-2xl mx-auto">Kami bukan sekadar penyelenggara acara; kami adalah mitra Anda dalam menciptakan pengalaman yang tak terlupakan.</p>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Kisah Kami: Dari Tantangan menjadi Kemenangan</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Sweet Planner lahir dari keyakinan bahwa Indonesia Timur, khususnya Makassar, memiliki potensi luar biasa sebagai destinasi MICE kelas dunia. Kami melihat kebutuhan akan penyelenggara acara yang tidak hanya profesional dan efisien, tetapi juga memahami dan mampu mengintegrasikan kekayaan budaya lokal ke dalam setiap acara.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Misi kami adalah menjadi "Fasilitator yang Cerdas & Peduli", menggabungkan perencanaan berbasis data dengan layanan personal yang hangat untuk memberikan hasil yang terukur dan pengalaman yang berkesan.
            </p>
          </div>
          <div className="relative">
            <video
              className="w-full rounded-lg shadow-xl"
              controls
              poster="/sweetplanner-official/images/hero/about-team.jpg"
            >
              <source src="/sweetplanner-official/videos/about-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay untuk kontras lebih rendah dan warna lebih gelap */}
            <div className="absolute inset-0 bg-slate-900/40 rounded-lg pointer-events-none"></div>
            {/* Logo kecil di sudut kanan atas */}
            <div className="absolute top-4 right-4 z-10">
              <span className="text-white text-sm font-bold bg-black/50 px-2 py-1 rounded">
                <span className="text-pink-400">Sweet</span> <span className="text-sky-400">Planner</span>
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Tim Profesional Kami</h2>
            <p className="text-slate-500 mt-2">Wajah di balik kesuksesan acara Anda.</p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {team.map((member, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img src={member.imageUrl} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-sky-200" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-amber-500 font-semibold mb-4 text-lg">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
