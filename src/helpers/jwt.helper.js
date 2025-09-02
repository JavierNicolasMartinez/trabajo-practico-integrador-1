export const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    "s3cr3t0",
    {
      expiresIn: "1h",
    }
  );
  return token;
};

export const verifyToken = (token) => {
  return decoded;
};
