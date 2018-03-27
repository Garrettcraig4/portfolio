import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Home = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">I am Full-Stack!</h1>
        <p className="lead">
          Hard work and Determination will always lead to success
        </p>
        <hr className="my-2" />
        <p>
          {" "}
          My Web Development Skills <br />React.js, Node.js, Html, Css,
          Javascript , Git, SQL
        </p>
        <p className="lead">
          <Button
            href="https://www.linkedin.com/in/garrett-craig-94223a160/"
            color="primary"
          >
            Linkedin
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
