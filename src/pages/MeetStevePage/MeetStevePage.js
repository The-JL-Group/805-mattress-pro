import React from 'react';

// Components
import NavBar from '../../components/Navbar/Navbar';
import Message from '../../components/MeetSteve/Message/Message';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';

function MeetStevePage() {
  return (
    <div className='overflow-x-hidden'>
      <NavBar />
      <Message />
      <CTA />
      <Footer />
    </div>
  );
}

export default MeetStevePage;
