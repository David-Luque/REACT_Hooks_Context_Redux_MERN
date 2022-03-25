const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter })=>{
    const result = await graphql(`
        query {
            allStrapiPages {
                nodes {
                    id
                    name
                }
            }
            allStrapiProperties {
                nodes {
                    id
                    name
                }
            }
        }
    `)
    //console.log(JSON.stringify(result.data.allStrapiProperties))

    if(result.errors) {
        reporter.panic('NOT RESULTS', result.errors)
    };

    const pages = result.data.allStrapiPages.nodes;
    const properties = result.data.allStrapiProperties.nodes;
    
    //pages template
    pages.forEach(page => {
        actions.createPage({
            path: urlSlug(page.name),
            component: require.resolve('./src/components/pages.js'),
            context: {
                id: page.id
            }
        })
    });
    
    //create properties templates
    properties.forEach(property => {
        actions.createPage({
            path: urlSlug(property.name),
            component: require.resolve('./src/components/properties.js'),
            context: {
                id: property.id
            }
        })
    });
}; 