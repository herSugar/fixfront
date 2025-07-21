import React from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiLinkedin,
  FiClock,
  FiArrowUp
} from 'react-icons/fi';
import ServicesPage from './ServicesPage';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-pink-600/5 pointer-events-none"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-8">
        <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/img/FixIndonesiaLogo.png"
                  alt="Company Logo"
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-xl font-bold">
                  <span className="text-red-500">PROFESSIONAL</span>
                  <br />
                  EVENT PLANNER
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Creating unforgettable experiences since 2010. We transform ordinary moments 
                into extraordinary memories through innovative event planning and impeccable execution.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: FiFacebook, href: '#', label: 'Facebook' },
                  { icon: FiInstagram, href: '#', label: 'Instagram' },
                  { icon: FiTwitter, href: '#', label: 'Twitter' },
                  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '/ServicePage' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Clients', href: '#clients' },
                { name: 'Contact', href: '#contact' },
                { name: 'Social Media', href: '#social-media' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-lg">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Corporate Events',
                'Wedding Planning',
                'Conferences & Meetings',
                'Product Launches',
                'Social Gatherings',
                'Exhibition Management',
                'Team Building',
                'Event Consulting',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer inline-flex items-center group">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-lg">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    123 Business Street,<br />
                    Jakarta, Indonesia 12345
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <a 
                    href="tel:+6281234567890" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <a 
                    href="mailto:info@fixindonesia.com" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@fixindonesia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <FiClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 2:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-red-500">
              <h5 className="font-semibold text-white mb-2">24/7 Event Support</h5>
              <p className="text-gray-400 text-sm mb-2">For urgent event matters:</p>
              <a 
                href="tel:+628123456789" 
                className="text-red-500 font-semibold hover:text-red-400 transition-colors"
              >
                +62 812-3456-789
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-semibold text-white text-lg mb-3">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest event planning tips and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Fix Indonesia. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">
                  Terms of Service
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              aria-label="Back to top"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <FiArrowUp className="w-4 h-4 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-pink-500 to-red-600 animate-pulse"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-pink-600/20 to-red-600/20 rounded-full blur-xl"></div>
    </footer>
  );
};

export default Footer;