"use client";

import { useState } from "react";

export default function ProductPage() {
  const product = {
    title: "Velocity X",

    category: "RUNNING",

    price: 2797,

    description: "Modern running silhouette engineered for movement.",

    image: "/products/main.jpeg",

    gallery: [
      "/products/shoe1.jpeg",
      "/products/shoe2.jpeg",
      "/products/shoe3.jpeg",
    ],

    video: "/products/demo.mp4",
  };

  const [selectedImage, setSelectedImage] = useState(product.image);

  const [showVideo, setShowVideo] = useState(false);

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const [added, setAdded] = useState(false);

  const [showGuide, setShowGuide] = useState(false);

  const galleryImages = [product.image, ...product.gallery];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f1ec] px-4 sm:px-5 lg:px-10 py-5 sm:py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start overflow-hidden">
        {/* LEFT */}

        <div>
          {/* MAIN IMAGE */}

          <div className="relative overflow-hidden rounded-[36px] bg-[#f8f8f8] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {showVideo ? (
              <video
                controls
                autoPlay
                muted
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover rounded-[36px]"
              >
                <source src={product.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={selectedImage}
                alt="shoe"
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover hover:scale-[1.03] transition duration-700"
              />
            )}

            {/* TAG */}

            <div className="absolute top-5 left-5">
              <div className="bg-black/70 backdrop-blur-xl text-white text-[10px] tracking-[0.35em] px-5 py-3 rounded-full border border-white/10">
                NEW SEASON
              </div>
            </div>

            {/* GLOW */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* THUMBNAILS */}

          <div className="flex items-center gap-3 mt-5 overflow-x-auto pb-2">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedImage(img);

                  setShowVideo(false);
                }}
                className={`relative min-w-[72px] w-[72px] h-[72px] sm:w-24 sm:h-24
                  selectedImage === img && !showVideo
                    ? "border-black shadow-[0_8px_25px_rgba(0,0,0,0.12)] scale-[1.03]"
                    : "border-zinc-200 hover:border-zinc-400"
                }`}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}

            {/* VIDEO */}

            <button
              onClick={() => setShowVideo(true)}
              className={`relative min-w-[72px] w-[72px] h-[72px] sm:w-24 sm:h-24
                showVideo
                  ? "border-black shadow-[0_8px_25px_rgba(0,0,0,0.12)] scale-[1.03]"
                  : "border-zinc-200 hover:border-zinc-400"
              }`}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                muted
              >
                <source src={product.video} type="video/mp4" />
              </video>

              <div className="relative z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md text-black">
                ▶
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="pt-2">
          {/* CATEGORY */}

          <p className="uppercase tracking-[0.35em] text-xs text-zinc-500 font-medium">
            {product.category}
          </p>

          {/* TITLE */}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-[-0.08em] leading-none text-black mt-4">
            {product.title}
          </h1>

          {/* PRICE */}

          <div className="flex items-center gap-4 mt-5">
            <p className="text-2xl lg:text-3xl font-black text-black">
              ₹{product.price}
            </p>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
              In Stock
            </span>
          </div>

          {/* DESCRIPTION */}

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mt-7 max-w-xl">
            {product.description}
          </p>

          {/* DIVIDER */}

          <div className="h-px bg-zinc-300 my-9" />

          {/* SIZE */}

          <div className="flex items-center justify-between mb-4">
            <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 font-medium">
              Select Size
            </p>

            <button
              onClick={() => setShowGuide(true)}
              className="text-sm text-zinc-500 hover:text-black transition"
            >
              Size Guide
            </button>
          </div>

          {/* SIZE BUTTONS */}

          <div className="flex gap-3 flex-wrap">
            {[7, 8, 9, 10, 11].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center ${
                  selectedSize === size
                    ? "bg-[#2a2a2a] text-white border border-zinc-600 ring-2 ring-zinc-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.18)] scale-105"
                    : "bg-white text-black border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* ADD TO CART */}

          <button
            onClick={() => setAdded(!added)}
            className={`mt-10 w-full lg:w-fit px-12 h-16 rounded-full text-base font-black transition-all duration-300 ${
              added
                ? "bg-green-500 text-white shadow-[0_10px_40px_rgba(34,197,94,0.35)] scale-[1.02]"
                : "bg-black text-white hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
            }`}
          >
            {added ? "ADDED TO CART ✓" : "ADD TO CART"}
          </button>

          {/* FEATURES */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-white rounded-[24px] p-5 border border-black/5 shadow-sm hover:shadow-lg transition">
              <p className="uppercase tracking-[0.3em] text-[10px] text-zinc-500">
                Delivery
              </p>

              <h3 className="text-xl font-black text-black mt-4">
                Free Shipping
              </h3>

              <p className="text-zinc-500 mt-3 leading-relaxed text-sm">
                Delivered within 3-5 business days.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-5 border border-black/5 shadow-sm hover:shadow-lg transition">
              <p className="uppercase tracking-[0.3em] text-[10px] text-zinc-500">
                Returns
              </p>

              <h3 className="text-xl font-black text-black mt-4">
                7-Day Returns
              </h3>

              <p className="text-zinc-500 mt-3 leading-relaxed text-sm">
                Easy replacement and return policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SIZE GUIDE MODAL */}

      {showGuide && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-md relative shadow-[0_20px_80px_rgba(0,0,0,0.2)]">
            <button
              onClick={() => setShowGuide(false)}
              className="absolute top-5 right-5 text-zinc-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-black text-black mb-6">Size Guide</h2>

            <div className="overflow-hidden rounded-2xl border border-zinc-200">
              {/* HEADER */}

              <div className="grid grid-cols-3 bg-black text-white text-sm font-bold">
                <div className="px-5 py-4">UK</div>

                <div className="px-5 py-4">INDIA</div>

                <div className="px-5 py-4">CM</div>
              </div>

              {/* ROWS */}

              {[
                ["7", "7", "25 CM"],
                ["8", "8", "26 CM"],
                ["9", "9", "27 CM"],
                ["10", "10", "28 CM"],
                ["11", "11", "29 CM"],
              ].map(([uk, india, cm]) => (
                <div
                  key={uk}
                  className="grid grid-cols-3 border-t border-zinc-200 text-black bg-white"
                >
                  <div className="px-5 py-4 font-semibold text-black">
                    UK {uk}
                  </div>

                  <div className="px-5 py-4 font-semibold text-black">
                    IND {india}
                  </div>

                  <div className="px-5 py-4 text-zinc-800">{cm}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
