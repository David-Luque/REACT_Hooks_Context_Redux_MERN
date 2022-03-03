import Link from 'next/link';
import Layout from '../components/Layout';

export default function AboutUs() {
    return (
        <Layout page={"About us"}>
            <div>
                <h1>About Us</h1>
                <Link href="/">Go to Home</Link>
            </div> 
        </Layout>
    );
}; 