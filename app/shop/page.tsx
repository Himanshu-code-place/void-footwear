const products = [
  {
    id: 1,
    title: "Air Motion",
    price: "₹12,999",
    category: "Running",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Urban Pulse",
    price: "₹10,499",
    category: "Streetwear",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Velocity X",
    price: "₹14,999",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Street Runner",
    price: "₹11,999",
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ShopPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* HEADER */}
      <div className="border-b">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <p className="uppercase tracking-[0.3em] text-sm text-zinc-500">
            Explore Collection
          </p>

          <h1 className="text-6xl font-black mt-4 text-black">
            SHOP ALL
          </h1>

        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-[250px_1fr] gap-16">

        {/* SIDEBAR */}
        <aside>

          <h2 className="text-xl font-bold text-black mb-8">
            Filters
          </h2>

          <div className="space-y-5">

            <button className="block text-left text-black hover:text-zinc-500 transition">
              Running
            </button>

            <button className="block text-left text-black hover:text-zinc-500 transition">
              Casual
            </button>

            <button className="block text-left text-black hover:text-zinc-500 transition">
              Sports
            </button>

            <button className="block text-left text-black hover:text-zinc-500 transition">
              Streetwear
            </button>

          </div>

        </aside>

        {/* PRODUCTS */}
        <section>

          {/* TOPBAR */}
          <div className="flex justify-between items-center mb-12">

            <p className="text-zinc-600">
              Showing 4 Products
            </p>

            <select className="border border-zinc-300 px-4 py-3 text-black outline-none">
              <option>Newest</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

            {products.map((product) => (
              <div
                key={product.id}
                className="group hover:-translate-y-2 transition duration-500"
              >

                <div className="bg-zinc-100 overflow-hidden rounded-2xl">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="mt-5">

                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    {product.category}
                  </p>

                  <h2 className="text-2xl font-bold mt-2 text-black">
                    {product.title}
                  </h2>

                  <div className="flex justify-between items-center mt-4">

                    <p className="text-zinc-700 font-medium">
                      {product.price}
                    </p>

                    <button className="text-sm font-semibold hover:underline text-black">
                      ADD TO CART
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}