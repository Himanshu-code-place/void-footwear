// export default function AdminProductsPage() {
//   return (
//     <main className="min-h-screen bg-[#e9e5df] p-10">
//       <div className="max-w-7xl mx-auto">
//         {/* TOP */}
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
//               Admin Products
//             </p>

//             <h1 className="text-6xl font-black tracking-[-0.07em] mt-4 text-black">
//               Products
//             </h1>
//           </div>

//           <button className="bg-black text-white px-7 py-4 rounded-full font-medium hover:scale-105 transition">
//             Add Product
//           </button>
//         </div>

//         {/* TABLE */}
//         <div className="bg-white rounded-[40px] mt-12 overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
//           {/* HEADER */}
//           <div className="grid grid-cols-5 px-8 py-6 border-b border-zinc-200 text-sm uppercase tracking-[0.2em] text-zinc-500">
//             <p>Product</p>

//             <p>Category</p>

//             <p>Price</p>

//             <p>Status</p>

//             <p>Action</p>
//           </div>

//           {/* ROW */}
//           <div className="grid grid-cols-5 items-center px-8 py-6 border-b border-zinc-200 hover:bg-[#f8f7f4] transition duration-300">
//             <div className="flex items-center gap-4">
//               <div className="w-20 h-20 rounded-[24px] bg-[#f4f1eb] border border-black/5 shadow-sm"></div>

//               <div>
//                 <h3 className="font-bold text-2xl text-black tracking-[-0.04em]">
//                   VOID Street Low
//                 </h3>

//                 <p className="text-sm text-zinc-600 mt-1 font-medium">
//                   Premium Sneakers
//                 </p>
//               </div>
//             </div>

//             <p className="text-zinc-700">Sneakers</p>

//             <p className="font-black text-2xl text-black tracking-[-0.04em">
//               ₹999
//             </p>

//             <div>
//               <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
//                 Active
//               </span>
//             </div>

//             <button className="w-fit bg-black text-white px-5 py-3 rounded-full text-sm hover:scale-105 transition">
//               Edit
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// import { prisma } from "@/src/lib/prisma";

// export default async function AdminProductsPage() {
//   const products = await prisma.product.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return (
//     <main className="min-h-screen bg-[#e9e5df] p-10">
//       <div className="max-w-7xl mx-auto">
//         {/* TOP */}
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
//               Admin Products
//             </p>

//             <h1 className="text-6xl font-black tracking-[-0.07em] mt-4 text-black">
//               Products
//             </h1>
//           </div>

//           <button className="bg-black text-white px-7 py-4 rounded-full font-medium hover:scale-105 transition">
//             Add Product
//           </button>
//         </div>

//         {/* TABLE */}
//         <div className="bg-white rounded-[40px] mt-12 overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
//           {/* HEADER */}
//           <div className="grid grid-cols-5 px-8 py-6 border-b border-zinc-200 text-sm uppercase tracking-[0.2em] text-zinc-500">
//             <p>Product</p>

//             <p>Category</p>

//             <p>Price</p>

//             <p>Status</p>

//             <p>Action</p>
//           </div>

//           {/* PRODUCTS */}
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="grid grid-cols-5 items-center px-8 py-8 border-b border-zinc-200 hover:bg-[#f8f7f4] transition duration-300"
//             >
//               {/* PRODUCT */}
//               <div className="flex items-center gap-5">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-20 h-20 rounded-[24px] object-cover border border-black/5 shadow-sm"
//                 />

//                 <div>
//                   <h3 className="font-bold text-2xl text-black tracking-[-0.04em]">
//                     {product.title}
//                   </h3>

//                   <p className="text-sm text-zinc-600 mt-1 font-medium">
//                     Premium Sneakers
//                   </p>
//                 </div>
//               </div>

//               {/* CATEGORY */}
//               <p className="text-zinc-700 font-medium">{product.category}</p>

//               {/* PRICE */}
//               <p className="font-black text-2xl text-black tracking-[-0.04em]">
//                 ₹{product.price}
//               </p>

//               {/* STATUS */}
//               <div>
//                 <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
//                   Active
//                 </span>
//               </div>

//               {/* ACTION */}
//               <button
//                 onClick={() => deleteProduct(product.id)}
//                 className="w-fit bg-red-500 text-white px-5 py-3 rounded-full text-sm hover:scale-105 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// import Link from "next/link";

// import { prisma } from "@/src/lib/prisma";

// export default async function AdminProductsPage() {
//   const products = await prisma.product.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return (
//     <main className="min-h-screen bg-[#e9e5df] p-10">
//       <div className="max-w-7xl mx-auto">
//         {/* TOP */}
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
//               Admin Products
//             </p>

