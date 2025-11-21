import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import { CryptoChart } from "@/components/crypto-chart";
import { Animation } from "@/components/animation";
import { MarketFeedback } from "@/components/market-feedback";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <CryptoChart />
      <Animation />
      <MarketFeedback message="You just pushed the market 5% bullish!" />
    </main>
  );
}
