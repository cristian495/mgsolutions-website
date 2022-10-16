import Link from "next/link";
import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <h5 className="text-white py-5 text-sm font-bold  after:bg-blue-100 after:block after:h-1  after:w-10 after:mt-2">
      {text}
    </h5>
  );
};

const Section = ({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) => {
  return <div className="w-1/2 border-x-white mb-6">{children}</div>;
};

const Footer = () => {
  const socials = [
    {
      icon: <i className="fa fa-facebook" aria-hidden="true"></i>,
      link: "https://www.facebook.com/mgcomputerM",
    },
    {
      icon: <i className="fa fa-instagram" aria-hidden="true"></i>,
      link: "https://www.instagram.com/mg_computer_cix/",
    },
    {
      icon: <i className="fa fa-whatsapp" aria-hidden="true"></i>,
      link: "https://api.whatsapp.com/send?phone=51998800769",
    },
  ];

  const directLinks = [
    { title: "Venta de componentes", link: "/tienda" },
    { title: "Contacto", link: "/contacto" },
  ];
  const services = [
    { title: "Reparacion de computadoras", link: "/servicios" },
    { title: "Venta de componentes", link: "/tienda" },
    { title: "Reparacino de impresoras", link: "/servicios" },
  ];
  const contactUs = [
    {
      title: "Galerias Feria Balta STAND #606",
      icon: <i className="fa-solid fa-location-dot mr-2 "></i>,
    },
    {
      title: "998 800 769",
      icon: <i className="fa-solid fa-phone mr-2 "></i>,
    },
    {
      title: "mgsolutiongroup@gmail.com",
      icon: <i className="fa-solid fa-envelope mr-2 "></i>,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 bg-background p-12 md:grid-cols-2 text-gray-400">
        <Section>
          <Title text="MG SOLUTIONS GROUP" />
          <p className="text-sm ">
            MG Solutions Group nace con la finalidad de convertirse en su aliado
            estrategico especializado en brindar soluciones informáticas a
            hogares, empresas e instituciones educativas de forma presencial y
            online.
          </p>
          <ul className="flex justify-start mt-3">
            {socials.map((e) => (
              <li key={e.link} className="mr-4 text-xl transition-colors hover:text-blue-100">
                <a href={e.link} rel="noopener noreferrer" target={"_blank"}>
                  {e.icon}
                </a>
              </li>
            ))}
          </ul>
        </Section>
        <Section>
          <Title text="ENLACES DIRECTOS" />
          <ul className="text-sm">
            {directLinks.map((e) => (
              <li key={e.title}>
                <Link href={e.link}>
                  <a className="transition-colors hover:text-blue-100 ">
                    <i className="fa-solid fa-chevron-right text-xs mr-2 "></i>
                    {e.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <Title text="SERVICIOS" />
          <ul className="text-sm">
            {services.map((e) => (
              <li key={e.title}>
                <Link href={e.link}>
                  <a className="transition-colors hover:text-blue-100 ">
                    <i className="fa-solid fa-chevron-right text-xs mr-2 "></i>
                    {e.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <Title text="CONTACTENOS" />
          <ul className="text-sm">
            {contactUs.map((e) => (
              <li key={e.title}>
                <a>
                  {e.icon}
                  {e.title}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>
      <div className="p-3 text-center text-sm bg-blue-100 text-white font-semibold">
        MGComputer © Copyrights {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