//             <h1 className="text-6xl font-black tracking-[-0.07em] mt-4 text-black">
//               Products
//             </h1>
//           </div>

//           <Link
//             href="/admin/products/new"
//             className="bg-black text-white px-7 py-4 rounded-full font-medium hover:scale-105 transition"
//           >
//             Add Product
//           </Link>
//         </div>

//         {/* TABLE */}
//         <div className="bg-white rounded-[40px] mt-12 overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
//           {/* HEADER */}
//           <div className="grid grid-cols-5 px-8 py-6 border-b border-zinc-200 text-sm uppercase tracking-[0.2em] text-zinc-500">
//             <p>Product</p>

//             <p>Category</p>

//             <p>Price</p>

//             <p>Status</p>

//             <p>Action</p>
//           </div>

//           {/* PRODUCTS */}
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="grid grid-cols-5 items-center px-8 py-8 border-b border-zinc-200 hover:bg-[#f8f7f4] transition duration-300"
//             >
//               {/* PRODUCT */}
//               <div className="flex items-center gap-5">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-20 h-20 rounded-[24px] object-cover border border-black/5 shadow-sm"
//                 />

//                 <div>
//                   <h3 className="font-bold text-2xl text-black tracking-[-0.04em]">
//                     {product.title}
//                   </h3>

//                   <p className="text-sm text-zinc-600 mt-1 font-medium">
//                     Premium Sneakers
//                   </p>
//                 </div>
//               </div>

//               {/* CATEGORY */}
//               <p className="text-zinc-700 font-medium">{product.category}</p>

//               {/* PRICE */}
//               <p className="font-black text-2xl text-black tracking-[-0.04em]">
//                 ₹{product.price}
//               </p>

//               {/* STATUS */}
//               <div>
//                 <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
//                   Active
//                 </span>
//               </div>

//               {/* ACTION */}
//               <button className="w-fit bg-zinc-300 text-black px-5 py-3 rounded-full text-sm cursor-not-allowed">
//                 Coming Soon
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";

// import { useRouter } from "next/navigation";

