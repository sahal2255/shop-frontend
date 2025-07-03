import { fromTheme } from "tailwind-merge"
import {LayoutDashboard,ShoppingBasket,ShoppingBag,Users} from 'lucide-react'
export const registerFromControls=[
    {
        name:'userName',
        label:'User Name',
        placeholder:'Enter your user name',
        componentType:'input',
        type:'text',
    },
    {
        name:'email',
        label:'Email',
        placeholder:'Enter your  email',
        componentType:'input',
        type:'email',
    },
    {
        name:'password',
        label:'Password',
        placeholder:'Enter your  password',
        componentType:'input',
        type:'password',
    }
]
export const loginFromControls=[
    {
        name:'email',
        label:'Email',
        placeholder:'Enter your  email',
        componentType:'input',
        type:'email',
    },
    {
        name:'password',
        label:'Password',
        placeholder:'Enter your  password',
        componentType:'input',
        type:'password',
    }
]

export const adminSideMenuItems=[
    {
        id:'dashbaord',
        label:'Dashboard',
        path:'/admin/dashboard',
        icon:LayoutDashboard 
    },
    {
        id:'products',
        label:'Products',
        path:'/admin/products',
        icon:ShoppingBasket 
    },
    {
        id:'orders',
        label:'Orders',
        path:'/admin/orders',
        icon:ShoppingBag 
    },
    {
        id:'users',
        label:'Users',
        path:'/admin/users',
        icon:Users 
    }
]

export const addProductFormElement = [
    {
      label: 'Proudct Name',
      name: 'productName',
      componentType: 'input',
      type: 'text',
      placeholder: 'Enter Product Title'
    },
    {
      label: 'Description',
      name: 'description',
      componentType: 'input',
      type: 'text',
      placeholder: 'Enter Product Description'
    },
    {
      label: 'Category',
      name: 'category',
      componentType: 'select',
      options: [
        { id: 'men', label: 'Men' },
        { id: 'women', label: 'Women' },
        { id: 'kids', label: 'Kids' },
        { id: 'footwear', label: 'Footwear' }
      ]
    },
    {
      label: 'Brand',
      name: 'brand',
      componentType: 'select',
      options: [
        { id: 'nike', label: 'Nike' },
        { id: 'adidas', label: 'Adidas' },
        { id: 'puma', label: 'Puma' },
        { id: 'zara', label: 'Zara' },
        { id: 'uniqlo', label: 'Uniqlo' },
        { id: 'h&m', label: 'H&M' }
      ]
    },
    {
      label: 'Price',
      name: 'price',
      componentType: 'input',
      type: 'number',
      placeholder: 'Enter Product Price'
    },
    {
      label: 'Total Stock',
      name: 'totalStock',
      componentType: 'input',
      type: 'number',
      placeholder: 'Enter Total Stock'
    },
    {
      label: 'Sale Price',
      name: 'salePrice',
      componentType: 'input',
      type: 'number',
      placeholder: 'Enter Sale Price'
    }
  ];


  export const shoppingViewMenuItems=[
    {
      id:'home',
      label:'Home',
      to:'/shop/home'
    },
    {
      id:'men',
      label:'Men',
      to:'/shop/products'
    },
    {
      id:'women',
      label:'Women',
      to:'/shop/products'
    },
    {
      id:'kids',
      label:'Kids',
      to:'/shop/products'
    },
    {
      id:'watch',
      label:'Watch',
      to:'/shop/products'
    },
    {
      id:'accessories',
      label:'Accessories',
      to:'/shop/products'
    },
  ]


  export const filterOptions = {
    category: [
      { id: 'men', label: 'Men' },
      { id: 'women', label: 'Women' },
      { id: 'kids', label: 'Kids' },
      { id: 'footwear', label: 'Footwear' },
      { id: 'watches', label: 'Watches' },
      { id: 'accessories', label: 'Accessories' },
    ],
    brand: [
      { id: 'nike', label: 'Nike' },
      { id: 'adidas', label: 'Adidas' },
      { id: 'puma', label: 'Puma' },
      { id: 'reebok', label: 'Reebok' },
      { id: 'levis', label: "Levi's" },
      { id: 'hm', label: 'H&M' },
      { id: 'fossil', label: 'Fossil' },
      { id: 'casio', label: 'Casio' },
      { id: 'boat', label: 'Boat' },
      { id: 'titan', label: 'Titan' },
    ],
  };
  
  export const sortByOptions = [
  { id: "default", label: "Default" },
  { id: "priceLowToHigh", label: "Price: Low to High" },
  { id: "priceHighToLow", label: "Price: High to Low" },
  { id: "nameatoz", label: "Name A-Z" },
  { id: "nameztoa", label: "Name Z-A" },
]