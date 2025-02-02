import { createContext, ReactNode, SetStateAction, useState } from "react";

export const AppContext = createContext<AppContextType>(null);
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const value: AppContextType = {
    sidebarCollapsed,
    setSidebarCollapsed,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export type AppContextType = {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: React.Dispatch<SetStateAction<boolean>>;
} | null;
