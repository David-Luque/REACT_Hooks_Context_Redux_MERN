import Head from 'next/head';
import Header from './Header';

export default function Layout({ children, page }) {
    return (
        <>
            <Head>
                <title>Guitar L.A. - {page}</title>
                <meta name="description" content="Guitars online store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            {children}
        </>
    );
}; 