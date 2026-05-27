// // // "use client";

// // // import { toast } from "sonner";

// // // import { useEffect, useState } from "react";

// // // import { useRouter } from "next/navigation";

// // // import Image from "next/image";

// // // import { Lock, MapPin, Phone, Building2, Map, ChevronDown } from "lucide-react";

// // // import { useCart } from "@/src/context/cart-context";
// // // declare global {
// // //   interface Window {
// // //     Razorpay: any;
// // //   }
// // // }

// // // export default function CheckoutPage() {
// // //   const { cart } = useCart();
// // //   const router = useRouter();

// // //   const [paymentMethod, setPaymentMethod] = useState("ONLINE");

// // //   const totalAmount = cart.reduce(
// // //     (acc, item) => acc + item.price * item.quantity,
// // //     0,
// // //   );

// // //   // const loadRazorpay = () => {
// // //   //   return new Promise((resolve) => {
// // //   //     const script = document.createElement("script");

// // //   //     script.src = "https://checkout.razorpay.com/v1/checkout.js";

// // //   //     script.onload = () => {
// // //   //       resolve(true);
// // //   //     };

// // //   //     script.onerror = () => {
// // //   //       resolve(false);
// // //   //     };

// // //   //     document.body.appendChild(script);
// // //   //   });
// // //   // };

// // //   useEffect(() => {
// // //     const script = document.createElement("script");

// // //     script.src = "https://checkout.razorpay.com/v1/checkout.js";

// // //     script.async = true;

// // //     document.body.appendChild(script);
// // //   }, []);

// // //   useEffect(() => {
// // //     if (cart.length === 0) {
// // //       router.push("/shop");
// // //     }
// // //   }, [cart, router]);

// // //   const [phone, setPhone] = useState("");

// // //   const [address, setAddress] = useState("");

// // //   const [city, setCity] = useState("");

// // //   const [state, setState] = useState("");

// // //   const [pincode, setPincode] = useState("");

// // //   const [loading, setLoading] = useState(false);

// // //   const handlePayment = async () => {
// // //     setLoading(true);
// // //     // const res = await loadRazorpay();

// // //     if (
// // //       !phone ||
// // //       phone.length !== 10 ||
// // //       !address ||
// // //       !city ||
// // //       !state ||
// // //       !pincode
// // //     ) {
// // //       toast.error("Please fill all shipping details");

// // //       setLoading(false);

// // //       return;
// // //     }

// // //     // if (!res) {
// // //     //   alert("Razorpay failed to load");

// // //     //   return;
// // //     // }

// // //     if (paymentMethod === "COD") {
// // //       toast.success("Order placed successfully!");

// // //       router.push("/success");

// // //       setLoading(false);

// // //       return;
// // //     }

// // //     const orderRes = await fetch("/api/create-order", {
// // //       method: "POST",

// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },

// // //       body: JSON.stringify({
// // //         amount: totalAmount,
// // //       }),
// // //     });

// // //     const order = await orderRes.json();

// // //     const options = {
// // //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

// // //       amount: totalAmount * 100,

// // //       currency: "INR",

// // //       name: "VELTRIX Footwear",

// // //       description: "Premium Sneakers",

// // //       image: "/logo.png",

// // //       handler: function () {
// // //         // success
// // //       },

// // //       config: {
// // //         display: {
// // //           blocks: {
// // //             upi: {
// // //               name: "Pay using UPI",
// // //               instruments: [
// // //                 {
// // //                   method: "upi",
// // //                 },
// // //               ],
// // //             },
// // //           },

// // //           sequence: ["block.upi"],

// // //           preferences: {
// // //             show_default_blocks: true,
// // //           },
// // //         },
// // //       },

// // //       theme: {
// // //         color: "#000000",
// // //       },
// // //     };

// // //     const razorpay = new window.Razorpay(options);

// // //     razorpay.open();
// // //   };

// // //   return (
// // //     <main className="min-h-screen bg-[#efede8] flex items-center justify-center px-6 py-6 pt-20 text-black">
// // //       <div className="w-full max-w-[1280px] grid lg:grid-cols-[1fr_340px] gap-6 items-start">
// // //         {/* LEFT SIDE */}
// // //         <div className="bg-[#f8f7f4] rounded-[32px] p-7 border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
// // //           {/* TOP */}
// // //           <div className="flex items-center justify-between">
// // //             <div>
// // //               <p className="text-[12px] tracking-[0.35em] text-zinc-500 uppercase mb-3">
// // //                 Checkout
// // //               </p>

// // //               <h1 className="text-[38px] leading-[0.95] font-semibold tracking-[-0.04em]">
// // //                 Shipping Information
// // //               </h1>
// // //             </div>

// // //             <div className="flex items-center gap-2 text-zinc-500 text-sm">
// // //               <Lock size={16} />
// // //               <span>Secure Payment</span>
// // //             </div>
// // //           </div>

// // //           <div className="border-t border-black/10 my-6" />

// // //           <p className="text-zinc-500 text-[15px] mb-6">
// // //             Please enter your shipping details below.
// // //           </p>

// // //           {/* FORM */}
// // //           <div className="space-y-5">
// // //             {/* PHONE */}
// // //             <div>
// // //               <label className="text-sm font-medium text-zinc-700 mb-2 block">
// // //                 Phone Number
// // //               </label>

