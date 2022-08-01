import mongoose, * as Mongoose from 'mongoose';

let database: Mongoose.Connection;

export default class Database{
    public static open = (mongoUri) => {
        return new Promise<void>((resolve, reject) => {
            mongoose.connect("mongoUri", (error) => {
            if(error) {
                return reject(error);
            }
            resolve();
        });
    });
    }
    public static disconnect = () => {
        if (!database) {
            return;
        }
        Mongoose.disconnect();
    };
}