import Book from '../model/Book.model.js'


export const createBook = async(req,res)=>{
    try {
        const {Name, Price, Category,Image,Description} = req.body;

        const book = await Book.create({
            Name,
            Price,
            Category,
            Image,
            Description
        })

        res.status(201).json({
            success:true,
            message:"Book Created Successfully",
            data:book
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal error",
            error
        })
    }
}

export const getBooks = async(req, res)=>{
    try {
        const findBooks = await Book.find();
        res.status(200).json({
            success:true,
            message:"Successfully fetched books",
            data:findBooks
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to fetch books",
            error
            
        })
    }
}



