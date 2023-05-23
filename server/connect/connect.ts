import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async (): Promise<Connection | any> => {
    try {
        const connection = mongoose.createConnection(process.env.DB_URL + "/" + process.env.DB_Name).asPromise();
        console.log('✅ MongoDB Connect Success..');
        return connection;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const dbClose = async (conn: Connection) => {
    try {
        await conn.close()
        console.log("MongoDB Connect Close..");
    } catch (error) {
        console.log(error)
    }
}