import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/NotFound.module.css';

export default function notFound() {
    return (
        <Layout>
            <h1 className="heading">
                Not found component
            </h1>
            <Link href="/">
                Return to home
            </Link> 
        </Layout>
        
    );
};