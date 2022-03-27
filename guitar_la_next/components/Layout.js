import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, page, guitar }) {
    console.log(guitar)
    return (
        <>
            <Head>
                <title>Guitar L.A. - {page}</title>
                <meta name="description" content="Guitars online store" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
            </Head>

            <Header guitar={guitar} />

            {children}

            <Footer />
        </>
    );
}; 

Layout.defaultProps = {
    guitar: null
} 