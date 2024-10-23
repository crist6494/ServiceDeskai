const User = require('../models/User');

exports.createUser = (req, res) =>{
    const {name, email} = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    const newUser = new User({name, email});
    newUser.save()
    .then(saveduser => {
        res.status(201).json(saveduser);
    })
    .catch(err => {
        res.status(400).json(err);
    })
};