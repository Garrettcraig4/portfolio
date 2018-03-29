import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1 className="display-3">About</h1>

        <h3>My Experience with tech </h3>
        <p>
          when i was 3 my dad came home from work and built me my first computer
          and thats when my Experince with tech started to grow
        </p>
        <p>
          when i was 9 i remember using the command line on windows xp to send a
          message from my computer upstaires to the computer downstaires{" "}
        </p>
        <p>
          through out ive owned several apple products (ipodtouches, ipads ,
          iphone's and more) and used to (jailbreak) them where i installed 3rd
          party packages and appiclations on to the divices through the root and
          package manager or through ssh{" "}
        </p>
        <p>when i was 11 i dual booted my pc with linux and windows </p>
        <p>
          when i was 12 i made my pc a (Hackintosh) where i installed the mac
          operating system on windows hardware
        </p>
        <p>
          {" "}
          then when i was 16 i built my own pc i picked out all the components
          and put it all together that was an amazing learning experince
        </p>
      </div>
    );
  }
}

export default About;
