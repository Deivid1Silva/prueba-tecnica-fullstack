import { auth } from "@/lib/auth";
import { toNodeHandler } from "better-auth/node";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = toNodeHandler(auth);

export default async function authHandler(req: NextApiRequest, res: NextApiResponse) {
  return handler(req, res);
}