import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const ProductTile = ({ product,setFormData,setCurrentEditedId,setOpenAddProduct ,deleteProduct}) => {

    const onEdit=()=>{
        setOpenAddProduct(true);
        setCurrentEditedId(product?._id);
        setFormData(product);
    }
    const onDelete=async(id)=>{
      console.log('delete clicking',id)
      deleteProduct(id)
    }
  return (
    <Card className="w-full max-w-sm mx-auto rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={product?.imageFile}
          alt={product?.title}
          className="w-full h-64 object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{product?.productName}</h2>
        <p className="text-sm text-gray-500 mb-2">{product?.category} • {product?.brand}</p>
        
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-green-600">${product?.salePrice}</span>
          {product?.price !== product?.salePrice && (
            <span className="text-sm text-gray-400 line-through">${product?.price}</span>
          )}
        </div>

        <p className="text-sm text-gray-400 mt-2">In Stock: {product?.totalStock}</p>
        <div className="mt-4 flex justify-between">
          <Button
            onClick={onEdit}
            className="px-4 py-1 text-sm font-medium bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Edit
          </Button>
          <Button
            onClick={()=>onDelete(product._id)}
            className="px-4 py-1 text-sm font-medium bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductTile;
