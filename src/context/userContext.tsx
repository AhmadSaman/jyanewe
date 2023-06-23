import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { supabase } from "../App";

const AuthContext = createContext("Default Value");

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<null | any>(null);
  const [loading, setLoading] = useState(true);
  const something = useCallback(async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data ?? null);
    setLoading(false);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    return () => {
      subscription?.unsubscribe();
    };
  }, []);
  useEffect(() => {
    something();
  }, [something]);
  const value: any = {
    signUp: (data: any) => supabase.auth.signUp(data),
    signIn: () => {
      supabase.auth.signInWithOAuth({
        provider: "google",
      });
    },
    signOut: () => supabase.auth.signOut(),
    user,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext) as any;
};
