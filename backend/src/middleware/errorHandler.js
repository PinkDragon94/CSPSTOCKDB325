// backend/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).json({
        message: "Internal Server Error",
        error: err.message || "An unknown error occurred."
    });
};

export default errorHandler;
