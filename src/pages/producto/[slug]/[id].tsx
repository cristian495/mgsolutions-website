import Layout from "components/Layout";
import LayoutStore from "components/LayoutStore";
import { GetServerSideProps } from "next";
import ProductService from "services/ProductService";
import { ProductImageType, ProductType } from "types";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { Router, useRouter } from "next/router";
import RelatedProducts from "components/RelatedProducts";
import QuantityInput from "components/QuantityInput";
import { useCartState } from "hooks";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductDetail = ({
  product,
  related,
}: {
  product: ProductType;
  related: Array<ProductType>;
}) => {
  const router = useRouter();
  const { asPath } = router;
  const shareLinkProduct = `${process.env.NEXT_PUBLIC_FRONTEND_URL}${asPath}`;
  const { addItem, toggleCart } = useCartState();
  const [localQty, setLocalQty] = useState(1);

  const decrementLocalQty = () => {
    const newVal = localQty > 1 ? localQty - 1 : 1;
    setLocalQty(newVal);
  };
  const incrementLocalQty = () => {
    const newVal = localQty + 1;
    setLocalQty(newVal);
  };

  const renderSmallDescription = (text: String) => {
    const textSplited = text?.split("\n");
    return (
      text && (
        <ul className="text-gray-600">
          {textSplited.map((e) => (
            <li key={e} className="small-description__li">
              {e}
            </li>
          ))}
        </ul>
      )
    );
  };
  const getImages = (images: Array<ProductImageType>) => {
    let imgs = images.map((e) => ({
      original: e.url,
      thumbnail: e.url,
    }));
    imgs = [
      { original: product.mainImage, thumbnail: product.mainImage },
      ...imgs,
    ];
    return imgs;
  };

  if (!product) {
    return (
      <LayoutStore>
        <h3>Producto no existe</h3>
      </LayoutStore>
    );
  }

  return (
    <Layout>
      <div className="p-10 ">
        <div className="flex justify-center flex-wrap">
          <div className="w-[500px] flex-initial">
            <ImageGallery items={getImages(product.images)} />
          </div>
          <div className="flex-auto px-5 md:px-20 mt-5 lg:mt-0">
            <h4 className="font-bold text-2xl uppercase">{product.name}</h4>
            <h6 className="text-blue-200 font-bold mb-4">
              <span className="text-xl line-through font-semibold">
                s/. {product.price}
              </span>
              <span className="ml-4 text-2xl font-bold">
                s/.{product.price - product.price * product.discount * 0.01}
              </span>
            </h6>
            {renderSmallDescription(product.smallDescription)}
            <div className="my-4">
              <Image
                width={"350"}
                height={"80"}
                src="/images/envio-retiro-garantia.jpg"
                alt="envios-todo-peru"
              />
            </div>
            <div className="">
              <span className="font-semibold text-gray-700">Cantidad: </span>
              <QuantityInput
                localQty={localQty}
                decrementLocalQty={decrementLocalQty}
                incrementLocalQty={incrementLocalQty}
              />
            </div>
            <div className="font-semibold text-xs text-gray-600 mt-1">
              {product.stock} unidades disponibles
            </div>
            <button
              onClick={() => {
                addItem({ product, quantity: localQty });
                toggleCart();
                toast.success(`${localQty} ${product.name} agregado al carrito.`);
              }}
              className="my-5 font-semibold p-2 px-4 bg-blue-400 rounded-lg text-sm text-white hover:bg-blue-200 transition-all duration-150"
            >
              AÑADIR AL CARRITO
            </button>
            <ul className="flex">
              <li className="mr-3">
                <FacebookShareButton url={shareLinkProduct}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </li>
              <li className="mr-3">
                <TwitterShareButton url={shareLinkProduct}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </li>
              <li className="mr-3">
                <WhatsappShareButton url={shareLinkProduct}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </li>
            </ul>
          </div>
        </div>

        <div className="product__detail mt-20">
          <ul className="flex border-b border-gray-200 text-center">
            <li className="">
              <a className=" relative block border-t border-l border-r rounded-t-lg border-gray-200 bg-white py-2 px-4 text-sm font-medium">
                <span className="absolute inset-x-0 -bottom-px h-px w-full bg-white"></span>
                Descripción
              </a>
            </li>
          </ul>
          <div className="py-10 px-5">
            <pre
              className="text-sm md:text-sm font-sans text-gray-600"
              dangerouslySetInnerHTML={{
                __html: product.longDescription,
              }}
            ></pre>
          </div>
        </div>

        <div className="related__products my-10">
          <RelatedProducts products={related} />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { product } = await ProductService.fetchSpecificProduct(
    context.query.id
  );
  const { products } = await ProductService.fetchRelatedProducts(
    product.categories || []
  );
  return { props: { product, related: products } };
};

export default ProductDetail;
