const express = require('express');
const group = require('../controllers/group');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.get('/', verifyToken, group.retrieveGroups);
router.get('/admin', verifyToken, group.retrieveAdminGroups);
router.get('/admin/edit/:groupId', verifyToken, group.retrieveSingleAdminGroup);
router.post('/new', verifyToken, group.newGroup);
router.patch('/leave', verifyToken, group.removeUserFromGroup);
router.post('/option', group.addOption);

module.exports = router;
