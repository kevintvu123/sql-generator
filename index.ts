import * as dotenv from 'dotenv';
dotenv.config();

const API_KEY: string = process.env.API_KEY!;

console.log(API_KEY)