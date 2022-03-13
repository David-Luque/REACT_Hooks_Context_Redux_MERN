import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Image from 'gatsby-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Content = styled.main`
    padding-top: 5rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 4rem;
    }

    p {
        line-height: 2;
    }
`;


const AboutUsContent = () => {
    const response = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: { slug: {eq: "about"} }) {
                nodes {
                    title
                    content
                    image {
                        fluid(maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);  
    
    const { title, content, image } = response.allDatoCmsPage.nodes[0];
    
    
    return ( 
        <>
            <h2
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            > {title} </h2>
            <Content>
                <Image fluid={image.fluid} />
                <p>{content}</p>
            </Content>
        </>
     );
}
 
export default AboutUsContent;