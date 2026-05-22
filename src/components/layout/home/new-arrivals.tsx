"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import { useCart } from "../../../context/cart-context";

type Product = {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

export default function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");

      const data = await res.json();

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-zinc-50 py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex justify-between items-end mb-24">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
              Latest Drop
            </p>

            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-[-0.06em] mt-8 text-black">
              NEW
              <br />
              ARRIVALS
            </h2>
          </div>

          <button className="hidden md:block bg-black text-white border border-black px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-500 font-semibold shadow-lg">
            VIEW ALL
          </button>
        </div>

        {/* PRODUCTS */}
        <div className="grid lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="group "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-[40px] bg-white shadow-sm group-hover:shadow-2xl group-hover:-translate-y-3 transition duration-500">
                  {/* LABEL */}
                  <div className="absolute top-6 left-6 z-20 bg-black text-white px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase">
                    New
                  </div>

                  {/* IMAGE */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[650px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>

                  {/* QUICK ADD */}
                  <button
                    onClick={() =>
                      addToCart({
                        id: index,
                        title: product.title,
                        price: `₹${product.price}`,
                        image: product.image,
                      })
                    }
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 bg-white text-black px-8 py-4 rounded-full transition duration-500 font-semibold hover:bg-zinc-200"
                  >
                    QUICK ADD
                  </button>
                </div>

                {/* CONTENT */}
                {/* CONTENT */}
                <div className="bg-white rounded-[30px] mt-4 px-6 py-6 shadow-sm border border-zinc-100 transition duration-500 group-hover:shadow-xl">
                  <p className="uppercase tracking-[0.3em] text-[11px] text-zinc-400">
                    {product.category}
                  </p>

                  <h3 className="text-3xl font-black text-black tracking-[-0.05em] mt-3 leading-none">
                    {product.title}
                  </h3>

                  <p className="text-black font-semibold mt-4 text-lg">
                    ₹{product.price}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
