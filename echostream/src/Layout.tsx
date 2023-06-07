import React, { ReactNode } from "react";
import "./styles.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
