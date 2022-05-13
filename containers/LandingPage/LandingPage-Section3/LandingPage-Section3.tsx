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
                <Row className={styles["LandingPage-Section3-Row1"]}>
                    <Col>
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
                    <Col>
                        <h1>masuk</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
