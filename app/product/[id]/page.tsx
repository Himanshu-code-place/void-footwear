// // "use client";

// // import { prisma } from "@/src/lib/prisma";

// // import { notFound } from "next/navigation";

// // import AddToCartButton from "@/src/components/cart/add-to-cart-button";

// // import { useState } from "react";

// // export default async function ProductPage({
// //   params,
// // }: {
// //   params: Promise<{
// //     id: string;
// //   }>;
// // }) {
// //   const { id } = await params;

// //   const product = await prisma.product.findUnique({
// //     where: {
// //       id,
// //     },
// //   });

// //   const [selectedImage, setSelectedImage] = useState(product.image);

// //   const [selectedSize, setSelectedSize] = useState<number | null>(null);

// //   const [added, setAdded] = useState(false);

// //   if (!product) {
// //     return notFound();
// //   }

// //   return (
// //     <main className="min-h-screen bg-[#efede8] pt-24 pb-20">
// //       <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-start">
// //         {/* LEFT SIDE */}
// //         <div className="sticky top-24">
// //           <div className="relative overflow-hidden rounded-[36px] bg-[#f8f7f4] border border-black/5 shadow-[0_20px_80px_rgba(0,0,0,0.05)] group">
// //             <img
// //               src={selectedImage}
// //               alt={product.title}
// //               className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
// //             />

// //             <div className="flex gap-3 mt-4">
// //               {[product.image, ...product.gallery].map((img, i) => (
// //                 <button
// //                   key={i}
// //                   onClick={() => setSelectedImage(img)}
// //                   className={`w-24 h-24 rounded-2xl overflow-hidden border-2 ${
// //                     selectedImage === img ? "border-black" : "border-zinc-200"
// //                   }`}
// //                 >
// //                   <img
// //                     src={img}
// //                     alt=""
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </button>
// //               ))}

// //               <video
// //                 src={product.video}
// //                 className="w-24 h-24 rounded-2xl object-cover"
// //                 muted
// //               />
// //             </div>

// //             {/* TAG */}
// //             <div className="absolute top-6 left-6 bg-black text-white px-5 py-2 rounded-full text-[11px] tracking-[0.25em] uppercase">
// //               New Season
// //             </div>
// //           </div>
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div className="pt-4">
// //           {/* CATEGORY */}
// //           <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500">
// //             {product.category}
// //           </p>

// //           {/* TITLE */}
// //           <h1 className="text-[64px] leading-[0.9] tracking-[-0.07em] font-semibold text-black mt-5">
// //             {product.title}
// //           </h1>

// //           {/* PRICE */}
// //           <p className="text-4xl font-bold tracking-[-0.04em] text-black mt-6">
// //             ₹{product.price}
// //           </p>

// //           {/* DESCRIPTION */}
// //           <p className="text-zinc-600 text-[17px] leading-relaxed mt-8 max-w-xl">
// //             {product.description}
// //           </p>

// //           {/* DIVIDER */}
// //           <div className="w-full h-px bg-black/10 my-10"></div>

// //           {/* SIZE */}
// //           <div>
// //             <div className="flex items-center justify-between">
// //               <p className="uppercase tracking-[0.3em] text-[11px] text-zinc-500">
// //                 Select Size
// //               </p>

// //               <button className="text-sm text-zinc-500 hover:text-black transition">
// //                 Size Guide
// //               </button>
// //             </div>

// //             <div className="grid grid-cols-5 gap-4 mt-6">
// //               {["7", "8", "9", "10", "11"].map((size) => (
// //                 <button
// //                   key={size}
// //                   className="h-14 rounded-2xl border border-black/10 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 text-sm font-semibold shadow-sm"
// //                 >
// //                   {size}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* BUTTON */}
// //           <div className="mt-10">
// //             <AddToCartButton product={product} />
// //           </div>

// //           {/* INFO CARDS */}
// //           <div className="grid grid-cols-2 gap-5 mt-12">
// //             {/* DELIVERY */}
// //             <div className="bg-[#f8f7f4] border border-black/5 rounded-[28px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
// //               <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-500">
// //                 Delivery
// //               </p>

// //               <h3 className="text-2xl font-semibold tracking-[-0.04em] text-black mt-3">
// //                 Free Shipping
// //               </h3>

// //               <p className="text-zinc-500 text-sm mt-3">
// //                 Delivered within 3-5 business days.
// //               </p>
// //             </div>

// //             {/* RETURNS */}
// //             <div className="bg-[#f8f7f4] border border-black/5 rounded-[28px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
// //               <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-500">
// //                 Returns
// //               </p>

