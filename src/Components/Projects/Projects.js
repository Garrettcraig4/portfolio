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
  Button
} from "reactstrap";

class Projects extends Component {
  render() {
    return (
      <Card class="card">
        <CardBody class="card-body">
          <CardTitle class="card-title">Personal Project</CardTitle>
          <CardText class="card-text">
            This is my Personal Project i learned how to code 5 weeks prior and
            i completed in 2 weeks
          </CardText>
          <Button color="primary" href="http://167.99.98.238/">
            Go To Live Site
          </Button>
          <CardText class="card-text" />
        </CardBody>
        <CardImg
          class="card-img-bottom"
          id="perpic"
          src={perpic}
          alt="my personal project picture"
        />
      </Card>
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
