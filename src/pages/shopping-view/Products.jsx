import React, { useEffect, useState } from "react";
import ProductFilter from "./Filter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { sortByOptions } from "@/config/AllConfig";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsForUser } from "@/store/user/shop-slice";
import { Skeleton } from "@/components/ui/skeleton";
import ShoppingProductTile from "@/components/shopping-view/ShoppingProductTile";

const Products = () => {
  const dispatch = useDispatch();
  const { productsList, isLoading } = useSelector(
    (state) => state.userProducts
  );
  const [filters,setFilters]=useState(null)
  const [sort,setSort]=useState(null) 

  const handleSort=(value)=>{
    console.log(value);
    
  }


  useEffect(() => {
    dispatch(fetchProductsForUser());
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4">
      <ProductFilter />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm ">{productsList?.length} Products</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ArrowUpDown className="h-4 w-4" />
                  <span>Sort By</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                  {sortByOptions.map((sortItem) => (
                    <DropdownMenuRadioItem key={sortItem.id}>
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* You can render your product grid here */}
        <div className="p-4 [calc(100vh-150px)] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="space-y-4 mt-6">
                <Skeleton className="w-full h-40 mb-4 rounded-md" />
                <Skeleton className="w-3/4 h-6 mb-2 rounded" />
                <Skeleton className="w-1/2 h-5 mb-2 rounded" />
                <Skeleton className="w-full h-10 rounded" />
              </div>
            ))
          ) : productsList?.length ? (
            productsList.map((product) => (
              <ShoppingProductTile
                key={product._id || product.id}
                product={product}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
