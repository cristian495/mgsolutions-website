import Layout from "components/Layout";
import Link from "next/link";
import Image from "next/image";
import ServicesBanner from "components/ServicesBanner";
export default function services() {
  return (
    <Layout>
      <div>
        <ServicesBanner
          title="Nuestros servicios"
          breadcrumps={[
            { name: "Inicio", link: "/" },
            { name: "Nuestros servicios", link: "" },
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-20 gap-14">
          <article>
            <Image
              height="200"
              width="350"
              src="/images/it_service/post-02.jpg"
              alt="#"
            ></Image>
            <h5 className="font-bold text-xl mt-4 mb-2">
              Reparación de computadoras
            </h5>
            <p className="text-lg mb-4 text-gray-600">
              Brindamos servicio de soporte técnico preventivo (para evitar que
              se dañe la PC) o correctivo (cuando ya existe un daño).
            </p>
            <Link href="/servicios/reparacion-computadoras">
              <a className="p-2 px-3 r- bg-blue-100 text-white rounded-sm font-bold">
                Ver servicio
              </a>
            </Link>
          </article>

          <article>
            <Image
              height="200"
              width="350"
              src="/images/it_service/network-solutions.jpg"
              alt="#"
            ></Image>
            <h5 className="font-bold text-xl mt-4 mb-2">Soluciones de Red</h5>
            <p className="text-lg mb-4 text-gray-600">
              Ofrecemos servicio de instalación de puntos de red, mantenimiento,
              venta, soluciones y planificación de sistemas cableados ò
              inalámbricos.
            </p>
            <Link href="/servicios/reparacion-computadoras">
              <a className="p-2 px-3 r- bg-blue-100 text-white rounded-sm font-bold">
                Ver servicio
              </a>
            </Link>
          </article>
        </div>
      </div>
      {/* <div>
        <div id="inner_banner" className="section inner_banner_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="title-holder">
                    <div className="title-holder-cell text-left">
                      <h1 className="page-title">Nuestros servicios</h1>
                      <ol className="breadcrumb">
                        <li>
                          <Link href="/">
                            <a>Inicio</a>
                          </Link>
                        </li>
                        <li className="active">Nuestros servicios</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding_layout_1 service_list">
          <div className="container">
            <div className="row">
              <div className="col-md-4 service_blog margin_bottom_50">
                <div className="full">
                  <div className="service_img">
                    {" "}
                    <Image
                      height="200"
                      width="350"
                      // layout="fill"
                      // objectFit="contain"
                      className="img-responsive"
                      src="/images/it_service/post-02.jpg"
                      alt="#"
                    />{" "}
                  </div>
                  <div className="service_cont">
                    <h3 className="service_head">Reparación de computadoras</h3>
                    <p>
                      Brindamos servicio de soporte técnico preventivo (para
                      evitar que se dañe la PC) o correctivo (cuando ya existe
                      un daño).
                    </p>
                    <div className="bt_cont">
                      <Link href="/servicios/reparacion-computadoras">
                        <a className="btn sqaure_bt">Ver servicio</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 service_blog margin_bottom_50">
                <div className="full">
                  <div className="service_img">
                    {" "}
                    <Image
                      height="200"
                      width="350"
                      className="img-responsive"
                      src="/images/it_service/network-solutions.jpg"
                      alt="#"
                    />{" "}
                  </div>
                  <div className="service_cont">
                    <h3 className="service_head">Soluciones de Red</h3>
                    <p>
                      Ofrecemos servicio de instalación de puntos de red,
                      mantenimiento, venta, soluciones y planificación de
                      sistemas cableados ò inalámbricos.
                    </p>
                    <div className="bt_cont">
                      <Link href="/servicios/reparacion-computadoras">
                        <a className="btn sqaure_bt">Ver servicio</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}
