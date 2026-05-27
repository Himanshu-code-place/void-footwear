// // import Link from "next/link";

// // export default function SuccessPage() {
// //   return (
// //     <main className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
// //       <div className="max-w-4xl w-full bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-10 text-center backdrop-blur-2xl">
// //         {/* CHECK ICON */}
// //         <div className="w-20 h-20 rounded-full border border-green-400/30 bg-green-500/10 flex items-center justify-center mx-auto">
// //           <span className="text-4xl">✅</span>
// //         </div>

// //         {/* TITLE */}
// //         <h1 className="text-4xl md:text-6xl font-black tracking-[-0.06em] text-white mt-6 leading-none">
// //           ORDER
// //           <br />
// //           CONFIRMED
// //         </h1>

// //         {/* SUBTEXT */}
// //         <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-5 max-w-2xl mx-auto">
// //           Your payment was successful. Your premium VELTRIX® sneakers are now
// //           being prepared for shipment and delivery.
// //         </p>

// //         {/* TRACKER */}
// //         <div className="mt-10 overflow-x-auto">
// //           <div className="min-w-[700px] flex items-center justify-between relative">
// //             {/* LINE */}
// //             <div className="absolute top-5 left-0 w-full h-[3px] bg-zinc-800"></div>

// //             <div className="absolute top-5 left-0 w-[45%] h-[3px] bg-green-500"></div>

// //             {/* STEP 1 */}
// //             <div className="relative z-10 flex flex-col items-center">
// //               <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
// //                 ✓
// //               </div>

// //               <h3 className="text-white font-bold mt-3">Confirmed</h3>

// //               <p className="text-zinc-500 text-sm mt-1">Payment Received</p>
// //             </div>

// //             {/* STEP 2 */}
// //             <div className="relative z-10 flex flex-col items-center">
// //               <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
// //                 ✓
// //               </div>

// //               <h3 className="text-white font-bold mt-3">Packed</h3>

// //               <p className="text-zinc-500 text-sm mt-1">Preparing Order</p>
// //             </div>

// //             {/* STEP 3 */}
// //             <div className="relative z-10 flex flex-col items-center">
// //               <div className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center text-white font-bold">
// //                 3
// //               </div>

// //               <h3 className="text-white font-bold mt-3">Shipped</h3>

// //               <p className="text-zinc-500 text-sm mt-1">In Transit</p>
// //             </div>

// //             {/* STEP 4 */}
// //             <div className="relative z-10 flex flex-col items-center">
// //               <div className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center text-white font-bold">
// //                 4
// //               </div>

// //               <h3 className="text-white font-bold mt-3">Delivered</h3>

// //               <p className="text-zinc-500 text-sm mt-1">At Your Door</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* DELIVERY CARD */}
// //         <div className="mt-10 bg-white/[0.03] border border-white/10 rounded-[28px] p-6 text-left">
// //           <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
// //             Estimated Delivery
// //           </p>

// //           <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-[-0.05em]">
// //             2—4 Business Days
// //           </h2>

// //           <p className="text-zinc-400 text-base mt-4 leading-relaxed">
// //             Your order is currently being prepared in our warehouse and will be
// //             shipped shortly with real-time tracking updates.
// //           </p>
// //         </div>

// //         {/* BUTTONS */}
// //         <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
// //           <Link
// //             href="/"
// //             className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition"
// //           >
// //             Continue Shopping
// //           </Link>

// //           <Link
// //             href="/admin/orders"
// //             className="border border-white/10 text-white px-8 py-4 rounded-full hover:bg-white/5 transition"
// //           >
// //             View Orders
// //           </Link>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import Link from "next/link";
// import {
//   Check,
//   Package,
//   Truck,
//   Home,
//   ArrowRight,
// } from "lucide-react";

// export default function SuccessPage() {
//   return (
//     <main className="min-h-screen bg-[#f6f6f3] text-black overflow-hidden">

//       {/* CONTAINER */}
//       <div className="max-w-[1240px] mx-auto px-5 md:px-10 py-8 md:py-12">

//         {/* TOP */}
//         <div className="border-b border-zinc-200 pb-8 md:pb-10">

//           <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-5">
//             Order Status
//           </p>

//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

