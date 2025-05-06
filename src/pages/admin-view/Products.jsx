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
import { addNewProduct, fetchAllProducts } from "@/store/admin/product-slice";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const { productList, isLoading, isAddingProduct } = useSelector(
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
        } else {
          toast.error(data.payload);
        }
      });
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log("product list", productList);
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenAddProduct(true)}>Add New Product</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4  ">
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
                <ImageUpload file={imageFile} setFile={setImageFile} />
                <div className="py-6">
                  <CommonForm
                    formData={formData}
                    onSubmit={onSubmit}
                    fromCotrols={addProductFormElement}
                    setFormData={setFormData}
                    buttonText="Add New"
                  />
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default AdminProducts;
