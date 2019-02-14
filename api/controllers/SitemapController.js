/**
 * SitemapController
 *
 * @description :: Server-side logic for managing Sitemaps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	build_sitemap: function(req, res) {
        var fs = require('fs');
        
        var SitemapGenerator = require('sitemap-generator');
        var generator = new SitemapGenerator('http://raffallijoseluis.com.ve');
        
        generator.on('done', function (sitemap) {
            console.log(sitemap);
 
            fs.writeFile("./assets/sitemap.xml", sitemap, function(err){
                if(err) {
                    return res.negotiate(err);
                }
                console.log("The file was saved!");
                return;  
            });
        });
        
        generator.start();
        res.sendfile('sitemap.xml');
    },
};

