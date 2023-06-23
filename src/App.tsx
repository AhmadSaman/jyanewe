import { RouterProvider } from "react-router-dom";
import router from "./router";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://otgivxdqnsvtehjctpdl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90Z2l2eGRxbnN2dGVoamN0cGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0NjQzNDEsImV4cCI6MjAwMzA0MDM0MX0.5C_kgoHHXfUyLuOYrKBW8eyAfr3cJdDZHbPyx_XosvQ"
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
