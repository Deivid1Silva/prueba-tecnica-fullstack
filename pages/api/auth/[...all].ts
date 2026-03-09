import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Exportación directa para Next.js 15 Pages Router
export default toNextJsHandler(auth);