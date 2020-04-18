module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        contentPath: `content/posts`,
      },
    },
    "gatsby-theme-waves",
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`, // Root url for all notes pages
        // contentPath: `content/notes`, // Location of notes content
        // mdx: true, // Configure gatsby-plugin-mdx
        homeText: "Home", // Root text for notes breadcrumb trail
        breadcrumbSeparator: "»", // Separator for the breadcrumb trail
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Hello, I'm RichΛrd`,
    author: `RichΛrd`,
    email: "info@richardramos.me",
    description: `Some dude's website`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/richardramos_me`,
      },
      {
        name: `github`,
        url: `https://github.com/richard-ramos`,
      },
    ],
  },
}
