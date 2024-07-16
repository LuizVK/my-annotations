import mongoose, { Schema } from 'mongoose'

const Technology = mongoose.model(
    'Technology',
    new Schema(
        {
            name: {
                type: String,
                required: true
            },
            iconDir: {
                type: String
            }
        }
    )
)

export default Technology