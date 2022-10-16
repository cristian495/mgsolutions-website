import Link from "next/link";
import React from "react";

const WhatsappBtn = () => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href="https://web.whatsapp.com/send?phone=51998800769"
    >
      <a className="py-2 px-10 m-auto flex items-center text-white justify-center transition-all rounded-3xl font-bold  bg-green visited:text-white">
        <i className="fa-brands fa-whatsapp mr-2 text-2xl"></i>
        Contactar
      </a>
    </Link>
  );
};

export default WhatsappBtn;
