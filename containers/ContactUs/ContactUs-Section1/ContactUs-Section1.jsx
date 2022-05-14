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
                        <Col sm={12} lg={5} className={styles["ContactUs-Section1-Left-Column"]}>
                            <div className={styles["ContactUs-Section1-Left-Parent-Content-Container"]}>
                                <div className={styles["ContactUs-Section1-Left-Container"]}>
                                    <div className={styles["ContactUs-Section1-Left-Content-Container"]}>
                                        <h1 className={styles["ContactUs-Section1-Left-Title"]}>Contact our team</h1>
                                        <h1 className={styles["ContactUs-Section1-Left-Desc"]}>We are happy to answer your question</h1>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles["ContactUs-Section1-Form-Content-Right-Container"]} sm={12} lg={7}>
                            <h1>masuk</h1>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ContactUsSection1;
