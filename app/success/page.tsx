import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">
      <div className="max-w-3xl w-full bg-white/5 border border-white/10 rounded-[40px] p-8 sm:p-14 text-center backdrop-blur-2xl">
        {/* CHECK ICON */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-green-400/30 bg-green-500/10 flex items-center justify-center mx-auto">
          <span className="text-4xl sm:text-5xl">✅</span>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-[-0.06em] text-white mt-10 leading-none">
          ORDER
          <br />
          CONFIRMED
        </h1>

        {/* SUBTEXT */}
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mt-8 max-w-xl mx-auto">
          Your payment was successful. Your premium VOID® sneakers are now being
          prepared for shipment and delivery.
        </p>

        {/* TRACKER */}
        <div className="mt-16">
          <div className="flex items-center justify-between relative">
            {/* LINE */}
            <div className="absolute top-5 left-0 w-full h-[3px] bg-white/10" />

            <div className="absolute top-5 left-0 w-[45%] h-[3px] bg-green-500" />

            {/* STEP 1 */}
            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
                ✓
              </div>

              <p className="text-white text-sm mt-4 font-semibold">Confirmed</p>

              <span className="text-zinc-500 text-xs mt-1">
                Payment Received
              </span>
            </div>

            {/* STEP 2 */}
            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
                ✓
              </div>

              <p className="text-white text-sm mt-4 font-semibold">Packed</p>

              <span className="text-zinc-500 text-xs mt-1">
                Preparing Order
              </span>
            </div>

            {/* STEP 3 */}
            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white font-bold">
                3
              </div>

              <p className="text-white text-sm mt-4 font-semibold">Shipped</p>

              <span className="text-zinc-500 text-xs mt-1">In Transit</span>
            </div>

            {/* STEP 4 */}
            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white font-bold">
                4
              </div>

              <p className="text-white text-sm mt-4 font-semibold">Delivered</p>

              <span className="text-zinc-500 text-xs mt-1">At Your Door</span>
            </div>
          </div>
        </div>

        {/* DELIVERY BOX */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-[30px] p-6 sm:p-8 text-left">
          <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
            Estimated Delivery
          </p>

          <h3 className="text-3xl sm:text-4xl font-black tracking-[-0.05em] text-white mt-4">
            2 — 4 Business Days
          </h3>

          <p className="text-zinc-400 mt-4 leading-relaxed">
            Your order is currently being prepared in our warehouse and will be
            shipped shortly with real-time tracking updates.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
          <Link
            href="/"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition"
          >
            Continue Shopping
          </Link>

          <Link
            href="/admin/orders"
            className="border border-white/10 text-white px-8 py-4 rounded-full hover:bg-white/5 transition font-medium"
          >
            View Orders
          </Link>
        </div>
      </div>
    </main>
  );
}
