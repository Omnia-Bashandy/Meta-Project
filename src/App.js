import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className='container py-2'>
      <Header />
      <Nav />
    </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
