import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  mobile?: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, mobile, className }) => {
  const baseClasses = "text-gray-300 hover:text-white transition-transform duration-100";  
  const mobileClasses = "block text-base font-medium";  
  const desktopClasses = "text-sm font-medium";  

  return (
    <a
      href={href}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {label}
    </a>
  );
}

export default NavLink;

