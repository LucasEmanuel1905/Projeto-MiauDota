import express from 'express'
import routes from './routes/Routes.js'
import cors from 'cors'

const app = express()
app.use(cors())
const port = 3000

app.use(express.json())
app.use(routes)


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})