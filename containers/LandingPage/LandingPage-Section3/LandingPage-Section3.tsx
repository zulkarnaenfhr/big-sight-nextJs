import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section3.module.css";

export default function LandingPageSection3() {
    return (
        <div id={styles["LandingPage-Section3"]}>
            <h1 className={styles["LandingPage-Section3-Title"]}>
                KEUNTUNGAN MENGGUNAKAN <br /> PRODUK KAMI
            </h1>
            <Container>
                <Row>
                    <Col md={6} className={styles["LandingPage-Section3-Column-PaddingTop-Container"]}>
                        <div className={styles["LandingPage-Section3-Content-Container"]}>
                            <div className={styles["LandingPage-Section3-Content-Container-Row1"]}>
                                <div className={styles["LandingPage-Section3-Content-Container-Row1-Row"]}>
                                    <div className={styles["LandingPage-Section3-Content-Container-Row1-Img-Wrapper"]}>
                                        <Image src={require("../../../src/Big-Sight/LandingPage/Section3-Content1.png")} />
                                    </div>
                                    <h1 className={styles["LandingPage-Section3-Content-Container-Row1-Title"]}>Implementasi yang mudah dan fleksibel</h1>
                                </div>
                            </div>
                            <div className={styles["LandingPage-Section3-Content-Container-Row2"]}>
                                <h1 className={styles["LandingPage-Section3-Content-Container-Row2-Desc"]}>Produk dan solusi dapat disesuaikan dengan kebutuhan user</h1>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className={styles["LandingPage-Section3-Column-PaddingTop-Container"]}>
                        <div className={styles["LandingPage-Section3-Content-Container"]}>
                            <div className={styles["LandingPage-Section3-Content-Container-Row1"]}>
                                <div className={styles["LandingPage-Section3-Content-Container-Row1-Row"]}>
                                    <div className={styles["LandingPage-Section3-Content-Container-Row1-Img-Wrapper"]}>
                                        <Image src={require("../../../src/Big-Sight/LandingPage/Section3-Content2.png")} />
                                    </div>
                                    <h1 className={styles["LandingPage-Section3-Content-Container-Row1-Title"]}>Didukung oleh sumber daya yang kompeten</h1>
                                </div>
                            </div>
                            <div className={styles["LandingPage-Section3-Content-Container-Row2"]}>
                                <h1 className={styles["LandingPage-Section3-Content-Container-Row2-Desc"]}>Produk dan solusi di kembangkan oleh sumber daya manusia yang memiliki pengalaman dan keahlian</h1>
                            </div>
                        </div>{" "}
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className={styles["LandingPage-Section3-Column-PaddingTop-Container"]}>
                        <div className={styles["LandingPage-Section3-Content-Container"]}>
                            <div className={styles["LandingPage-Section3-Content-Container-Row1"]}>
                                <div className={styles["LandingPage-Section3-Content-Container-Row1-Row"]}>
                                    <div className={styles["LandingPage-Section3-Content-Container-Row1-Img-Wrapper"]}>
                                        <Image src={require("../../../src/Big-Sight/LandingPage/Section3-Content3.png")} />
                                    </div>
                                    <h1 className={styles["LandingPage-Section3-Content-Container-Row1-Title"]}>Terus berinovasi</h1>
                                </div>
                            </div>
                            <div className={styles["LandingPage-Section3-Content-Container-Row2"]}>
                                <h1 className={styles["LandingPage-Section3-Content-Container-Row2-Desc"]}>Melakukan pembaharuan dan inovasi solusi untuk mengikuti perkembangan teknologi</h1>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col md={6} className={styles["LandingPage-Section3-Column-PaddingTop-Container"]}>
                        <div className={styles["LandingPage-Section3-Content-Container"]}>
                            <div className={styles["LandingPage-Section3-Content-Container-Row1"]}>
                                <div className={styles["LandingPage-Section3-Content-Container-Row1-Row"]}>
                                    <div className={styles["LandingPage-Section3-Content-Container-Row1-Img-Wrapper"]}>
                                        <Image src={require("../../../src/Big-Sight/LandingPage/Section3-Content4.png")} />
                                    </div>
                                    <h1 className={styles["LandingPage-Section3-Content-Container-Row1-Title"]}>Analisis dan Insight yang akurat</h1>
                                </div>
                            </div>
                            <div className={styles["LandingPage-Section3-Content-Container-Row2"]}>
                                <h1 className={styles["LandingPage-Section3-Content-Container-Row2-Desc"]}>Mengutamakan keakuratan dan impactfull</h1>
                            </div>
                        </div>{" "}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
