const logger = require('./config/Logger')
const app = require('./app')

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  logger.log({
    level: 'info',
    message: 'server running on port 3000'
  })
})
