import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./Home.css";
import Me from "../../assets/_DSC0409.jpg";
import { Link } from "react-router-dom";
const Home = props => {
  return (
    <div>
      <Jumbotron>
        <h1 id="myname" className="display-3">
          Garrett Craig
        </h1>
        <h1 className="display-3">Full-Stack Web Developer!</h1>
        <p className="lead">
          Hard work and Determination will always lead to success.
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
          <Link to="/contact">
            <Button className="contactbtn" color="primary">
              Contact
            </Button>
          </Link>
        </p>
      </Jumbotron>

      <img id="me" src={Me} />
    </div>
  );
};

export default Home;
