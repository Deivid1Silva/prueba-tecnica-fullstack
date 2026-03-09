import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const authHandler = toNextJsHandler(auth);
  
  // Mapeo manual para asegurar compatibilidad con Vercel Serverless Functions
  if (req.method === "GET") {
    // @ts-ignore
    return await authHandler.GET(req, res);
  }
  
  if (req.method === "POST") {
    // @ts-ignore
    return await authHandler.POST(req, res);
  }

  return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}