import { Check, Package, Truck, Home } from "lucide-react";

export default function TrackOrderPage() {
  const status: string = "PACKED";

  return (
    <main className="min-h-screen bg-[#f6f6f3] text-black">
      <div className="max-w-6xl mx-auto px-5 py-10">
        {/* TOP */}
        <div className="border-b border-zinc-200 pb-8">
          <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-5">
            Track Order
          </p>

          <h1 className="text-[3rem] md:text-[5rem] font-black uppercase leading-[0.9] tracking-tight">
            #VLX2048
          </h1>

          <p className="text-zinc-500 mt-4">Estimated delivery in 2—4 days</p>
        </div>

        {/* TRACKER */}
        <div className="mt-16">
          <div className="relative">
            {/* LINE */}
            <div className="absolute top-5 left-0 w-full h-[1px] bg-zinc-300"></div>

            {/* ACTIVE LINE */}
            <div
              className={`absolute top-5 left-0 h-[1px] bg-black ${
                status === "CONFIRMED"
                  ? "w-[8%]"
                  : status === "PACKED"
                    ? "w-[38%]"
                    : status === "OUT_FOR_DELIVERY"
                      ? "w-[70%]"
                      : "w-full"
              }`}
            ></div>

            {/* STEPS */}
            <div className="grid grid-cols-4 relative z-10">
              {/* CONFIRMED */}
              <div>
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-5">
                  <Check size={18} />
                </div>

                <h3 className="font-black uppercase text-sm">Confirmed</h3>

                <p className="text-zinc-500 text-sm mt-2">Order placed</p>
              </div>

              {/* PACKED */}
              <div>
                <div
                  className={`w-10 h-10 flex items-center justify-center mb-5 ${
                    status === "PACKED" ||
                    status === "OUT_FOR_DELIVERY" ||
                    status === "DELIVERED"
                      ? "bg-black text-white"
                      : "border border-zinc-300 text-zinc-400"
                  }`}
                >
                  <Package size={18} />
                </div>

                <h3 className="font-black uppercase text-sm">Packed</h3>

                <p className="text-zinc-500 text-sm mt-2">Preparing shipment</p>
              </div>

              {/* SHIPPING */}
              <div>
                <div
                  className={`w-10 h-10 flex items-center justify-center mb-5 ${
                    status === "OUT_FOR_DELIVERY" || status === "DELIVERED"
                      ? "bg-black text-white"
                      : "border border-zinc-300 text-zinc-400"
                  }`}
                >
                  <Truck size={18} />
                </div>

                <h3 className="font-black uppercase text-sm">Shipping</h3>

                <p className="text-zinc-500 text-sm mt-2">On the way</p>
              </div>

              {/* DELIVERED */}
              <div>
                <div
                  className={`w-10 h-10 flex items-center justify-center mb-5 ${
                    status === "DELIVERED"
                      ? "bg-black text-white"
                      : "border border-zinc-300 text-zinc-400"
                  }`}
                >
                  <Home size={18} />
                </div>

                <h3 className="font-black uppercase text-sm">Delivered</h3>

                <p className="text-zinc-500 text-sm mt-2">
                  Delivered successfully
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STATUS BOX */}
        <div className="mt-20 border border-zinc-200 bg-white p-8">
          <p className="uppercase tracking-[0.3em] text-[11px] text-zinc-500 mb-4">
            Current Status
          </p>

          <h2 className="text-[3rem] font-black uppercase tracking-tight leading-none">
            {status.replaceAll("_", " ")}
          </h2>

          <p className="text-zinc-500 mt-5 text-lg">
            Your order is currently being prepared and packed.
          </p>
        </div>
      </div>
    </main>
  );
}
