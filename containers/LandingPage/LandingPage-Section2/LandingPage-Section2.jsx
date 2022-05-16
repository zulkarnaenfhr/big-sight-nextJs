import { Col, Container, Row, Card } from "react-bootstrap";
// import Carousel from "react-multi-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./LandingPage-Section2.module.css";
import news1 from "../../../src/Big-Sight/LandingPage/news/news1.png";
import news2 from "../../../src/Big-Sight/LandingPage/news/news2.png";
import Image from "next/image";

export default function LandingPageSection1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id={styles["LandingPage-Section2"]}>
      <Container fluid className="h-100" data-aos="fade-left">
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
                    <Image src={news1} alt={"berita 1"} />
                    <Card.Body
                      className={styles["LandingPage-Section2-Right-Card-Body"]}
                    >
                      <Card.Title
                        className={
                          styles["LandingPage-Section2-Right-Card-Title"]
                        }
                      >
                        Penghargaan Innovation Awards
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
                    <Image src={news2} alt={"berita 2"} />

                    <Card.Body
                      className={styles["LandingPage-Section2-Right-Card-Body"]}
                    >
                      <Card.Title
                        className={
                          styles["LandingPage-Section2-Right-Card-Title"]
                        }
                      >
                        Kesepakatan implementasi Legal Analytics dengan
                        Kementerian Sektretariat Negara
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
                    <Image src={news1} alt={"berita 1"} />
                    <Card.Body
                      className={styles["LandingPage-Section2-Right-Card-Body"]}
                    >
                      <Card.Title
                        className={
                          styles["LandingPage-Section2-Right-Card-Title"]
                        }
                      >
                        Penghargaan Innovation Awards
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
                    <Image src={news2} alt={"berita 2"} />

                    <Card.Body
                      className={styles["LandingPage-Section2-Right-Card-Body"]}
                    >
                      <Card.Title
                        className={
                          styles["LandingPage-Section2-Right-Card-Title"]
                        }
                      >
                        Kesepakatan implementasi Legal Analytics dengan
                        Kementerian Sektretariat Negara
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
                    <Image src={news1} alt={"berita 1"} />
                    <Card.Body
                      className={styles["LandingPage-Section2-Right-Card-Body"]}
                    >
                      <Card.Title
                        className={
                          styles["LandingPage-Section2-Right-Card-Title"]
                        }
                      >
                        Penghargaan Innovation Awards
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
                    <Image src={news2} alt={"berita 2"} />

                    <Card.Body
                      className={styles["LandingPage-Section2-Right-Card-Body"]}
                    >
                      <Card.Title
                        className={
                          styles["LandingPage-Section2-Right-Card-Title"]
                        }
                      >
                        Kesepakatan implementasi Legal Analytics dengan
                        Kementerian Sektretariat Negara
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
