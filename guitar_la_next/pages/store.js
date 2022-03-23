import Layout from '../components/Layout';
import GuitarList from '../components/GuitarList';

export async function getServerSideProps() { // we cannot use this function (and getStaticProps) on component file, only on page file
    const url = `${process.env.API_URL}/guitars?_sort=price:asc`;
    const response = await fetch(url);
    const guitars = await response.json();

    return {
        props: {
            guitars
        }
    }
};

export default function Store({ guitars }) {
    console.log(guitars)
    return (
        <Layout page={"Store"}>
            <main className='container'>
                <h1 className="heading">Our guitars selection</h1>
                <GuitarList guitars={guitars}/>
            </main> 
        </Layout>
    );
}; 