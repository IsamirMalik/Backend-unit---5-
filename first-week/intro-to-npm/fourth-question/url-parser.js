const path = require('path');
const urlParser = require('url');
const { queryObjects } = require('v8');

function parser(url) {
    try {
        const parsedUrl = new URL(url);
        return {
            hostname : parsedUrl.hostname,
            pathname : parsedUrl.pathname,
            query : Object.fromEntries(parsedUrl.searchParams)
        }
    } catch (error) {
        throw new Error('Invalid URL');
    }
     
}


module.exports = parser;