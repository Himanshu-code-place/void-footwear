"use client";

import { motion } from "framer-motion";

export default function EditorialShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-black text-white py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        {/* LEFT */}
        <div>
          <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
            VOID® PERFORMANCE
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-[-0.06em] mt-8">
            DESIGNED
            <br />
            TO FLOW
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mt-10">
            Every silhouette is engineered with precision, balancing modern
            streetwear aesthetics with high-performance movement and timeless
            design.
          </p>

          <button className="mt-12 border border-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition duration-500">
            DISCOVER MORE
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* BIG IMAGE */}
          <div className="overflow-hidden rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1400&auto=format&fit=crop"
              alt="editorial shoe"
              className="w-full h-[800px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* FLOATING CARD */}
          <div className="absolute -bottom-10 -left-10 bg-white text-black p-8 rounded-[30px] shadow-2xl">
            <p className="uppercase text-xs tracking-[0.3em] text-zinc-500">
              New Drop
            </p>

            <h3 className="text-3xl font-black mt-3">VOID REACT</h3>

            <p className="text-zinc-600 mt-3">Built for everyday movement.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
