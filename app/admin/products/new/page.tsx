// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function NewProductPage() {
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     setLoading(true);

//     const res = await fetch("/api/admin/products", {
//       method: "POST",

//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         title,
//         price: Number(price),
//         image,
//         category,
//         description,
//       }),
//     });

//     setLoading(false);

//     if (res.ok) {
//       router.push("/admin/products");
//     } else {
//       alert("Failed to create product");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#e9e5df] p-10">
//       <div className="max-w-3xl mx-auto bg-white rounded-[40px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
//         <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
//           Admin
//         </p>

//         <h1 className="text-5xl font-black tracking-[-0.06em] text-black mt-4">
//           Add Product
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-6 mt-10">
//           <input
//             type="text"
//             placeholder="Product Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none focus:border-black"
//             required
//           />

//           <input
//             type="number"
//             placeholder="Price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none focus:border-black"
//             required
//           />

//           <input
//             type="text"
//             placeholder="Image URL"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none focus:border-black"
//             required
//           />

//           <input
//             type="text"
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none focus:border-black"
//             required
//           />

//           <textarea
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full h-40 rounded-2xl border border-zinc-200 px-6 py-5 outline-none focus:border-black resize-none"
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full h-16 rounded-full bg-black text-white font-semibold hover:scale-[1.01] transition"
//           >
//             {loading ? "Creating..." : "Create Product"}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    price: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
        }),
      });

      if (!res.ok) {
        alert("Failed to create product");

        return;
      }

      alert("Product Added 😭🔥");

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
    <main className="min-h-screen bg-[#e9e5df] py-14 px-6">
      <div className="max-w-5xl mx-auto">
        {/* TOP */}

        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
              Admin Panel
            </p>

            <h1 className="text-6xl font-black tracking-[-0.07em] mt-3 text-black">
              Add Product
            </h1>
          </div>

          <div className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
            LIVE STORE
          </div>
        </div>

        {/* FORM CARD */}

        <div className="grid lg:grid-cols-[1fr_340px] gap-8">
          {/* LEFT */}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[40px] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.05)] space-y-6"
          >
            {/* TITLE */}

            <div>
              <label className="text-sm font-semibold text-zinc-700 mb-3 block">
                Product Title
              </label>

              <input
                type="text"
                required
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                placeholder="VELTRIX Runner X"
                className="w-full h-16 rounded-2xl bg-[#f7f7f5] border border-zinc-200 px-6 text-lg outline-none focus:border-black transition"
              />
            </div>

            {/* DESCRIPTION */}

            <div>
              <label className="text-sm font-semibold text-zinc-700 mb-3 block">
                Description
              </label>

              <textarea
                required
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
                placeholder="Premium luxury sneakers with futuristic comfort."
                className="w-full h-40 rounded-2xl bg-[#f7f7f5] border border-zinc-200 p-6 text-lg outline-none resize-none focus:border-black transition"
              />
            </div>

            {/* IMAGE */}

            <div>
              <label className="text-sm font-semibold text-zinc-700 mb-3 block">
                Image URL
              </label>

              <input
                type="text"
                required
                value={form.image}
                onChange={(e) =>
                  setForm({
                    ...form,
                    image: e.target.value,
                  })
                }
                placeholder="https://..."
                className="w-full h-16 rounded-2xl bg-[#f7f7f5] border border-zinc-200 px-6 text-lg outline-none focus:border-black transition"
              />
            </div>

            {/* CATEGORY + PRICE */}

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold text-zinc-700 mb-3 block">
                  Category
                </label>

                <input
                  type="text"
                  required
                  value={form.category}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      category: e.target.value,
                    })
                  }
                  placeholder="Sneakers"
                  className="w-full h-16 rounded-2xl bg-[#f7f7f5] border border-zinc-200 px-6 text-lg outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-zinc-700 mb-3 block">
                  Price
                </label>

                <input
                  type="number"
                  required
                  value={form.price}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      price: e.target.value,
                    })
                  }
                  placeholder="9999"
                  className="w-full h-16 rounded-2xl bg-[#f7f7f5] border border-zinc-200 px-6 text-lg outline-none focus:border-black transition"
                />
              </div>
            </div>

            {/* BUTTON */}

            <button
              disabled={loading}
              className="w-full h-16 rounded-full bg-black text-white text-lg font-semibold hover:scale-[1.01] active:scale-[0.99] transition shadow-xl"
            >
              {loading ? "Creating Product..." : "Add Product"}
            </button>
          </form>

          {/* RIGHT PREVIEW */}

          <div className="bg-black rounded-[40px] p-7 text-white h-fit sticky top-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <p className="uppercase tracking-[0.3em] text-xs text-zinc-400">
              Live Preview
            </p>

            <div className="mt-6">
              <div className="aspect-square rounded-[30px] overflow-hidden bg-zinc-900">
                {form.image ? (
                  <img
                    src={form.image}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-600">
                    No Image
                  </div>
                )}
              </div>

              <div className="mt-6">
                <p className="uppercase tracking-[0.25em] text-xs text-zinc-500">
                  {form.category || "CATEGORY"}
                </p>

                <h2 className="text-3xl font-black mt-3 tracking-[-0.05em] leading-none">
                  {form.title || "Product Name"}
                </h2>

                <p className="text-4xl font-black mt-5">₹{form.price || "0"}</p>

                <p className="text-zinc-400 mt-5 leading-relaxed text-sm">
                  {form.description || "Your product preview will appear here."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
