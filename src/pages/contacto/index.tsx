import Layout from "components/Layout";

const Description = ({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) => {
  return <p className="text-gray-600 text-lg h-40">{children}</p>;
};
const Contacto = () => {
  const contactItems = [
    {
      icon: "fa-solid fa-location-arrow",
      content: (
        <Description>
          <span>
            Galerias Feria Balta STAND #606 <br /> Chiclayo, Lambayeque
          </span>
        </Description>
      ),
    },
    {
      icon: "fa-regular fa-clock",
      content: (
        <Description>
          <span>Lun - Vier 8:30 - 7:00pm</span>
          <br />
          <span>Lun - Vier 8:30 - 7:00pm</span>
        </Description>
      ),
    },
    {
      icon: "fa-solid fa-phone mr-2 ",
      content: (
        <Description>
          <span>998-800-769</span>
        </Description>
      ),
    },
    {
      icon: "fa-solid fa-envelope",
      content: (
        <Description>
          <span>mgsolutiongroup@gmail.com</span>
        </Description>
      ),
    },
  ];
  return (
    <Layout>
      <div className="p-20">
        <div className="uppercase text-center font-bold text-2xl after:h-1 after:bg-blue-200 after:w-12 after:block after:m-auto after:my-4">
          Contáctenos
        </div>
        <ul className="grid grid-cols-1 my-10 md:grid-cols-3 lg:grid-cols-4">
          {contactItems.map((e) => (
            <li className=" m-4 flex flex-col justify-center text-center w-50 h-40 md:px-3 ">
              <i className={`${e.icon} text-3xl text-blue-200 mb-4`}></i>
              {e.content}
            </li>
          ))}
        </ul>
        <iframe
          className="m-auto w-11/12 md:w-3/4"
          width="600"
          height="450"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJlThAqtfuTJARwFTkCEtAOqs&key=AIzaSyC9jrpa8DBArTjDyj2DhszahmFFLfiu2ng"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Contacto;
