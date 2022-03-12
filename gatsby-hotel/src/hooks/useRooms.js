import { graphql, useStaticQuery } from 'gatsby';

const useRooms = () => {
    const response = useStaticQuery(graphql`
        query {
            allDatoCmsRoom {
                nodes {
                    title
                    content
                    image {
                        fluid(maxWidth:1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    id
                    slug
                }
            }
        }
    `);
    
    return response.allDatoCmsRoom.nodes.map(room => ({
        title: room.title,
        id: room.id,
        image: room.image,
        slug: room.slug,
        content: room.content
    }));
}
 
export default useRooms;