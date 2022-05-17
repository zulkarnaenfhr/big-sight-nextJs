import React, { Component } from "react";
import { Col, Row, SSRProvider } from "react-bootstrap";
import CardBigSightLandingPage from "../../../components/Card/LandingPage/CardBigSightLandingPage";
import styles from "./LandingPage-Section5.module.css";

class LandingPageSection5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: "",
        };
    }
    componentDidMount() {
        this.setState({
            width: window.innerWidth,
        });
    }
    render() {
        return (
            <div id={styles["LandingPage-Section5"]}>
                <SSRProvider>
                    <h1 className={styles["LandingPage-Section5-Title"]}> JELAJAHI PRODUK KAMI</h1>
                    <Row className={styles["LandingPage-Section5-AllCard-Container"]}>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-right" : this.state.width > 576 ? "fade-right" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-Legal-Analytic.png")}
                                        marginTopDesc={"49px"}
                                        marginTop={"37px"}
                                        marginLeft={"42px"}
                                        width={"119px"}
                                        height={"54px"}
                                        productName={`Legal Analytics `}
                                        productDesc={`merupakan aplikasi berbasis Big data yang menghimpun seluruh peraturan perundang - undangan yang  tersistem secara  akurat, valid, dan up-to-date sehingga memudahkan para pengguna
                                `}
                                        linkProduct={`https://legalanalytics.id/`}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-up" : this.state.width > 576 ? "fade-left" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-Big-View.png")}
                                        marginTopDesc={"38px"}
                                        marginTop={"26px"}
                                        marginLeft={"11px"}
                                        width={"223px"}
                                        height={"76px"}
                                        productName={`Big View `}
                                        productDesc={`merupakan layanan yang mengintegrasikan dashboard dalam sistem pemerintahan yang berfungsi untuk menggabungkan data dari berbagai aplikasi vertikal di pemerintahan ke dalam sebuah platform yang terintegrasi`}
                                        linkProduct={`notset`}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-left" : this.state.width > 576 ? "fade-right" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-Picaso.png")}
                                        marginTopDesc={"26px"}
                                        marginTop={"27px"}
                                        marginLeft={""}
                                        width={"233px"}
                                        height={"78px"}
                                        productName={`Picaso `}
                                        productDesc={`merupakan layanan Application Programming Interface yang membantu para Developer dan Perusahaan dalam mengimplementasikan teknologi Artificial Intelligence, melalui produk dan layanan Optical Character Recognition, Face Recognition, dan Object Detection`}
                                        linkProduct={`https://picaso.id/`}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-right" : this.state.width > 576 ? "fade-left" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-Big-Score.png")}
                                        marginTopDesc={"21px"}
                                        marginTop={"55px"}
                                        marginLeft={"44px"}
                                        width={"169px"}
                                        height={"39px"}
                                        productName={`Big Score `}
                                        productDesc={`merupakan API-as-a-service yang membantu klien dalam meminimalisir kegagalan kredit melalui hasil skoring dari profil calon nasabah.
`}
                                        linkProduct={`http://bigscore.id/`}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-up" : this.state.width > 576 ? "fade-right" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-Big-Box.png")}
                                        marginTopDesc={"25px"}
                                        marginTop={"43px"}
                                        marginLeft={"42px"}
                                        width={"144px"}
                                        height={"46px"}
                                        productName={`Big Box `}
                                        productDesc={`merupakan penyedia layanan yang dapat mewujudkan pengalaman pengguna yang lebih imersif melalui pengembangan konten Virtual Reality (VR) dan Augmented Reality (AR) sesuai kebutuhan industri`}
                                        linkProduct={`https://bigbox.co.id/`}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-left" : this.state.width > 576 ? "fade-left" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-SmartEye.png")}
                                        marginTopDesc={"29px"}
                                        marginTop={"43px"}
                                        marginLeft={"31px"}
                                        width={"209px"}
                                        height={"46px"}
                                        productName={`Smarteye.id `}
                                        productDesc={`merupakan platform Big Data End-to-End untuk membantu pengambilan keputusan sesuai dengan kebutuhan operasional dan bisnis perusahaan secara on premise, on hybrid, maupun on cloud`}
                                        linkProduct={`https://www.smarteye.id/`}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SSRProvider>
            </div>
        );
    }
}

export default LandingPageSection5;
