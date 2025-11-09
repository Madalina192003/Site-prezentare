const Join = require('../models/Join');

exports.createJoin = async (req, res) => {
    try {
        const join = new Join({
            nume: req.body.nume,
            email: req.body.email,
            telefon: req.body.telefon,
            motivatie: req.body.motivatie
        });

        const savedJoin = await join.save();
        res.status(201).json({
            success: true,
            data: savedJoin,
            message: 'Înscriere realizată cu succes!'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

exports.getAllJoins = async (req, res) => {
    try {
        const joins = await Join.find();
        res.status(200).json({
            success: true,
            data: joins
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
