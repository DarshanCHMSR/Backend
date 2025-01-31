const connectToMongo = require('./db');
const express = require('express')

var cors = require('cors') 

const app = express()
const port = 5001

app.use(cors({
    origin: '*',
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS'
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, your backend is running!');
});
//avaiable routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`inotebook backend listening on port http://localhost:  ${port}`)
})
connectToMongo();