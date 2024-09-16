import { LuLayoutDashboard } from 'react-icons/lu';
import { TbPaperBag } from 'react-icons/tb';
import { RiVerifiedBadgeLine } from 'react-icons/ri';

export const registerFormControls = [
  {
    name: 'userName',
    label: 'userName',
    type: 'text',
    placesholder: 'Enter you User Name',
    componentType: 'input',
  },
  {
    name: 'email',
    label: 'email',
    type: 'text',
    placesholder: 'Enter you Email',
    componentType: 'input',
  },
  {
    name: 'password',
    label: 'password',
    type: 'password',
    placesholder: 'Enter you password',
    componentType: 'input',
  },
];

export const loginFormControls = [
  {
    name: 'email',
    label: 'email',
    type: 'text',
    placesholder: 'Enter you Email',
    componentType: 'input',
  },
  {
    name: 'password',
    label: 'password',
    type: 'password',
    placesholder: 'Enter you password',
    componentType: 'input',
  },
];

export const adminSidebarMenuItems = [
  {
    id: 'dashboard',
    label: 'Dasboard',
    path: '/admin/dashboard',
    icon: LuLayoutDashboard,
  },
  {
    id: 'products',
    label: 'Products',
    path: '/admin/products',
    icon: TbPaperBag,
  },
  {
    id: 'orders',
    label: 'Orders',
    path: '/admin/orders',
    icon: RiVerifiedBadgeLine,
  },
];

export const addProductFormElements = [
  {
    label: 'Title',
    name: 'title',
    componentType: 'input',
    type: 'text',
    placeholder: 'Enter product title',
  },
  {
    label: 'Description',
    name: 'description',
    componentType: 'textarea',
    placeholder: 'Enter product description',
  },
  {
    label: 'Category',
    name: 'category',
    componentType: 'select',
    options: [
      { id: 'men', label: 'Men' },
      { id: 'women', label: 'Women' },
      { id: 'kids', label: 'Kids' },
      { id: 'accessories', label: 'Accessories' },
      { id: 'footwear', label: 'Footwear' },
    ],
  },
  {
    label: 'Brand',
    name: 'brand',
    componentType: 'select',
    options: [
      { id: 'nike', label: 'Nike' },
      { id: 'adidas', label: 'Adidas' },
      { id: 'puma', label: 'Puma' },
      { id: 'levi', label: "Levi's" },
      { id: 'zara', label: 'Zara' },
      { id: 'h&m', label: 'H&M' },
    ],
  },
  {
    label: 'Price',
    name: 'price',
    componentType: 'input',
    type: 'number',
    placeholder: 'Enter product price',
  },
  {
    label: 'Sale Price',
    name: 'salePrice',
    componentType: 'input',
    type: 'number',
    placeholder: 'Enter sale price (optional)',
  },
  {
    label: 'Total Stock',
    name: 'totalStock',
    componentType: 'input',
    type: 'number',
    placeholder: 'Enter total stock',
  },
];
