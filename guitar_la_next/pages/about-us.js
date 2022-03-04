import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/AboutUs.module.css';


export default function AboutUs() {
    return (
        <Layout page={"About us"}>
            <main className='container'>
                <h2 className='heading'>About Us</h2>
                <div className={styles.content}>
                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="About us" />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est ipsum, viverra vitae malesuada sit amet, gravida eu lacus. Aliquam faucibus facilisis enim non mattis. Donec id viverra libero. Sed at odio id mauris consequat vestibulum id in dui. Donec non convallis est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis orci sem, suscipit vitae lectus eget, condimentum pellentesque magna. Donec risus nunc, euismod sed sem eget, hendrerit molestie nisl. Etiam sit amet tortor velit.
                        </p>
                        <p>
                            Aliquam lorem ante, feugiat vel mattis suscipit, semper id felis. Pellentesque massa diam, porta eget lectus et, ultricies posuere lorem. Maecenas condimentum ex id enim dictum fringilla. Etiam hendrerit malesuada risus, eget placerat nibh hendrerit sit amet. Nunc sed cursus leo. Maecenas ligula nulla, suscipit quis placerat at, efficitur vel eros. Phasellus eget lorem tempus, faucibus enim nec, finibus magna. Sed pharetra ac ante vel consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dui sapien, rutrum id maximus a, pulvinar ut ipsum. Maecenas ex nisl, pharetra eget dolor eget, fermentum commodo velit.
                        </p>
                    </div>
                </div>
            </main> 
        </Layout>
    );
}; 