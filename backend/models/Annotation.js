import mongoose, { Schema } from 'mongoose'
import { TechnologySchema } from './Technology.js'

const AnnotationSchema = new Schema(
    {
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String,
            required: true
        },
        technologies: [TechnologySchema],
    }, 
    { timestamps: true }
)

const Annotation = mongoose.model(
    'Annotation',
    AnnotationSchema
)

export { AnnotationSchema }
export default Annotation