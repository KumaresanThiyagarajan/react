const user = require('../models/userModel');

exports.getRoute = async (req, res) => {
    const userData = await user.find();
    res.status(201).json({ data: userData });
};

exports.PostRoute = async (req, res) => {
    const { username, password } = req.body;
    const exist = await user.findOne({ username });
    if (exist) return res.status(401).json({ message: "User Already exist" });
    const newUser = new user({ username, password });
    await newUser.save();
    res.status(201).json({ users: newUser });
};

exports.PutRoute = async (req, res) => {
    const update = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!update) return res.status(401).json({ message: "user does not found" });
    res.status(201).json({ update });
};

exports.DeleteRoute = async (req, res) => {
    const deleted = await user.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(401).json({ message: "user not found" });
    res.status(201).json({ message: "user deleted", deleted });
};
