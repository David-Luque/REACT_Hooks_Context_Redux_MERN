import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import useSEO from '../hooks/useSEO';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`;

const TextImage = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63, .75), rgba(34,49,63, .75));
    color: #FFFFFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 4rem;
        margin: 0;

        @media(max-width: 768px) {
            font-size: 3rem;
        }
    }

    p {
        font-size: 2rem;

        @media(max-width: 768px) {
            font-size: 1.6rem;
        }
    }
`;

const ImageHotel = () => {

    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "8.jpg"} ) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                } 
            }
        }
    `)

    //console.log(image.sharp.fluid)

    const seo = useSEO();
    const { fallbackSeo: { title, description } } = seo;

    return (
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn='soft'>
            <TextImage>
                <h1> {title} </h1>
                <p> {description} </p>
            </TextImage>
        </ImageBackground>
    );
}
 
export default ImageHotel;