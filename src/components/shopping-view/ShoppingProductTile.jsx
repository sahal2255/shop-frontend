import React from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { IndianRupee } from 'lucide-react';

const ShoppingProductTile = ({ product }) => {
  return (
    <Card className="w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-md bg-white dark:bg-zinc-900">
      <div className="relative">
        <img
          src={product?.imageFile}
          alt={product?.productName}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        {parseInt(product.totalStock) === 0 && (
          <Badge className="absolute top-2 right-2 bg-red-600 text-white">Out of Stock</Badge>
        )}
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-foreground">{product.productName}</h3>
          <Badge variant="outline" className="text-xs">{product.category}</Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <p className="text-sm text-muted-foreground">
          Brand: <span className="font-medium text-foreground">{product.brand}</span>
        </p>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-600 flex items-center">
            <IndianRupee className="h-4 w-4 mr-1" />
            {product.salePrice}
          </span>
          {product.price !== product.salePrice && (
            <span className="line-through text-muted-foreground text-sm">
              ₹{product.price}
            </span>
          )}
        </div>

        <Button className="w-full mt-2" disabled={parseInt(product.totalStock) === 0}>
          {parseInt(product.totalStock) === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </div>
    </Card>
  );
};

export default ShoppingProductTile;
