import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Example from "./components/Jumbotron";
import Footer from "./components/Footer";
import ImageCard from './components/ImageCard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Example>HI</Example>

        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <ImageCard>

          </ImageCard>
        </header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
