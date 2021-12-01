const express = require('express')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const port = 5000

const app = express()
app.use(bodyParser.json())

const products = [{
    productID: randomBytes.hex(4).toString(),
    productName: 'A',
    productCategoryID: 1,
    productPrice: 100 
}]
const customers = [{
    customerID: randomBytes.hex(4).toString(),
    customerName: '',
    contact:{
        email:'',
        phoneNumber:12323424
    },
    cart:[{

    }],
    orders:[
        {
            productID:'',
            quantity:'',
            orderDate: new Date()
        }
    ]
}]
app.post('/poducts/add', (req,res)=>{
    products.push(req.body.product)
    res.send('Product Added')
})
app.put('/poducts/update', (req,res)=>{
    products[productID] = req.body.product
    res.send('Products updated')
})
app.delete('/poducts/:id', (req,res)=>{
    res.send('Products deleted')
})
app.get('/customer/orderHistory', (req,res)=>{
    res.send('customer Order History')
})
app.get('/poducts/:customerID', (req,res)=>{

    res.send('Products per Customer')

})
app.listen(port, ()=>{
    console.log(`DBI Server listening to port ${port}`)
})