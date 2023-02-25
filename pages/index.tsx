import Head from 'next/head'
import Image from 'next/image'
import { Button, Container, Heading, ThemeUIStyleObject, Grid } from "theme-ui";
import { useTheme } from "../ui/theme";
import Footer from "../components/Footer";
import BreakpointIndicator from "../components/BreakpointIndicator";
import Hero from "../sections/Hero";
import Donate from "../sections/Donate";
import Vision from "../sections/Vision";
import HowTo from "../sections/HowTo";
import PoweredBy from "../sections/PoweredBy";

export default function Home() {

    return (
        <>
            {/*<BreakpointIndicator />*/}
            <Head>
                <title>Obl.ong</title>
                {/* seo */}
                <meta name="description" content="Free, quality domains for all, backed by a nonprofit" />
                <meta name="og:title" content="Obl.ong" />
                <meta name="og:description" content="Free, quality domains for all, backed by a nonprofit" />
                <meta name="og:image" content="https://home.obl.ong/img/og-card.png" />
            </Head>
            <Hero />
            <Container>
                <Grid columns={[null, 1, 2]}>
                    <Vision />
                    <HowTo />
                </Grid>
            </Container>
            {/*
            <Vision />
            <HowTo />*/}
            <Donate />
            <PoweredBy />
            <Footer />
        </>
    )
}
