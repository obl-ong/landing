import React from "react";
import { Badge, Box, Container, Heading } from "theme-ui";

const slantHeight = "((150 / 1512) * 100vw)";

export default function SlantedSection(props: {
    bg?: string,
    color?: string,
    chipVariant?: string,
    heading: string,
    chip: string,
    first: boolean,
    children?: React.ReactNode
}) {
    const { bg = "yellow", children, chip, chipVariant = "pink", color = "black", heading, first } = props;
    return (
        <Box sx={{
            position: "relative",
            color
        }}>
            {/*<svg sx={{
                position: "absolute",
                top: "-75px",
                width: "100%",
                height: "150px"
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1512 150" fill="none" preserveAspectRatio="xMidYMax slice">
                <path sx={{
                    fill: bg
                }} d="M1512 0 0 150h1512V0Z"/>
            </svg>*/}
            <Box sx={{
                position: "absolute",
                top: first ? 0 : `calc(-1 * ${slantHeight} / 2)`,
                // width: "0",
                // height: "0",
                borderBottom: "2px solid", // help with what is presumably fp rounding errors
                borderBottomColor: bg
            }}>
                <Box sx={{
                    borderLeft: "solid transparent",
                    borderBottom: "solid",
                    borderBottomColor: bg,
                    // don't ask me how this works
                    borderBottomWidth: `calc${slantHeight}`,
                    borderLeftWidth: "100vw"
                }} />
            </Box>
            {/* I hate that I have to use this many wrapper divs but I'm not sure how to make it fully work otherwise */}
            {/* Have to use padding instead of margin because otherwise the svg positioning breaks */}
            {/* but then if I apply the background color to that element it applies to the padding too */}
            {/* so I have to put it on a child, but I can't put it on the container because then it won't apply to the margins */}
            <Box sx={{ paddingTop: first ? `calc${slantHeight}` : `calc(${slantHeight} / 2)` }}>
                <Box bg={bg}>
                    <Container sx={{
                        position: "relative",
                        top: ["0", null, null, null, "-1.625rem"],
                        paddingTop: ["1rem", null, null, "0"]
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            alignItems: "flex-start"
                        }}>
                            <Badge variant={chipVariant}>{chip}</Badge>
                            <Heading as="h2" variant="sectionHeading">{heading}</Heading>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}