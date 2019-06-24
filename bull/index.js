const dotenv = require('dotenv');
dotenv.config();
const Queue = require('bull');
const testQueue = new Queue('BullTest',
    {
        redis: {
            port: process.env.REDIS_PORT,
            host: process.env.REDIS_HOST,
            password: process.env.REDIS_PASSWORD
        }
    });

sendMessage = async() => {
    try {
        let resp = await testQueue.add({message: "out"});
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}

sendMessage();