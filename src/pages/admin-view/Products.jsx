import ImageUpload from "@/components/admin-view/Image-uplaod";
import CommonForm from "@/components/common/Form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElement } from "@/config/AllConfig";
import { axiosInstance } from "@/helpers/axiosInstance";
import { addNewProduct, deleteExistProduct, fetchAllProducts } from "@/store/admin/product-slice";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductTile from "@/components/admin-view/ProductTile";
const initialFormdata = {
  imageFile: "",
  productName: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};
const AdminProducts = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [formData, setFormData] = useState(initialFormdata);
  const [imageFile, setImageFile] = useState(null);
  const [currentEditedId,setCurrentEditedId]=useState(null)
  // const [currentDeleteId,setCurrentDeleteId]=useState(null)
  const { productsList, isLoading, isAddingProduct,isDeleteProduct } = useSelector(
    (state) => state.adminProducts
  );
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();

      if (imageFile) {
        form.append("imageFile", imageFile);
      }
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });
      dispatch(addNewProduct(form)).then((data) => {
        if (data.payload?.success) {
          console.log("datapayload", data.payload);
          setOpenAddProduct(false);
          toast.success(data.payload?.message);
          dispatch(fetchAllProducts())
        } else {
          toast.error(data.payload);
        }
      });
    } catch (error) {
      console.log('error add product function',error)
    }
  };
  const deleteProduct=async(id)=>{
    console.log('delete id in main prodcut',id)
    dispatch(deleteExistProduct(id)).then((data)=>{
      if(data.payload?.success){
        console.log('delete product response',data.payload)
        toast.success(data.payload?.message)
        dispatch(fetchAllProducts())
      }else{
        toast.error(data.payload)
      }
    }
    )
    
  }
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  
  console.log("product list", productsList);
  
  return (
    <Fragment>
      <div className="space-y-4 ">
        {/* Header section with Add Button */}
        <div className="w-full flex justify-end">
          <Button onClick={() => setOpenAddProduct(true)}>
            Add New Product
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {isLoading || isDeleteProduct||isAddingProduct ? (
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
              <ProductTile
                key={product._id}
                product={product}
                setCurrentEditedId={setCurrentEditedId}
                setOpenAddProduct={setOpenAddProduct}
                setFormData={setFormData}
                deleteProduct={deleteProduct}
                
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No products found.
            </div>
          )}
        </div>
      </div>

      <Sheet
        open={openAddProduct}
        onOpenChange={() => setOpenAddProduct(false)}
      >
        <SheetContent
          side="right"
          className="overflow-auto max-w-md w-full bg-white dark:bg-[#1A1A2E] p-6 shadow-xl border-l border-gray-200 dark:border-gray-700"
        >
          <SheetHeader>
            <SheetTitle className="text-2xl font-semibold text-black dark:text-white text-center">
              Add New Product
            </SheetTitle>
          </SheetHeader>
          {isAddingProduct ? (
            <div className="space-y-4 mt-6">
              <Skeleton className="w-[250px] h-[30px] rounded-md" />
              <Skeleton className="w-[200px] h-[20px] rounded-full" />
              <Skeleton className="w-[300px] h-[20px] rounded-full" />
            </div>
          ) : (
            <>
              <ImageUpload file={imageFile} setFile={setImageFile} currentEditedId={currentEditedId} />
              <div className="py-6">
                <CommonForm
                  formData={formData}
                  onSubmit={onSubmit}
                  fromCotrols={addProductFormElement}
                  setFormData={setFormData}
                  buttonText={currentEditedId ? "Update Product" : "Add New"}
                />
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default AdminProducts;
