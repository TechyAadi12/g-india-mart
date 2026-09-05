import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Materials from "./components/Materials";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import ServiceArea from "./components/ServiceArea";
import EnquiryForm from "./components/EnquiryForm";
import SupplierSection from "./components/SupplierSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 pb-16 lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Materials />
        <HowItWorks />
        <WhyUs />
        <ServiceArea />
        <EnquiryForm />
        <SupplierSection />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
