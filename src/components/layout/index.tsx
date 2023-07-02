import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  loading?: boolean;
}

const Layout = ({ children, loading }: LayoutProps) => {
  return (
    <main className=" bg-veryLightGray dark:bg-veryDarkBlue min-h-screen pb-20">
      <Header />
      {loading ? (
        <div className="flex justify-center items-center max-h-screen ">
          <div className="animate-spin rounded-full "></div>
          LOADING
        </div>
      ) : (
        children
      )}
    </main>
  );
};

export default Layout;
