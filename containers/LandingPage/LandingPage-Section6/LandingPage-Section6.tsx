import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section6.module.css";

export default function LandingPageSection6() {
    return (
        <div id={styles["LandingPage-Section6"]}>
            <Container>
                <h1 className={styles["LandingPage-Section6-Title"]} data-aos="fade-up">
                    product achievement
                </h1>
                <div className={styles["LandingPage-Section6-Content-Parent-Container"]}>
                    <div className={styles["LandingPage-Section6-Content-Container"]}>
                        <Row>
                            <Col md={6}>
                                <div>
                                    <div className={`${styles["LandingPage-Section6-Cloudera-Logo-Container"]}`} data-aos="fade-right">
                                        <div className={styles["LandingPage-Section6-Cloudera-Logo-Wrapper"]}>
                                            <Image src={require("../../../src/Big-Sight/LandingPage/Section6-Cloudera.png")} />
                                        </div>
                                    </div>
                                    <p className={`${styles["LandingPage-Section6-Column-Content-Title"]} ${styles["LandingPage-Section6-Column-Content-Title-Cloudera"]}`} data-aos="fade-right">
                                        Cloudera Data Impact
                                    </p>
                                    <p className={styles["LandingPage-Section6-Column-Content-Desc"]} data-aos="fade-right">
                                        Edge-to-AI Category ( The Biggest <br /> data-in-motion implementator)
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} className={styles["LandingPage-Section6-PaddingTop-Column2"]}>
                                <div>
                                    <div className={`${styles["LandingPage-Section6-CioOutlook-Logo-Container"]}`} data-aos="fade-left">
                                        <div className={styles["LandingPage-Section6-CioOutlook-Logo-Wrapper"]}>
                                            <Image src={require("../../../src/Big-Sight/LandingPage/Section6-CioOutlook.png")} />
                                        </div>
                                    </div>
                                    <p className={`${styles["LandingPage-Section6-Column-Content-Title"]} ${styles["LandingPage-Section6-Column-Content-Title-CioOutlook"]}`} data-aos="fade-left">
                                        Cloudera Data Impact
                                    </p>
                                    <p className={styles["LandingPage-Section6-Column-Content-Desc"]} data-aos="fade-left">
                                        Edge-to-AI Category ( The Biggest <br /> data-in-motion implementator)
                                    </p>
                                </div>{" "}
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}
