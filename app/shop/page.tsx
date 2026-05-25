// const products = [
//   {
//     id: 1,
//     title: "Air Motion",
//     price: "₹12,999",
//     category: "Running",
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     id: 2,
//     title: "Urban Pulse",
//     price: "₹10,499",
//     category: "Streetwear",
//     image:
//       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     id: 3,
//     title: "Velocity X",
//     price: "₹14,999",
//     category: "Sports",
//     image:
//       "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     id: 4,
//     title: "Street Runner",
//     price: "₹11,999",
//     category: "Casual",
//     image:
//       "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1200&auto=format&fit=crop",
//   },
// ];

// export default function ShopPage() {
//   return (
//     <main className="bg-white min-h-screen">

//       {/* HEADER */}
//       <div className="border-b">

//         <div className="max-w-7xl mx-auto px-6 py-14">

//           <p className="uppercase tracking-[0.3em] text-sm text-zinc-500">
//             Explore Collection
//           </p>

//           <h1 className="text-6xl font-black mt-4 text-black">
//             SHOP ALL
//           </h1>

//         </div>

//       </div>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-[250px_1fr] gap-16">

//         {/* SIDEBAR */}
//         <aside>

//           <h2 className="text-xl font-bold text-black mb-8">
//             Filters
//           </h2>

//           <div className="space-y-5">

//             <button className="block text-left text-black hover:text-zinc-500 transition">
//               Running
//             </button>

//             <button className="block text-left text-black hover:text-zinc-500 transition">
//               Casual
//             </button>

//             <button className="block text-left text-black hover:text-zinc-500 transition">
//               Sports
//             </button>

//             <button className="block text-left text-black hover:text-zinc-500 transition">
//               Streetwear
//             </button>

//           </div>

//         </aside>

//         {/* PRODUCTS */}
//         <section>

//           {/* TOPBAR */}
//           <div className="flex justify-between items-center mb-12">

//             <p className="text-zinc-600">
//               Showing 4 Products
//             </p>

//             <select className="border border-zinc-300 px-4 py-3 text-black outline-none">
//               <option>Newest</option>
//               <option>Price Low to High</option>
//               <option>Price High to Low</option>
//             </select>

//           </div>

//           {/* GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="group hover:-translate-y-2 transition duration-500"
//               >

//                 <div className="bg-zinc-100 overflow-hidden rounded-2xl">

//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
//                   />

//                 </div>

//                 <div className="mt-5">

//                   <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
//                     {product.category}
//                   </p>

//                   <h2 className="text-2xl font-bold mt-2 text-black">
//                     {product.title}
//                   </h2>

//                   <div className="flex justify-between items-center mt-4">

//                     <p className="text-zinc-700 font-medium">
//                       {product.price}
//                     </p>

//                     <button className="text-sm font-semibold hover:underline text-black">
//                       ADD TO CART
//                     </button>

//                   </div>

//                 </div>

//               </div>
//             ))}

//           </div>

//         </section>

//       </div>

//     </main>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: "1",
    name: "Velocity X",
    price: "₹2797",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Air Motion",
    price: "₹3199",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Urban Flex",
    price: "₹2499",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Puma Classic",
    price: "₹2999",
    image:
      "https://teakwoodleathers.com/cdn/shop/products/T_SH_1487_03_TM41_1_1080x.jpg?v=1750933739",
  },
];

export default function ShopPage() {
  const [sort, setSort] = useState("newest");

  const sortedProducts = [...products].sort((a, b) => {
    const priceA = Number(a.price.replace("₹", ""));
    const priceB = Number(b.price.replace("₹", ""));

    if (sort === "low") {
      return priceA - priceB;
    }

    if (sort === "high") {
      return priceB - priceA;
    }

    return 0;
  });

  return (
    <div className="min-h-screen bg-[#f5f3ee]">
      {/* HERO */}
      <section className="px-8 md:px-16 pt-16 pb-10 border-b border-black/5">
        <p className="text-[13px] tracking-[0.35em] text-zinc-500 uppercase">
          Explore Collection
        </p>

        <div className="flex items-end justify-between mt-4 flex-wrap gap-5">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight text-black">
            SHOP ALL
          </h1>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-full bg-black text-white text-sm shadow-lg">
              New Arrivals
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-8 md:px-16 py-10">
        <div className="flex items-center justify-between mb-10">
          <p className="text-zinc-600 text-sm">
            Showing {products.length} Products
          </p>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-white border border-black/10 rounded-xl px-4 py-3 text-sm outline-none shadow-sm text-black"
          >
            <option value="newest">Newest</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
                {/* IMAGE */}
                <div className="relative h-[340px] overflow-hidden bg-[#f8f8f8]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute top-4 left-4 bg-black text-white text-[11px] tracking-[0.2em] uppercase px-4 py-2 rounded-full">
                    New
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[22px] font-bold text-black">
                      {product.name}
                    </h2>

                    <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition">
                      +
                    </button>
                  </div>

                  <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                    Premium crafted sneaker built for comfort and daily motion.
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-black">
                      {product.price}
                    </p>

                    <span className="text-xs text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                      In Stock
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
