import GuitarItem from './GuitarItem';
import styles from '../styles/GuitarList.module.css';

export default function GuitarList({ guitars }) {

    return(
        <> 
            <div className={styles.list}>
                {guitars.map(guitar => (
                    <GuitarItem key={guitar.id} {...guitar} />
                ))}
            </div>
        </>
    );
};