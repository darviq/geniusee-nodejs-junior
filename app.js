const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = 5000

const dataRouter = require('./routes/routes')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/data', dataRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  })
})

app.listen(PORT, function () {
  console.log(`Server running. Use our API on port: ${PORT}`)
})

// app.catch(err => {
//   console.log(`Server not running. Error message: ${err.message}`)
//   process.exit(1)
// })
