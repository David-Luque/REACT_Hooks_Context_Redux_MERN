import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const ButtonLink = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80, .85);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
`;

const RoomPreview = (props) => {  //{ title, content, image, slug }
    console.log(props)
    return (
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <Image fluid={image.fluid} />
            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <h3
                   css={css`
                   font-size: 2.6rem;
               `} 
                > {title}  </h3>
                <p>{content}</p>
                <ButtonLink to={slug}> See room details </ButtonLink>
            </div>
        </div>
    );
}
 
export default RoomPreview;