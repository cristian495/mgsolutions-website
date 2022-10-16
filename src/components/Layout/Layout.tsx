import Footer from "components/Footer";
import Header from "components/Header";
import Logo from "components/Logo";
import Script from "next/script";

const Layout = ({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) => {
  const categories = [
    { icon: "fa-solid fa-microchip", name: "Procesadores" },
    { icon: "fa-solid fa-ticket-alt", name: "Placas madre" },
    { icon: "fa-solid fa-memory", name: "Memoria RAM" },
    { icon: "fa-solid fa-memory", name: "Memoria RAM" },
    { icon: "fa-solid fa-hdd", name: "Almacenamiento" },
    { icon: "fa-solid fa-plug", name: "Fuente de poder" },
    { icon: "fa-solid fa-gamepad", name: "Tarjeta e video" },
    { icon: "fa-solid fa-keyboard", name: "Perifericos" },
    { icon: "fa-solid fa-desktop", name: "Monitores" },
    { icon: "fa-solid fa-computer", name: "PC completa" },
  ];
  return (
    <div className="max-w-screen-2xl m-auto relative">
      <Script src="https://kit.fontawesome.com/312e52e180.js" />

      <div>
        <Header></Header>
        <main className="py-5">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
