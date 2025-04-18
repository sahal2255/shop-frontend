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
      name: 'productname',
      componentType: 'input',
      type: 'text',
      placeholder: 'Enter Product Title'
    },
    {
        label: 'Product Image',
        name: 'image',
        componentType: 'file',
        type: 'file',
        accept: 'image/*',
        placeholder: 'Upload Product Image'
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
  