import "./index.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import ThemeProvider from "@/components/ThemeProvider";

import App from "./App";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    {/* <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools /> */}
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <App />
    </ThemeProvider>
    {/* </QueryClientProvider> */}
  </BrowserRouter>,
);
