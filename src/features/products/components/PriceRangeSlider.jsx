import { useEffect, useState } from "react";

import { formatPrice } from "@/utils/helper";

function PriceRangeSlider({ min, max, gap = 100_000, step = 50_000 }) {
  const stepCount = Math.ceil((max - min) / step);

  const indexToPrice = (index) => {
    return Math.min(min + index * step, max);
  };

  const priceToIndex = (price) => {
    if (price >= max) {
      return stepCount;
    }

    return Math.round((price - min) / step);
  };

  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(stepCount);

  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const [minInputValue, setMinInputValue] = useState(formatPrice(minValue));
  const [maxInputValue, setMaxInputValue] = useState(formatPrice(maxValue));

  useEffect(() => {
    // console.log("minVal ", minValue);
    // console.log("maxVal ", maxValue);
  }, [minInputValue, maxInputValue]);

  function handleMinChange(e) {
    const index = Number(e.target.value);
    const nextValue = indexToPrice(index);

    if (nextValue > maxValue - gap) {
      return;
    }

    setMinIndex(index);
    setMinValue(nextValue);
    setMinInputValue(formatPrice(nextValue));
  }

  function handleMaxChange(e) {
    const index = Number(e.target.value);
    const nextValue = indexToPrice(index);

    if (nextValue < minValue + gap) {
      return;
    }

    setMaxIndex(index);
    setMaxValue(nextValue);
    setMaxInputValue(formatPrice(nextValue));
  }

  const handleMinInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (!value) {
      return setMinInputValue("");
    }
    const formattedValue = formatPrice(value);
    setMinInputValue(formattedValue);
  };

  const handleMaxInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (!value) {
      return setMaxInputValue("");
    }
    const formattedValue = formatPrice(value);
    setMaxInputValue(formattedValue);
  };

  const handleMinInputBlur = () => {
    if (!minInputValue) {
      setMinInputValue(formatPrice(minValue));
      return;
    }

    const value = Number(minInputValue.replace(/,/g, ""));

    if (value < min || value > max) {
      setMinInputValue(formatPrice(minValue));
      return;
    }

    const clampedValue = Math.min(value, maxValue - gap);
    const index = priceToIndex(clampedValue);
    const nextValue = indexToPrice(index);

    console.log(nextValue);

    setMinIndex(index);
    setMinValue(nextValue);
    setMinInputValue(formatPrice(nextValue));
  };

  const handleMaxInputBlur = () => {
    if (!maxInputValue) {
      setMaxInputValue(formatPrice(maxValue));
      return;
    }
    const value = Number(maxInputValue.replace(/,/g, ""));

    if (value < min || value > max) {
      setMaxInputValue(formatPrice(maxValue));
      return;
    }

    const clampedValue = Math.max(value, minValue + gap);
    const index = priceToIndex(clampedValue);
    const nextValue = indexToPrice(index);

    setMaxIndex(index);
    setMaxValue(nextValue);
    setMaxInputValue(formatPrice(nextValue));
  };

  const handleMinMouseUp = () => {};

  const handleMaxMouseUp = () => {};

  const minPercent = (minIndex / stepCount) * 100;
  const maxPercent = (maxIndex / stepCount) * 100;

  return (
    <div className="space-y-6 relative">
      <div className="labels space-y-4">
        <div className="flex-between gap-3 text-sm">
          <label className="shrink-0">یبشترین</label>
          <input
            type="text"
            inputMode="numeric"
            onChange={handleMaxInputChange}
            onBlur={handleMaxInputBlur}
            value={maxInputValue}
            placeholder="وارد کنید"
            className="w-35 xl:w-auto h-8 px-4.5 text-xs rounded-small bg-ededed placeholder:text-868686"
          />
        </div>
        <div className="flex-between gap-3 text-sm">
          <label className="shrink-0">کمترین</label>
          <input
            type="text"
            inputMode="numeric"
            onChange={handleMinInputChange}
            onBlur={handleMinInputBlur}
            value={minInputValue}
            placeholder="وارد کنید"
            className="w-35 xl:w-auto h-8 px-4.5 text-xs rounded-small bg-ededed placeholder:text-868686"
          />
        </div>
      </div>

      <div className="range-wrapper relative  xl:w-55.75 h-4 mx-auto">
        <div className="track w-full h-1 absolute-center rounded-full bg-cbcbcb">
          <div
            style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
            className="range-progress absolute top-0 h-full rounded-full bg-secondary"
          ></div>
        </div>

        <input
          dir="ltr"
          id="min"
          type="range"
          min={0}
          max={stepCount}
          step={1}
          value={minIndex}
          onChange={handleMinChange}
          onMouseUp={handleMinMouseUp}
          className="range-input z-10"
        />
        <input
          dir="ltr"
          id="max"
          type="range"
          min={0}
          max={stepCount}
          step={1}
          value={maxIndex}
          onChange={handleMaxChange}
          onMouseUp={handleMaxMouseUp}
          className="range-input z-20"
        />
      </div>

      <div className="absolute -bottom-4.5 w-full flex-between">
        <span className="text-[10px]">Max</span>
        <span className="text-[10px]">Min</span>
      </div>
    </div>
  );
}

export default PriceRangeSlider;