// // //               <div className="flex items-center bg-white border border-black/10 rounded-2xl h-14 px-4 shadow-sm focus-within:border-black transition">
// // //                 {/* FLAG */}
// // //                 <div className="flex items-center gap-2 pr-4 border-r border-black/10">
// // //                   <span className="text-lg">🇮🇳</span>

// // //                   <span className="text-sm font-medium text-black">+91</span>

// // //                   <ChevronDown size={14} className="text-zinc-400" />
// // //                 </div>

// // //                 {/* INPUT */}
// // //                 <div className="flex items-center gap-3 flex-1 pl-4">
// // //                   <Phone size={18} className="text-zinc-400" />

// // //                   <input
// // //                     type="tel"
// // //                     value={phone}
// // //                     onChange={(e) => {
// // //                       const value = e.target.value.replace(/\D/g, "");

// // //                       if (value.length <= 10) {
// // //                         setPhone(value);
// // //                       }
// // //                     }}
// // //                     placeholder="9876543210"
// // //                     maxLength={10}
// // //                     className="w-full bg-transparent outline-none text-[14px] tracking-[0.08em] placeholder:text-zinc-400"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               {/* VALIDATION TEXT */}
// // //               {phone.length > 0 && phone.length < 10 && (
// // //                 <p className="text-red-500 text-xs mt-2">
// // //                   Enter valid 10-digit mobile number
// // //                 </p>
// // //               )}
// // //             </div>

// // //             {/* ADDRESS */}
// // //             <div>
// // //               <label className="text-sm font-medium text-zinc-700 mb-2 block">
// // //                 Full Address
// // //               </label>

// // //               <div className="flex gap-3 bg-white border border-black/10 rounded-2xl px-5 py-5 shadow-sm focus-within:border-black transition">
// // //                 <MapPin size={18} className="text-zinc-400 mt-1" />

// // //                 <textarea
// // //                   value={address}
// // //                   onChange={(e) => setAddress(e.target.value)}
// // //                   placeholder="Enter your full address"
// // //                   className="w-full h-28 resize-none bg-transparent outline-none text-[14px] placeholder:text-zinc-400"
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* CITY + STATE */}
// // //             <div className="grid grid-cols-2 gap-5">
// // //               <div>
// // //                 <label className="text-sm font-medium text-zinc-700 mb-2 block">
// // //                   City
// // //                 </label>

// // //                 <div className="flex items-center gap-3 bg-white border border-black/10 rounded-2xl h-14 px-5 shadow-sm">
// // //                   <Building2 size={18} className="text-zinc-400" />

// // //                   <input
// // //                     type="text"
// // //                     value={city}
// // //                     onChange={(e) => setCity(e.target.value)}
// // //                     placeholder="Enter city"
// // //                     className="w-full bg-transparent outline-none text-[14px] placeholder:text-zinc-400"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div>
// // //                 <label className="text-sm font-medium text-zinc-700 mb-2 block">
// // //                   State
// // //                 </label>

// // //                 <div className="flex items-center gap-3 bg-white border border-black/10 rounded-2xl h-14 px-5 shadow-sm">
// // //                   <Map size={18} className="text-zinc-400" />

// // //                   <input
// // //                     type="text"
// // //                     value={state}
// // //                     onChange={(e) => setState(e.target.value)}
// // //                     placeholder="Enter state"
// // //                     className="w-full bg-transparent outline-none text-[14px] placeholder:text-zinc-400"
// // //                   />
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* PINCODE */}
// // //             <div>
// // //               <label className="text-sm font-medium text-zinc-700 mb-2 block">
// // //                 Pincode
// // //               </label>

// // //               <div className="flex items-center gap-3 bg-white border border-black/10 rounded-2xl h-14 px-5 shadow-sm">
// // //                 <MapPin size={18} className="text-zinc-400" />

// // //                 <input
// // //                   type="text"
// // //                   value={pincode}
// // //                   onChange={(e) => setPincode(e.target.value)}
// // //                   placeholder="Enter pincode"
// // //                   className="w-full bg-transparent outline-none text-[14px] placeholder:text-zinc-400"
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* RIGHT SIDE */}
// // //         <div className="bg-[#dfdbd3] rounded-[30px] p-7 border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sticky top-6">
// // //           <p className="text-[12px] tracking-[0.35em] uppercase text-zinc-500 mb-8">
// // //             Order Summary
// // //           </p>

// // //           {/* PRODUCT */}
// // //           {cart.map((item) => (
// // //             <div key={item.id} className="flex gap-5 items-center">
// // //               <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-sm">
// // //                 <Image
// // //                   src={item.image}
// // //                   alt={item.name}
// // //                   width={70}
// // //                   height={70}
// // //                   className="object-contain"
// // //                 />
// // //               </div>

// // //               <div className="flex-1">
// // //                 <h2 className="text-[22px] font-semibold tracking-[-0.03em] leading-tight">
// // //                   {item.name}
// // //                 </h2>

// // //                 <p className="text-zinc-500 text-[15px] mt-1">
// // //                   Qty: {item.quantity}
// // //                 </p>

// // //                 <p className="text-[20px] font-semibold mt-3">{item.price}</p>
// // //               </div>
// // //             </div>
// // //           ))}

// // //           <div className="border-t border-black/10 my-8" />

