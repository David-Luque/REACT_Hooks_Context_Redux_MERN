import Layout from '../components/Layout';
import Entry from '../components/Entry';

export async function getStaticProps() { //in this case, function "getServerSideProps , witch will be the function that we will use, is exactly the same. we need only change the name"
    const url = 'http://localhost:1337/blogs';
    const response = await fetch(url);
    const data = await response.json();
    return {
        props: {
            data // this data will be available automatically in this page because of export expresion
        }
    }
}; //whit "export", this function will be abailable in the rest of this same page

export default function Blog({ data }) {

    return (
        <Layout page={"Blog"}>
            <main className="container">
                <h2 className="heading">Blog</h2>
                <div>
                    {data.map(entry => (
                        <Entry key={entry.id} {...entry}/>
                    ))}
                </div>
            </main> 
        </Layout>
    );
}; 

