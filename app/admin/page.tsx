export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#e9e5df] p-10">
      <div className="max-w-7xl mx-auto">
        {/* TOP */}
        <div className="flex items-end justify-between">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-zinc-600">
              Admin Dashboard
            </p>

            <h1 className="text-7xl tracking-[-0.08em] font-black text-black mt-4 leading-none">
              VOID Admin
            </h1>
          </div>

          <div className="bg-black text-white px-6 py-3 rounded-full text-sm tracking-wide shadow-xl">
            Live Store
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-7 mt-14">
          {/* CARD */}
          <div className="bg-white rounded-[34px] p-8 border border-black/5 shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition duration-300">
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs">
              Revenue
            </p>

            <h2 className="text-5xl font-black tracking-[-0.06em] text-black mt-5">
              ₹0
            </h2>

            <div className="mt-6 h-2 rounded-full bg-zinc-100 overflow-hidden">
              <div className="w-[40%] h-full bg-black rounded-full"></div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-[34px] p-8 border border-black/5 shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition duration-300">
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs">
              Orders
            </p>

            <h2 className="text-5xl font-black tracking-[-0.06em] text-black mt-5">
              0
            </h2>

            <div className="mt-6 h-2 rounded-full bg-zinc-100 overflow-hidden">
              <div className="w-[20%] h-full bg-black rounded-full"></div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-[34px] p-8 border border-black/5 shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition duration-300">
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs">
              Products
            </p>

            <h2 className="text-5xl font-black tracking-[-0.06em] text-black mt-5">
              0
            </h2>

            <div className="mt-6 h-2 rounded-full bg-zinc-100 overflow-hidden">
              <div className="w-[60%] h-full bg-black rounded-full"></div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-black text-white rounded-[34px] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition duration-300">
            <p className="uppercase tracking-[0.2em] text-xs text-zinc-400">
              Customers
            </p>

            <h2 className="text-5xl font-black tracking-[-0.06em] mt-5">0</h2>

            <div className="mt-6 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="w-[30%] h-full bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* RECENT SECTION */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-8 mt-14">
          {/* ORDERS */}
          <div className="bg-white rounded-[40px] p-10 shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                  Orders
                </p>

                <h2 className="text-3xl font-black tracking-[-0.06em] mt-3 text-black">
                  Recent Orders
                </h2>
              </div>

              <button className="bg-black text-white px-5 py-3 rounded-full text-sm">
                View All
              </button>
            </div>

            <div className="mt-10 space-y-5">
              <div className="flex items-center justify-between border border-zinc-200 rounded-3xl px-6 py-5">
                <div>
                  <h3 className="font-semibold text-lg text-black">
                    VOID Street Low
                  </h3>

                  <p className="text-zinc-500 text-sm mt-1">Order #1021</p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-xl text-black">₹999</p>

                  <p className="text-green-600 text-sm mt-1">Paid</p>
                </div>
              </div>
            </div>
          </div>

          {/* ANALYTICS */}
          <div className="bg-black text-white rounded-[40px] p-10 shadow-[0_15px_50px_rgba(0,0,0,0.15)]">
            <p className="uppercase tracking-[0.3em] text-xs text-zinc-400">
              Analytics
            </p>

            <h2 className="text-3xl font-black tracking-[-0.06em] mt-4">
              Store Performance
            </h2>

            <div className="mt-10 space-y-8">
              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span>Conversion</span>
                  <span>0%</span>
                </div>

                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-[10%] h-full bg-white rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span>Sales Goal</span>
                  <span>0%</span>
                </div>

                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-[20%] h-full bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