// // //           {/* TOTAL */}
// // //           <div className="flex items-end justify-between">
// // //             <div>
// // //               <p className="uppercase tracking-[0.3em] text-[11px] text-zinc-500 mb-2">
// // //                 Total
// // //               </p>

// // //               <p className="text-5xl font-bold tracking-[-0.06em]">
// // //                 ₹{totalAmount}
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* PAYMENT METHOD */}
// // // <div className="mt-7">
// // //   <h3 className="text-[13px] font-semibold tracking-[0.28em] uppercase text-zinc-700 mb-4">
// // //     Payment Method
// // //   </h3>

// // //   <div className="space-y-3">

// // //     {/* ONLINE */}
// // //     <label
// // //       onClick={() => setPaymentMethod("ONLINE")}
// // //       className={`flex items-center justify-between rounded-2xl px-4 py-4 cursor-pointer transition-all duration-300 border ${
// // //         paymentMethod === "ONLINE"
// // //           ? "bg-black text-white border-black"
// // //           : "bg-white border-black/10 hover:border-black/30"
// // //       }`}
// // //     >
// // //       <div className="flex items-center gap-3">
// // //         <div
// // //           className={`w-4 h-4 rounded-full border flex items-center justify-center ${
// // //             paymentMethod === "ONLINE"
// // //               ? "border-white"
// // //               : "border-zinc-400"
// // //           }`}
// // //         >
// // //           {paymentMethod === "ONLINE" && (
// // //             <div className="w-2 h-2 rounded-full bg-white"></div>
// // //           )}
// // //         </div>

// // //         <div>
// // //           <p className="font-semibold text-[14px]">
// // //             Online Payment
// // //           </p>

// // //           <p
// // //             className={`text-xs ${
// // //               paymentMethod === "ONLINE"
// // //                 ? "text-zinc-300"
// // //                 : "text-zinc-500"
// // //             }`}
// // //           >
// // //             UPI, Cards, Netbanking
// // //           </p>
// // //         </div>
// // //       </div>

// // //       <Lock size={16} />
// // //     </label>

// // //     {/* COD */}
// // //     <label
// // //       onClick={() => setPaymentMethod("COD")}
// // //       className={`flex items-center justify-between rounded-2xl px-4 py-4 cursor-pointer transition-all duration-300 border ${
// // //         paymentMethod === "COD"
// // //           ? "bg-black text-white border-black"
// // //           : "bg-white border-black/10 hover:border-black/30"
// // //       }`}
// // //     >
// // //       <div className="flex items-center gap-3">
// // //         <div
// // //           className={`w-4 h-4 rounded-full border flex items-center justify-center ${
// // //             paymentMethod === "COD"
// // //               ? "border-white"
// // //               : "border-zinc-400"
// // //           }`}
// // //         >
// // //           {paymentMethod === "COD" && (
// // //             <div className="w-2 h-2 rounded-full bg-white"></div>
// // //           )}
// // //         </div>

// // //         <div>
// // //           <p className="font-semibold text-[14px]">
// // //             Cash On Delivery
// // //           </p>

// // //           <p
// // //             className={`text-xs ${
// // //               paymentMethod === "COD"
// // //                 ? "text-zinc-300"
// // //                 : "text-zinc-500"
// // //             }`}
// // //           >
// // //             Pay on delivery
// // //           </p>
// // //         </div>
// // //       </div>

// // //       <span className="text-xs font-semibold">
// // //         COD
// // //       </span>
// // //     </label>

// // //   </div>
// // // </div>

// // //           {/* SECURE TEXT */}
// // //           <div className="flex items-center gap-2 text-zinc-500 text-sm mt-7">
// // //             <Lock size={16} />
// // //             <span>Your payment is secured and encrypted</span>
// // //           </div>

// // //           {/* BUTTON */}
// // //           <button
// // //             onClick={handlePayment}
// // //             disabled={loading}
// // //             className="w-full h-14 mt-8 rounded-2xl bg-gradient-to-r from-black to-zinc-800 text-white text-[15px] font-semibold tracking-[0.12em] uppercase hover:scale-[1.01] transition-all duration-300 shadow-xl"
// // //           >
// // //             {loading ? "PROCESSING PAYMENT..." : "COMPLETE PAYMENT →"}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </main>
// // //   );
// // // }

// // "use client";

// // import { useState } from "react";
// // import { Lock, MapPin, Phone, Building2, Map } from "lucide-react";
// // import { useRouter } from "next/navigation";
// // import { toast } from "sonner";

// // export default function CheckoutPage() {
// //   const router = useRouter();

// //   const [paymentMethod, setPaymentMethod] = useState("ONLINE");
// //   const [loading, setLoading] = useState(false);

// //   const cartItems = [
// //     {
// //       id: 1,
// //       name: "Shadow Runner",
// //       price: 2499,
// //       image:
// //         "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
// //       qty: 1,
// //     },

// //     {
// //       id: 2,
// //       name: "Takewood Shoe",
// //       price: 4999,
// //       image:
// //         "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1600&auto=format&fit=crop",
// //       qty: 1,
// //     },
// //   ];

// //   const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

// //   const handleCheckout = async () => {
// //     setLoading(true);

// //     if (paymentMethod === "COD") {
// //       toast.success("Order placed successfully!");

// //       setTimeout(() => {
// //         router.push("/success");
// //       }, 1200);

// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       toast.success("Redirecting to Razorpay...");

