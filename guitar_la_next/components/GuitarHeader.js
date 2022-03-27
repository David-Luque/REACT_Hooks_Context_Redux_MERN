import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function GuitarHeader({ name, description, price, image, url }) {
    return (
        <div className={styles.guitar_header}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p className={styles.price}>
                $ {price}
            </p>
            <Link href={`/guitars/${url}`}>
                <a className={styles.link}>
                    Details
                </a>
            </Link>
        </div>
    );
};