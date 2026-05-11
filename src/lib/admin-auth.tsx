import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

// Mock admin auth with OTP placeholder.
// Real backend connection (e.g. Supabase magic-link / OTP) to be wired later.

type AdminAuthContextValue = {
  isAuthenticated: boolean;
  email: string | null;
  pendingEmail: string | null;
  requestOtp: (email: string) => Promise<void>;
  verifyOtp: (code: string) => Promise<boolean>;
  logout: () => void;
};

const STORAGE_KEY = "finsense-admin-session";
// Demo-only OTP. Replace with real OTP delivery on backend integration.
const DEMO_OTP = "123456";

const AdminAuthContext = createContext<AdminAuthContextValue | undefined>(undefined);

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [pendingEmail, setPendingEmail] = useState<string | null>(null);

  useEffect(() => {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored) setEmail(stored);
  }, []);

  const requestOtp = async (addr: string) => {
    // TODO: replace with real OTP request
    setPendingEmail(addr);
    // eslint-disable-next-line no-console
    console.info(`[admin-auth] Demo OTP for ${addr}: ${DEMO_OTP}`);
  };

  const verifyOtp = async (code: string) => {
    if (!pendingEmail) return false;
    if (code !== DEMO_OTP) return false;
    window.sessionStorage.setItem(STORAGE_KEY, pendingEmail);
    setEmail(pendingEmail);
    setPendingEmail(null);
    return true;
  };

  const logout = () => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    setEmail(null);
    setPendingEmail(null);
  };

  const value = useMemo(
    () => ({
      isAuthenticated: !!email,
      email,
      pendingEmail,
      requestOtp,
      verifyOtp,
      logout,
    }),
    [email, pendingEmail],
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
};
