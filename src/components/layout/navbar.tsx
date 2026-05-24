"use client";

import { useEffect, useState } from "react";

import { useSession, signOut } from "next-auth/react";

import { useCart } from "../../context/cart-context";

import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  function ProfileDropdown({ name }: { name: string }) {
    const [open, setOpen] = useState(false);

    return (
      <div className="relative hidden lg:block">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
        >
          <span className="text-[15px] tracking-[0.08em] font-medium text-white/95">
            {name}
          </span>

          <span
            className={`transition duration-300 text-[10px] text-zinc-400 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {open && (
          <div className="absolute right-0 top-[60px] w-52 bg-black/70 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <button className="w-full text-left px-5 py-4 text-sm text-white hover:bg-white/5 transition">
              Account
            </button>

            <button className="w-full text-left px-5 py-4 text-sm text-white hover:bg-white/5 transition">
              Orders
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("cart");

                signOut();
              }}
              className="w-full text-left px-5 py-4 text-sm text-red-400 hover:bg-red-500/10 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const [scrolled, setScrolled] = useState(false);

  const { cart, setCartOpen } = useCart();

  const [mounted, setMounted] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 border-b border-white/10 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-black/70 py-1 shadow-2xl"
          : "backdrop-blur-xl bg-black/40 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* LEFT */}
          <div className="flex items-center gap-14">
            {/* LOGO */}
            <h1 className="text-3xl font-black tracking-[0.3em] text-white">
              VELTRIX
            </h1>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {["MEN", "WOMEN", "NEW ARRIVALS", "COLLECTIONS"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm tracking-[0.2em] text-white/90 hover:text-white transition duration-300 relative after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT DESKTOP */}
          <div className="hidden lg:flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 text-sm outline-none rounded-full w-56 text-white placeholder:text-zinc-400 focus:border-white/30 transition"
            />

            {/* CART */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative hover:scale-110 transition duration-300"
            >
              <ShoppingBag size={24} />

              <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {mounted ? cart.length : 0}
              </span>
            </button>

            {/* AUTH */}
            {session ? (
              <ProfileDropdown name={session.user?.name || "User"} />
            ) : (
              <a
                href="/login"
                className="bg-white text-black px-6 py-3 text-sm font-semibold rounded-full hover:bg-zinc-200 hover:scale-105 transition duration-300"
              >
                LOGIN
              </a>
            )}
          </div>

          {/* MOBILE RIGHT */}
          <div className="flex lg:hidden items-center gap-5">
            {/* MOBILE CART */}
            <button onClick={() => setCartOpen(true)} className="relative">
              <ShoppingBag size={26} color="white" />

              <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {mounted ? cart.length : 0}
              </span>
            </button>

            {/* MOBILE MENU */}
            <button onClick={() => setMenuOpen(true)}>
              <Menu size={30} color="white" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[9999] bg-black transition-all duration-500 overflow-y-auto ${
          menuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* TOP */}
        <div className="flex justify-between items-center px-6 h-24 border-b border-white/10">
          <h1 className="text-3xl font-black tracking-[0.3em] text-white">
            VELTRIX
          </h1>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:rotate-90 transition duration-300"
          >
            <X size={36} />
          </button>
        </div>

        {/* MENU CONTENT */}
        <div className="min-h-[calc(100vh-96px)] flex flex-col justify-between px-6 py-10">
          {/* LINKS */}
          <div className="flex flex-col gap-8 pt-6">
            {["MEN", "WOMEN", "NEW ARRIVALS", "COLLECTIONS"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-[42px] sm:text-[54px] leading-none font-black tracking-[-0.06em] text-white hover:text-zinc-500 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* BOTTOM */}
          <div className="space-y-4 pt-16 pb-8">
            {!session && (
              <a
                href="/login"
                className="w-full h-14 rounded-full bg-white text-black flex items-center justify-center font-black text-lg hover:bg-zinc-200 transition"
              >
                LOGIN
              </a>
            )}

            <button
              onClick={() => {
                setMenuOpen(false);
                setCartOpen(true);
              }}
              className="w-full h-14 rounded-full border border-white/10 bg-white/5 text-white font-black text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              OPEN CART ({mounted ? cart.length : 0})
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
