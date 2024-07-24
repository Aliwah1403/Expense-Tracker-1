const { withAuth } = require("@clerk/clerk-sdk-node");

const clerkMiddleware = withAuth(async (req, res, next) => {
  if (req.auth.sessionId) {
    req.userId = req.user.userId;
    next();
  } else {
    res.status(401).json({ message: "Unauthorized user" });
  }
});

module.exports = clerkMiddleware;
