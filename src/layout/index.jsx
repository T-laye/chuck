import Footer from "@/components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Chuck` : "Chuck"}</title>
        <meta name="description" content="Chuck Token on Base" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/yellow_bg.jpeg" />
      </Head>
      <main className="overflow-hidden font-pixelifySans">{children}</main>
      <Footer />
    </>
  );
}
