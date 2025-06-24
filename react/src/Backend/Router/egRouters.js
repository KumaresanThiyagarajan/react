const express = require('express');

const router = express.Router();
const { getRoute, PostRoute, PutRoute, DeleteRoute } = require('../controllers/egController');

router.get('/get', getRoute);
router.post('/post', PostRoute);
router.put('/put/:id', PutRoute);
router.delete('/delete/:id', DeleteRoute);

module.exports = router;
