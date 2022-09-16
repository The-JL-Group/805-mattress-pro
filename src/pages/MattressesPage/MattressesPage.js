import React from 'react';

// Components
import RestBanner from '../../components/Banner/RestBanners/RestBanner';
import TopInfo from '../../components/Mattresses/TopInfo/TopInfo';
import BottomInfo from '../../components/Mattresses/BottomInfo/BottomInfo';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';

function MattressesPage() {
  return (
    <div>
      <RestBanner />
      <CTA />
      <TopInfo />
      <BottomInfo />
      <Footer />
    </div>
  );
}

export default MattressesPage;
