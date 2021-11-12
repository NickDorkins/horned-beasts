import { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer';
import Main from './Main';


function App() {
  return (
    <div>
      <Header />
      <Main message={'hello'} />
      <Footer />
    </div>
  );
}

export default App;
