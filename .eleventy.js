const yaml = require('js-yaml');
const { DateTime } = require('luxon');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = eleventyConfig => {

    const markdownIt = require('markdown-it')
    const markdownItAttrs = require('markdown-it-attrs')
  
    const markdownItOptions = {
      html: true,
      breaks: true,
      linkify: true
    }

    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addLayoutAlias('base','layouts/base.njk');
    eleventyConfig.addLayoutAlias('hero','layouts/hero.njk');
    eleventyConfig.addLayoutAlias('page','layouts/page.njk');
    eleventyConfig.addLayoutAlias('home','layouts/home.njk');
    eleventyConfig.addLayoutAlias('social','social.njk');
    eleventyConfig.addLayoutAlias('nav','navigation.njk');
    eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents));
    eleventyConfig.addShortcode('clientTag', function(name) {
        return `<a class="badge badge-secondary mr-2" href="/clients/${name}">${name}</a>`
      });
    
    eleventyConfig.addPairedShortcode('pairedClient', function(data, name) {
        return `${data} <a class="badge badge-secondary" href="/clients/${name}">${name}</a>`
      });
    
    eleventyConfig.addFilter('courseDate', dateObj => {
        return DateTime.fromFormat(dateObj, 'LLL d, yyyy').toFormat('yyyy-LL-dd')
    });

    eleventyConfig.addFilter('simpleDate', dateObj => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc'}).toFormat('LLL dd, yyyy')
    });

    eleventyConfig.addFilter('limit', (array, qty) => (qty < 0 ? array.slice(qty): array.slice(0,qty)));
    
    eleventyConfig.setLibrary('md', markdownLib);
    
    eleventyConfig.markdownTemplateEngine = 'njk'; 

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    return {
        markdownTemplateEngine: 'njk',
        pathPrefix: '/LS-11ty/',
        dir: {
            input: "src",
            output: "docs",
            data: "_data",
            includes: "_includes"
        }
    }
}