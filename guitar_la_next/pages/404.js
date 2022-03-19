import Link from 'next/link';
import styles from '../styles/NotFound.module.css';

export default function notFound() {
    return (
        <div className={styles.not_found}>
            <h1 className="heading">Page not found</h1>
            <Link href="/">Return to home</Link> 
        </div>
    );
};