function ColorsFilter() {
  return (
    <div className="flex-ic gap-2">
      {Array(7)
        .fill("#FF208B")
        .map((color, index) => (
          <span
            key={index}
            className="size-6 rounded-full cursor-pointer"
            style={{ backgroundColor: color }}
          ></span>
        ))}
    </div>
  );
}

export default ColorsFilter;
