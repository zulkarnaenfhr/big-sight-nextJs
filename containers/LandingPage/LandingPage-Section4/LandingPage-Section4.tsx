import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section4.module.css";

export default function LandingPageSection4() {
    return (
        <div id={styles["LandingPage-Section4"]}>
            <Container>
                <Row className={styles["LandingPage-Section4-Row-Container"]}>
                    <Col md={4}>
                        <h1 className={styles["LandingPage-Section4-Title"]}>
                            WHO <br /> WE ARE
                        </h1>
                    </Col>
                    <Col md={8}>
                        <div className={styles["LandingPage-Section4-Video-Container"]}>
                            <div className={styles["LandingPage-Section4-Aspect-Ratio"]}>
                                <iframe
                                    className={styles["LandingPage-Section4-Video"]}
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/SFwDJ83GxHE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
