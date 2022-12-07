import { Button, Container, Heading, Text, ThemeUIStyleObject } from "theme-ui";
import { useTheme } from "../ui/theme";

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

export default function Hero() {
    const { theme } = useTheme();

    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            minHeight: "100vh",
	    paddingTop: [0, "2rem"]
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
            <Heading as="h2" color="primary" sx={{
                lineHeight: "100%",
                fontSize: ["2rem", "3rem"]
            }}>
                Free, quality domains for all,<br />backed by a <Text color="pink">nonprofit</Text>
            </Heading>
            <Button as="a" variant="primaryLg" sx={{
                marginTop: ["2rem","3rem"],
                marginLeft: "auto",
                cursor: "pointer"
            }}>
                Go get one →
            </Button>
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
        </Container>
    );
}
