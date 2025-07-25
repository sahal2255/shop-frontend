import { House, LogOut, Menu, ShoppingCart, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SheetTrigger, Sheet, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewMenuItems } from "@/config/AllConfig";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logOutUser } from "@/store/auth-slice";
import CartWrapper from "./CartWrapper";
import { fetchCartItems } from "@/store/user/cart-slice";

// Navigation Menu Items
const MenuItems = () => (
  <nav className="flex flex-col lg:flex-row lg:items-center gap-6 text-sm font-medium">
    {shoppingViewMenuItems.map((item) => (
      <Link
        key={item.id}
        to={item.to}
        className="hover:text-primary transition-colors"
      >
        {item.label}
      </Link>
    ))}
  </nav>
);

// Right Section with Cart and Avatar
const HeaderRightSection = ({ user, navigate, handleLogout, openCart, setOpenCart ,cartItems}) => (
  
  <div className="flex items-center gap-4">
    <Sheet open={openCart} onOpenChange={()=>setOpenCart(false)}>

    <Button variant="outline" size="icon" onClick={()=>setOpenCart(true)}>
      <ShoppingCart className="w-6 h-6" />
      <span className="sr-only">User Cart</span>
    </Button>
    <CartWrapper cartItems={cartItems&& cartItems.populateCartItems && cartItems.populateCartItems.length >0 ? cartItems.populateCartItems:[] }/>
    </Sheet>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="bg-black cursor-pointer">
          <AvatarFallback className="bg-black text-white font-bold uppercase">
            {user?.email?.[0] || "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" className="w-56">
        <DropdownMenuLabel>Logged in as {user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/shop/account")}>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

// Main Header Component
const ShoppingHeader = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { cartItems }=useSelector((state)=>state.shopCart)

  const [openCart,setOpenCart]=useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutUser());
  };
  useEffect(()=>{
    dispatch(fetchCartItems(user?.id))
  },[dispatch])
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          to="/shop/home"
          className="flex items-center gap-2 text-lg font-bold text-gray-900"
        >
          <House className="h-5 w-5" />
          ECommerce
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs py-10 items-center text-center">
            <MenuItems />
            {isAuthenticated ? (
              <div className="mt-8">
                <HeaderRightSection
                  user={user}
                  navigate={navigate}
                  handleLogout={handleLogout}
                  openCart={openCart}
                  setOpenCart={setOpenCart}
                  cartItems={cartItems && cartItems.items && cartItems.items.length >0 ? cartItems.items :[]}
                />
              </div>
            ):(
              <Button variant='default' onClick={()=>navigate('/auth/login')}>
                Login 
              </Button>
            )
            }
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <MenuItems />
        </div>

        {/* Right Section */}
        {isAuthenticated ? (
          <div className="hidden md:flex">
            <HeaderRightSection
              user={user}
              navigate={navigate}
              handleLogout={handleLogout}
              openCart={openCart}
              setOpenCart={setOpenCart}
              cartItems={cartItems}
            />
          </div>
        ):(
          <Button variant='default' onClick={()=>navigate('/auth/login')}>
            Login
          </Button>
        )
        }
      </div>
    </header>
  );
};

export default ShoppingHeader;
