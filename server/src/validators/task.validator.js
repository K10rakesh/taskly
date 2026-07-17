const {body} = require('express-validator');
const createTaskValidator = [
    body('title').exists().isString().trim().notEmpty().isLength({max: 50}),
    body('description').optional().isString().trim().isLength({max: 200})
];
module.exports = createTaskValidator;