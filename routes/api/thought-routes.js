const router = require('express').Router();
const { 
    addThought, 
    removeThought,
    addReaction,
    removeReaction,
    getAllThoughts,
    getThoughtById,
    updateThought
    } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router
    .route('/:userId')
    .post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

// /api/thoughts/
router
    .route('/')
    .get(getAllThoughts);

// /api/thoughts/:thoughtId    
router
    .route('/:thoughtId') //  /'.thoughtId' has to match Thought.findone({ _id: params.thoughtId }) on GetThoughtById in the controller file
    .get(getThoughtById)
    .put(updateThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;