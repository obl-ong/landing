import type { Theme, ThemeUIContextValue, ThemeUIStyleObject } from "theme-ui";
import { useThemeUI } from "theme-ui";

const makeTheme = <T extends Theme>(t: T) => t;

const buttonLgBase: ThemeUIStyleObject = {
    paddingY: "1rem",
    paddingX: "1.375rem",
    borderRadius: "100px", // arbitrarily large value
    fontWeight: 400,
    fontSize: "2.625rem",
    letterSpacing: "-0.03em",
    textTransform: "uppercase",
    lineHeight: "100%",
    fontFamily: "body"
};

export const theme = makeTheme({
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
        primaryLg: (theme: any) => ({
            ...buttonLgBase,
            color: theme.colors.black,
            backgroundColor: theme.colors.text
        })
    },
});

export type ExactTheme = typeof theme;
interface ExactContextValue extends Omit<ThemeUIContextValue, "theme"> {
    theme: ExactTheme
}
export const useTheme = (useThemeUI as unknown) as () => ExactContextValue;