import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <h1>Липкий заголовок</h1>
    </header>
  );
};

export default Header;
