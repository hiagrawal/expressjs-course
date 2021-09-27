const path = require('path');

const express = require('express');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product' , {pageTitle:'Add Product', path:'addProduct', productsCSS: true, formsCSS: true, activeProduct: true});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  products.push({title:req.body.title});
  res.redirect('/');
});

module.exports = {
  routes: router,
  products:products
}
