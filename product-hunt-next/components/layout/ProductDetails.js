import React from 'react';
import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
//import { es } from 'date-fns/locale';
import Link from 'next/link';
import Image from 'next/image';



const ImageStyled = styled(Image)`
    width: 200px;
`;

const Product = styled.li`
    padding:  4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
`;

const ProductDescription = styled.div`
    flex: 0 1 600px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 2rem;
`;

const Title = styled.a`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;

    &:hover {
        cursor: pointer;
    }
`;

const Description = styled.p`
    font-size: 1.6rem;
    margin: 0;
    color: #888;
`;

const Comments = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    
    div {
        display: flex;
        align-items: center;
        border: 1px solid #e1e1e1;
        padding: .3rem;
        margin-right: 2rem;

        img {
            width: 4rem;
        }

        p {
            font-size: 1.6rem;
            font-weight: 700;
            margin-right: 1.5rem;

            &:last-of-type {
                margin: 0 1rem 0 0;
            }
        }
    }
`;

const Votes = styled.div`
    flex: 0 0 auto;
    text-align: center;
    border: 1px solid #e1e1e1;
    padding: 1rem 3rem;

    div {
        font-size: 2rem;
    }

    p {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
    }
`;


const ProductDetails = ({ product }) => {

    const { 
        comments, 
        createdAt, 
        description, 
        enterprise, 
        id,
        imageURL,
        name,
        url,
        votes,
        owner
    } = product;

    return (
        <Product>
            <ProductDescription>
                <div>
                    <Image src={imageURL} alt={name}/>
                </div>
                <div>
                    <Link href="/products/[id]" as={`/products/${id}`}>
                        <Title>{name}</Title>
                    </Link>
                    
                    <Description>{description}</Description>
                    <Comments>
                        <div>
                            <ImageStyled src="/static/img/comments-icon.png" alt={name}/>
                            <p>{comments.length} comments</p>
                        </div>
                    </Comments>
                    
                    <p>Published: {formatDistanceToNow(new Date(createdAt))}</p>
                    {/* <p>Published: {formatDistanceToNow(new Date(createdAt), {locale: es})}</p>  EN ESPAÑOL U OTRO IDIOMA*/}
                    {<p>By {owner.name} from: {enterprise}</p>}
                </div>
            </ProductDescription>

            <Votes>
                <div> &#9650; </div>
                <p>{votes} votes</p>
            </Votes>
        </Product>
    );
}
 
export default ProductDetails;