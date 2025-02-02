import Hero from "./components/Hero/hero"
import Product from "./components/Products/Product"
import ContactUs from "./components/Contact-Us/Contact-Form"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import { Element } from 'react-scroll';
const App = () => {

  return (
    <>
      <div className="overflow-x-hidden">
        <Element name="home">
          <Hero />
        </Element>

        <Element name="product">
          <Product />
        </Element>

        <Element name="contact-us">
          <ContactUs />
        </Element>

        <Element name="about-us">
          <Banner />
        </Element>
        <Footer />
      </div>
    </>
  )
}

export default App
