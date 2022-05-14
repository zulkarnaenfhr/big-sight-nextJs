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
                            <form action="mailto:someone@example.com" method="post" encType="text/plain" className="BigSight-ContactUs-Section1-Form-Container">
                                <Row>
                                    <Col>
                                        <label htmlFor="">First Name</label>
                                        <br />
                                        <input className="container" placeholder="First Name" type="text" name="First Name" />
                                    </Col>
                                    <Col>
                                        <label htmlFor="">Last Name</label>
                                        <br />
                                        <input className="container" placeholder="Last Name" type="text" name="Last Name" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label htmlFor="">E-Mail</label>
                                        <br />
                                        <input className="container" placeholder="youremail@example.com" type="text" name="na1me" />
                                    </Col>
                                    <Col>
                                        <label htmlFor="">Phone</label>
                                        <br />
                                        <input className="container" placeholder="08123456789101" type="text" name="Email" />
                                    </Col>
                                </Row>
                                <Row>
                                    <p>What the of product do you need</p>
                                    <Row>
                                        <div className={styles["ContactUs-Section1-Right-Radio-Row"]}>
                                            <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                {" "}
                                                <input type="radio" name="Produk Interest" value={"Legal Analytics"} id="" /> Legal Analytics
                                            </label>
                                            <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                {" "}
                                                <input type="radio" name="Produk Interest" value={"Big View"} id="" /> Big View
                                            </label>
                                            <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                {" "}
                                                <input type="radio" name="Produk Interest" value={"Picaso"} id="" /> Picaso
                                            </label>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className={styles["ContactUs-Section1-Right-Radio-Row"]}>
                                            <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                {" "}
                                                <input type="radio" name="Produk Interest" value={"Smarteye.id"} id="" /> Smarteye.id
                                            </label>
                                            <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                {" "}
                                                <input type="radio" name="Produk Interest" value={"Big Score"} id="" /> Big Score
                                            </label>
                                            <label htmlFor="" className={styles["ContactUs-Section1-Right-Radio-Row-Product"]}>
                                                {" "}
                                                <input type="radio" name="Produk Interest" value={"Big Box"} id="" /> Big Box
                                            </label>
                                        </div>
                                    </Row>
                                </Row>
                                <label htmlFor="">Message</label>
                                <br />
                                <textarea className="container" placeholder="Message" type="text" name="Phone Number" cols="30" rows="10" />
                                <button type="submit">Submit</button>
                            </form>{" "}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ContactUsSection1;
