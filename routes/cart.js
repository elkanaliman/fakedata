const express = require('express')
const router = express.Router()


const cartData =[
{
 _id:7,
 userId:4,
 date: '2020-03-01T00:00:02.000Z',
 product: [
    {productId:10, quantity:2},
    {productId:11, quantity:3},
 ]

},

{
    _id:7,
    userId:4,
    date: '2020-03-01T00:00:02.000Z',
    product: [
       {productId:4, quantity:2},
    ]
   
   },



]






router.get("/cart", (req,res)=>{
    res.send(cartData)
})

module.exports = router