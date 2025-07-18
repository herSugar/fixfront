import React from 'react';
import Marquee from 'react-fast-marquee';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            {/* Logo and Title */}
            <div className="flex-1">
              <h1 className="flex justify-start text-left text-4xl font-bold text-black mb-8 leading-tight">
                PROFESSIONAL<br />
                EVENT PLANNER
              </h1>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">FIX</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-black font-medium">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Image 1 */}
          <div className="relative group">
            <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-6xl text-gray-600">📸</span>
              </div>
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
          <div className="relative group">
            <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-red-300 to-red-500 flex items-center justify-center">
                <span className="text-6xl text-white">🎭</span>
              </div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">J</span>
            </div>
            <div className="absolute top-4 right-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition-colors">
                More
              </button>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group">
            <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                <span className="text-6xl text-white">👤</span>
              </div>
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
          <div className="relative group">
            <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
                <span className="text-6xl text-white">😴</span>
              </div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">E</span>
            </div>
            <div className="absolute top-4 right-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition-colors">
                More
              </button>
            </div>
          </div>
        </div>

        {/* Red CTA Section */}
        <div className="bg-red-600 text-white p-8 rounded-lg text-center mb-16">
          <p className="text-lg mb-6 max-w-4xl mx-auto leading-relaxed">
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
            {/* First marquee - left to right with 10 logos */}
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
              <img src="src/assets/img/Logo Client Fix Indonesia/Logo Client Fix Indonesia_01.png" alt="Logo 10" style={{width: '150px', height: '150px', marginRight: '40px'}} />
            </Marquee>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;