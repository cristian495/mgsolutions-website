import WhatsappBtn from "components/WhatsappBtn";
import React from "react";

const ServiceLaptops = () => {
  const serviceDetail = [
    "La extracción de polvo y residuos del case.",
    "La limpieza de las memorias RAM.",
    "La limpieza de la fuente de poder y cambio de pasta térmica de los disipadores.",
    "El lubricado de los ventiladores (Coolers).",
    "El lavado de la placa madre en alcohol isopropílico de ser necesario (Mainboard).",
    "La limpieza exterior del case, monitor, teclado y mouse.",
    "La aplicación de silicona en toda la superficie del equipo de cómputo.",
  ];

  return (
    <div className="flex justify-center flex-wrap lg:flex-row-reverse">
      <div className="flex-initial mb-5 w-72 md:w-96">
        <img
          src="/images/it_service/reconstruccion-bisagras.jpeg"
          alt="#"
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex-auto w-96  md:px-10">
        <h3 className="font-bold text-xl mb-3">
          Reconstrucción de bisagras de Laptops
        </h3>
        <p className="text-gray-600">
          Existen dos grandes enemigos de las computadoras, estos son; el calor
          y la humedad. El exceso de calor acelera el deterioro de los delicados
          circuitos de tu computadora. Las causas más comunes del
          recalentamiento son el polvo y la humedad: los conductos de
          ventilación y los ventiladores tupidos pueden bloquear la circulación
          del aire en el interior de la cubierta, y hasta la capa de polvo más
          delgada puede elevar la temperatura de los componentes de tu
          computadora .
          <br />
          <br /> Por eso es necesario mantener tu sistema limpio por dentro y
          por fuera, para lo cual es recomendable realizar servicios de
          mantenimiento periódico.
        </p>
        <br />
        <ul className="flex flex-col text-gray-600">
          {serviceDetail.map((e, i) => (
            <li className="flex items-baseline" key={i}>
              <i className="text-blue-100 fa-solid fa-chevron-right text-xs mr-2 "></i>
              <span>{e}</span>
            </li>
          ))}

          <br />
          <WhatsappBtn />
        </ul>
      </div>
    </div>
  );
};

export default ServiceLaptops;
