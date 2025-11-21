"use client";

import { useState } from "react";
import { useMiniAppContext } from "./context/miniapp-provider";

export function EmailLogin() {
  const { setEmail } = useMiniAppContext();
  const [email, setEmailState] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmailState(e.target.value)}
        required
        className="border rounded px-2 py-1"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Register Email
      </button>
    </form>
  );
}
