import Footer from "components/Footer";
import Header from "components/Header";
import { NavContact } from "components/Header/Header";
import Logo from "components/Logo";
import ServicesBanner from "components/ServicesBanner";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const LayoutStore = ({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const categories = [
    {
      icon: "fa-solid fa-microchip",
      slug: "procesadores",
      name: "Procesadores",
    },
    {
      icon: "fa-solid fa-ticket-alt",
      slug: "placas-madre",
      name: "Placas madre",
    },
    { icon: "fa-solid fa-memory", slug: "memoria-ram", name: "Memoria RAM" },
    { icon: "fa-solid fa-hdd", slug: "almacenamiento", name: "Almacenamiento" },
    {
      icon: "fa-solid fa-plug",
      slug: "fuente-de-poder",
      name: "Fuente de poder",
    },
    {
      icon: "fa-solid fa-gamepad",
      slug: "tarjeta-de-video",
      name: "Tarjeta e video",
    },
    { icon: "fa-solid fa-keyboard", slug: "perifericos", name: "Perifericos" },
    { icon: "fa-solid fa-desktop", slug: "monitores", name: "Monitores" },
    { icon: "fa-solid fa-computer", slug: "pc-completa", name: "PC completa" },
  ];
  return (
    <div className="overflow-hidden max-w-screen-2xl m-auto ">
      <Script src="https://kit.fontawesome.com/312e52e180.js" />

      <div>
        <Header></Header>
        {/* <NavContact /> */}
        <div className="flex">
          {/* <button
            className={`h-14 w-14 rounded-full hover:text-black text-gray-800  transition`}
          >
            <i className="p-2 fa-solid fa-bars text-lg"></i>
          </button> */}
          <div className="relative flex flex-initial justify-between text-sm ">
            <div
              id="drawer-navigation"
              className={`  z-20 pt-7 top-0 ${
                toggleMenu ? "left-0" : "-ml-56"
              }  lg: h-full w-72 bg-white shadow-2xl transition ease-out delay-150 duration-200`}
              aria-labelledby="drawer-navigation-label"
            >
              <button
                type="button"
                onClick={() => setToggleMenu(!toggleMenu)}
                data-drawer-dismiss="drawer-navigation"
                aria-controls="drawer-navigation"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2 px-4 absolute top-2.5 right-2 dark:hover:text-black"
              >
                {toggleMenu ? (
                  <i className="fa-solid fa-chevron-left"></i>
                ) : (
                  <i className="fa-solid fa-bars text-lg"></i>
                )}
              </button>
              <div className="py-4 overflow-y-auto">
                <ul className="space-y-2">
                  {categories.map((e) => (
                    <li key={e.slug}>
                      <Link href={`/tienda/${e.slug}`}>
                        <a className="flex items-center px-5 py-2 hover:bg-gray-200 text-base font-normal text-gray-500  group hover:text-black">
                          <i
                            className={`${e.icon} text-sm text-gray-500 transition duration-75  group-hover:text-black`}
                          ></i>
                          <span className="ml-3 text-sm">{e.name}</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* <div className="z-10 lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200"></div> */}
          </div>
          <main className="py-0 relative flex-auto ">{children}</main>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LayoutStore;
