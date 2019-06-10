import React, { Component } from 'react';
import './App.css';
import Example from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import ImageCard from './components/ImageCard';
import shapes from "./shapes.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    shapes,
    clickedItems: []
  };

  handleClick = (event) => {
    // if (event) {
    //   console.log("clicked");
    // }
    const shapes = this.state.shapes.sort(
      function(a, b){ 
        return 0.5 - Math.random();
      });
    this.setState({ shapes });
    console.log({ shapes });
    const clickedItems = event.target.value;
    this.setState({ clickedItems });
    // console.log({ clickedItems });
  }

  render() {
    return (
      <div className="App">
        <Example>Clicky Game</Example>
        <Wrapper>
        {this.state.shapes.map(shape => (
          <ImageCard
            handleClick={this.handleClick}
            key={shape.id}
            id={shape.id}
            name={shape.name}
            image={shape.image}
            value={shape.id}
          />
        ))}
        </Wrapper>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
