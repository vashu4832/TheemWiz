import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import VideoReel from "./components/VideoReel";
import Portfolio from "./components/Portfolio";
import GetStarted from "./components/GetStarted";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowWeWork />
      <VideoReel />
      <Portfolio />
      <GetStarted />
      <Team />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;