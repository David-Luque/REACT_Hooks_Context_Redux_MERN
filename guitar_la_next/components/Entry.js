import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../helpers';
import styles from '../styles/Entry.module.css';


export default function Entry({ title, resume, content, image, published_at, id }) {
    return (
        <article>
            <Image priority='true' layout='responsive' width={800} height={600} src={image.url} alt={`${title} blog image`} />
            <div className={styles.content}>
                <h3>{title}</h3> 
                <p className={styles.date}>{ formatDate(published_at) }</p>
                <p className={styles.resume}>{resume}</p>
                <Link href={`/blog/${id}`}>
                    <a className={styles.link}>
                        Read entry
                    </a>
                </Link>
            </div>
        </article>
    );
};