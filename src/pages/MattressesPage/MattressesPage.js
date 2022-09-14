import React from 'react';

// Components
import NavBar from '../../components/Navbar/Navbar';
import TopInfo from '../../components/Mattresses/TopInfo/TopInfo';
import BottomInfo from '../../components/Mattresses/BottomInfo/BottomInfo';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';

function MattressesPage() {
  return (
    <div>
      <NavBar />
      <CTA />
      <TopInfo />
      <BottomInfo />
      <Footer />
    </div>
  );
}

export default MattressesPage;
