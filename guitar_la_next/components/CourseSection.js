import styles from '../styles/Course.module.css'

export default function CourseSection({ title, content, image }) {
    return (
        <section className={styles.course}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.content}>
                    <h2 className='heading'>
                        {title}   
                    </h2>
                    <p className={styles.text}>
                        {content}
                    </p>
                    <a className={styles.link} href="#">
                        More info
                    </a>
                </div>
            </div>
            <style jsx>
                {`
                    section {
                        padding: 10rem 0;
                        margin-top: 10rem;
                        background-image: 
                            linear-gradient(to right, rgba(0 0 0 / .65), rgba(0 0 0 / .7)),
                            url(${image.url})
                        ;
                        background-size: cover;
                        background-position: 50%;
                    }
                `}
            </style>
        </section>
    );
};