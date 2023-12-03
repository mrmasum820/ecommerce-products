const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const products = require('./data/products.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('products are coming')
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.listen(port, () => {
    console.log(`dragon is listening on port ${port}`);
})