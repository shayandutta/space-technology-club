// import React from 'react';

// interface EventCardProps {
//   title: string;
//   date: string;
//   description: string;
//   image: string;
// }

// const EventCard: React.FC<EventCardProps> = ({ title, date, description, image }) => {
//   return (
//     <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/30">
//       <div className="relative overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//       </div>
//       <div className="p-6 animate-slide-in">
//         <h3 className="text-xl font-semibold mb-2 animate-glow">{title}</h3>
//         <p className="text-purple-400 mb-4">{date}</p>
//         <p className="text-gray-300">{description}</p>
//         <button className="mt-4 px-6 py-2 bg-purple-600 rounded-full transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EventCard;

import React, { useState } from 'react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/30">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6 animate-slide-in">
        <h3 className="text-xl font-semibold mb-2 animate-glow">{title}</h3>
        <p className="text-purple-400 mb-4">{date}</p>
        <p className="text-gray-300">{isExpanded ? description : `${description.slice(0, 100)}...`}</p>
        <button
          onClick={toggleExpand}
          className="mt-4 px-6 py-2 bg-purple-600 rounded-full transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}

export default EventCard;