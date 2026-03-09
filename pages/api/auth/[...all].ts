import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;
  
  // Construimos la URL absoluta requerida por Better Auth en Next.js 15
  const fullUrl = new URL(req.url || "", `${protocol}://${host}`);

  const request = new Request(fullUrl.toString(), {
    method: req.method,
    headers: new Headers(req.headers as any),
    // El cuerpo solo se pasa si no es una petición GET
    body: req.method !== "GET" && req.method !== "HEAD" ? JSON.stringify(req.body) : null,
  });

  const authHandler = toNextJsHandler(auth);
  const method = req.method as keyof typeof authHandler;
  const handlerFunc = authHandler[method];

  if (handlerFunc) {
    // @ts-ignore
    return await handlerFunc(request, res);
  }

  return res.status(405).end();
}