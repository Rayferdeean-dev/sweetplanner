import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `Halo Sweet Planner!

Nama: ${formData.name}
WhatsApp: ${formData.whatsapp}
Subjek: ${formData.subject}

Pesan:
${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Dummy WhatsApp number
    const whatsappNumber = '+6281234567890';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({ name: '', whatsapp: '', subject: '', message: '' });
    setFormStatus('Terima kasih! Anda akan diarahkan ke WhatsApp.');
  };

  return (
    <>
      <section
        className="bg-cover bg-center text-white py-20 relative"
        style={{ backgroundImage: `url('/sweetplanner-official/images/hero/contact-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-slate-800/60"></div>
        <div className="max-w-screen-xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Hubungi Kami</h1>
          <p className="text-slate-300 mt-4 text-lg">Kami siap membantu mewujudkan acara impian Anda.</p>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Informasi Kontak</h2>
                <div className="flex items-start space-x-4 mb-4">
                  <i className="bi bi-geo-alt-fill text-2xl text-sky-600 mt-1"></i>
                  <div>
                    <h3 className="font-semibold">Alamat</h3>
                    <p className="text-slate-600">Jl. Jend. Sudirman No. 123<br />Makassar, Sulawesi Selatan, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <i className="bi bi-whatsapp text-2xl text-sky-600 mt-1"></i>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <a href="https://wa.me/6281234567890" className="text-slate-600 hover:text-sky-600">+62 812 3456 7890</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="bi bi-telephone-fill text-2xl text-sky-600 mt-1"></i>
                  <div>
                    <h3 className="font-semibold">Telepon</h3>
                    <a href="tel:+621234567890" className="text-slate-600 hover:text-sky-600">+62 123 456 7890</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Terhubung dengan kami</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-500 text-xl hover:text-sky-600 transition-colors"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-slate-500 text-xl hover:text-sky-600 transition-colors"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-slate-500 text-xl hover:text-sky-600 transition-colors"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="text-slate-500 text-xl hover:text-sky-600 transition-colors"><i className="bi bi-twitter-x"></i></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 p-8 rounded-lg shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-700">Nama Lengkap</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium text-slate-700">Nomor WhatsApp</label>
                    <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="+62 812 3456 7890" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-slate-700">Subjek</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="Permintaan Informasi Acara" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-700">Pesan Anda</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="block p-2.5 w-full text-sm text-slate-900 bg-white rounded-lg border border-slate-300 focus:ring-sky-500 focus:border-sky-500" placeholder="Jelaskan kebutuhan acara Anda..."></textarea>
                  </div>
                  <button type="submit" className="w-full text-white bg-sky-600 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors">Kirim via WhatsApp</button>
                </form>
                {formStatus && (
                  <p className="mt-4 text-sm text-center text-green-600">{formStatus}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default ContactPage;
