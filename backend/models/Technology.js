import mongoose, { Schema } from 'mongoose'

const TechnologySchema = new Schema(
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

const Technology = mongoose.model(
    'Technology',
    TechnologySchema
)

export { TechnologySchema }
export default Technology