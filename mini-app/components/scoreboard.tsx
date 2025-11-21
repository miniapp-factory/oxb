"use client";

import { useState } from "react";

export function Scoreboard() {
  const [score, setScore] = useState(0);
  return (
    <div className="p-2 bg-gray-800 text-white rounded">
      <span>Score: {score}</span>
    </div>
  );
}
