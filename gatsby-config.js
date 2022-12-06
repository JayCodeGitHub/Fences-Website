const path = require('path');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Fences-Website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    'gatsby-plugin-styled-components',
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [
        'montserrat\:300,500,700',
      ],
      display: 'swap',
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      short_name: 'Agro 78',
      start_url: '/',
      display: 'standalone',
      icon: 'src/assets/images/Logo-Secondary.png',
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets\/icons/,
      },
    },
  },
]
};