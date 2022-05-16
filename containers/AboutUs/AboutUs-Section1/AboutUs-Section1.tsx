import React from "react";
import styles from "./AboutUs-Section1.module.css";

export default function AboutUsSection1() {
    return (
        <div id={styles["AboutUs-Section1"]}>
            <div className={styles["AboutUs-Section1-Content-Container"]}>
                <h1 className={styles["AboutUs-Section1-Title"]}>About Us</h1>
            </div>
        </div>
    );
}
