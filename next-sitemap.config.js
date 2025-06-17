/** @type {import('next-sitemap').IConfig} */
const { createClient } = require('@supabase/supabase-js');

// Create Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Helper function to encode URL segments (similar to encodeURLSegment in functions.ts)
const encodeURLSegment = (segment) => {
  if (!segment) return '';
  return segment.replace(/\s+/g, '-');
};

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
  // Set higher timeout for async operations
  generateIndexSitemap: false,
  // Exclude dynamically generated pages from the default sitemap
  exclude: ['/part1/*', '/part2/question/*'],
  // Add additional sitemaps for dynamic routes
  additionalPaths: async (config) => {
    const dynamicPaths = [];
    
    try {
      // Get Part1 categories
      const { data: part1Categories, error: part1Error } = await supabase
        .from('v3_part1_category')
        .select('category');
      
      if (!part1Error && part1Categories) {
        // Add paths for part1 categories
        part1Categories.forEach(({ category }) => {
          dynamicPaths.push({
            loc: `/part1/${encodeURLSegment(category)}`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.7,
          });
        });
      }
      
      // Get Part2 topics for detail pages
      const { data: part2Topics, error: part2Error } = await supabase
        .from('v3_part2_topic')
        .select('topic');
      
      if (!part2Error && part2Topics) {
        // Add paths for part2 detail pages
        part2Topics.forEach(({ topic }) => {
          dynamicPaths.push({
            loc: `/part2/question/${encodeURLSegment(topic)}`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.8,
          });
        });
      }
    } catch (error) {
      console.error('Error generating dynamic sitemap paths:', error);
    }
    
    return dynamicPaths;
  },
}