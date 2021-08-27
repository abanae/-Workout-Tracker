const router = require('express').Router();
const { Workout } = require('../models');


// Getting Workouts
router.get('/api/workouts', async (req, res) => {
    try {
        const allWorkouts = await Workout.aggregate([
            {$addFields: {
                totalDuration: {
                    $sum:"$exercises.duration"
                }
            }}
        ]);
        res.json(allWorkouts);
    } catch (e) {
        res.json(e);
    }
});

// Add Exercise
router.put('/api/workouts/:id', async (req, res) => {
    try {
        const addWorkout = await Workout.findByIdAndUpdate(req.params.id,
            { $push: { exercises: body } },
            { new: true }
        )
        res.json(addWorkout);
    } catch (e) {
        res.json(e);
    }
});

// Create Workout
router.post("/api/workouts", async (req, res) => {
    try {
        const createWorkout = await Workout.create();
        res.json(createWorkout);
    } catch (e) {
        res.json(e);
    }
});

// Getting workouts in range
router.get("/api/workouts/range", async (req, res) => {
    try {
        const allWorkouts = await Workout.aggregate([
            {$addFields: {
                totalDuration: {
                    $sum:"$exercises.duration"
                }
            }}
        ]);
        res.json(allWorkouts);
    } catch (e) {
        res.json(e);
    }
});

module.exports = router;



