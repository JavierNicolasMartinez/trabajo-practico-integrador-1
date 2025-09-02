import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  const decoded = jwt.verify(token, "s3cr3t0");
  req.userLogged = decoded;
  next();
};
