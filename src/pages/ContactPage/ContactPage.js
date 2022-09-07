// Components
import NavBar from '../../components/Navbar/Navbar';
import Contact from '../../components/Contact/Contact';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';

function ContactPage() {
  return (
    <div className='overflow-x-hidden'>
      <NavBar />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default ContactPage;
