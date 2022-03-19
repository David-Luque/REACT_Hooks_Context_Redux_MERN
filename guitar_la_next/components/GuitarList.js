import GuitarView from '../components/GuitarView';

export default function GuitarList({ guitars }) {

    return(
        <>
            <h2>Guitar listing</h2>
            <div>
                {guitars.map(guitar => (
                    <GuitarView key={guitar.id} {...guitar} />
                ))}
            </div>
        </>
    );
};