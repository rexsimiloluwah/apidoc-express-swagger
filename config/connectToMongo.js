/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-17 03:36:23
 * @modify date 2020-12-17 11:15:29
 * @desc [description]
 */

const mongoose = require('mongoose');

const connectToMongo = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser : true,
            useFindAndModify : false,
            useCreateIndex : true,
            useUnifiedTopology : true
        })

        console.log(`Mongo successfully connected at ${conn.connection.host}`);
    }

    catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectToMongo;
