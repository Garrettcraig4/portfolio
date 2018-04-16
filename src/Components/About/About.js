import React, { Component } from "react";
import { Button } from "reactstrap";
import "./About.css";
class About extends Component {
  render() {
    return (
      <div className="About">
        <h1 className="display-3">About</h1>

        <h3>Education</h3>
        <p> DevMountain immersive web development bootcamp </p>
        <p>2018</p>
        <p className="devmtn">
          DevMountain is a 13 week bootcamp where the teach all necessary skills
          and practices required to start a career as a web developer{" "}
        </p>
        <Button
          color="danger"
          href="https://devmountain.com/web-bootcamp-immersive"
        >
          DevMountain
        </Button>
        <h3>Who Am I</h3>
        <p className="expdiv">
          I have a passion for all things technology. I am primarily self-driven
          a hard worker always willing to take on a challenge and grow my
          skills. I think that if you are willing to push to the next level you
          can achieve your goals. I am very dedicated to anything I do I put
          lots of time into things to get the best out of them.
        </p>
        <h3>My Experience with tech </h3>
        <div className="expdiv">
          <p>
            When I was 3 my dad came home from work and built me my first
            computer and thats when my experience with tech started to grow.
            when I was young I remember using the command line on windows xp to
            send a message from my computer up stairs to the computer down
            stairs <br />
            I also owned several apple products (ipodtouchs, ipad's, iphone's
            and more) and used to (jailbreak) them where i installed 3rd party
            packages and applications on to the devices through the root and
            package manager or through ssh when I was a teen I dual booted my pc
            with linux and windows and also I made my pc a (Hackintosh) where I
            installed the mac operating system on windows hardware then when I
            was 16 I built my own pc I picked out all the components and put it
            all together that was an amazing learning experience fast forward to
            current time I am a full-stack web developer I have learned
            technologies like javascript, css, html, node.js, react.js, sql and
            github.I hope that my learning doesn't stop and I keep learning new
            technologies
          </p>
        </div>
        <h3>My Goal</h3>
        <p className="goaldiv">
          To always strive for the best by implementing new technologies and
          keep learning anything that is more efficient and productive.
        </p>
      </div>
    );
  }
}

export default About;
