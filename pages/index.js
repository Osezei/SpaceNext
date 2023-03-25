import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Navigate from "@/components/Navigate";
//import Hero from "@/components/Hero";
//import "@/styles/global.css";

export default function Home() {
  return (
    <section className="home page-height">
      <Navigate />
      {/* <Navigation /> */}
      {/* <Hero /> */}
    </section>
  );
}
