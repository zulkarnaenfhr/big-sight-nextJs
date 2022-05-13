import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./LandingPage-Section2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function LandingPageSection1() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const {
            carouselState: { currentSlide },
        } = rest;
        return (
            <div className={styles["carousel-button-group"]}>
                {" "}
                <button className={currentSlide === 0 ? styles["disable"] : ""} onClick={() => previous()} id={styles["LandingPage-Section2-button"]}>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>
                <button onClick={() => next()} id={styles["LandingPage-Section2-button"]}>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
            </div>
        );
    };
    return (
        <div id={styles["LandingPage-Section2"]}>
            <Container fluid className="h-100">
                <Row className="h-100">
                    <Col lg={4} className={styles["LandingPage-Section2-Left"]}>
                        <div className={styles["LandingPage-Section2-Left-content-container"]}>
                            <h2>Big Sight Update</h2>
                        </div>
                    </Col>
                    <Col lg={8} className={styles["LandingPage-Section2-right"]}>
                        <div className={styles["LandingPage-Section2-Right-content-container"]}>
                            <Carousel
                                responsive={responsive}
                                additionalTransfrom={0}
                                arrows={false}
                                autoPlaySpeed={3000}
                                centerMode={false}
                                className=""
                                containerClass="container-padding-bottom"
                                customButtonGroup={<ButtonGroup />}
                                dotListClass=""
                                draggable
                                focusOnSelect={false}
                                infinite={false}
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                renderButtonGroupOutside
                                renderDotsOutside={false}
                            >
                                <Card className={styles["LandingPage-Section2-Right-Card"]}>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98bPcGSS7686n0UAytB9AE1TXuRarFOPtZg&usqp=CAU" height={250} />
                                    <Card.Body className={styles["LandingPage-Section2-Right-Card-Body"]}>
                                        <Card.Title className={styles["LandingPage-Section2-Right-Card-Title"]}>#BIGSIGHTUPDATE</Card.Title>
                                        <Card.Text className={styles["LandingPage-Section2-Right-Card-Text"]}>
                                            Melalui BIG SIGHT Telkom Indonesia mengembangkan solusi digital logistik dengan mendigitalisasi proses supply chain secara end-to-end melalui pemanfaatan teknologi terkini.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className={styles["LandingPage-Section2-Right-Card-Footer"]} />
                                </Card>
                                <Card className={styles["LandingPage-Section2-Right-Card"]}>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98bPcGSS7686n0UAytB9AE1TXuRarFOPtZg&usqp=CAU" height={250} />
                                    <Card.Body className={styles["LandingPage-Section2-Right-Card-Body"]}>
                                        <Card.Title className={styles["LandingPage-Section2-Right-Card-Title"]}>#BIGSIGHTUPDATE</Card.Title>
                                        <Card.Text className={styles["LandingPage-Section2-Right-Card-Text"]}>
                                            Melalui BIG SIGHT Telkom Indonesia mengembangkan solusi digital logistik dengan mendigitalisasi proses supply chain secara end-to-end melalui pemanfaatan teknologi terkini.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className={styles["LandingPage-Section2-Right-Card-Footer"]} />
                                </Card>
                                <Card className={styles["LandingPage-Section2-Right-Card"]}>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98bPcGSS7686n0UAytB9AE1TXuRarFOPtZg&usqp=CAU" height={250} />
                                    <Card.Body className={styles["LandingPage-Section2-Right-Card-Body"]}>
                                        <Card.Title className={styles["LandingPage-Section2-Right-Card-Title"]}>#BIGSIGHTUPDATE</Card.Title>
                                        <Card.Text className={styles["LandingPage-Section2-Right-Card-Text"]}>
                                            Melalui BIG SIGHT Telkom Indonesia mengembangkan solusi digital logistik dengan mendigitalisasi proses supply chain secara end-to-end melalui pemanfaatan teknologi terkini.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className={styles["LandingPage-Section2-Right-Card-Footer"]} />
                                </Card>
                                <Card className={styles["LandingPage-Section2-Right-Card"]}>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98bPcGSS7686n0UAytB9AE1TXuRarFOPtZg&usqp=CAU" height={250} />
                                    <Card.Body className={styles["LandingPage-Section2-Right-Card-Body"]}>
                                        <Card.Title className={styles["LandingPage-Section2-Right-Card-Title"]}>#BIGSIGHTUPDATE</Card.Title>
                                        <Card.Text className={styles["LandingPage-Section2-Right-Card-Text"]}>
                                            Melalui BIG SIGHT Telkom Indonesia mengembangkan solusi digital logistik dengan mendigitalisasi proses supply chain secara end-to-end melalui pemanfaatan teknologi terkini.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className={styles["LandingPage-Section2-Right-Card-Footer"]} />
                                </Card>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
