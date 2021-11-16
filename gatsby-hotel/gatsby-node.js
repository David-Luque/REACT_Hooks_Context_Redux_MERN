exports.createPages = async ({ actions, graphql, reporter }) => {

    const result = await graphql(`
        query {
            allDatoCmsRoom {
                nodes {
                    slug
                }
            }
        }
    `);

    if(result.errors) {
        reporter.panic('NO RESULTS ', result.errors)
    };

    //if pages => create files
    const rooms = result.data.allDatoCmsRoom.nodes;

    rooms.forEach(room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/rooms.js'),
            context: {
                slug: room.slug
            }
        })
    });
};