//             <div>
//               <h1 className="text-[3.8rem] md:text-[5rem] leading-[0.9] tracking-tight font-black uppercase">
//                 Order
//               </h1>

//               <h1 className="text-[3.8rem] md:text-[5rem] leading-[0.9] tracking-tight font-black uppercase">
//                 Confirmed
//               </h1>
//             </div>

//             <div className="flex items-center gap-3 text-green-600">
//               <div className="w-10 h-10 border border-green-600 flex items-center justify-center">
//                 <Check size={18} />
//               </div>

//               <div>
//                 <p className="uppercase text-xs tracking-[0.25em]">
//                   Payment Successful
//                 </p>

//                 <p className="text-sm text-zinc-500 mt-1">
//                   Your order has been placed successfully.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.5fr] gap-8 mt-12">

//           {/* LEFT */}
//           <div>

//             {/* MESSAGE */}
//             <div className="border-b border-zinc-200 pb-10">

//               <p className="text-lg md:text-2xl leading-relaxed max-w-3xl">
//                 Your premium VELTRIX® sneakers are now being
//                 prepared for shipment. You’ll receive tracking
//                 updates once your order is dispatched.
//               </p>

//             </div>

//             {/* TRACKING */}
//             <div className="py-8 border-b border-zinc-200">

//               <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-10">
//                 Shipment Progress
//               </p>

//               {/* LINE */}
//               <div className="relative">

//                 {/* TRACK */}
//                 <div className="absolute top-5 left-0 w-full h-[1px] bg-zinc-300"></div>

//                 {/* ACTIVE TRACK */}
//                 <div className="absolute top-5 left-0 w-full h-[2px] bg-lime-500"></div>

//                 {/* STEPS */}
//                 <div className="grid grid-cols-4 gap-6 relative z-10">

//                   {/* STEP 1 */}
//                   <div>
//                     <div className="w-10 h-10 bg-lime-500 text-black flex items-center justify-center mb-5">
//                       <Check size={18} />
//                     </div>

//                     <h3 className="font-black uppercase text-sm tracking-wide">
//                       Confirmed
//                     </h3>

//                     <p className="text-zinc-500 text-sm mt-2">
//                       Payment received
//                     </p>
//                   </div>

//                   {/* STEP 2 */}
//                   <div>
//                     <div className="w-10 h-10 bg-lime-500 text-black flex items-center justify-center mb-5">
//                       <Package size={18} />
//                     </div>

//                     <h3 className="font-black uppercase text-sm tracking-wide">
//                       Packed
//                     </h3>

//                     <p className="text-zinc-500 text-sm mt-2">
//                       Preparing order
//                     </p>
//                   </div>

//                   {/* STEP 3 */}
//                   <div>
//                     <div className="w-10 h-10 bg-lime-500 text-black flex items-center justify-center mb-5">
//                       <Truck
//                         size={18}
//                         className="text-black"
//                       />
//                     </div>

//                     <h3 className="font-black uppercase text-sm tracking-wide text-zinc-400">
//                       Shipped
//                     </h3>

//                     <p className="text-zinc-400 text-sm mt-2">
//                       In transit
//                     </p>
//                   </div>

//                   {/* STEP 4 */}
//                   <div>
//                     <div className="w-10 h-10 bg-lime-500 text-black flex items-center justify-center mb-5">
//                       <Home
//                         size={18}
//                         className="text-black"
//                       />
//                     </div>

//                     <h3 className="font-black uppercase text-sm tracking-wide text-lime-600">
//                       Delivered
//                     </h3>

//                     <p className="text-zinc-400 text-sm mt-2">
//                       At your door
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             </div>

//             {/* DELIVERY */}
//             <div className="py-12 border-b border-zinc-200">

//               <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-5">
//                 Estimated Delivery
//               </p>

//               <h2 className="text-[2.5rem] md:text-[4rem] leading-none font-black tracking-tight">
//                 2—4 Days
//               </h2>

//               <p className="text-zinc-500 text-lg mt-6 max-w-2xl leading-relaxed">
//                 Your order is currently being prepared in our
//                 warehouse and will be shipped shortly with live
//                 tracking updates.
//               </p>
//             </div>

//             {/* BUTTONS */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-10">

