import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ size }: { size: "sm" | "lg" | "md" }) => {
  if (size === "md") {
    return (
      <div>
        <Link href="/">
          <a>
            <Image
              width={120}
              height={70}
              src={"/images/logos/mg_logo.jpg"}
              alt="logo"
            />
          </a>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link href="/">
        <a>
          <Image
            width={size === "sm" ? 70 : 140}
            height={size === "sm" ? 40 : 140}
            src={"/images/logos/mg_logo.jpg"}
            alt="logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
