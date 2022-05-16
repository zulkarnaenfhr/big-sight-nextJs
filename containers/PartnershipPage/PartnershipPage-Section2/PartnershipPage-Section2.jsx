import styles from "../PartnershipPage-Section2/PartnershipPage-Section2.module.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import img_card1 from "../../../src/Big-Sight/Partnership/Higher_Profit_Margin.png";
import img_card2 from "../../../src/Big-Sight/Partnership/Marketing_Kit.png";
import img_card3 from "../../../src/Big-Sight/Partnership/Sales_and_Technical_Enablement.png";
import img_card4 from "../../../src/Big-Sight/Partnership/Featured_on_Website.png";
import img_card5 from "../../../src/Big-Sight/Partnership/Co-marketing.png";
import img_card6 from "../../../src/Big-Sight/Partnership/Sales_and_Technical_Support.png";

export default function PartnershipPageSection1() {
  return (
    <div id={styles["PartnershipPage-Section2"]}>
      <div className={styles["PartnershipPage-Section2-content-container"]}>
        <h3
          className={styles["PartnershipPage-Section2-content-title"]}
          data-aos="fade-down"
          data-aos-delay="0"
        >
          What We Will Gain
        </h3>
        <h4
          className={styles["PartnershipPage-Section2-content-description"]}
          data-aos="fade-down"
          data-aos-delay="0"
        >
          The trust we have earned both from Global and Local institution is
          manifested through Nodeflux Catalyst Platform, here are a few glimpse
          on what you will get:
        </h4>
        <div className={styles["PartnershipPage-Section2-container-partnership"]}>
          <Col
            data-aos="fade-down"
            data-aos-delay="0">
            <div className={styles["PartnershipPage-Section2-partnership-content-container"]}>
              <div className={styles["PartnershipPage-Section2-partnership-content-icon"]}>
                <Image src={img_card1} width={85} height={100}/>
              </div>
              <h1 className={styles["PartnershipPage-Section2-partnership-content-title"]}>
                Higher Profit Margin</h1>
              <h2 className={styles["PartnershipPage-Section2-partnership-content-desc"]}>
                Earn great margin together by robust market penetration
              </h2>
            </div>
          </Col>
           <Col
            data-aos="fade-down"
            data-aos-delay="0">
            <div className={styles["PartnershipPage-Section2-partnership-content-container"]}>
              <div className={styles["PartnershipPage-Section2-partnership-content-icon"]}>
                <Image src={img_card2}   width={100} height={100}/>
              </div>
              <h1 className={styles["PartnershipPage-Section2-partnership-content-title"]}>
                Marketing Kit</h1>
              <h2 className={styles["PartnershipPage-Section2-partnership-content-desc"]}>
                Earn great margin together by robust market penetration
              </h2>
            </div>
          </Col>
           <Col
            data-aos="fade-down"
            data-aos-delay="0">
            <div className={styles["PartnershipPage-Section2-partnership-content-container"]}>
              <div className={styles["PartnershipPage-Section2-partnership-content-icon"]}>
                <Image src={img_card3} width={90} height={100} />
              </div>
              <h1 className={styles["PartnershipPage-Section2-partnership-content-title"]}>
                {`Sales & Technical Enablement`}</h1>
              <h2 className={styles["PartnershipPage-Section2-partnership-content-desc"]}>
                Earn great margin together by robust market penetration
              </h2>
            </div>
          </Col>
          <Col
            data-aos="fade-down"
            data-aos-delay="0">
            <div className={styles["PartnershipPage-Section2-partnership-content-container"]}>
              <div className={styles["PartnershipPage-Section2-partnership-content-icon"]}>
                <Image src={img_card4} width={80} height={100}/>
              </div>
              <h1 className={styles["PartnershipPage-Section2-partnership-content-title"]}>
                Featured on Website</h1>
              <h2 className={styles["PartnershipPage-Section2-partnership-content-desc"]}>
                Earn great margin together by robust market penetration
              </h2>
            </div>
          </Col>

           <Col
            data-aos="fade-down"
            data-aos-delay="0">
            <div className={styles["PartnershipPage-Section2-partnership-content-container"]}>
              <div className={styles["PartnershipPage-Section2-partnership-content-icon"]}>
                <Image src={img_card5}  width={120} height={100} />
              </div>
              <h1 className={styles["PartnershipPage-Section2-partnership-content-title"]}>
                Co-marketing</h1>
              <h2 className={styles["PartnershipPage-Section2-partnership-content-desc"]}>
                As the mission to grow the market together, we would support through co-marketing effort
              </h2>
            </div>
          </Col>
          <Col
            data-aos="fade-down"
            data-aos-delay="0">
            <div className={styles["PartnershipPage-Section2-partnership-content-container"]}>
              <div className={styles["PartnershipPage-Section2-partnership-content-icon"]}>
                <Image src={img_card6}  width={75} height={95} />
              </div>
              <h1 className={styles["PartnershipPage-Section2-partnership-content-title"]}>
                {`Sales & Technical Support`}</h1>
              <h2 className={styles["PartnershipPage-Section2-partnership-content-desc"]}>
                Our team will support you from selling to delivering the solution to the market
              </h2>
            </div>
          </Col>
           
          
          
        </div>
      </div>
    </div>
  );
}
