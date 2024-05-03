import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    Name:String,
    Price:Number,
    Category:String,
    Image:String,
    Description:String
})

const Book = mongoose.model("Book", bookSchema)

export default Book