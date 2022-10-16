import Layout from "components/Layout";
import ServiceBisagras from "components/ServiceBisagras";
import ServiceLaptops from "components/ServiceLaptops";
import ServicesBanner from "components/ServicesBanner";

export default function servicedetail() {
  return (
    <Layout>
      <ServicesBanner
        title="Reparación de computadoras"
        breadcrumps={[
          { name: "Inicio", link: "/" },
          { name: "Servicios", link: "/servicios" },
          { name: "Reparacion de pcs", link: "" },
        ]}
      />
      <div className="py-20 px-10 md:px-36">
        <ServiceBisagras />
        <div className="h-20"></div>
        <ServiceLaptops />
      </div>
    </Layout>
  );
}
