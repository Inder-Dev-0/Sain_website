import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import HeroSection from "./components/Hero"
import ServicesSection from "./components/ServicesSection"
import WorkShowcase from "./components/WorkShowCase"


function App() {
  return <div className="relative">
    <HeroSection />
    <ServicesSection/>
    <WorkShowcase/>
    <ContactSection />
    <Footer />
  </div>
    
  
}

export default App