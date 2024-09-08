import { Redis } from "ioredis"

const redisClient: Redis = new Redis(process.env.REDIS_URI!)

export default redisClient