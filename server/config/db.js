import mongoose from 'mongoose';

const connectdb=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI );
       console.log("connection database successfull")        
    } catch (error) {
        console.log("database connection failed")
        process.exit(0);
    }
}
export default connectdb