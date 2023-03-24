import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
//import Hero from "@/components/Hero";
//import "@/styles/global.css";

export default function Home() {
  return (
    <section className="home page-height">
      <Navigation />
      {/* <Hero /> */}
    </section>
  );
}
