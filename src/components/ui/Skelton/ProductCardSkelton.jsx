function ProductCardSkelton() {
  return (
    <article className="flex gap-6 md:flex-col md:gap-4 rounded-medium bg-f9f9f9 border border-skelton animate-pulse select-none overflow-hidden">
      <div className="w-35/100 md:w-full h-37.5 md:h-70.5 shrink-0 bg-skelton"></div>

      <div className="w-65/100 md:w-full flex flex-col md:justify-between gap-3 py-3 pl-2 pb-4 md:px-3 md:pt-0">
        <div className="flex justify-between items-start h-8 gap-3 bg-skelton rounded-small"></div>

        <span className="h-4.5 md:h-4.5 bg-skelton rounded-small"></span>

        <div className="h-5 md:h-5 flex-ic gap-1 bg-skelton rounded-small"></div>
      </div>
    </article>
  );
}

export default ProductCardSkelton;
