import Layout from "components/Layout";
import LayoutStore from "components/LayoutStore";
import ServicesBanner from "components/ServicesBanner";
import React from "react";
import { GetServerSideProps } from "next";
import ProductService from "services/ProductService";
import { ProductType } from "types";
import Product from "components/Product";
import Link from "next/link";

const Tienda = ({ products }: { products: Array<ProductType> }) => {
  return (
    <LayoutStore>
      <div className="flex justify-end my-3 px-10">
        <span className="text-gray-500 ">Se encontró {products.length} productos</span>
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map((e) => (
          <Product product={e} />
        ))}
      </div>

      <div className="flex  justify-around m-10">
        <Link href="">
          <a className="border-2 p-3 px-5 hover:bg-gray-200">
            <i className="fa-solid fa-chevron-left"></i>
          </a>
        </Link>
        <Link href="">
          <a className="border-2 p-3 px-5 hover:bg-gray-200">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </Link>
      </div>
    </LayoutStore>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { products } = await ProductService.fetchProducts({
    limit: 16,
    page: 1,
    categoriesArr: [],
    q: "",
  });

  console.log(context);
  return {
    props: { products },
  };
};

export default Tienda;
