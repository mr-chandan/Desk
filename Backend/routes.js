const router = require('express').Router();
const coursestep = require("./controllers/coursestep")



router.post('/api/find',coursestep.search)
router.post('/api/add',coursestep.add)
router.post('/api/del',coursestep.del)
router.post('/api/upd',coursestep.upd)

module.exports = router;