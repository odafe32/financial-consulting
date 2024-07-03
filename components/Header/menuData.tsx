import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/about",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  
  {
    id: 2.4,
    title: "Services ",
    newTab: false,
    path: "/services",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
     
      {
        id: 35,
        title: "Testimonies",
        newTab: false,
        path: "/testimonial",

      },
      {
        id: 35.1,
        title: "Faqs",
        newTab: false,
        path: "/faqs",
      },
   
    ],
  },

  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
