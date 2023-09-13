
import Contact from "./components/Contact";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Offer from "./components/Offer";
import Products from "./components/Products";
import Quality from "./components/Quality";
import Services from "./components/Services";

export default function Home() {
  return (
        <>
          <Nav />
          <Hero />
          <Products />
          <Quality />
          <Services />
          <Offer />
          <Customers />
          <Contact />
          <Footer />
        </>
  )
}
