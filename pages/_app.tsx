import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
            </Head>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
