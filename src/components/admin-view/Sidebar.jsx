import React, { Fragment } from "react";
import { ChartNoAxesCombined } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { adminSideMenuItems } from "@/config/AllConfig";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
const MenuItems = ({setOpen}) => {
  const navigate=useNavigate()
  return <nav className="mt-8 flex flex-col gap-2">
  {adminSideMenuItems.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-muted transition"
      onClick={() => {
        navigate(item.path) 
        setOpen ? setOpen(false):null
      }

      }
    >
      <item.icon className="w-5 h-5 text-muted-foreground" />
      <span className="text-lg font-medium text-foreground">{item.label}</span>
    </div>
  ))}
</nav>
};
const Sidebar = ({open,setOpen}) => {
  const navigate = useNavigate();
  console.log("admin sidebar component");
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className='w-64'>
          <div className="flex flex-col h-full">
            <SheetHeader className='border-b'>
              <SheetTitle className='flex gap-2 mt-5 mb-4'>
              <ChartNoAxesCombined size={30} />
                <span>Admin Panel</span>
                </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen}/>
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden md:flex w-64 flex-col border-r bg-background p-6 shadow-sm">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2"
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
};

export default Sidebar;
