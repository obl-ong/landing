import type { Theme, ThemeUIContextValue, ThemeUICSSObject, ThemeUIStyleObject } from "theme-ui";
import { useThemeUI } from "theme-ui";

const makeTheme = <T extends Theme>(t: T) => t;

const makeTransition = (...properties: string[]) => properties.map(p => `${p} 0.2s ease-in-out`).join(", ");
const defaultTransition = makeTransition("box-shadow", "border-color", "background-color", "color", "outline");

const colors = {
    white: "#F5F5F5",
    bg: "#343434",
    blue: "#41EAD4",
    pink: "#FF206E",
    yellow: "#FBFF12",
    black: "#0C0F0A",
};

const buttonLgBase: ThemeUIStyleObject = {
    paddingY: "1rem",
    paddingX: "1.375rem",
    borderRadius: "100px", // arbitrarily large value
    fontWeight: 400,
    fontSize: "2.625rem",
    letterSpacing: "-0.03em",
    // textTransform: "uppercase",
    lineHeight: "100%",
    fontFamily: "body"
};

const focusStyle = (color: string) => ({
    outline: "none",
    borderColor: color,
    boxShadow: "0 0 0 3px rgba(65, 234, 212, 0.5)" // thanks copilot
})

const buttonMdFactory = (text: string, bg: string): ThemeUICSSObject => ({
    border: "1px solid",
    borderColor: "black",
    color: text,
    backgroundColor: bg,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem 0.625rem",
    borderRadius: "100px",
    fontSize: "1.5rem",
    lineHeight: "100%",
    "&:focus": focusStyle(bg),
    transition: defaultTransition,
    fontFamily: "body"
});

const badgeFactory = (text: string, bg: string): ThemeUICSSObject => ({
    padding: "0.5rem 0.6875rem",
    borderRadius: "100px",
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "flex-start",
    backgroundColor: bg,
    color: text,
    fontSize: "1.25rem",
    lineHeight: "100%",
    fontWeight: 400,
    fontFamily: "body",
    textTransform: "uppercase"
})

export const theme = makeTheme({
    breakpoints: ["40em", "52em", "64em", "100em"],
    fonts: {
        body: "Telegraf, sans-serif",
        heading: "Telegraf, sans-serif",
        monospace: "Menlo, monospace"
    },
    fontSizes: [16, 20, 24, 32, 48, 64, 72],
    fontWeights: {
        body: 400,
        heading: 400,
        bold: 500
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125
    },
    letterSpacings: {
        body: "normal",
        // caps: "0.2em"
    },
    colors: {
        text: colors.white,
        background: colors.bg,
        primary: colors.blue,
        secondary: colors.pink,
        accent: colors.yellow,
        muted: colors.black,
        highlight: colors.yellow,
        ...colors
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
    },
    sizes: {
        container: 820
    },
    layout: {
        container: (theme: any) => ({
            maxWidth: `min(calc(100vw - 2.5rem), ${theme.sizes.container}px)`,
        })
    },
    buttons: {
        primaryLg: {
            ...buttonLgBase,
            color: colors.black,
            backgroundColor: colors.white
        },
        whiteMd: buttonMdFactory(colors.black, colors.white),
        blueMd: buttonMdFactory(colors.black, colors.blue),
        pinkMd: buttonMdFactory(colors.white, colors.pink),
        yellowMd: buttonMdFactory(colors.black, colors.yellow),
    },
    forms: {
        input: {
            backgroundColor: "text",
            color: "black",
            border: "1px solid",
            borderColor: "black",
            borderRadius: "0.5rem",
            padding: "0.625rem 1rem",
            display: "flex",
            alignItems: "flex-start",
            fontSize: "1rem",
            lineHeight: "100%",
            // placeholder color
            "&::placeholder": {
                color: "#686868"
            },
            transition: defaultTransition,
            "&:focus": focusStyle(colors.blue),
            fontFamily: "body"
        },
        label: {
            color: "text",
            fontSize: "1rem",
            lineHeight: "100%",
            marginBottom: "0.25rem",
        }
    },
    badges: {
        white: badgeFactory(colors.black, colors.white),
        blue: badgeFactory(colors.black, colors.blue),
        pink: badgeFactory(colors.white, colors.pink),
        yellow: badgeFactory(colors.black, colors.yellow)
    },
    text: {
        sectionHeading: {
            fontWeight: 700,
            fontSize: ["3rem", null, "4rem"],
            lineHeight: "100%"
        }
    }
});

export type ExactTheme = typeof theme;
interface ExactContextValue extends Omit<ThemeUIContextValue, "theme"> {
    theme: ExactTheme
}
export const useTheme = (useThemeUI as unknown) as () => ExactContextValue;