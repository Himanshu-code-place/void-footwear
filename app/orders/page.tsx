// "use client";

// import { useEffect, useState } from "react";

// type Order = {
//   id: string;

//   customerName: string;

//   userEmail: string;

//   amount: number;

//   status: string;

//   createdAt: string;
// };

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<any[]>([]);

//   //   useEffect(() => {
//   //     const fetchOrders = async () => {
//   //       const res = await fetch("/api/orders");

//   //       const data = await res.json();

//   //       setOrders(data);
//   //     };

//   //     fetchOrders();
//   //   }, []);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const res = await fetch("/api/orders", {
//         credentials: "include",
//       });

//       const data = await res.json();

//       if (Array.isArray(data)) {
//         setOrders(data);
//       } else {
//         console.log(data);

//         setOrders([]);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <main className="min-h-screen bg-black text-white pt-36 pb-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* HEADER */}
//         <div className="mb-16">
//           <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
//             VELTRIX® Orders
//           </p>

//           <h1 className="text-6xl md:text-7xl font-black tracking-[-0.06em] mt-6">
//             ORDER
//             <br />
//             HISTORY
//           </h1>
//         </div>

//         {/* ORDERS */}
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <div
//               key={order.id}
//               className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl"
//             >
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//                 <div>
//                   <p className="text-zinc-500 text-sm">ORDER ID</p>

//                   <h2 className="text-xl font-bold mt-2">{order.id}</h2>
//                 </div>

//                 <div>
//                   <p className="text-zinc-500 text-sm">CUSTOMER</p>

//                   <h2 className="text-lg font-semibold mt-2">
//                     {order.customerName}
//                   </h2>
//                 </div>

//                 <div>
//                   <p className="text-zinc-500 text-sm">TOTAL</p>

//                   <h2 className="text-lg font-semibold mt-2">
//                     ₹{order.amount}
//                   </h2>
//                 </div>

//                 <div>
//                   <p className="text-zinc-500 text-sm">STATUS</p>

//                   <div className="mt-2 inline-flex px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm">
//                     {order.status}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { PackageCheck, Truck, Home, ArrowRight } from "lucide-react";

export default function OrdersPage() {
  const orders = [
    {
      id: "#VLX2048",
      date: "24 July 2026",
      status: "PACKED",
      total: "₹7498",
      items: [
        {
          name: "Shadow Runner",
          price: "₹2499",
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
        },

        {
          name: "Takewood Shoe",
          price: "₹4999",
          image:
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1600&auto=format&fit=crop",
        },
      ],
    },

    {
      id: "#VLX1832",
      date: "12 July 2026",
      status: "DELIVERED",
      total: "₹5299",
      items: [
        {
          name: "Urban Velocity",
          price: "₹5299",
          image:
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1600&auto=format&fit=crop",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f6f3] text-black">
      {/* CONTAINER */}
      <div className="max-w-[1250px] mx-auto px-5 md:px-10 py-8 md:py-12">
        {/* TOP */}
        <div className="border-b border-zinc-200 pb-10">
          <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-5">
            Account
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="text-[2rem] md:text-[3rem] leading-[0.9] tracking-tight font-black uppercase">
                Order
              </h1>

              <h1 className="text-[2.5rem] md:text-[3rem] leading-[0.9] tracking-tight font-black uppercase">
                History
              </h1>
            </div>

            <p className="text-zinc-500 text-sm max-w-md">
              Track your previous purchases, shipping progress and delivery
              updates.
            </p>
          </div>
        </div>

        {/* ORDERS */}
        <div className="mt-12 space-y-10">
          {orders.map((order, index) => (
            <div key={index} className="border border-zinc-200 bg-white">
              {/* TOP */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 p-6 md:p-8 border-b border-zinc-200">
                <div>
                  <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-3">
                    Order ID
                  </p>

                  <h2 className="text-[1.6rem] md:text-[2.4rem] leading-none font-black tracking-tight">
                    {order.id}
                  </h2>

                  <p className="text-zinc-500 text-sm mt-3">
                    Placed on {order.date}
                  </p>
                </div>

                {/* STATUS */}
                {/* STATUS */}
                <div className="flex flex-col items-end gap-4">
                  {order.status === "Packed" ? (
                    <div className="inline-flex items-center gap-2 border border-black px-3 py-2 bg-black text-white">
                      <PackageCheck size={14} />

                      <div>
                        <p className="uppercase text-[9px] tracking-[0.28em] font-semibold">
                          Packed
                        </p>

                        <p className="text-[10px] text-zinc-300 mt-1">
                          Preparing shipment
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 border border-lime-500 px-3 py-2 bg-lime-50 text-lime-700">
                      <Home size={14} />

                      <div>
                        <p className="uppercase text-[9px] tracking-[0.28em] font-semibold">
                          Delivered
                        </p>

                        <p className="text-[10px] mt-1">
                          Successfully delivered
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="text-right">
                    <p className="uppercase tracking-[0.25em] text-[10px] text-zinc-500 mb-1">
                      Total Paid
                    </p>

                    <h3 className="text-2xl md:text-3xl font-black leading-none">
                      {order.total}
                    </h3>
                  </div>
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="p-5 md:p-6">
                <div className="space-y-7">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row gap-5 border-b border-zinc-200 pb-7"
                    >
                      {/* IMAGE */}
                      <div className="w-full sm:w-15 h-15 bg-[#f6f6f3] border border-zinc-200 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* DETAILS */}
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                          <h3 className="text-lg md:text-xl font-black uppercase leading-tight">
                            {item.name}
                          </h3>

                          <p className="text-zinc-500 text-sm mt-3">
                            Premium VELTRIX® footwear
                          </p>

                          <div className="flex items-center gap-2 text-sm text-zinc-500 mt-4">
                            <Truck size={15} />

                            {order.status === "Delivered"
                              ? "Delivered successfully"
                              : "Shipping soon"}
                          </div>
                        </div>

                        <div className="flex flex-col items-start lg:items-end gap-5">
                          <h3 className="text-lg font-black leading-none">
                            {item.price}
                          </h3>

                          <button
                            onClick={() => {
                              window.location.href = "/";
                            }}
                            className="
  uppercase
  tracking-[0.25em]
  text-[10px]
  font-semibold
  border-b
  border-black
  pb-1
  hover:opacity-60
  transition
"
                          >
                            Buy Again
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BUTTONS */}
                {/* <div className="flex flex-col sm:flex-row gap-3 pt-6">
                  <Link
                    href={`/orders/${order.id}`}
                    className="border border-black px-6 py-4 uppercase tracking-[0.25em] text-[11px] font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Track Order
                    <ArrowRight size={13} />
                  </Link>

                  <Link
                    href="/shop"
                    className="bg-black text-white px-6 py-4 uppercase tracking-[0.25em] text-[11px] font-semibold hover:bg-lime-400 hover:text-black transition-all duration-300 text-center"
                  >
                    Continue Shopping
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
