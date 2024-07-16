import mongoose from 'mongoose'

async function main() {
    await mongoose.connect('mongodb://localhost:27017/mynotes')
    console.log('Connected to DB!')
}

main().catch(console.log)

export default mongoose