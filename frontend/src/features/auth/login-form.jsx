"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("patient@demo.com");
  const [password, setPassword] = useState("1");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (email.trim().toLowerCase() !== "patient@demo.com") {
      setError("Use patient@demo.com for the Patient Portal demo.");
      return;
    }

    if (!password) {
      setError("Enter any password to continue.");
      return;
    }

    router.push("/patient/dashboard");
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <section className="flex flex-col justify-between bg-primary px-10 py-10 text-white">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
            <HeartPulse className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">ClaudMD</span>
        </div>

        <div className="max-w-md">
          <h1 className="font-display text-4xl leading-tight font-semibold md:text-5xl">
            Unified Healthcare Portal
          </h1>
          <p className="mt-4 text-base text-white/85">
            Securely access your healthcare information, manage appointments,
            and review documents all in one place.
          </p>
        </div>

        <p className="text-sm text-white/70">
          © 2026 ClaudMD Healthcare Systems
        </p>
      </section>

      <section className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-muted">
            Enter your credentials to access your secure portal.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <Input
              id="email"
              label="Email or Username"
              type="text"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-ink"
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-sm font-medium text-primary hover:text-primary-dark"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="rounded-xl bg-cream px-4 py-3 text-sm text-ink">
              <p className="mb-2 font-medium">Demo accounts (use any password):</p>
              <ul className="space-y-1 text-muted">
                <li>• patient@demo.com</li>
                <li>• employer@demo.com</li>
                <li>• insurance@demo.com</li>
                <li>• outsider@demo.com</li>
              </ul>
            </div>

            {error ? (
              <p className="text-sm font-medium text-rose-600">{error}</p>
            ) : null}

            <Button type="submit" className="w-full py-3">
              Sign In
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted">
            By logging in, you agree to our{" "}
            <span className="text-primary">Terms of Service</span> and{" "}
            <span className="text-primary">Privacy Notice</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
