import ImageUpload from "@/components/admin-view/Image-uplaod";
import CommonForm from "@/components/common/Form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElement } from "@/config/AllConfig";
import React, { Fragment, useState } from "react";

const initialFormdata = {
  image: "",
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  sellPrice: "",
  totalStock: "",
};
const AdminProducts = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [formData, setFormData] = useState(initialFormdata);
  const [imageFile,setImageFile]=useState(null)
  const [uploadedImageUrl,setUploadedImageUrl]=useState('')
  
  
  const onSubmit = () => {};

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
            <ImageUpload file={imageFile} setFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl}/>
            <div className="py-6">
              <CommonForm
                formData={formData}
                onSubmit={onSubmit}
                fromCotrols={addProductFormElement}
                setFormData={setFormData}
                buttonText="Add"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default AdminProducts;
