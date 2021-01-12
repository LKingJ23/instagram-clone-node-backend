const { check } = require("express-validator");

const ValidartionsUser = {
    withPassword: [
        check('name', "Ingrese su nombre completo").not().isEmpty(),
        check('username', "Ingrese su usuario").not().isEmpty(),
        check('email', "Ingrese su email valido").isEmail(),
        check('password', "La contraseña debe ser de 6 caracteres").isLength({ min: 6 }),
    ],
    withoutPassword: [
        check('name', "Ingrese su nombre completo").not().isEmpty(),
        check('email', "Ingrese su email valido").isEmail(),
    ],
    password: [
        check('password', "La contraseña debe ser de 6 caracteres").isLength({ min: 6 }),
        check('password_confirm', "La contraseña debe ser de 6 caracteres").isLength({ min: 6 }),
    ],
}

module.exports = ValidartionsUser;