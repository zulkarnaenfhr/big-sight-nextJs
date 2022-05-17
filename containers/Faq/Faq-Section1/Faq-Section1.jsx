import { Col, Container, Row, Accordion, Card, useAccordionButton, Button } from "react-bootstrap";
import styles from "./Faq-Section1.module.css";
import React, { Component } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
            faq1: false,
            faq2: false,
            faq3: false,
            faq4: false,
            faq5: false,
            faq6: false,
            faq7: false,
            faq8: false,
            faq9: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        if (e.target.innerHTML === "1. Apa itu Big Sight?") {
            this.setState({
                faq1: !this.state.faq1,
            });
            console.log(this.state.statusFaq);
        } else if (e.target.innerHTML === "2. Apa saja Produk dan Solusi dari BigSight?") {
            this.setState({
                faq2: !this.state.faq2,
            });
            console.log(this.state.statusFaq);
        } else if (e.target.innerHTML === "3. Bagaimana cara berlangganan atau bekerjasama dengan BigSight?") {
            this.setState({
                faq3: !this.state.faq3,
            });
        } else if (e.target.innerHTML === "4. Berapa Harga untuk berlangganan?") {
            this.setState({
                faq4: !this.state.faq4,
            });
        } else if (e.target.innerHTML === "5. Apa Kelebihan dari produk dan solusi dari BigSight?") {
            this.setState({
                faq5: !this.state.faq5,
            });
            console.log(this.state.statusFaq);
        } else if (e.target.innerHTML === "6. Bagaimana jenis arsitektur dalam mengimplementasikan Produk dan Solusi dari BigSight?") {
            this.setState({
                faq6: !this.state.faq6,
            });
        } else if (e.target.innerHTML === "7. Apakah user dapat mengajukan kustomisasi produk atau layanan?") {
            this.setState({
                faq7: !this.state.faq7,
            });
        } else if (e.target.innerHTML === "8. Apakah user dapat mencoba Produk dan Layanan dari BigSight melalui Demo atau Free Trial?") {
            this.setState({
                faq8: !this.state.faq8,
            });
        }
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
                                <Accordion defaultActiveKey="11" alwaysOpen>
                                    <div data-aos="fade-left">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="0">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                1. Apa itu Big Sight?
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq1 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
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
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="1">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                2. Apa saja Produk dan Solusi dari BigSight?
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon icon={faPlus} className={this.state.faq2 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>BigSight terdiri dari 6 Produk, untuk lebih lengkapnya bisa mengakses Navbar “Product”</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="200">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="2">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                3. Bagaimana cara berlangganan atau bekerjasama dengan BigSight?
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq3 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>
                                                        Anda dapat menghubungi Customer Service kami di{" "}
                                                        <Link href="/contact-us" passhref>
                                                            <a className={styles["Faq-Section1-Accordian-Link"]}>“Contact Us”</a>
                                                        </Link>{" "}
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="300">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="3">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                4. Berapa Harga untuk berlangganan?
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon icon={faPlus} className={this.state.faq4 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>
                                                        Untuk Harga bisa menghubungi Customer Service kami atau datang ke Kantor kami di{" "}
                                                        <Link href="/contact-us" passhref>
                                                            <a className={styles["Faq-Section1-Accordian-Link"]}>“Contact Us”</a>
                                                        </Link>{" "}
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="400">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="4">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                5. Apa Kelebihan dari produk dan solusi dari BigSight?
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq5 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
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
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="5">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                6. Bagaimana jenis arsitektur dalam mengimplementasikan Produk dan Solusi dari BigSight?
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq6 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="5">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>
                                                        BigSight menyediakan arsitektur On Premise ataupun On Cloud, untuk informasi lebih lanjut bisa menghubungi di{" "}
                                                        <Link href="/contact-us" passhref>
                                                            <a className={styles["Faq-Section1-Accordian-Link"]}>“Contact Us”</a>
                                                        </Link>{" "}
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="0">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="6">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                7. Apakah user dapat mengajukan kustomisasi produk atau layanan?
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq7 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
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
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="7">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                8. Apakah user dapat mencoba Produk dan Layanan dari BigSight melalui Demo atau Free Trial?
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq8 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
                                                            </Col>
                                                        </Row>{" "}
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="7">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>
                                                        Ya, User dapat menghubungi Customer Service kami di{" "}
                                                        <Link href="/contact-us" passhref>
                                                            <a className={styles["Faq-Section1-Accordian-Link"]}>“Contact Us”</a>
                                                        </Link>{" "}
                                                    q    atau Customer Service Produk dan Layanan terkait.
                                                    </p>
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
