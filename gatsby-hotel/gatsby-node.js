exports.createPages = async ({ actions, graphql, reporter }) => {

    const response = await graphql(`
        query {
            allDatoCmsRoom {
                nodes {
                    slug
                }
            }
        }
    `);

    if(response.errors) {
        reporter.panic('NO RESULTS ', response.errors);
    };

    //if pages => create files
    const rooms = response.data.allDatoCmsRoom.nodes;

    rooms.forEach(room => {
        actions.createPage({ //for each element on "rooms" array we will create a page executing "action.createPage" method. All created pages will be stored in "public/page-data"
            path: room.slug, // the reference to create a path; must be an unique identification, like "id" or similar
            component: require.resolve('./src/components/room.js'), // the component to be rendered
            context: { // => context will contain all variables we want to pass to the component to be rendered
                slug: room.slug
            }
        })
    });
};