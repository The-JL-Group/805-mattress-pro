import React from 'react';

// Components
import NavBar from '../../components/Navbar/Navbar';
import Error from '../../components/Error/Error';
import Footer from '../../components/Footer/Footer';

function ErrorPage() {
  return (
    <div>
      <NavBar />
      <Error />
      <Footer />
    </div>
  );
}

export default ErrorPage;
