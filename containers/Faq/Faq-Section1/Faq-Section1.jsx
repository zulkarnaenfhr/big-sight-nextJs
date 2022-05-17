import { Col, Container, Row, Accordion, Card, useAccordionButton, Button } from "react-bootstrap";
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

    handleClick = (event) => {
        console.log(event);
    };

    render() {
        return (
            <div id={styles["Faq-Section1"]}>
                <Container>
                    <div className={styles["Faq-Section1-Content-Container"]}>
                        <Row>
                            <Col className={styles["Faq-Section1-Left-Column"]} lg={3}>
                                <h1 className={styles["Faq-Section1-Title"]}>FAQ</h1>
                            </Col>
                            <Col className={styles["Faq-Section1-Right-Column"]} lg={9}>
                                <Accordion defaultActiveKey="11">
                                    <div data-aos="fade-left">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick} name="maman">
                                                    <CustomToggle eventKey="0">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                Apa itu Big Sight?
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon icon={faPlus} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>Penyedia solusi big data analytic yang ditawarkan oleh Telkom Indonesia yang dapat digunakan untuk pemerintahan dan perusahaan.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="100">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <CustomToggle eventKey="1">
                                                    <Row>
                                                        <Col sm={11} xs={11}>
                                                            Apa saja Produk dan Solusi dari BigSight?
                                                        </Col>
                                                        <Col sm={1} xs={1}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Col>
                                                    </Row>
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>BigSight terdiri dari 6 Produk, untuk lebih lengkapnya bisa mengakses menu “Product”</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="200">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <CustomToggle eventKey="2">
                                                    <Row>
                                                        <Col sm={11} xs={11}>
                                                            Bagaimana cara berlangganan atau bekerjasama dengan BigSight?{" "}
                                                        </Col>
                                                        <Col sm={1} xs={1}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Col>
                                                    </Row>
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>Anda dapat menghubungi Customer Service kami di “Contact Us”</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="300">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <CustomToggle eventKey="3">
                                                    <Row>
                                                        <Col sm={11} xs={11}>
                                                            Berapa Harga untuk berlangganan?
                                                        </Col>
                                                        <Col sm={1} xs={1}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Col>
                                                    </Row>
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>Untuk Harga bisa menghubungi Customer Service kami atau datang ke Kantor kami di “Contact Us”</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="400">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <CustomToggle eventKey="4">
                                                    <Row>
                                                        <Col sm={11} xs={11}>
                                                            Apa Kelebihan dari produk dan solusi dari BigSight?
                                                        </Col>
                                                        <Col sm={1} xs={1}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Col>
                                                    </Row>
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="4">
                                                <Card.Body>
                                                    <div className={styles["Faq-Section1-Accordian-Answer"]}>
                                                        <ul>
                                                            <li>Memberikan solusi untuk pengimplementasian sistem digitalisasi</li>
                                                            <li>Menciptakan data - data yang saling terintegrasi</li>
                                                            <li>Mempersingkat waktu dan biaya operasional</li>
                                                            <li>Mudah untuk digunakan</li>
                                                        </ul>
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="0">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <CustomToggle eventKey="5">
                                                    <Row>
                                                        <Col sm={11} xs={11}>
                                                            Bagaimana jenis arsitektur dalam mengimplementasikan Produk dan Solusi dari BigSight?
                                                        </Col>
                                                        <Col sm={1} xs={1}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Col>
                                                    </Row>
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="5">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>BigSight menyediakan arsitektur On Premise ataupun On Cloud, untuk informasi lebih lanjut bisa menghubungi di “Contact Us”</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="0">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <CustomToggle eventKey="6">
                                                    <Row>
                                                        <Col sm={11} xs={11}>
                                                            Apakah user dapat mengajukan kustomisasi produk atau layanan?
                                                        </Col>
                                                        <Col sm={1} xs={1}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Col>
                                                    </Row>
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="6">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>Ya</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="0">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <CustomToggle eventKey="7">
                                                    <Row>
                                                        <Col sm={11} xs={11}>
                                                            Apakah user dapat mencoba Produk dan Layanan dari BigSight melalui Demo atau Free Trial?
                                                        </Col>
                                                        <Col sm={1} xs={1}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Col>
                                                    </Row>{" "}
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="7">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>Ya, User dapat menghubungi Customer Service kami di “Contact Us” atau Customer Service Produk dan Layanan terkait.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>
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
