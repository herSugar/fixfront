import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
// import { div } from 'framer-motion/client';

// Definisi tipe untuk data event
interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

// Data dummy untuk event
const events: Event[] = [
  {
    id: 1,
    title: 'Corporate Gala 2024',
    date: '15 Dec 2024',
    location: 'Jakarta, Indonesia',
    image: '/img/event/img1.jpeg',
    description: 'A grand corporate event with over 500 attendees, featuring live music and keynote speeches.',
  },
  {
    id: 2,
    title: 'Tech Conference 2023',
    date: '10 Oct 2023',
    location: 'Bali, Indonesia',
    image: '/img/event/img1.jpeg',
    description: 'An innovative tech conference showcasing the latest in AI and blockchain technology.',
  },
  {
    id: 3,
    title: 'Charity Run 2023',
    date: '5 Aug 2023',
    location: 'Surabaya, Indonesia',
    image: '/img/event/img1.jpeg',
    description: 'A community-driven charity run to support local education initiatives.',
  },
  {
    id: 4,
    title: 'Product Launch 2022',
    date: '20 Nov 2022',
    location: 'Bandung, Indonesia',
    image: '/img/event/img1.jpeg',
    description: 'A vibrant product launch event with interactive booths and media coverage.',
  },
];

// Komponen kartu event
const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-1">{event.date}</p>
        <p className="text-sm text-gray-600 mb-3">{event.location}</p>
        <p className="text-gray-700 text-sm line-clamp-2">{event.description}</p>
        <a
          href={`/event/${event.id}`}
          className="mt-4 inline-block bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-red-700 hover:to-pink-700 transition-all duration-300"
        >
          View Details
        </a>
      </div>
    </motion.div>
  );
};

// Komponen utama Portofolio
const Portfolio: React.FC = () => {
  return (
    <div>
    <Header />
    <section className="py-12 bg-white w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Our <span className="text-red-600">Portfolio</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Portfolio;