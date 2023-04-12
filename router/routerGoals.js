const {
  create,
  index,
  delGoal,
  update,
  updateComplete,
} = require("../controllor/controllGoals");

const router = require("express").Router();

router.post("/create", create);
router.get("/", index);
router.delete("/:id", delGoal);
router.put("/update/:id", update);
router.put("/complete/:id", updateComplete);
module.exports = router;
