import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI,{
            dbName: "zopify"
        })
        console.log(`connected to MONGODB ${connect.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}