/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://speakingpass.com', 
  generateRobotsTxt: true,           
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', 
      },
    ],
  },
}