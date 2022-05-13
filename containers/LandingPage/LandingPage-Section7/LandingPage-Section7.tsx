import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section7.module.css";

export default function LandingPageSection7() {
    return (
        <div id={styles["LandingPage-Section7"]}>
            <Container>
                <h1 className={styles["LandingPage-Section7-Title"]}>CUSTOMER</h1>
                <Row className={styles["LandingPage-Section7-RowLogo-Container"]}>
                    <Col>
                        <div className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-Telkom-Wrapper"]}>
                                <Image src={require("../../../src/Big-Sight/LandingPage/Section7-Telkom-Indonesia.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-Kemenkes-Wrapper"]}>
                                <Image src={require("../../../src/Big-Sight/LandingPage/Section7-Kemenkes.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-Seknat-Negara-Wrapper"]}>
                                <Image src={require("../../../src/Big-Sight/LandingPage/Section7-Seknat-Negara.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-Pertamina-Wrapper"]}>
                                <Image src={require("../../../src/Big-Sight/LandingPage/Section7-Pertamina.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-Dishub-Wrapper"]}>
                                <Image src={require("../../../src/Big-Sight/LandingPage/Section7-Dishub.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-AHM-Wrapper"]}>
                                <Image src={require("../../../src/Big-Sight/LandingPage/Section7-AHM.png")} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <h1 className={styles["LandingPage-Section7-Title2"]}>And More..</h1>
            </Container>
        </div>
    );
}
