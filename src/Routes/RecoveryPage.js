import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Recovery from '../components/recovery/Recovery';

function RecoveryPage(props) {
    return (
        <>
          <Navbar />
          <Recovery />
          <Footer />  
        </>
    );
}

export default RecoveryPage;