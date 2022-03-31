import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../helpers';
import styles from '../styles/Entry.module.css';


export default function Entry({ title, resume, image, published_at, id, url }) {
    return (
        <article>
            <Link href={`blog/${url}`}>
                <Image 
                    className={styles.img}
                    priority='true' 
                    layout='responsive' 
                    width={800} height={600} 
                    src={image.url} 
                    alt={`${title} blog image`}
                />
            </Link>
            
            <div className={styles.content}>
                <Link href={`blog/${url}`}>
                    <h3>{title}</h3>
                </Link> 
                <p className={styles.date}>{ formatDate(published_at) }</p>
                <p className={styles.resume}>{resume}</p>
                {/* <Link href={`/blog/${url}`}>
                    <a className={styles.link}>
                        Read more
                    </a>
                </Link> */}
            </div>
        </article>
    );
};