// export default function NewProductPage() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     image: "",
//     category: "",
//     price: "",
//   });

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const res = await fetch("/api/admin/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...form,
//           price: Number(form.price),
//         }),
//       });

//       if (!res.ok) {
//         alert("Failed to create product");
//         return;
//       }

//       alert("Product Added 😭🔥");

//       router.push("/admin/products");

//       router.refresh();
//     } catch (error) {
//       console.log(error);

//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="min-h-screen bg-[#e9e5df] py-16 px-6">
//       <div className="max-w-3xl mx-auto bg-white rounded-[40px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
//         <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
//           Admin Panel
//         </p>

//         <h1 className="text-5xl font-black tracking-[-0.06em] mt-4 text-black">
//           Add Product
//         </h1>

//         <form onSubmit={handleSubmit} className="mt-10 space-y-6">
//           <input
//             type="text"
//             placeholder="Product Title"
//             required
//             value={form.title}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 title: e.target.value,
//               })
//             }
//             className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg"
//           />

//           <textarea
//             placeholder="Description"
//             required
//             value={form.description}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 description: e.target.value,
//               })
//             }
//             className="w-full h-40 rounded-2xl border border-zinc-200 p-6 outline-none text-lg resize-none"
//           />

//           <input
//             type="text"
//             placeholder="Image URL"
//             required
//             value={form.image}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 image: e.target.value,
//               })
//             }
//             className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg"
//           />

//           <div className="grid grid-cols-2 gap-5">
//             <input
//               type="text"
//               placeholder="Category"
//               required
//               value={form.category}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   category: e.target.value,
//                 })
//               }
//               className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg"
//             />

//             <input
//               type="number"
//               placeholder="Price"
//               required
//               value={form.price}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   price: e.target.value,
//                 })
//               }
//               className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg"
//             />
//           </div>

//           <button
//             disabled={loading}
//             className="w-full h-16 rounded-full bg-black text-white font-semibold text-lg hover:scale-[1.01] transition"
//           >
//             {loading ? "Creating..." : "Add Product"}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";

// import { useState } from "react";

// import { useRouter } from "next/navigation";

// export default function NewProductPage() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     image: "",
//     category: "",
//     price: "",
//   });

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const res = await fetch("/api/admin/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...form,
//           price: Number(form.price),
//         }),
//       });

//       if (!res.ok) {
//         alert("Failed to create product");

//         return;
//       }

//       alert("Product Added 😭🔥");

//       router.push("/admin/products");

//       router.refresh();
//     } catch (error) {
//       console.log(error);

//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="min-h-screen bg-[#e9e5df] py-14 px-6">
//       <div className="max-w-5xl mx-auto">
//         {/* TOP */}

//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
//               Admin Panel
//             </p>

//             <h1 className="text-6xl font-black tracking-[-0.07em] mt-3 text-black">
//               Add Product
//             </h1>
//           </div>

//           <div className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
//             LIVE STORE
//           </div>
//         </div>

//         {/* FORM CARD */}

//         <div className="grid lg:grid-cols-[1fr_340px] gap-8">
//           {/* LEFT */}

//           <form
//             onSubmit={handleSubmit}
//             className="bg-white rounded-[40px] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.05)] space-y-6"
//           >
//             {/* TITLE */}

//             <div>
//               <label className="text-sm font-semibold text-zinc-700 mb-3 block">
//                 Product Title
//               </label>

//               <input
//                 type="text"
//                 required
//                 value={form.title}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     title: e.target.value,
//                   })
//                 }
//                 placeholder="VOID Runner X"
//                 className="w-full h-16 rounded-2xl bg-[#f7f7f5] border border-zinc-200 px-6 text-lg outline-none focus:border-black transition"
//               />
//             </div>

//             {/* DESCRIPTION */}

//             <div>
//               <label className="text-sm font-semibold text-zinc-700 mb-3 block">
//                 Description
//               </label>

//               <textarea
//                 required
//                 value={form.description}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     description: e.target.value,
//                   })
//                 }
//                 placeholder="Premium luxury sneakers with futuristic comfort."
//                 className="w-full h-40 rounded-2xl bg-[#f7f7f5] border border-zinc-200 p-6 text-lg outline-none resize-none focus:border-black transition"
//               />
//             </div>

//             {/* IMAGE */}

//             <div>
//               <label className="text-sm font-semibold text-zinc-700 mb-3 block">
//                 Image URL
//               </label>

//               <input
//                 type="text"
//                 required
//                 value={form.image}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     image: e.target.value,
//                   })
//                 }
//                 placeholder="https://..."
//                 className="w-full h-16 rounded-2xl bg-[#f7f7f5] border border-zinc-200 px-6 text-lg outline-none focus:border-black transition"
//               />
//             </div>

//             {/* CATEGORY + PRICE */}

//             <div className="grid grid-cols-2 gap-5">
//               <div>
//                 <label className="text-sm font-semibold text-zinc-700 mb-3 block">
//                   Category
//                 </label>

//                 <input
//                   type="text"
//                   required
//                   value={form.category}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       category: e.target.value,
//                     })
//                   }
//                   placeholder="Sneakers"
//                   className="w-full h-16 rounded-2xl bg-[#f7f7f5] border border-zinc-200 px-6 text-lg outline-none focus:border-black transition"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-semibold text-zinc-700 mb-3 block">
//                   Price
//                 </label>

//                 <input
//                   type="number"
//                   required
//                   value={form.price}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       price: e.target.value,
//                     })
//                   }
//                   placeholder="9999"
//                   className="w-full h-16 rounded-2xl bg-[#f7f7f5] border border-zinc-200 px-6 text-lg outline-none focus:border-black transition"
//                 />
//               </div>
//             </div>

//             {/* BUTTON */}

//             <button
//               disabled={loading}
//               className="w-full h-16 rounded-full bg-black text-white text-lg font-semibold hover:scale-[1.01] active:scale-[0.99] transition shadow-xl"
//             >
//               {loading ? "Creating Product..." : "Add Product"}
//             </button>
//           </form>

//           {/* RIGHT PREVIEW */}

//           <div className="bg-black rounded-[40px] p-7 text-white h-fit sticky top-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
//             <p className="uppercase tracking-[0.3em] text-xs text-zinc-400">
//               Live Preview
//             </p>

//             <div className="mt-6">
//               <div className="aspect-square rounded-[30px] overflow-hidden bg-zinc-900">
//                 {form.image ? (
//                   <img
//                     src={form.image}
//                     alt="preview"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center text-zinc-600">
//                     No Image
//                   </div>
//                 )}
//               </div>

//               <div className="mt-6">
//                 <p className="uppercase tracking-[0.25em] text-xs text-zinc-500">
//                   {form.category || "CATEGORY"}
//                 </p>

//                 <h2 className="text-3xl font-black mt-3 tracking-[-0.05em] leading-none">
//                   {form.title || "Product Name"}
//                 </h2>

//                 <p className="text-4xl font-black mt-5">₹{form.price || "0"}</p>

//                 <p className="text-zinc-400 mt-5 leading-relaxed text-sm">
//                   {form.description || "Your product preview will appear here."}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

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
