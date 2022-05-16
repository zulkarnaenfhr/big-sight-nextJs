import Image from "next/image";
import styles from "./LandingPage-Section8.module.css";

export default function LandingPageSection8() {
    return (
        <div id={styles["LandingPage-Section8"]}>
            <div className={styles["LandingPage-Section8-Text-Container"]}>
                <div>
                    <h1 className={styles["LandingPage-Section8-Title"]} data-aos="fade-up" data-aos-delay="0">
                        Embark Your AI Journey with BIG SIGHT Now!
                    </h1>
                    <div className={styles["LandingPage-Section8-Button-Container"]}>
                        <button className={styles["LandingPage-Section8-Button"]} data-aos="fade-up" data-aos-delay="0">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles["LandingPage-Section8-Background-Container"]}>
                <div className={styles["LandingPage-Section8-Background1-Container"]} data-aos="fade-left" data-aos-delay="0">
                    <div className={styles["LandingPage-Section8-Background1-Container-Wrapper"]}>
                        <Image src={require("../../../src/Big-Sight/LandingPage/Section8-Background.png")} />
                    </div>
                </div>
                <div className={styles["LandingPage-Section8-Background2-Container"]} data-aos="fade-up" data-aos-delay="400">
                    <div className={styles["LandingPage-Section8-Background2-Container-Wrapper"]}>
                        <Image src={require("../../../src/Big-Sight/LandingPage/Section8-Background2.png")} />
                    </div>
                </div>
            </div>
        </div>
    );
}
