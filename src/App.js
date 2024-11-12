import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='container'>
      <Header />
      <Nav />
    </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
