const menus = [
  { id: 1, label: "خانه", icon: "home", href: "/", submenus: null },
  {
    id: 2,
    label: "دسته‌بندی ها",
    icon: "shop",
    href: null,
    submenus: [
      { id: 1, label: "لباس مردانه", href: "/products?category=men" },
      { id: 2, label: "لباس زنانه", href: "/products?category=women" },
      { id: 3, label: "لباس بچگانه", href: "/products?category=children" },
      { id: 4, label: "لوازم ورزشی", href: "/products?category=equipments" },
      { id: 5, label: "شیکر و چاگ", href: "/products?category=shaker" },
    ],
  },
  {
    id: 3,
    label: "جدیدترین محصولات",
    icon: "star",
    href: "/products?sort=newest",
    submenus: null,
  },
  {
    id: 4,
    label: "پرفروش ترین محصولات",
    icon: "award",
    href: "/products?sort=bestSelling",
    submenus: null,
  },
  {
    id: 5,
    label: "تخفیفات ویژه",
    icon: "flash",
    href: "/products?hasDiscount=true",
    submenus: null,
  },
];

export default menus;
