"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { ClerkSignInAction, ClerkSignUpAction } from "./ClerkActionButtons";
import useIsClient from "./useIsClient";

export default function NavbarAuth() {
  const { isLoaded, isSignedIn } = useAuth();
  const isClient = useIsClient();

  if (!isClient || !isLoaded) {
    return <div aria-hidden="true" className="h-10 w-36" />;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
      {isSignedIn ? (
        <UserButton />
      ) : (
        <>
          <ClerkSignInAction className="rounded-md px-3 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950" />
          <ClerkSignUpAction className="rounded-md bg-teal-700 px-4 py-2 text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700" />
        </>
      )}
    </div>
  );
}
