import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react'


const Layout = (props) => {
    return (
        <>
            <Global
                styles={ css`
                    html {
                        font-size: 62.5%;
                    }
                    
                    body {
                        font-size: 1.8rem;
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
                ` }
            />
            <Helmet>
                <title>Gatsby hotel</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap" rel="stylesheet"/>
            </Helmet>

            <Header/>
            {props.children}
        </>
    );
}
 
export default Layout;