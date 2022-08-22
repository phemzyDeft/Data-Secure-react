import React from 'react';
import Cloud from '../components/cloud/Cloud';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

function CloudPage(props) {
    return (
        <>
          <Navbar />
          <Cloud />
          <Footer />  
        </>
    );
}

export default CloudPage;