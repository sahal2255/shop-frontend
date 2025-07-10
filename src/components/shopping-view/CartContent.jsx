import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "@/store/user/cart-slice";
import { toast } from "sonner";

const CartContent = ({ cartItem }) => {
  // console.log('cart item in the cart content',cartItem)
  const dispatch=useDispatch()
  // console.log('product id',productId)
  const {user}=useSelector(state=>state.auth)

  const handleCartItmRemove=(productId)=>{
    console.log('selected Productid for delete',productId)
    dispatch(deleteCartItem({productId,user})).then(data=>{

      console.log('data.payload',data.payload)
      if(data?.payload.success){
        toast.success("Product removed from the cart")
      }
    })
  }
  // console.log('user in the cart',user)

  return (
    <div className="flex items-start gap-4 border rounded p-3">
      {/* Image */}
      <img
        src={cartItem.imageFile}
        alt={cartItem.productName}
        className="w-20 h-20 object-cover rounded"
      />

      {/* Info + Controls */}
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">{cartItem.productName}</h4>
          <span className="font-semibold text-green-600">
            ₹{(cartItem.salePrice*cartItem.quantity).toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-3 mt-3">
          {/* Quantity Controls */}
          <Button size="icon" variant="outline">
            <Minus className="w-4 h-4" />
          </Button>
          <span className="font-medium">{cartItem.quantity}</span>
          <Button size="icon" variant="outline">
            <Plus className="w-4 h-4" />
          </Button>

          {/* Delete Button */}
          {/* <Button size="icon" variant="ghost" className="ml-auto text-destructive" onClick={()=>handleCartItmRemove(cartItem?.productId)}> */}
            <Trash2 className="w-4 h-4 ml-auto" onClick={()=>handleCartItmRemove(cartItem?.productId)}/>
          {/* </Button> */}
        </div>
      </div>
    </div>
  );
};

export default CartContent;
