import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section1.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LandingPageSection1Button } from "../../../components/Button/LandingPage/ButtonLandingPage.styled";

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
                                        See Details <img src="https://i.ibb.co/Bq9580y/panah-bawah.png" alt="panah-bawah"></img>
                                    </LandingPageSection1Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col col={7}>
                        <h1>masuk</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
