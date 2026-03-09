import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Better Auth expone los métodos como un objeto en el Pages Router
  const authHandler = toNextJsHandler(auth);
  
  const method = req.method as keyof typeof authHandler;

  // Verificamos si el método existe (GET o POST)
  if (authHandler[method]) {
    // Usamos el casting a 'any' para evitar que TypeScript se queje 
    // de la diferencia entre Web Request y Node IncomingMessage
    return await (authHandler[method] as any)(req, res);
  }

  return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}