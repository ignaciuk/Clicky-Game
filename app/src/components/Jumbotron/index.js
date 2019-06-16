import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Counter from "../Counter";

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{props.children}</h1>
          <p className="lead">Try not to click the same shape twice.</p>
          <Counter score={props.score} record={props.record}/>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;