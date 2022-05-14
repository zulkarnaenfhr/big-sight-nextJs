import { Col, Container, Row, Card } from "react-bootstrap";
// import Carousel from "react-multi-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./LandingPage-Section2.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowLeftLong,
//   faArrowRightLong,
// } from "@fortawesome/free-solid-svg-icons";

export default function LandingPageSection1() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: styles["button__bar"],
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id={styles["LandingPage-Section2"]}>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col lg={4} className={styles["LandingPage-Section2-Left"]}>
            <div
              className={styles["LandingPage-Section2-Left-content-container"]}
            >
              <h2 className={styles["LandingPage-Section2-Left-content-Title"]}>
                Big Sight Update
              </h2>
            </div>
          </Col>
          <Col lg={8} className={styles["LandingPage-Section2-right"]}>
            <div
              className={styles["LandingPage-Section2-Right-content-container"]}
            >
              <Slider {...settings}>
                <div>
                  <Card className={styles["LandingPage-Section2-Right-Card"]}>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98bPcGSS7686n0UAytB9AE1TXuRarFOPtZg&usqp=CAU"
                      height={250}
                    />
                    <Card.Body
                      className={styles["LandingPage-Section2-Right-Card-Body"]}
                    >
                      <Card.Title
                        className={
                          styles["LandingPage-Section2-Right-Card-Title"]
                        }
                      >
                        #BIGSIGHTUPDATE
                      </Card.Title>
                      <Card.Text
                        className={
                          styles["LandingPage-Section2-Right-Card-Text"]
                        }
                      >
                        Melalui BIG SIGHT Telkom Indonesia mengembangkan solusi
                        digital logistik dengan mendigitalisasi proses supply
                        chain secara end-to-end melalui pemanfaatan teknologi
                        terkini.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer
                      className={
                        styles["LandingPage-Section2-Right-Card-Footer"]
                      }
                    />
                  </Card>
                </div>
                <div>
                  <Card className={styles["LandingPage-Section2-Right-Card"]}>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98bPcGSS7686n0UAytB9AE1TXuRarFOPtZg&usqp=CAU"
                      height={250}
                    />
                    <Card.Body
                      className={styles["LandingPage-Section2-Right-Card-Body"]}
                    >
                      <Card.Title
                        className={
                          styles["LandingPage-Section2-Right-Card-Title"]
                        }
                      >
                        #BIGSIGHTUPDATE
                      </Card.Title>
                      <Card.Text
                        className={
                          styles["LandingPage-Section2-Right-Card-Text"]
                        }
                      >
                        Melalui BIG SIGHT Telkom Indonesia mengembangkan solusi
                        digital logistik dengan mendigitalisasi proses supply
                        chain secara end-to-end melalui pemanfaatan teknologi
                        terkini.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer
                      className={
                        styles["LandingPage-Section2-Right-Card-Footer"]
                      }
                    />
                  </Card>
                </div>
                <div>
                  <Card className={styles["LandingPage-Section2-Right-Card"]}>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98bPcGSS7686n0UAytB9AE1TXuRarFOPtZg&usqp=CAU"
                      height={250}
                    />
                    <Card.Body
                      className={styles["LandingPage-Section2-Right-Card-Body"]}
                    >
                      <Card.Title
                        className={
                          styles["LandingPage-Section2-Right-Card-Title"]
                        }
                      >
                        #BIGSIGHTUPDATE
                      </Card.Title>
                      <Card.Text
                        className={
                          styles["LandingPage-Section2-Right-Card-Text"]
                        }
                      >
                        Melalui BIG SIGHT Telkom Indonesia mengembangkan solusi
                        digital logistik dengan mendigitalisasi proses supply
                        chain secara end-to-end melalui pemanfaatan teknologi
                        terkini.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer
                      className={
                        styles["LandingPage-Section2-Right-Card-Footer"]
                      }
                    />
                  </Card>
                </div>
                <div>
                  <Card className={styles["LandingPage-Section2-Right-Card"]}>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98bPcGSS7686n0UAytB9AE1TXuRarFOPtZg&usqp=CAU"
                      height={250}
                    />
                    <Card.Body
                      className={styles["LandingPage-Section2-Right-Card-Body"]}
                    >
                      <Card.Title
                        className={
                          styles["LandingPage-Section2-Right-Card-Title"]
                        }
                      >
                        #BIGSIGHTUPDATE
                      </Card.Title>
                      <Card.Text
                        className={
                          styles["LandingPage-Section2-Right-Card-Text"]
                        }
                      >
                        Melalui BIG SIGHT Telkom Indonesia mengembangkan solusi
                        digital logistik dengan mendigitalisasi proses supply
                        chain secara end-to-end melalui pemanfaatan teknologi
                        terkini.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer
                      className={
                        styles["LandingPage-Section2-Right-Card-Footer"]
                      }
                    />
                  </Card>
                </div>
                <div>
                  <Card className={styles["LandingPage-Section2-Right-Card"]}>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98bPcGSS7686n0UAytB9AE1TXuRarFOPtZg&usqp=CAU"
                      height={250}
                    />
                    <Card.Body
                      className={styles["LandingPage-Section2-Right-Card-Body"]}
                    >
                      <Card.Title
                        className={
                          styles["LandingPage-Section2-Right-Card-Title"]
                        }
                      >
                        #BIGSIGHTUPDATE
                      </Card.Title>
                      <Card.Text
                        className={
                          styles["LandingPage-Section2-Right-Card-Text"]
                        }
                      >
                        Melalui BIG SIGHT Telkom Indonesia mengembangkan solusi
                        digital logistik dengan mendigitalisasi proses supply
                        chain secara end-to-end melalui pemanfaatan teknologi
                        terkini.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer
                      className={
                        styles["LandingPage-Section2-Right-Card-Footer"]
                      }
                    />
                  </Card>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
