import React from 'react';

interface GalleryImageProps {
  src: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src }) => {
  return (
    <div className="relative overflow-hidden rounded-lg group cursor-pointer">
      <img
        src={src}
        alt="Gallery"
        className="w-full h-64 object-cover transition-all duration-500 transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-white text-sm font-medium"></div>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-300 rounded-lg"></div>
    </div>
  );
}

export default GalleryImage;