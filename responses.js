// ================================================================
// ===================== success responses ========================
// ================================================================

const successResponse = (res, message, data = null) => {
    const response = {
        success: true,
        message: message,
    };
    if (data !== null) {
        response.data = data;
    }
    return res.status(200).send(response);
};
