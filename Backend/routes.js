const router = require('express').Router();
const coursestep = require("./controllers/coursestep")



router.post('/api/find',coursestep.search)
router.post('/api/add',coursestep.add)

module.exports = router;