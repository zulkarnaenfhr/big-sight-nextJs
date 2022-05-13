import type { NextPage } from "next";
import Head from "next/head";
import LandingPageSection1 from "../containers/LandingPage/LandingPage-Section1/LandingPage-Section1";
import LandingPageSection3 from "../containers/LandingPage/LandingPage-Section3/LandingPage-Section3";
import BigSightNavbar from "../containers/Navbar/BigSightNavbar";
import styles from "./LandingPage.module.css";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles["LandingPage-Navbar-Container"]}>
                <BigSightNavbar />
            </div>
            <div className={styles["LandingPage-Content-Container"]}>
                <LandingPageSection1 />
                <LandingPageSection3 />
            </div>
        </div>
    );
};

export default Home;
