import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default MainLayout;