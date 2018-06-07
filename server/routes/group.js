const express = require('express');
const group = require('../controllers/group');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.get('/', verifyToken, group.retrieveGroups);
router.get('/admin', verifyToken, group.retrieveAdminGroups);
router.get('/admin/edit/:groupId', verifyToken, group.retrieveSingleAdminGroup);
router.post('/new', verifyToken, group.newGroup);
router.patch('/leave', verifyToken, group.removeSelfFromGroup);
router.post('/option', verifyToken, group.addOption);
router.patch('/option', verifyToken, group.removeOption);
router.patch('/member', verifyToken, group.removeMemberFromGroup);
router.post('/member', verifyToken, group.joinGroup);
router.patch('/member/confirm', verifyToken, group.approvePendingMember);

module.exports = router;
