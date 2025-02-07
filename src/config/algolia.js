require('dotenv').config();
const {algoliasearch} = require('algoliasearch');

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);

module.exports = client;
