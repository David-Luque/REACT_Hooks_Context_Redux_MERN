import React from 'react';
import { useStaticQuery,  graphql} from 'gatsby';
import styled from '@emotion/styled';

const IconsList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;

        img {
            margin-right: 1rem;
        }
    }
`;

const Icons = ({ wc, parking, rooms }) => {
    
    const { icons } = useStaticQuery(graphql`
        query {
            icons: allFile (filter: {relativeDirectory: {eq: "icons"}}) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `);
    
    const iconImages = icons.edges;

    return (
        <IconsList>
            <li>
                <img src={iconImages[4].node.publicURL} alt="rooms icon" />
                <p>{rooms}</p>
            </li>
            <li>
                <img src={iconImages[3].node.publicURL} alt="parking icon" />
                <p>{parking}</p>
            </li>
            <li>
                <img src={iconImages[5].node.publicURL} alt="WC icon" />
                <p>{wc}</p>
            </li>
        </IconsList>
    )
}
 
export default Icons;