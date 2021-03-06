const Sequelize = require("sequelize");
const { validationResult } = require("express-validator");

const User = require('../models/User');

module.exports = {
    async store(request, response) {
        const { name, email, username, password } = request.body;

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        let user = await User.findOne({
            where: {
                [Sequelize.Op.or]: [{ email }, { username }]
            }
        });

        if (user) {
            if (user.email === email) return response.status(400).json({ message: "Este email ya esta enn uso" });
            if (user.username === username) return response.status(400).json({ message: "Este usuario ya esta enn uso" });
        }

        user = await User.create({
            name,
            email,
            username,
            password
        });

        response.json(user);
    }
};