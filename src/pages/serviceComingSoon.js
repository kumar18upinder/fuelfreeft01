import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import servicesoon from "./images/serviceComing.png"

const ServiceComingSoon = () => {
  return (
    <>
      <Header/>
      <img src={servicesoon} alt='service-coming'/>
      <Footer/>
    </>
  )
}

export default ServiceComingSoon
