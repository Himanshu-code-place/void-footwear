import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-[40px] p-14 text-center backdrop-blur-2xl">
        {/* CHECK ICON */}
        <div className="w-28 h-28 rounded-full border border-green-400/30 bg-green-500/10 flex items-center justify-center mx-auto">
          <span className="text-5xl">✅</span>
        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-black tracking-[-0.06em] text-white mt-10">
          ORDER
          <br />
          CONFIRMED
        </h1>

        {/* SUBTEXT */}
        <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-lg mx-auto">
          Your payment was successful. Your premium VOID® sneakers are now being
          prepared for shipment.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          <Link
            href="/"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition"
          >
            Continue Shopping
          </Link>

          <button className="border border-white/10 text-white px-8 py-4 rounded-full hover:bg-white/5 transition">
            View Orders
          </button>
        </div>
      </div>
    </main>
  );
}
