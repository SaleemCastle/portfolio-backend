const { constants: { VALIDATION_ERROR, NOT_FOUND, FORBIDDEN, SERVER_ERROR, UNAUTHORIZED } } = require('../constants')
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500

  switch (statusCode) {
    case VALIDATION_ERROR:
      res.json({ title: 'Validation Failed', message: err.message, status: statusCode, stackTrace: err.stack })
      break
      case NOT_FOUND:
      res.json({ title: 'Not Found', message: err.message, status: statusCode, stackTrace: err.stack })
      break
      case FORBIDDEN:
      res.json({ title: 'Forbidden', message: err.message, status: statusCode, stackTrace: err.stack })
      break
      case SERVER_ERROR:
      res.json({ title: 'Server Error', message: err.message, status: statusCode, stackTrace: err.stack })
      break
      case UNAUTHORIZED:
      res.json({ title: 'Unauthorized', message: err.message, status: statusCode, stackTrace: err.stack })
      break
      default:
        console.log('No Errors, all good!')
  }
}

module.exports = errorHandler