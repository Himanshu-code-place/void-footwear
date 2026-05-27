// "use client";

// import { MessageCircle } from "lucide-react";

// export default function WhatsAppButton() {
//   return (
//     <a
//       href="https://wa.me/918630428859"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="
//       fixed
//       bottom-6
//       right-6
//       z-[999]
//       w-14
//       h-14
//       rounded-full
//       bg-[#25D366]
//       flex
//       items-center
//       justify-center
//       shadow-2xl
//       hover:scale-110
//       hover:shadow-green-400/40
//       transition-all
//       duration-300
//       "
//     >
//       <MessageCircle
//         size={28}
//         className="text-white"
//         fill="white"
//       />
//     </a>
//   );
// }

"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918630428859"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-[999]
      flex
      flex-col
      items-center
      gap-1
      group
      "
    >
      {/* BUTTON */}
      <div
        className="
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-2xl
        hover:scale-110
        hover:shadow-green-400/50
        transition-all
        duration-300
        "
      >
        <FaWhatsapp
          className="text-white"
          size={30}
        />
      </div>

      {/* TEXT */}
      <p
        className="
        text-[12px]
        font-bold
        tracking-[0.14em]
        text-zinc-900
        group-hover:text-black
        transition
        "
      >
        Help?
      </p>
    </a>
  );
}