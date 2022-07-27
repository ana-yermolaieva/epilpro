const { createFilePath } = require("gatsby-source-filesystem");
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "posts"});
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
    {
        allWpPost {
            nodes {
                slug
            }
        }
    }
    `).then(result => {
        result.data.allWpPost.nodes.forEach((node) => {
            createPage({
                path: `blog/${node.slug}`,
                component: path.resolve('./src/containers/Blog/BlogPost.jsx'),
                context: {
                    slug: node.slug
                }
            })
        });
    })
}