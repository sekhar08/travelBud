import { signIn, signOut } from "@/auth";

export const login = async () => {
    try {
        await signIn("github", { redirectTo: "/" });
    } catch (error) {
        console.error("Error during sign-in:", error);
    }
}

export const logout = async () => {
    try {
        await signOut();
    } catch (error) {
        console.error("Error during sign-out:", error);
    }
}