const router = require('express').Router();
const { Workout } = require('../models');



router.get('/api/workouts/', async (req, res) => {
    
    try {
        const allWorkouts = await Workout.find();
        res.json(allWorkouts);
    }catch (err) {
        res.json(err);
    }
});

module.exports = router;