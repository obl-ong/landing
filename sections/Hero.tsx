import { Button, Container, Heading, Text, Box, ThemeUIStyleObject } from "theme-ui";
import { useTheme } from "../ui/theme";
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import Script from "next/script";

let MotionButton = motion(Button);
let MotionContainer = motion(Container);


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

const subheadingStyles: ThemeUIStyleObject = {
    lineHeight: "100%",
    fontSize: ["2rem", "2.9rem", "3rem"],
    color: "primary",
    "& br": {
        "@media screen and (max-width: 28rem)": {
            display: "none"
        }
    }
};

const subheadingHtml = "Free, quality domains for all, <br />backed by a <span style='color: var(--theme-ui-colors-pink)'>nonprofit</span>";

export default function Hero() {
    const { theme } = useTheme();

    return (
        <MotionContainer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            minHeight: "95vh",
            marginBottom: "4rem"
            // marginBottom: [0, "4rem"]
        }}>
            <Heading as="h1" sx={{
                fontSize: ["9rem", "12rem", null, "16rem"],
                lineHeight: "95%",
                letterSpacing: "-0.03em",
                fontWeight: "500",
                WebkitTextStroke: `4px ${theme.colors.black}`, // not actually webkit-specific
                fontFamily: '"Telegraf Semibold", sans-serif',
                color: "rgba(255,255,255,0.65)",
                textTransform: "uppercase",
                position: "relative",
                "&::before": ovalStyles
            }}>Obl<br/>ong</Heading>
            <Box sx={{
                position: "relative"
            }}>
                <Heading as="h2" sx={{
                    visibility: "hidden",
                    ...subheadingStyles
                }} dangerouslySetInnerHTML={{
                    __html: subheadingHtml
                }} />
                <Heading as="h2" sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    ...subheadingStyles
                }}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString(subheadingHtml).start();
                        }}
                        options={{ cursor: "", delay: 10 }}
                    />
                </Heading>
            </Box>
            <MotionButton
                as="a"
                //@ts-ignore
                href="https://admin.obl.ong"
                variant="primaryLg"
                sx={{
                    marginTop: ["2rem","3rem"],
                    marginLeft: "auto",
                    cursor: "pointer"
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                }}
                whileHover={{
                    x: 30,
                    transition: { duration: 0.25 }
                }}
                whileTap={{ scale: 0.95 }}
            >
                Claim your domain →
            </MotionButton>
            <Text sx={{
                marginTop: "0.5rem",
                marginLeft: "auto",
                fontSize: "1.25rem",
                fontWeight: 400,
                lineHeight: "100%",
                color: "rgba(245, 245, 245, 0.75)"
            }}>https://<Text sx={{
                fontWeight: 700,
                color: "white"
            }}>yourname</Text>.obl.ong</Text>
        </MotionContainer>
    );
}
