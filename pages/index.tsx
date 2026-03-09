import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth/client";

export default function Home() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    authClient.getSession().then((res) => {
      setSession(res.data);
    });
  }, []);

  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <button
          onClick={handleLogin}
          className="px-4 py-2 text-white bg-black rounded-md"
        >
          Iniciar sesión con GitHub
        </button>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">

        <p className="text-xl">
          Bienvenido, <span className="font-bold">{session.user.name}</span>
        </p>

        <p className="text-sm text-slate-500">
          Tu rol es: {session.user.role}
        </p>

        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50"
        >
          Cerrar sesión
        </button>

      </div>
    </main>
  );
}