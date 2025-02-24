
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default function Login() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-stone-400">
            <h1 className="text-2xl font-bold">Login</h1>
            <form
                className="flex flex-col items-center justify-center gap-4"
                action={async (formData) => {
                    "use server"
                    try {
                        await signIn("resend", {
                            email: formData.get("email"),
                            redirectTo: "/",
                        })
                    } catch (error) {
                        // Signin can fail for a number of reasons, such as the user
                        // not existing, or the user not having the correct role.
                        // In some cases, you may want to redirect to a custom error
                        if (error instanceof AuthError) {
                            return redirect(`/login?error=${error.type}`)
                        }

                        // Otherwise if a redirects happens Next.js can handle it
                        // so you can just re-thrown the error and let Next.js handle it.
                        // Docs:
                        // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                        throw error
                    }
                }}
            >
                <Input type="email" placeholder="Email" name="email" id="email" />
                <Button type="submit">
                    <span>Sign in with Resend</span>
                </Button>
            </form>
        </div>

    )
}