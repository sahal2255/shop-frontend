import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartContent = ({ cartItem }) => {
  console.log('cart item in the cart content',cartItem)
  const { productId, quantity } = cartItem;

  if (!productId) return null;

  return (
    <div className="flex items-start gap-4 border rounded p-3">
      {/* Image */}
      <img
        src={productId.imageFile}
        alt={productId.productName}
        className="w-20 h-20 object-cover rounded"
      />

      {/* Info + Controls */}
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">{productId.productName}</h4>
          <span className="font-semibold text-green-600">
            ₹{(productId.salePrice*quantity).toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-3 mt-3">
          {/* Quantity Controls */}
          <Button size="icon" variant="outline">
            <Minus className="w-4 h-4" />
          </Button>
          <span className="font-medium">{quantity}</span>
          <Button size="icon" variant="outline">
            <Plus className="w-4 h-4" />
          </Button>

          {/* Delete Button */}
          <Button size="icon" variant="ghost" className="ml-auto text-destructive">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
