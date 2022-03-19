import Image from 'next/image';
import Layout from "../../components/Layout";
import { formatDate } from '../../helpers';
import styles from '../../styles/Entry.module.css';

//DINAMIC ROUTING WITH getServerSideProps() WAY

// export async function getServerSideProps({ query: { url } }) { //this function receive automatically the query when access the dinamic route
//     //console.log(url)

//     const url = `${process.env.API_URL}/blogs/${url}`;
//     const response = await fetch(url);
//     const entry = await response.json();

//     return {
//         props: {
//             entry
//         }
//     };
// };

// export default function BlogEntry({ entry }) {
//     //const router = useRouter();
//     //console.log(router.query) //to read query param from the URL. The key name is the same we set between brackets into [url].js file ("url" in this case)
//     console.log(entry)
//     return (
//        <h2>from entry blog</h2> 
//     );
// };



//DINAMIC ROUTING WITH getStaticProps() WAY
//with getStaticProps() on dinamic routing we need also getSatticPaths() function

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`;
    const response = await fetch(url);
    const entries = await response.json();

    const paths = entries.map(entry => ({
        params: {
            url: entry.url
        }
    }));

    return {
        paths,
        fallback: false
    }
};

export async function getStaticProps({ params: { url } }) { //this function receive automatically the query when access the dinamic route
    //console.log(url)

    const baseUrl = `${process.env.API_URL}/blogs?url=${url}`;
    const response = await fetch(baseUrl);
    const entry = await response.json();

    console.log(entry)

    return {
        props: {
            entry: entry[0]
        }
    };
};




export default function BlogEntry({ entry }) {
    //const router = useRouter();
    //console.log(router.query) //=> to read query param from the URL. The key name is the same we set between brackets into [id].js file ("id" in this case)
    
    const { content, image, published_at, title } = entry;

    console.log(entry)
    
    return (
        <Layout page={title}>
            <main className='container'>
                <h1 className="heading">{title}</h1> 
                <article className={styles.entry}>
                    <Image layout="responsive" width={800} height={600} src={image.url} alt={`${entry.title} article image`}/>
                    <div className={styles.content}>
                        <p className={styles.date}> {formatDate(published_at)} </p>
                        <p className={styles.text}> {content} </p>
                    </div>
                </article>
            </main>
        </Layout>
    );
};