// //       setTimeout(() => {
// //         router.push("/success");
// //       }, 1500);
// //     } catch (error) {
// //       toast.error("Payment failed");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <main className="min-h-screen bg-[#f7f7f7] text-black">
// //       {/* CONTAINER */}
// //       <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-6 md:py-10">
// //         {/* HEADER */}
// //         <div className="mb-8 md:mb-10">
// //           <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-3">
// //             Checkout
// //           </p>

// //           <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
// //             Shipping Information
// //           </h1>
// //         </div>

// //         {/* GRID */}
// //         <div className="grid grid-cols-1 xl:grid-cols-[1.3fr_0.7fr] gap-8">
// //           {/* LEFT SIDE */}
// //           <div className="bg-white border border-zinc-200 rounded-2xl p-5 md:p-8">
// //             {/* TOP */}
// //             <div className="flex items-center justify-between border-b border-zinc-200 pb-6">
// //               <div>
// //                 <h2 className="text-2xl md:text-3xl font-black tracking-tight">
// //                   Delivery Details
// //                 </h2>

// //                 <p className="text-zinc-500 text-sm mt-2">
// //                   Please enter your shipping information carefully.
// //                 </p>
// //               </div>

// //               <div className="hidden md:flex items-center gap-2 text-zinc-500 text-sm">
// //                 <Lock size={16} />
// //                 Secure Checkout
// //               </div>
// //             </div>

// //             {/* FORM */}
// //             <div className="mt-8 space-y-6">
// //               {/* PHONE */}
// //               <div>
// //                 <label className="text-sm font-medium mb-2 block">
// //                   Phone Number
// //                 </label>

// //                 <div className="flex items-center border border-zinc-300 rounded-xl overflow-hidden focus-within:border-black transition">
// //                   <div className="px-4 py-4 border-r border-zinc-300 text-sm font-medium bg-zinc-50">
// //                     +91
// //                   </div>

// //                   <div className="flex items-center gap-3 px-4 w-full">
// //                     <Phone size={18} className="text-zinc-400" />

// //                     <input
// //                       type="text"
// //                       placeholder="9876543210"
// //                       className="w-full py-4 outline-none bg-transparent text-sm"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* ADDRESS */}
// //               <div>
// //                 <label className="text-sm font-medium mb-2 block">
// //                   Full Address
// //                 </label>

// //                 <div className="border border-zinc-300 rounded-xl px-4 py-4 focus-within:border-black transition">
// //                   <div className="flex items-start gap-3">
// //                     <MapPin size={18} className="text-zinc-400 mt-1" />

// //                     <textarea
// //                       placeholder="Enter your complete address"
// //                       rows={5}
// //                       className="w-full outline-none resize-none bg-transparent text-sm"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* CITY + STATE */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                 <div>
// //                   <label className="text-sm font-medium mb-2 block">City</label>

// //                   <div className="flex items-center gap-3 border border-zinc-300 rounded-xl px-4 py-4 focus-within:border-black transition">
// //                     <Building2 size={18} className="text-zinc-400" />

// //                     <input
// //                       type="text"
// //                       placeholder="Enter city"
// //                       className="w-full outline-none bg-transparent text-sm"
// //                     />
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="text-sm font-medium mb-2 block">
// //                     State
// //                   </label>

// //                   <div className="flex items-center gap-3 border border-zinc-300 rounded-xl px-4 py-4 focus-within:border-black transition">
// //                     <Map size={18} className="text-zinc-400" />

// //                     <input
// //                       type="text"
// //                       placeholder="Enter state"
// //                       className="w-full outline-none bg-transparent text-sm"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* PINCODE */}
// //               <div>
// //                 <label className="text-sm font-medium mb-2 block">
// //                   Pincode
// //                 </label>

// //                 <div className="flex items-center gap-3 border border-zinc-300 rounded-xl px-4 py-4 focus-within:border-black transition">
// //                   <MapPin size={18} className="text-zinc-400" />

// //                   <input
// //                     type="text"
// //                     placeholder="Enter pincode"
// //                     className="w-full outline-none bg-transparent text-sm"
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT SIDE */}
// //           <div className="bg-[#ece9e2] border border-zinc-200 rounded-2xl p-5 md:p-7 h-fit xl:sticky xl:top-6">
// //             {/* TITLE */}
// //             <div className="mb-6">
// //               <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-3">
// //                 Order Summary
// //               </p>
// //             </div>

// //             {/* PRODUCTS */}
// //             <div className="space-y-4">
// //               {cartItems.map((item) => (
// //                 <div key={item.id} className="flex items-center gap-4">
// //                   <div className="w-24 h-24 bg-white rounded-xl overflow-hidden border border-zinc-200">
// //                     <img
// //                       src={item.image}
// //                       alt={item.name}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>

// //                   <div className="flex-1">
// //                     <h3 className="font-black text-xl leading-tight">
// //                       {item.name}
// //                     </h3>

// //                     <p className="text-zinc-500 mt-1 text-sm">
// //                       Qty: {item.qty}
// //                     </p>

// //                     <p className="font-black text-3xl mt-3">₹{item.price}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* TOTAL */}
// //             <div className="border-t border-zinc-300 mt-7 pt-7">
// //               <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-2">
// //                 Total
// //               </p>

// //               <h2 className="text-5xl font-black tracking-tight">₹{total}</h2>
// //             </div>

