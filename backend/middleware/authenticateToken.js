const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

function authenticateToken(req, res, next) {
  // Skip token check for the auth routes
  if (req.path.startsWith('/api/auth')) {
    return next();
  }

  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied!' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Attach user data to request
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid Token!' });
  }
}

module.exports = authenticateToken;
