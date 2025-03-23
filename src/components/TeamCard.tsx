import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/30">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse-slow"></div>
          <img
            src={image}
            alt={name}
            className="relative w-32 h-32 rounded-full object-cover border-2 border-purple-500 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="animate-slide-in">
          <h3 className="text-xl font-semibold animate-glow">{name}</h3>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;