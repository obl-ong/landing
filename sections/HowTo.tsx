import SlantedSection from "../components/SlantedSection";
import { Heading, Link, Box } from "theme-ui";

export default function HowTo() {
    return (
        <SlantedSection bg="blue" last heading="Easy setup, zero cost" chip="Register your subdomain">
            <ol sx={{
                paddingLeft: 0,
                "& h3": {
                    fontSize: "2rem",
                    fontWeight: "700",
                },
                counterReset: "item",
                "& li::marker": { content: '""' },
                "& li": { display: "flex", position: "relative" },
                "& li > div": {
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    marginBottom: "1.5rem"
                },
                "& li::before": {
                    content: "counter(item)",
                    counterIncrement: "item",
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color: "white",
                    backgroundColor: "pink",
                    borderRadius: "50%",
                    width: "4rem",
                    height: "4rem",
                    minWidth: "4rem",
                    minHeight: "4rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                    zIndex: 2
                },
                "& li:not(:last-child)::after": {
                    // little vertical line that connects the number to the next one
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "1.875rem",
                    width: "0.25rem",
                    height: "100%",
                    backgroundColor: "black"
                }
            }}>
                <li>
                    <Box>
                        <Heading as="h3">
                            <Link color="pink" href="https://github.com/obl-ong">Fork our GitHub repository</Link> and add your site's DNS
                        </Heading>
                        (if you don't know how to do that, the link has instructions!)
                    </Box>
                </li>
                <li>
                    <Box>
                        <Heading as="h3">
                            Tell us what you're building!
                        </Heading>
                        Send in your request and answer a few short questions - won't take more than a minute or two
                    </Box>
                </li>
                <li>
                    <Box>
                        <Heading as="h3">
                            Get your PR merged and enjoy your domain!
                        </Heading>
                        If we aren't backlogged it should only take a day.
                    </Box>
                </li>
            </ol>
        </SlantedSection>
    )
}