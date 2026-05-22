"use client";

import { useState } from "react";

import { useSession } from "next-auth/react";
import { useCart } from "../../context/cart-context";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutButton() {
  const { cart } = useCart();

  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");

  const [city, setCity] = useState("");

  const [state, setState] = useState("");

  const [pincode, setPincode] = useState("");

  const { data: session } = useSession();

  const totalAmount = cart.reduce(
    (acc, item) =>
      acc + Number(item.price.replace(/[^0-9]/g, "")) * item.quantity,
    0,
  );

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay failed to load");

      return;
    }

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

      name: "VOID Footwear",

      description: "Premium Sneaker Purchase",

      order_id: order.id,

      //   handler: async function (response: any) {
      //     await fetch("/api/save-order", {
      //       method: "POST",

      //       headers: {
      //         "Content-Type": "application/json",
      //       },

      //       body: JSON.stringify({
      //         customerName: session?.user?.name || "Guest",

      //         userEmail: session?.user?.email || "guest@void.com",

      //         products: cart,

      //         amount: totalAmount,

      //         paymentId: response.razorpay_payment_id,

      //         status: "PAID",
      //       }),
      //     });

      //     window.location.href = "/success";
      //   },

      handler: async function (response: any) {
        const saveOrderRes = await fetch("/api/save-order", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            customerName: session?.user?.name || "Guest",

            userEmail: session?.user?.email || "guest@void.com",

            products: cart.map((item) => ({
              title: item.title,
              price: item.price,
              quantity: item.quantity,
              image: item.image,
            })),

            amount: totalAmount,

            paymentId: response.razorpay_payment_id,

            status: "PAID",
          }),
        });

        const savedOrder = await saveOrderRes.json();

        console.log("ORDER SAVED:", savedOrder);

        window.location.href = "/success";
      },

      theme: {
        color: "#000000",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };

  <div className="space-y-4 mb-6">
    <input
      type="text"
      placeholder="Phone Number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
    />

    <textarea
      placeholder="Full Address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none h-28 resize-none"
    />

    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
      />

      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
      />
    </div>

    <input
      type="text"
      placeholder="Pincode"
      value={pincode}
      onChange={(e) => setPincode(e.target.value)}
      className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
    />
  </div>;

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-black text-white py-5 rounded-full font-semibold hover:bg-zinc-800 transition duration-300"
    >
      PAY NOW
    </button>
  );
}
