import Image from "next/image";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./ContactUs-Section1.module.css";

class ContactUsSection1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
        };
    }
    render() {
        return (
            <div id={styles["ContactUs-Section1"]}>
                <div className={styles["ContactUs-Section1-Form-Container"]}>
                    <Row>
                        <Col sm={12} lg={4}>
                            <div className={styles["ContactUs-Section1-Form-Content-Left-Container"]}>
                                <div>
                                    <div className={styles["ContactUs-Section1-Form-Content-Left-Perent-Text-Container"]}>
                                        <div className={styles["ContactUs-Section1-Form-Content-Left-Text-Container"]}>
                                            <h1 className={styles["ContactUs-Section1-Form-Content-Left-Title"]}>Contact our team</h1>
                                            <p className={styles["ContactUs-Section1-Form-Content-Left-Desc"]}>We are happy to answer your question</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles["ContactUs-Section1-Form-Content-Left-Background-Wrapper"]}>
                                            <Image src={require("../../../src/Big-Sight/ContactUs/ContactUsBackground.png")} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles["ContactUs-Section1-Form-Content-Right-Container"]} sm={12} lg={8}>
                            <h1>masuk</h1>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ContactUsSection1;
