import mongoose from "mongoose";

const connectDB = async () => {
  // try {
  //   const conn = await mongoose.createConnection(process.env.CONNECTION_URL, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
  //   console.log(`MongoDB connected: ${conn.connection.host}`);
  // } catch (error) {
  //   console.error(error);
  //   process.exit(1);
  // }
  console.log(process.env.CONNECTION_URL)
    console.log(process.env.CONNECTION_URL)
    try{
        const conn = await mongoose.connect(process.env.CONNECTION_URL,{
            useUnifiedTopology: true,
            // useNewUrlParser: true,
            // useCreateIndex: true
        })
        console.log(`Mongodb Connected ${conn.connection.host}`)
    }catch (error){
        console.error(`Error : ${error.message}`)
        process.exit(1)
    }
};

export default connectDB;
