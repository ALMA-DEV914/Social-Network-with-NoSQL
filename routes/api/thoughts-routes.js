const router = require("express").Router();
//require all function from controllers
const { getAllThoughts, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction } = require("../../controllers/thoughts-controller");

// /api/thoughts/
router.route("/").get(getAllThoughts).post(addThought);

// /api/thoughts/:id
router.route("/:thoughtId").get(getThoughtById).put(updateThought).delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;