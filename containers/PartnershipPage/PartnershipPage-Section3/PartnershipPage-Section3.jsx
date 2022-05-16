import { LandingPageSection1Button } from "../../../components/Button/LandingPage/ButtonLandingPage.styled";
import styles from "../PartnershipPage-Section3/PartnershipPage-Section3.module.css";
export default function PartnershipPageSection3() {
  return (
    <div id={styles["PartnershipPage-Section3"]}>
      <h1
        className={styles["PartnershipPage-Section3-title"]}
        data-aos="fade-down"
        data-aos-delay="0"
      >{`Let's Try Our PRODUCT`}</h1>
      <h2
        className={styles["PartnershipPage-Section3-desc"]}
        data-aos="fade-down"
        data-aos-delay="300"
      >
        Discover how our products are implemented in real world situations and
        used in various use case through our interactive demo app.
      </h2>
      <LandingPageSection1Button
        className={styles["PartnershipPage-Section3-button"]}
        data-aos="fade-down"
        data-aos-delay="500"
      >
        {" "}
        About Us{" "}
      </LandingPageSection1Button>
    </div>
  );
}
