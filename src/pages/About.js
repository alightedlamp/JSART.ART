import React, { Component } from "react";
import AnimatedWrapper from "../modules/AnimatedWrapper";
class AboutComponent extends Component {
 render() {
  return (
   <div className="page-info">
    <p>THIS IS PROJECT INFO</p>
   </div>
  )
 }
}
const About = AnimatedWrapper(AboutComponent);
export default About;