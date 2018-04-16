import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import GResume from "../../assets/GResume.pdf";
export default class Example extends React.Component {
  render() {
    return (
      <div>
        <h1 className="display-3">Contact Me</h1>
        <ListGroup>
          <ListGroupItem tag="a" href="mailto:Garrettcrg@gmail.com" action>
            Email: Garrettcrg@gmail.com
          </ListGroupItem>
          <ListGroupItem
            tag="a"
            href="https://www.linkedin.com/in/garrett--craig/"
            action
          >
            Linkedin
          </ListGroupItem>
          <ListGroupItem tag="a" href="https://github.com/Garrettcraig4" action>
            Github
          </ListGroupItem>
          <ListGroupItem
            tag="a"
            action
            href={GResume}
            download="Garrett Craig Resume.pdf"
            target="_blank"
          >
            Download Resume
          </ListGroupItem>
        </ListGroup>
        <p />
      </div>
    );
  }
}
