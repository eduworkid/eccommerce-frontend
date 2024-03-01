import React, { ReactNode } from 'react';
import Sidebar from '../dashboard/Sidebar';
import './index.css'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="columns" style={{ minHeight: "100vh" }}>
        <div className="column is-3">
          <Sidebar />
        </div>
        <div className="main-container">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
