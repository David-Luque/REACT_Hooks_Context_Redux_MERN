import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Layout from '../../components/layout/Layout';
import { FirebaseContext } from '../../firebase';
import Error404 from '../../components/layout/404';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Field, InputSubmmit } from '../../components/ui/Form';
import Button from '../../components/ui/Buton';


const ProductContainer = styled.div`
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

const Product = () => {
    //component state
    const [ product, setProduct ] = useState({});
    const [ error, setError ] = useState(false);
    
    //routing to obtain id
    const router = useRouter();
    const { query: { id } } = router;

    //firebase context
    const { firebase } = useContext(FirebaseContext);


    useEffect(()=>{
        if(id) {
            const getProducts = async ()=>{
                const productQuery = await firebase.db.collection('products').doc(id);
                const productDB = await productQuery.get();
                
                if(productDB.exists) {
                    setProduct(productDB.data());
                } else {
                    setError(true);
                }
            };
            getProducts();
        }
    }, [id]);

    const { 
        comments, 
        createdAt, 
        description, 
        enterprise,
        imageURL,
        name,
        url,
        votes,
        owner
    } = product;

    return ( 
        <Layout>
            {error && <Error404/>} 
            {Object.keys(product).length === 0 && <p>Loading...</p>}

            <div className="container">
                <h1 css={css`
                    text-align: center;
                    margin-top: 5rem;
                    `}
                > {name} </h1>

                <ProductContainer>
                    <div>
                        <p>Published: {formatDistanceToNow(new Date(createdAt))}</p>
                        {<p>By {owner.name} from: {enterprise}</p>}
                        <img src={imageURL} alt={name}/>
                        <p>{description}</p>

                        <h2>Add your comment</h2>
                        <form>
                            <Field>
                                <input
                                    type="text"
                                    name="message"
                                />
                            </Field>
                            <InputSubmmit
                                type="submit"
                                value="Add comment"
                            />
                        </form>

                        <h2 css={css`margin: 2rem 0;`}> Comments </h2>
                        {comments.map((comment, index) => (
                            <li key={index}>
                                <p>{comment.name}</p>
                                <p>Writed by: {comment.username}</p>
                            </li>
                        ))}
                    </div>
                    <aside>
                        <Button
                            target="_blank"
                            bgColor="true"
                            href={url}
                        >Visit URL</Button>

                        <div
                            css={css`
                                margin-top: 5rem;
                            `}
                        >
                            <p>{votes} votes</p>
                            <Button>Vote</Button>
                        </div>
                    </aside>
                </ProductContainer>
            </div>
        </Layout>
     );
}
 
export default Product;