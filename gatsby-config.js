module.exports = {
  siteMetadata: {
    title: `Fences-Website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets\/icons/,
      },
    },
  },
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"]
};