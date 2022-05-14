import LogoBigSight from "../../../src/Big-Sight/LogoBigSight.png";
import Image from "next/image";
import styles from "../PartnershipPage-Section1/PartnershipPage-Section1.module.css";

export default function PartnershipPageSection1() {
  return (
    <div id={styles["PartnershipPage-Section1"]} style={{ height: "430px" }}>
      <div className={styles["PartnershipPage-Section1-content-container"]}>
        <div className={styles["logo-bigsight"]}>
          <Image src={LogoBigSight} />
        </div>
        <div className={styles["PartnershipPage-Section1-content"]}>
          <h1 className={styles["PartnershipPage-Section1-content-tittle"]}>
            Partenership
          </h1>
          <h2 className={styles["PartnershipPage-Section1-content-text"]}>
            A PLATFORM AIMED TO GROW THE AI ECOSYSTEM IN INDONESIA
          </h2>
        </div>
      </div>
    </div>
  );
}
