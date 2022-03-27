import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import GuitarHeader from './GuitarHeader';
import styles from '../styles/Header.module.css'

export default function Header({ guitar }) {
    const router = useRouter();
    console.log(router.pathname)
    console.log(router.route)

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
                
                { guitar && <GuitarHeader { ...guitar }/> }
            </div>

            { router.pathname === '/' && (
                // => We use a div because next "Image" component do not support className prop. So we can wrap it in "div" tag with className with all of image CSS styling
                <div className={styles.guitar_img}>
                    <Image 
                        layout="fixed"
                        width={500}
                        height={1200}
                        src="/img/header_guitarra.png" alt="Header guitar image"
                    />
                </div>
            )}

        </header>
    );
};