// //               <h3 className="text-2xl font-semibold tracking-[-0.04em] text-black mt-3">
// //                 7-Day Returns
// //               </h3>

// //               <p className="text-zinc-500 text-sm mt-3">
// //                 Easy replacement and return policy.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import { useState } from "react";

// export default function ProductPage() {
//   const product = {
//     title: "Velocity X",

//     category: "RUNNING",

//     price: 2797,

//     description:
//       "Modern running silhouette engineered for movement.",

//     image: "/products/main.png",

//     gallery: [
//       "/products/shoe1.png",
//       "/products/shoe2.png",
//       "/products/shoe3.png",
//     ],

//     video: "/products/demo.mp4",
//   };

//   const [selectedImage, setSelectedImage] = useState(
//     product.image
//   );

//   const [selectedSize, setSelectedSize] =
//     useState<number | null>(null);

//   const [added, setAdded] = useState(false);

//   return (
//     <main className="min-h-screen bg-[#f3f1ec] px-8 py-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10">
//         {/* LEFT */}

//         <div>
//           {/* MAIN IMAGE */}

//           <div className="bg-black rounded-[40px] overflow-hidden relative">
//             <img
//               src={selectedImage}
//               alt="shoe"
//               className="w-full h-[800px] object-cover"
//             />

//             <div className="absolute top-6 left-6 bg-black text-white text-xs tracking-[0.3em] px-6 py-3 rounded-full">
//               NEW SEASON
//             </div>
//           </div>

//           {/* GALLERY */}

//           <div className="flex gap-4 mt-5">
//             {[product.image, ...product.gallery].map(
//               (img, i) => (
//                 <button
//                   key={i}
//                   onClick={() =>
//                     setSelectedImage(img)
//                   }
//                   className={`w-28 h-28 rounded-[24px] overflow-hidden border-2 transition-all ${
//                     selectedImage === img
//                       ? "border-black scale-105"
//                       : "border-zinc-200"
//                   }`}
//                 >
//                   <img
//                     src={img}
//                     alt=""
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               )
//             )}

//             {/* VIDEO */}

//             <video
//               src={product.video}
//               className="w-28 h-28 rounded-[24px] object-cover border-2 border-zinc-200"
//               muted
//               autoPlay
//               loop
//             />
//           </div>
//         </div>

//         {/* RIGHT */}

//         <div className="pt-4">
//           <p className="uppercase tracking-[0.3em] text-sm text-zinc-500">
//             {product.category}
//           </p>

//           <h1 className="text-7xl font-black tracking-[-0.08em] mt-4 text-black">
//             {product.title}
//           </h1>

//           <p className="text-5xl font-black mt-6 text-black">
//             ₹{product.price}
//           </p>

//           <p className="text-zinc-600 text-2xl leading-relaxed mt-10 max-w-xl">
//             {product.description}
//           </p>

//           {/* DIVIDER */}

//           <div className="h-px bg-zinc-300 my-12" />

//           {/* SIZE */}

//           <div className="flex items-center justify-between mb-5">
//             <p className="uppercase tracking-[0.3em] text-sm text-zinc-500">
//               Select Size
//             </p>

//             <button className="text-zinc-500 text-sm">
//               Size Guide
//             </button>
//           </div>

//           {/* SIZE BUTTONS */}

//           <div className="grid grid-cols-5 gap-4">
//             {[7, 8, 9, 10, 11].map((size) => (
//               <button
//                 key={size}
//                 onClick={() =>
//                   setSelectedSize(size)
//                 }
//                 className={`h-20 rounded-[24px] border text-xl font-black transition-all ${
//                   selectedSize === size
//                     ? "bg-black text-white border-black scale-105"
//                     : "bg-white text-black border-zinc-200 hover:border-black"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>

//           {/* ADD TO CART */}

//           <button
//             onClick={() => setAdded(!added)}
//             className={`mt-10 h-20 px-12 rounded-full text-xl font-black transition-all ${
//               added
//                 ? "bg-green-500 text-white scale-105 shadow-[0_10px_40px_rgba(34,197,94,0.35)]"
//                 : "bg-black text-white hover:scale-[1.02]"
//             }`}
//           >
//             {added
//               ? "ADDED TO CART ✓"
//               : "ADD TO CART"}
//           </button>

//           {/* EXTRA BOXES */}

//           <div className="grid grid-cols-2 gap-5 mt-12">
//             <div className="bg-white rounded-[32px] p-8">
//               <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
//                 Delivery
//               </p>

//               <h3 className="text-4xl font-black mt-5 text-black">
//                 Free Shipping
//               </h3>

