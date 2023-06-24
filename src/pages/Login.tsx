import { Auth } from "@supabase/auth-ui-react";
import {
  ThemeSupa,
  ThemeMinimal,
  ThemeVariables,
} from "@supabase/auth-ui-shared";
import { supabase } from "../App";
import { useAuth } from "../context/userContext";
import { Navigate } from "react-router";
import { Stack } from "@chakra-ui/layout";

const Login = () => {
  const { user } = useAuth();
  if (user) return <Navigate to="/" />;
  return (
    <Stack
      mt={[50, 100]}
      mx={"auto"}
      justifyContent="center"
      width={["90%", "60%"]}
    >
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
        }}
        providers={["google"]}
      />
    </Stack>
  );
};

export default Login;
