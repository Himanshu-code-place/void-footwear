"use client";

import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

export default function EditProductPage() {

  const router = useRouter();

  const params = useParams();

  const id = params.id;

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    price: "",
  });

  useEffect(() => {

    async function fetchProduct() {

      const res = await fetch(
        `/api/admin/products/${id}`
      );

      const data =
        await res.json();

      setForm({
        title: data.title,
        description:
          data.description,
        image: data.image,
        category:
          data.category,
        price:
          data.price.toString(),
      });

    }

    fetchProduct();

  }, [id]);

  async function handleUpdate(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await fetch(
        `/api/admin/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...form,
            price: Number(
              form.price
            ),
          }),
        }
      );

      if (!res.ok) {

        alert(
          "Failed to update"
        );

        return;

      }

      alert(
        "Product Updated 😭🔥"
      );

      router.push(
        "/admin/products"
      );

      router.refresh();

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <main className="min-h-screen bg-[#e9e5df] py-16 px-6">

      <div className="max-w-3xl mx-auto bg-white rounded-[40px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

        <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">

          Admin Panel

        </p>

        <h1 className="text-5xl font-black tracking-[-0.06em] mt-4 text-black">

          Edit Product

        </h1>

        <form
          onSubmit={handleUpdate}
          className="mt-10 space-y-6"
        >

          <input
            type="text"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
            className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg"
          />

          <textarea
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description:
                  e.target.value,
              })
            }
            className="w-full h-40 rounded-2xl border border-zinc-200 p-6 outline-none text-lg resize-none"
          />

          <input
            type="text"
            value={form.image}
            onChange={(e) =>
              setForm({
                ...form,
                image: e.target.value,
              })
            }
            className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg"
          />

          <div className="grid grid-cols-2 gap-5">

            <input
              type="text"
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category:
                    e.target.value,
                })
              }
              className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg"
            />

            <input
              type="number"
              value={form.price}
              onChange={(e) =>
                setForm({
                  ...form,
                  price:
                    e.target.value,
                })
              }
              className="w-full h-16 rounded-2xl border border-zinc-200 px-6 outline-none text-lg"
            />

          </div>

          <button
            disabled={loading}
            className="w-full h-16 rounded-full bg-black text-white font-semibold text-lg hover:scale-[1.01] transition"
          >

            {loading
              ? "Updating..."
              : "Update Product"}

          </button>

        </form>

      </div>

    </main>

  );

}