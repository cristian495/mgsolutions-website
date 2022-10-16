import { useQtyState } from "hooks";
import React from "react";
import { CartOperationType } from "types";

type Props = {
  productId?: string;
  localQty?: Number;
  incrementLocalQty?: () => void;
  decrementLocalQty?: () => void;
};

const QuantityInput = ({
  productId,
  localQty,
  incrementLocalQty,
  decrementLocalQty,
}: Props) => {
  const { changeQuantityByProductId, quantityByProductId } = useQtyState();

  if (productId) {
    return (
      <div>
        <button
          onClick={() =>
            changeQuantityByProductId(productId, CartOperationType.decrement)
          }
          className="border text-red border-gray-500 border-r-0 p-1 px-3"
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <input
          type="text"
          value={quantityByProductId(productId)}
          className="text-black p-1 w-11 text-center focus:outline-0 border border-gray-500"
          readOnly
        />
        <button
          onClick={() =>
            changeQuantityByProductId(productId, CartOperationType.increment)
          }
          className="border text-green border-gray-500 border-l-0 p-1 px-3"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={decrementLocalQty}
        className="border text-red border-gray-500 border-r-0 p-1 px-3"
      >
        <i className="fa-solid fa-minus"></i>
      </button>
      <input
        type="text"
        value={localQty?.toString()}
        className="p-1 w-11 text-center focus:outline-0 border border-gray-500"
        readOnly
      />
      <button
        onClick={incrementLocalQty}
        className="border text-green border-gray-500 border-l-0 p-1 px-3"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default QuantityInput;
