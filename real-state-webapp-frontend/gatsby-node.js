const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter })=>{
    const result = await graphql(`
    query {
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

    const properties = result.data.allStrapiProperties.nodes;
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