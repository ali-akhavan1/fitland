function DynamicFilters({ itemsClass = "", options = [], slug }) {
  console.log(slug);

  if (slug === "color") {
    return (
      <div
        className={`flex-ic gap-2 flex-wrap px-1 *:shadow-[0_0_4px_rgba(0,0,0,0.2)] ${itemsClass}`}
      >
        {options.map((option) => (
          <span
            key={option.value}
            className="rounded-full size-6 cursor-pointer"
            style={{ background: option.hex }}
          ></span>
        ))}
      </div>
    );
  }

  if (slug === "size") {
    return (
      <div className={`grid grid-cols-3 gap-2 *:cursor-pointer ${itemsClass}`}>
        {options.map((option) => (
          <span
            className="flex-center h-6 text-xs rounded-sm bg-ededed"
            key={option.value}
          >
            {option.label}
          </span>
        ))}
      </div>
    );
  }

  if (slug === "brand") {
    return (
      <div
        className={`grid lg:grid-cols-2 xl:grid-cols-3 gap-y-2.5 gap-x-3 max-h-26.25 overflow-auto font-IRANSansX-Medium *:flex-center *:cursor-pointer ${itemsClass}`}
      >
        {options.map((option) => (
          <span
            className="flex-center h-7 text-center text-[10px] px-1 rounded-sm bg-ededed"
            key={option.value}
          >
            {option.label}
          </span>
        ))}
      </div>
    );
  }

  // return (
  //   <div
  //     className={`grid grid-cols-3 *:flex-center gap-2 *:bg-ededed  *:rounded-sm *:cursor-pointer ${itemsClass}`}
  //   >
  //     {items.map((option) => (
  //       <span key={option.value}>{option.label}</span>
  //     ))}
  //   </div>
  // );
}

export default DynamicFilters;
