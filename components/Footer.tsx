import { Box, Link, Text } from "theme-ui";

const encoded = "dGVhbUBvYmwub25n";

export default function Footer() {
    return (
        <>
            <footer sx={{
                position: ["inherit", "fixed"],
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                flexDirection: ["column", "row"],
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "0.625rem",
                gap: "0.625rem",
                backgroundColor: "rgba(12,15,10,0.8)",
                fontFamily: "PP Charlevoix Regular, sans-serif",
                color: "rgba(245, 245, 245, 0.8)",
                letterSpacing: "-0.03em",
                lineHeight: "100%",
                "& a": {
                    color: "inherit"
                },
                zIndex: "999"
            }}>
                <Text>
                    {/*Fiscally sponsored by The Hack Foundation. Nonprofit EIN: 81-2908499*/}
                    Built by the community, fiscally sponsored by <Link href="https://the.hackfoundation.org/">The Hack Foundation</Link>.
                </Text>
                <Box sx={{
                    display: "flex",
                    gap: "0.5rem",
                    minWidth: "max-content"
                }}>
                    <Link href="https://github.com/obl-ong">GitHub</Link>
                    <Link href="#" onClick={() => {
                        if (typeof window !== "undefined") {
                            window.open(`mailto:${atob(encoded)}`);
                        }
                    }}>Contact</Link>
                    <Link href="#donate">Donate</Link>
                    <Link href="https://github.com/obl-ong/code-of-conduct">Code of Conduct</Link>
                </Box>
            </footer>
            <Box sx={{ height: "2.25rem", display: ["none", "inherit"] }} />
        </>
    );
}