const express = require('express')
const app = express()
const cors = require('cors')

const corsOptio = {
    credentials: true,
    origin: ["http://localhost:3000"]
}
app.use(cors(corsOptio))

app.use(routers)

const port = 5000
app.listen(port, () => {
    console.log(`Server running on ${port}!`)
})
