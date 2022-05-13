import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import BigSightNavbar from "../containers/Navbar/BigSightNavbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BigSightNavbar />

            <Container fluid>
                <h1 className="title">masuasdk</h1>
            </Container>
        </div>
    );
};

export default Home;