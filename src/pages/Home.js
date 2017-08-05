import React, { Component } from "react";
import AnimatedWrapper from "../modules/AnimatedWrapper";

import Drawing from '../components/Drawing';

class HomeComponent extends Component {
    componentDidMount() {
        this.drawing = this.props.drawingPkg;
        this.drawingInfo = this.props.drawingInfo;
    }
    render() {
        return (
            <Drawing drawingPkg={this.drawing} drawingInfo={this.drawingInfo} />
        )
    }
}

const Home = AnimatedWrapper(HomeComponent);
export default Home;