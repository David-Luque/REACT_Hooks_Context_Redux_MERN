import React from 'react';
import Header from './header';
import Footer from './footer';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react'
import useSEO from '../hooks/useSEO';


const Layout = (props) => {
    
    const seo = useSEO();
    const { siteName, fallbackSeo: { description, title } } = seo;

    return (
        <>
            <Global
                styles={ css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }

                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    
                    body {
                        font-size: 1.5rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }

                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }

                    h1, h2 {
                        font-family: 'Roboto', sans-serif;
                    }

                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title> {title} </title>
                <meta name="description" content={description} />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap" rel="stylesheet"/>
            </Helmet>

            <Header
                siteName={siteName}
            />

                {props.children}
            
            <Footer
                title={title}
                siteName={siteName}
            />
        </>
    );
}
 
export default Layout;