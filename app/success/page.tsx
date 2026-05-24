import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-10 text-center backdrop-blur-2xl">
        {/* CHECK ICON */}
        <div className="w-20 h-20 rounded-full border border-green-400/30 bg-green-500/10 flex items-center justify-center mx-auto">
          <span className="text-4xl">✅</span>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-black tracking-[-0.06em] text-white mt-6 leading-none">
          ORDER
          <br />
          CONFIRMED
        </h1>

        {/* SUBTEXT */}
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-5 max-w-2xl mx-auto">
          Your payment was successful. Your premium VELTRIX® sneakers are now
          being prepared for shipment and delivery.
        </p>

        {/* TRACKER */}
        <div className="mt-10 overflow-x-auto">
          <div className="min-w-[700px] flex items-center justify-between relative">
            {/* LINE */}
            <div className="absolute top-5 left-0 w-full h-[3px] bg-zinc-800"></div>

            <div className="absolute top-5 left-0 w-[45%] h-[3px] bg-green-500"></div>

            {/* STEP 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
                ✓
              </div>

              <h3 className="text-white font-bold mt-3">Confirmed</h3>

              <p className="text-zinc-500 text-sm mt-1">Payment Received</p>
            </div>

            {/* STEP 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
                ✓
              </div>

              <h3 className="text-white font-bold mt-3">Packed</h3>

              <p className="text-zinc-500 text-sm mt-1">Preparing Order</p>
            </div>

            {/* STEP 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center text-white font-bold">
                3
              </div>

              <h3 className="text-white font-bold mt-3">Shipped</h3>

              <p className="text-zinc-500 text-sm mt-1">In Transit</p>
            </div>

            {/* STEP 4 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center text-white font-bold">
                4
              </div>

              <h3 className="text-white font-bold mt-3">Delivered</h3>

              <p className="text-zinc-500 text-sm mt-1">At Your Door</p>
            </div>
          </div>
        </div>

        {/* DELIVERY CARD */}
        <div className="mt-10 bg-white/[0.03] border border-white/10 rounded-[28px] p-6 text-left">
          <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
            Estimated Delivery
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-[-0.05em]">
            2—4 Business Days
          </h2>

          <p className="text-zinc-400 text-base mt-4 leading-relaxed">
            Your order is currently being prepared in our warehouse and will be
            shipped shortly with real-time tracking updates.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <Link
            href="/"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition"
          >
            Continue Shopping
          </Link>

          <Link
            href="/admin/orders"
            className="border border-white/10 text-white px-8 py-4 rounded-full hover:bg-white/5 transition"
          >
            View Orders
          </Link>
        </div>
      </div>
    </main>
  );
}
