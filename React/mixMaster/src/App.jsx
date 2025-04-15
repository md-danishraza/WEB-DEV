import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cocktail,
  HomeLayout,
  Landing,
  NewsLetter,
  Error,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as cocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/NewsLetter";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />, // layout boilterplate
    errorElement: <Error />, //global Error page
    children: [
      {
        index: true, //index page for the root path
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />, //componenet error
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        loader: cocktailLoader(queryClient),
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action: newsletterAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={myRouter} />
    </QueryClientProvider>
  );
};
export default App;
