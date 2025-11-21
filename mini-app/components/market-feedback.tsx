"use client";

export function MarketFeedback({ message }: { message: string }) {
  return (
    <div className="p-2 bg-green-600 text-white rounded">
      {message}
    </div>
  );
}
