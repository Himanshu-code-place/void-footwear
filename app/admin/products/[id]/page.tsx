// "use client";

// import { useEffect, useState } from "react";

// import { useParams, useRouter } from "next/navigation";

// export default function EditProductPage() {
//   const router = useRouter();

//   const params = useParams();

//   const id = Array.isArray(params.id) ? params.id[0] : params.id;

//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     image: "",
//     category: "",
//     price: "",
//   });

//   useEffect(() => {
//     async function fetchProduct() {
//       const res = await fetch(`/api/admin/products/${id}`);

//       const data = await res.json();

//       setForm({
//         title: data.title,
//         description: data.description,
//         image: data.image,
//         category: data.category,
//         price: data.price.toString(),
//       });
//     }

//     fetchProduct();
//   }, [id]);

//   async function handleUpdate(e: React.FormEvent) {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const res = await fetch(`/api/admin/products/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...form,
//           price: Number(form.price),
//         }),
//       });

//       if (!res.ok) {
//         alert("Failed to update");

//         return;
//       }

//       alert("Product Updated 😭🔥");

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
//           Edit Product
//         </h1>

//         <form onSubmit={handleUpdate} className="mt-10 space-y-6">
//           <div className="space-y-3">
//             <label className="text-sm font-semibold text-zinc-500 uppercase tracking-[0.2em]">
//               Product Title
//             </label>

//             <input
//               type="text"
//               placeholder="Enter product title"
//               value={form.title}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   title: e.target.value,
//                 })
//               }
//               className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg text-black placeholder:text-zinc-400"
//             />
//           </div>

//           <textarea
//             value={form.description}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 description: e.target.value,
//               })
//             }
//             className="w-full h-40 rounded-2xl border border-zinc-200 p-6 outline-none text-lg resize-none text-black placeholder:text-zinc-400"
//           />

//           <input
//             type="text"
//             value={form.image}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 image: e.target.value,
//               })
//             }
//             className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg text-black placeholder:text-zinc-400"
//           />

//           <div className="grid grid-cols-2 gap-5">
//             <input
//               type="text"
//               value={form.category}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   category: e.target.value,
//                 })
//               }
//               className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg text-black placeholder:text-zinc-400"
//             />

//             <input
//               type="number"
//               value={form.price}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   price: e.target.value,
//                 })
//               }
//               className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg text-black placeholder:text-zinc-400"
//             />
//           </div>

//           <button
//             disabled={loading}
//             className="w-full h-16 rounded-full bg-black text-white font-semibold text-lg hover:scale-[1.01] transition"
//           >
//             {loading ? "Updating..." : "Update Product"}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

export default function EditProductPage() {
  const router = useRouter();

  const params = useParams();

  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/admin/products/${id}`);

      const data = await res.json();

      setForm({
        title: data.title,
        description: data.description,
        image: data.image,
        category: data.category,
        price: data.price.toString(),
      });
    }

    fetchProduct();
  }, [id]);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(`/api/admin/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
        }),
      });

      if (!res.ok) {
        alert("Failed to update");

        return;
      }

      alert("Product Updated 😭🔥");

      router.push("/admin/products");

      router.refresh();
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="h-screen overflow-hidden bg-[#e9e5df] px-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-[40px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
        <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
          Admin Panel
        </p>

        <h1 className="text-5xl font-black tracking-[-0.06em] mt-4 text-black">
          Edit Product
        </h1>

        <form onSubmit={handleUpdate} className="mt-8 space-y-5">
          {/* TITLE */}

          <div className="space-y-3">
            <label className="text-sm font-semibold text-zinc-500 uppercase tracking-[0.2em]">
              Product Title
            </label>

            <input
              type="text"
              placeholder="Enter product title"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
              className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg text-black placeholder:text-zinc-400 focus:border-black transition"
            />
          </div>

          {/* DESCRIPTION */}

          <div className="space-y-3">
            <label className="text-sm font-semibold text-zinc-500 uppercase tracking-[0.2em]">
              Description
            </label>

            <textarea
              placeholder="Write premium product description..."
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
              className="w-full h-40 rounded-2xl border border-zinc-200 p-6 outline-none text-lg resize-none text-black placeholder:text-zinc-400 focus:border-black transition"
            />
          </div>

          {/* IMAGE URL */}

          <div className="space-y-3">
            <label className="text-sm font-semibold text-zinc-500 uppercase tracking-[0.2em]">
              Product Image URL
            </label>

            <input
              type="text"
              placeholder="Paste image URL..."
              value={form.image}
              onChange={(e) =>
                setForm({
                  ...form,
                  image: e.target.value,
                })
              }
              className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg text-black placeholder:text-zinc-400 focus:border-black transition"
            />
          </div>

          {/* CATEGORY + PRICE */}

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-zinc-500 uppercase tracking-[0.2em]">
                Category
              </label>

              <input
                type="text"
                placeholder="Running / Streetwear"
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
                className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg text-black placeholder:text-zinc-400 focus:border-black transition"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-zinc-500 uppercase tracking-[0.2em]">
                Price
              </label>

              <input
                type="number"
                placeholder="1999"
                value={form.price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: e.target.value,
                  })
                }
                className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg text-black placeholder:text-zinc-400 focus:border-black transition"
              />
            </div>
          </div>

          {/* BUTTON */}

          <button
            disabled={loading}
            className="w-full h-16 rounded-full bg-black text-white font-semibold text-lg hover:scale-[1.01] hover:bg-zinc-800 transition"
          >
            {loading ? "Updating..." : "Update Product"}
          </button>
        </form>
      </div>
    </main>
  );
}
