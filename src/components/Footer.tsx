import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <p>Липкий футер</p>
    </footer>
  );
};

export default Footer;