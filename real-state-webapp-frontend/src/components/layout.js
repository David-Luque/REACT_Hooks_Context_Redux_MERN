import React from 'react';
import Helmet from 'react-helmet';

const Layout = ({ children }) => {
    return ( 
        <>
            <Helmet>
                <title>Real state | Gatsby</title>
                <meta name="description" content="Real state website with Gatsby" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>
            
            <h1>Layout</h1>
            
            {children}
        </>
     );
}
 
export default Layout;