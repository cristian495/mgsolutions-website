import Cart from "components/Cart";
import Logo from "components/Logo";
import { useCartState } from "hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const NavContact = () => {
  const { totalQuantities, toggleCart, showCart } = useCartState();

  return (
    <div className=" bg-blue-100 color py-4 px-10 text-white text-sm	flex flex-wrap justify-center md:justify-between">
      <ul className="flex justify-center flex-row md:justify-start flex-wrap">
        <li>
          <i className="fa-solid fa-location-arrow"></i>
          <span className="ml-2">Galerias Feria Balta stand #247 Chiclayo</span>
        </li>

        <li className="ml-9">
          <i className="fa-solid fa-envelope"></i>
          <span className="ml-2">
            <a>mgsolutiongroup@gmail.com</a>
          </span>
        </li>
      </ul>
      <div
        onClick={() => toggleCart()}
        className="ml-9 w-96 md:w-auto flex justify-center mt-4 md:mt-0 items-center gap-2 cursor-pointer hover:text-gray-200 transition-all duration-200"
      >
        <i className="relative fa-solid fa-cart-shopping text-xl ">
          {!!totalQuantities && (
            <span className="absolute -right-2 -top-2 bg-red w-4 h-4 text-[8px] text-center  rounded-full leading-4">
              {totalQuantities}
            </span>
          )}
        </i>
        <span className="text-sm">s/. 0.00</span>
      </div>
      {showCart && <Cart />}
    </div>
  );
};

const NavMenu = () => {
  const router = useRouter();
  const menuItems = [
    { title: "Inicio", path: "/" },
    { title: "Servicios", path: "/servicios" },
    { title: "Tienda", path: "/tienda" },
    { title: "Contacto", path: "/contacto" },
    {
      title: <i className="fa fa-user" aria-hidden="true"></i>,
      path: "/login",
    },
  ];
  return (
    <div className="flex-wrap p-4 flex items-center justify-center md:justify-between">
      <Logo size="md" />
      <nav className="font-semibold mt-4">
        <ul className="flex justify-around uppercase text-xs font-bold md:text-sm">
          {menuItems.map((e) => (
            <li key={e.path}>
              <Link href={e.path}>
                <a
                  className={`${
                    router.pathname == e.path ? "text-blue-200" : ""
                  } p-4`}
                >
                  {e.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <NavContact />
      <NavMenu />
    </>
  );
};

export default Header;
