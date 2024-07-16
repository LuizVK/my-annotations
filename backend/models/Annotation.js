import mongoose, { Schema } from 'mongoose'

const Annotation = mongoose.model(
    'Annotation',
    new Schema(
        {
            title: {
                type: String, 
                required: true
            },
            description: {
                type: String,
                required: true
            },
            technology: Object,
        }, 
        { timestamps: true }
    )
)

export default Annotation