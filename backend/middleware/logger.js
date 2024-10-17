// backend/middleware/logger.js
const logger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next(); // Call the next middleware or route handler
};
export default logger;