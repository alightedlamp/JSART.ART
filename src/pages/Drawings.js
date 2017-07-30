import React, { Component } from "react";
import AnimatedWrapper from "../modules/AnimatedWrapper";

class DrawingsComponent extends Component {
 render() {
  return (
   <div className="page">
    <ul className="drawings-list">
        <li>20170717</li>
        <li>20170718</li>
        <li>20170719</li>
        <li>20170720</li>
        <li>20170721</li>
    </ul>
   </div>
  )
 }
}
const Drawings = AnimatedWrapper(DrawingsComponent);
export default Drawings;