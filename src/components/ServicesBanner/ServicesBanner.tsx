import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  breadcrumps: Array<{ name: string; link: string }>;
}
const ServicesBanner = ({ title, breadcrumps }: Props) => {
  return (
    <div className="bg-background text-white p-20">
      <h3 className="font-bold text-3xl mb-3">{title}</h3>
      <ul className="flex">
        {breadcrumps.map((e, i) =>
          i < breadcrumps.length - 1 ? (
            <li className="text-gray-500" key={i}>
              <Link href={e.link}>
                <a>{e.name}</a>
              </Link>
              <i className="fa-solid fa-chevron-right text-[10px] mx-2 "></i>
            </li>
          ) : (
            <li className={`${"text-white"}`} key={i}>
              <a>{e.name}</a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ServicesBanner;
