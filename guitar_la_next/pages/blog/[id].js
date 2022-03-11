//DINAMIC ROUTING WITH getServerSideProps() WAY
// export async function getServerSideProps({ query: { id } }) { //this function receive automatically the query when access the dinamic route
//     //console.log(id)

//     const url = `http://localhost:1337/blogs/${id}`;
//     const response = await fetch(url);
//     const entry = await response.json();

//     return {
//         props: {
//             entry
//         }
//     };
// };

// export default function BlogEntry({ entry }) {
//     //const router = useRouter();
//     //console.log(router.query) //to read query param from the URL. The key name is the same we set between brackets into [id].js file ("id" in this case)
//     console.log(entry)
//     return (
//        <h2>from entry blog</h2> 
//     );
// };



//DINAMIC ROUTING WITH getStaticProps() WAY
//with getStaticProps() on dinamic routing we need also getSatticPaths() function

export async function getStaticPaths() {
    const url = 'http://localhost:1337/blogs';
    const response = await fetch(url);
    const entries = await response.json();

    const paths = entries.map(entry => ({
        params: {
            id: entry.id.toString()
        }
    }));

    return {
        paths,
        fallback: false
    }
};

export async function getStaticProps({ params: { id } }) { //this function receive automatically the query when access the dinamic route
    //console.log(id)

    const url = `http://localhost:1337/blogs/${id}`;
    const response = await fetch(url);
    const entry = await response.json();

    return {
        props: {
            entry
        }
    };
};

export default function BlogEntry({ entry }) {
    //const router = useRouter();
    //console.log(router.query) //to read query param from the URL. The key name is the same we set between brackets into [id].js file ("id" in this case)
    console.log(entry)
    return (
       <h2>from entry blog</h2> 
    );
};