import Image from "next/image";
import React, { Component } from "react";
import styled from "styled-components";
import styles from "./CardBigSightLandingPage.module.css";

const CardBigSightLandingPageLogoContainer = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-top: ${(props) => props.marginTop};
    margin-left: ${(props) => props.marginLeft};
`;

const CardBigSightLandingPageDesc = styled.p`
    margin-top: ${(props) => props.marginTopDesc};
`;

class CardBigSightLandingPage extends Component {
    render() {
        return (
            <div id={styles.CardBigSightLandingPage}>
                <a href={this.props.linkProduct}>
                    <button className={styles["CardBigSightLandingPage-Button"]}>
                        View More
                        <span className={styles["CardBigSightLandingPage-Button-ArrowRight"]}>
                            <Image width={12} height={12} src={require("../../../src/Big-Sight/Vector/arrow-right.png")} />
                        </span>
                    </button>
                </a>{" "}
                <div>
                    <CardBigSightLandingPageLogoContainer width={this.props.width} height={this.props.height} marginTop={this.props.marginTop} marginLeft={this.props.marginLeft}>
                        <Image src={this.props.logoImg} />
                    </CardBigSightLandingPageLogoContainer>

                    <CardBigSightLandingPageDesc marginTopDesc={this.props.marginTopDesc} className={styles["CardBigSightLandingPage-Desc"]}>
                        <b>{this.props.productName}</b> {this.props.productDesc}
                    </CardBigSightLandingPageDesc>
                </div>
            </div>
        );
    }
}

export default CardBigSightLandingPage;
