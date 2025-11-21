"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useMiniAppContext } from "./context/miniapp-provider";

export function PrivyLogin() {
  const { setEmail } = useMiniAppContext();
  const { ready, authenticated, login, logout } = usePrivy();

  if (!ready) return null;

  if (authenticated) {
    const email = (window as any).privy?.user?.email;
    if (email) setEmail(email);
    return (
      <button
        onClick={logout}
        className="bg-red-600 text-white px-3 py-1 rounded"
      >
        Logout
      </button>
    );
  }

  return (
    <button
      onClick={login}
      className="bg-blue-600 text-white px-3 py-1 rounded"
    >
      Login with Privy
    </button>
  );
}
