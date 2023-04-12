const goals = require("../modulesGoals/goals");

module.exports = {
  create: async (req, res) => {
    try {
      const addGoal = await goals.create({
        goal: req.body.goal,
        complete: false,
      });
      if (addGoal) {
        res.status(201).json({ message: "Done" });
      }
    } catch (err) {
      res.status(400).json({ message: "error" });
    }
  },
  index: async (req, res) => {
    try {
      const allGoals = await goals.find();
      if (allGoals) {
        res.status(200).json(allGoals);
      }
    } catch (err) {
      res.status(400).json({ message: "error" });
    }
  },
  delGoal: async (req, res) => {
    try {
      const id = req.params.id;
      const del = await goals.findByIdAndDelete(id, { goal: req.body.goal });
      if (del) {
        res.status(200).json({ message: "Deleted" });
      }
    } catch (err) {
      res.status(400);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const updateGoal = await goals.findByIdAndUpdate(id, {
        goal: req.body.goal,
        complete: false,
      });
      if (updateGoal) {
        res.status(200).json({ message: "Update Done" });
      }
    } catch (err) {
      res.status(400).json({ message: "Error" });
    }
  },
  updateComplete: async (req, res) => {
    try {
      const id = req.params.id;
      const updateComp = await goals.findByIdAndUpdate(id, {
        complete: req.body.complete,
      });
      if (updateComp) {
        res.status(200).json({ message: "True" });
      }
    } catch (err) {
      res.status(400).json({ message: "Error" });
    }
  },
};
