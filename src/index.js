const express = require('express')
const bodyParser = require('body-parser')
const port = 5000
const app = express()

app.get('/poducts/:customerID', (req,res)=>{

        res.send('Products per Customer')

})
app.post('/poducts/add', (req,res)=>{
    res.send('Product Added')
})
app.put('/poducts/update', (req,res)=>{
    res.send('Products updated')
})
app.delete('/poducts/:id', (req,res)=>{
    res.send('Products deleted')
})
app.get('/customer/orderHistory', (req,res)=>{
    res.send('customer Order History')
})
app.listen(port, ()=>{
    console.log(`DBI Server listening to port ${port}`)
})