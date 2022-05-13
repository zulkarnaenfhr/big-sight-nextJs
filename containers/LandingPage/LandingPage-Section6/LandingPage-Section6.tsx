import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section6.module.css";

export default function LandingPageSection6() {
    return (
        <div id={styles["LandingPage-Section6"]}>
            <Container>
                <h1 className={styles["LandingPage-Section6-Title"]}>product achievement</h1>
                <div className={styles["LandingPage-Section6-Content-Parent-Container"]}>
                    <div className={styles["LandingPage-Section6-Content-Container"]}>
                        <Row>
                            <Col md={6}>
                                <div>
                                    <div className={`${styles["LandingPage-Section6-Cloudera-Logo-Container"]}`}>
                                        <div className={styles["LandingPage-Section6-Cloudera-Logo-Wrapper"]}>
                                            <Image src={require("../../../src/Big-Sight/LandingPage/Section6-Cloudera.png")} />
                                        </div>
                                    </div>
                                    <p className={`${styles["LandingPage-Section6-Column-Content-Title"]} ${styles["LandingPage-Section6-Column-Content-Title-Cloudera"]}`}>Cloudera Data Impact</p>
                                    <p className={styles["LandingPage-Section6-Column-Content-Desc"]}>
                                        Edge-to-AI Category ( The Biggest <br /> data-in-motion implementator)
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} className={styles["LandingPage-Section6-PaddingTop-Column2"]}>
                                <div>
                                    <div className={`${styles["LandingPage-Section6-CioOutlook-Logo-Container"]}`}>
                                        <div className={styles["LandingPage-Section6-CioOutlook-Logo-Wrapper"]}>
                                            <Image src={require("../../../src/Big-Sight/LandingPage/Section6-CioOutlook.png")} />
                                        </div>
                                    </div>
                                    <p className={`${styles["LandingPage-Section6-Column-Content-Title"]} ${styles["LandingPage-Section6-Column-Content-Title-CioOutlook"]}`}>Cloudera Data Impact</p>
                                    <p className={styles["LandingPage-Section6-Column-Content-Desc"]}>
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
