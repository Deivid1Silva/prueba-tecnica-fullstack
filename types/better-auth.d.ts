import "better-auth";

declare module "better-auth" {
    interface User {
        role: string;
    }
    interface Session {
        user: User;
    }
}

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string | null;
      role: string;
    };
  }
