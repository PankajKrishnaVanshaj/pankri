import Navbar from "@/components/Navbar";
import "./globals.css";
import Head from "next/head";
<<<<<<< HEAD
=======
import Footer from "@/components/Footer";
>>>>>>> e0f600f (blogs add)

export const metadata = {
  title: "PanKri",
  description: "Generated by PanKri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-2178056161997357" />
      </Head>
      <body className="mx-3 md:mx-16 lg:mx-32 my-2">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2178056161997357"
          crossorigin="anonymous"
        ></script>
        <Navbar />
        {children}
<<<<<<< HEAD
=======
        <Footer/>
>>>>>>> e0f600f (blogs add)
      </body>
    </html>
  );
}
