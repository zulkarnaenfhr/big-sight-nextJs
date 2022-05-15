import { Col, Container, Row, Accordion, Card, useAccordionButton } from "react-bootstrap";
import styles from "./Faq-Section1.module.css";
import React, { Component } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <button type="button" className={styles["Faq-Section1-Accordian-Question-Button"]} onClick={decoratedOnClick}>
            {children}
        </button>
    );
}

class FaqSection1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statusLoad: "",
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        console.log("masuks");
    };
    render() {
        return (
            <div id={styles["Faq-Section1"]}>
                <Container>
                    <div className={styles["Faq-Section1-Content-Container"]}>
                        <Row>
                            <Col lg={3}>
                                <h1 className={styles["Faq-Section1-Title"]}>FAQ</h1>
                            </Col>
                            <Col lg={9}>
                                {/* <Row>
                                    <div className={styles["Faq-Section1-Collapse-Container"]}>
                                        <button onClick={this.handleClick} type="button" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" name="faq1">
                                            <Row className={styles["Faq-Section1-Collapse-Row-Question"]}>
                                                <Col sm={11}>
                                                    <h1>Apa itu Big Sight?</h1>
                                                </Col>
                                                <Col sm={1} className={styles["Faq-Section1-Collapse-Row-Question-Right"]}>
                                                    <span>
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </span>
                                                </Col>
                                            </Row>
                                        </button>
                                        <div className="collapse" id="collapseExample1">
                                            <div className={`${styles["Faq-Section1-divCollaps"]}`}>
                                                <p className={styles["Faq-Section1-divCollapse-Container"]}>
                                                    Integrated data smart goverment adalah layanan yang dapat mengintegrasikan data dari berbagai aplikas ke dalam sebuah horizontal integrated platform dan memvisualisasikan informasi yang
                                                    dibutuhkan dalam sebuah executive dashboard
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Row> */}
                                {/* <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>Accordion Item #1 </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion> */}
                                <Accordion defaultActiveKey="0">
                                    <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                        <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                            <CustomToggle eventKey="0">
                                                <Row>
                                                    <Col sm={11} xs={11}>
                                                        Apa itu Big Sight?
                                                    </Col>
                                                    <Col sm={1} xs={1}>
                                                        <FontAwesomeIcon className={styles["Faq-Section1-Accordian-Indicator"]} icon={faPlus} />
                                                    </Col>
                                                </Row>
                                            </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <p className={styles["Faq-Section1-Accordian-Answer"]}>Penyedia solusi big data analytic yang ditawarkan oleh Telkom Indonesia yang dapat digunakan untuk pemerintahan dan perusahaan.</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                        <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                            <CustomToggle eventKey="1">Apa saja Produk dan Solusi dari BigSight?</CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <p className={styles["Faq-Section1-Accordian-Answer"]}>BigSight terdiri dari 6 Produk, untuk lebih lengkapnya bisa mengakses menu “Product”</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                        <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                            <CustomToggle eventKey="2">Bagaimana cara berlangganan atau bekerjasama dengan BigSight?</CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <p className={styles["Faq-Section1-Accordian-Answer"]}>Anda dapat menghubungi Customer Service kami di “Contact Us”</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                        <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                            <CustomToggle eventKey="3">Berapa Harga untuk berlangganan?</CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <p className={styles["Faq-Section1-Accordian-Answer"]}>Untuk Harga bisa menghubungi Customer Service kami atau datang ke Kantor kami di “Contact Us”</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                        <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                            <CustomToggle eventKey="4">Apa Kelebihan dari produk dan solusi dari BigSight?</CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                <p className={styles["Faq-Section1-Accordian-Answer"]}>
                                                    <ul>
                                                        <li>Memberikan solusi untuk pengimplementasian sistem digitalisasi</li>
                                                        <li>Menciptakan data - data yang saling terintegrasi</li>
                                                        <li>Mempersingkat waktu dan biaya operasional</li>
                                                        <li>Mudah untuk digunakan</li>
                                                    </ul>
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                        <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                            <CustomToggle eventKey="5">Bagaimana jenis arsitektur dalam mengimplementasikan Produk dan Solusi dari BigSight?</CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                <p className={styles["Faq-Section1-Accordian-Answer"]}>BigSight menyediakan arsitektur On Premise ataupun On Cloud, untuk informasi lebih lanjut bisa menghubungi di “Contact Us”</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                        <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                            <CustomToggle eventKey="6">Apakah user dapat mengajukan kustomisasi produk atau layanan?</CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="6">
                                            <Card.Body>
                                                <p className={styles["Faq-Section1-Accordian-Answer"]}>Ya</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                        <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                            <CustomToggle eventKey="7">Apakah user dapat mencoba Produk dan Layanan dari BigSight melalui Demo atau Free Trial?</CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                <p className={styles["Faq-Section1-Accordian-Answer"]}>Ya, User dapat menghubungi Customer Service kami di “Contact Us” atau Customer Service Produk dan Layanan terkait.</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default FaqSection1;
