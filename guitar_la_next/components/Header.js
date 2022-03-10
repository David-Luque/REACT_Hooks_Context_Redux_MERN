import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navbar}>
                    <Link href="/">
                        <a>
                            <Image width={400} height={100} src="/img/logo.svg" alt="Web logo"/>
                        </a>
                    </Link>
                    <nav className={styles.navigation}>
                        <Link href="/">Home</Link>
                        <Link href="/about-us">About us</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/store">Store</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};