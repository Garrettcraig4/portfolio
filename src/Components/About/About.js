import React, { Component } from "react";
import { Button } from "reactstrap";
import "./About.css";
class About extends Component {
  render() {
    return (
      <div className="About">
        <h1 className="display-3">About</h1>
        <h3>Who Am I</h3>
        <p className="expdiv">
          I have a passion for all things technology. I am primarily a
          self-driven, hard worker always willing to take on a challenge and
          grow my skills. I think that if you are willing to push to the next
          level, you can achieve your goals. I am very dedicated to anything I
          do and I put allot of time into things to get the best out of them.
        </p>
        <h3>My Experience with tech </h3>
        <div className="expdiv">
          <p>
            When I was three, my dad came home from work and built me my first
            computer. That is when my experience with tech started to grow. When
            I was young, I remember using the command line on windows xp to send
            a message from my computer up-stairs to the computer down-stairs. I
            also owned several Apple products (iPodtouches, iPad's, iPhone's and
            more). I used to (jailbreak) them where I would install 3rd party
            packages and applications on the devices, through the root and
            package manager or through ssh. When I was a teen, I dual-booted my
            PC with Linux and Windows. I also made my PC a (Hackintosh) where I
            installed the Mac operating system on Windows hardware. When I was
            16, I built my own PC. I picked out all the components and put it
            all together. That was an amazing learning experience. Fast forward
            to current time. I am a full-stack web developer. I have learned
            technologies like javascript, css, html, node.js, react.js, sql and
            github. I hope that my learning doesn't stop while I keep learning
            new technologies.
          </p>
        </div>
        <h3>Education</h3>
        <div className="expdiv">
          <p>DevMountain immersive web development bootcamp</p>
          <p>2018</p>
          <p>
            DevMountain is a 13 week bootcamp where they teach all the necessary
            skills and practices required to start a career as a web developer.
          </p>

          <Button
            color="danger"
            href="https://devmountain.com/web-bootcamp-immersive"
            id="devmtnbtn"
          >
            DevMountain
          </Button>
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
