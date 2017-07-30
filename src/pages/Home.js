import React, { Component } from "react";
import AnimatedWrapper from "../modules/AnimatedWrapper";

import Drawing from '../components/Drawing';

class HomeComponent extends Component {
 render() {
  return (
   <div className="page">
    <Drawing />
   </div>
  )
 }
}
const Home = AnimatedWrapper(HomeComponent);
export default Home;