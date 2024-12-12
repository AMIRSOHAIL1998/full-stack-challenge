import Joi from 'joi';

// Define the validation schema for signup
const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().min(3).required(),
  type: Joi.string().min(4).required(),
});

// Define the validation schema for login
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Validate user input in signup route
export const validateSignup = (data) => {
  const { error } = signupSchema.validate(data);
  if (error) {
    throw new Error(error.details[0].message);
  }
};

// Validate user input in login route
export const validateLogin = (data) => {
  const { error } = loginSchema.validate(data);
  if (error) {
    throw new Error(error.details[0].message);
  }
};