//               <Link
//                 href="/shop"
//                 className="bg-black text-white px-8 py-5 uppercase tracking-[0.25em] text-sm font-semibold hover:bg-lime-400 hover:text-black transition-all duration-300 text-center"
//               >
//                 Continue Shopping
//               </Link>

//               <Link
//                 href="/orders"
//                 className="border border-black px-8 py-5 uppercase tracking-[0.25em] text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 text-center"
//               >
//                 View Orders
//               </Link>

//             </div>

//           </div>

//           {/* RIGHT */}
//           <div className="xl:sticky xl:top-10 h-fit">

//             {/* SUMMARY */}
//             <div className="border border-zinc-200 bg-white">

//               {/* TOP */}
//               <div className="p-7 border-b border-zinc-200">

//                 <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-4">
//                   Order Summary
//                 </p>

//                 <h2 className="text-[2.8rem] font-black tracking-tight leading-none">
//                   #VLX2048
//                 </h2>

//                 <p className="text-zinc-500 text-sm mt-3">
//                   2 items • Paid successfully
//                 </p>
//               </div>

//               {/* PRODUCTS */}
//               <div className="p-7 space-y-6">

//                 {/* ITEM */}
//                 <div className="flex gap-4">

//                   <div className="w-24 h-24 bg-[#f6f6f3] border border-zinc-200 overflow-hidden">
//                     <img
//                       src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
//                       alt="shoe"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="flex-1">
//                     <h3 className="font-black uppercase text-lg leading-tight">
//                       Shadow Runner
//                     </h3>

//                     <p className="text-zinc-500 text-sm mt-2">
//                       Qty: 1
//                     </p>

//                     <p className="font-black text-2xl mt-4">
//                       ₹2499
//                     </p>
//                   </div>
//                 </div>

//                 {/* ITEM */}
//                 <div className="flex gap-4">

//                   <div className="w-24 h-24 bg-[#f6f6f3] border border-zinc-200 overflow-hidden">
//                     <img
//                       src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1600&auto=format&fit=crop"
//                       alt="shoe"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="flex-1">
//                     <h3 className="font-black uppercase text-lg leading-tight">
//                       Takewood Shoe
//                     </h3>

//                     <p className="text-zinc-500 text-sm mt-2">
//                       Qty: 1
//                     </p>

//                     <p className="font-black text-2xl mt-4">
//                       ₹4999
//                     </p>
//                   </div>
//                 </div>

//               </div>

//               {/* TOTAL */}
//               <div className="border-t border-zinc-200 p-7">

//                 <div className="flex items-center justify-between mb-3">

//                   <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-500">
//                     Total Paid
//                   </p>

//                   <p className="text-zinc-500 text-sm">
//                     Inclusive of taxes
//                   </p>
//                 </div>

//                 <h2 className="text-[3.5rem] font-black tracking-tight leading-none">
//                   ₹7498
//                 </h2>

//               </div>

//             </div>

//             {/* HELP */}
//             <div className="mt-6 border border-zinc-200 p-6">

//               <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-500 mb-4">
//                 Need Help?
//               </p>

//               <p className="text-sm text-zinc-500 leading-relaxed">
//                 Contact our support team for shipping updates,
//                 returns or delivery assistance.
//               </p>

//               <button className="mt-6 flex items-center gap-2 uppercase tracking-[0.25em] text-xs font-semibold hover:gap-3 transition-all">
//                 Contact Support
//                 <ArrowRight size={14} />
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";

import { Check, Package, Truck, Home, ArrowRight } from "lucide-react";

