import Layout from '../components/Layout';
import BlogList from '../components/BlogList'


export async function getStaticProps() { //in this case, function "getServerSideProps , witch will be the function that we will use, is exactly the same. we need only change the name"
    const url = `${process.env.API_URL}/blogs?_sort=createdAt:desc`;
    const response = await fetch(url);
    const blogData = await response.json();
    return {
        props: {
            blogData // this data will be available automatically in this page because of export expresion
        }
    }
}; //whit "export", this function will be abailable in the rest of this same page

export default function Blog({ blogData }) {

    return (
        <Layout page={"Blog"}>
            <main className="container">
                <BlogList blogData={blogData}/>
            </main> 
        </Layout>
    );
}; 

