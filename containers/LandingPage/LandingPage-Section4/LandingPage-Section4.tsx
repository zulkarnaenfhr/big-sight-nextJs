import styles from "./LandingPage-Section4.module.css";

export default function LandingPageSection4() {
    return (
        <div id={styles["LandingPage-Section4"]}>
            <div className={styles["LandingPage-Section4-Video-Container"]}>
                <div className={styles["LandingPage-Section4-Aspect-Ratio"]}>
                    <iframe
                        className={styles["LandingPage-Section4-Video"]}
                        src="https://www.youtube.com/embed/Em3OpmX4D8U"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
