"use client";

import Link from "next/link";

import { X } from "lucide-react";

import { useEffect, useState } from "react";

import { useCart } from "../../context/cart-context";

export default function CartDrawer() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition duration-500 ${
          cartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-50 transition-transform duration-500 flex flex-col ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 h-24 border-b">
          <h2 className="text-2xl font-black text-black">CART</h2>

          <button onClick={() => setCartOpen(false)}>
            <X size={28} className="text-black" />
          </button>
        </div>

        {/* PRODUCTS */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <p className="text-zinc-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-2xl"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-black">{item.title}</h3>

                    <p className="text-zinc-500 mt-2">{item.price}</p>

                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 rounded-full border border-zinc-300 text-black hover:bg-black hover:text-white transition"
                      >
                        -
                      </button>

                      <span className="text-black font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 rounded-full border border-zinc-300 text-black hover:bg-black hover:text-white transition"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-3 text-sm text-red-500 hover:text-red-700 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SUBTOTAL */}
        <div className="border-t px-6 py-5 flex justify-between items-center">
          <p className="text-zinc-500">Subtotal</p>

          <p className="text-2xl font-black text-black">
            ₹
            {cart.reduce(
              (total, item) =>
                total +
                Number(item.price.replace(/[^0-9]/g, "")) * item.quantity,
              0,
            )}
          </p>
        </div>

        {/* FOOTER */}
        <div className="border-t p-6">
          <div className="mt-6">
            <Link href="/checkout">
              <button className="w-full bg-black text-white py-5 rounded-full font-semibold hover:bg-zinc-800 transition duration-300">
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
