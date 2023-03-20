import Head from 'next/head'
import { Container, Grid } from "theme-ui";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import Donate from "../sections/Donate";
import Vision from "../sections/Vision";
import HowTo from "../sections/HowTo";
import PoweredBy from "../sections/PoweredBy";
import { motion } from "framer-motion"
import Title from '../components/Title';

let MotionContainer = motion(Container);


export default function Home() {

    return (
        <>
            {/*<BreakpointIndicator />*/}
            <Title>Obl.ong</Title>
            <Head>
                <meta name="google-site-verification" content="j7mOHwH-xmMSAc5dbkIBhQmr9hV3zbzOj5qXJmY_px8" />
		<link href="https://social.dino.icu/@oblong" rel="me" />
            </Head>
            <Hero />
            <MotionContainer 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
	            transition={{  length: 0.1 }}
                viewport={{ once: true }}
  	        >
                <Grid columns={[null, 1, 2]}>
                    <Vision />
                    <HowTo />
                </Grid>
            </MotionContainer>
            <Donate />
            <PoweredBy />
            <Footer />
        </>
    )
}
