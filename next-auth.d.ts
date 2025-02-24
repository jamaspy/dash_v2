import { DefaultSession } from "next-auth";

// Extend the user object in the session without causing a circular reference
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      companyId: number;
      role: string;
      clientCategories: string[];
      emailVerified: Date | null;
    } & DefaultSession["user"]; // This ensures the default fields (like name, email, image) are preserved
  }

  interface User {
    id: string;
    companyId: number;
    role: string;
    emailVerified: Date | null;
    clientCategories: string[];
  }
}

// Extend the JWT token interface to include custom fields
declare module "next-auth/jwt" {
  interface JWT {
    companyId?: number;
    role?: string;
    clientCategories?: string[];
  }
}
