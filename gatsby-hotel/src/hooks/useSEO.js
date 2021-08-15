import { graphql, useStaticQuery } from 'gatsby';

const useSEO = () => {
    const result = useStaticQuery(graphql`
        query {
            datoCmsSite {
                globalSeo {
                    siteName
                    titleSuffix
                    fallbackSeo {
                        title
                        description
                    }
                }
            }
        }
    `);
    return result.datoCmsSite.globalSeo;
}
 
export default useSEO;