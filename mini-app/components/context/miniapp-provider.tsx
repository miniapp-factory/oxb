"use client";

import { createContext, useContext, useEffect, useState } from "react";
import sdk, { Context } from "@farcaster/miniapp-sdk";
import { MiniAppSDK } from "@farcaster/miniapp-sdk/dist/types";

export interface MiniAppContext {
  sdk: MiniAppSDK;
  context: Context.MiniAppContext | undefined;
  isInMiniApp: boolean | undefined;
  email?: string;
  setEmail: (email: string) => void;
}
const defaultSettings: MiniAppContext = {
  sdk,
  context: undefined,
  isInMiniApp: undefined,
  email: undefined,
  setEmail: () => {},
};
const MiniAppContext = createContext<MiniAppContext>(defaultSettings);

export function MiniAppProvider({ children }: { children: React.ReactNode }) {
  const [context, setContext] = useState<MiniAppContext>(defaultSettings);

  useEffect(() => {
    const ready = async () => {
      await Promise.all([
        sdk.context
          .then((context) =>
            setContext((oldContext) => {
              return { ...oldContext, context };
            })
          )
          .catch(console.error),
        sdk
          .isInMiniApp()
          .then((isInMiniApp) =>
            setContext((oldContext) => {
              return { ...oldContext, isInMiniApp };
            })
          )
          .catch(console.error),
        ,
      ]);

      await sdk.actions.ready().catch(console.error);
    };

    ready();
  }, []);

  const setEmail = (email: string) => {
    setContext((oldContext) => ({ ...oldContext, email }));
  };

  return (
    <MiniAppContext.Provider value={{ ...context, setEmail }}>
      {children}
    </MiniAppContext.Provider>
  );
}

export function useMiniAppContext() {
  return useContext(MiniAppContext);
}
