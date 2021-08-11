const express = require('express');
const router = express.Router();
const { shortUrl }  = require('./controller/url-controller');

router.post('/short',shortUrl);

module.exports=router;