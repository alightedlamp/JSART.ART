import React, { Component } from "react";
import AnimatedWrapper from "../modules/AnimatedWrapper";

class AboutComponent extends Component {
 render() {
  return (
   <div className="page-info">
      <p>2017 &mdash; Present</p>
      <p>A series of drawings built with JavaScript. The intention is for these to be one part user-interaction, one-part program intervention.</p>
   </div>
  )
 }
}
const About = AnimatedWrapper(AboutComponent);
export default About;