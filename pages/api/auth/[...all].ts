import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Usamos el runtime estándar de Node.js (NO Edge)
export default toNextJsHandler(auth);