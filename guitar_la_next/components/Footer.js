import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
             <div className={`container ${styles.content}`}>  {/* <== !!! */}
                <nav className={styles.navigation}>
                    <Link href="/">Home</Link>
                    <Link href="/about-us">About us</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/store">Store</Link>
                </nav>
                <p className={styles.copyright}>All rights reserved</p>
            </div>
        </footer>
    );
};