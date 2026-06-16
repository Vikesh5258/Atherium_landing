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

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        background: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <WhyAtherium />
      <Tokenomics />
      <Roadmap />
      <Statistics />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
