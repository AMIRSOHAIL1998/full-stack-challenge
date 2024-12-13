// Global error handler middleware
export const errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error details
    // Handle different types of errors
    if (err instanceof SyntaxError) {
        return res.status(400).json({ message: 'Invalid JSON input' });
    }
    // For custom errors (e.g., from validation)
    if (err.message === 'User not found') {
        return res.status(404).json({ message: err.message });
    }
    // Default error response
    res.status(500).json({ message: 'Internal Server Error' });
};
//# sourceMappingURL=errorHandler.js.map