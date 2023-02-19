import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/index.css";
import { createClient, Provider } from "urql";
import { AuthProvider } from "@/context/auth";

const headers = {
  apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
};

const client = createClient({
  url: `${import.meta.env.VITE_SUPABASE_URL}/graphql/v1`,
  fetchOptions: () => ({ headers }),
  requestPolicy: "cache-and-network",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
