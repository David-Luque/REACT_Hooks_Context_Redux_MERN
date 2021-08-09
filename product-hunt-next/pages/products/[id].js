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

const ProductOwner = styled.p`
    padding: .5rem 2rem;
    background-color: #DA552F;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
`;

const Product = () => {
    //component state
    const [ product, setProduct ] = useState({});
    const [ error, setError ] = useState(false);
    const [ comment, setComment ] = useState({});
    const [ callDB, setCallDB ] = useState(true);
    
    //routing to obtain id
    const router = useRouter();
    const { query: { id } } = router;

    //firebase context
    const { firebase, user } = useContext(FirebaseContext);


    useEffect(()=>{
        if(id && callDB) {
            const getProducts = async ()=>{
                const productQuery = await firebase.db.collection('products').doc(id);
                const productDB = await productQuery.get();
                //console.log(productDB.data())
                if(productDB.exists) {
                    setProduct(productDB.data());
                    setCallDB(false);
                } else {
                    setError(true);
                    setCallDB(false);
                }
            };
            getProducts();
        }
    }, [id, product]);

    const { 
        comments, 
        createdAt, 
        description, 
        enterprise,
        imageURL,
        name,
        url,
        votes,
        owner,
        voters
    } = product;

    
    //admin and validate votes
    const voteProduct = ()=>{
        if(!user) {
            return router.push('/login')
        }

        //check if the current user has voted
        if(voters.includes(user.uid)) return;

        //get and add the new vote
        const newTotalVotes = votes + 1;

        //save user id after vote
        const newVoters = [...voters, user.uid];

        //update in DB
        firebase.db.collection('products').doc(id).update({
            votes: newTotalVotes,
            voters: newVoters
        })

        //update in state
        setProduct({
            ...product,
            votes: newTotalVotes
        });

        //call DB with new votes info
        setCallDB(true);
    };

    //functions to create comments
    const hadleCommentChange = e => {
       setComment({
            ...comment,
            [e.target.name]: e.target.value
       })
    };
    const addComment = e => {
        e.preventDefault();

        if(!user) return router.push('/login');

        //info extra for comment
        setComment({
            ...comment,
            userId: user.uid,
            username: user.displayName
        });

        //get copy from product comments and add new comments to it
        const newComments = [...comments, comment];

        //update DB
        firebase.db.collection('products').doc(id).update({
            comments: newComments
        })

        //update product state
        setProduct({
            ...product,
            comments: newComments
        });

        //call DB with new comments info
        setCallDB(true);
    };

    //check if comment was written by product owner
    const isOwner = id => {
        if(owner.id === user.uid) {
            return true
        } else {
            return false
        }
    };

    //fuctionto check owner
    const allowToRemove = ()=>{
        if(!user) return false;
        if(owner.id === user.uid) return true;
        return false;
    };
    //remove product from DB
    const removeProduct = async ()=>{
        if(!user) return router.push('/login');
        if(owner.id !== user.uid) return router.push('/login');
        try {
            await firebase.db.collection('products').doc(id).delete();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };


    return ( 
        <Layout>
            <> 
                {(Object.keys(product).length === 0 && !error) && <p>Loading...</p>}

                { error
                    ? <Error404 message="This product does not exist" />
                    : (
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

                                    { user && (
                                        <>
                                            <h2>Add your comment</h2>
                                            <form
                                                onSubmit={addComment}
                                            >
                                                <Field>
                                                <input
                                                    type="text"
                                                    name="message"
                                                    onChange={hadleCommentChange}
                                                />
                                                </Field>
                                                <InputSubmmit
                                                    type="submit"
                                                    value="Add comment"
                                                />
                                            </form>
                                        </>
                                    ) }

                                    <h2 css={css`margin: 2rem 0;`}> Comments </h2>
                                    {comments.length === 0 ? 'No comments yet' : (
                                    <ul>
                                            {comments.map((comment, i) => (
                                                <li 
                                                    key={`${comment.userId}-${i}`}
                                                    css={css`
                                                        padding: 2rem;
                                                        border: 1px solid #e1e1e1;
                                                    `}
                                                >
                                                    <p>{comment.message}</p>
                                                    <p>
                                                        Writed by: 
                                                        <span
                                                            css={css`
                                                                font-weight: bold;
                                                            `}
                                                        >
                                                            {comment.username}
                                                        </span>
                                                    </p>
                                                    {isOwner(comment.userId) && (
                                                        <ProductOwner>
                                                            Owner
                                                        </ProductOwner>
                                                    )}
                                                </li>
                                            ))}
                                        </ul> 
                                    )}
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
                                        {user && (
                                            <Button
                                                onClick={voteProduct}
                                            >Vote</Button>
                                        )}
                                    </div>
                                </aside>
                            </ProductContainer>
                            { allowToRemove() && 
                                <Button
                                    onClick={removeProduct}
                                >
                                    Remove product
                                </Button>
                            }
                        </div>
                    )
                }

                
            </>
        </Layout>
     );
}
 
export default Product;