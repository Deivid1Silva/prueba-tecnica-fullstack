import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// En Next.js 15 (Pages Router), el handler se exporta directamente así:
const handler = toNextJsHandler(auth);

export default handler;