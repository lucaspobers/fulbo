import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/fulbodb')
        console.log('>>> DB is connected')
    } catch (err) {
        console.log(err)
    }
}
