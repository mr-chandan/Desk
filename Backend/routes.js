const router = require('express').Router();
const Stepzero = require("./controllers/Stepzero")
const Stepone = require('./controllers/Stepone')
const Steptwo = require('./controllers/Steptwo')


router.post('/api/find', Stepzero.search)
router.post('/api/add', Stepzero.add)
router.post('/api/del', Stepzero.del)
router.post('/api/upd', Stepzero.upd)

//stepzero
router.post('/api/stepone/find', Stepone.search)
router.post('/api/stepone/add', Stepone.add)
router.post('/api/stepone/del', Stepone.del)
router.post('/api/stepone/upd', Stepone.upd)

//stepttwo
router.post('/api/steptwo/find', Steptwo.search)
// router.post('/api/stepone/add', Stepone.add)
// router.post('/api/stepone/del', Stepone.del)
// router.post('/api/stepone/upd', Stepone.upd)

module.exports = router;