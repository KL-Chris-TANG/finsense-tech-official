import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, ShieldCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useAdminAuth } from "@/lib/admin-auth";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const { requestOtp, verifyOtp, pendingEmail, isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"email" | "otp">(pendingEmail ? "otp" : "email");
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    navigate("/admin/news", { replace: true });
  }

  const handleSendOtp = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      await requestOtp(email.trim());
      setStep("otp");
      toast({
        title: "OTP sent",
        description: `A 6-digit code has been sent to ${email.trim()}. (Demo: 123456)`,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) return;
    setLoading(true);
    try {
      const ok = await verifyOtp(code);
      if (ok) {
        toast({ title: "Signed in", description: "Welcome to the admin console." });
        navigate("/admin/news", { replace: true });
      } else {
        toast({ title: "Invalid code", description: "Please try again.", variant: "destructive" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div lang="en" className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="border border-border rounded-2xl bg-card p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="text-primary" size={22} />
            <h1 className="text-2xl font-bold">Admin Console</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            Sign in with your registered email. We will send you a one-time passcode.
          </p>

          {step === "email" ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@finsense.tech"
                    className="pl-9"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending…" : "Send one-time passcode"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="space-y-2">
                <Label>Enter the 6-digit code</Label>
                <p className="text-xs text-muted-foreground">
                  Sent to <span className="text-foreground">{pendingEmail ?? email}</span>
                </p>
                <div className="pt-2 flex justify-center">
                  <InputOTP maxLength={6} value={code} onChange={setCode}>
                    <InputOTPGroup>
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <InputOTPSlot key={i} index={i} />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading || code.length !== 6}>
                {loading ? "Verifying…" : "Verify & sign in"}
              </Button>
              <button
                type="button"
                onClick={() => {
                  setStep("email");
                  setCode("");
                }}
                className="w-full inline-flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft size={12} /> Use a different email
              </button>
            </form>
          )}

          <p className="mt-8 text-[11px] text-muted-foreground text-center">
            Demo OTP authentication — backend connection will be wired later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
