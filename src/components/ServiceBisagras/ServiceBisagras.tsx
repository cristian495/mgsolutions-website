import React from "react";
import Image from "next/image";
import WhatsappBtn from "components/WhatsappBtn";

const ServiceBisagras = () => {
  const serviceDetail = [
    "Todo tipo de laptop: HP , DELL , ACER , LENOVO , ASUS , TOSHIBA, SONY , SAMSUNG.",
    "Realizamos el arreglo y desarmando técnicamente de su portátil sin estropear los repuestos internos",
    "Realizamos la reconstrucción de las parte trizadas en la base que se asienta el display",
    "Buscamos adaptaciones adecuadas para que estéticamente quede bien firme.",
    "Utilizamos herramientas milimétricas al igual que sus adaptaciones para que la pantalla se acople correctamente.",
    "Garantizamos nuestro trabajo, hacemos las pruebas necesarias para que su funcionamiento sea el correcto.",
    "Arreglar las bisagras de laptop conlleva un tiempo necesario por lo menos de 48 horas para su solución.",
  ];
  return (
    <div className="flex justify-center flex-wrap">
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
          Un común problema que sufren las laptops es la roptura de las bisagras
          ya sea por desgaste causado por el tiempo o por algun golpe brusco,
          Los soportes de las tapas y bases rotas se dan porque las personas que
          manipulan el equipo ejercen una fuerza en la pantalla al abrirla mas
          de lo que se permite , eso causa que las bisagras al ser de metal se
          salga de su ubicación en la carcasa y en ciertos casos se rompan ellas
          mismas.
          <br />
          <br /> Soldar la bisagra de su laptop tiene precio accesible , no como
          comprar y reemplazar toda la parte afectada , ya que el costo es
          sumamente alto o no se puede encontrar el repuesto para cambiarlo.
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

export default ServiceBisagras;
