import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$ELONA",
  description: "ELONA MARSY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Elona Marsy" />
        <meta property="og:url" content="https://www.elonamarsy.com/" />
        <meta property="og:title" content="Solana Token" />
        <meta
          property="og:description"
          content="The beauty and genius of the internet"
        />
        <meta
          property="og:image"
          content="https://www.elonamarsy.com/header.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ELONAMARSY" />
        <meta name="twitter:url" content="https://www.elonamarsy.com/" />
        <meta name="twitter:title" content="Solana Token" />
        <meta
          name="twitter:description"
          content="The beauty and genius of the internet"
        />
        <meta
          name="twitter:image"
          content="https://www.elonamarsy.com/header.png"
        />
        <link rel="icon" href="./icon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
