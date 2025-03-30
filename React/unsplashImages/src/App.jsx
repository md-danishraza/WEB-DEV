import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import Gallery from "./Gallery";
import AppContextProvider from "./AppContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./Footer";

const queryClient = new QueryClient();
const App = () => {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <main>
          <h1 onClick={() => window.location.reload()}>Unsplash Images</h1>
          <ThemeToggle />
          <SearchForm />
          <Gallery />
          <Footer />
        </main>
      </QueryClientProvider>
    </AppContextProvider>
  );
};
export default App;
