"use client";

import { useEffect, useState } from "react";

type Order = {
  id: string;

  customerName: string;

  userEmail: string;

  amount: number;

  status: string;

  createdAt: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  //   useEffect(() => {
  //     const fetchOrders = async () => {
  //       const res = await fetch("/api/orders");

  //       const data = await res.json();

  //       setOrders(data);
  //     };

  //     fetchOrders();
  //   }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("/api/orders", {
        credentials: "include",
      });

      const data = await res.json();

      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        console.log(data);

        setOrders([]);
      }
    };

    fetchOrders();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
            VELTRIX® Orders
          </p>

          <h1 className="text-6xl md:text-7xl font-black tracking-[-0.06em] mt-6">
            ORDER
            <br />
            HISTORY
          </h1>
        </div>

        {/* ORDERS */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-zinc-500 text-sm">ORDER ID</p>

                  <h2 className="text-xl font-bold mt-2">{order.id}</h2>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">CUSTOMER</p>

                  <h2 className="text-lg font-semibold mt-2">
                    {order.customerName}
                  </h2>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">TOTAL</p>

                  <h2 className="text-lg font-semibold mt-2">
                    ₹{order.amount}
                  </h2>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">STATUS</p>

                  <div className="mt-2 inline-flex px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm">
                    {order.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