//               <p className="text-zinc-500 mt-4 text-lg leading-relaxed">
//                 Delivered within 3-5 business
//                 days.
//               </p>
//             </div>

//             <div className="bg-white rounded-[32px] p-8">
//               <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
//                 Returns
//               </p>

//               <h3 className="text-4xl font-black mt-5 text-black">
//                 3-Day Returns
//               </h3>

//               <p className="text-zinc-500 mt-4 text-lg leading-relaxed">
//                 Easy replacement and return
//                 policy.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function ProductPage() {
//   const product = {
//     title: "Velocity X",

//     category: "RUNNING",

//     price: 2797,

//     description: "Modern running silhouette engineered for movement.",

//     image: "/products/main.jpeg",

//     gallery: [
//       "/products/shoe1.jpeg",
//       "/products/shoe2.jpeg",
//       "/products/shoe3.jpeg",
//     ],

//     video: "/products/demo.mp4",
//   };

//   const [selectedImage, setSelectedImage] = useState(product.image);

//   const [showVideo, setShowVideo] = useState(false);

//   const galleryImages = [product.image, ...product.gallery];

//   const [selectedSize, setSelectedSize] = useState<number | null>(null);

//   const [added, setAdded] = useState(false);

//   const [showGuide, setShowGuide] = useState(false);

//   return (
//     <main className="min-h-screen bg-[#f3f1ec] px-6 lg:px-10 py-10">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
//         {/* LEFT SIDE */}

//         <div>
//           {/* MAIN IMAGE */}

//           <div className="relative overflow-hidden rounded-[36px] bg-[#0111111] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
//             <img
//               src={selectedImage}
//               alt="shoe"
//               className="w-full h-[520px] object-cover hover:scale-[1.03] transition duration-700"
//             />

//             {/* TAG */}

//             <div className="absolute top-5 left-5">
//               <div className="bg-black/70 backdrop-blur-xl text-white text-[10px] tracking-[0.35em] px-5 py-3 rounded-full border border-white/10">
//                 NEW SEASON
//               </div>
//             </div>

//             {/* GLOW */}

//             <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
//           </div>

//           {/* THUMBNAILS */}

//           <div className="flex items-center gap-3 mt-5 overflow-x-auto pb-2">
//             {galleryImages.map((img, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setSelectedImage(img);
//                   setShowVideo(false);
//                 }}
//                 className={`relative w-24 h-24 rounded-[22px] overflow-hidden border transition-all duration-300 flex-shrink-0 ${
//                   selectedImage === img && !showVideo
//                     ? "border-black shadow-[0_8px_25px_rgba(0,0,0,0.12)] scale-[1.03]"
//                     : "border-zinc-200 hover:border-zinc-400"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   alt="thumb"
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}

//             <button
//               onClick={() => setShowVideo(true)}
//               className={`relative w-24 h-24 rounded-[22px] overflow-hidden border transition-all duration-300 flex items-center justify-center flex-shrink-0 ${
//                 showVideo
//                   ? "border-black shadow-[0_8px_25px_rgba(0,0,0,0.12)] scale-[1.03]"
//                   : "border-zinc-200 hover:border-zinc-400"
//               }`}
//             >
//               <video
//                 className="absolute inset-0 w-full h-full object-cover"
//                 muted
//               >
//                 <source src="/videos/shoe-video.mp4" type="video/mp4" />
//               </video>

//               <div className="relative z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md">
//                 ▶
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}

//         <div className="pt-2">
//           {/* CATEGORY */}

//           <p className="uppercase tracking-[0.35em] text-xs text-zinc-500 font-medium">
//             {product.category}
//           </p>

//           {/* TITLE */}

//           <h1 className="text-4xl lg:text-5xl font-black tracking-[-0.08em] leading-none text-black mt-4">
//             {product.title}
//           </h1>

//           {/* PRICE */}

//           <div className="flex items-center gap-4 mt-6">
//             <p className="text-3xl lg:text-4xl font-black text-black">
//               ₹{product.price}
//             </p>

//             <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
//               In Stock
//             </span>
//           </div>

//           {/* DESCRIPTION */}

//           <p className="text-zinc-600 text-lg leading-relaxed mt-8 max-w-xl">
//             {product.description}
//           </p>

//           {/* DIVIDER */}

//           <div className="h-px bg-zinc-300 my-10" />

//           {/* SIZE */}

//           <div className="flex items-center justify-between mb-4">
//             <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 font-medium">
//               Select Size
//             </p>

//             <button
//               onClick={() => setShowGuide(true)}
//               className="text-sm text-zinc-500 hover:text-black transition"
//             >
//               Size Guide
//             </button>
//           </div>

