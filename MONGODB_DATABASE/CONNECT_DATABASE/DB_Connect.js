import mongoose from 'mongoose'

export default () =>{
    mongoose.connect('mongodb://admin:admin@ds127129.mlab.com:27129/minemind_server')
    .then(()=> console.log('connected to DB'))
    .catch(e => console.log(e.message))
}