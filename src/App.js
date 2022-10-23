import React from 'react'
import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
  const App = ()=> {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