//           {/* SIZE BUTTONS */}

//           <div className="flex gap-3 flex-wrap">
//             {[7, 8, 9, 10, 11].map((size) => (
//               <button
//                 key={size}
//                 onClick={() => setSelectedSize(size)}
//                 className={`w-14 h-14 rounded-xl border text-sm font-bold transition-all duration-300 ${
//                   selectedSize === size
//                     ? "bg-[#2a2a2a] text-white border border-zinc-600 ring-2 ring-zinc-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.18)] scale-105"
//                     : "bg-white text-black border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>

//           {/* ADD TO CART */}

//           <button
//             onClick={() => setAdded(!added)}
//             className={`mt-10 w-full lg:w-fit px-12 h-16 rounded-full text-base font-black transition-all duration-300 ${
//               added
//                 ? "bg-green-500 text-white shadow-[0_10px_40px_rgba(34,197,94,0.35)] scale-[1.02]"
//                 : "bg-black text-white hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
//             }`}
//           >
//             {added ? "ADDED TO CART ✓" : "ADD TO CART"}
//           </button>

//           {/* FEATURES */}

//           <div className="grid grid-cols-2 gap-5 mt-10">
//             <div className="bg-white rounded-[28px] p-7 border border-black/5 shadow-sm hover:shadow-lg transition">
//               <p className="uppercase tracking-[0.3em] text-[10px] text-zinc-500">
//                 Delivery
//               </p>

//               <h3 className="text-2xl font-black text-black mt-4">
//                 Free Shipping
//               </h3>

//               <p className="text-zinc-500 mt-3 leading-relaxed text-sm">
//                 Delivered within 3-5 business days.
//               </p>
//             </div>

//             <div className="bg-white rounded-[24px] p-5 border border-black/5 shadow-sm hover:shadow-lg transition">
//               <p className="uppercase tracking-[0.3em] text-[10px] text-zinc-500">
//                 Returns
//               </p>

//               <h3 className="text-xl font-black text-black mt-4">
//                 7-Day Returns
//               </h3>

//               <p className="text-zinc-500 mt-3 leading-relaxed text-sm">
//                 Easy replacement and return policy.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showGuide && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
//           <div className="bg-white rounded-[32px] p-8 w-full max-w-md relative">
//             <button
//               onClick={() => setShowGuide(false)}
//               className="absolute top-5 right-5 text-zinc-500 hover:text-black"
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-black text-black mb-6">Size Guide</h2>

//             <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
//               {/* HEADER */}

//               <div className="grid grid-cols-3 bg-black text-white text-sm font-bold">
//                 <div className="px-5 py-4">UK</div>

//                 <div className="px-5 py-4">INDIA</div>

//                 <div className="px-5 py-4">CM</div>
//               </div>

//               {/* ROWS */}

//               {[
//                 ["7", "7", "25 CM"],
//                 ["8", "8", "26 CM"],
//                 ["9", "9", "27 CM"],
//                 ["10", "10", "28 CM"],
//                 ["11", "11", "29 CM"],
//               ].map(([uk, india, cm]) => (
//                 <div
//                   key={uk}
//                   className="grid grid-cols-3 border-t border-zinc-200 text-black"
//                 >
//                   <div className="px-5 py-4 font-semibold">UK {uk}</div>

//                   <div className="px-5 py-4 font-semibold">IND {india}</div>

//                   <div className="px-5 py-4 text-zinc-900">{cm}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

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
    <main className="min-h-screen bg-[#f3f1ec] px-5 lg:px-10 py-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT */}

        <div>
          {/* MAIN IMAGE */}

          <div className="relative overflow-hidden rounded-[36px] bg-[#f8f8f8] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {showVideo ? (
              <video
                controls
                autoPlay
                muted
                className="w-full h-[520px] object-cover rounded-[36px]"
              >
                <source src={product.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={selectedImage}
                alt="shoe"
                className="w-full h-[520px] object-cover hover:scale-[1.03] transition duration-700"
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
                className={`relative w-24 h-24 rounded-[22px] overflow-hidden border transition-all duration-300 flex-shrink-0 ${
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
              className={`relative w-24 h-24 rounded-[22px] overflow-hidden border transition-all duration-300 flex items-center justify-center flex-shrink-0 ${
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

          <h1 className="text-3xl lg:text-4xl font-black tracking-[-0.08em] leading-none text-black mt-4">
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

          <p className="text-zinc-600 text-lg leading-relaxed mt-7 max-w-xl">
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
                className={`h-14 w-14 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center ${
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

          <div className="grid grid-cols-2 gap-4 mt-8">
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
