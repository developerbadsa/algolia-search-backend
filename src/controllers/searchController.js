const client = require('../config/algolia');


const search = async (req, res) => {
    const { query } = req.query;
    try {
        const results = await client.search({
            requests: [
                {
                    indexName: process.env.ALGOLIA_INDEX,
                    query: query,
                },
            ],
        });
        res.json(results.results[0].hits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const product = req.body;
        console.log(product);
        const response = await client.saveObjects({
            indexName: process.env.ALGOLIA_INDEX,
            objects: [product],
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const test = async (req, res) => {
    try {
       console.log('this is test')
       res.json('Hiting api to test')
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { search, addProduct, test };
