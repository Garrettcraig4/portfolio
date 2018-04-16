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
            <CardText className="ptext" class="card-text">
              This is my Personal Project I learned how to code 5 weeks prior
              and I completed in 2 weeks. completely functional created in
              React.js with a Node.js server and SQL calls to the database
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
            <div className="list">
              <CardText class="card-text" />
              <ul>
                <li>Fully Mobile responsive</li>
                <li>Full Scale </li>
              </ul>
            </div>
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
                  <CardBody className="ptext">
                    Built in React.js ,Node.js, Redux for state management,
                    auth0 for auth , Sweatalerts for cleaner alert messages,
                    Axios for the server and front end to talk, Massive for
                    sever to talk to database, SQL queries for server to
                    interact with database , Stripe api for checkout, Nodemailer
                    for sending a email conformation,
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          </CardBody>
          <CardImg
            class="card-img-bottom"
            id="perpic"
            src={perpic}
            alt="My personal project picture"
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
