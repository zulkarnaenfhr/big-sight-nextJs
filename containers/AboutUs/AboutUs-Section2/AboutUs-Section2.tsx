import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./AboutUs-Section2.module.css";

export default function AboutUsSection2() {
    return (
        <div id={styles["AboutUs-Section2"]}>
            <Container>
                <Row className={styles["AboutUs-Section2-Container"]}>
                    <Col>
                        <div className={styles["AboutUs-Section2-Left-Content-Container"]}>
                            <h1 className={styles["AboutUs-Section2-Title"]}>Visi</h1>
                            <p className={styles["AboutUs-Section2-Desc"]}>Memperluas peluang user untuk mengimplementasikan Big Data Analytics dengan teknologi informasi yang mutakhir serta sumber daya manusia yang ahli dibidangnya.</p>
                        </div>
                        <div className={styles["AboutUs-Section2-Left-Content-Row2"]}>
                            <div className={styles["AboutUs-Section2-Left-Content-Container"]}>
                                <h1 className={styles["AboutUs-Section2-Title"]}>Misi</h1>
                                <p className={styles["AboutUs-Section2-Desc"]}>
                                    Berkomitmen terus meningkatkan inovasi berbasis Big Data Analytics untuk membantu berbagai sektor Bisnis dan Pemerintahan melalui berbagai produk dan solusi Big Data yang berkualitas.
                                </p>
                                <p className={styles["AboutUs-Section2-Desc"]}>Menyediakan produk dan solusi digital yang memiliki daya saing, berkelanjutan dan tepat guna. Memberikan keuntungan terhadap stakeholder dan shareholder.</p>
                            </div>{" "}
                        </div>
                    </Col>
                    <Col className={styles["AboutUs-Section2-Right-Content-Container"]}>
                        <div className={styles["AboutUs-Section2-Left-Background"]}>
                            <div className={styles["AboutUs-Section2-Awan1-Container"]}>
                                <div className={styles["AboutUs-Section2-Awan1-Wrapper"]}>
                                    <Image src={require("../../../src/Big-Sight/About Us/Awan1.png")} />
                                </div>
                            </div>
                            <div className={styles["AboutUs-Section2-Awan2-Container"]}>
                                <div className={styles["AboutUs-Section2-Awan2-Wrapper"]}>
                                    <Image src={require("../../../src/Big-Sight/About Us/Awan2.png")} />
                                </div>
                            </div>
                        </div>
                        <div className={styles["AboutUs-Section2-Panah-Container"]}>
                            <div className={styles["AboutUs-Section2-Panah-Wrapper"]}>
                                <Image src={require("../../../src/Big-Sight/About Us/PanahFull.png")} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
