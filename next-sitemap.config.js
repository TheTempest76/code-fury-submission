/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://code-fury-submission.vercel.app',
    generateRobotsTxt: true, // Enable robots.txt generation
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: '*',
          disallow: ['/admin', '/private'], // Add any paths you want to disallow
        },
      ],
      additionalSitemaps: [
        // Add any additional sitemaps here
        // 'https://code-fury-submission.vercel.app/server-sitemap.xml',
      ],
    },
    // ... any other configuration options
  };
  