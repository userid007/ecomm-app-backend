import Joi from "joi";
const pattern =
  "^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$";

const schema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required.base": "name is required" }),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp(pattern))
    .required()
    .messages({
      "string.pattern.base": "Password is not strong",
    }),
});

export const signUpValidator = (req, res, next) => {
  const result = schema.validate(req.body);
  if (!result.error) {
    next();
  } else {
    return res.status(400).send({
      success: false,
      message: result.error.details[0].message,
      msg: result,
    });
  }
};
