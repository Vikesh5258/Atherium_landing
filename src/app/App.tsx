import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyAtherium } from "./components/WhyAtherium";
import { Tokenomics } from "./components/Tokenomics";
import { ICO } from "./components/ICO";
import { Roadmap } from "./components/Roadmap";
import { Statistics } from "./components/Statistics";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { TermsConditions } from "./components/pages/terms-conditions";
import { PrivacyPolicy } from "./components/pages/privacy-policy";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <WhyAtherium />
      <Tokenomics />
      <Roadmap />
      <Statistics />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          background: "#FFFFFF",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
