import express from 'express'
import {getBooks, createBook} from '../controllers/Book.controller.js'
const router = express.Router()

router.get('/books', getBooks)
router.post('/createbook', createBook)




export default router