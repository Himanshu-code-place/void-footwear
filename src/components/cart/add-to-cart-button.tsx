"use client";

import { useState } from "react";

import { ShoppingBag } from "lucide-react";

import { useCart } from "../../context/cart-context";

export default function AddToCartButton({
  product,
}: {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
  };
}) {

  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {

    addToCart({
      id: Number(product.id),
      title: product.title,
      price: `₹${product.price}`,
      image: product.image,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="group relative overflow-hidden bg-black text-white px-12 py-6 rounded-full font-semibold text-lg tracking-wide hover:scale-[1.03] active:scale-[0.98] transition duration-500 shadow-2xl hover:shadow-black/30 flex items-center gap-4"
    >

      {/* BG ANIMATION */}
      <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition duration-500"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center gap-4">

        <ShoppingBag
          size={22}
          className="group-hover:rotate-12 transition duration-500"
        />

        <span>
          {added ? "ADDED TO CART" : "ADD TO CART"}
        </span>

      </div>

    </button>
  );
}