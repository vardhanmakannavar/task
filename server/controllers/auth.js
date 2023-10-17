import User from "../models/User.js";

export const signup = async (request, response, next) => {
  console.log(request.body);
  try {
    const newUser = new User({ ...request.body });
    await newUser.save();
    response.status(200).send("user has been created");
  } catch (error) {
    next(error);
  }
};
