import { prisma } from "@/src/lib/prisma";

import { notFound } from "next/navigation";

import AddToCartButton from "@/src/components/cart/add-to-cart-button";

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#efede8] pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="sticky top-24">
          <div className="relative overflow-hidden rounded-[36px] bg-[#f8f7f4] border border-black/5 shadow-[0_20px_80px_rgba(0,0,0,0.05)] group">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[720px] object-cover group-hover:scale-105 transition duration-700"
            />

            {/* TAG */}
            <div className="absolute top-6 left-6 bg-black text-white px-5 py-2 rounded-full text-[11px] tracking-[0.25em] uppercase">
              New Season
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="pt-4">
          {/* CATEGORY */}
          <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500">
            {product.category}
          </p>

          {/* TITLE */}
          <h1 className="text-[64px] leading-[0.9] tracking-[-0.07em] font-semibold text-black mt-5">
            {product.title}
          </h1>

          {/* PRICE */}
          <p className="text-4xl font-bold tracking-[-0.04em] text-black mt-6">
            ₹{product.price}
          </p>

          {/* DESCRIPTION */}
          <p className="text-zinc-600 text-[17px] leading-relaxed mt-8 max-w-xl">
            {product.description}
          </p>

          {/* DIVIDER */}
          <div className="w-full h-px bg-black/10 my-10"></div>

          {/* SIZE */}
          <div>
            <div className="flex items-center justify-between">
              <p className="uppercase tracking-[0.3em] text-[11px] text-zinc-500">
                Select Size
              </p>

              <button className="text-sm text-zinc-500 hover:text-black transition">
                Size Guide
              </button>
            </div>

            <div className="grid grid-cols-5 gap-4 mt-6">
              {["7", "8", "9", "10", "11"].map((size) => (
                <button
                  key={size}
                  className="h-14 rounded-2xl border border-black/10 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 text-sm font-semibold shadow-sm"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <AddToCartButton product={product} />
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-2 gap-5 mt-12">
            {/* DELIVERY */}
            <div className="bg-[#f8f7f4] border border-black/5 rounded-[28px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
              <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-500">
                Delivery
              </p>

              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-black mt-3">
                Free Shipping
              </h3>

              <p className="text-zinc-500 text-sm mt-3">
                Delivered within 3-5 business days.
              </p>
            </div>

            {/* RETURNS */}
            <div className="bg-[#f8f7f4] border border-black/5 rounded-[28px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
              <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-500">
                Returns
              </p>

              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-black mt-3">
                3-Day Returns
              </h3>

              <p className="text-zinc-500 text-sm mt-3">
                Easy replacement and return policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
