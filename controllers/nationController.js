import Nation from "../models/Nation.js";

export const controller = {
  add: async (req, res) => {
    let nation = new Nation(req.body);
    try {
      await nation.save();
      res.send("Nation added!");
    } catch (error) {
      res.send(error);
    }
  },
  all: async (req, res) => {
    try {
      let nations = await Nation.find();
      res.json(nations);
    } catch (error) {
      res.send(error);
    }
  },
  update: async(req,res) => {
    try {
        nationUpdated = await Nation.findOneAndUpdate({name: req.body.name}, {$set: {"name_formated": req.body.name_formated}})
        res.send(nationUpdated)
    } catch (error) {
        res.send(error)
    }
  },
  getNation: async (req, res) => {
    try {
      let name = req.params.nation;
      let nation = await Nation.find({"$or":[{ name: name },{name_formated: name} ]}); // condicional para rotas com o nome normal ou snake_case
      res.send(nation)
    } catch (error) {
        res.send(error)
    }
  },
};

export default controller;
