"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      onClick={() => signOut()}
      className="bg-red-500 text-white px-4 py-2"
    >
      Sign Out
    </button>
  ) : (
    <button
      onClick={() => signIn("github")}
      className="bg-blue-500 text-white px-4 py-2"
    >
      Sign In with GitHub
    </button>
  );
}
