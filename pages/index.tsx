import Head from 'next/head'
import Image from 'next/image'
import { Button, Container, Heading, ThemeUIStyleObject } from "theme-ui";
import { useTheme } from "../ui/theme";
import Footer from "../components/Footer";
import BreakpointIndicator from "../components/BreakpointIndicator";
import Hero from "../sections/Hero";
import Donate from "../sections/Donate";
import Vision from "../sections/Vision";

export default function Home() {

    return (
        <>
            <BreakpointIndicator />
            <Head>
                <title>Obl.ong</title>
            </Head>
            <Hero />
            <Vision />
            <Donate />
            <Footer />
        </>
    )
}
