import QuantityInput from "components/QuantityInput";
import { useCartState } from "hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {
  const { toggleCart, totalQuantities, cartItems, totalPrice, removeItem } =
    useCartState();

  return (
    <div className="shadow-2xl flex flex-col p-5 fixed top-0 right-0 z-30 w-[65vw] md:w-[54vw] lg:w-[34vw] h-screen  bg-white">
      <button onClick={() => toggleCart()}>
        <h4 className="font-bold gap-3 flex items-center text-lg text-start text-black">
          <i className="fa-solid fa-chevron-left text-lg mr-2 "></i> Tu carrito
          <span className="text-red">({totalQuantities})</span>
        </h4>
      </button>

      {cartItems.length < 1 && (
        <div className="text-black text-center my-auto">
          <h3 className="text-lg mb-4">Tu carrito de compra esta vacío</h3>
          <button
            onClick={() => toggleCart()}
            className="font-semibold p-3 px-8 bg-blue-400 rounded-lg text-sm text-white hover:bg-blue-200 transition-all duration-150"
          >
            CONTINUAR COMPRANDO
          </button>
        </div>
      )}

      <ul className="py-10 overflow-y-auto max-h-[75vh] block">
        {cartItems.map((e) => (
          <li key={e.product._id} className="flex gap-3 max-h-24 relative my-5">
            <Image src={e.product.mainImage} width={80} height={70} alt={e.product.slug} />
            <div>
              <h5 className="font-semibold text-gray-700 mb-2 max-w-xs w-62">
                <Link href={`/producto/${e.product.slug}/${e.product._id}`}>
                  <a>
                    {e.product.name} - <span>s/. {e.product.price}</span>
                  </a>
                </Link>
              </h5>
              <QuantityInput productId={e.product._id} />
            </div>
            <button
              onClick={() => removeItem(e.product._id)}
              className="absolute right-0 top-5 p-1 px-3 rounded-lg transition-all duration-200 text-gray-500 hover:bg-gray-200"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
        ))}
      </ul>
      {cartItems.length >= 1 && (
        <div className="font-bold text-xl flex justify-between text-black">
          <span className="">Total:</span> <span>s/. {totalPrice}</span>
        </div>
      )}
      {cartItems.length >= 1 && (
        <div className="fixed border flex flex-col right-40 bottom-10 z-100">
          <Link href="/pagar">
            <a className="font-semibold p-3 px-8 bg-blue-400 rounded-lg text-sm text-white hover:bg-blue-200 transition-all duration-150">
              REALIZAR PAGO
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
