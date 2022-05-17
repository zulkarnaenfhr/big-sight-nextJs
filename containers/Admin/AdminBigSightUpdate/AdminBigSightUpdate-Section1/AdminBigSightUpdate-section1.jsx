import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../AdminBigSightUpdate-Section1/AdminBigSightUpdate-section1.module.css";
import React from "react";

export default function AdminBigSightUpdateection1() {
  return (
    <div id={styles["AdminBigSightUpdate-Section1"]}>
      <div className={styles["AdminBigSightUpdate-Section1-Container-left"]}>
        {" "}
        <h1 className={styles["AdminBigSightUpdate-Section1-Content-title"]}>
          Berita Saat ini
        </h1>
      </div>
      <div className={styles["AdminBigSightUpdate-Section1-Container-Right"]}>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className={styles["AdminBigSightUpdate-Section1-Right-button-add"]}
        />
      </div>
    </div>
  );
}
