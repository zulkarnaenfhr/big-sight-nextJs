import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import news1 from "../../../../src/Big-Sight/LandingPage/news/news1.png";
import news2 from "../../../../src/Big-Sight/LandingPage/news/news2.png";
import styles from "../AdminBigSightUpdate-Section2/AdminBigSightUpdate-section2.module.css";
import Link from "next/link";
import React from "react";

export default function AdminBigSightUpdateection2() {
  return (
    <div id={styles["AdminBigSightUpdate-Section2"]}>
      <div
        className={styles["AdminBigSightUpdate-Section2-Container"]}
        data-aos="fade-down"
        data-aos-delay="0"
      >
        <div
          className={styles["AdminBigSightUpdate-Section2-Container-content"]}
        >
          <div className={styles["AdminBigSightUpdate-Section2-content-img"]}>
            <Image src={news1} />
          </div>
          <h2 className={styles["AdminBigSightUpdate-Section2-content-title"]}>
            Penghargaan Innovation Awards
          </h2>
          <h3 className={styles["AdminBigSightUpdate-Section2-content-dec"]}>
            Peluang pelanggan dalam melakukan cross sell dan/atau up sell
            sebagai penawaran terhadap pelanggan
          </h3>
          <div>
            <Link href="/update/1">
              <button
                className={
                  styles["AdminBigSightUpdate-Section2-content-button"]
                }
                style={{ marginRight: "20px" }}
              >
                <span style={{ marginRight: "15px" }}>Update</span>{" "}
              </button>
            </Link>
            <Link href="/update/1">
              <button
                className={
                  styles["AdminBigSightUpdate-Section2-content-button"]
                }
              >
                <span>Delete</span>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={styles["AdminBigSightUpdate-Section2-Container"]}
        data-aos="fade-down"
        data-aos-delay="0"
      >
        <div
          className={styles["AdminBigSightUpdate-Section2-Container-content"]}
        >
          <div className={styles["AdminBigSightUpdate-Section2-content-img"]}>
            <Image src={news1} />
          </div>
          <h2 className={styles["AdminBigSightUpdate-Section2-content-title"]}>
            Penghargaan Innovation Awards
          </h2>
          <h3 className={styles["AdminBigSightUpdate-Section2-content-dec"]}>
            Peluang pelanggan dalam melakukan cross sell dan/atau up sell
            sebagai penawaran terhadap pelanggan
          </h3>
          <div>
            <Link href="/notset">
              <button
                className={
                  styles["AdminBigSightUpdate-Section2-content-button"]
                }
                style={{ marginRight: "20px" }}
              >
                <span style={{ marginRight: "15px" }}>Update</span>{" "}
              </button>
            </Link>
            <Link href="/notset">
              <button
                className={
                  styles["AdminBigSightUpdate-Section2-content-button"]
                }
              >
                <span>Delete</span>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
