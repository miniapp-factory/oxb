"use client";

import { useState } from "react";
import { useMiniAppContext } from "@/components/context/miniapp-provider";

export function EmailLogin() {
  const { setEmail } = useMiniAppContext();
  const [email, setEmailState] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app you would send the email to a backend or an email‑auth service.
    // Here we simply store it in context for demonstration.
    setEmail(email);
    alert(`Email ${email} registered (demo).`);
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
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Register Email
      </button>
    </form>
  );
}
