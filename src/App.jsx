// src/App.jsx
import GlobalStyles from "./components/GlobalStyles";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Stats from "./sections/Stats";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import WhatsAppBanner from "./sections/WhatsAppBanner";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


export default function App() {
  return (
    <div style={{ background: "#ffffff", overflowX: "hidden" }}>
      <GlobalStyles />
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Services/>
      <Portfolio/>
      <Process />
      <Testimonials />
      <WhatsAppBanner />
      <Contact />
      <Footer />
    </div>
  );
}