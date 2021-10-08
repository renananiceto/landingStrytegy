module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "strytegy",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/cku7i2x83341501ze4l8938dc/master",
    },
  },

],
};