// //             {/* PAYMENT METHOD */}
// //             <div className="mt-8">
// //               <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-4">
// //                 Payment Method
// //               </p>

// //               <div className="space-y-3">
// //                 {/* ONLINE */}
// //                 <button
// //                   onClick={() => setPaymentMethod("ONLINE")}
// //                   className={`w-full flex items-center justify-between rounded-xl border px-4 py-4 transition-all duration-200 ${
// //                     paymentMethod === "ONLINE"
// //                       ? "bg-black text-white border-black"
// //                       : "bg-white border-zinc-200 hover:border-black"
// //                   }`}
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <div
// //                       className={`w-4 h-4 rounded-full border flex items-center justify-center ${
// //                         paymentMethod === "ONLINE"
// //                           ? "border-white"
// //                           : "border-zinc-400"
// //                       }`}
// //                     >
// //                       {paymentMethod === "ONLINE" && (
// //                         <div className="w-2 h-2 rounded-full bg-white"></div>
// //                       )}
// //                     </div>

// //                     <div className="text-left">
// //                       <p className="font-semibold text-sm">Online Payment</p>

// //                       <p
// //                         className={`text-xs ${
// //                           paymentMethod === "ONLINE"
// //                             ? "text-zinc-300"
// //                             : "text-zinc-500"
// //                         }`}
// //                       >
// //                         UPI, Cards, Netbanking
// //                       </p>
// //                     </div>
// //                   </div>

// //                   <Lock size={16} />
// //                 </button>

// //                 {/* COD */}
// //                 <button
// //                   onClick={() => setPaymentMethod("COD")}
// //                   className={`w-full flex items-center justify-between rounded-xl border px-4 py-4 transition-all duration-200 ${
// //                     paymentMethod === "COD"
// //                       ? "bg-black text-white border-black"
// //                       : "bg-white border-zinc-200 hover:border-black"
// //                   }`}
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <div
// //                       className={`w-4 h-4 rounded-full border flex items-center justify-center ${
// //                         paymentMethod === "COD"
// //                           ? "border-white"
// //                           : "border-zinc-400"
// //                       }`}
// //                     >
// //                       {paymentMethod === "COD" && (
// //                         <div className="w-2 h-2 rounded-full bg-white"></div>
// //                       )}
// //                     </div>

// //                     <div className="text-left">
// //                       <p className="font-semibold text-sm">Cash On Delivery</p>

// //                       <p
// //                         className={`text-xs ${
// //                           paymentMethod === "COD"
// //                             ? "text-zinc-300"
// //                             : "text-zinc-500"
// //                         }`}
// //                       >
// //                         Pay on delivery
// //                       </p>
// //                     </div>
// //                   </div>

// //                   <span className="text-xs font-bold">COD</span>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* SECURE TEXT */}
// //             <div className="flex items-center gap-2 text-zinc-500 text-sm mt-6">
// //               <Lock size={16} />
// //               Your payment is secured and encrypted
// //             </div>

