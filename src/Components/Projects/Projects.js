import React, { Component } from "react";
import perpic from "../../assets/Screen Shot 2018-03-27 at 4.37.36 PM.png";
import "./Projects.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Collapse
} from "reactstrap";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <h1 className="display-3">Projects</h1>

        <Card class="card">
          <CardBody class="card-body">
            <CardTitle class="card-title">Personal Project</CardTitle>
            <CardText class="card-text">
              This is my Personal Project i learned how to code 5 weeks prior
              and i completed in 2 weeks. completely functional created in
              react.js with a node.js server and sql calls to the database
            </CardText>
            <Button color="primary" href="http://167.99.98.238/">
              Go To Live Site
            </Button>
            <Button
              color="primary"
              id="codebtn"
              href="https://github.com/Garrettcraig4/Personal-Project-e-commerce"
            >
              View Code
            </Button>
            <CardText class="card-text" />
            <ul>
              <li>Fully Mobile responsive</li>
              <li>Full Scale </li>
            </ul>
            <div>
              <Button
                color="danger"
                onClick={this.toggle}
                style={{ marginBottom: "1rem" }}
              >
                Techs Used
              </Button>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    Built in react.js ,node.js, Redux for state management,
                    auth0 for auth , sweetalerts for cleaner alert messages,
                    axios for the server and front end to talk, massive for
                    sever to talk to database, sql querys for server to interact
                    with database , stripe api for checkout, nodemailer for
                    sending a email conformation,
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          </CardBody>
          <CardImg
            class="card-img-bottom"
            id="perpic"
            src={perpic}
            alt="my personal project picture"
          />
        </Card>
      </div>
    );
  }
}
3;

export default Projects;

// import React from "react";
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button
// } from "reactstrap";

// const Projects = props => {
//   return (
//     <div>
//       <Card>
//         <CardImg
//           top
//           width="100%"
//           src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
//           alt="Card image cap"
//         />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>
//             Some quick Projects text to build on the card title and make up the
//             bulk of the card's content.
//           </CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Projects;
