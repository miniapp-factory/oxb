"use client";

import { PrivyLogin } from "./privy-login";
import { EmailLogin } from "./email-login";
import { useMiniAppContext } from "./context/miniapp-provider";

export function Login() {
  const { email } = useMiniAppContext();
  return (
    <div className="flex flex-col gap-2">
      {email ? (
        <span className="text-sm">Logged in as {email}</span>
      ) : (
        <>
          <PrivyLogin />
          <EmailLogin />
        </>
      )}
    </div>
  );
}
