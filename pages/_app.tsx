import '../styles/globals.css';
import "../styles/ui.css";
import type { AppProps } from 'next/app'
import { ThemeProvider } from "theme-ui";
import { theme } from "../ui/theme";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="https://home.obl.ong/img/favicon.png" />
                {/* seo */}
                <meta name="description" content="Free, quality domains for all, backed by a nonprofit" />
                <meta name="og:description" content="Free, quality domains for all, backed by a nonprofit" />
                <meta name="og:image" content="https://home.obl.ong/img/og-card.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Free, quality domains for all, backed by a nonprofit" />
                <meta name="twitter:image" content="https://home.obl.ong/img/og-card.png" />
                <meta name="twitter:image:alt" content="Obl.ong - Free, quality domains for all, backed by a nonprofit" />
            </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
