module.exports = {
  siteMetadata: {
    title: 'Thrive Leadership | A Two-Day Training Experience',
    author: 'Caitlin Baird, Daniel Bosch, Juan Garcia, Rita Mills',
    description: 'Thrive Leadership is a two-day training experience designed to unleash your inner leader and empower you to personal and professional success.'
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: '${__dirname}/src/posts',
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-plugin-stripe-checkout',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ],
};
