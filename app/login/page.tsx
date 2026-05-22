"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log(result);

      if (result?.ok) {
        router.push("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f5f3] grid lg:grid-cols-2 overflow-hidden">
      {/* LEFT */}
      <div className="hidden lg:flex relative overflow-hidden items-end p-16">
        <img
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1600&auto=format&fit=crop"
          alt="shoe"
          className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-105 transition duration-[4000ms]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 text-white">
          <p className="uppercase tracking-[0.4em] text-xs text-zinc-300">
            VOID® FOOTWEAR
          </p>

          <h1 className="text-8xl xl:text-[9rem] font-black leading-[0.85] tracking-[-0.08em] mt-8">
            WELCOME
            <br />
            BACK
          </h1>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[40px] p-12">
          <h2 className="text-5xl font-black tracking-[-0.08em] text-black">
            LOGIN
          </h2>

          <p className="text-zinc-500 mt-4">Continue your premium journey.</p>

          <form onSubmit={handleLogin} className="mt-14 space-y-6">
            {/* EMAIL */}
            <div>
              <label className="text-sm text-zinc-500">Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full mt-3 border border-zinc-200 bg-white/70 shadow-sm px-5 py-4 rounded-full outline-none focus:border-black transition text-black"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-zinc-500">Password</label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full mt-3 border border-zinc-200 bg-white/70 shadow-sm px-5 py-4 rounded-full outline-none focus:border-black transition text-black"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-black text-white py-5 rounded-full font-semibold hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition duration-300 shadow-xl"
            >
              {loading ? "Loading..." : "LOGIN"}
            </button>
          </form>

          {/* SIGNUP */}
          <p className="text-center text-zinc-500 mt-10">
            New to VOID?{" "}
            <a
              href="/signup"
              className="text-black font-semibold hover:opacity-60 transition"
            >
              Create Account
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
