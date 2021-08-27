import { useStaticQuery, graphql } from 'gatsby';

const useHome = () => {
    const result = useStaticQuery(
        graphql`
          query {
            allStrapiPages(filter: {name: {eq: "Home"}}) {
              nodes {
                id
                name
                content
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData( width: 1200)
                    }
                  }
                }
              }
            }
          }
        `
      );
    return result.allStrapiPages.nodes.map(home => ({
        name: home.name,
        content: home.content,
        image: home.image
    }));
}
 
export default useHome;