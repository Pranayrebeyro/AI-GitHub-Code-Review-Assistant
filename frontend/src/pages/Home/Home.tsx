import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import TechStack from "../../components/home/TechStack";
import HowItWorks from "../../components/home/HowItWorks";
import Statistics from "../../components/home/Statistics";
import CTA from "../../components/home/CTA";
import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TechStack />
      <HowItWorks />
      <Statistics />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;