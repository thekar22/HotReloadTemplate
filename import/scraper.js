import request from 'request' // to make http requests
import scrapeIt from 'scrape-it' // to scrape url

// specify here the object-dom transformation you wish to scrape 
const template = {
	title: 'title',
	description: 'div#someId',
	/*
		Populate this object with whatever fields you want to pull
	*/
}

// list of predictable urls to scrape (perhaps, urls will comprise of same url with differing pagination values in the query string)
var urls = [
	"https://www.google.com",
	"https://www.facebook.com",
	"https://www.github.com",
	/*
		Populate this list with your own urls you need to scrape
	*/
]

// scrape url with the given object template
function scrapeURL(url, template) {
	try {
		return scrapeIt(url, template).then(objectFromScraping => {
			/*
				any post-processing for each url scrape can go here
			*/
			return objectFromScraping;
		})
	} catch(e) {
		console.log('failure scraping', e)
	}
}

// get response of URL
function requestURL(url) {
	try {
		request(url, (error, response, body) => {
			if (error || response.statusCode !== 200) {
				return
			}

			try {

			} catch (e) {

			}
		})	
	} catch(e) {
		console.log('failure requesting')
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
	const dataPromises = urls.map(url => scrapeURL(url, template))
	Promise.all(dataPromises).then(data => {
		onAllURLsFetched(data)
	})
} catch(e) {
	console.log("scrape failed", e)
}
