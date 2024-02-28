"use client";

import Navbar from "./components/Navbar";
import HeroCarosel from "./components/HeroCarosel";
import About from "./components/About";
import VisonMission from "./components/VisonMission";
import WhatWeDo from "./components/WhatWeDo";
import CoreValues from "./components/CoreValues";
import GetInvolved from "./components/GetInvolved";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import { useRef } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);
  return (
    <>
      <main ref={mainRef}>
        <ProgressBar target={mainRef} />
        <Navbar target={mainRef} />

        <HeroCarosel />

        <About />

        <VisonMission />

        <WhatWeDo />

        <CoreValues />

        <GetInvolved />

        <Contact />

        <Footer />
        <Link
          href="/#top"
          className="fixed bottom-10 right-10 z-20 bg-white border border-primary-color rounded-full p-2 md:p-4 animate-bounce"
        >
          <ArrowUp />
        </Link>
      </main>
    </>
  );
}
