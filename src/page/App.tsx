import * as React from 'react';
import './App.css';
import Footer from '../organism/Footer';
import Header from '../organism/Header';
import Navigation from '../organism/Navigation';
import Section from '../organism/Section';


function App() {
  return (
    <div>
      <div>
        <Header name="Header!!"/>
      </div>
      <div>
        <Navigation />
      </div>
      <div>
        <Section/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App;
