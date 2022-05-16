import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./AboutUs-Section3.module.css";

export default function AboutUsSection3() {
    return (
        <div id={styles["AboutUs-Section3"]}>
            <Container className={styles["AboutUs-Section3-Container"]}>
                <Row>
                    <Col className={styles["AboutUs-Section3-Column-Container"]}>
                        <div>
                            <h1 className={styles["AboutUs-Section3-Column-Year"]}>2016</h1>
                            <h1 className={styles["AboutUs-Section3-Column-Desc"]}>Product Market Fit & Tech Development Stage</h1>
                        </div>
                    </Col>
                    <Col className={styles["AboutUs-Section3-Column-Container"]}>
                        <div>
                            <h1 className={styles["AboutUs-Section3-Column-Year"]}>2017</h1>
                            <h1 className={styles["AboutUs-Section3-Column-Desc"]}>Go to Market</h1>
                        </div>
                    </Col>
                    <Col className={styles["AboutUs-Section3-Column-Container"]}>
                        <div>
                            <h1 className={styles["AboutUs-Section3-Column-Year"]}>2019</h1>
                            <h1 className={styles["AboutUs-Section3-Column-Desc"]}>25 numbers of Regional Police (POLDA) Collaboration with Us</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
