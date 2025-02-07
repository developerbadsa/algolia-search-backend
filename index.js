require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { algoliasearch } = require('algoliasearch');

const app = express();
app.use(cors());
app.use(express.json());



const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);

console.log(process.env.ALGOLIA_INDEX)

app.get('/search', async (req, res) => {
    const { query } = req.query;
    try {
        const results = await client.search({
            requests: [
                {
                    indexName: process.env.ALGOLIA_INDEX ,
                    query: query,
                },
            ],
        });
        res.json(results.results[0].hits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/add', async (req, res) => { 
    try {
        const product = req.body;
        console.log(product)
        const response = await client.saveObjects({
            indexName: process.env.ALGOLIA_INDEX,
            objects: [product],
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) ;
