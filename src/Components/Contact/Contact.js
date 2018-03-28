import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <h3>Contact me</h3>
        <ListGroup>
          <ListGroupItem tag="a" href="#" action>
            Email: Garrettcrg@gmail.com
          </ListGroupItem>
          <ListGroupItem
            tag="a"
            href="https://www.linkedin.com/in/garrett-craig-94223a160/"
            action
          >
            Linkedin
          </ListGroupItem>
          <ListGroupItem tag="a" href="https://github.com/Garrettcraig4" action>
            Github
          </ListGroupItem>
        </ListGroup>
        <p />
      </div>
    );
  }
}
