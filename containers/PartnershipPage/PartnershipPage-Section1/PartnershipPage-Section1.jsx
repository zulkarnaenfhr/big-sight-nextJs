import LogoBigSight from "../../../src/Big-Sight/LogoBigSight-white.png";
import styles from "../PartnershipPage-Section1/PartnershipPage-Section1.module.css";
import Image from "next/image";

export default function PartnershipPageSection1() {
  return (
    <div id={styles["PartnershipPage-Section1"]}>
      <div className={styles["PartnershipPage-Section-Container"]}>
        <div className={styles["PartnershipPage-Section-Container-left"]}>
          <h1
            className={
              styles["PartnershipPage-Section-Container-content-title"]
            }
          >
            Partnership
          </h1>
        </div>
        <div className={styles["PartnershipPage-Section-Container-right"]}>
          <Image
            src={LogoBigSight}
            className={styles["PartnershipPage-Section-Container-content-img"]}
            width={435}
            height={150}
          ></Image>
        </div>
      </div>
    </div>
  );
}
