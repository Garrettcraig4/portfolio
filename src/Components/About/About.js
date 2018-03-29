import React, { Component } from "react";
import { Button } from "reactstrap";

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1 className="display-3">About</h1>

        <h3>Education</h3>
        <p> DevMountain immersive web development bootcamp </p>
        <p>
          DevMountain is a 13 week bootcamp where the teach all necessary skills
          and practices required to start a career as a web developer{" "}
        </p>
        <Button
          color="danger"
          href="https://devmountain.com/web-bootcamp-immersive"
        >
          DevMountain
        </Button>
        <h3>My Experience with tech </h3>
        <p>
          when i was 3 my dad came home from work and built me my first computer
          and thats when my experience with tech started to grow
        </p>
        <p>
          when i was a kid i remember using the command line on windows xp to
          send a message from my computer up stairs to the computer down stairs
          i also owned several apple products (ipodtouches, ipads, iphone's and
          more) and used to (jailbreak) them where i installed 3rd party
          packages and application on to the devices through the root and
          package manager or through ssh
        </p>
        <p>
          when i was a teenager i dual booted my pc with linux and windows and
          also i made my pc a (Hackintosh) where i installed the mac operating
          system on windows hardware then when i was 16 i built my own pc i
          picked out all the components and put it all together that was an
          amazing learning experience
        </p>
        <p>
          and fast forward to current time i am a full-stack web developer i
          know technologys like javascript css html node.js react.js sql github
          and i hope that my learning doesent stop{" "}
        </p>
      </div>
    );
  }
}

export default About;
