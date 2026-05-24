// "use client";

// import { useEffect, useState } from "react";

// const shoes = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
//     title: "MOVE SILENTLY",
//     price: "₹3,999",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1600&auto=format&fit=crop",
//     title: "OWN THE STREET",
//     price: "₹1,999",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop",
//     title: "RUN BEYOND",
//     price: "₹999",
//   },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === shoes.length - 1 ? 0 : prev + 1));
//     }, 2600);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative bg-[#f6f6f3] overflow-hidden min-h-screen flex items-center">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
//         {/* LEFT */}
//         <div className="relative z-10 pt-28 lg:pt-0">
//           <p className="uppercase tracking-[0.4em] text-xs text-zinc-500 mb-8">
//             VELTRIX® 2026 COLLECTION
//           </p>

//           <h1 className="text-[4rem] md:text-[6rem] xl:text-[7rem] leading-[0.9] font-black text-black tracking-[-0.08em] transition-all duration-1000 ease-in-out">
//             {shoes[current].title}
//           </h1>

//           <p className="text-zinc-600 text-lg mt-8 max-w-md leading-relaxed">
//             Precision engineered footwear inspired by modern movement, premium
//             comfort, and timeless streetwear aesthetics.
//           </p>

//           <div className="flex gap-5 mt-10">
//             <button className="bg-black text-white px-8 py-4 rounded-full text-sm tracking-wide hover:scale-105 hover:bg-zinc-800 transition duration-300">
//               SHOP COLLECTION
//             </button>

//             <button className="text-black text-sm tracking-wide hover:opacity-60 transition">
//               EXPLORE →
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="relative flex justify-center items-center h-[650px]">
//           {/* BG CIRCLE */}
//           <div className="absolute w-[420px] h-[420px] bg-white rounded-full shadow-2xl"></div>

//           {/* IMAGE */}
//           <img
//             key={shoes[current].image}
//             src={shoes[current].image}
//             alt="Premium Shoe"
//             className="relative z-10 w-full max-w-2xl object-contain rotate-[-12deg] animate-fadeIn hover:scale-105 transition all duration-1000 ease-in-out"
//           />

//           {/* FLOATING PRICE */}
//           <div className="absolute bottom-16 left-0 bg-black text-white px-5 py-4 rounded-2xl shadow-2xl z-20">
//             <p className="text-xs tracking-[0.3em] text-zinc-400 uppercase">
//               Starting From
//             </p>

//             <h3 className="text-2xl font-black mt-2">{shoes[current].price}</h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";

// const shoes = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
//     title: "MOVE SILENTLY",
//     price: "₹3,999",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1600&auto=format&fit=crop",
//     title: "OWN THE STREET",
//     price: "₹1,999",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop",
//     title: "RUN BEYOND",
//     price: "₹999",
//   },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === shoes.length - 1 ? 0 : prev + 1));
//     }, 2600);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative bg-[#f6f6f3] overflow-hidden min-h-screen flex items-center">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
//         {/* LEFT */}
//         <div className="relative z-10 pt-32 lg:pt-0">
//           {/* SMALL TOP TEXT */}
//           <p className="uppercase tracking-[0.45em] text-xs text-zinc-500 mb-6">
//             VELTRIX® PERFORMANCE 2026
//           </p>

//           {/* TAGLINE */}
//           <p className="text-sm md:text-base text-zinc-700 tracking-[0.25em] uppercase mb-8">
//             Crafted for Motion
//           </p>

//           {/* MAIN TITLE */}
//           <h1 className="text-[4rem] md:text-[6rem] xl:text-[7rem] leading-[0.9] font-black text-black tracking-[-0.08em] transition-all duration-1000 ease-in-out">
//             {shoes[current].title}
//           </h1>

//           {/* DESCRIPTION */}
//           <p className="text-zinc-600 text-lg mt-8 max-w-md leading-relaxed">
//             Precision engineered footwear inspired by modern movement, premium
//             comfort, and timeless streetwear aesthetics.
//           </p>

//           {/* BRAND STORY MINI */}
//           <div className="mt-10 border-l-2 border-black pl-5">
//             <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 mb-3">
//               The Meaning of Veltrix
//             </p>

