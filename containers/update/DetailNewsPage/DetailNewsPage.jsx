import React from "react";
import styles from "../DetailNewsPage/DetailNewsPage.module.css";
import Image from "next/image";
import news1 from "../../../src/Big-Sight/LandingPage/news/news1.png";

export default function DetailNewsPage() {
  return (
    <div id={styles["DetailNewsPage"]}>
      <div className={styles["DetailNEwsPage-content-img"]}>
        <Image src={news1} />
      </div>
      <h1 className={styles["DetailNEwsPage-content-title"]}>
        Penghargaan Innovation Awards
      </h1>
      <h2 className={styles["DetailNEwsPage-content-desc"]}>
        Peluang pelanggan dalam melakukan cross sell dan/atau up sell sebagai
        penawaran terhadap pelanggan
      </h2>
    </div>
  );
}
