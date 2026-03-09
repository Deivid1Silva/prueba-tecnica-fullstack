import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth/client";

export default function Home() {
  const [session, setSession] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Solo pedimos la sesión si estamos en el cliente
    authClient.getSession().then((res) => {
      setSession(res.data);
    });
  }, []);

  if (!mounted) return null; // Evita que el build intente renderizar lógica de auth

  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <button
          onClick={handleLogin}
          className="px-6 py-3 text-white bg-zinc-900 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
        >
          Entrar con GitHub
        </button>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-xl shadow-sm border flex flex-col items-center gap-6">
        <p className="text-xl">
          Hola, <span className="font-bold">{session.user.name}</span>
        </p>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
          Rol: {session.user.role}
        </span>
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:underline"
        >
          Cerrar sesión
        </button>
      </div>
    </main>
  );
}