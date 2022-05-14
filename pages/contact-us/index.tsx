import Head from "next/head";
import BigSightNavbar from "../../containers/Navbar/BigSightNavbar";
import ContactUsSection1 from "../../containers/ContactUs/ContactUs-Section1/ContactUs-Section1";
import "bootstrap/dist/css/bootstrap.min.css";
import BeforeFooterBighSight from "../../containers/Footer/BeforeFooterBighSight";
import FooterBigSight from "../../containers/Footer/Footer";

export default function contactUs() {
    return (
        <div>
            <Head>
                <title>Contact Big Sight</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={"Navbar-Container"}>
                <BigSightNavbar />
            </div>
            <div className={"Content-Container"}>
                <ContactUsSection1 />
                <BeforeFooterBighSight />
                <FooterBigSight />
            </div>
        </div>
    );
}
