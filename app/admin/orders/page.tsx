import { prisma } from "@/src/lib/prisma";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#e9e5df] p-10">
      <div className="max-w-7xl mx-auto">
        {/* TOP */}

        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-zinc-700">
            Admin Orders
          </p>

          <h1 className="text-7xl font-black tracking-[-0.08em] mt-4 text-black">
            Orders
          </h1>
        </div>

        {/* ORDERS */}

        <div className="mt-12 space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-[36px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5"
            >
              {/* TOP */}

              <div className="flex items-start justify-between gap-10">
                {/* CUSTOMER */}

                <div>
                  <h2 className="text-4xl font-black tracking-[-0.05em] text-black">
                    {order.customerName}
                  </h2>

                  <p className="text-zinc-700 mt-3 text-lg">
                    {order.userEmail}
                  </p>
                </div>

                {/* PRICE */}

                <div className="text-right">
                  <p className="text-5xl font-black tracking-[-0.05em] text-black">
                    ₹{order.amount}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-green-600" />

                    <span className="text-green-700 text-sm font-bold uppercase tracking-wide">
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* DETAILS */}

              <div className="grid md:grid-cols-2 gap-10 mt-12">
                {/* LEFT */}

                <div className="space-y-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                      Phone
                    </p>

                    <p className="text-xl font-semibold text-black mt-2">
                      {order.phone || "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                      State
                    </p>

                    <p className="text-xl font-semibold text-black mt-2">
                      {order.state || "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                      Address
                    </p>

                    <p className="text-xl font-semibold text-black mt-2 leading-relaxed">
                      {order.address || "N/A"}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}

                <div className="space-y-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                      City
                    </p>

                    <p className="text-xl font-semibold text-black mt-2">
                      {order.city || "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                      Pincode
                    </p>

                    <p className="text-xl font-semibold text-black mt-2">
                      {order.pincode || "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                      Payment ID
                    </p>

                    <p className="text-lg font-medium text-zinc-700 mt-2 break-all">
                      {order.paymentId}
                    </p>
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
