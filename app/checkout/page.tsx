"use client";

import { toast } from "sonner";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import Image from "next/image";

import { Lock, MapPin, Phone, Building2, Map, ChevronDown } from "lucide-react";

import { useCart } from "@/src/context/cart-context";
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // const loadRazorpay = () => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");

  //     script.src = "https://checkout.razorpay.com/v1/checkout.js";

  //     script.onload = () => {
  //       resolve(true);
  //     };

  //     script.onerror = () => {
  //       resolve(false);
  //     };

  //     document.body.appendChild(script);
  //   });
  // };

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.async = true;

    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/shop");
    }
  }, [cart, router]);

  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");

  const [city, setCity] = useState("");

  const [state, setState] = useState("");

  const [pincode, setPincode] = useState("");

  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    // const res = await loadRazorpay();

    if (
      !phone ||
      phone.length !== 10 ||
      !address ||
      !city ||
      !state ||
      !pincode
    ) {
      toast.error("Please fill all shipping details");

      setLoading(false);

      return;
    }

    // if (!res) {
    //   alert("Razorpay failed to load");

    //   return;
    // }

    const orderRes = await fetch("/api/create-order", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        amount: totalAmount,
      }),
    });

    const order = await orderRes.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: order.currency,

      name: "VELTRIX Footwear",

      description: "Premium Sneaker Purchase",

      order_id: order.id,

      handler: async function (response: any) {
        const saveRes = await fetch("/api/save-order", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            customerName: "Customer",

            userEmail: "customer@VELTRIX.com",

            phone,

            address,

            city,

            state,

            pincode,

            products: cart,

            amount: totalAmount,

            paymentId: response.razorpay_payment_id,

            status: "PAID",
          }),
        });

        if (!saveRes.ok) {
          alert("Failed to save order");

          return;
        }

        localStorage.removeItem("cart");

        setTimeout(() => {
          window.location.href = "/success";
        }, 500);
      },

      theme: {
        color: "#000000",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };

  return (
    <main className="min-h-screen bg-[#efede8] flex items-center justify-center px-6 py-6 pt-36 text-black">
      <div className="w-full max-w-[1280px] grid lg:grid-cols-[1fr_340px] gap-6 items-start">
        {/* LEFT SIDE */}
        <div className="bg-[#f8f7f4] rounded-[32px] p-7 border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          {/* TOP */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] tracking-[0.35em] text-zinc-500 uppercase mb-3">
                Checkout
              </p>

              <h1 className="text-[38px] leading-[0.95] font-semibold tracking-[-0.04em]">
                Shipping Information
              </h1>
            </div>

            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Lock size={16} />
              <span>Secure Payment</span>
            </div>
          </div>

          <div className="border-t border-black/10 my-6" />

          <p className="text-zinc-500 text-[15px] mb-6">
            Please enter your shipping details below.
          </p>

          {/* FORM */}
          <div className="space-y-5">
            {/* PHONE */}
            <div>
              <label className="text-sm font-medium text-zinc-700 mb-2 block">
                Phone Number
              </label>

              <div className="flex items-center bg-white border border-black/10 rounded-2xl h-14 px-4 shadow-sm focus-within:border-black transition">
                {/* FLAG */}
                <div className="flex items-center gap-2 pr-4 border-r border-black/10">
                  <span className="text-lg">🇮🇳</span>

                  <span className="text-sm font-medium text-black">+91</span>

                  <ChevronDown size={14} className="text-zinc-400" />
                </div>

                {/* INPUT */}
                <div className="flex items-center gap-3 flex-1 pl-4">
                  <Phone size={18} className="text-zinc-400" />

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");

                      if (value.length <= 10) {
                        setPhone(value);
                      }
                    }}
                    placeholder="9876543210"
                    maxLength={10}
                    className="w-full bg-transparent outline-none text-[14px] tracking-[0.08em] placeholder:text-zinc-400"
                  />
                </div>
              </div>

              {/* VALIDATION TEXT */}
              {phone.length > 0 && phone.length < 10 && (
                <p className="text-red-500 text-xs mt-2">
                  Enter valid 10-digit mobile number
                </p>
              )}
            </div>

            {/* ADDRESS */}
            <div>
              <label className="text-sm font-medium text-zinc-700 mb-2 block">
                Full Address
              </label>

              <div className="flex gap-3 bg-white border border-black/10 rounded-2xl px-5 py-5 shadow-sm focus-within:border-black transition">
                <MapPin size={18} className="text-zinc-400 mt-1" />

                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your full address"
                  className="w-full h-28 resize-none bg-transparent outline-none text-[14px] placeholder:text-zinc-400"
                />
              </div>
            </div>

            {/* CITY + STATE */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-zinc-700 mb-2 block">
                  City
                </label>

                <div className="flex items-center gap-3 bg-white border border-black/10 rounded-2xl h-14 px-5 shadow-sm">
                  <Building2 size={18} className="text-zinc-400" />

                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                    className="w-full bg-transparent outline-none text-[14px] placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-700 mb-2 block">
                  State
                </label>

                <div className="flex items-center gap-3 bg-white border border-black/10 rounded-2xl h-14 px-5 shadow-sm">
                  <Map size={18} className="text-zinc-400" />

                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Enter state"
                    className="w-full bg-transparent outline-none text-[14px] placeholder:text-zinc-400"
                  />
                </div>
              </div>
            </div>

            {/* PINCODE */}
            <div>
              <label className="text-sm font-medium text-zinc-700 mb-2 block">
                Pincode
              </label>

              <div className="flex items-center gap-3 bg-white border border-black/10 rounded-2xl h-14 px-5 shadow-sm">
                <MapPin size={18} className="text-zinc-400" />

                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter pincode"
                  className="w-full bg-transparent outline-none text-[14px] placeholder:text-zinc-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#dfdbd3] rounded-[30px] p-7 border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sticky top-6">
          <p className="text-[12px] tracking-[0.35em] uppercase text-zinc-500 mb-8">
            Order Summary
          </p>

          {/* PRODUCT */}
          {cart.map((item) => (
            <div key={item.id} className="flex gap-5 items-center">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-[22px] font-semibold tracking-[-0.03em] leading-tight">
                  {item.name}
                </h2>

                <p className="text-zinc-500 text-[15px] mt-1">
                  Qty: {item.quantity}
                </p>

                <p className="text-[20px] font-semibold mt-3">{item.price}</p>
              </div>
            </div>
          ))}

          <div className="border-t border-black/10 my-8" />

          {/* TOTAL */}
          <div className="flex items-end justify-between">
            <div>
              <p className="uppercase tracking-[0.3em] text-[11px] text-zinc-500 mb-2">
                Total
              </p>

              <p className="text-5xl font-bold tracking-[-0.06em]">
                ₹{totalAmount}
              </p>
            </div>
          </div>

          {/* SECURE TEXT */}
          <div className="flex items-center gap-2 text-zinc-500 text-sm mt-7">
            <Lock size={16} />
            <span>Your payment is secured and encrypted</span>
          </div>

          {/* BUTTON */}
          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full h-14 mt-8 rounded-2xl bg-gradient-to-r from-black to-zinc-800 text-white text-[15px] font-semibold tracking-[0.12em] uppercase hover:scale-[1.01] transition-all duration-300 shadow-xl"
          >
            {loading ? "PROCESSING PAYMENT..." : "COMPLETE PAYMENT →"}
          </button>
        </div>
      </div>
    </main>
  );
}
