const sizes = ["6", "7", "8", "9", "10"];

export default function ProductPage() {
  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* LEFT IMAGE */}
        <div>

          <div className="bg-zinc-100 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop"
              alt="shoe"
              className="w-full h-[700px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center">

          <p className="uppercase text-sm tracking-[0.3em] text-zinc-500">
            Premium Running
          </p>

          <h1 className="text-6xl font-black mt-5 text-black">
            AIR MOTION X
          </h1>

          <p className="text-3xl font-bold mt-6 text-black">
            ₹12,999
          </p>

          <p className="text-zinc-600 mt-8 leading-relaxed text-lg">
            Built for performance and everyday comfort.
            Premium cushioning technology with modern
            streetwear aesthetics.
          </p>

          {/* SIZE */}
          <div className="mt-10">

            <p className="font-semibold mb-4 text-black">
              Select Size
            </p>

            <div className="flex gap-4 flex-wrap">

              {sizes.map((size) => (
                <button
                  key={size}
                  className="border border-zinc-400 text-black w-14 h-14 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-105"
                >
                  {size}
                </button>
              ))}

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-12">

            <button className="bg-black text-white px-10 py-5 font-semibold rounded-full hover:bg-zinc-800 transition">
              ADD TO CART
            </button>

            <button className="border border-black text-black px-10 py-5 font-semibold rounded-full hover:bg-black hover:text-white transition">
              BUY NOW
            </button>

          </div>

          {/* DELIVERY */}
          <div className="mt-14 border-t pt-8 text-black">

            <div className="flex justify-between py-4 border-b">
              <span>Free Delivery</span>
              <span>2-4 Days</span>
            </div>

            <div className="flex justify-between py-4 border-b">
              <span>Return Policy</span>
              <span>7 Days</span>
            </div>

        

          </div>

        </div>

      </div>

    </main>
  );
}