import React from 'react'

import Herostart from "../components/Herostart";
import OurWork from "../components/us/OurWork";
import Categories from "../components/productos/Categories";

import Products from "../components/productos/Products";
import Newsletter from "../components/us/Newsletter";

import Testimonials from "../components/us/Testimonials";
import ContactUs from "../components/us/ContactUs";


const Home = () => {
  return (
    <>

      <Herostart/>
      <OurWork />
      {/* <Categories /> */}
      <Products />
      <Newsletter />
      <Testimonials />
      <ContactUs/>
      
      
    </>
  )
}

export default Home