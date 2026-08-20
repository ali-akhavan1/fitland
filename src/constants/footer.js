const footerLinks = [
  {
    id: 1,
    title: "محبوب‌ترین‌ها",
    links: [
      { id: 1, label: "لباس مردانه", href: "/?category=men" },
      { id: 2, label: "کفش فوتبال", href: "/?category=football-shoes" },
      { id: 3, label: "دوچرخه", href: "/?category=bike" },
      { id: 4, label: "لباس زنانه", href: "/?category=women" },
    ],
  },
  {
    id: 2,
    title: "خدمات مشتریان",
    links: [
      { id: 1, label: "سوالات متداول", href: "/faq" },
      { id: 2, label: "حریم خصوصی", href: "/privacy" },
      { id: 3, label: "گزارش ایراد در سایت", href: "/bug-report" },
      { id: 4, label: "شرایط بازگرداندن محصول", href: "/faq?category=return" },
    ],
  },
  {
    id: 3,
    title: "راهنمای خرید",
    links: [
      { id: 1, label: "راهنمای ثبت سفارش", href: "/faq?category=order" },
      { id: 2, label: "شیوه های پرداخت", href: "/faq?category=payment" },
      { id: 3, label: "نحوه ارسال سفارش ها", href: "/faq?category=delivery" },
      {
        id: 4,
        label: "نحوه پیگیری محصول",
        href: "/faq?category=order-tracking",
      },
    ],
  },
  {
    id: 4,
    title: "اطلاعات تماس",
    links: [
      {
        id: 1,
        href: null,
        label: "نشانی  تهران - تجریش - خیابان سالور",
        info: null,
      },
      {
        id: 2,
        href: "tel:021-3456789",
        label: "شماره تماس",
        info: "021-3456789",
      },
      {
        id: 3,
        href: "mailto:info@fitland.com",
        label: "پست الکترونیک",
        info: "info@fitland.com",
      },
      {
        id: 4,
        href: null,
        label: "ساعت کاری  شنبه تا چهارشنبه 9 تا 17",
        info: null,
      },
    ],
  },
];

export default footerLinks;