// //             {/* BUTTON */}
// //             <button
// //               onClick={handleCheckout}
// //               disabled={loading}
// //               className="w-full mt-6 bg-black text-white py-4 rounded-xl font-black tracking-[0.2em] uppercase hover:bg-lime-400 hover:text-black transition-all duration-300"
// //             >
// //               {loading
// //                 ? "Processing..."
// //                 : paymentMethod === "COD"
// //                   ? "Place Order"
// //                   : "Complete Payment →"}
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { Lock, Phone, MapPin, Building2, Map } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export default function CheckoutPage() {
//   const router = useRouter();

//   const [paymentMethod, setPaymentMethod] = useState("ONLINE");
//   const [loading, setLoading] = useState(false);

//   const cartItems = [
//     {
//       id: 1,
//       name: "Shadow Runner",
//       price: 2499,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
//       qty: 1,
//     },

//     {
//       id: 2,
//       name: "Takewood Shoe",
//       price: 4999,
//       image:
//         "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1600&auto=format&fit=crop",
//       qty: 1,
//     },
//   ];

//   const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

//   const handleCheckout = async () => {
//     setLoading(true);

//     if (paymentMethod === "COD") {
//       toast.success("Order placed successfully!");

//       setTimeout(() => {
//         router.push("/success");
//       }, 1200);

//       setLoading(false);
//       return;
//     }

//     try {
//       toast.success("Redirecting to payment...");

//       setTimeout(() => {
//         router.push("/success");
//       }, 1500);
//     } catch (error) {
//       toast.error("Payment failed");
//     }

//     setLoading(false);
//   };

//   return (
//     <main className="min-h-screen bg-[#f6f6f3] text-black">
//       {/* CONTAINER */}
//       <div className="max-w-[1600px] mx-auto px-4 md:px-10 py-8 md:py-12">
//         {/* TOP */}
//         <div className="mb-10 md:mb-14">
//           <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-4">
//             Checkout
//           </p>

//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
//             <div>
//               <h1 className="text-[3rem] md:text-[5.5rem] leading-none tracking-tight font-black uppercase">
//                 Shipping
//               </h1>

//               <h1 className="text-[3rem] md:text-[5.5rem] leading-none tracking-tight font-black uppercase">
//                 Information
//               </h1>
//             </div>

//             <div className="flex items-center gap-2 text-sm text-zinc-500">
//               <Lock size={16} />
//               Secure Checkout
//             </div>
//           </div>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.55fr] gap-12">
//           {/* LEFT */}
//           <div>
//             {/* FORM */}
//             <div className="border-t border-zinc-300 pt-8">
//               <p className="text-zinc-500 text-sm mb-8">
//                 Please enter your shipping details below.
//               </p>

//               <div className="space-y-7">
//                 {/* PHONE */}
//                 <div>
//                   <label className="text-[13px] uppercase tracking-[0.2em] text-zinc-500 mb-3 block">
//                     Phone Number
//                   </label>

//                   <div className="border border-zinc-300 bg-white flex items-center">
//                     <div className="px-5 py-4 border-r border-zinc-300 text-sm">
//                       +91
//                     </div>

//                     <div className="flex items-center gap-3 px-5 w-full">
//                       <Phone size={18} className="text-zinc-400" />

//                       <input
//                         type="text"
//                         placeholder="9876543210"
//                         className="w-full py-4 bg-transparent outline-none text-[15px]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* ADDRESS */}
//                 <div>
//                   <label className="text-[13px] uppercase tracking-[0.2em] text-zinc-500 mb-3 block">
//                     Full Address
//                   </label>

//                   <div className="border border-zinc-300 bg-white p-5">
//                     <div className="flex items-start gap-3">
//                       <MapPin size={18} className="text-zinc-400 mt-1" />

//                       <textarea
//                         rows={6}
//                         placeholder="Enter your full address"
//                         className="w-full resize-none bg-transparent outline-none text-[15px]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* CITY + STATE */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div>
//                     <label className="text-[13px] uppercase tracking-[0.2em] text-zinc-500 mb-3 block">
//                       City
//                     </label>

//                     <div className="border border-zinc-300 bg-white flex items-center gap-3 px-5">
//                       <Building2 size={18} className="text-zinc-400" />

//                       <input
//                         type="text"
//                         placeholder="Enter city"
//                         className="w-full py-4 bg-transparent outline-none text-[15px]"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="text-[13px] uppercase tracking-[0.2em] text-zinc-500 mb-3 block">
//                       State
//                     </label>

//                     <div className="border border-zinc-300 bg-white flex items-center gap-3 px-5">
//                       <Map size={18} className="text-zinc-400" />

//                       <input
//                         type="text"
//                         placeholder="Enter state"
//                         className="w-full py-4 bg-transparent outline-none text-[15px]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* PINCODE */}
//                 <div>
//                   <label className="text-[13px] uppercase tracking-[0.2em] text-zinc-500 mb-3 block">
//                     Pincode
//                   </label>

//                   <div className="border border-zinc-300 bg-white flex items-center gap-3 px-5">
//                     <MapPin size={18} className="text-zinc-400" />

//                     <input
//                       type="text"
//                       placeholder="Enter pincode"
//                       className="w-full py-4 bg-transparent outline-none text-[15px]"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="xl:sticky xl:top-8 h-fit">
//             {/* TITLE */}
//             <div className="border-t border-zinc-300 pt-8">
//               <h2 className="text-[2.7rem] md:text-[3.5rem] font-black uppercase tracking-tight leading-none">
//                 Your Cart
//               </h2>

//               <p className="text-zinc-500 mt-3 text-sm">
//                 {cartItems.length} items in your order
//               </p>
//             </div>

//             {/* PRODUCTS */}
//             <div className="mt-8 space-y-6">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex gap-4 border-b border-zinc-200 pb-6"
//                 >
//                   <div className="w-24 h-24 bg-white border border-zinc-200 overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="flex-1">
//                     <h3 className="font-black text-xl leading-tight">
//                       {item.name}
//                     </h3>

//                     <p className="text-zinc-500 text-sm mt-1">
//                       Qty: {item.qty}
//                     </p>

//                     <p className="font-black text-3xl mt-3">₹{item.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* TOTAL */}
//             <div className="mt-8 border-b border-zinc-300 pb-8">
//               <div className="flex items-center justify-between mb-3">
//                 <span className="uppercase tracking-[0.25em] text-[11px] text-zinc-500">
//                   Total
//                 </span>

//                 <span className="text-zinc-500 text-sm">
//                   Inclusive of all taxes
//                 </span>
//               </div>

//               <h2 className="text-[3.5rem] font-black leading-none tracking-tight">
//                 ₹{total}
//               </h2>
//             </div>

//             {/* PAYMENT */}
//             <div className="mt-8">
//               <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-500 mb-4">
//                 Payment Method
//               </p>

//               <div className="space-y-3">
//                 {/* ONLINE */}
//                 <button
//                   onClick={() => setPaymentMethod("ONLINE")}
//                   className={`w-full border px-5 py-5 transition-all duration-200 ${
//                     paymentMethod === "ONLINE"
//                       ? "border-black bg-black text-white"
//                       : "border-zinc-300 bg-white hover:border-black"
//                   }`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <div
//                         className={`w-4 h-4 rounded-full border flex items-center justify-center ${
//                           paymentMethod === "ONLINE"
//                             ? "border-white"
//                             : "border-zinc-400"
//                         }`}
//                       >
//                         {paymentMethod === "ONLINE" && (
//                           <div className="w-2 h-2 rounded-full bg-white"></div>
//                         )}
//                       </div>

//                       <div className="text-left">
//                         <p className="font-semibold text-sm uppercase tracking-wide">
//                           Online Payment
//                         </p>

//                         <p
//                           className={`text-xs mt-1 ${
//                             paymentMethod === "ONLINE"
//                               ? "text-zinc-300"
//                               : "text-zinc-500"
//                           }`}
//                         >
//                           UPI, Cards & Netbanking
//                         </p>
//                       </div>
//                     </div>

//                     <Lock size={16} />
//                   </div>
//                 </button>

//                 {/* COD */}
//                 <button
//                   onClick={() => setPaymentMethod("COD")}
//                   className={`w-full border px-5 py-5 transition-all duration-200 ${
//                     paymentMethod === "COD"
//                       ? "border-black bg-black text-white"
//                       : "border-zinc-300 bg-white hover:border-black"
//                   }`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <div
//                         className={`w-4 h-4 rounded-full border flex items-center justify-center ${
//                           paymentMethod === "COD"
//                             ? "border-white"
//                             : "border-zinc-400"
//                         }`}
//                       >
//                         {paymentMethod === "COD" && (
//                           <div className="w-2 h-2 rounded-full bg-white"></div>
//                         )}
//                       </div>

//                       <div className="text-left">
//                         <p className="font-semibold text-sm uppercase tracking-wide">
//                           Cash On Delivery
//                         </p>

//                         <p
//                           className={`text-xs mt-1 ${
//                             paymentMethod === "COD"
//                               ? "text-zinc-300"
//                               : "text-zinc-500"
//                           }`}
//                         >
//                           Pay when your order arrives
//                         </p>
//                       </div>
//                     </div>

//                     <span className="text-xs font-bold uppercase">COD</span>
//                   </div>
//                 </button>
//               </div>
//             </div>

//             {/* SECURE */}
//             <div className="flex items-center gap-2 text-zinc-500 text-sm mt-6">
//               <Lock size={16} />
//               Your payment is secured and encrypted
//             </div>

//             {/* BUTTON */}
//             <button
//               onClick={handleCheckout}
//               disabled={loading}
//               className="w-full mt-8 border border-black bg-black text-white py-5 uppercase tracking-[0.25em] text-sm font-semibold hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300"
//             >
//               {loading
//                 ? "Processing..."
//                 : paymentMethod === "COD"
//                   ? "Place Order →"
//                   : "Complete Payment →"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import { Lock, Phone, MapPin, Building2, Map } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState("ONLINE");
  const [loading, setLoading] = useState(false);

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const cartItems = [
    {
      id: 1,
      name: "Shadow Runner",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
      qty: 1,
    },

    {
      id: 2,
      name: "Takewood Shoe",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1600&auto=format&fit=crop",
      qty: 1,
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const isFormValid =
    phone.length === 10 &&
    address.trim() !== "" &&
    city.trim() !== "" &&
    state.trim() !== "" &&
    pincode.trim() !== "";

  const handleCheckout = async () => {
    setLoading(true);

    if (paymentMethod === "COD") {
      toast.success("Order placed successfully!");

      setTimeout(() => {
        router.push("/success");
      }, 1200);

      setLoading(false);
      return;
    }

    try {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: total * 100,

        currency: "INR",

        name: "VELTRIX",

        description: "Order Payment",

        handler: function () {
          toast.success("Payment successful!");

          router.push("/success");
        },

        theme: {
          color: "#000000",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      toast.error("Payment failed");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* WRAPPER */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-8 md:py-12">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-b border-zinc-200 pb-8">
          <div>
            <p className="uppercase tracking-[0.35em] text-[11px] text-zinc-500 mb-4">
              Secure Checkout
            </p>

            <h1 className="text-[2.2rem] md:text-[3rem] font-black uppercase leading-[0.9] tracking-tight">
              Checkout
            </h1>
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Lock size={16} />
            Secure payment & encrypted checkout
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.55fr] gap-10 mt-10">
          {/* LEFT */}
          <div>
            {/* SHIPPING */}
            <div>
              <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                  Shipping Information
                </h2>

                <p className="text-zinc-500 text-sm mt-2">
                  Please enter your shipping details carefully.
                </p>
              </div>

              {/* FORM */}
              <div className="space-y-7">
                {/* PHONE */}
                <div>
                  <label className="text-[12px] uppercase tracking-[0.25em] text-zinc-500 mb-3 block">
                    Phone Number
                  </label>

                  <div className="border border-zinc-300 focus-within:border-black focus-within:ring-1 focus-within:ring-black flex items-center px-5 bg-white hover:border-black transition">
                    <div className="border-r border-zinc-300 pr-4 mr-4 text-sm">
                      +91
                    </div>

                    <Phone size={17} className="text-zinc-400 mr-3" />

                    <input
                      type="tel"
                      placeholder="9876543210"
                      value={phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");

                        if (value.length <= 10) {
                          setPhone(value);
                        }
                      }}
                      className="w-full py-4 outline-none bg-transparent text-[15px]"
                    />
                  </div>
                </div>

                {/* ADDRESS */}
                <div>
                  <label className="text-[12px] uppercase tracking-[0.25em] text-zinc-500 mb-3 block">
                    Full Address
                  </label>

                  <div className="border border-zinc-300 bg-white p-5 hover:border-black transition">
                    <div className="flex items-start gap-3">
                      <MapPin size={17} className="text-zinc-400 mt-1" />

                      <textarea
                        rows={6}
                        placeholder="Enter your complete address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full resize-none outline-none bg-transparent text-[15px]"
                      />
                    </div>
                  </div>
                </div>

                {/* CITY + STATE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* CITY */}
                  <div>
                    <label className="text-[12px] uppercase tracking-[0.25em] text-zinc-500 mb-3 block">
                      City
                    </label>

                    <div className="border border-zinc-300 flex items-center px-5 bg-white hover:border-black transition">
                      <Building2 size={17} className="text-zinc-400 mr-3" />

                      <input
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full py-4 outline-none bg-transparent text-[15px]"
                      />
                    </div>
                  </div>

                  {/* STATE */}
                  <div>
                    <label className="text-[12px] uppercase tracking-[0.25em] text-zinc-500 mb-3 block">
                      State
                    </label>

                    <div className="border border-zinc-300 flex items-center px-5 bg-white hover:border-black transition">
                      <Map size={17} className="text-zinc-400 mr-3" />

                      <input
                        type="text"
                        placeholder="Enter state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full py-4 outline-none bg-transparent text-[15px]"
                      />
                    </div>
                  </div>
                </div>

                {/* PINCODE */}
                <div>
                  <label className="text-[12px] uppercase tracking-[0.25em] text-zinc-500 mb-3 block">
                    Pincode
                  </label>

                  <div className="border border-zinc-300 flex items-center px-5 bg-white hover:border-black transition">
                    <MapPin size={17} className="text-zinc-400 mr-3" />

                    <input
                      type="text"
                      placeholder="Enter pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full py-4 outline-none bg-transparent text-[15px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="xl:sticky xl:top-10 h-fit">
            {/* TITLE */}
            <div className="flex items-end justify-between border-b border-zinc-200 pb-6">
              <div>
                <h2 className="text-[1.7rem] md:text-[2.1rem] font-black uppercase leading-none tracking-tight whitespace-nowrap">
                  YOUR CART
                </h2>

                <p className="text-sm text-zinc-500 mt-2">
                  {cartItems.length} items
                </p>
              </div>

              <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-500">
                Summary
              </p>
            </div>

            {/* PRODUCTS */}
            <div className="mt-7 space-y-7">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-zinc-200 pb-7"
                >
                  <div className="w-20 h-20 border border-zinc-200 bg-[#f8f8f8] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-black leading-tight uppercase">
                      {item.name}
                    </h3>

                    <p className="text-sm text-zinc-500 mt-1">
                      Quantity: {item.qty}
                    </p>

                    <p className="text-2xl font-black mt-4">₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="border-b border-zinc-200 py-7">
              <div className="flex items-center justify-between mb-3">
                <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-500">
                  Total
                </p>

                <p className="text-sm text-zinc-500">Inclusive of taxes</p>
              </div>

              <h2 className="text-[2.5rem] font-black tracking-tight leading-none">
                ₹{total}
              </h2>
            </div>

            {/* PAYMENT */}
            <div className="py-7 border-b border-zinc-200">
              <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-500 mb-5">
                Payment Method
              </p>

              <div className="space-y-3">
                {/* ONLINE */}
                <button
                  onClick={() => setPaymentMethod("ONLINE")}
                  className={`w-full border px-3 py-3 text-left transition-all duration-200 ${
                    paymentMethod === "ONLINE"
                      ? "border-black bg-black text-white"
                      : "border-zinc-300 bg-white hover:border-black"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="uppercase tracking-wide text-sm font-semibold">
                        Online Payment
                      </p>

                      <p
                        className={`text-xs mt-2 ${
                          paymentMethod === "ONLINE"
                            ? "text-zinc-300"
                            : "text-zinc-500"
                        }`}
                      >
                        UPI, Cards & Netbanking
                      </p>
                    </div>

                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentMethod === "ONLINE"
                          ? "border-white"
                          : "border-zinc-400"
                      }`}
                    >
                      {paymentMethod === "ONLINE" && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                </button>

                {/* COD */}
                <button
                  onClick={() => setPaymentMethod("COD")}
                  className={`w-full border px-5 py-3 text-left transition-all duration-200 ${
                    paymentMethod === "COD"
                      ? "border-black bg-black text-white"
                      : "border-zinc-300 bg-white hover:border-black"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="uppercase tracking-wide text-sm font-semibold">
                        Cash On Delivery
                      </p>

                      <p
                        className={`text-xs mt-2 ${
                          paymentMethod === "COD"
                            ? "text-zinc-300"
                            : "text-zinc-500"
                        }`}
                      >
                        Pay when your order arrives
                      </p>
                    </div>

                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentMethod === "COD"
                          ? "border-white"
                          : "border-zinc-400"
                      }`}
                    >
                      {paymentMethod === "COD" && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* FOOTER */}
            <div className="pt-7">
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
                <Lock size={15} />
                Encrypted & secure checkout
              </div>

              <button
                onClick={() => {
                  if (!isFormValid) {
                    toast.error(
                      "Please complete all shipping details correctly",
                    );
                    return;
                  }

                  handleCheckout();
                }}
                className="w-full bg-black text-white py-5 uppercase tracking-[0.3em] text-sm font-semibold hover:bg-lime-400 hover:text-black transition-all duration-300"
              >
                {loading
                  ? "Processing..."
                  : paymentMethod === "COD"
                    ? "Place Order →"
                    : "Complete Payment →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
