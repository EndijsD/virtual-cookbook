const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: Array, required: true },
    method: { type: String, required: true },
    time: { type: String, required: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Recipe', recipeSchema);
