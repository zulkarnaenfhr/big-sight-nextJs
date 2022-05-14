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
                            <div className={styles["ContactUs-Section1-Right-Parent-Content-Container"]}>
                                <form action="mailto:someone@example.com" method="post" encType="text/plain">
                                    <Row>
                                        <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                            <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                First Name
                                            </label>
                                            <br />
                                            <input className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="First Name" />
                                        </Col>
                                        <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                            <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                Last Name
                                            </label>
                                            <br />
                                            <input className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="Last Name" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                            <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                E-Mail
                                            </label>
                                            <br />
                                            <input className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="na1me" />
                                        </Col>
                                        <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                            <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                Phone
                                            </label>
                                            <br />
                                            <input className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="Email" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <p className={`${styles["ContactUs-Section1-Right-Label-RadioGroup"]} ${styles["ContactUs-Section1-Right-InputGroup"]}`}>What the of product do you need</p>
                                        <Row>
                                            <div className={styles["ContactUs-Section1-Right-Radio-Row"]}>
                                                {" "}
                                                <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                    <input type="radio" name="Produk Interest" value={"Legal Analytics"} id="" /> <span className={styles["ContactUs-Section1-Right-Label-Radio"]}> Legal Analytics</span>{" "}
                                                </label>{" "}
                                                <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                    <input type="radio" name="Produk Interest" value={"Big View"} id="" />
                                                    <span className={styles["ContactUs-Section1-Right-Label-Radio"]}> Big View </span>
                                                </label>{" "}
                                                <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                    <input type="radio" name="Produk Interest" value={"Picaso"} id="" />
                                                    <span className={styles["ContactUs-Section1-Right-Label-Radio"]}> Picaso </span>
                                                </label>{" "}
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className={styles["ContactUs-Section1-Right-Radio-Row"]}>
                                                {" "}
                                                <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                    <input type="radio" name="Produk Interest" value={"Smarteye.id"} id="" />
                                                    <span className={styles["ContactUs-Section1-Right-Label-Radio"]}> Smarteye.id </span>
                                                </label>{" "}
                                                <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                    <input type="radio" name="Produk Interest" value={"Big Score"} id="" />
                                                    <span className={styles["ContactUs-Section1-Right-Label-Radio"]}> Big Score </span>
                                                </label>{" "}
                                                <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                    <input type="radio" name="Produk Interest" value={"Big Box"} id="" />
                                                    <span className={styles["ContactUs-Section1-Right-Label-Radio"]}> Big Box </span>
                                                </label>{" "}
                                            </div>
                                        </Row>
                                    </Row>
                                    <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                        Message
                                    </label>
                                    <br />
                                    <textarea className={styles["ContactUs-Section1-Right-TextArea-Input"]} type="text" name="Phone Number" cols="30" rows="10" />
                                    <button type="submit">Submit</button>
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
