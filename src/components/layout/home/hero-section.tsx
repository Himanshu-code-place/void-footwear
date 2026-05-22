// // // export default function HeroSection() {
// // //   return (
// // //     <section
// // //       className="relative h-screen bg-cover bg-center flex items-center"
// // //       style={{
// // //         backgroundImage:
// // //           "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyXtFms9VcfjV3W-GBNDNaPaZAq_2zUAUdsMfmqerQWmfCKDdUZzS4dzroq5U9sb1ExsCVluqtaACNuT5YLXfkbS3J5Cbaw96th9ulIqqsxrmMGXXtv18X-yamw9O_ZYVjsnuRUEHujKdirj6F9b50tDKLR42mnI86qjuwO_fznmEbb_wRC6RaDd5oY1xJlhnVTmZT0_soy3Ew2iUx7uR9NTqsFHS5zWZZQBiAOpjw8erSn-P4ztXvWc2gxtlY-3Kn-63-u8I52gM')",
// // //       }}
// // //     >
// // //       <div className="absolute inset-0 bg-black/60"></div>

// // //       <div className="relative z-10 px-6 md:px-20 text-white max-w-3xl">
// // //         <span className="bg-lime-400 text-black px-3 py-1 text-sm font-bold">
// // //           NEW ARRIVAL
// // //         </span>

// // //         <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
// // //           BEYOND THE
// // //           <br />
// // //           <span className="text-lime-400">
// // //             SPEED OF LIGHT
// // //           </span>
// // //         </h1>

// // //         <p className="text-gray-300 mt-6 text-lg">
// // //           Engineered for elite performance with
// // //           futuristic comfort and premium design.
// // //         </p>

// // //         <div className="flex gap-4 mt-8">
// // //           <button className="bg-lime-400 text-black px-8 py-4 font-bold hover:scale-105 transition">
// // //             SHOP NOW
// // //           </button>

// // //           <button className="border border-white px-8 py-4 hover:bg-white hover:text-black transition">
// // //             WATCH FILM
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // export default function HeroSection() {
// //   return (
// //     <section className="bg-white min-h-screen flex items-center">

// //       <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

// //         {/* LEFT */}
// //         <div>

// //           <span className="text-sm tracking-[0.3em] text-zinc-500 uppercase">
// //             New Collection 2026
// //           </span>

// //           <h1 className="text-6xl md:text-8xl font-black leading-none mt-6 text-black">
// //             MOVE
// //             <br />
// //             DIFFERENT
// //           </h1>

// //           <p className="text-zinc-600 text-lg mt-8 max-w-lg leading-relaxed">
// //             Premium footwear engineered for movement,
// //             comfort, and timeless streetwear aesthetics.
// //           </p>

// //           <div className="flex gap-5 mt-10">

// //             <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-zinc-800 transition">
// //               SHOP NOW
// //             </button>

// //             <button className="border border-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition">
// //               EXPLORE
// //             </button>

// //           </div>

// //         </div>

// //         {/* RIGHT */}
// //         <div className="relative">

// //           <img
// //             src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop"
// //             alt="shoe"
// //             className="w-full object-contain"
// //           />

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// export default function HeroSection() {
//   return (
//     <section className="relative bg-white overflow-hidden">

//       <div className="max-w-7xl mx-auto min-h-screen px-6 grid lg:grid-cols-2 items-center">

//         {/* LEFT CONTENT */}
//         <div className="relative z-10 pt-24 lg:pt-0">

//           <p className="uppercase tracking-[0.4em] text-xs text-zinc-500 mb-8">
//             VOID® 2026 COLLECTION
//           </p>

//           <h1 className="text-[5rem] md:text-[8rem] leading-[0.9] font-black text-black tracking-[-0.06em]">
//             MOVE
//             <br />
//             SILENTLY
//           </h1>

//           <p className="text-zinc-600 text-lg mt-10 max-w-md leading-relaxed">
//             Precision engineered footwear inspired by
//             modern movement, premium comfort, and
//             timeless streetwear aesthetics.
//           </p>

//           <div className="flex gap-5 mt-12">

//             <button className="bg-black text-white px-10 py-5 rounded-full text-sm tracking-wide hover:bg-zinc-800 transition-all duration-300">
//               SHOP COLLECTION
//             </button>

//             <button className="text-black text-sm tracking-wide hover:opacity-60 transition">
//               EXPLORE →
//             </button>

//           </div>

//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center items-center">

//           {/* BACKGROUND CIRCLE */}
//           <div className="absolute w-[600px] h-[600px] bg-zinc-100 rounded-full"></div>

//           {/* SHOE IMAGE */}
//           <img
//             src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
//             alt="Premium Shoe"
//             className="relative z-10 w-full max-w-3xl object-contain rotate-[-12deg] hover:rotate-[-8deg] hover:scale-105 transition duration-700"
//           />

//           {/* FLOATING TAG */}
//           <div className="absolute bottom-20 left-10 bg-black text-white px-6 py-4 rounded-2xl shadow-2xl z-20">

//             <p className="text-xs tracking-[0.3em] text-zinc-400 uppercase">
//               Starting From
//             </p>

//             <h3 className="text-3xl font-black mt-2">
//               ₹9,999
//             </h3>

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
        <div className="relative z-10 pt-28 lg:pt-0">
          <p className="uppercase tracking-[0.4em] text-xs text-zinc-500 mb-8">
            VOID® 2026 COLLECTION
          </p>

          <h1 className="text-[4rem] md:text-[6rem] xl:text-[7rem] leading-[0.9] font-black text-black tracking-[-0.08em] transition-all duration-1000 ease-in-out">
            {shoes[current].title}
          </h1>

          <p className="text-zinc-600 text-lg mt-8 max-w-md leading-relaxed">
            Precision engineered footwear inspired by modern movement, premium
            comfort, and timeless streetwear aesthetics.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-black text-white px-8 py-4 rounded-full text-sm tracking-wide hover:scale-105 hover:bg-zinc-800 transition duration-300">
              SHOP COLLECTION
            </button>

            <button className="text-black text-sm tracking-wide hover:opacity-60 transition">
              EXPLORE →
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center h-[650px]">
          {/* BG CIRCLE */}
          <div className="absolute w-[420px] h-[420px] bg-white rounded-full shadow-2xl"></div>

          {/* IMAGE */}
          <img
            key={shoes[current].image}
            src={shoes[current].image}
            alt="Premium Shoe"
            className="relative z-10 w-full max-w-2xl object-contain rotate-[-12deg] animate-fadeIn hover:scale-105 transition all duration-1000 ease-in-out"
          />

          {/* FLOATING PRICE */}
          <div className="absolute bottom-16 left-0 bg-black text-white px-5 py-4 rounded-2xl shadow-2xl z-20">
            <p className="text-xs tracking-[0.3em] text-zinc-400 uppercase">
              Starting From
            </p>

            <h3 className="text-2xl font-black mt-2">{shoes[current].price}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
