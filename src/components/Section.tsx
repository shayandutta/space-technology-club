import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, className = '', children }) => {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;