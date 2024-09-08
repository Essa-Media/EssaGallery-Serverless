import {  HandlerEvent, HandlerContext, Config, Handler } from "@netlify/functions";
import { buildResponse } from "../utils/responses";
import { getAllGuildMedia } from "../utils/gallery";
import { IGallery } from "../types";
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if(event.httpMethod !== "GET") return buildResponse(400, "Bad Request!", null)
  const pathRequest = event.path.split("/")[4]
  if(!pathRequest) return buildResponse(400, "Bad Request!", null)
  console.log(pathRequest)
  const mediaList: IGallery|null = await getAllGuildMedia(pathRequest)
  if(!mediaList) return buildResponse(404, "Guild Gallery Not Found!", null)
  return buildResponse(200, "Success get Guild Gallery", mediaList) 
};

export const config: Config = {
  path: "/:guildId"
}

export { handler };
