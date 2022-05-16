import styles from "./BeforeFooterBighSight.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function BeforeFooter() {
    return (
        <div>
            <div id={styles["BeforeFooter"]}>
                <Row className={styles["BeforeFooter-Content-Container"]}>
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                                <div className={styles["BeforeFooter-Left-Row1"]} data-aos="fade-right" data-aos-delay="0">
                                    <div className={styles["BeforeFooter-Logo"]}>
                                        <Image src={require("../../src/Big-Sight/LogoBigSight.png")} />
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <h1 className={styles["BeforeFooter-Left-Title"]} data-aos="fade-right" data-aos-delay="100">
                                    Telkom Direktorat Digital Bussiness Bandung
                                </h1>
                            </Col>
                            <Col md={12} sm={6} xs={12}>
                                <h1 className={styles["BeforeFooter-Left-Desc"]} data-aos="fade-right" data-aos-delay="200">
                                    Jl. Gegerkalong Hilir no. 47, Sukasari, Kota Bandung, Jawa Barat 40152 (022) 4571261
                                </h1>
                            </Col>
                            <Col md={12} sm={6} xs={12}>
                                <h1 className={styles["BeforeFooter-Left-Desc"]} data-aos="fade-right" data-aos-delay="300">
                                    admin@bigsight.id
                                </h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row className={styles["BeforeFooter-Middle-Row1"]}></Row>
                        <Row className={styles["BeforeFooter-Middle-Row2"]}></Row>
                        <Row>
                            <h1 className={styles["BeforeFooter-Middle-Title"]} data-aos="fade-up" data-aos-delay="0">
                                Ikuti Sosial Media Kami
                            </h1>
                            <div className={styles["BeforeFooter-Middle-Sosmed-Container"]} data-aos="fade-up" data-aos-delay="100">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                <FontAwesomeIcon icon={faInstagram} size="2x" className={styles["BeforeFooter-Middle-Sosmed-Logo"]} />
                                <FontAwesomeIcon icon={faTwitter} size="2x" className={styles["BeforeFooter-Middle-Sosmed-Logo"]} />
                                <FontAwesomeIcon icon={faFacebookSquare} size="2x" className={styles["BeforeFooter-Middle-Sosmed-Logo"]} />
                            </div>
                        </Row>
                        <Row>
                            <h1 className={styles["BeforeFooter-Middle-Desc"]} data-aos="fade-up" data-aos-delay="300">
                                BIGSIGHT
                            </h1>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <div className={styles["BeforeFooter-Right-Logo-Wrapper"]} data-aos="fade-left" data-aos-delay="100">
                            <Image src={require("../../src/Big-Sight/LogoRight.png")} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
