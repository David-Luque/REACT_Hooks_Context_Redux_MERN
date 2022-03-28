import Layout from "../components/Layout";
import styles from '../styles/Cart.module.css'

export default function Cart() {
    return (
        <Layout page={"Shop cart"}>
            <h1 className="heading">
                Shoping cart
            </h1>
            <main className={`container ${styles.content}`}>
                <div>
                    1
                </div>
                <div>
                    2
                </div>
            </main>
        </Layout>
    );
};