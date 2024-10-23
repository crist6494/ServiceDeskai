exports.createUser = (req, res) =>{
    const {name, email} = req.body;

    const newUser = new User({name, email});
    newUser.save()
    .then(saveduser => {
        res.status(201).json(saveduser);
    })
    .catch(err => {
        res.status(400).json(err);
    })
};