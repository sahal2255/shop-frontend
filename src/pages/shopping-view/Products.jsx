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
import {
  fetchProductDetails,
  fetchProductsForUser,
} from "@/store/user/shop-slice";
import { Skeleton } from "@/components/ui/skeleton";
import ShoppingProductTile from "@/components/shopping-view/ShoppingProductTile";
import { createSearchParams, useSearchParams } from "react-router-dom";
import createSearchParamsHelper from "@/helpers/SearchParamsHelper";
import SingleProductDetails from "@/components/shopping-view/SingleProudctDtials";
import { addToCart, fetchCartItems } from "@/store/user/cart-slice";
import { toast } from "sonner";
const Products = () => {
  const dispatch = useDispatch();
  const { productsList, isLoading, singleProduct } = useSelector(
    (state) => state.userProducts
  );
  const { user } = useSelector((state) => state.auth);
  const { cartItems }=useSelector((state)=>state.shopCart)
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [serchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const handleSort = (value) => {
    console.log(value);
    setSort(value);
  };

  // filter function
  const handleFilter = (getSectionId, getCurrentOption) => {
    //  console.log('category',getSectionId,getCurrentOption)
    let copyFilters = { ...filters };
    const indexOfCurrentSection =
      Object.keys(copyFilters).indexOf(getSectionId);
    if (indexOfCurrentSection === -1) {
      copyFilters = {
        ...copyFilters,
        [getSectionId]: [getCurrentOption],
      };
    } else {
      const indexOfCurrentOption =
        copyFilters[getSectionId].indexOf(getCurrentOption);
      if (indexOfCurrentOption === -1) {
        copyFilters[getSectionId].push(getCurrentOption);
      } else {
        copyFilters[getSectionId].splice(indexOfCurrentOption, 1);
      }
    }
    setFilters(copyFilters);
    sessionStorage.setItem("filters", JSON.stringify(copyFilters));
  };

  //get single product by id
  const handleGetSingleProduct = (id) => {
    console.log("product id", id);
    setOpen(true);
    dispatch(fetchProductDetails(id));
  };

  // add to cart function
  const handleAddToCart = (productId) => {
    // console.log("add to cart product id", productId);
    dispatch(addToCart({ userId: user?.id, productId, quantity: 1 })).then((data)=>{
      // console.log('data',data)
      if(data?.payload.success){
        toast.success('Product added to cart')
        dispatch(fetchCartItems(user.id))
      }
    });
  };
  useEffect(() => {
  if (user?.id) {
    dispatch(fetchCartItems(user.id));
  }
}, [dispatch, user?.id]);

  useEffect(() => {
    setSort("default");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);
  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      const createQueryString = createSearchParamsHelper(filters);
      setSearchParams(new URLSearchParams());
    }
  }, [filters]);
  useEffect(() => {
    if (filters !== null && sort !== null)
      dispatch(
        fetchProductsForUser({ filterParams: filters, sortParams: sort })
      );
  }, [dispatch, sort, filters]);
  console.log('user details',user);
  
  console.log('cart items',cartItems);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4">
      <ProductFilter filters={filters} handleFilter={handleFilter} />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm ">
              {productsList?.length} Products
            </span>
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
                <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                  {sortByOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      value={sortItem.id}
                      key={sortItem.id}
                    >
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
                handleGetSingleProduct={handleGetSingleProduct}
                handleAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground">
              No products found.
            </p>
          )}
        </div>
      </div>
      <SingleProductDetails
        open={open}
        setOpen={setOpen}
        product={singleProduct}
      />
    </div>
  );
};

export default Products;
