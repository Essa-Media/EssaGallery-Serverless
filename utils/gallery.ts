import redis from "./redis"
import { GuildId, IGallery } from "../types"

export async function getAllGuildMedia(
    guildId: GuildId
): Promise<IGallery|null> {
    const mediaList = await redis.lrange(`gallery:${guildId}`, 0, -1)
    console.log(mediaList)
    if(!mediaList || mediaList.length === 0) return null
    return mediaList.map(item => JSON.parse(item))
}

export async function rangeGuildMedia(
    guildId: GuildId,
    startIndex: number,
    stopIndex: number
): Promise<IGallery> {
    const key = `gallery:${guildId}`
    const mediaList = await redis.lrange(key, startIndex, stopIndex)
    return mediaList.map(item => JSON.parse(item))
}