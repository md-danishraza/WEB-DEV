import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function AppProvider({ children }) {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [pageId, setPageId] = useState(null);
  function openSidebar() {
    setSidebar(true);
  }
  function closeSidebar() {
    setSidebar(false);
  }
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
}
