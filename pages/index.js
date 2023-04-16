import Head from "next/head";
import Link from "next/link";
import Navigate from "@/components/Navigate";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section className="home page-height">
      <main>
        <Navigate />
        <Hero />
      </main>
    </section>
  );
}
