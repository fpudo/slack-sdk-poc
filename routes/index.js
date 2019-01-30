var express = require('express');
var router = express.Router();

// Import controllers
const { getUsers, sendUserDM } = require('../controllers/users');

router.get('/users', getUsers, (req, res) => { res.json(req.contentReturn) } );
router.post('/users/:id/send-message', sendUserDM, (req, res) => { res.json(req.contentReturn) } );

module.exports = router;
