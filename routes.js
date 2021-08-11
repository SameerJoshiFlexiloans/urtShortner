const express = require('express');
const router = express.Router();
const { shortUrl,bigUrl }  = require('./controller/url-controller');

router.post('/short',shortUrl);

router.get('/redirect/:id',bigUrl);

module.exports=router;