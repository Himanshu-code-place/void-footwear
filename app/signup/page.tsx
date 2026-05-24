"use client";

import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Account created successfully!");

      window.location.href = "/login";
    } else {
      alert(data.error);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f5f3] grid lg:grid-cols-2 overflow-hidden">
      {/* LEFT */}
      <div className="hidden lg:flex relative overflow-hidden items-end p-16">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
          alt="shoe"
          className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-105 transition duration-[4000ms]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 text-white">
          <p className="uppercase tracking-[0.4em] text-xs text-zinc-300">
            VELTRIX® FOOTWEAR
          </p>

          <h1 className="text-8xl xl:text-[9rem] font-black leading-[0.85] tracking-[-0.08em] mt-8">
            CREATE
            <br />
            ACCOUNT
          </h1>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[40px] p-12">
          <h2 className="text-5xl font-black tracking-[-0.08em] text-black">
            JOIN VELTRIX
          </h2>

          <p className="text-zinc-500 mt-4">
            Start your premium footwear journey.
          </p>

          <form onSubmit={handleSignup} className="mt-14 space-y-6">
            {/* NAME */}
            <div>
              <label className="text-sm text-zinc-500">Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-3 border border-zinc-200 bg-white/70 shadow-sm px-5 py-4 rounded-full outline-none focus:border-black transition text-black"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-zinc-500">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-3 border border-zinc-200 bg-white/70 shadow-sm px-5 py-4 rounded-full outline-none focus:border-black transition text-black"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-zinc-500">Password</label>

              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-3 border border-zinc-200 bg-white/70 shadow-sm px-5 py-4 rounded-full outline-none focus:border-black transition text-black"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-black text-white py-5 rounded-full font-semibold hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition duration-300 shadow-xl"
            >
              CREATE ACCOUNT
            </button>
          </form>

          {/* LOGIN */}
          <p className="text-center text-zinc-500 mt-10">
            Returning customer?{" "}
            <a
              href="/login"
              className="text-black font-semibold hover:opacity-60 transition"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
