const db = require("../models");

module.exports = {
  findAll: async (req, res) => {
    try {
      let dbModel = await db.Book.find({})
      res.json(dbModel)
    }
    catch (error) {
      console.log(error)
    }

  },
  findById: async (req, res) => {
    try {
      let dbModel = await db.Book.findById({ _id: req.params.ids })
      res.json(dbModel)
    }
    catch (error) {
      res.status(422).json(error)
    }

  },
  create: async (req, res) => {

    try {
      let dbModel = await db.Book.create(req.body)
      res.json(dbModel)

    }
    catch (error) {
      res.status(422).json(error)
    }
    
  },
  remove: async (req, res) => {
    try {
      let dbModel = await db.Book.findById({ _id: req.params.id })
      await dbModel.remove()
      res.json(dbModel)
    }
    catch (error) {
      res.status(422).json(error)
    }

  }
};
