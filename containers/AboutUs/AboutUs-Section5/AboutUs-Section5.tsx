import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./AboutUs-Section5.module.css";

export default function AboutUsSection5() {
    return (
        <div id={styles["AboutUs-Section5"]}>
            <h1 className={styles["AboutUs-Section5-Title"]}>We Have Bold Mission</h1>
            <Row className={styles["AboutUs-Section5-Row-Column"]}>
                <Col className={styles["AboutUs-Section5-Column-Container"]}>
                    <div>
                        <p className={styles["AboutUs-Section5-Column-Title"]}>Business Performance</p>
                        <p className={styles["AboutUs-Section5-Column-Desc"]}>
                            Commitment for excellence is the foundation that strives our business performance to go above and beyond in order to be a catalyst for technology advancement in Indonesia
                        </p>
                    </div>
                </Col>
                <Col className={styles["AboutUs-Section5-Column-Container"]}>
                    <div>
                        <p className={styles["AboutUs-Section5-Column-Title"]}>Nation Contribution</p>
                        <p className={styles["AboutUs-Section5-Column-Desc"]}>
                            Nation Independency, as clearly stated in The 1945 Constitution’s Preamble, has been an ultimate purpose and a shared responsibility that our nation endeavoured to achieve.
                        </p>
                    </div>
                </Col>
                <Col className={styles["AboutUs-Section5-Column-Container"]}>
                    <div>
                        <p className={styles["AboutUs-Section5-Column-Title"]}>Technology Mastery</p>
                        <p className={styles["AboutUs-Section5-Column-Desc"]}>Our passion in technology is boundless. Exploration through research and development approach is how we accelerate and translate our ambition into creation</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
