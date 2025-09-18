"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { LogIn, LogOut, User } from "lucide-react";

export default function Auth() {
  const { data: session, status } = useSession();

  // Redirect to home if already logged in
  useEffect(() => {
    if (status === "authenticated") {
      window.location.href = "/";
    }
  }, [status]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        {/* Loading State */}
        {status === "loading" && (
          <p className="text-gray-600">Checking authentication...</p>
        )}

        {/* Not Signed In */}
        {status === "unauthenticated" && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome Back
            </h1>
            <p className="text-gray-600 mb-6">
              Sign in to continue exploring articles and features.
            </p>
            <button
              onClick={() => signIn("google")}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 transition"
            >
              <LogIn className="w-5 h-5" />
              Sign in with Google
            </button>
          </>
        )}

        {/* Signed In */}
        {status === "authenticated" && session?.user && (
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              {session.user.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  className="w-20 h-20 rounded-full shadow-md"
                />
              ) : (
                <div className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full">
                  <User className="w-10 h-10 text-gray-500" />
                </div>
              )}
              <h2 className="text-xl font-semibold text-gray-900 mt-4">
                {session.user.name}
              </h2>
              <p className="text-gray-600 text-sm">{session.user.email}</p>
            </div>

            <button
              onClick={() => signOut()}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl font-medium shadow-md hover:bg-red-600 transition"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
