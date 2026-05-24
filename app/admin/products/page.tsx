import Link from "next/link";

import { prisma } from "@/src/lib/prisma";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#e9e5df] p-10">
      <div className="max-w-7xl mx-auto">
        {/* TOP */}

        <div className="flex items-center justify-between">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
              Admin Products
            </p>

            <h1 className="text-6xl font-black tracking-[-0.07em] mt-4 text-black">
              Products
            </h1>
          </div>

          <Link
            href="/admin/products/new"
            className="bg-black text-white px-7 py-4 rounded-full font-medium hover:scale-105 transition"
          >
            Add Product
          </Link>
        </div>

        {/* TABLE */}

        <div className="bg-white rounded-[40px] mt-12 overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
          {/* HEADER */}

          <div className="grid grid-cols-5 px-8 py-6 border-b border-zinc-200 text-sm uppercase tracking-[0.2em] text-zinc-500">
            <p>Product</p>

            <p>Category</p>

            <p>Price</p>

            <p>Status</p>

            <p>Action</p>
          </div>

          {/* PRODUCTS */}

          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-5 items-center px-8 py-8 border-b border-zinc-200 hover:bg-[#f8f7f4] transition duration-300"
            >
              {/* PRODUCT */}

              <div className="flex items-center gap-5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 rounded-[24px] object-cover border border-black/5 shadow-sm"
                />

                <div>
                  <h3 className="font-bold text-2xl text-black tracking-[-0.04em] leading-none">
                    {product.title}
                  </h3>

                  <p className="text-sm text-zinc-600 mt-2 font-medium">
                    Premium Sneakers
                  </p>
                </div>
              </div>

              {/* CATEGORY */}

              <p className="text-zinc-700 font-medium text-lg">
                {product.category}
              </p>

              {/* PRICE */}

              <p className="font-black text-2xl text-black tracking-[-0.04em]">
                ₹{product.price}
              </p>

              {/* STATUS */}

              <div>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  Active
                </span>
              </div>

              {/* ACTION */}

              <Link
                href={`/admin/products/${product.id}`}
                className="w-fit bg-black text-white px-5 py-3 rounded-full text-sm hover:scale-105 transition"
              >
                Edit
              </Link>
            </div>
          ))}

          {/* EMPTY */}

          {products.length === 0 && (
            <div className="py-24 text-center">
              <h2 className="text-3xl font-bold text-black">
                No Products Found
              </h2>

              <p className="text-zinc-500 mt-3">Add your first product 😭🔥</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
