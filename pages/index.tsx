import Head from 'next/head'
import Image from 'next/image'
import { Button, Container, Heading, ThemeUIStyleObject } from "theme-ui";
import { useTheme } from "../ui/theme";
import Footer from "../components/Footer";
import BreakpointIndicator from "../components/BreakpointIndicator";

const ovalStyles: ThemeUIStyleObject = {
    content: '""',
    backgroundColor: "secondary",
    border: "0.5625rem solid",
    borderColor: "black",
    borderRadius: "50%",
    position: "absolute",
    top: "-1.1rem",
    left: "-11rem",
    width: "407px",
    height: "176px",
    zIndex: -1
};

export default function Home() {
    const { theme } = useTheme();

    return (
        <>
            <BreakpointIndicator />
            <div>
                <Head>
                    <title>Obl.ong</title>
                </Head>
                <Container sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    minHeight: "100vh"
                }}>
                    <Heading as="h1" sx={{
                        fontSize: ["9rem", "12rem", null, "16rem"],
                        lineHeight: "95%",
                        letterSpacing: "-0.03em",
                        fontWeight: "500",
                        "-webkit-text-stroke": `4px ${theme.colors.black}`, // not actually webkit-specific
                        fontFamily: '"Telegraf Semibold", sans-serif',
                        color: "rgba(255,255,255,0.65)",
                        textTransform: "uppercase",
                        position: "relative",
                        "&::before": ovalStyles
                    }}>Obl<br/>ong</Heading>
                    <Heading as="h2" color="primary" sx={{
                        lineHeight: "100%",
                        fontSize: ["2rem", "3rem"],
                        textTransform: "uppercase"
                    }}>
                        Free, quality domains for all
                    </Heading>
                    <Button as="a" variant="primaryLg" sx={{
                        marginTop: ["2rem","3rem"],
                        marginLeft: "auto",
                        cursor: "pointer"
                    }}>
                        Go get one →
                    </Button>
                </Container>
            </div>
            <Footer />
        </>
    )
}
