const express = require('express')
const { getProducts, getProduct, addProduct } = require('./app')

const app = express()
app.use(express.json())

app.get('/products', async (req, res) => {
    const data = await getProducts()
    res.status(200).json(data)
})

app.get('/product/:id', async (req, res) => {
    try {
        const data = await getProduct(+req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post('/add', async (req, res) => {
    try {
        console.log(req.params.body);
        const result = await addProduct(req.params.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.listen(3000, () => console.log('server started at port 3000'))