//             <p className="text-zinc-700 leading-relaxed text-sm max-w-sm">
//               “Vel” represents velocity and movement, while “trix” reflects
//               modern engineered luxury crafted for everyday flow.
//             </p>
//           </div>

//           {/* BUTTONS */}
//           <div className="flex gap-5 mt-12 flex-wrap">
//             <button className="bg-black text-white px-8 py-4 rounded-full text-sm tracking-[0.15em] hover:scale-105 hover:bg-zinc-800 transition duration-300">
//               SHOP COLLECTION
//             </button>

//             <button className="text-black text-sm tracking-[0.2em] hover:opacity-60 transition">
//               EXPLORE →
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="relative flex justify-center items-center h-[650px]">
//           {/* BACKGROUND CIRCLE */}
//           <div className="absolute w-[420px] h-[420px] bg-white rounded-full shadow-2xl"></div>

//           {/* SHOE IMAGE */}
//           <img
//             key={shoes[current].image}
//             src={shoes[current].image}
//             alt="Premium Shoe"
//             className="relative z-10 w-full max-w-2xl object-contain rotate-[-12deg] animate-fadeIn hover:scale-105 transition-all duration-1000 ease-in-out"
//           />

//           {/* FLOATING CARD */}
//           <div className="absolute bottom-16 left-0 bg-black text-white px-6 py-5 rounded-[28px] shadow-2xl z-20 backdrop-blur-xl">
//             <p className="text-[10px] tracking-[0.45em] text-zinc-400 uppercase">
//               VELTRIX®
//             </p>

//             <h3 className="text-3xl font-black mt-3 tracking-[-0.05em]">
//               Crafted
//               <br />
//               for Motion
//             </h3>

//             <p className="text-zinc-400 mt-3 text-sm">
//               Starting from {shoes[current].price}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";

const shoes = [
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    title: "MOVE SILENTLY",
    price: "₹3,999",
  },

  {
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1600&auto=format&fit=crop",
    title: "OWN THE STREET",
    price: "₹1,999",
  },

  {
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop",
    title: "RUN BEYOND",
    price: "₹999",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === shoes.length - 1 ? 0 : prev + 1));
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#f6f6f3] overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="relative z-10 pt-28 lg:pt-0 max-w-xl">
          {/* TOP LABEL */}
          <div className="space-y-3">
            <p className="uppercase tracking-[0.45em] text-[11px] text-zinc-500 font-medium">
              VELTRIX® PERFORMANCE
            </p>

            {/* <p className="uppercase tracking-[0.35em] text-[12px] text-zinc-700">
              Crafted For Motion
            </p> */}
          </div>

          {/* BIG TITLE */}
          <h1 className="mt-8 text-[4.5rem] md:text-[7rem] leading-[0.82] font-black tracking-[-0.08em] text-black transition-all duration-700">
            {shoes[current].title}
          </h1>

          {/* MEANING BOX */}
          <div className="mt-10 border-l border-black pl-5">
            <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-4">
              Veltrix - Crafted for Motion
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-8 mt-12">
            <button className="bg-black text-white px-9 py-4 rounded-full text-sm tracking-[0.18em] uppercase hover:scale-105 hover:bg-zinc-800 transition-all duration-300 shadow-2xl">
              Shop Collection
            </button>

            <button className="text-black uppercase tracking-[0.2em] text-sm hover:translate-x-2 transition-all duration-300">
              Explore →
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center h-[650px]">
          {/* BACKGROUND CIRCLE */}
          <div className="absolute w-[420px] h-[420px] bg-white rounded-full shadow-2xl"></div>
          {/* IMAGE */}
          <img
            key={shoes[current].image}
            src={shoes[current].image}
            alt="Premium Shoe"
            className="relative z-10 w-full max-w-2xl object-contain rotate-[-12deg] animate-fadeIn hover:scale-105 transition-all duration-1000 ease-in-out"
          />
          FLOATING CARD
          {/* FLOATING PRICE */}
          <div className="absolute bottom-10 left-6 bg-black text-white px-7 py-5 rounded-[24px] shadow-2xl z-20 min-w-[230px]">
            <p className="text-[11px] tracking-[0.35em] uppercase text-zinc-400">
              Starting From
            </p>

            <h3 className="text-5xl font-black mt-2 leading-none">
              {shoes[current].price}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
