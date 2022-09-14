import React from 'react';

// Components
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Incentives from '../../components/Incentives/Incentives';
import OurMattress from '../../components/OurMattress/OurMattress';
import Vendors from '../../components/OurMattress/Vendors';
import Info from '../../components/Info/Info';
import Testimonials from '../../components/Testimonials/Testimonials';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CTA />
      <Incentives />
      <OurMattress />
      <Vendors />
      <Info />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
