// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome Blog Starter",
  siteDescription:
    "A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.",

  templates: {
    GhostPost: "/:title",
    GhostTag: "/tag/:id",
    GhostAuthor: "/author/:slug",
  },

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-ghost",
      options: {
        baseUrl: "http://localhost:2369",
        contentKey: "b9ad45fa933caf4005e7e527a3",
        routes: {
          post: "/:slug",
          page: "/:slug",
        },
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
