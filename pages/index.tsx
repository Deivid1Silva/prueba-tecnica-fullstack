import { authClient } from "@/lib/auth/client";

export default function Home() {
  const { data: session, isPending } = authClient.useSession();

  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/", // A donde vuelve después de loguearse
    });
  };

  const handleLogout = async () => {
    await authClient.signOut();
  };

  if (isPending) return <div className="p-10 text-center">Cargando...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-slate-50">
      <h1 className="text-4xl font-bold text-slate-800">Hola Mundo</h1>
      
      {!session ? (
        <button
          onClick={handleLogin}
          className="px-6 py-3 font-semibold text-white transition-colors bg-black rounded-lg hover:bg-slate-800"
        >
          Iniciar Sesión con GitHub
        </button>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl">Bienvenido, <span className="font-bold">{session.user.name}</span></p>
          <p className="text-sm text-slate-500">Tu rol es: {session.user.role}</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50"
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
}