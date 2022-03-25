import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core'
import Image from 'gatsby-image';
import Icons from './icons';
import Layout from './layout';
import { graphql } from 'gatsby';

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
    .price {
        font-size: 2rem;
        color: #75AB00;
    }

    .realtor {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #FFF;

        p {
            margin: 0;
        }
    }
`;

//"useStaticQuery" se ejecuta conforme se va generando el contenido, pero en este caso se generan en gatsby node, por eso solo usamos "graphql"
export const query = graphql` 
    query($id: String!) {
        allStrapiProperties (filter: { id: { eq: $id } }) {
            edges {
                node {
                    name
                    description
                    wc
                    rooms
                    parking
                    price
                    realtor {
                        name
                        email
                        phone
                    }
                    image {
                        localFile {
                            sharp: childImageSharp {
                                fluid (maxWidth: 1200) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Properties = ({ data: { allStrapiProperties: { edges } } }) => { // => the result of request above is automatically passed to the component throught "data" variable
    //console.log(edges)
    const { node: { 
        name,
        description,
        wc,
        parking,
        rooms,
        realtor,
        image,
        price
     } } = edges[0]
    //console.log(image)
    
    return ( 
        <Layout>
            <h1
                css={css`
                    magin: 3rem auto 2rem auto;
                `}
            > {name}</h1>
            
            <Content>
                <main>
                    <Image fluid={image.localFile.sharp.fluid} />
                    <p>{description}</p>
                </main>
                <Sidebar>
                    <p className="price" >$ {price}</p>
                    <Icons 
                        wc={wc}
                        parking={parking}
                        rooms={rooms}
                    />
                    <div className="realtor">
                        <h2>Realtor</h2>
                        <p>{realtor.name}</p>
                        <p>Phone: {realtor.phone}</p>
                        <p>Email: {realtor.email}</p>
                    </div>
                </Sidebar>
            </Content>
        </Layout>
     );
}
 
export default Properties;