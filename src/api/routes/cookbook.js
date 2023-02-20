const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getRecipe, (req, res) => {
  res.json(res.recipe);
});

router.post('/', async (req, res) => {
  const recipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    method: req.body.method,
    time: req.body.time,
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/:id', getRecipe, async (req, res) => {
  if (req.body.title != null) res.recipe.title = req.body.title;
  if (req.body.ingredients != null)
    res.recipe.ingredients = req.body.ingredients;
  if (req.body.method != null) res.recipe.method = req.body.method;
  if (req.body.time != null) res.recipe.time = req.body.time;

  try {
    const updatedRecipe = await res.recipe.save();
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', getRecipe, async (req, res) => {
  try {
    await res.recipe.remove();
    res.json({ message: 'Deleted Recipe' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getRecipe(req, res, next) {
  let recipe;

  try {
    recipe = await Recipe.findById(req.params.id);
    if (recipe == null)
      return res.status(404).json({ message: 'Cannot find recipe' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.recipe = recipe;
  next();
}

module.exports = router;
