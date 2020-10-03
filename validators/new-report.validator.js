const Joi = require('joi');


module.exports = Joi.object().keys({
  owner: Joi.string().trim().min(2).max(1000).required(),
  contacts: Joi.string().trim().min(5).max(1000).required(),
  bike: Joi.string().trim().min(5).max(1000).required(),
});
