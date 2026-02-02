"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- Review Data ---
const reviews = [
  {
    id: 1,
    name: "Happy Traveler",
    country: "International",
    rating: 5,
    text: "Rohan is a great and friendly guide and driver. We really enjoyed the elephant tour with him and can highly recommend it. He knows the jungle very well!",
    date: "Jan 2026"
  },
  {
    id: 2,
    name: "Michelle & Tom",
    country: "UK",
    rating: 5,
    text: "The cooking process was hands-on and incredibly fun. We picked fresh organic produce right from the garden. The owner patiently guided us through each step. Best food we had in Sri Lanka!",
    date: "Dec 2025"
  },
  {
    id: 3,
    name: "Ayesh Sandaruwan",
    country: "Sri Lanka",
    rating: 5,
    text: "Superb experience with RBR. The jeep condition was excellent and the ride was comfortable. Definitely the best safari service in Kimbissa area.",
    date: "3 months ago"
  }
];

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="flex flex-col min-h-screen text-gray-900 scroll-smooth overflow-x-hidden font-sans">

      {/* --- Navbar --- */}
      <nav className="bg-green-950/95 backdrop-blur-md text-white p-4 fixed w-full top-0 z-50 shadow-xl border-b border-green-800/50 transition-all">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#" className="text-xl md:text-2xl font-bold tracking-tight font-serif flex items-center gap-2">
            <span className="text-yellow-500">RBR</span> Adventures
          </a>
          <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
            <li><a href="#home" className="hover:text-yellow-400 transition duration-300">Home</a></li>
            <li><a href="#safari" className="hover:text-yellow-400 transition duration-300">Safari</a></li>
            <li><a href="#hena" className="hover:text-yellow-400 transition duration-300">Cooking Class</a></li>
            <li><a href="#reviews" className="hover:text-yellow-400 transition duration-300">Reviews</a></li>
          </ul>
          <a href="#contact" className="bg-yellow-500 text-green-950 px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-400 transition">Book Now</a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-green-950/90 z-10"></div>
        <img
          src="/rbr-safari/images/image1.webp"
          alt="Sigiriya RBR Hero"
          className="absolute inset-0 w-full h-full object-cover z-0 animate-slow-zoom"
        />

        <div className="relative z-20 p-5 max-w-5xl mx-auto mt-16" data-aos="fade-up">
          <span className="text-yellow-400 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4 block">The Real Sigiriya Experience</span>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 drop-shadow-2xl leading-tight font-serif">
            Wild Safaris & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Village Cooking</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 drop-shadow-lg font-light max-w-3xl mx-auto opacity-90 leading-relaxed">
            Experience the thrill of Minneriya with expert guides and taste authentic Sri Lankan food in our <span className="text-yellow-300 font-serif font-bold">හේන</span> in Kimbissa.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#safari" className="bg-yellow-500 hover:bg-yellow-400 text-green-950 font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg transform hover:scale-105 uppercase tracking-wider">
              View Safari Packages
            </a>
            <a href="#hena" className="border-2 border-white hover:bg-white hover:text-green-950 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg transform hover:scale-105 uppercase tracking-wider">
              Cooking Class
            </a>
          </div>
        </div>
      </section>

      {/* --- Jeep Safari Section --- */}
      <section id="safari" className="py-24 bg-stone-50 scroll-mt-20 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-20 z-0"></div>

        <div className="container mx-auto px-5 lg:px-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">

          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4 sticky top-28">
            <img src="/rbr-safari/images/image2.webp" alt="Jeep Safari" className="col-span-2 w-full h-[400px] object-cover rounded-3xl shadow-2xl" data-aos="fade-right" />
            <img src="/rbr-safari/images/image4.webp" alt="Elephant" className="w-full h-[220px] object-cover rounded-3xl shadow-lg" data-aos="fade-up" data-aos-delay="100" />
            <img src="/rbr-safari/images/image5.webp" alt="Nature" className="w-full h-[220px] object-cover rounded-3xl shadow-lg" data-aos="fade-up" data-aos-delay="200" />
          </div>

          <div className="lg:w-1/2 w-full lg:pl-8" data-aos="fade-left">
            <span className="text-green-700 font-bold tracking-[0.2em] uppercase text-sm mb-4 block pl-2 border-l-4 border-yellow-500">Minneriya, Kaudulla & Eco Park</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-950 font-serif">
              Safari with the Experts.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              RBR Jeep Safari is known for its experienced drivers, who know the jungle inside out. We take you safely close to wild Asian Elephants, Peacocks, and Deer in the Minneriya and Kaudulla national parks.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Based in <strong>Kimbissa</strong>, we offer prompt pickup and drop-off. Whether it's the "Elephant Gathering" or a bird-watching tour, we ensure you get the best shots.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center gap-3">
                <span className="text-2xl">🚙</span>
                <span className="font-semibold text-green-900">Well-Maintained Jeeps</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="font-semibold text-green-900">Based in Kimbissa</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center gap-3">
                <span className="text-2xl">🐘</span>
                <span className="font-semibold text-green-900">Expert Guide</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center gap-3">
                <span className="text-2xl">💧</span>
                <span className="font-semibold text-green-900">Refreshments Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Hena Cooking Class Section --- */}
      <section id="hena" className="py-24 bg-white scroll-mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-60 z-0 translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-5 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">

          <div className="lg:w-1/2 w-full lg:pr-8" data-aos="fade-right">
            <span className="text-yellow-700 font-bold tracking-[0.2em] uppercase text-sm mb-4 block pl-2 border-l-4 border-green-700">Kimbissa Farm Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-950 font-serif">
              Authentic <span className="text-yellow-600">Hena Cooking</span>.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Located at Sigiriya road, Galakotuwa, Kimbissa, our cooking class offers a true "Farm to Table" experience. You don't just cook; you harvest fresh organic vegetables from our garden.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Learn to use the traditional "Miris Gala" (grinding stone) and cook in clay pots over firewood. It's the most authentic way to enjoy Sri Lankan Rice & Curry.
            </p>

            <ul className="space-y-4">
              {["Pick fresh organic veggies", "Traditional Clay Pot Cooking", "Located in quiet Kimbissa", "Hosted by a local family"].map((item, index) => (
                <li key={index} className="flex items-center text-green-900 font-medium">
                  <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a href="#contact" className="text-green-800 font-bold border-b-2 border-yellow-500 pb-1 hover:text-yellow-600 transition">Book a Cooking Session →</a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
            <img src="/rbr-safari/images/image3.webp" alt="Cooking Class" className="col-span-2 w-full h-[400px] object-cover rounded-3xl shadow-2xl order-first lg:order-last" data-aos="fade-left" />
            <img src="/rbr-safari/images/image6.webp" alt="Spices" className="w-full h-[220px] object-cover rounded-3xl shadow-lg" data-aos="fade-up" data-aos-delay="100" />
            <img src="/rbr-safari/images/image7.webp" alt="Clay Pots" className="w-full h-[220px] object-cover rounded-3xl shadow-lg" data-aos="fade-up" data-aos-delay="200" />
          </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section id="reviews" className="py-20 bg-stone-100">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-green-950 font-serif mb-4">What Our Guests Say</h2>
            <div className="flex justify-center items-center gap-2">
              <span className="text-yellow-500 text-2xl">★★★★★</span>
              <p className="text-gray-600 font-medium">5.0 Rating based on Google Reviews</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-stone-200" data-aos="fade-up" data-aos-delay={review.id * 100}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.country}</p>
                  </div>
                  <span className="ml-auto text-xs text-gray-400">{review.date}</span>
                </div>
                <div className="text-yellow-400 text-sm mb-3">{'★'.repeat(review.rating)}</div>
                <p className="text-gray-600 italic leading-relaxed text-sm">"{review.text}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* UPDATED LINK 01 */}
            <a href="https://maps.app.goo.gl/Wbqa7fDxiwTx5Shd9" target="_blank" className="inline-flex items-center text-green-700 font-bold hover:underline">
              View on Google Maps
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
        </div>
      </section>

      {/* --- Footer / Contact Section --- */}
      <section id="contact" className="py-24 bg-green-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/rbr-safari/images/image1.webp')] bg-cover bg-center opacity-10 blur-sm z-0"></div>

        <div className="container mx-auto px-5 relative z-10" data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Plan Your Adventure Today</h2>
          <p className="text-xl mb-12 opacity-80 max-w-2xl mx-auto">Skip the agents. Book directly with RBR for the best rates.</p>

          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
            <a href="tel:+94769318953" className="flex-1 bg-green-900/60 p-8 rounded-2xl backdrop-blur border border-green-700 hover:bg-green-800 transition group">
              <span className="text-4xl block mb-4 group-hover:scale-110 transition">📞</span>
              <h3 className="text-2xl font-bold mb-2">+94 76 931 8953</h3>
              <p className="text-sm opacity-70 uppercase tracking-widest">Or +94 77 636 4118</p>
            </a>

            {/* UPDATED LINK 02 */}
            <a href="https://maps.app.goo.gl/Wbqa7fDxiwTx5Shd9" target="_blank" className="flex-1 bg-green-900/60 p-8 rounded-2xl backdrop-blur border border-green-700 hover:bg-green-800 transition group">
              <span className="text-4xl block mb-4 group-hover:scale-110 transition">📍</span>
              <h3 className="text-2xl font-bold mb-2">Sigiriya road, Galakotuwa, Kimbissa</h3>
              <p className="text-sm opacity-70 uppercase tracking-widest">Get Directions</p>
            </a>
          </div>

          <div className="mt-20 border-t border-green-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
            <p>© {new Date().getFullYear()} RBR Sigiriya Adventures.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">
              Designed by
              <a
                href="mailto:slkazper@gmail.com"
                className="font-bold text-yellow-500 hover:text-yellow-400 hover:underline transition-all"
                title="Send an email to the developer"
              >
                SLKazper's Team.
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
