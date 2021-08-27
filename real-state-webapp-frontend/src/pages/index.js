import React from 'react';
import Layout from '../components/layout';
import useHome from '../hooks/useHome';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
    height: 600px;
`;


const Index = () => {

    const home = useHome();
    const { name, content, image } = home[0];
    console.log(image)

    return (
        <Layout>
            <ImageBackground
                tag="section"
                fluid={image.sharp.fluid}
                fadeIn="soft"
            >
                <div>
                    <h1>
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
            
        </Layout>
    );
};

export default Index;