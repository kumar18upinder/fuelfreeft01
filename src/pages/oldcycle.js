import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import bycycle from "./images/bycycle.jpeg";

function Oldcycle() {
  return (
    <>
      <Header />
      <section id="collection-id">
        <img src={bycycle} alt="bycycle"></img>
      </section>
      <Footer />
    </>
  )
}

export default Oldcycle;
