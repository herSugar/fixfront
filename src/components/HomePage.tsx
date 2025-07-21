import React, { useState, useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { FiUser, FiMail, FiSend } from 'react-icons/fi';
import CountUp from 'react-countup';

// Define props for FadeInSection component
interface FadeInSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up';
  delay?: number;
}

// FadeInSection component for fade-in animation
const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  direction = 'up',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  const translateClass =
    direction === 'left'
      ? 'translate-x-[-40px]'
      : direction === 'right'
      ? 'translate-x-[40px]'
      : 'translate-y-[40px]';

  return (
    <div
      ref={domRef}
      style={{
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : translateClass,
      }}
    >
      {children}
    </div>
  );
};

const Homepage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const rotatingWords = [
    'PROFESSIONAL',
    'CREATIVE',
    'INNOVATIVE',
    'EXCEPTIONAL',
    'MEMORABLE',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Header */}
      <header className="bg-white w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start w-full">
          {/* Logo and Title */}
          <div className="flex-1 text-left mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
              <span
                className={`inline-block transition-all duration-300 ${
                  isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform -translate-y-2'
                }`}
                style={{ color: '#dc2626' }}
              >
                {rotatingWords[currentWordIndex]}
              </span>
              <br />
              EVENT PLANNER
            </h1>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
              <img
                src="/img/FixIndonesiaLogo.png"
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 w-full">
          <ul className="flex flex-wrap gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-2 text-black font-medium text-sm sm:text-base">
            {[
              'About',
              'Contact',
              'Clients',
              'Portfolio',
              'Social Media',
              'Services & Products',
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' & ', '-')}`}
                  className="relative group hover:text-red-600 transition-colors py-2"
                >
                  <span className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Image Grid */}
        <div className="relative mb-12 lg:mb-16 w-full">
      {/* Full width red lines with pulse effect - hidden on mobile */}
      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-red-600 to-pink-600 transform -translate-y-0.5 z-10 hidden lg:block animate-pulse"></div>
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 to-pink-600 transform -translate-x-0.5 z-10 hidden lg:block animate-pulse"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {[
          { src: '/img/event/img1.jpeg', alt: 'Event 1', label: 'M', description: 'MEETING' },
          { src: '/img/event/img2.jpeg', alt: 'Event 2', label: 'I', description: 'INCENTIVES' },
          { src: '/img/event/img3.jpeg', alt: 'Event 3', label: 'C', description: 'CONFERENCES' },
          { src: '/img/event/img4.jpeg', alt: 'Event 4', label: 'E', description: 'EXHIBITIONS' },
        ].map((image, index) => (
          <FadeInSection key={index} direction="up" delay={index * 150}>
            <div className="relative group w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] rounded-lg overflow-hidden w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                <span className="bg-red-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-xl font-bold shadow-sm group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-pink-600 group-hover:px-4 sm:group-hover:px-4 min-w-[40px] inline-block sm:min-w-[48px] text-center transition-all duration-900">
                  <span className="inline-block group-hover:hidden">{image.label}</span>
                  <span className="hidden group-hover:inline-block">{image.description}</span>
                </span>
              </div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                <a
                  href={`#event-${index + 1}`}
                  className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded font-medium text-sm sm:text-base hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform group-hover:scale-105"
                >
                  More
                </a>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>

        {/* About Section */}
        <section id="about" className="py-16 w-full mb-16">
          <div className="w-full px-0">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                About <span className="text-red-600">Us</span>
              </h2>
            </FadeInSection>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeInSection direction="left" delay={200}>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-red-600 border">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Creating Unforgettable Experiences Since 2010
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We are a premier event planning company dedicated to bringing your vision to life. 
                      With over a decade of experience in the industry, we specialize in creating memorable 
                      events that exceed expectations and leave lasting impressions.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      From corporate gatherings to intimate celebrations, our team of creative professionals 
                      handles every detail with precision and care. We believe that every event tells a story, 
                      and we're here to help you tell yours in the most spectacular way possible.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <FadeInSection delay={600}>
                      <div className="text-center">
                        <CountUp 
                          end={500} 
                          suffix="+" 
                          className="text-3xl font-bold text-red-600 mb-2"
                          duration={10}
                        />
                        <div className="text-gray-600 font-medium">Events Completed</div>
                      </div>
                    </FadeInSection>
                    <FadeInSection delay={700}>
                      <div className="text-center">
                        <CountUp 
                          end={50} 
                          suffix="+" 
                          className="text-3xl font-bold text-red-600 mb-2"
                          duration={5}
                        />
                        <div className="text-gray-600 font-medium">Happy Clients</div>
                      </div>
                    </FadeInSection>
                    <FadeInSection delay={800}>
                      <div className="text-center">
                        <CountUp 
                          end={10} 
                          suffix="+" 
                          className="text-3xl font-bold text-red-600 mb-2"
                          duration={5}
                        />
                        <div className="text-gray-600 font-medium">Years Experience</div>
                      </div>
                    </FadeInSection>
                    <FadeInSection delay={900}>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                        <div className="text-gray-600 font-medium">Support</div>
                      </div>
                    </FadeInSection>
                  </div>
                </div>
              </FadeInSection>
              
              <FadeInSection direction="right" delay={400}>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-red-600">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h4>
                    <p className="text-gray-600">
                      To transform ordinary moments into extraordinary memories through innovative 
                      event planning, impeccable execution, and personalized service that reflects 
                      each client's unique vision and style.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-red-600">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Professional team with extensive experience
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Customized solutions for every budget
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        End-to-end event management
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Attention to every detail
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Red CTA Section */}
        <div className="bg-red-600 text-white p-6 sm:p-8 rounded-lg text-center w-full mb-12 lg:mb-16">
          <p className="text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="bg-white text-red-600 px-6 sm:px-8 py-2 sm:py-3 rounded font-medium text-sm sm:text-base hover:bg-gray-100 transition-colors">
            Fix your Event now
          </button>
        </div>

        {/* Client Logo Slider Section */}
        <section className="py-12 bg-white w-full">
          <div className="space-y-8 w-full max-w-none mx-0 px-0">
            <Marquee speed={50}>
              {[
                '/img/Logo Client Fix Indonesia/AtoZ.png',
                '/img/Logo Client Fix Indonesia/Bank_Indonesia.png',
                '/img/Logo Client Fix Indonesia/Bank_Mandiri.png',
                '/img/Logo Client Fix Indonesia/BNI46.png',
                '/img/Logo Client Fix Indonesia/BNPB.png',
                '/img/Logo Client Fix Indonesia/Crea.png',
                '/img/Logo Client Fix Indonesia/DCI_Indonesia.png',
                '/img/Logo Client Fix Indonesia/Edge.png',
                '/img/Logo Client Fix Indonesia/Estetika_dr_Affandi.png',
                '/img/Logo Client Fix Indonesia/Foodmart.png',
                '/img/Logo Client Fix Indonesia/Fortress_Data_Services.png',
                '/img/Logo Client Fix Indonesia/IMAJI.png',
                '/img/Logo Client Fix Indonesia/Indonet.png',
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Logo ${index + 1}`}
                  className="w-24 sm:w-32 lg:w-36 h-24 sm:h-32 lg:h-36 mx-4 sm:mx-6 object-contain"
                />
              ))}
            </Marquee>

            <Marquee direction="right" speed={50}>
              {[
                '/img/Logo Client Fix Indonesia/Injourney_Airports.png',
                '/img/Logo Client Fix Indonesia/Kemenkes.png',
                '/img/Logo Client Fix Indonesia/KPK.png',
                '/img/Logo Client Fix Indonesia/Lippo_Plaza_Sunset.png',
                '/img/Logo Client Fix Indonesia/Pegadaian.png',
                '/img/Logo Client Fix Indonesia/PLN.png',
                '/img/Logo Client Fix Indonesia/PM.png',
                '/img/Logo Client Fix Indonesia/Sampoerna.png',
                '/img/Logo Client Fix Indonesia/Samrtfren.png',
                '/img/Logo Client Fix Indonesia/Sisnet.png',
                '/img/Logo Client Fix Indonesia/Vasaka_Bali.png',
                '/img/Logo Client Fix Indonesia/Waskita.png',
                '/img/Logo Client Fix Indonesia/01.png',
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Logo ${index + 11}`}
                  className="w-24 sm:w-32 lg:w-36 h-24 sm:h-32 lg:h-36 mx-4 sm:mx-6 object-contain"
                />
              ))}
            </Marquee>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-12 lg:py-20 bg-white w-full">
          <div className="px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 lg:mb-16">
              Get In <span className="text-red-600">Touch</span>
            </h2>

            <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-lg">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="text-left block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg pl-12 p-2.5 sm:pl-6 text-sm sm:text-base focus:ring-red-500 focus:border-red-500 placeholder:pl-2"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-left block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg pl-12 p-2.5 sm:pl-6.5 text-sm sm:text-base focus:ring-red-500 focus:border-red-500 placeholder:pl-2"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="text-left block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base focus:ring-red-500 focus:border-red-500"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base transition-colors"
                >
                  Send Message <FiSend />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;