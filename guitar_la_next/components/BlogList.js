import Entry from './Entry';
import styles from '../styles/Blog.module.css';

export default function BlogHome({ blogData }) {
    return (
        <>
            <h2 className="heading">Blog</h2>
            <div className={styles.blog}>
                {blogData.map(entry => (
                    <Entry key={entry.id} {...entry}/>
                ))}
            </div>
        </> 
    );
};