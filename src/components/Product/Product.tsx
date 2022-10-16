import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "types";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <Link
      href={`/producto/${product.slug}/${product._id}`}
      className=" overflow-hidden"
    >
      <div className="w-60 cursor-pointer flex items-center shadow-md hover:shadow-gray-500 flex-col m-10 group transition-all border-b-4 border-b-transparent hover:border-blue-200 hover:border-b-4 bg-white">
        <Image
          className="group-hover:scale-110 duration-300 transition-all "
          width="270"
          height="240"
          src={product.mainImage}
        />

        <div className="py-10 ">
          <h4 className="text-center capitalize font-semibold hover:text-blue-100">
            {product.name}
          </h4>
          {/* <div className="starratin">
          <div className="center">
            <i className="fa fa-star" aria-hidden="true"></i>{" "}
            <i className="fa fa-star" aria-hidden="true"></i>{" "}
            <i className="fa fa-star" aria-hidden="true"></i>{" "}
            <i className="fa fa-star" aria-hidden="true"></i>{" "}
            <i className="fa fa-star-o" aria-hidden="true"></i>{" "}
          </div>
        </div> */}
          <span className="text-sm text-gray-600 line-through">
            s/. {product.price}
          </span>{" "}
          –<span className="font-semibold">s/. {`${product.price - 9.9}`}</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
