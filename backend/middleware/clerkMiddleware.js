

const { withAuth } = require("@clerk/clerk-sdk-node");

const clerkMiddleware = async (req, res, next) => {
  try {
    const { userId, sessionId } = await withAuth(req);

    if (sessionId) {
      req.userId = userId;
      console.log(`Authenticated user ID: ${userId}`);
      next();
    } else {
      res.status(401).json({ message: "Unauthorized user" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = clerkMiddleware;
