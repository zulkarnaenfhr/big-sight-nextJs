import Image from "next/image";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
                        <Col lg={5} className={styles["ContactUs-Section1-Left-Column"]}>
                            <div className={styles["ContactUs-Section1-Left-Parent-Content-Container"]}>
                                <div className={styles["ContactUs-Section1-Left-Container"]}>
                                    <div className={styles["ContactUs-Section1-Left-Content-Container"]}>
                                        <h1 className={styles["ContactUs-Section1-Left-Title"]}>Contact our team</h1>
                                        <h1 className={styles["ContactUs-Section1-Left-Desc"]}>We are happy to answer your question</h1>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles["ContactUs-Section1-Form-Content-Right-Container"]} lg={7}>
                            <div className={styles["ContactUs-Section1-Right-Parent-Content-Container"]}>
                                <form className={styles["ContactUs-Section1-Right-Form-Container"]} action="mailto:someone@example.com" method="post" encType="text/plain">
                                    <Row>
                                        <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                            <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                First Name
                                            </label>
                                            <br />
                                            <input required className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="First Name" />
                                        </Col>
                                        <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                            <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                Last Name
                                            </label>
                                            <br />
                                            <input required className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="Last Name" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                            <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                E-Mail
                                            </label>
                                            <br />
                                            <input required className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="na1me" />
                                        </Col>
                                        <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                            <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                Phone
                                            </label>
                                            <br />
                                            <input required className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="Email" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <p className={`${styles["ContactUs-Section1-Right-Label-RadioGroup"]} ${styles["ContactUs-Section1-Right-InputGroup"]}`}>What the of product do you need</p>
                                        <Row>
                                            <Col>
                                                <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                    <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Legal Analytics</span>
                                                    <input type="radio" name="Product" value="Legal Analytics" required />
                                                    <span className={styles["checkmark"]}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </span>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                    <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Big View</span>
                                                    <input type="radio" name="Product" value="Big View" />
                                                    <span className={styles["checkmark"]}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </span>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                    <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Picaso</span>
                                                    <input type="radio" name="Product" value="Picaso" />
                                                    <span className={styles["checkmark"]}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </span>
                                                </label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                    <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Smarteye.id</span>
                                                    <input type="radio" name="Product" value="Smarteye.id" />
                                                    <span className={styles["checkmark"]}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </span>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                    <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Big Score</span>
                                                    <input type="radio" name="Product" value="Big Score" />
                                                    <span className={styles["checkmark"]}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </span>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                    <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Big Box</span>
                                                    <input type="radio" name="Product" value="Big Box" />
                                                    <span className={styles["checkmark"]}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Row>
                                    <label className={`${styles["ContactUs-Section1-Right-Label"]} ${styles["ContactUs-Section1-Right-Message-Label"]}`} htmlFor="">
                                        Message
                                    </label>
                                    <br />
                                    <textarea required className={styles["ContactUs-Section1-Right-TextArea-Input"]} type="text" name="Phone Number" cols="30" rows="10" />

                                    <div className={styles["ContactUs-Section1-Right-Submit-Button-Container"]}>
                                        <button className={styles["ContactUs-Section1-Right-Submit-Button"]} type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>{" "}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ContactUsSection1;
