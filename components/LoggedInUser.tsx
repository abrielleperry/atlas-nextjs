import Link from "next/link";
import { auth } from "../auth";

export default async function LoggedInUser() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <button
      className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3"
      disabled
    >
      {session.user.image ? (
        <img
          src={session.user.image}
          alt="Profile Picture"
          className="w-6 rounded-full hidden md:block"
        />
      ) : (
        <div className="w-6 h-6 rounded-full bg-gray-400"></div>
      )}
      <div className="hidden md:block">{session.user.name ?? "User"}</div>
    </button>
  );
}
