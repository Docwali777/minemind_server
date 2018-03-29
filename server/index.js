
import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
import db_connect from '../MONGODB_DATABASE/CONNECT_DATABASE/DB_Connect'

db_connect( )

const HomeRoute = express.Router()

HomeRoute.get('/', (req, res)=>{``
    res.send({business: 'MGMC'})
})

app.use('/', HomeRoute)


app.listen(3000, ()=>{
    console.log(`connected to port: ${PORT}`)
})