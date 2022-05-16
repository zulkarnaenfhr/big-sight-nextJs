import React from "react";
import Head from "next/head";
import BigSightNavbar from "../../containers/Navbar/BigSightNavbar";
import BeforeFooter from "../../containers/Footer/BeforeFooterBighSight";
import FooterBigSight from "../../containers/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUsSection1 from "../../containers/AboutUs/AboutUs-Section1/AboutUs-Section1";
import AboutUsSection2 from "../../containers/AboutUs/AboutUs-Section2/AboutUs-Section2";

export default function AboutUs() {
    return (
        <div>
            <Head>
                <title>About Us Big Sight</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>{" "}
            <div className={"Navbar-Container"}>
                <BigSightNavbar />
            </div>
            <div className={"Content-Container"}>
                <AboutUsSection1 />
                <AboutUsSection2 />
                <BeforeFooter />
                <FooterBigSight />
            </div>
        </div>
    );
}
