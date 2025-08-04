import React, { useState, useEffect, useRef } from 'react';
import { 
  FiCalendar, 
  FiUsers, 
  FiMic, 
  FiCamera, 
  FiMusic, 
  FiTrendingUp, 
  FiAward,
  FiStar,
  FiCheck,
  FiArrowRight,
  FiPlay,
  FiMapPin
} from 'react-icons/fi';
import Footer from './Footer';
import Header from './Header';

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

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Corporate Events",
      description: "Professional corporate meetings, conferences, and business gatherings tailored to your company's needs.",
      features: ["Meeting Planning", "Conference Management", "Team Building", "Product Launches"],
      price: "Starting from $2,500",
      image: "/img/event/img1.jpeg"
    },
    {
      icon: <FiCalendar className="text-3xl" />,
      title: "Wedding Planning",
      description: "Complete wedding planning services from venue selection to the perfect day coordination.",
      features: ["Venue Selection", "Catering Services", "Photography", "Decoration"],
      price: "Starting from $5,000",
      image: "/img/event/img2.jpeg"
    },
    {
      icon: <FiMic className="text-3xl" />,
      title: "Entertainment Events",
      description: "Concerts, festivals, and entertainment shows with full production management.",
      features: ["Stage Design", "Sound Systems", "Artist Management", "Security"],
      price: "Starting from $10,000",
      image: "/img/event/img3.jpeg"
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Exhibition & Trade Shows",
      description: "Professional exhibition planning and trade show management for maximum impact.",
      features: ["Booth Design", "Logistics", "Marketing", "Lead Generation"],
      price: "Starting from $3,500",
      image: "/img/event/img4.jpeg"
    }
  ];

  const products = [
    {
      icon: <FiCamera className="text-3xl" />,
      title: "Photography Equipment",
      description: "Professional photography and videography equipment rental for your events.",
      features: ["4K Cameras", "Professional Lighting", "Drone Services", "Editing Suite"],
      price: "$200/day",
      category: "Equipment"
    },
    {
      icon: <FiMusic className="text-3xl" />,
      title: "Audio Visual Systems",
      description: "State-of-the-art sound and visual equipment for any size event.",
      features: ["Sound Systems", "LED Screens", "Projectors", "Microphones"],
      price: "$300/day",
      category: "Equipment"
    },
    {
      icon: <FiMapPin className="text-3xl" />,
      title: "Event Decoration",
      description: "Beautiful decorations and themed setups to transform your venue.",
      features: ["Floral Arrangements", "Lighting Design", "Backdrop", "Table Settings"],
      price: "Starting from $800",
      category: "Decoration"
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: "Premium Packages",
      description: "All-inclusive packages with premium services and dedicated event coordination.",
      features: ["Full Service", "Dedicated Coordinator", "Premium Vendors", "24/7 Support"],
      price: "Custom Pricing",
      category: "Package"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We start with understanding your vision, requirements, and budget."
    },
    {
      step: "02",
      title: "Planning",
      description: "Detailed planning with timeline, vendor selection, and logistics coordination."
    },
    {
      step: "03",
      title: "Execution",
      description: "Professional execution with on-site management and real-time coordination."
    },
    {
      step: "04",
      title: "Follow-up",
      description: "Post-event analysis and feedback collection for continuous improvement."
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      <Header />

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-16 bg-gradient-to-r from-red-50 to-pink-50">
          <div className="text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Your <span className="text-red-600">Vision</span> Into Reality
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                From intimate gatherings to large-scale productions, we provide comprehensive event solutions 
                that exceed expectations and create unforgettable experiences.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-8">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'services'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'products'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                Products
              </button>
            </div>
          </div>

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <FadeInSection key={index} delay={index * 150}>
                  <div 
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="h-48 bg-gradient-to-r from-red-500 to-pink-500 relative overflow-hidden">
                      {service.image && (
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover opacity-20"
                        />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                          {service.price}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <FiCheck className="text-red-600 mr-2" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center">
                        Get Started <FiArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-red-600">{product.icon}</div>
                    </div>
                    
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full mb-3 inline-block">
                      {product.category}
                    </span>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    <div className="space-y-1 mb-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-gray-500">• {feature}</div>
                      ))}
                    </div>
                    
                    <div className="text-red-600 font-bold mb-4">{product.price}</div>
                    
                    <button className="w-full bg-gray-100 text-gray-700 py-2 rounded font-medium hover:bg-red-600 hover:text-white transition-colors">
                      Learn More
                    </button>
                  </div>
                </FadeInSection>
              ))}
            </div>
          )}
        </section>

        {/* Process Section */}
        <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-16 bg-gray-50">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Our <span className="text-red-600">Process</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We follow a proven 4-step process to ensure your event is perfectly executed from concept to completion.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-16">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What Our <span className="text-red-600">Clients Say</span>
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "Tech Corp",
                rating: 5,
                text: "Exceptional service! They turned our corporate event into an unforgettable experience."
              },
              {
                name: "Michael Chen",
                company: "Creative Agency",
                rating: 5,
                text: "Professional, creative, and reliable. They exceeded all our expectations."
              },
              {
                name: "Emily Davis",
                company: "Finance Group",
                rating: 5,
                text: "From planning to execution, everything was perfect. Highly recommend!"
              }
            ].map((testimonial, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-16 bg-gradient-to-r from-red-600 to-pink-600">
          <div className="text-center text-white">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Let's discuss your event and bring your vision to life.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Get Free Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center">
                  <FiPlay className="mr-2" /> Watch Our Work
                </button>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default ServicesPage;