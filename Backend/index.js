import express from 'express'
import mongoose from 'mongoose';
import BookRouter from './routes/Book.route.js'
import UserRouter from './routes/User.route.js'
import cors from 'cors'
const app =express();
app.use(cors())
app.use(express.json())



const DbConnection ="mongodb://localhost:27017/bookshop"

try {
    mongoose.connect(DbConnection)
    console.log("Database connected ")
} catch (error) {
    console.log("error", error.message)
}
//routes
app.use('/api/v1', BookRouter)
app.use('/api/v1/user', UserRouter)

app.listen(5000,()=>{
    console.log("server running on 5000 port");
})