import Image from "next/image";
import Layout from "@/layout";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoadMap from "@/components/RoadMap";
import Overview from "@/components/Overview";
import Token from "@/components/Token";
import How from "@/components/How";
export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Header />
      <Hero />
      <Overview />
      <RoadMap />
      <Token />
      <How />
    </Layout>
  );
}
