import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const LandingTop = styled.div`
    // border
    border: 2px green dotted;

    // sizing & placement
    height: 100vh;
    width: 100%;

    // background
    background-image: url("https://images.pexels.com/photos/1683989/pexels-photo-1683989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");

    // display
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const CallToAction = styled.div`
    // sizing & placement
    margin: auto auto;
`;

export default class LandingPageView extends Component {
    render() {
        return (
            <div className="landingpage_wrapper">
                <LandingTop>
                    <CallToAction className="landingpage_top_calltoaction">
                        <Button>SHOTGUN WEDDING</Button>
                    </CallToAction>
                </LandingTop>
            </div>
        )
    }
}
