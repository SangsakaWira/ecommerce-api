const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

let products = []
let transaksi = []

app.use(bodyParser.json())

function deleteProduct(id){
    let produkYangTidakDiDelete = products.filter(product =>{
        return product.id !== id
    })
    products = produkYangTidakDiDelete
}

// READ
app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/transaksi', (req, res) => {
    res.send(transaksi)
})

app.get('/users', (req, res) => {
    res.send(transaksi)
})

app.get('/products/:id', (req, res) => {
    let product = products.filter(product =>{
        return product.id === req.params.id
    })
    res.send(product)
})

// CREATE
app.post('/products', (req, res) => {
    products.push(req.body)
    res.send({
        message:"Data berhasil ditambahkan!"
    })
})

app.post('/transaksi', (req, res) => {
    products.push(req.body)
    transaksi.push(req.body)
    res.send({
        message:"Data berhasil ditambahkan!"
    })
})

// UPDATE
app.put('/products', (req, res) => {
    deleteProduct(req.body.id)
    products.push(req.body)
    res.send({
        message:"Data berhasil diupdate!"
    })
})

// DELETE
app.delete("/products", (req,res)=>{
    deleteProduct(req.body.id)
    res.send(products)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})