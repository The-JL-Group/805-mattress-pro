// Components
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Header/Banner/Banner';
import Incentives from '../../components/Incentives/Incentives';
import OurMattress from '../../components/OurMattress/OurMattress';
import Vendors from '../../components/OurMattress/Vendors';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Incentives />
      <OurMattress />
      <Vendors />
      <Info />
      <Footer />
    </div>
  );
}

export default HomePage;
