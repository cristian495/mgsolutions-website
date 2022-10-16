import SimpleSlider from "components/Slider";
// import VendorsSlider from "../components/VendorsSlider/VendorsSlider";
// import styles from '../styles/Home.module.css'
import Layout from "components/Layout";
import { GetStaticProps } from "next";
import Image from "next/image";
import SlideService from "services/SlideService";
// import ProductShop from "components/ProductShop";
import Product from "components/Product";
import ProductService from "services/ProductService";
import { ProductType } from "types";
import { SlideType } from "types/Slide";

const SectionTitle = ({ text }: { text: string }) => {
  return <h4 className="text-xl md:text-3xl font-bold">{text}</h4>;
};
const SectionSubTitle = ({ text }: { text: string }) => {
  return (
    <h6 className="text-sm md:text-lg text-center mt-2 uppercase font-semibold text-gray-500">
      {text}
    </h6>
  );
};
const SectionContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="flex justify-center flex-col items-center p-20">
      {children}
    </div>
  );
};

const OurServices = () => {
  const services = [
    {
      img: "/images/it_service/tv.png",
      title: "Reparacion de computadoras",
      description:
        "Brindamos servicio de soporte técnico preventivo (para evitar que se dañe la PC) o correctivo (cuando ya existe un daño). sin importar cuál sea el problema, nosotros le resolveremos.",
    },
    {
      img: "/images/it_service/shop.png",
      title: "Venta de components de PC",
      description:
        " Tenemos las Mejores ofertas en computadoras, periféricos, accesorios, software y mucho más",
    },
    {
      img: "/images/it_service/computer.png",
      title: "Servicio tecnico en redes",
      description:
        " Ofrecemos servicio de instalación de puntos de red, mantenimiento, venta, soluciones y planificación de sistemas cableados ò inalámbricos.",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle text="NUESTROS SERVICIOS" />
      <SectionSubTitle text="El servicio de reparacion mas rapido y al mejor precio" />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((e) => (
          <div key={e.title} className="flex items-center flex-col my-10 ">
            <Image src={e.img} width="100" height="100"></Image>
            <h6 className="text-md text-center md:text-lg font-semibold  mt-5 mb-2">
              {e.title}
            </h6>
            <p className="text-sm md text-center px-10">{e.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

const OurProducts = ({ products }: { products: Array<ProductType> }) => {
  return (
    <SectionContainer>
      <SectionTitle text="NUESTROS PRODDUCTOS" />
      <SectionSubTitle text="Variedad de Computadoras, Accesorios, Productos Gamer y más" />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => {
          return <Product product={p} />;
        })}
      </div>
    </SectionContainer>
  );
};

const Home = ({
  slides,
  products,
}: {
  slides: SlideType;
  products: Array<ProductType>;
}) => {
  return (
    <Layout>
      <SimpleSlider slides={slides} />
      <OurServices />
      <OurProducts products={products} />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slides } = await SlideService.fetchSlides();
  const { products } = await ProductService.fetchProducts({ limit: 4 });

  return {
    props: { slides, products }, // will be passed to the page component as props
  };
};
