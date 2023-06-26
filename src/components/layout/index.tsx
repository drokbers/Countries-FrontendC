import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  loading?: boolean; // Make the 'loading' prop optional
}

const Layout = ({ children, loading }: LayoutProps) => {
  return (
    <main>
      <Header />
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black-900"></div>
          LOADING
        </div>
      ) : (
        children
      )}
    </main>
  );
};

export default Layout;

