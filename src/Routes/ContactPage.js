import React from 'react';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

function ContactPage(props) {
    return (
        <>
          <Navbar />
          <Contact />
          <Footer />  
        </>
    );
}

export default ContactPage;