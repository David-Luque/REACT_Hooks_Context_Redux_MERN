import { graphql, useStaticQuery } from 'gatsby';

const useSEO = () => {
    const response = useStaticQuery(graphql`
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
    return response.datoCmsSite.globalSeo;
}
 
export default useSEO;