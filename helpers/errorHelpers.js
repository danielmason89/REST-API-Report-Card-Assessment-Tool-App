let errorHelpers = {
  logErrorToConsole: function (err, req, res, next) {
    console.error(
      "Log entry:" + JSON.stringify(errorHelpers.errorBuilder(err))
    );
    console.error("*".repeat(80));
    next(err);
  },
  clientErrorHandler: function (err, req, res, next) {
    if (req.xhr) {
      res.status(500).json({
        status: 500,
        statusText: "Internal Server Error",
        message: err.message,
        error: {
          errno: err.errno,
          call: err.syscall,
          code: "INTERNAL_SERVER_ERROR",
          message: err.message,
        },
      });
    } else {
      next(err);
    }
  },
  errorHandler: function (err, req, res, next) {
    res.status(500).json(errorHelpers, errorBuilder(err));
  },
  errorBuilder: function (err) {
    return {
      status: 500,
      statusText: "Internal Server Error",
      message: err.message,
      error: {
        errno: err.errno,
        call: err.syscall,
        code: "INTERNAL_SERVER_ERROR",
        message: err.message,
      },
    };
  },
};

module.exports = errorHelpers;
