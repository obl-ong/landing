import React from "react";
import { Badge, Box, Container, Heading } from "theme-ui";

const slantHeight = "((150 / 1512) * 100vw)";

export default function SlantedSection(props: {
    bg?: string,
    color?: string,
    chipVariant?: string,
    heading: string,
    chip: string,
    first?: boolean,
    last?: boolean,
    children?: React.ReactNode
}) {
    const { bg = "yellow", children, chip, chipVariant = "pink", color = "black", heading, first, last } = props;
    return (
        <Box sx={{
            position: "relative",
            color
        }}>
            <Box sx={{
                position: "absolute",
                top: first ? 0 : `calc(-1 * ${slantHeight} / 2)`,
                borderBottom: "2px solid", // help with what is presumably fp rounding errors
                borderBottomColor: bg,
                pointerEvents: "none"
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
                        paddingTop: ["1rem", null, null, "0"],
                        paddingBottom: !last && `calc${slantHeight}`,
                        marginBottom: !last && `calc(-1 * ${slantHeight})`
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            alignItems: "flex-start"
                        }}>
                            <Badge variant={chipVariant}>{chip}</Badge>
                            <Heading as="h2" variant="sectionHeading" sx={{
                                paddingBottom: "1rem"
                            }}>{heading}</Heading>
                            {children}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}