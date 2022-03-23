import Layout from '../../components/Layout'
import Image from 'next/image';
import styles from '../../styles/Guitar.module.css'


export default function GuitarProduct({ guitarData }) {

    const { name, price, description, image,  } = guitarData[0];


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