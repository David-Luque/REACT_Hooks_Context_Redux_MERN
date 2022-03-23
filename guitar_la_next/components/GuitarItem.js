import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitar.module.css';

export default function GuitarView({ name, price, image, description, url }) {

    return (
        <div className={styles.guitar}>
            <Image layout='responsive' width={180} height={350} src={image.url} alt={`${name} guitar image `} />
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.description}>
                    {description}
                </p>
                <p className={styles.price}>
                    ${price}
                </p>
                <Link href={`/guitars/${url}`}>
                    <a className={styles.link}> Product details </a>
                </Link>
            </div>
        </div>
    );
};