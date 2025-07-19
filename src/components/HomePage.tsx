import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { FiUser, FiMail, FiSend } from 'react-icons/fi';
import CountUp from 'react-countup';

const Homepage: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  
  // Rotating text state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const rotatingWords = [
    "PROFESSIONAL",
    "CREATIVE",
    "INNOVATIVE",
    "EXCEPTIONAL",
    "MEMORABLE"
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
      <header className="bg-gray-50 w-full px-8 py-8">
        <div className="flex justify-between items-start w-full">
          {/* Logo and Title */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl font-bold text-black mb-8 leading-tight">
              <span 
                className={`inline-block transition-all duration-300 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
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
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src="src/images/Fix Indonesia - Logo_Logo - Main - Red.png"
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8 w-full">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-black font-medium w-full">
            <li>
              <a href="#about" className="relative group hover:text-red-600 transition-colors py-2">
                <span className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="relative group hover:text-red-600 transition-colors py-2">
                <span className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                Contact
              </a>
            </li>
            <li>
              <a href="#clients" className="relative group hover:text-red-600 transition-colors py-2">
                <span className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                Clients
              </a>
            </li>
            <li>
              <a href="#portfolio" className="relative group hover:text-red-600 transition-colors py-2">
                <span className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#social-media" className="relative group hover:text-red-600 transition-colors py-2">
                <span className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                Social Media
              </a>
            </li>
            <li>
              <a href="#services" className="relative group hover:text-red-600 transition-colors py-2">
                <span className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                Services & Products
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full px-8 py-12">
        {/* Image Grid */}
        <div className="relative mb-16 w-full">
          {/* Full width red lines */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-red-600 transform -translate-y-0.5 z-10 hidden md:block"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-600 transform -translate-x-0.5 z-10 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Image 1 */}
            <div className="relative group w-full">
              <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden w-full">
                <img 
                  src="/your-image-1.jpg" 
                  alt="Event 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">M</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition-colors">
                  More
                </button>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative group w-full">
              <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden w-full">
                <img 
                  src="/your-image-2.jpg" 
                  alt="Event 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">J</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition-colors">
                  More
                </button>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative group w-full">
              <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden w-full">
                <img 
                  src="/your-image-3.jpg" 
                  alt="Event 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">C</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition-colors">
                  More
                </button>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative group w-full">
              <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden w-full">
                <img 
                  src="/your-image-4.jpg" 
                  alt="Event 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">E</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition-colors">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>

{/* About Section */}
        <section id="about" className="py-16 w-full mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              About <span className="text-red-600">Us</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
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
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <CountUp 
                      end={500} 
                      suffix="+" 
                      className="text-3xl font-bold text-red-600 mb-2"
                      duration={10}
                    />
                    <div className="text-gray-600 font-medium">Events Completed</div>
                  </div>
                  <div className="text-center">
                    <CountUp 
                      end={50} 
                      suffix="+" 
                      className="text-3xl font-bold text-red-600 mb-2"
                      duration={5}
                    />
                    <div className="text-gray-600 font-medium">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <CountUp 
                      end={10} 
                      suffix="+" 
                      className="text-3xl font-bold text-red-600 mb-2"
                      duration={1}
                    />
                    <div className="text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                    <div className="text-gray-600 font-medium">Support</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h4>
                  <p className="text-gray-600">
                    To transform ordinary moments into extraordinary memories through innovative 
                    event planning, impeccable execution, and personalized service that reflects 
                    each client's unique vision and style.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
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
            </div>
          </div>
        </section>

        {/* Red CTA Section */}
        <div className="bg-red-600 text-white p-8 rounded-lg text-center w-full mb-16">
          <p className="text-lg mb-6 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
            Fix your Event now
          </button>
        </div>

        {/* Client Logo Slider Section */}
        <section className="flex py-12 bg-gray-50 -mx-8 px-8 rounded-lg">
          <div className="space-y-8">
            <Marquee speed={50}>
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_AtoZ.png" alt="Logo 1" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Bank Indonesia.png" alt="Logo 2" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Bank Mandiri.png" alt="Logo 3" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_BNI46.png" alt="Logo 4" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_BNPB.png" alt="Logo 5" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Crea.png" alt="Logo 6" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_DCI Indonesia.png" alt="Logo 7" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Edge.png" alt="Logo 8" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Estetika dr Affandi.png" alt="Logo 9" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Foodmart.png" alt="Logo 10" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Fortress Data Services.png" alt="Logo 10" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_IMAJI.png" alt="Logo 10" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Indonet.png" alt="Logo 10" style={{width: '150px', height: '150px', marginRight: '40px'}} />
            </Marquee>
            
            {/* Second marquee - right to left with 10 logos */}
            <Marquee direction="right" speed={30} pauseOnHover={true}>
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Injourney Airports.png" alt="Logo 11" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Kemenkes.png" alt="Logo 12" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_KPK.png" alt="Logo 13" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Lippo Plaza Sunset.png" alt="Logo 14" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Pegadaian.png" alt="Logo 15" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_PLN.png" alt="Logo 16" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_PM.png" alt="Logo 17" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Sampoerna.png" alt="Logo 10" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Samrtfren.png" alt="Logo 10" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Sisnet.png" alt="Logo 10" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Vasaka - Bali.png" alt="Logo 10" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_Waskita.png" alt="Logo 10" style={{width: '150px', height: '150px', marginRight: '40px'}} />
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia-01.png" alt="Logo 10" style={{width: '150px', height: '150px', marginRight: '40px'}} />
            </Marquee>
          </div>
        </section>

        {/* Contact Form Section - Styled to match homepage */}
        <section id="contact" className="py-20 bg-white w-full">
          <div className="px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Get In <span className="text-red-600">Touch</span>
            </h2>

            <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="text-left block text-gray-700 mb-2 font-medium">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg pl-10 p-3 focus:ring-red-500 focus:border-red-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="text-left block text-gray-700 mb-2 font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg pl-10 p-3 focus:ring-red-500 focus:border-red-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="text-left block text-gray-700 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 focus:ring-red-500 focus:border-red-500"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
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