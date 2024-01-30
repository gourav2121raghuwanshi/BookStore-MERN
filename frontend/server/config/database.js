import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbConnect = () => {
    console.log("in db file");
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    
    .then(() => {console.log("DB  is Successfulllll")})
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    } );
}

module.exports = dbConnect;