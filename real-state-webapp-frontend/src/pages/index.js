import React from 'react';
import Layout from '../components/layout';
import useHome from '../hooks/useHome';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import * as heroCSS from '../css/hero.module.css';
import Find from '../components/find';

const ImageBackground = styled(BackgroundImage)`
    height: 600px;
`;


const Index = () => {

    const home = useHome();
    const { name, content, image } = home[0];

    return (
        <Layout>
            <ImageBackground
                tag="section"
                fluid={image.localFile.childImageSharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCSS.bgimage}>
                    <h1 className={heroCSS.title}>
                        Exclusive houses and apartments for sale
                    </h1>
                </div>
            </ImageBackground>
            <main>
                <div
                    css={css`
                        max-width: 800px;
                        margin: 0 auto; 
                    `}
                >
                    <h2>{name}</h2>
                    <p
                        css={css`
                            text-align: center;
                        `}
                    >{content}</p>
                </div>
            </main>

            <Find/>
            
        </Layout>
    );
};

export default Index;