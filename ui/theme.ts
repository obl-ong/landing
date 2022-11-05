import type { Theme } from "theme-ui";
import { telegrafBoldFF, telegrafRegularFF } from "./fonts";

export const theme: Theme = {
    fonts: {
        body: `var(${telegrafRegularFF})`,
        heading: `var(${telegrafBoldFF})`,
        monospace: "Menlo, monospace"
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125
    },
    letterSpacings: {
        body: "normal",
        caps: "0.2em"
    },
    colors: {
        text: "#F5F5F5",
        background: "#343434",
        primary: "#41EAD4",
        secondary: "#FF206E",
        accent: "#FBFF12",
        muted: "#0C0F0A",
        highlight: "#FBFF12",
        black: "#0C0F0A"
    },
    styles: {
        root: {
            fontFamily: "body",
            lineHeight: "body",
            fontWeight: "body",
            backgroundColor: "background",
            color: "text",
            "& body": {
                minHeight: "100vh"
            }
        }
    }
};