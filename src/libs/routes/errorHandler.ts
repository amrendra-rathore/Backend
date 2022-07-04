export default function errorHandler(err, req, res, next) {
  const { error, message, code, timestamp } = err;
  return res.status(code || 500).send(
    {
      error: error || 'error',
      message: message || 'Error',
      code: code || 500,
      timestamp: new Date()
    }
  )
}
