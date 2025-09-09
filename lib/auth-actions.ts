"use server";

import { signIn, signOut } from "@/auth";

export const login = async () => {
    return signIn("github", { redirectTo: "/" });
};

export const logout = async () => {
    return signOut();
};