import React from "react";
import { Badge, Box, Container, Flex, Heading } from "theme-ui";

const slantHeight = "1.5rem";
export default function Card(props: {
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
            color: "white",
            border: "2px solid",
            borderColor: bg,
            borderRadius: "1rem",
            // temp
            // width: "400px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
        }}>
            {/* heading */}
            <Flex sx={{
                padding: "1rem",
                gap: "1rem",
                position: "relative",
                flexDirection: "column",
                alignItems: "flex-start",
                color: "black",
                backgroundColor: bg,
            }}>
                <Badge variant={chipVariant}>{chip}</Badge>
                <Heading as="h2" sx={{
                    fontSize: "3rem",
                    fontWeight: "700",
                    lineHeight: "3rem",
                    zIndex: "2"
                }}>{heading}</Heading>
                <Box sx={{
                    position: "absolute",
                    boxSizing: "border-box",
                    bottom: 0,
                    left: 0,
                    height: "24px",
                    width: "100%",
                    backgroundColor: "bg",
                    // borderBottom: "solid",
                    // borderLeft: "solid transparent",
                    // borderBottomColor: "bg",
                    // borderBottomWidth: "24px",
                    // borderLeftWidth: "100%"
                }}>
                    <svg sx={{
                        width: "100%"
                    }} preserveAspectRatio="none" width="396" height="24" viewBox="0 0 396 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-3.05176e-05 24L396 0H-3.05176e-05V24Z" sx={{
                            fill: bg
                        }}/>
                    </svg>
                </Box>
            </Flex>

            <Box sx={{
                padding: "1rem"
            }}>
                {children}
            </Box>

            {/*<Box sx={{
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
            </Box>*/}
        </Box>
    );
}