import mongoose, { Schema } from 'mongoose'

const Technology = mongoose.model(
    'Technology',
    new Schema(
        {
            name: {
                type: String,
                required: true
            },
            icon: {
                iconPrefix: String,
                iconName: String
            }
        }
    )
)

export default Technology