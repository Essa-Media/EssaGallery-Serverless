import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context): Promise<Response> => {
  return new Response(JSON.stringify({ statusCode: 200, message: `Hello World!`, data: []}), { status: 200 })
}
