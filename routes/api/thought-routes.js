const router = require('express').Router();
const { 
    addThought, 
    removeThought,
    addReaction,
    removeReaction,
    getAllThoughts 
    } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>/<thoughtId>/<replyId>
router.route('/:userId/:thoughtId/:replyId').delete(removeReaction);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').put(addReaction).delete(removeThought);

router.route('/').get(getAllThoughts);

module.exports = router;