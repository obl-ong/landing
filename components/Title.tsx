import Head from "next/head";

export default function Title({ children: title }: { children: string }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="og:title" content={title} />
            <meta name="twitter:title" content={title} />
        </Head>
    );
}