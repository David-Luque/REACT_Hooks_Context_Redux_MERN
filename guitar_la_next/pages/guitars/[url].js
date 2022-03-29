import { useState } from 'react';
import Layout from '../../components/Layout'
import Image from 'next/image';
import styles from '../../styles/Guitar.module.css'


export default function GuitarProduct({ guitarData, addToCart }) {

    const { name, price, description, image, id } = guitarData[0];

    const [ quantity, setQuantity ] = useState(1);

    const handleSubmit = e =>{
        e.preventDefault();

        if(quantity < 1) {
            alert("Quantity not valid");
            return;
        };

        const selectedGuitar = {
            id,
            image: image.url,
            price,
            name,
            quantity
        };

        addToCart(selectedGuitar);
    };

    return (
        <Layout page={`${name}`} >
            <div className={styles.guitar}>
                <Image layout='responsive' width={180} height={350} src={image.url} alt={`${name} guitar image `} />
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>
                        {description}
                    </p>
                    <p className={styles.price}>
                        ${price}
                    </p>

                    <form 
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <label>Quantity:</label>
                        <select 
                            value={quantity}
                            onChange={e => setQuantity(parseInt(e.target.value))}>
                            <option value="">-- Select quantity --</option>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                        </select>
                        <input
                            type="submit"
                            value="Add to cart"
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
};

export async function getServerSideProps({ query: { url } }){
    const fullUrl = `${process.env.API_URL}/guitars/?url=${url}`;
    const response =  await fetch(fullUrl);
    const guitarData = await response.json();

    return {
        props: {
            guitarData
        }
    };
};