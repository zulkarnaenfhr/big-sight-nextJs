import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section1.module.css";
import { LandingPageSection1Button } from "../../../components/Button/LandingPage/ButtonLandingPage.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function LandingPageSection1() {
    return (
        <div id={styles["LandingPage-Section1"]}>
            <Container fluid>
                <Row>
                    <Col lg={5} className={styles["LandingPage-Section1-Left"]}>
                        <div className={styles["LandingPage-Section1-Left-Content-Container"]}>
                            <p className={styles["LandingPage-Section1-Left-Desc"]}>BIG IMPACT GOOD INSIGHT</p>
                            <h1 className={styles["LandingPage-Section1-Left-Title"]}>Leverage Your Business Through Big Data Analytics</h1>
                            <div className={styles["LandingPage-Section1-Button-Container"]}>
                                <a
                                    style={{
                                        height: "auto",
                                        paddingTop: "0px",
                                    }}
                                    href="#BigSightLandingPage-Section2"
                                >
                                    <LandingPageSection1Button>
                                        About Us{" "}
                                        <span className={styles["LandingPage-Section1-Button-Span-Arrow"]}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </span>
                                    </LandingPageSection1Button>
                                </a>
                            </div>
                        </div>
                        <div className={styles["LandingPage-Section1-Right-Image-Left-Wrapper"]}>
                            <Image src={require("../../../src/Big-Sight/LandingPage/Section1-Vector-Left.png")} />
                        </div>
                    </Col>
                    <Col col={7} className={styles["LandingPage-Section1-Right-Column"]}>
                        <div className={styles["LandingPage-Section1-Right-Column-Position"]}>
                            <div className={styles["LandingPage-Section1-Right-Image-Wrapper"]}>
                                <Image src={require("../../../src/Big-Sight/LandingPage/Section1-Vector.png")} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
