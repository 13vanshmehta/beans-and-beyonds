import Hero from "./components/Hero/hero"
import Product from "./components/Products/Product"
import ContactUs from "./components/Contact-Us/Contact-Form"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"

const App = () => {

  return (
    <>
      <div className="overflow-x-hidden">
        <Hero />
        <Product />
        <ContactUs />
        <Banner />
        <Footer />
      </div>
    </>
  )
}

export default App
