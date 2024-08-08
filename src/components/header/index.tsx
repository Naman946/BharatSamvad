import React from 'react';

interface Props {
  logoSrc: string;
  logoAlt: string;
}

const Header: React.FC<Props> = ({ logoSrc, logoAlt }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoSrc} alt={logoAlt} />
      </div>
    </header>
  );
};

export default Header;