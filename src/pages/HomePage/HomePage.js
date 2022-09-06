// Components
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Header/Banner/Banner';
import Incentives from '../../components/Incentives/Incentives';
import Info from '../../components/Info/Info';

function HomePage() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Incentives />
        <Info />
    </div>
  )
}

export default HomePage;