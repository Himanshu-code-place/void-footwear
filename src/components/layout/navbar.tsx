"use client";

import { useEffect, useState } from "react";

import { useSession, signOut } from "next-auth/react";

import { useCart } from "../../context/cart-context";

import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  function ProfileDropdown({ name }: { name: string }) {
    const [open, setOpen] = useState(false);

    return (
      <div className="relative">
        {/* BUTTON */}
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

        {/* DROPDOWN */}
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

  const [scrolled, setScrolled] = useState(false);

  const { cart, setCartOpen } = useCart();

  const [mounted, setMounted] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* LEFT */}
          <div className="flex items-center gap-14">
            {/* LOGO */}
            <h1 className="text-3xl font-black tracking-[0.3em] text-white">
              VOID
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

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-5">
            {/* SEARCH */}
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

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setMenuOpen(true)} className="lg:hidden">
            <Menu size={30} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black z-50 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* TOP */}
        <div className="flex justify-between items-center px-6 h-20 border-b border-zinc-800">
          <h1 className="text-3xl font-black tracking-widest">VOID</h1>

          <button onClick={() => setMenuOpen(false)}>
            <X size={30} />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col px-6 py-12 gap-10 text-3xl font-black">
          {["MEN", "WOMEN", "NEW ARRIVALS", "COLLECTIONS"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="hover:text-zinc-500 transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
