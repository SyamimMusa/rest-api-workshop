import mongoose from "mongoose"

const Author = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: Number,
        required: true,
    },
    books: [
        {
            bookId: {
                type: mongoose.Types.ObjectId,
                required: false,
            }
        }
    ],
}, {
    timestamps: true,
})

export default mongoose.models.Author || mongoose.model('Author', Author);