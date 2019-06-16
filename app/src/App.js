import React, { Component } from 'react';
import './App.css';
import Example from "./components/Jumbotron";
// import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import ImageCard from './components/ImageCard';
import shapes from "./shapes.json";
// import AlertDismissable from "./components/AlertDismissable";
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);

class App extends Component {
  state = {
    shapes,
    score: 0,
    record: 0,
    show: false
  };

  componentDidMount = () => {
    this.state.shapes.forEach(shape => {
      shape.count = 0;
  });
  }
  
  gameOver = () => {
    if (this.state.score >= this.state.record) {
      this.setState({record: this.state.score});
    }
    this.state.shapes.forEach(shape => {
      shape.count = 0;
    });
    // alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0, show: true});
    return true;
  }
  
  clickCount = id => {
    this.state.shapes.find((o, i) => {
      if (o.id === id) {
        if(shapes[i].count === 0){
          shapes[i].count = shapes[i].count + 1;
          this.setState({score : this.state.score + 1});
          this.state.shapes.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Example score={this.state.score} record={this.state.record}>Clicky Game</Example>
        {/* <AlertDismissable /> */}
        {/* <Wrapper> */}
      <SweetAlert
        show={this.state.show}
        title="Game over"
        text="Click OK to try again!"
        onConfirm={() => this.setState({ show: false })}
      />
        <div className="wrapper">
        {this.state.shapes.map(shape => (
          <ImageCard
            clickCount={this.clickCount}
            key={shape.id}
            id={shape.id}
            name={shape.name}
            image={shape.image}
            value={shape.id}
          />
        ))}
        </div>
        {/* </Wrapper> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
