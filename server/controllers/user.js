import User from "../models/User.js";
import { createError } from "../error.js";

export const update = async (request, response, next) => {
  if (request.params.id === request.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        request.params.id,
        {
          $set: request.body,
        },
        { new: true }
      );

      response.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};