const orderStatus: "CONFIRMED" | "PACKED" | "SHIPPED" | "DELIVERED" =
  "CONFIRMED";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#f6f6f3] text-black overflow-hidden">
      {/* CONTAINER */}
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-8">
        {/* TOP */}
        <div className="border-b border-zinc-200 pb-8">
          <p className="uppercase tracking-[0.35em] text-[10px] text-zinc-500 mb-4">
            Order Status
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            {/* LEFT */}
            <div>
              <h1 className="text-[3rem] md:text-[3.2rem] leading-[0.9] tracking-tight font-black uppercase">
                Order
              </h1>

              <h1 className="text-[3rem] md:text-[3.2rem] leading-[0.9] tracking-tight font-black uppercase">
                Confirmed
              </h1>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3 text-green-600 text-bold">
              <div className="w-8 h-8 bg-lime-600 text-white flex items-center justify-center">
                <Check size={24} />
              </div>

              <div>
                <p className="uppercase text-[12px] tracking-[0.2em]">
                  Payment Successful
                </p>

                <p className="text-xs text-zinc-500 mt-1">
                  Your order has been placed successfully.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.5fr] gap-10 mt-10">
          {/* LEFT */}
          <div>
            {/* MESSAGE */}
            <div className="border-b border-zinc-200 pb-8">
              <p className="text-base md:text-l leading-relaxed max-w-5xl">
                Your premium VELTRIX® sneakers are now being prepared for
                shipment. You’ll receive tracking updates once your order is
                dispatched.
              </p>
            </div>

            {/* TRACKING */}
            {/* TRACKING */}
            <div className="py-8 border-b border-zinc-200">
              <p className="uppercase tracking-[0.35em] text-[10px] text-zinc-500 mb-8">
                Shipment Progress
              </p>

              <div className="relative">
                {/* LINE */}
                <div className="absolute top-4 left-0 w-full h-[2px] bg-zinc-300"></div>

                {/* ACTIVE LINE */}
                <div
                  className={`absolute top-4 left-0 h-[2px] bg-lime-500 transition-all duration-500 ${
                    orderStatus === "CONFIRMED"
                      ? "w-[8%]"
                      : orderStatus === "PACKED"
                        ? "w-[38%]"
                        : orderStatus === "SHIPPED"
                          ? "w-[68%]"
                          : "w-full"
                  }`}
                ></div>

                {/* STEPS */}
                <div className="grid grid-cols-4 gap-4 relative z-10">
                  {/* CONFIRMED */}
                  <div>
                    <div
                      className={`w-8 h-8 flex items-center justify-center mb-4 ${
                        [
                          "CONFIRMED",
                          "PACKED",
                          "SHIPPED",
                          "DELIVERED",
                        ].includes(orderStatus)
                          ? "bg-lime-500 text-black"
                          : "bg-zinc-200 text-zinc-400"
                      }`}
                    >
                      <Check size={15} />
                    </div>

                    <h3
                      className={`uppercase text-xs tracking-wide ${
                        [
                          "CONFIRMED",
                          "PACKED",
                          "SHIPPED",
                          "DELIVERED",
                        ].includes(orderStatus)
                          ? "font-black text-black"
                          : "font-medium text-zinc-400"
                      }`}
                    >
                      Confirmed
                    </h3>

                    <p className="text-zinc-500 text-xs mt-2">
                      Payment received
                    </p>
                  </div>

                  {/* PACKED */}
                  <div>
                    <div
                      className={`w-8 h-8 flex items-center justify-center mb-4 ${
                        ["PACKED", "SHIPPED", "DELIVERED"].includes(orderStatus)
                          ? "bg-lime-500 text-black"
                          : "bg-zinc-200 text-zinc-400"
                      }`}
                    >
                      <Package size={15} />
                    </div>

                    <h3
                      className={`uppercase text-xs tracking-wide ${
                        ["PACKED", "SHIPPED", "DELIVERED"].includes(orderStatus)
                          ? "font-black text-black"
                          : "font-medium text-zinc-400"
                      }`}
                    >
                      Packed
                    </h3>

                    <p className="text-zinc-500 text-xs mt-2">
                      Preparing order
                    </p>
                  </div>

                  {/* SHIPPED */}
                  <div>
                    <div
                      className={`w-8 h-8 flex items-center justify-center mb-4 ${
                        ["SHIPPED", "DELIVERED"].includes(orderStatus)
                          ? "bg-lime-500 text-black"
                          : "bg-zinc-200 text-zinc-400"
                      }`}
                    >
                      <Truck size={15} />
                    </div>

                    <h3
                      className={`uppercase text-xs tracking-wide ${
                        ["SHIPPED", "DELIVERED"].includes(orderStatus)
                          ? "font-black text-black"
                          : "font-medium text-zinc-400"
                      }`}
                    >
                      Shipped
                    </h3>

                    <p className="text-zinc-500 text-xs mt-2">In transit</p>
                  </div>

                  {/* DELIVERED */}
                  <div>
                    <div
                      className={`w-8 h-8 flex items-center justify-center mb-4 ${
                        orderStatus === "DELIVERED"
                          ? "bg-lime-500 text-black"
                          : "bg-zinc-200 text-zinc-400"
                      }`}
                    >
                      <Home size={15} />
                    </div>

                    <h3
                      className={`uppercase text-xs tracking-wide ${
                        orderStatus === "DELIVERED"
                          ? "font-black text-lime-600"
                          : "font-medium text-zinc-400"
                      }`}
                    >
                      Delivered
                    </h3>

                    <p
                      className={`text-xs mt-2 ${
                        orderStatus === "DELIVERED"
                          ? "text-lime-600"
                          : "text-zinc-400"
                      }`}
                    >
                      At your door
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DELIVERY */}
            <div className="py-8 border-b border-zinc-200">
              <p className="uppercase tracking-[0.35em] text-[12px] text-zinc-800 mb-4">
                Estimated Delivery
              </p>

              <h2 className="text-[2.5rem] md:text-[2rem] leading-none font-black tracking-tight">
                3 to 5 Days
              </h2>

              <p className="text-zinc-600 text-base mt-5 max-w-xl leading-relaxed">
                Your order is currently being prepared in our warehouse and will
                be shipped shortly with live tracking updates.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-8">
              <Link
                href="/shop"
                className="bg-black text-white px-7 py-4 uppercase tracking-[0.25em] text-xs font-semibold hover:bg-lime-400 hover:text-black transition-all duration-300 text-center"
              >
                Continue Shopping
              </Link>

              <Link
                href="/orders"
                className="border border-black px-7 py-4 uppercase tracking-[0.25em] text-xs font-semibold hover:bg-black hover:text-white transition-all duration-300 text-center"
              >
                View Orders
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="xl:sticky xl:top-8 h-fit">
            {/* SUMMARY */}
            <div className="border border-zinc-200 bg-white">
              {/* TOP */}
              <div className="p-5 border-b border-zinc-200">
                <p className="uppercase tracking-[0.35em] text-[10px] text-zinc-500 mb-3">
                  Order Summary
                </p>

                <h2 className="text-[2.3rem] font-black tracking-tight leading-none">
                  #VLX2048
                </h2>

                <p className="text-zinc-500 text-xs mt-3">
                  2 items • Paid successfully
                </p>
              </div>

              {/* PRODUCTS */}
              <div className="p-5 space-y-5">
                {/* ITEM */}
                <div className="flex gap-3">
                  <div className="w-20 h-20 bg-[#f6f6f3] border border-zinc-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
                      alt="shoe"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-black uppercase text-base leading-tight">
                      Shadow Runner
                    </h3>

                    <p className="text-zinc-500 text-xs mt-2">Qty: 1</p>

                    <p className="font-black text-xl mt-3">₹2499</p>
                  </div>
                </div>

                {/* ITEM */}
                <div className="flex gap-3">
                  <div className="w-20 h-20 bg-[#f6f6f3] border border-zinc-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1600&auto=format&fit=crop"
                      alt="shoe"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-black uppercase text-base leading-tight">
                      Takewood Shoe
                    </h3>

                    <p className="text-zinc-500 text-xs mt-2">Qty: 1</p>

                    <p className="font-black text-xl mt-3">₹4999</p>
                  </div>
                </div>
              </div>

              {/* TOTAL */}
              <div className="border-t border-zinc-200 p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="uppercase tracking-[0.25em] text-[10px] text-zinc-500">
                    Total Paid
                  </p>

                  <p className="text-zinc-500 text-xs">Inclusive of taxes</p>
                </div>

                <h2 className="text-[3rem] font-black tracking-tight leading-none">
                  ₹7498
                </h2>
              </div>
            </div>

            {/* HELP */}
            <div className="mt-5 border border-zinc-200 p-5">
              <p className="uppercase tracking-[0.25em] text-[10px] text-zinc-500 mb-4">
                Need Help?
              </p>

              <p className="text-xs text-zinc-500 leading-relaxed">
                Contact our support team for shipping updates, returns or
                delivery assistance.
              </p>

              <a
                href="https://wa.me/918630428859"
                target="_blank"
                className="mt-5 flex items-center gap-2 uppercase tracking-[0.25em] text-[11px] font-semibold hover:gap-3 transition-all"
              >
                Contact Support
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
