import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./AboutUs-Section4.module.css";

export default function AboutUsSection4() {
    return (
        <div id={styles["AboutUs-Section4"]}>
            <div className={styles["AboutUs-Section4-Content-Container"]}>
                <h1 className={styles["AboutUs-Section4-Title"]}>How is it all started?</h1>
                <Row className={styles["AboutUs-Section4-Row-Container"]}>
                    <Col md={6} className={styles["AboutUs-Section4-ColumnContainer"]}>
                        <div className={styles["AboutUs-Section4-ImageContainer"]}>
                            <div className={styles["AboutUs-Section4-ImageWrapper"]}>
                                <Image src={require("../../../src/Big-Sight/About Us/Section3-GambarKiri.png")} />
                            </div>
                        </div>
                        <p className={styles["AboutUs-Section4-Desc"]}>
                            Since our inception in 2016, we have evolved our Vision-AI products. At the moment, our products and solutions has been implemented in sectors such as Smart Cities; Defence & Security; Traffic Surveillance
                            Management; Asset & Facilities Management; Retail & Wholesale Store Analysis, Advertising, Transportation, and more.
                        </p>{" "}
                    </Col>
                    <Col md={6} className={styles["AboutUs-Section4-ColumnContainer"]}>
                        <div className={styles["AboutUs-Section4-ImageContainer"]}>
                            <div className={styles["AboutUs-Section4-ImageWrapper"]}>
                                <Image src={require("../../../src/Big-Sight/About Us/Section3-GambarKanan.png")} />
                            </div>
                        </div>
                        <p className={styles["AboutUs-Section4-Desc"]}>
                            Among our respective clients and partners are the Indonesia's National Police (POLRI); NVIDIA; State-Owned Toll Operator "Jasa Marga"; HP Enterprise; IBM; Asian Games 2018 Committee; and The IMF-World Bank 2018
                            Committee.
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
