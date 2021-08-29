import { useStaticQuery, graphql } from "gatsby";

const useProperties = () => {
    
    const data = useStaticQuery(graphql`
        query {
            allStrapiProperties {
                nodes {
                    name
                    id
                    rooms
                    parking
                    wc
                    description
                    price
                    category {
                        name
                    }
                    realtor {
                        name
                        phone
                        email
                    }
                    image {
                        localFile {
                            sharp: childImageSharp {
                                fluid (maxWidth: 600, maxHeight: 400) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }   
                        }
                    }
                }
            }
        }
    `);
    console.log(data)
};

export default useProperties;