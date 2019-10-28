const express = require('express')
const response = require('../../network/response')
const router = express.Router()

router.get('/', (req, res) => {
    response.success('server is working...', res);
})

module.exports = router