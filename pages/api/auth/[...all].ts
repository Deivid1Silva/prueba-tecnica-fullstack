import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { GET, POST } = toNextJsHandler(auth);

  if (req.method === "GET") {
    // @ts-ignore
    return await GET(req, res);
  }

  if (req.method === "POST") {
    // @ts-ignore
    return await POST(req, res);
  }

  return res.status(405).json({ message: "Method not allowed" });
}