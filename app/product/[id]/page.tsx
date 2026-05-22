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
    <main className="min-h-screen bg-[#f6f6f3] pt-28 pb-20 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
        {/* IMAGE */}
        <div className="sticky top-28">
          <div className="relative overflow-hidden rounded-[45px] bg-white shadow-xl hover:shadow-2xl transition duration-700 group cursor-grab active:cursor-grabbing">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[650px] xl:h-[720px] object-cover brightness-[1.02] group-hover:scale-110 transition duration-1000"
            />

            {/* FLOATING TAG */}
            <div className="absolute top-6 left-6 bg-black text-white px-5 py-2 rounded-full text-xs tracking-[0.3em] uppercase">
              New Drop
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="pt-4 lg:pt-10">
          <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
            {product.category}
          </p>

          <h1 className="text-5xl xl:text-6xl font-black tracking-[-0.08em] text-black leading-[0.9] mt-5">
            {product.title}
          </h1>

          <p className="text-4xl font-bold text-black mt-5">₹{product.price}</p>

          <p className="text-zinc-600 text-lg leading-relaxed mt-6 max-w-xl">
            {product.description}
          </p>

          {/* SIZE SELECTOR */}
          <div className="mt-10">
            <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 mb-5">
              Select Size
            </p>

            <div className="flex flex-wrap gap-4">
              {["7", "8", "9", "10", "11"].map((size) => (
                <button
                  key={size}
                  className="w-14 h-14 rounded-2xl border border-zinc-300 bg-white hover:bg-black hover:text-white hover:scale-105 transition duration-300 font-semibold"
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

          {/* EXTRA INFO */}
          <div className="grid grid-cols-2 gap-5 mt-14">
            <div className="bg-white rounded-[28px] p-7 shadow-sm hover:shadow-xl transition duration-500">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Delivery
              </p>

              <h3 className="text-2xl font-bold text-black mt-3">
                Free Shipping
              </h3>
            </div>

            <div className="bg-white rounded-[28px] p-7 shadow-sm hover:shadow-xl transition duration-500">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Returns
              </p>

              <h3 className="text-2xl font-bold text-black mt-3">
                7-Day Returns
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
