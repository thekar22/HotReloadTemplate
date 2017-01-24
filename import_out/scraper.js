'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _scrapeIt = require('scrape-it');

var _scrapeIt2 = _interopRequireDefault(_scrapeIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// to scrape url

// specify here the object-dom transformation you wish to scrape 
var template = {
	title: 'title',
	description: 'div#someId'
}; // to make http requests


// list of predictable urls to scrape (perhaps, urls will comprise of same url with differing pagination values in the query string)
var urls = ["https://www.google.com", "https://www.facebook.com", "https://www.github.com"];

// scrape url with the given object template
function scrapeURL(url, template) {
	try {
		return (0, _scrapeIt2.default)(url, template).then(function (objectFromScraping) {
			/*
   	any post-processing for each url scrape can go here
   */
			return objectFromScraping;
		});
	} catch (e) {
		console.log('failure scraping', e);
	}
}

// get response of URL
function requestURL(url) {
	try {
		(0, _request2.default)(url, function (error, response, body) {
			if (error || response.statusCode !== 200) {
				return;
			}

			try {} catch (e) {}
		});
	} catch (e) {
		console.log('failure requesting');
	}
}

function onAllURLsFetched(data) {
	// data contains all object results from all scraped urls 
	console.log(data);

	/*
 	Do something with your scraped data here
 */
}

// scrape all URLs in urls and 
try {
	var dataPromises = urls.map(function (url) {
		return scrapeURL(url, template);
	});
	Promise.all(dataPromises).then(function (data) {
		onAllURLsFetched(data);
	});
} catch (e) {
	console.log("scrape failed", e);
}
//# sourceMappingURL=scraper.js.map