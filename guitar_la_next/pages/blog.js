import Layout from '../components/Layout';

export async function getServerSideProps() { //in this case, function "getStaticsProps , witch will be the function that we will use, is exactly the same. we need only change the name"
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

    console.log(data)

    return (
        <Layout page={"Blog"}>
            <div>
                <h1>Blog</h1>
            </div> 
        </Layout>
    );
}; 

