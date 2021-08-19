const logger = require('../config/Logger')

module.exports = app => {
  app.get('/servers', (req, res) => {
    logger.log({
      level: 'info',
      message: `GET /servers ${req.ip}`,
      query: req.query
    })

    res.status(200).json({ msg: 'success' })
  })
}
