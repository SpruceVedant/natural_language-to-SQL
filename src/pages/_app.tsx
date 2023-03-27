import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
// import localFont from 'next/font/local'

import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-neutral-900">
      <style jsx global>
      {`
        html {
          font-family: ${Analytics};
        }
      `}
      </style>
      <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen ">
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
      <Analytics />
    </div>
  );
}

export default MyApp;
