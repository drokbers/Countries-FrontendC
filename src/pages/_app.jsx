import React from 'react';
import '../../styles/globals.css';
import Layout from "@/components/layout";
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
  return <Layout>
 <Component {...pageProps} />;
  </Layout>
};

export default MyApp;
