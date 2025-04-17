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