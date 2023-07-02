import React from "react";
import "../../styles/globals.css";
import Layout from "@/components/layout";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
