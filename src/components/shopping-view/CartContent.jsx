import React, { useState } from "react";
import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { decrementProductQuantity, deleteCartItem, incrementProductQuantity } from "@/store/user/cart-slice";
import { toast } from "sonner";

const CartContent = ({ cartItem }) => {
  const [localQuantity, setLocalQuantity] = useState(cartItem.quantity);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleCartItemRemove = (productId) => {
    dispatch(deleteCartItem({ productId, user })).then((data) => {
      if (data?.payload.success) {
        toast.success("Product removed from the cart");
      }
    });
  };

  const incrementQuantity = () => {
    const updatedQuantity = localQuantity + 1;
    setLocalQuantity(updatedQuantity);
    dispatch(incrementProductQuantity({
      userId: user?.id,
      productId: cartItem.productId,
      quantity: updatedQuantity
    }));
  };

  const decrementQuantity = () => {
    if (localQuantity <= 1) return;
    const updatedQuantity = localQuantity - 1;
    setLocalQuantity(updatedQuantity);
    dispatch(decrementProductQuantity({
      userId: user?.id,
      productId: cartItem.productId,
      quantity: updatedQuantity
    }));
  };

  return (
    <div className="flex items-start gap-4 border rounded p-3">
      <img
        src={cartItem.imageFile}
        alt={cartItem.productName}
        className="w-20 h-20 object-cover rounded"
      />

      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">{cartItem.productName}</h4>
          <span className="font-semibold text-green-600">
            ₹{(cartItem.salePrice * localQuantity).toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <Button
            size="icon"
            variant="outline"
            onClick={decrementQuantity}
            disabled={localQuantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </Button>

          <span className="font-medium">{localQuantity}</span>

          <Button
            size="icon"
            variant="outline"
            onClick={incrementQuantity}
          >
            <Plus className="w-4 h-4" />
          </Button>

          <Trash2
            className="w-4 h-4 ml-auto text-destructive cursor-pointer"
            onClick={() => handleCartItemRemove(cartItem?.productId)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartContent;
