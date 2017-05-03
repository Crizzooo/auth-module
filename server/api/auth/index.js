const router = require('express').Router();
const meRouter = require('./me.js');

router.use('/me', meRouter);


module.exports = router;
