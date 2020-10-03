const Joi = require('joi');


module.exports = Joi.object().keys({
  owner: Joi.string().trim().alphanum().min(2).max(1000).required(),
  contacts: Joi.string().trim().alphanum().min(5).max(1000).required(),
  bike: Joi.string().trim().alphanum().min(5).max(1000).required(),
});
