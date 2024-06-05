export const errorHandler = (err, req, res, next) => {
    console.error(err);

    const errorResponse = {
        status: 400,
        message: err.message.toString()
    }

    res.status(errorResponse.status).json(errorResponse);
}

export default { 
    errorHandler
}