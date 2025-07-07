import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { IndianRupee, Star, StarIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Input } from "../ui/input";

const SingleProductDetails = ({ open, setOpen, product }) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="grid grid-cols-2 gap-6 max-w-[90vh] sm:max-w-[80vh] lg:max-w-[90vh]">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={product.imageFile}
            alt={product.productName}
            width={600}
            height={600}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="grid gap-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {product.productName}
            </h2>
            <p className="text-sm text-muted-foreground mb-3">
              {product.description}
            </p>

            <div className="flex gap-2 mb-3">
              <Badge variant="secondary">{product.category}</Badge>
              <Badge>{product.brand}</Badge>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-bold text-green-600 flex items-center">
                <IndianRupee className="h-4 w-4 mr-1" />
                {product.salePrice}
              </span>
              {product.price !== product.salePrice && (
                <span className="line-through text-muted-foreground text-sm">
                  ₹{product.price}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
              </div>
              <span className="text-muted-forground">(4.5)</span>
            </div>
            <p className="text-sm mb-4">
              <strong>Stock:</strong>{" "}
              {parseInt(product.totalStock) > 0
                ? `${product.totalStock} available`
                : "Out of stock"}
            </p>

            <Button
              disabled={parseInt(product.totalStock) <= 0}
              className="w-full"
            >
              {parseInt(product.totalStock) > 0
                ? "Add to Cart"
                : "Out of Stock"}
            </Button>
          </div>
          <Separator />
          {/* Reviews Section */}
          <div className="max-h-[300px] overflow-auto">
            <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 ">
                  <div className="felx items-center gap-2">
                    <h4 className="font-bold">sahla</h4>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                  </div>
                  <p className=" text-muted-foreground ">
                    This is awsome product
                  </p>
                </div>
              </div>
               <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 ">
                  <div className="felx items-center gap-2">
                    <h4 className="font-bold">sahla</h4>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                  </div>
                  <p className=" text-muted-foreground ">
                    This is awsome product
                  </p>
                </div>
              </div>
               <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 ">
                  <div className="felx items-center gap-2">
                    <h4 className="font-bold">sahla</h4>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                  </div>
                  <p className=" text-muted-foreground ">
                    This is awsome product
                  </p>
                </div>
              </div>
                  {/* comment section  */}
                <div className="mt-6 flex gap-2">
                    <Input placeholder='Add a review'/>
                    <Button>Submit</Button>
                </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SingleProductDetails;
