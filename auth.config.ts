
import { XataAdapter } from "@auth/xata-adapter"
import { XataClient } from "@/database/client"
import { Adapter } from "next-auth/adapters";
import Resend from "next-auth/providers/resend"
import { resend } from "@/resend"
import SignInEmail from "./resend/sign-in-email";
import { NextAuthConfig, User, Session } from "next-auth";
import { JWT } from "next-auth/jwt";


const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";


export const authConfig = {
    adapter: XataAdapter(XataClient) as Adapter,
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
        Resend({
            from: "no-reply@disi.au",
            sendVerificationRequest({
                identifier: email,
                url,
                provider: { from },
            }) {
                const emailVerificationLink = new URL(url);
                emailVerificationLink.searchParams.set(
                    "callbackUrl",
                    `${baseUrl}`
                );
                const newLink = emailVerificationLink.href;
                resend.emails.send({
                    from: from || "no-reply@disi.au",
                    to: [email],
                    subject:
                        "This is your secure link to sign in to Preacta Talent Intelligence",
                    react: SignInEmail({
                        url: newLink,
                    }),
                });
            },
        }),
    ],
    callbacks: {
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth
        },
        async jwt({ token, user }: { token: JWT; user: User }) {
            if (user) {
                token.clientCategories = user.clientCategories;
                token.companyId = user.companyId;
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            session.user.companyId = token.companyId as number;
            session.user.role = token.role as string;
            session.user.id = token.id as string;
            session.user.clientCategories = token.clientCategories as string[];
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
} as NextAuthConfig