// Validation
const Joi = require('@hapi/joi');

// Register validation
const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    // Let's validate the user before we save a user
    return schema.validate(data);
    
}

// Register validation
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    // Let's validate the user before we save a user
    return schema.validate(data);
    
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;