import styles from "./BigSightNavbar.module.css";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import LogoBigSight from "../../src/Big-Sight/LogoBigSight.png";
import { NavbarButton } from "../../components/Button/Navbar/NavbarButton.styled";

export default function BigSightNavbar() {
    return (
        <div data-aos="fade-down" data-aos-duration="1000">
            <Navbar className={styles.NavbarBigSight} expand="lg">
                <Container>
                    <Link href="/" passHref>
                        <Navbar.Brand className={styles.BigSightNavbarLogo}>
                            <Image src={LogoBigSight} />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                            <NavDropdown className={`${styles.BigSightNavbarMenuMarginLeft} ${styles.DropdownProduct}`} title={<span className={`${styles.BigSightNavbarMenuDropdown}`}>Product</span>} id="navbarScrollingDropdown">
                                <div className={styles["dropdown-menu-width"]}>
                                    <Row className={`${styles.rowDropDown} container`}>
                                        <Col xs={7}>
                                            <Link href={"/notset"}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Picaso</p>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link href={"/notset"}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Big View</p>
                                                </div>
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Row className={`${styles.rowDropDown} container`}>
                                        <Col xs={7}>
                                            <Link href={"/notset"}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Smarteye</p>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link href={"/notset"}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Big Box</p>
                                                </div>
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Row className={`${styles.rowDropDown} container`}>
                                        <Col xs={7}>
                                            <Link href={"/notset"}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Legal Analytics</p>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link href={"/notset"}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Big Score</p>
                                                </div>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </NavDropdown>
                            <Link href="/solution" passHref>
                                <Nav.Link className={styles.BigSightNavbarMenuMarginLeft}>
                                    <p className={styles.BigSightNavbarMenu}>Solutions</p>
                                </Nav.Link>
                            </Link>
                            <Link href="/partnership" passHref>
                                <Nav.Link className={styles.BigSightNavbarMenuMarginLeft}>
                                    <p className={styles.BigSightNavbarMenu}>Partnership</p>
                                </Nav.Link>
                            </Link>
                            <NavDropdown className={styles.BigSightNavbarMenuMarginLeft} title={<span className={styles.BigSightNavbarMenuDropdown}>Company</span>} id="navbarScrollingDropdown">
                                <Link href="/about-us" passHref>
                                    <NavDropdown.Item className={styles["dropdown-item"]}>
                                        {""}
                                        <p className={styles["BigSightDropDown-Menu1"]}>About Us</p>{" "}
                                    </NavDropdown.Item>
                                </Link>
                                <Link href="/blog" passHref>
                                    <NavDropdown.Item className={styles["dropdown-item"]}>
                                        {" "}
                                        <p className={styles["BigSightDropDown-Menu1"]}>Blog</p>{" "}
                                    </NavDropdown.Item>
                                </Link>{" "}
                                <Link href="/press" passHref>
                                    <NavDropdown.Item className={styles["dropdown-item"]}>
                                        {" "}
                                        <p className={styles["BigSightDropDown-Menu1"]}>Press</p>{" "}
                                    </NavDropdown.Item>
                                </Link>{" "}
                            </NavDropdown>
                            <Link href="/faq" passHref>
                                <Nav.Link className={styles.BigSightNavbarMenuMarginLeft}>
                                    <p className={styles.BigSightNavbarMenu}>faq</p>
                                </Nav.Link>
                            </Link>
                            <Row className={styles["NavbarButton-Container"]}>
                                <Link passHref href={"/notset"}>
                                    <NavbarButton backgroundColor={"#EE2E24"} border={"1px solid #EE2E24"} color={"white"} hoverBackgroundColor={"white"} hoverBorder={"1px solid #EE2E24"} hoverColor={"#EE2E24"}>
                                        Contact Us{" "}
                                    </NavbarButton>
                                </Link>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>{" "}
        </div>
    );
}
