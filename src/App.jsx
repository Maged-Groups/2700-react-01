import Home from './layout/Home'
import About from './layout/About'
import Features from './layout/features'
import Testimonials from './layout/Testimonials'
import ServicesDetails from './layout/services-details'
import Services from './layout/Services'
import Pricing from './layout/Pricing'
import Footer from './layout/footer'
export default function App() {

  return (
    <div>
      <Home/>
      <About/>
      <Features/>
      <Testimonials/>
      <Services/>
      <Pricing/>
      <Footer/>
      {/* <ServicesDetails/> */}
      
    </div>
  )
}


