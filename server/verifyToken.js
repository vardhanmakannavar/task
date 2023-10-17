import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (request, response, next) => {
  //console.log("Enter Verify token")
  const token = request.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated"));

  jwt.verify(token, process.env.JWT, (error, user) => {
    if (error) return next(createError(403, "Token is not valid"));
    request.user = user;
    next();
  });
};
